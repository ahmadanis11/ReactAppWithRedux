import React from "react";

import {Table, Input, Spin} from "antd";
import { Loader} from "../Loader";

export const DataTable = ({
  data = [],
  columns = [],
  className = "",
  isLoading,
  totalCount,
  currentPage,
  handlePageChange,
  pageSize,
  handleSearch
}) => {


  return (
    <div>
      <div>
        <div>
          <div>
            <Input
              placeholder="Search"
              onChange={handleSearch}
            />
          </div>
        </div>
        {isLoading ? <Spin /> :
          <Table
            id={'table-ant'}
            dataSource={data}
            columns={columns}
            responsive={true}
            pagination={{
              current:currentPage,
              total: totalCount,
              pageSize: pageSize,
              onChange: handlePageChange,
            }
            }
            rowKey="name"
          />
        }
      </div>
    </div>
  );
};

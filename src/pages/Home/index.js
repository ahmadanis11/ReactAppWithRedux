import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from '../../components/Table';
import { ENDPOINTS, REQUEST_TYPES } from "../../services/api/middleware/url";
import {getListAPI, getVehicleListAPI} from "../../services/api/home";
import { Columns } from '../../utils/constant';
import VehicleModal from '../../components/VehicleModal';
import {GetVehicleListAction} from "../../store/Actions/peopleAction";
import {Spin} from "antd";

const Homepage = () => {
  const dispatch = useDispatch();
  const peoples = useSelector((state) => state?.PeopleReducer?.peoples);
  const vehicles = useSelector(state => state?.PeopleReducer?.vehicles)
  const totalCount = useSelector((state) => state?.PeopleReducer?.totalCount);
  const isLoading = useSelector((state) => state?.ApiCallStatus?.isLoading);
  const apiCallFor = useSelector((state) => state?.ApiCallStatus?.apiCallFor);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);


  useEffect(() => {
    fetchPeopleData(currentPage, pageSize, searchQuery);
  }, [currentPage, pageSize, searchQuery]);

  const fetchPeopleData = (page, size, query) => {
    try {
      const searchParam = query ? `&search=${query}` : "";
      dispatch(
        getListAPI(
          REQUEST_TYPES.GET,
          `${ENDPOINTS.GET_PEOPLE}?page=${page}&pageSize=${size}${searchParam}`,
          'people'
        )
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const showVehicles = (record) => {
    if (record.vehicles.length === 0) {
      dispatch(GetVehicleListAction([]));
      setIsModalVisible(true);
      return;
    }

    dispatch(getVehicleListAPI(REQUEST_TYPES.GET,record.vehicles, "vehicles")).then(() => {
      setIsModalVisible(true);
    });
  };

  const enhancedData = peoples.map(person => ({ ...person, showVehicles }));

  return (
    <div>
      <VehicleModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        vehicles={vehicles}
        isLoading={isLoading}
        apiCallFor={apiCallFor}
      />
        <>
          <DataTable
            data={enhancedData || []}
            columns={Columns}
            totalCount={totalCount}
            currentPage={currentPage}
            pageSize={pageSize}
            handlePageChange={handlePageChange}
            handleSearch={handleSearch}
            isLoading={isLoading}
          />
        </>
    </div>
  );
};

export default Homepage;

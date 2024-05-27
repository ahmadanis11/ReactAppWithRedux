import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from '../../components/Table';
import { ENDPOINTS, REQUEST_TYPES } from "../../services/api/middleware/url";
import { getListAPI, getVehicleListAPI } from "../../services/api/home";
import { Columns } from '../../utils/constant';
import VehicleModal from '../../components/VehicleModal';
import { GetVehicleListAction } from "../../store/Actions/peopleAction";
import { Button, Spin } from "antd";

const Homepage = () => {
  const dispatch = useDispatch();
  const peoples = useSelector((state) => state?.PeopleReducer?.peoples);
  const vehicles = useSelector(state => state?.PeopleReducer?.vehicles);
  const totalCount = useSelector((state) => state?.PeopleReducer?.totalCount);
  const isLoading = useSelector((state) => state?.ApiCallStatus?.isLoading);
  const apiCallFor = useSelector((state) => state?.ApiCallStatus?.apiCallFor);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loadingVehicle, setLoadingVehicle] = useState({});

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
    const { url } = record;
    setLoadingVehicle(prev => ({ ...prev, [url]: true }));

    if (record.vehicles.length === 0) {
      dispatch(GetVehicleListAction([]));
      setIsModalVisible(true);
      setLoadingVehicle(prev => ({ ...prev, [url]: false }));
      return;
    }

    dispatch(getVehicleListAPI(REQUEST_TYPES.GET, record.vehicles, "vehicles"))
      .then(() => {
        setIsModalVisible(true);
      })
      .finally(() => {
        setLoadingVehicle(prev => ({ ...prev, [url]: false }));
      });
  };

  const enhancedData = peoples.map(person => ({
    ...person,
    showVehicles,
    loading: loadingVehicle[person.url] || false,
  }));

  const columnWithAction = [
    ...Columns,
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button onClick={() => record.showVehicles(record)} loading={record.loading}>
          {record.loading ? "Loading..." : "Show vehicles"}
        </Button>
      ),
    },
  ];

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
          columns={columnWithAction}
          totalCount={totalCount}
          currentPage={currentPage}
          pageSize={pageSize}
          handlePageChange={handlePageChange}
          handleSearch={handleSearch}
          isLoading={isLoading}
          apiCallFor={apiCallFor}
        />
      </>
    </div>
  );
};

export default Homepage;

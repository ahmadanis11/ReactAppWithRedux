import {GET_ALL_PEOPLE, GET_VEHICLE_BY_PEOPLE} from './Types'

export const GetPeopleListAction = (data) => ({
  type: GET_ALL_PEOPLE,
  data,
});

export const GetVehicleListAction = (data) => ({
  type: GET_VEHICLE_BY_PEOPLE,
  data,
});
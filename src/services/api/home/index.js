import { toast } from 'react-toastify';
import { apiCaller } from '../middleware/api-caller';
import {ApiFulfilledAction, ApiRejectedAction, ApiRequestedAction} from "../../../store/Actions/ApiCallStatus";
import {GetPeopleListAction, GetVehicleListAction} from "../../../store/Actions/peopleAction";

export const getListAPI = (method, url, apiCallFor) => {
  return async (dispatch) => {
    dispatch(ApiRequestedAction({ apiCallFor }))
    const myJson = await apiCaller({
      method,
      url,
    })
    if (myJson && (myJson?.status === 200) | (myJson?.status === 201)) {
      const { data } = myJson
      dispatch(GetPeopleListAction(data))
      dispatch(ApiFulfilledAction({apiCallFor: apiCallFor, message: '',}))
    } else {
      const message = (myJson?.data?.message  || myJson?.response?.data?.message) ?? 'Something went wrong'
      const statusCode =
        (myJson?.response?.data?.message || myJson?.data?.message) ?? 500
      toast.error('Some Thing Went Wrong');
      dispatch(
        ApiRejectedAction({
          statusCode,
          apiCallFor: apiCallFor,
          message,
        }),
      )
    }
  }
}

export const getVehicleListAPI = (method, urls, apiCallFor) => {
  return async (dispatch) => {
    dispatch(ApiRequestedAction({ apiCallFor }));

    try {
      const vehicleRequests = urls.map(url => apiCaller({ method, url }));
      const vehicleResponses = await Promise.all(vehicleRequests);
      const vehicles = vehicleResponses.map(response => response.data);
      dispatch(GetVehicleListAction(vehicles));
      dispatch(ApiFulfilledAction({ apiCallFor, message: '' }));
    } catch (error) {
      const message = error?.response?.data?.message || 'Something went wrong';
      const statusCode = error?.response?.status || 500;
      toast.error(message);
      dispatch(ApiRejectedAction({ statusCode, apiCallFor, message }));
    }
  };
};
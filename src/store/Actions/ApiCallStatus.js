import { API_CALL_REQUESTED, API_CALL_FULFILLED, API_CALL_REJECTED, } from "./Types";

export function ApiRequestedAction(data) {
  return {
    type: API_CALL_REQUESTED,
    payload: {
      apiCallFor: data.apiCallFor,
      isCompleted: false,
      isFailed: false,
      isLoading: true,
      message: data.message,
    },
  };
}

export function ApiFulfilledAction(data) {
  return {
    type: API_CALL_FULFILLED,
    payload: {
      apiCallFor: data.apiCallFor,
      isCompleted: true,
      isFailed: false,
      isLoading: false,
      message: data.message,
    },
  };
}

export function ApiRejectedAction(data) {
  return {
    type: API_CALL_REJECTED,
    payload: {
      statusCode: data.statusCode,
      apiCallFor: data.apiCallFor,
      isCompleted: true,
      isLoading: false,
      isFailed: true,
      message: data.message,
    },
  };
}

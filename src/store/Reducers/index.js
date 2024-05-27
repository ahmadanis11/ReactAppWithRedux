import { combineReducers } from "redux";
import ApiCallStatusReducer from "./ApiCallStatusReducer";
import PeopleReducer from "./PeopleReducer";

const rootReducer = combineReducers({
  ApiCallStatus: ApiCallStatusReducer,
  PeopleReducer:PeopleReducer,
});

export default rootReducer;

import * as ActionType from "../Actions/Types";
import StoreState from "./initialState";
import cloneDeep from "lodash/cloneDeep";


export default function PeopleReducer(
  state = StoreState.people,
  action
) {
  switch (action.type) {
    case ActionType.GET_ALL_PEOPLE:
      let s= cloneDeep(state);
      s.peoples= action.data.results;
      s.totalCount= action.data.count;
      s.next= action.data.next;
      s.previous= action.data.previous;
      return s;
    case ActionType.GET_VEHICLE_BY_PEOPLE:
      let s1= cloneDeep(state);
      s1.vehicles= action.data
      return s1;
    default:
      return state;
  }
}

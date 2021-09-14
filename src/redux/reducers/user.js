import { SET_USER_DATA, LOG_OUT_USER } from "../actionTypes";
const initialState = {
  data: null,
  userData: {},
  status: false,
};
export function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.data,
      };
    case LOG_OUT_USER:
      return {
        ...state,
        userData: {},
      };
    default:
      return state;
  }
}

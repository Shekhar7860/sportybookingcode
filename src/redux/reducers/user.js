import { SET_USER_DATA, LOG_OUT_USER, SET_USER_NAME } from "../actionTypes";
const initialState = {
  data: null,
  userData: {},
  status: false,
  userLabelName: null,
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
    case SET_USER_NAME:
      return {
        ...state,
        userLabelName: action.data,
      };
    default:
      return state;
  }
}

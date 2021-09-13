import { SET_USER_DATA } from "../actionTypes";
const initialState = {
  data: null,
  userData: {},
  status: false,
};
export function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      console.log("s", action);
      return {
        ...state,
        userData: action.data,
      };
    default:
      return state;
  }
}

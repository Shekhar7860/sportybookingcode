import { postApi, getApi, putApi } from "../../services/service";
import { SET_USER_DATA, LOG_OUT_USER } from "../../redux/actionTypes";
export const loginUser = (url, params) => async (dispatch) => {
  const response = await postApi(url, params);
  if (response.status == 200) {
    dispatch(setUserData(response.data));
  }
  return response;
};
export const signUpUser = (url, params) => async (dispatch) => {
  const response = await postApi(url, params);
  return response;
};
export const forgotUserPassword = (url, params) => async (dispatch) => {
  const response = await postApi(url, params);
  return response;
};
export const updateUserProfile = (url, token, params) => async (dispatch) => {
  const response = await putApi(url, token, params);
  return response;
};
export const getUserProfile = (url, token) => async (dispatch) => {
  const response = await getApi(url, token);
  return response;
};
export function clearData(data) {
  return {
    type: LOG_OUT_USER,
    data,
  };
}
export function setUserData(data) {
  return {
    type: SET_USER_DATA,
    data,
  };
}

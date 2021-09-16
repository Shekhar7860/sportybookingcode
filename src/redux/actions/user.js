import { postApi, getApi, putApi } from "../../services/service";
import {
  SET_USER_DATA,
  LOG_OUT_USER,
  SET_USER_NAME,
} from "../../redux/actionTypes";
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
  if (response.status == 200) {
    dispatch(setUserData(response.data));
  }
  return response;
};
export const getUserProfile = (url, token) => async (dispatch) => {
  const response = await getApi(url, token);
  return response;
};

export const sendUserCode = (url, token, params, mode) => async (dispatch) => {
  const response = await getApi(url, token, params, mode);
  return response;
};

export const verifyUserCode = (url, token, params) => async (dispatch) => {
  const response = await putApi(url, token, params);
  return response;
};

export const updatePassword = (url, token, params) => async (dispatch) => {
  const response = await putApi(url, token, params);
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

export function setUserName(data) {
  return {
    type: SET_USER_NAME,
    data,
  };
}

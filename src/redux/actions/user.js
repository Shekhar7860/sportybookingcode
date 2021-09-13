import { postApi, getApi } from "../../services/service";

export const loginUser = (url, params) => async (dispatch) => {
  const response = await postApi(url, params);
  return response;
};
export const signUpUser = (url, params) => async (dispatch) => {
  const response = await postApi(url, params);
  return response;
};
export const getUser = (params) => async (dispatch) => {
  const response = await getApi(params);
  return response;
};

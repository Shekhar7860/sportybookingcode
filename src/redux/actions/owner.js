import { postApiWithHeaders } from "../../services/service";

export const addBank = (url, token, params) => async (dispatch) => {
  const response = await postApiWithHeaders(url, token, params);
  return response;
};

export const uploadDocument = (url, token, params) => async (dispatch) => {
  const response = await postApiWithHeaders(url, token, params);
  return response;
};
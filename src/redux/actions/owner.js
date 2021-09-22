import {
  postApiWithHeaders,
  postImageApi,
  getApi,
} from "../../services/service";

export const addBank = (url, token, params) => async (dispatch) => {
  const response = await postApiWithHeaders(url, token, params);
  return response;
};
export const subscribeMemberShip = (url, token, params) => async (dispatch) => {
  const response = await postApiWithHeaders(url, token, params);
  return response;
};
export const uploadDocument = (url, token, params) => async (dispatch) => {
  const response = await postImageApi(url, token, params);
  return response;
};
export const getCards = (url, token, params) => async (dispatch) => {
  const response = await getApi(url, token, params);
  return response;
};

export const getOwnerFacilities = (url, token, params) => async (dispatch) => {
  const response = await getApi(url, token, params);
  return response;
};

export const addOwnerFacility = (url, token, params) => async (dispatch) => {
  const response = await postApiWithHeaders(url, token, params);
  return response;
};

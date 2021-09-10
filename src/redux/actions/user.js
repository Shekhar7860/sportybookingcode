import { postApi, getApi } from "../../services/service";

export const loginUser = (params) => async (dispatch) => {
  const response = await postApi(params);
  return response;
};
export const getUser = (params) => async (dispatch) => {
  const response = await getApi(params);
  return response;
};

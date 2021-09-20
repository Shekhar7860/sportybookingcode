import { postApiWithHeaders } from "../../services/service";

export const addBank = (url, token, params) => async (dispatch) => {
  const response = await postApiWithHeaders(url, token, params);
  return response;
};

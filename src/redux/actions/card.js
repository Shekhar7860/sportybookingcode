import { postApiWithHeaders } from "../../services/service";

export const saveCard = (url, token, params) => async (dispatch) => {
  const response = await postApiWithHeaders(url, token, params);
  return response;
};

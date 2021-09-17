import { putApi } from "../../services/service";
export const updateNotification = (url, token, params) => async (dispatch) => {
  const response = await putApi(url, token, params);
  return response;
};

import axios from "axios";
import { apiUrl } from "../../src/constants/constants";
export const postApi = (params) => {
  return axios.post(apiUrl + "/profile", { params }).then((response) => {
    return response;
  });
};

export const getApi = (param) => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response;
    });
};

export const getFaceBookData = (token) => {
  return axios
    .get(
      "https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=" +
        token
    )
    .then((response) => {
      return response.data;
    });
};

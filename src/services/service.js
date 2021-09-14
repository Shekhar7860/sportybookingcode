import axios from "axios";
import { apiUrl } from "../../src/constants/constants";
export const postApi = async (url, params) => {
  let obj = {
    ...params,
    role: "1",
  };
  try {
    let x = await axios.post(apiUrl + url, obj);
    return x;
  } catch (error) {
    return error.response;
  }
};

export const getApi = (url, token, params, mode) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  if (params != undefined) {
    if (mode == "email") {
      return axios
        .get(apiUrl + url + "?email=" + params, config)
        .then((response) => {
          return response;
        });
    } else {
      return axios
        .get(apiUrl + url + "?phone_number=" + params, config)
        .then((response) => {
          return response;
        });
    }
  } else {
    return axios.get(apiUrl + url, config).then((response) => {
      return response;
    });
  }
};

export const putApi = async (url, token, params) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  try {
    let x = await axios.put(apiUrl + url, params, config);
    return x;
  } catch (error) {
    return error.response;
  }
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

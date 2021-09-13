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

export const getApi = (url) => {
  // const config = {
  //   headers: {
  //     authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0MywiZmlyc3RfbmFtZSI6ImpqIiwibGFzdF9uYW1lIjoic2R2c2QiLCJmdWxsX25hbWUiOiJqaiBzZHZzZCIsImVtYWlsX3ZlcmlmeV90b2tlbiI6bnVsbCwiZW1haWwiOiJqYXRpbnNoYXJtYTg3NEBnbWFpbC5jb20iLCJjb3VudHJ5X2NvZGUiOiI5MSIsInBob25lX251bWJlciI6ODk3MzY5NzU3MjQsInJvbGUiOiIxIiwic3RhdHVzIjoxLCJnb29nbGVfaWQiOm51bGwsImZhY2Vib29rX2lkIjpudWxsLCJpc19lbWFpbF92ZXJpZmllZCI6MSwic3RyaXBlX2Nvbm5lY3RlZCI6MCwic3RyaXBlX2lkIjpudWxsLCJ3YWxsZXQiOjAsIm93bmVyX3ZlcmlmaWVkIjowLCJyZXNldF9wYXNzX3Rva2VuIjpudWxsLCJwaG9uZV9vdHAiOm51bGwsImVtYWlsX290cCI6bnVsbCwiY2hhbmdlX2VtYWlsIjpudWxsLCJjaGFuZ2VfcGhvbmVfbnVtYmVyIjpudWxsfSwiaWF0IjoxNjMxNTM3NDE5fQ.w6meXE_FYufJwvwEdp7nkHsnZKaSW3tMgMw4UHwKhXg`,
  //   },
  // };
  return axios.get(apiUrl + url).then((response) => {
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

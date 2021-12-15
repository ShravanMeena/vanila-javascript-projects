import axios from "axios";
import { get, ErrorToast } from "./helper";

export const api = (method, data, url) => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL_PROD;

  const authtoken = get("token");

  return new Promise((resolve) => {
    axios({
      method,
      url,
      data,
      headers: {
        authtoken,
      },
    })
      .then((res) => {
        resolve(res);

        if (!res?.data?.status) {
          ErrorToast({ msg: res.data.error });
        }
      })
      .catch((err) => {
        // agr koi backend me kuchh fatta hain to: by akshat
        resolve(err.response);

        // if found 500 or greate error status
        if (err?.response?.status >= 500) {
          ErrorToast({
            msg: "Ooops something went wrong. Please try again after some time!",
          });
        } else {
          // if found 400 error
          ErrorToast({ msg: err?.response?.data?.msg });
        }
      });
  });
};

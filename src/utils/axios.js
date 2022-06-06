import axios from "axios";
import { APIBaseURL } from "./constants";

const instance = axios.create({
  baseURL: APIBaseURL,
  timeout: 1000,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return error;
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error;
  }
);

export default instance;

// axios.ts
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ResponseError } from "./error";
import { BASE_URL } from "@/utils/url";

import store from "@/store";
import { AUTH_ACTIONS } from "@/store/auth";

const instance = axios.create();

const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  config.headers!.Accept = "application/json";
  const access_token = localStorage.getItem("access_token") ?? "";
  if (!(config.url?.includes("/login/") || config.url?.includes("/profile/"))) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  config.baseURL = BASE_URL;
  return config;
};

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  new ResponseError(error);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.log("Axios response status:", response.status);
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.log("Axios response error status:", error.response?.status);
  console.log("first");
  if (error.response?.status === 401) {
    store.dispatch(AUTH_ACTIONS.signOut());
  }

  new ResponseError(error);
  return Promise.reject(error);
};

instance.interceptors.request.use(onRequest, onRequestError);
instance.interceptors.response.use(onResponse, onResponseError);

export default instance;

import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ResponseError } from "./error";
import { BASE_URL } from "@/utils/url";

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
  return response;
};
const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.response?.status === 403) {
  }

  if (error.response?.status === 401) {
    localStorage.removeItem("access_token");
    // localStorage.removeItem("refresh_token");
  }

  new ResponseError(error);
  return Promise.reject(error);
};

instance.interceptors.request.use(onRequest, onRequestError);
instance.interceptors.response.use(onResponse, onResponseError);

export default instance;

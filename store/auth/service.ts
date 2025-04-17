import { AxiosRequestConfig } from "axios";
import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import store from "..";
import { AUTH_ACTIONS } from ".";
import instance from "@/config/axios.config";

interface SignInData {
  username: string;
  password: string;
}
interface SignInResponse {
  access: string;
  refresh: string;
  // Include other properties from the response if needed
}

const SignIn = createAsyncThunk<
  SignInResponse,
  { data?: SignInData },
  { rejectValue: string }
>("user/SignIn", async (data, { rejectWithValue }) => {
  try {
    const isHasToken = localStorage.getItem("access_token");
    const options: AxiosRequestConfig = !isHasToken
      ? { url: "/login/", method: "POST", data: data?.data ?? null }
      : { url: "/profile/", method: "GET", params: {} };

    const response = await instance(options);

    const _data = response.data;

    // Измените на более универсальную проверку
    if (response.status < 200 || response.status >= 300) {
      console.log("Error: Response status is not 2xx, rejecting!");
      return rejectWithValue("Authorization error!");
    }

    // Если токен не найден, сохраняем его в localStorage
    if (!isHasToken) {
      localStorage.setItem("access_token", _data.access);
      localStorage.setItem("refresh_token", _data.refresh);
    }

    return _data; // Возвращаем данные
  } catch (error: any) {
    console.error("Error during login:", error);
    return rejectWithValue(error?.response?.data?.message || "Unknown error");
  }
});

export default SignIn;

export const _signOut = async () => {
  store.dispatch(AUTH_ACTIONS.signOut());
  localStorage.removeItem("access_token");
  localStorage.removeItem("convo_id");
  localStorage.removeItem("user");
  localStorage.removeItem("receiver");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("role");
  window.location.pathname = "/voyti";
};

export const refreshToken = async () => {
  try {
    const refresh_token = localStorage.getItem("refresh_token");

    if (refresh_token) {
      const response = await instance({
        url: "auth/jwt/refresh",
        method: "POST",
        data: { refresh: refresh_token },
      });
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.access);
        store.dispatch(SignIn({}));
      }
    }
  } catch (error) {
    window.location.href = "/voyti";
  }
};

export const logOut = async () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("convo_id");
  localStorage.removeItem("user");
  localStorage.removeItem("receiver");
  localStorage.removeItem("role");
};

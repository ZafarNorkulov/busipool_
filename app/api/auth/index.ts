import store from "@/store";
import { BASE_URL } from "../../../utils/url";
import { AUTH_ACTIONS } from "@/store/auth";

export const loginUser = async (user: any) => {
  const response = await fetch(BASE_URL + "/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      JSON.stringify({ error: errorData, status: response.status }),
    );
  }
  const data = await response.json();
  return data;
};

// register user
export const registerUser = async (user: any) => {
  const response = await fetch(BASE_URL + "/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      JSON.stringify({ error: errorData, status: response.status }),
    );
  }
  if (response.status === 401) {
    store.dispatch(AUTH_ACTIONS.signOut());
  }
  const data = await response.json();
  return data;
};
export const GetRole = async () => {
  const response = await fetch(BASE_URL + "/user/roll/");
  if (!response.ok) return null;
  return await response.json();
};

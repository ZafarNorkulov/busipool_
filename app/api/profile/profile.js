import { BASE_URL } from "@/utils/url";

// get profile api with token
export const getProfile = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/profile/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const profile = await res.json();
    return profile;
  } catch (error) {
    console.log(error);
  }
};

// update profile api with token and formData
export const updateProfile = async (token, data) => {
  try {
    const res = await fetch(`${BASE_URL}/profile/`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    const profile = await res.json();
    return profile;
  } catch (error) {
    console.log(error);
  }
};

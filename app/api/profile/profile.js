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

    return res;
  } catch (error) {
    console.log(error);
  }
};

// get statistics

export const getStatistics = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/statistics/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const statis = await res.json();
    return statis;
  } catch (error) {
    console.log(error);
  }
};
// DeleteAvatae
export const deleteAvatar = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/delete-avatar/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
// GET contacts me
export const getContacts = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/contacts/me/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const contacts = await res.json();
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

// POST contacts me
export const postContacts = async ({ token, data }) => {
  try {
    const res = await fetch(`${BASE_URL}/contacts/me/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const patchContacts = async ({ token, data }) => {
  try {
    const res = await fetch(`${BASE_URL}/contacts/me/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

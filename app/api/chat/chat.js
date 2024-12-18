import { BASE_URL } from "@/utils/url";

export const checkConversation = async ({ owner_id, token }) => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(
      `${BASE_URL}/chat/check-conversation/${owner_id}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const startConvo = async ({ username, token }) => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");
    const myData = { username: username };
    const response = await fetch(`${BASE_URL}/chat/start_convo/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept":"application/json",
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify(myData)
    });

    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getConversationById = async ({ convo_id, token }) => {
  try {
    console.log(BASE_URL);
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(
      `${BASE_URL}/chat/get-conversation/${convo_id}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};

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
    if (response.status === 404) {
      return null; // No conversation found, return null
    }
    if (!response.ok) {
      throw new Error("Conversation check failed");
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const startConvo = async ({ username, token }) => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");
    const myData = { username };
    console.log(JSON.stringify(myData));
    const response = await fetch(`${BASE_URL}/chat/start_convo/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(myData),
    });
    console.log("????????", response);
    if (!response.ok) {
      throw new Error("Conversation start failed");
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getConversations = async (token) => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(`${BASE_URL}/chat/conversations/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};
export const getConversationById = async ({ convo_id, token }) => {
  try {
    if (!convo_id) {
      console.log("convo_id is required but not provided");
      return {};
    }
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(
      `${BASE_URL}/chat/get_conversation/${convo_id}/`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};

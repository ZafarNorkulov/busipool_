import { BASE_URL } from "@/utils/url";

export const checkConversation = async (owner_id) => {
  try {
    console.log(BASE_URL);
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(
      `${BASE_URL}/chat/check-conversation/${owner_id}/`,
    );

    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};

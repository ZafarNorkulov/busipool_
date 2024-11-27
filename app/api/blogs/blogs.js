import { BASE_URL } from "../../../utils/url";

// get blogs from the api with try catch
export const getBlogs = async () => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(`${BASE_URL}/blog/`);
    const data = await response.json();
    if (!response.ok) throw new Error("Failed to fetch data");
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

// get blogs from the api with try catch
export const getBlogWithId = async (id) => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(`${BASE_URL}/blog/${id}/`);

    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};

// get faqs from api with try catch
export const getFaqs = async () => {
  try {
    const res = await fetch(`${BASE_URL}/faq/`);
    const faqs = await res.json();
    return faqs;
  } catch (error) {
    console.log(error);
  }
};

// post subscription to the api with try catch
export const postSubscription = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/subscrible/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const subscription = await res.json();
    return subscription;
  } catch (error) {
    console.log(error);
  }
};

import { BASE_URL } from "../../../utils/url";

// get blogs from the api with try catch
export const getBlogs = async () => {
    try {
        const res = await fetch(`${BASE_URL}/blog/`);
        const blogs = await res.json();
        return blogs;
    } catch (error) {
        console.log(error);
    }
};

// get blogs from the api with try catch
export const getBlogWithId = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/blog/${id}`);
        const blog = await res.json();
        return blog;
    } catch (error) {
        console.log
    }
}

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
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const subscription = await res.json();
        return subscription;
    } catch (error) {
        console.log(error);
    }
};
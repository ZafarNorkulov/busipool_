import { BASE_URL } from "../../../utils/url";

// get all projects
export const getProjects = async (options) => {
  try {
    if (!BASE_URL) {
      console.log("BASE_URL is not defined");
      return [];
    }

    const { isPopular, search, cityRel } = options || {};

    // Query parametrlarini qo'shish



    const url = `${BASE_URL}/project/`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};



// get project by id
export const getProject = async (id) => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(`${BASE_URL}/project/${id}/`);

    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};

// post project api with form data
export const postProject = async (data) => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(`${BASE_URL}/project/`, {
      method: "POST",
      body: data,
    });

    if (!response.ok) throw new Error("Failed to post data");

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};

// get project/category api
export const getProjectCategory = async () => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");
    const response = await fetch(`${BASE_URL}/project/category/`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

// get project/category by id
export const getProjectCategoryById = async (id) => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(`${BASE_URL}/project/category/${id}/`);

    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};


// get /realization/ api
export const getRealization = async () => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(`${BASE_URL}/project/city/realization/`);

    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

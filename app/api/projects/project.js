import { BASE_URL } from "../../../utils/url";

// get all projects
export const getProjects = async (options) => {
  try {
    if (!BASE_URL) {
      console.log("BASE_URL is not defined");
      return [];
    }

    // options.is_active = true;
    const params = new URLSearchParams();

    // Parametrlarni dinamik ravishda qo'shish
    Object.entries(options).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.append(key, value);
      }
    });

    // Only append the query string if there are parameters
    let url = "";

    if (options?.next) {
      if (params.toString()) {
        // Create a new URLSearchParams object from the existing params
        const cleanedParams = new URLSearchParams(params.toString());
        // Remove 'next' from the parameters
        cleanedParams.delete("next");
        cleanedParams.delete("is_active");
        // Construct the final URL with cleaned params
        url = `${options.next}${cleanedParams.toString()}`;
      } else {
        url = options.next;
      }
    } else {
      if (params.toString()) {
        url = `${BASE_URL}/project/?${params.toString()}`;
      } else {
        url = `${BASE_URL}/project/`;
      }
    }

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

// get project by type
export const getProjectBusinessType = async ({ options, id }) => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");
    const params = new URLSearchParams();
    Object.entries(options).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.append(key, value);
      }
    });
    const response = await fetch(
      `${BASE_URL}/project/type/business/${id}/?${params.toString()}`,
    );

    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
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
export const postProject = async ({ formData, token }) => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(`${BASE_URL}/project/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
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
// get project/ыгиcategory api
export const getProjectSubCategory = async () => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");
    const response = await fetch(`${BASE_URL}/project/subcategory/list/`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

// get category by bussines type

export const getProjectCategoryByBussinesType = async () => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");
    const response = await fetch(`${BASE_URL}/project/business/category/`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  } catch (error) {
    console.log(error);
    return [];
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

// sendComment

export const postComment = async (comment, token) => {
  console.log(comment);
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(`${BASE_URL}/comment/project/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(comment),
    });

    if (!response.ok) throw new Error("Failed to post data");
    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getComments = async (id, token) => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(`${BASE_URL}/comments/${id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

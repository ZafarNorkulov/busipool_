import { BASE_URL } from "@/utils/url";

export const getCompanyTypeCategoryByID = async () => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(`${BASE_URL}/project/category/`);

    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};
export const getCompanySubCategoryByType = async (id) => {
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(
      `${BASE_URL}/project/category/subcategory/${id}/`,
    );

    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};
export const getCompanySubCategoryProjects = async ({id}) => {
  console.log(id)
  try {
    if (!BASE_URL) return console.log("BASE_URL is not defined");

    const response = await fetch(
      `${BASE_URL}/project/category/projects/${id}/`,
    );

    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};

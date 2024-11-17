const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// fetch all projects
const fetchProjects = async () => {
  try {
    if (!apiDomain) return [];

    const response = await fetch(`${apiDomain}/projects`);

    if (!response.ok) throw new Error("Failed to fetch data");

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

// fetch single project
const fetchProject = async (id) => {
  try {
    if (!apiDomain) return null;
    const response = await fetch(`${apiDomain}/projects/${id}`);

    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { fetchProjects, fetchProject };

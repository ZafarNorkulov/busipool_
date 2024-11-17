import connectDB from "@/config/database";
import Project from "@/models/Project";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const project = await Project.findById(params.id);

    if (!project) return new Response("Project not found", { status: 404 });

    return new Response(JSON.stringify(project), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

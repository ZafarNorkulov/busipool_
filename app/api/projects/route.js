import connectDB from "@/config/database";
import Project from "@/models/Project";

export const GET = async (request) => {
  try {
    await connectDB();

    const projects = await Project.find({});

    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

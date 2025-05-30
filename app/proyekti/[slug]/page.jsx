import ProjectBySlugComponent from "@/components/projects/projectBySlug";

export const metadata = {
  title: "BUSIPOOL | Подробно о проекте",
  description: "",
  icons: {
    icon: "/rocket.svg",
  },
};

const ProjectPage = () => {
  return <ProjectBySlugComponent />;
};

export default ProjectPage;

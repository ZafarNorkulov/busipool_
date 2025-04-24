import ProjectByIdComponent from "@/components/projects/projectById";

export const metadata = {
  title: "BUSIPOOL | Подробно о проекте",
  description:
    "",
  icons: {
    icon: "/rocket.svg",
  },
};

const ProjectPage = () => {
  return <ProjectByIdComponent />;
};

export default ProjectPage;

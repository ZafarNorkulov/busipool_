import ProjectByIdComponent from "@/components/projects/projectById";

export const metadata = {
  title: "BUSIPOOL | Подробно о проекте",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const ProjectPage = () => {
  return <ProjectByIdComponent />;
};

export default ProjectPage;

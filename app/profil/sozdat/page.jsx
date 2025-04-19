import CreateProjectProfile from "@/components/profile/create";

export const metadata = {
  title: "BUSIPOOL | Создание проекта",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const CreateProjectPage = () => {
  return <CreateProjectProfile />;
};

export default CreateProjectPage;

import ProjectsBanner from "@/components/projects/banner";
import HomeBlogs from "@/components/sections/HomeBlogs";
import ProjectsComponent from "@/components/projects";

export const metadata = {
  title: "BUSIPOOL | Проекты",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const ProjectsPage = () => {
  return (
    <>
      <section className="mt-[80px] sm:mt-[90px] lg:mt-[100px]">
        <ProjectsComponent />
        {/* banner */}
        <ProjectsBanner />

        <div className="max-container mt-[60px] md:mt-[150px]">
          <HomeBlogs />
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;

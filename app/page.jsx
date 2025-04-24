import Hero from "@/components/sections/Hero";
import HomeBlogs from "@/components/sections/HomeBlogs";
import HomeProjects from "../components/sections/HomeProjects";
import Services from "@/components/sections/Services";
import Stats from "../components/sections/Stats";

export const metadata = {
  title:
    "Платформа инвестиций и сотрудничества — для бизнеса и различных проектов | BUSIPOOL",
  description:
    "Узнайте, как организовать инвестиции для вашего бизнеса или стать партнером. Помогаем соединять инвесторов и перспективные проекты. Платформа инвестиций в бизнес, технологические, творческие и социальные проекты",
  icons: {
    icon: "/rocket.svg",
  },
};

const HomePage = () => {
  return (
    <>
      <div className="mt-[70px] sm:mt-[89px] md:mt-[80px] lg:mt-[85px]">
        <Hero />
        <HomeProjects />
        <div className="mb-[100px] bg-primary py-[60px] md:mb-[150px] md:py-[100px]">
          <div className="max-container">
            <Stats large />
          </div>
        </div>
        <Services />
        <HomeBlogs />
      </div>
    </>
  );
};

export default HomePage;

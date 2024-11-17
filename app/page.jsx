import Hero from "@/components/sections/Hero";
import HomeBlogs from "@/components/sections/HomeBlogs";
// import HomeProjects from "@/components/sections/HomeProjects";
import HomeProjects from "../components/sections/HomeProjects";
import Services from "@/components/sections/Services";
// import Stats from "@/components/sections/Stats";
import Stats from "../components/sections/Stats";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeProjects />
      <div className="mb-[100px] bg-primary py-[60px] md:mb-[150px] md:py-[100px]">
        <div className="max-container">
          <Stats large />
        </div>
      </div>
      <Services />
      <HomeBlogs />
    </>
  );
};

export default HomePage;

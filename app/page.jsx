import Hero from "@/components/sections/Hero";
import HomeBlogs from "@/components/sections/HomeBlogs";
// import HomeProjects from "@/components/sections/HomeProjects";
import HomeProjects from "../components/sections/HomeProjects";
import Services from "@/components/sections/Services";
// import Stats from "@/components/sections/Stats";
import Stats from "../components/sections/Stats";
import Head from "next/head";

const HomePage = () => {
  <Head>
    <title>{"BUSIPOOL | Инвестиции в будущее"}</title>
    <meta
      name="description"
      content={
        "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
      }
    />
    <link rel="icon" href="/Fav.png" />
  </Head>;
  return (
    <>
      <Head>
        <meta
          name="description"
          content={"Topskill online training platform"}
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
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

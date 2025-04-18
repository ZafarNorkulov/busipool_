import Hero from "@/components/sections/Hero";
import HomeBlogs from "@/components/sections/HomeBlogs";
// import HomeProjects from "@/components/sections/HomeProjects";
import HomeProjects from "../components/sections/HomeProjects";
import Services from "@/components/sections/Services";
// import Stats from "@/components/sections/Stats";
import Stats from "../components/sections/Stats";
import Head from "next/head";

export const metadata = {
  title: "BUSIPOOL | Инвестиции в будущее",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const HomePage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <title>BUSIPOOL | Инвестиции в будущее</title>
        <link rel="icon" href="/Fav.png" />
      </Head>
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

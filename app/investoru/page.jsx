import HomeBlogs from "@/components/sections/HomeBlogs";
import Head from "next/head";
import PopularProjects from "@/components/investors/PopularProjects";
import InvestorsHero from "@/components/investors/hero";
import Summary from "@/components/investors/summary";
import SummarySteps from "@/components/investors/summarySteps";
import Buttons from "@/components/investors/buttons";
import Investors from "@/components/investors";
import Faqs from "@/components/investors/faqs";

export const metadata = {
  title: "BUSIPOOL | Инвестиции в будущее",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};
const InvestorPage = () => {
  return (
    <>
      <section className="mt-[60px] md:mt-[100px]">
        <div className="max-container pt-[30px] md:pt-[80px]">
          <InvestorsHero />

          <Summary />
        </div>
        <SummarySteps />

        <div className="max-container pb-[150px] md:pt-[100px]">
          <Buttons />
          <div className="flex max-w-[1400px] flex-col-reverse gap-[100px] px-5 md:mx-[9%] md:flex-col">
            <Investors />
            <Faqs />
          </div>
        </div>

        <PopularProjects />

        <HomeBlogs />
      </section>
    </>
  );
};

export default InvestorPage;

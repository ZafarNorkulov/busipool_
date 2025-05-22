import HomeBlogs from "@/components/sections/HomeBlogs";
import InvestorsHero from "@/components/investors/hero";
import Summary from "@/components/investors/summary";
import SummarySteps from "@/components/investors/summarySteps";
import AuthButtons from "@/components/authButtons";
import Investors from "@/components/investors";
import Faqs from "@/components/faqs";
import PopularProjects from "@/components/popularProjects";

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
          <AuthButtons />
          <div className="flex max-w-[1400px] flex-col-reverse gap-[100px] px-5 md:mx-[9%] md:flex-col">
            <Investors />

            <Faqs title />
          </div>
        </div>
        <PopularProjects />

        <HomeBlogs />
      </section>
    </>
  );
};

export default InvestorPage;

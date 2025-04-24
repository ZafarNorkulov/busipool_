import HomeBlogs from "../../components/sections/HomeBlogs";
import React from "react";
import Faqs from "@/components/faqs";
import AuthButtons from "@/components/authButtons";
import CompanyHero from "@/components/company/hero";
import WhoCanJoin from "@/components/company/whoCanJoin";
import BusipoolAudience from "@/components/company/busipoolAudience";
import PricingInfo from "@/components/company/pricingInfo";
import WhyBusipool from "@/components/company/whyBusipool";
import HowItWorks from "@/components/company/howItWorks";
import CompanyInvestors from "@/components/company/investors";

export const metadata = {
  title:
    "Привлечение инвестиций для вашего бизнеса — от стартапов до среднего бизнеса | BUSIPOOL",
  description:
    "Подготовьте документы, разместите проект и найдите инвесторов для масштабирования. Удобное размещение, аудит, законные сделки и поддержка на каждом этапе. Привлечение инвестиций для бизнеса",
  icons: {
    icon: "/rocket.svg",
  },
};

const CompanyPage = () => {
  return (
    <section className="mt-[70px] sm:mt-[85px] md:mt-[100px] lg:mt-[130px] xl:mt-[90px]">
      <CompanyHero />
      <BusipoolAudience />
      <WhoCanJoin />
      <HowItWorks />
      <div className="max-container pt-[60px] md:pt-[100px]">
        <AuthButtons />
        <CompanyInvestors />

        <Faqs title />
      </div>
      <PricingInfo />
      <WhyBusipool />
      <HomeBlogs />
    </section>
  );
};

export default CompanyPage;

import BecomePartnerHero from "@/components/become-partner/hero";
import BecomePartner from "@/components/become-partner";
import HomeBlogs from "@/components/sections/HomeBlogs";

export const metadata = {
  title: "BUSIPOOL | Стать Партнером",
  description:
    "",
  icons: {
    icon: "/rocket.svg",
  },
};

const BecomePartnerPage = () => {
  return (
    <>
      <section className="mt-[100px] sm:mt-[140px] lg:mt-[120px]">
        <BecomePartnerHero />
        <BecomePartner />
        <HomeBlogs />
      </section>
    </>
  );
};

export default BecomePartnerPage;

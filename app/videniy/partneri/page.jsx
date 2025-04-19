import PartnersList from "@/components/partners";

export const metadata = {
  title: "BUSIPOOL | Партнеры",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const PartnersPage = () => {
  return (
    <div className="max-container mt-[100px] md:mt-[150px]">
      <h2 className="section-title mb-[60px] md:mb-[100px]">Наши партнеры</h2>

      <PartnersList />
    </div>
  );
};

export default PartnersPage;

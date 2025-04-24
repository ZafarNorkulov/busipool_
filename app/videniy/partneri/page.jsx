import PartnersList from "@/components/partners";

export const metadata = {
  title: "Партнёры BUSIPOOL — ведущие эксперты и компании в сфере инвестиций",
  description:
    "Узнайте, кто помогает развивать платформу и сопровождать инвестиционные сделки. Вместе с партнёрами мы создаём экосистему для успешного привлечения капитала. Партёры",
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

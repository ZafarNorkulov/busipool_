import Faqs from "@/components/faqs";
import PopularProjects from "@/components/popularProjects";

export const metadata = {
  title: "BUSIPOOL | Вопрос-ответ",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const FAQPage = () => {
  return (
    <>
      <div className="max-container mb-[100px] pt-[100px] md:mb-[150px] md:pt-[150px]">
        <h2 className="section-title mb-[30px]">Вопрос-ответ</h2>
        <Faqs />
      </div>
      <div className="max-container">
        <PopularProjects />
      </div>
    </>
  );
};

export default FAQPage;

import React from "react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container mb-[100px] md:mb-[150px] lg:h-screen">
      <h2 className="section-title mb-[30px] md:mb-[60px] lg:mb-[100px]">
        Выберите нужный раздел
      </h2>

      <div className="grid grid-cols-12 justify-center gap-3 lg:gap-[30px]">
        <div className="col-span-12 flex items-center justify-center md:col-span-6">
          <ServiceCard
            title="Инвестировать"
            url="/investoru"
            description="Если вы хотите помочь в проведении инвестиционных сделок"
          />
        </div>
        <div className="col-span-12 flex items-center justify-center md:col-span-6">
          <ServiceCard
            title="Разместить компанию"
            url="/kompaniyam"
            description="Информация для новых инвесторов о том, как устроен процесс сделок"
          />
        </div>
        <div className="col-span-12 flex items-center justify-center md:col-span-6">
          <ServiceCard
            title="Стать партнером"
            url="/stat-partnerom"
            description="Если вы хотели бы помочь в проведении инвестиционных сделок"
          />
        </div>
        <div className="col-span-12 flex items-center justify-center md:col-span-6">
          <ServiceCard
            title="Войти в личный кабинет"
            url="/profil"
            description="Если вы уже зарегистрированы, то можете войти для изучения предложений"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container mb-[100px] md:mb-[150px]">
      <h2 className="section-title mb-[30px] sm:mb-[100px]">
        Выберите нужный раздел
      </h2>

      <div className="grid grid-cols-12 justify-center gap-[30px]">
        <div className="col-span-12 flex items-center justify-center lg:col-span-6">
          <ServiceCard
            title="Инвестировать"
            url="/investor"
            description="Если вы хотите помочь в проведении инвестиционных сделок"
          />
        </div>
        <div className="col-span-12 flex items-center justify-center lg:col-span-6">
          <ServiceCard
            title="Разместить компанию"
            url="/company"
            description="Информация для новых инвесторов о том, как устроен процесс сделок"
          />
        </div>
        <div className="col-span-12 flex items-center justify-center lg:col-span-6">
          <ServiceCard
            title="Стать партнером"
            url="/become-partner"
            description="Если вы хотели бы помочь в проведении инвестиционных сделок"
          />
        </div>
        <div className="col-span-12 flex items-center justify-center lg:col-span-6">
          <ServiceCard
            title="Войти в личный кабинет"
            url="/profile"
            description="Если вы уже зарегистрированы, то можете войти для изучения предложений"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

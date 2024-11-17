import React from "react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container mb-[100px] md:mb-[150px]">
      <h2 className="section-title mb-[30px] sm:mb-[100px]">
        Выберите нужный вам раздел
      </h2>

      <div className="flex flex-wrap justify-center gap-[30px]">
        <ServiceCard
          title="Инвестировать"
          description="Информация для новых инвесторов о том, как устроен процесс сделок"
        />
        <ServiceCard
          title="Разместить компанию"
          description="Информация для новых инвесторов о том, как устроен процесс сделок"
        />
        <ServiceCard
          title="Стать партнером"
          description="Если вы хотели бы помочь в проведении инвестиционных сделок"
        />
        <ServiceCard
          title="Войти в личный кабинет"
          description="Если вы уже зарегистрированы, то можете войти для изучения предложений"
        />
      </div>
    </section>
  );
};

export default Services;

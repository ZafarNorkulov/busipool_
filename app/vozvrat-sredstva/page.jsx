import React from "react";
import Stats from "@/components/sections/Stats";
import BusipoolLogoLarge from "@/components/BusipoolLogoLarge";
import HomeBlogs from "@/components/sections/HomeBlogs";
import Accordion from "../../components/Accordion";

const page = () => {
  const datas = [
    {
      id: 1,
      title: "Могу ли я отменить внесение средств?",
      description: `Да, можете. Для этого вам необходимо до завершения проекта воспользоваться функцией «Отменить покупку» в разделе «Мои заказы». Запрос на отмену покупки обрабатывается в рабочее время службы поддержки (будни с 11:00 до 19:00, суббота с 11:00 до 18:00, воскресенье - выходной).`,
    },
    {
      id: 2,
      title:
        "Как мне вернуть вложенные средства, если проект не собрал нужную сумму?",
      description: `Возврат денежных средств доступен только для лица, оплатившего заказ (далее – Пользователь), и только на расчётный счёт (банковскую карту) или электронный кошелёк, с которых заказ был оплачен. Возврат средств на реквизиты другого пользователя невозможен.
  Возврат денежных средств осуществляется в полном объеме.
  
  Чтобы вернуть денежные средства, необходимо распечатать Заявление о возврате денежных средств, заполнить его в соответствии с назначением полей, подписать от руки, отсканировать и направить на адрес электронной почты payment.support@busipool.ru. За точность и достоверность предоставленной в Заявлении информации несёт ответственность Пользователь. 
   
  В Заявлении необходимо указать:
   
  Фамилию, имя и отчество (если имеется) Пользователя (получателя платежа), указанные данные заполняются в полном объеме (без сокращений), печатными буквами.
  Паспортные данные Пользователя.
  Телефон, электронную почту (на которую зарегистрирован аккаунт, с которого осуществлён платеж).
  Номер и дату заказа.
  Реквизиты карты (первые и последние четыре цифры, фамилия и имя владельца) или номер электронного кошелька, с которых был оплачен заказ. Номером электронного кошелька может быть номер вашего мобильного телефона. Проверить номер кошелька вы можете, зайдя на сайт платежной системы, через которую был осуществлён платеж.
  В связи с взиманием комиссии платежной системой «Единый кошелёк» при возврате денежных средств в заявлении просим указать банковские реквизиты, на которые необходимо осуществить возврат: 
  номер расчетного счета (должен быть оформлен на получателя платежа, т.е. на Пользователя, который сделал заказ на сайте),
  реквизиты банка: наименование (для Сбербанка дополнительно номер отделения),
  номер корреспондентского счета, БИК банка.
   
  В случае невозможности получить деньги на банковскую карту, с которой ранее был оплачен заказ (например, карта утеряна или заблокирована), вы можете указать новые банковские реквизиты, на которые может быть осуществлён возврат:
   
  номер расчетного счета (должен быть оформлен на получателя платежа, т.е. на Пользователя, который сделал заказ на сайте),
  наименование (для Сбербанка дополнительно номер отделения),
  номер корреспондентского счета,
  БИК банка,
  ИНН.
   
  ВАЖНО! Для каждого заказа заполняется отдельное заявление.`,
    },
  ];

  return (
    <section className="mt-[70px] sm:mt-[90px] lg:mt-[100px]">
      <div className="max-w-[1430px] px-5 pt-[30px] md:mx-[9%] md:mt-[70px]">
        <Stats />
      </div>
      <div className="md:max-container mx-auto mb-[30px] mt-[30px] w-full px-[12px] md:mt-[50px] 2xl:mt-[100px]">
        <BusipoolLogoLarge />
      </div>
      <div className="max-container">
        <div className="mb-[100px] mt-[30px] flex w-full flex-wrap justify-center gap-x-[20px] gap-y-[60px] md:mb-[60px] md:mt-[50px] lg:flex-none wide:flex-nowrap 2xl:mb-[100px] 2xl:mt-[100px]">
          <p className="flex w-max flex-wrap gap-[3px] text-base font-light tracking-[0.01em] text-primary sm:justify-center sm:text-center md:text-lg lg:text-[15px] xl:text-left xl:text-lg wide:flex-1 2xl:text-[24px]">
            Цель нашей краудфандинговой платформы - предоставить вам возможность{" "}
            <span className="text-base text-gold md:text-lg lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">
              увеличить свои инвестиции
            </span>{" "}
            через вложения в проекты.
          </p>
        </div>
      </div>
      <div className="bg-primary py-[60px] md:py-[100px]">
        <div className="max-container">
          <Stats large />
        </div>
      </div>
      <div className="max-container mb-[100px] pt-[100px] md:mb-[150px] md:pt-[150px]">
        <h2 className="section-title mb-[30px] md:mb-[60px] lg:mb-[100px]">
          Возврат денежных средств
        </h2>
        <div className="mx-auto max-w-[1260px] md:mx-[8%] lg:mx-[15%]">
          <div className="flex flex-col gap-3">
            {datas?.map((item) => (
              <Accordion
                key={1}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <HomeBlogs />
    </section>
  );
};

export default page;

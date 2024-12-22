import diagram from "@/assets/images/diagram.jpg";
import Image from "next/image";
import HomeBlogs from "@/components/sections/HomeBlogs";
import Head from "next/head";

const DatePoint = ({ date }) => {
  return (
    <div className="">
      <div className="absolute top-0  h-[15px] w-[15px] -translate-x-[50%] -translate-y-[50%] rounded-full bg-secondary md:h-[40px] md:w-[40px]"></div>
      <div className="w-[32px] -translate-x-[50%] text-wrap text-[12px] font-light leading-[120%] text-black sm:w-auto md:text-[24px] xl:text-[32px]">
        {date}
      </div>
    </div>
  );
};

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>{"BUSIPOOL | О нас"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <section>
        <div className="max-container mb-[100px] mt-[100px] md:mb-[150px] md:mt-[150px]">
          <h2 className="section-title mb-[30px] md:mb-[100px]">
            Развитие проекта в 2024-2025 годах
          </h2>

          <div className="about-us-table mb-[30px] flex h-[98px] justify-between text-[14px] font-bold leading-[120%] text-gray-dark md:mx-[50px] md:mb-[100px] md:h-[334px] md:text-[24px] lg:mx-[100px] 2xl:text-[32px]">
            <div className="flex flex-col justify-between">
              <h3 className="wrap-balance">Заявок на размещение</h3>
              <h3 className="wrap-balance">Размещений</h3>
              <h3 className="wrap-balance">Размещений, млн.₽</h3>
            </div>
            <div className="flex w-[70%] flex-col justify-between">
              <div className="flex justify-between">
                <p>5</p>
                <p>10</p>
                <p>95</p>
                <p>265</p>
                <p>534</p>
                <p>534</p>
                <p>534</p>
              </div>
              <div className="flex justify-between">
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>6</p>
                <p>8</p>
                <p>10</p>
                <p>14</p>
              </div>
              <div className="flex justify-between">
                <p>8,3</p>
                <p>8,3</p>
                <p>8,3</p>
                <p>140</p>
                <p>200</p>
                <p>270</p>
                <p>360</p>
              </div>
            </div>
          </div>
          <div className="sm:mb-[100px] mb-5 flex justify-between gap-5 text-[14px] font-bold leading-[120%] md:mx-[50px] md:text-[32px] lg:mx-[100px]">
            <h3 className="text-[14px] font-bold leading-[120%] text-gray-dark md:text-[24px] 2xl:text-[32px]">
              Событие
            </h3>

            <div className="flex justify-between gap-2 sm:w-[70%] sm:gap-[20px] md:gap-[40px] lg:gap-[70px]">
              <p className="text-[12px] font-light leading-[120%] text-gray-light md:text-[20px] lg:break-all lg:text-[24px] xl:break-normal 2xl:text-[32px]">
                Тестирование платформы BUSIPOOL
              </p>
              <p className="text-[12px] font-light leading-[120%] text-gray-light md:text-[20px] lg:break-all lg:text-[24px] xl:break-normal 2xl:text-[32px]">
                Доработка бизнес-процессов
              </p>
              <p className="text-[12px] font-light leading-[120%] text-gray-light md:text-[20px] lg:break-all lg:text-[24px] xl:break-normal 2xl:text-[32px]">
                Масштабирование числа кейсов, отработка массового числа сделок
              </p>
            </div>
          </div>

          <div className="relative ml-auto flex w-[350px] justify-between border-t-2 border-gray-dark sm:pt-[50px] pt-[20px] md:w-[70%] md:max-w-[1084px]">
            <DatePoint date="май, 2024" />
            <DatePoint date="июль, 2024" />
            <DatePoint date="июль, 2024" />
            <DatePoint date="2025" />
          </div>
        </div>

        <div className="max-container mb-[100px] md:mb-[150px]">
          <h2 className="section-title mb-[30px] md:mb-[100px]">
            Наша цель - 70 млн.₽+ инвестиций
          </h2>

          <div className="flex flex-col items-center justify-center gap-x-[20px] gap-y-[30px] min-[768px]:flex-row">
            <div className="max-w-[560px] flex-1">
              <h2 className="mb-[20px] text-base font-bold leading-[120%] text-gray-dark xl:mb-[50px] xl:text-[36px]">
                Для этого за 2 года требуется:
              </h2>
              <p className="mb-[20px] text-base font-bold leading-[120%] text-gray-dark xl:mb-[50px] xl:text-[36px]">
                1. Акционировать всего 450 компаний за 2 года;
              </p>
              <p className="mb-[20px] text-base font-bold leading-[120%] text-gray-dark xl:mb-[50px] xl:text-[36px]">
                2. На 2-ой год запустить вторичный рынок акций внебиржевых
                компаний;
              </p>
              <p className="mb-[20px] text-base font-bold leading-[120%] text-gray-dark xl:mb-[50px] xl:text-[36px]">
                3. Реализовать планируемую матрицу продуктов.
              </p>
            </div>

            <div className="w-full flex-1">
              <Image
                src={diagram}
                alt="about us diagram"
                width={0}
                height={0}
                priority={true}
                sizes="100%"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

      
      </section>
    </>
  );
};

export default AboutUsPage;

"use client";
import Accordion from "@/components/Accordion";
import BusipoolLogoLarge from "@/components/BusipoolLogoLarge";
import Button from "@/components/Button";
import HomeBlogs from "@/components/sections/HomeBlogs";
// import Stats from "@/components/sections/Stats";
import Stats from "../../components/sections/Stats";
import { dealsSteps } from "@/constants";
import SwiperSection from "../../components/SwiperSection";
import Link from "next/link";
// import scrollToTop from "@/utils/scrollToTop";
import scrollToTop from "../../utils/scrollToTop";
import { BsArrowDownRight } from "react-icons/bs";
import SignUpLink from "@/components/SignUpLink";
import SignInLink from "@/components/SignInLink";
import { getFaqs } from "../api/blogs/blogs";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/utils/url";
import { getProjectTypes } from "../api/business_type/typebusiness";

const InvestorPage = () => {
  const [token, setToken] = useState(null)
  const [businessType, setTypeBusiness] = useState([])
  const [faqs, setFaqs] = useState([]);




  function fetchFaqsApi() {
    getFaqs().then((response) => {
      setFaqs(response);
    })
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("access_token")
      setToken(storedToken);
    }
    fetchFaqsApi();
    getProjectTypes().then(res => setTypeBusiness(res))
  }, []);

  return (
    <section>
      <div className="max-container pt-[30px] md:pt-[100px]">
        <Stats />
      </div>

      <div className="mx-auto mb-[30px] mt-[60px] w-fit px-[10px] md:mt-[100px] md:px-[20px]">
        <BusipoolLogoLarge />
      </div>

      <div className="max-container">
        <div className="mt-[30px] flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[30px] md:mt-[100px] wide:flex-nowrap">
          <p className="flex-2 font-light leading-[120%] text-primary md:text-[24px]">
            Цель нашей краудфандинговой платформы - предоставить вам возможность{" "}
            <span className="text-gold md:text-[24px]">
              увеличить свои инвестиции
            </span>{" "}
            через вложения в проекты, с которых можно заработать.
          </p>

          {
            !token && (
              <div className="flex flex-1 flex-wrap justify-center gap-[10px] md:flex-nowrap">
                <SignUpLink />
                <SignInLink />
              </div>
            )
          }

        </div>
      </div>

      <div className="max-container">
        <div className="pt-[100px] md:pt-[150px]">
          <h2 className="section-title mb-[30px] md:mb-[100px]">
            Кратко о сделках
          </h2>

          <div className="mb-[100px] flex flex-wrap justify-center gap-x-[160px] gap-y-[60px] text-center md:mb-[140px] xl:flex-nowrap">
            <div className="flex flex-col items-center min-w-min">
              <h3 className="mb-[20px] w-max text-[20px] font-bold text-primary md:mb-[30px] md:text-[32px]">
                Онлайн-сделки
              </h3>
              <p className="text-balance text-base leading-[120%] text-gray-dark md:text-[24px] md:leading-[140%]">
                Благодаря BUSIPOOL вы можете приобретать доли в интересных вам
                компаниях без посещения нотариуса. Документы подписываются в
                онлайн-формате.
              </p>
            </div>
            <div className="flex flex-col items-center min-w-min">
              <h3 className="mb-[20px] w-max text-[20px] font-[900] text-primary md:mb-[30px] md:text-[32px]">
                Аудит отчетности
              </h3>
              <p className="text-balance text-base leading-[120%] text-gray-dark md:text-[24px] md:leading-[140%]">
                Для размещения на платформе компания должна предоставить
                аудиторское заключение на предмет корректности своей финансовой
                отчетности.
              </p>
            </div>
            <div className="flex flex-col items-center min-w-min">
              <h3 className="mb-[20px] w-max text-[20px] font-[900] text-primary md:mb-[30px] md:text-[32px]">
                Законность
              </h3>
              <p className="text-balance text-base leading-[120%] text-gray-dark md:text-[24px] md:leading-[140%]">
                Сделки соответствуют 259-ФЗ «О привлечении инвестиций с
                использованием инвестиционных платформ», 208-ФЗ «Об акционерных
                обществах», 39-ФЗ «О рынке ценных бумаг».
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary pb-[100px] pt-[60px] md:pb-[150px] md:pt-[100px]">
        <h2 className="mb-[30px] text-center text-[24px] font-bold leading-[120%] text-gray-dark md:mb-[100px] md:text-[64px]">
          Как проходят сделки?
        </h2>

        <div className="max-container">
          <div className="mx-auto max-w-[1385px] pl-[25px] md:pl-[60px]">
            {dealsSteps.map((step, index, arr) => (
              <div
                key={index}
                className={`${index == arr.length - 1 ? "pb-0" : "pb-[60px] md:pb-[100px]"
                  } ${index == arr.length - 1
                    ? "border-0"
                    : "border-l md:border-l-2"
                  } relative border-primary pl-[55px] md:pl-[275px] xl:pl-[372px]`}
              >
                <h3 className="mb-[20px] text-[18px] font-bold leading-[110%] text-gray-dark md:mb-[30px] md:text-[32px]">
                  {step.title}
                </h3>
                <p className="text-base font-light leading-[140%] text-gray-light md:text-[24px]">
                  {step.text}
                </p>

                <span className="absolute left-0 top-0 flex size-[50px] -translate-x-[50%] items-center justify-center rounded-full border-2 border-primary bg-secondary text-[24px] font-light leading-[110%] text-primary md:h-[125px] md:w-[125px] md:text-[48px]">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-container pb-[150px] md:pt-[100px]">

        {
          !token && (
            <div className="mb-[30px] flex flex-1 flex-wrap justify-center gap-[30px] md:flex-nowrap">
              <SignUpLink />
              <SignInLink />
            </div>
          )
        }

        <div className="flex flex-col-reverse gap-[100px] md:flex-col">
          <div>
            <h3 className="section-title mb-[30px] md:mb-[100px] md:mt-[150px]">
              База стартапов
            </h3>

            <div className="flex flex-wrap justify-center gap-[30px] md:gap-[20px]">
              {businessType?.map(item => (

                <div className="w-[230px] rounded-[10px] p-[20px] shadow md:w-[560px] md:p-[30px]" key={item?.id}>
                  <h2 className="mb-[10px] text-[18px] font-light leading-[110%] text-gray-dark md:mb-[20px] md:text-[48px]">
                    {item?.name}
                  </h2>
                  <p className="md:wrap-balance mb-[20px] text-[15px] font-light leading-[120%] text-gray-light md:mb-[30px] md:text-[24px]">
                    Посмотрите нашу {item?.name} для инвестирования
                  </p>

                  <Link
                    href={`/investor/${item?.id}`}
                    onClick={scrollToTop}
                    className={`ml-auto flex w-fit items-center text-[10px] font-light leading-[110%] text-gray-dark hover:text-primary md:text-[24px]`}
                  >
                    Подробнее
                    <BsArrowDownRight className="ml-[5px] text-[10px] md:ml-[10px] md:text-[24px]" />
                  </Link>
                </div>
              ))}


            </div>
          </div>

          <div>
            <h2 className="section-title mt-[100px] md:mb-[100px]">
              Финансовые инструменты
            </h2>

            <div className="mx-auto max-w-[1140px]">
              {
                faqs?.map((faq) => (
                  <Accordion key={faq.id} title={faq.title} description={faq.description} />
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div className="max-container">
        <h2 className="section-title mb-[30px] md:mb-[100px]">
          Актуальные проекты
        </h2>

        <SwiperSection />

        <div className="mb-[100px] flex flex-1 flex-wrap justify-center gap-[30px] md:hidden md:flex-nowrap">
          <Button text="Все проекты" primary />
          <Button text="Создать свой" />
        </div>
      </div>

      <HomeBlogs />
    </section>
  );
};

export default InvestorPage;

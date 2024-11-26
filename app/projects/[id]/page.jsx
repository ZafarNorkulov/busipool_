"use client";
import Image from "next/image";
import avatar from "@/assets/images/project-page-images/avatar.png";
import rocket from "@/assets/images/project-page-images/rocket.png";
import Button from "../../../components/Button";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import RewardCard from "../../../components/RewardCard";
import { useParams } from "next/navigation";
import Spinner from "../../../components/Spinner";
import { getProject } from "../../api/projects/project";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { socialMedia } from "@/constants";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize"
import Head from "next/head";

const ProjectPage = () => {
  const [toggleHeart, setToggleHeart] = useState(false);
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowSize
  useEffect(() => {
    fetchProjectsWithIdFromAPI();
  }, [id]);


  function fetchProjectsWithIdFromAPI() {
    getProject(id)
      .then((response) => {
        setProject(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (!project && !loading) {
    return (
      <h1 className="mt-10 text-center text-2xl font-bold">
        Property Not Found
      </h1>
    );
  }



  const percentage = Math.round((project?.total_investor_price * 100) / project?.financial_goal)
  const date = new Date(project?.project_completion_date);
  const day = String(date.getDate()).padStart(2, '0');  // Kunning 2 raqamli bo'lishini ta'minlash
  const month = String(date.getMonth() + 1).padStart(2, '0');  // Oyning 2 raqamli bo'lishini ta'minlash
  const year = date.getFullYear();  // Yilni olish

  // Yangi formatni yaratish: DD.MM.YYYY
  const formattedDate = `${day}.${month}.${year}`;

  const splitEvery3 = (num) => {
    // Raqqa stringga aylantiramiz, keyin bo'sh joy bilan ajratamiz
    return num
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');  // Har 3 raqamdan keyin bo'sh joy qo'yadi
  };

  return (
    <>
     <Head>
        <title>{"BUSIPOOL | Проекты"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
    <section>
      {loading && <Spinner loading={loading} />}
      {!loading && project && (
        <div className="max-container mb-[60px] mt-[20px] flex lg:flex-row flex-col gap-[30px] md:mt-[100px] items-baseline xl:mb-[150px] xl:gap-[100px]">
          <div className=" w-auto rounded-xl min-[425px]  lg:w-[50%] xl:flex-1">
            {project.image ? (
              <img
                src={project.image}
                alt="card image"
                fill
                priority={true}
                className="rounded-xl object-cover"
              />
            ) : (
              <div className="fallback-image h-full w-full">
                Image not available
              </div>
            )}
          </div>
          <div className="w-full  flex-1 lg:self-center sm:max-w-[600px] lg:max-w-full">
            <h3 className="mb-[20px] text-[18px] font-bold leading-[110%] text-gray-dark lg:text-[24px] xl:text-[32px]">
              {project?.name}
            </h3>
            <p className="mb-[11px] text-[12px] font-light leading-[130%] text-gray-light md:text-base lg:mb-[60px] lg:text-base xl:text-[24px]">
              {project.description}
            </p>

            {/* Contact author */}
            <div className="mb-5 flex items-center lg:mb-[30px]">
              <Image
                src={avatar}
                alt="avatar"
                width={0}
                height={0}
                sizes="100%"
                className="mr-[15px] size-5 object-contain md:size-[40px]"
              />

              <div className="mr-5 flex flex-col md:mr-[50px]">
                <p className="text-[10px] font-light text-[#3C3C3B] md:mb-[5px] md:text-base md:leading-[16px]">
                  {project?.owner?.first_name
                    ? project?.owner?.first_name
                    : "Сергей Устюжанин"}
                </p>
                <a
                  href="#!"
                  className="text-[10px] text-primary hover:underline md:text-base md:leading-[16px]"
                >
                  Написать автору
                </a>
              </div>

              <div className="flex items-center">
                <Image
                  src={rocket}
                  alt="rocket"
                  width={30}
                  height={30}
                  sizes="100%"
                  className="mr-[10px] size-4 h-auto w-auto object-contain md:size-[30px]"
                />
                <span className="text-base font-light text-black md:text-sm md:leading-[16px]">
                  5 проектов
                </span>
              </div>
            </div>




            <div className="mb-[4.5px] flex justify-between mt-4 md:mb-[10px]">
              <span className="text-sm  leading-[130%] text-primary md:text-base">{percentage}%</span>
              <span className="text-sm md:text-base text-gray-light">до {formattedDate}</span>
            </div>
            <div className="h-[2px] rounded-[4.5px] bg-gray-300 md:h-[5px] md:rounded-[10px]">
              <div className={`h-[2px] rounded-[4.5px] bg-primary md:h-[5px] md:rounded-[10px]`} style={{width: `${percentage}%`}}></div>
            </div>
            <div className="mb-[4.5px] flex justify-between mt-4 md:mb-[10px]">
              <span className="text-sm text-[#1e1e1e] font-bold leading-[130%] md:text-base">
                {splitEvery3(project?.total_investor_price)} ₽
              </span>
              <span className="text-sm font-light lowercase leading-[110%] text-gray-light md:text-[14px]">
                СОБРАНО ИЗ
              </span>
              <span className="text-sm text-[#1e1e1e] leading-[110%] font-bold  md:text-base">
                {splitEvery3(project?.financial_goal)} ₽
              </span>
            </div>

            <div className="flex items-center gap-[30px] mt-[30px]">
              <Button text="Поддержать" primary />

              <div>
                {toggleHeart ? (
                  <FaHeart
                    onClick={() => setToggleHeart((prev) => !prev)}
                    className="cursor-pointer text-[28px] text-red-600"
                  />
                ) : (
                  <CiHeart
                    onClick={() => setToggleHeart((prev) => !prev)}
                    className="cursor-pointer text-[30px]"
                  />
                )}
              </div>
            </div>
            <div className="mt-[30px] sm:mb-[30px] flex items-center gap-[30px] mb-[60px] md:justify-end md:gap-[20px]">
              {socialMedia.map((item) => (
                <Link href={item.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={item.src}
                    width={37}
                    height={37}
                    sizes="100%"
                    className="md:h-[37px] md:w-[37px] w-5 h-5"
                    alt={item.alt}
                  />
                </Link>
              ))}


            </div>
          </div>
        </div>
      )}

      {/* Grid section */}
      <div className="max-container grid grid-cols-1 gap-x-7 xl:grid-cols-[2fr,minmax(560px,1fr)] xl:gap-x-[165px]">
        <Tabs>
          <TabList className={"mb-8 flex gap-14 text-[#4F4F4F]"}>
            <Tab className={"cursor-pointer md:text-[32px] text-sm font-bold"}>
              Описание
            </Tab>
            <Tab className={"cursor-pointer md:text-[32px] text-sm font-bold"}>FAQ</Tab>
            <Tab className={"cursor-pointer md:text-[32px] text-sm font-bold"}>
              Комментарии
            </Tab>
          </TabList>

          <TabPanel>
            <p
              className="text-base font-light text-gray-dark md:mb-[100px] md:text-[20px]"
              dangerouslySetInnerHTML={{ __html: project?.description }}
            />
          </TabPanel>
          <TabPanel>
            <div>
              <label className="cursor-pointer text-[32px] font-bold text-[#4F4F4F]">
                Задайте вопрос автору напрямую
              </label>
              <textarea
                placeholder="Напишите свой вопрос"
                className="mt-8 h-[140px] w-full resize-none rounded-[6px] border border-[#4F4F4F] p-4 focus:border-primary"
              />

              <button className="mt-8 h-[65px] w-full rounded-[6px] bg-primary text-[22px] font-normal text-white">
                Отправить
              </button>
            </div>
          </TabPanel>
          <TabPanel>
            <textarea
              placeholder="Напишите свой комментарий"
              className="mt-8 h-[140px] w-full resize-none rounded-[6px] border border-[#4F4F4F] p-4 focus:border-primary"
            />

            <button className="mt-8 h-[65px] w-full rounded-[6px] bg-primary text-[22px] font-normal text-white">
              Отправить
            </button>
            <h3 className="mb-[30px] text-lg font-bold leading-[120%] md:mb-[60px] md:text-[24px] my-[60px]">
              Комментарии пользователей
            </h3>
            {project?.comment?.slice(0, 10).map((item, idx) => (

              <div className="comment md:mb-[60px] mb-[30px]" key={id}>
                <h3 className="text-[32px] font-bold leading-[120%] md:text-[24px]"> {item?.owner?.last_name} {item?.owner?.first_name} </h3>
                <p className="md:text-[24px] mt-4 font-light capitalize leading-[110%] text-gray-light text-[14px]">{item?.comment}</p>
              </div>
            ))}
          </TabPanel>
        </Tabs>

        <div>
          <h3 className="mb-[30px] md:mt-0 mt-[30px] text-lg font-bold leading-[120%] md:mb-[60px] md:text-[24px]">
            Выберите вознаграждение
          </h3>

          {project?.reward?.map((reward) => (
            <RewardCard
              heading={reward.reward_name}
              delivered={reward.methods_obtaining}
              quantity={reward.quantity}
              price={reward.price + " ₽"}
            >
              {reward.description_reward}
            </RewardCard>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ProjectPage;

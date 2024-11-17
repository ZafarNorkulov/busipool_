"use client";
import Image from "next/image";
import avatar from "../../../assets/images/project-page-images/avatar.png";
import rocket from "../../../assets/images/project-page-images/rocket.png";
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

const ProjectPage = () => {
  const [toggleHeart, setToggleHeart] = useState(false);
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjectsWithIdFromAPI();
  }, [id]);

  function fetchProjectsWithIdFromAPI() {
    getProject(id)
      .then((response) => {
        setProject(response);
        console.log(response);
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

  return (
    <section>
      {loading && <Spinner loading={loading} />}
      {!loading && project && (
        <div className="max-container mb-[60px] mt-[20px] flex flex-col gap-[30px] md:mt-[100px] lg:flex-row lg:items-start xl:mb-[150px] xl:gap-[100px]">
          <div className="h-[100px] w-auto rounded-xl min-[425px]:h-[300px] lg:h-[450px] lg:w-[50%] xl:flex-1">
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
          <div className="max-w-[425px] flex-1 self-center md:max-w-[600px] lg:max-w-full">
            <h3 className="mb-[20px] text-[18px] font-bold leading-[110%] text-gray-dark lg:text-[24px] xl:text-[32px]">
              {project?.title}
            </h3>
            <p className="mb-[11px] text-[12px] font-light leading-[130%] text-gray-light md:text-base lg:mb-[60px] lg:text-base xl:text-[24px]">
              {project.text}
            </p>

            {/* Contact author */}
            <div className="mb-5 flex items-center lg:mb-[30px]">
              <Image
                src={avatar}
                alt="avatar"
                width={0}
                height={0}
                sizes="100%"
                className="mr-[15px] size-5 object-contain md:size-[32px]"
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
                  width={0}
                  height={0}
                  sizes="100%"
                  className="mr-[10px] size-4 h-auto w-auto object-contain md:size-[30px]"
                />
                <span className="text-[10px] font-light text-black md:text-base md:leading-[16px]">
                  5 проектов
                </span>
              </div>
            </div>

            <div className="mb-[4.5px] flex justify-between md:mb-[10px]">
              <span className="text-[12px] font-light leading-[130%] text-primary md:text-base lg:text-base xl:text-[24px]">
                {project?.budget?.percentage}
              </span>
              <span className="text-[12px] leading-[110%] text-gray-light md:text-base lg:text-base xl:text-[24px]">
                {project?.budget?.endDate}
              </span>
            </div>

            <div className="h-[3px] rounded-[4.5px] bg-gray-300 md:h-[5px] md:rounded-[15px]">
              <div className="h-[3px] w-[59%] rounded-[4.5px] bg-primary md:h-[5px] md:rounded-[15px]"></div>
            </div>

            <div className="mb-[12.5px] mt-[20px] flex justify-between md:mb-[37px]">
              <span className="text-[12px] font-bold leading-[110%] text-gray-dark md:text-[14px] lg:text-base xl:text-[24px]">
                {project?.budget?.current}
              </span>
              <span className="text-[12px] font-light lowercase leading-[110%] text-gray-light md:text-[14px]">
                СОБРАНО ИЗ
              </span>
              <span className="text-[12px] font-bold leading-[110%] text-gray-dark md:text-[14px] lg:text-base xl:text-[24px]">
                {project?.budget?.final}
              </span>
            </div>

            <div className="flex items-center gap-[30px]">
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
          </div>
        </div>
      )}

      {/* Grid section */}
      <div className="max-container grid grid-cols-1 gap-x-7 xl:grid-cols-[2fr,minmax(560px,1fr)] xl:gap-x-[165px]">
        <Tabs>
          <TabList className={"mb-8 flex gap-14 text-[#4F4F4F]"}>
            <Tab className={"cursor-pointer text-[32px] font-bold"}>
              Описание
            </Tab>
            <Tab className={"cursor-pointer text-[32px] font-bold"}>FAQ</Tab>
            <Tab className={"cursor-pointer text-[32px] font-bold"}>
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
          </TabPanel>
        </Tabs>

        <div>
          <h3 className="mb-[30px] text-lg font-bold leading-[120%] md:mb-[60px] md:text-[24px]">
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
  );
};

export default ProjectPage;

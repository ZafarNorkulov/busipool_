"use client";
import Image from "next/image";
import avatar from "@/assets/images/project-page-images/avatar.png";
import rocket from "@/assets/images/project-page-images/rocket.png";
import Button from "../../../components/Button";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import RewardCard from "../../../components/RewardCard";
import { useParams, useRouter } from "next/navigation";
import Spinner from "../../../components/Spinner";
import { getProject } from "../../api/projects/project";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import Head from "next/head";
import { checkConversation, startConvo } from "@/app/api/chat/chat";
import Code from "@/assets/images/social/code.png";
import Telegram from "@/assets/images/social/telegramgray.png";
import VK from "@/assets/images/social/vkgray.png";
import Facebook from "@/assets/images/social/facebookgray.png";
import Whatsapp from "@/assets/images/social/whatsappgray.png";

const ProjectPage = () => {
  const [toggleHeart, setToggleHeart] = useState(false);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [isConversation, setIsConversation] = useState();

  const { id } = useParams();
  const router = useRouter();
  const socials = [
    {
      src: Code,
      alt: "Code",
    },
    {
      src: Telegram,
      alt: "Telegram",
    },
    {
      src: VK,
      alt: "VK",
    },
    {
      src: Facebook,
      alt: "Facebook",
    },
    {
      src: Whatsapp,
      alt: "Whatsapp",
    },
  ];

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

  useEffect(() => {
    fetchProjectsWithIdFromAPI();
  }, [id]);

  const percentage = Math.round(
    (project?.total_investor_price * 100) / project?.financial_goal,
  );
  const date = new Date(project?.project_completion_date);
  const day = String(date.getDate()).padStart(2, "0"); // Kunning 2 raqamli bo'lishini ta'minlash
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Oyning 2 raqamli bo'lishini ta'minlash
  const year = date.getFullYear(); // Yilni olish

  // Yangi formatni yaratish: DD.MM.YYYY
  const formattedDate = `${day}.${month}.${year}`;

  const splitEvery3 = (num) => {
    // Raqqa stringga aylantiramiz, keyin bo'sh joy bilan ajratamiz
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Har 3 raqamdan keyin bo'sh joy qo'yadi
  };

  // chat works
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("access_token") ?? "";
      setToken(storedToken);
    }
  }, []);

  const fetchChatConversation = useCallback(() => {
    if (!project?.owner?.id || !token) return;
    checkConversation({ owner_id: project.owner.id, token })
      .then((response) => setIsConversation(response?.id ? true : false))
      .catch((error) => console.error("Error fetching conversation:", error));
  }, [project?.owner?.id, token]);

  const fetchStartConvo = useCallback(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!isConversation) {
      startConvo({ username: storedUser?.username, token }).then((res) => {
        console.log(res);
      });
    }
  }, [isConversation, token]);

  useEffect(() => {
    fetchChatConversation();
  }, [fetchChatConversation]);
  useEffect(() => {
    fetchStartConvo();
  }, [fetchStartConvo]);
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
      <section className="mt-[70px] sm:mt-[80px]">
        <div className="pt-[60px] md:pt-[100px]">
          {loading && <Spinner loading={loading} />}
          {!loading && project && (
            <div className="max-container mb-[60px] flex flex-col items-baseline gap-[30px] lg:flex-row xl:mb-[150px] xl:gap-[100px]">
              <div className="min-[425px] w-full rounded-xl lg:w-[50%] xl:flex-1">
                {project.image ? (
                  <img
                    src={project.image}
                    alt="card image"
                    priority={true}
                    className="w-full rounded-xl object-cover"
                  />
                ) : (
                  <div className="fallback-image h-full w-full">
                    Image not available
                  </div>
                )}
              </div>
              <div className="w-full flex-1 lg:w-[50%] lg:max-w-full lg:self-center">
                <h3 className="mb-[20px] text-[18px] font-bold leading-[110%] text-gray-dark lg:text-[24px] xl:text-[32px]">
                  {project?.name}
                </h3>
                <p className="mb-[11px] text-[12px] font-light leading-[130%] text-gray-light md:text-base lg:mb-[60px] lg:text-base xl:text-[24px]">
                  {project.description}
                </p>

                {/* Contact author */}
                <div className="mb-5 flex items-center lg:mb-[30px]">
                  <Image
                    src={project?.avatar || avatar}
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
                        : "Неизвестный"}
                    </p>
                    <Link
                      href="#!"
                      onClick={async (e) => {
                        e.preventDefault(); // Prevent default navigation behavior
                          await fetchStartConvo(); // Start a conversation if none exists
                          // const conversation = await checkConversation({
                          //   owner_id: project?.owner?.id,
                          //   token,
                          // });
                          // if (conversation?.id) {
                          //   // Save conversation response to localStorage
                          //   localStorage.setItem("conversation", JSON.stringify(conversation));

                          //   setIsConversation(true); // Update state
                          // }
                        // router.push("/profile/chat"); // Navigate to chat
                      }}
                      className="text-[10px] text-primary hover:underline md:text-base md:leading-[16px]"
                    >
                      Написать автору
                    </Link>
                  </div>

                  <div className="flex items-center">
                    <Image
                      src={rocket}
                      alt="rocket"
                      width={30}
                      height={30}
                      sizes="100%"
                      className="mr-[10px] size-4 object-contain md:size-[30px]"
                    />
                    <span className="text-base font-light text-black md:text-sm md:leading-[16px]">
                      {project?.project_views_count} проектов
                    </span>
                  </div>
                </div>

                <div className="mb-[4.5px] mt-4 flex justify-between md:mb-[10px]">
                  <span className="text-sm leading-[130%] text-primary md:text-base">
                    {percentage}%
                  </span>
                  <span className="text-sm text-gray-light md:text-base">
                    до {formattedDate}
                  </span>
                </div>
                <div className="h-[2px] rounded-[4.5px] bg-gray-300 md:h-[5px] md:rounded-[10px]">
                  <div
                    className={`h-[2px] rounded-[4.5px] bg-primary md:h-[5px] md:rounded-[10px]`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="mb-[4.5px] mt-4 flex justify-between md:mb-[10px]">
                  <span className="text-sm font-bold leading-[130%] text-[#1e1e1e] md:text-base">
                    {splitEvery3(project?.total_investor_price)} ₽
                  </span>
                  <span className="text-sm font-light lowercase leading-[110%] text-gray-light md:text-[14px]">
                    СОБРАНО ИЗ
                  </span>
                  <span className="text-sm font-bold leading-[110%] text-[#1e1e1e] md:text-base">
                    {splitEvery3(project?.financial_goal)} ₽
                  </span>
                </div>

                <div className="mt-[30px] flex items-center gap-[30px]">
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
                <div className="mb-[60px] mt-[30px] flex items-center gap-[30px] sm:mb-[30px] md:justify-end md:gap-[20px]">
                  {socials?.map((item, idx) => (
                    <Link
                      href={"#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={idx}
                    >
                      <Image
                        src={item.src}
                        width={37}
                        height={37}
                        sizes="100%"
                        className="h-5 w-5 md:h-[37px] md:w-[37px]"
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
                <Tab
                  className={"cursor-pointer text-sm font-bold md:text-[32px]"}
                >
                  Описание
                </Tab>
                <Tab
                  className={"cursor-pointer text-sm font-bold md:text-[32px]"}
                >
                  FAQ
                </Tab>
                <Tab
                  className={"cursor-pointer text-sm font-bold md:text-[32px]"}
                >
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
                <h3 className="my-[60px] mb-[30px] text-lg font-bold leading-[120%] md:mb-[60px] md:text-[24px]">
                  Комментарии пользователей
                </h3>
                {project?.comment?.slice(0, 10).map((item, idx) => (
                  <div className="comment mb-[30px] md:mb-[60px]" key={id}>
                    <h3 className="text-[32px] font-bold leading-[120%] md:text-[24px]">
                      {" "}
                      {item?.owner?.last_name} {item?.owner?.first_name}{" "}
                    </h3>
                    <p className="mt-4 text-[14px] font-light capitalize leading-[110%] text-gray-light md:text-[24px]">
                      {item?.comment}
                    </p>
                  </div>
                ))}
              </TabPanel>
            </Tabs>

            <div>
              <h3 className="mb-[30px] mt-[30px] text-lg font-bold leading-[120%] md:mb-[60px] md:mt-0 md:text-[24px]">
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
        </div>
      </section>
    </>
  );
};

export default ProjectPage;

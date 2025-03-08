"use client";
import Image from "next/image";
import avatar from "@/assets/images/project-page-images/avatar.png";
import rocket from "@/assets/images/project-page-images/rocket.png";
import Button from "../../../components/Button";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import RewardCard from "../../../components/RewardCard";
import { useParams, useRouter } from "next/navigation";
import Spinner from "../../../components/Spinner";
import {
  getComments,
  getProject,
  postComment,
} from "../../api/projects/project";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import useWindowSize from "@/hooks/useWindowSize";

const ProjectPage = () => {
  const [toggleHeart, setToggleHeart] = useState(false);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [commentData, setCommentData] = useState("");
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);

  const { id } = useParams();
  const router = useRouter();
  const { width } = useWindowSize();
  const socials = [
    { src: Code, href: "#", alt: "Code" },
    { src: Telegram, href: "https://t.me/busipool", alt: "Telegram" },
    { src: VK, href: "https://vk.com/busipool", alt: "VK" },
    { src: Facebook, href: "#", alt: "Facebook" },
    { src: Whatsapp, href: "https://wa.me/79265828518", alt: "Whatsapp" },
  ];

  const fetchProjectsWithIdFromAPI = () => {
    getProject(id)
      .then((response) => {
        setProject(response);
      })
      .catch((error) => {
        router.push("/not-found");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProjectsWithIdFromAPI();
  }, [id]);

  const percentage = Math.round(
    (project?.total_investor_price * 100) / project?.financial_goal,
  );
  const date = new Date(project?.project_completion_date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  const splitEvery3 = (num) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("access_token");
      const storedUser = localStorage.getItem("user");
      setUser(JSON.parse(storedUser ? storedUser : {}));
      setToken(storedToken);
    }
  }, []);

  const handleSendMessage = async () => {
    const receiver = project?.owner;
    localStorage.setItem("receiver", JSON.stringify(receiver));

    try {
      const res = await checkConversation({
        owner_id: receiver?.id,
        token,
      });

      if (res) {
        router.push(`/profile/chat/${res?.id}`);
      } else {
        console.log("No existing conversation, starting a new one...");
        const newConversation = await startConvo({
          username: receiver?.username,
          token,
        });

        if (newConversation) {
          localStorage.setItem("convo_id", String(newConversation?.id));
          router.push(`/profile/chat/${newConversation.id}`);
        } else {
          console.error("Failed to start a new conversation");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const fetchComments = async () => {
    getComments(id, token).then((res) => {
      const reversedData = res.reverse();
      setComments(reversedData);
    });
  };
  useEffect(() => {
    fetchComments();
  }, [token]);

  const sendComment = () => {
    const comment = {
      comment: commentData,
      owner: user?.id,
      project: project?.id,
    };
    postComment(comment, token)
      .then((res) => {})
      .finally(setCommentData(""));
  };

  if (loading) {
    return <Spinner loading={loading} />;
  }

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

      <section className="md:mv-[150px] mb-[100px] mt-[70px] sm:mt-[80px]">
        <div className="pt-[60px] md:pt-[100px]">
          <div className="max-container mb-[60px] flex flex-col items-baseline gap-[30px] lg:flex-row xl:mb-[150px] xl:gap-[100px]">
            <div className="min-[425px] w-full rounded-xl lg:w-[50%] xl:flex-1">
              {project.image ? (
                <img
                  src={project.image}
                  alt="card image"
                  priority={true}
                  className="h-[450px] w-full rounded-xl object-cover"
                />
              ) : (
                <div className="fallback-image h-full w-full">
                  Image not available
                </div>
              )}
            </div>

            <div className="w-full flex-1 lg:w-[50%] lg:max-w-full lg:self-center">
              <h3 className="mb-[18px] text-[18px] font-bold leading-[110%] text-gray-dark lg:text-[24px] xl:text-[32px]">
                {project?.name}
              </h3>
              <p className="mb-[11px] text-[12px] font-light leading-[130%] text-gray-light md:text-base lg:mb-[30px] lg:text-base xl:text-[24px]">
                {project?.description}
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
                      : "Неизвестный"}{" "}
                    {project?.owner?.last_name}
                  </p>
                  <div
                    onClick={handleSendMessage}
                    className="cursor-pointer text-[10px] text-primary hover:underline md:text-base md:leading-[16px]"
                  >
                    Написать автору
                  </div>
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
                <Button text="Поддержать" onClick={handleSendMessage} primary />

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
                    href={item.href}
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
          <div className="max-container">
            <div className="flex flex-col-reverse justify-between gap-x-7 gap-y-[100px] lg:flex-row">
              <div className="w-full lg:w-[54%] 2xl:w-[57%]">
                <Tabs>
                  <TabList
                    className={
                      "md:mv-[60px] mb-[30px] flex gap-14 text-[#4F4F4F]"
                    }
                  >
                    <Tab
                      className={
                        "cursor-pointer text-sm font-bold sm:text-xl md:text-[32px]"
                      }
                    >
                      Описание
                    </Tab>
                    <Tab
                      className={
                        "cursor-pointer text-sm font-bold sm:text-xl md:text-[32px]"
                      }
                    >
                      FAQ
                    </Tab>
                    <Tab
                      className={
                        "cursor-pointer text-sm font-bold sm:text-xl md:text-[32px]"
                      }
                    >
                      Комментарии
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <p
                      className="text-base font-light leading-[130%] text-gray-dark md:mb-[100px] md:text-xl"
                      dangerouslySetInnerHTML={{
                        __html: project?.detailed_description,
                      }}
                    />
                  </TabPanel>
                  <TabPanel>
                    <div>
                      <label className="block w-[250px] cursor-pointer text-2xl font-bold text-[#4F4F4F] sm:w-auto md:text-[32px]">
                        Задайте вопрос автору напрямую
                      </label>
                      <textarea
                        placeholder="Напишите свой вопрос"
                        className="mt-8 h-[140px] w-full resize-none rounded-[6px] border border-[#4F4F4F] p-4 placeholder:text-base placeholder:text-gray-dark focus:border-primary"
                      />

                      <button className="mt-8 h-[65px] w-full rounded-[6px] bg-primary text-[22px] font-normal text-white">
                        Отправить
                      </button>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <textarea
                      value={commentData}
                      onChange={(e) => setCommentData(e.target.value)}
                      placeholder="Напишите свой комментарий"
                      className="mt-8 h-[140px] w-full resize-none rounded-[6px] border border-[#4F4F4F] p-4 placeholder:text-base placeholder:text-gray-dark focus:border-primary"
                    />

                    <button
                      onClick={sendComment}
                      className="mt-8 h-[65px] w-full rounded-[6px] bg-primary text-sm font-light text-white md:text-2xl"
                    >
                      Отправить
                    </button>
                    <h3 className="my-[30px] block text-2xl font-bold text-[#4F4F4F] md:my-[60px] md:text-[32px]">
                      Комментарии пользователей
                    </h3>
                    <div className="flex flex-col gap-y-[30px] md:gap-y-[60px]">
                      {comments?.slice(0, 5)?.map((item) => (
                        <div
                          className="flex flex-col gap-[15px] text-gray-dark"
                          key={item?.id}
                        >
                          <h4 className="text-base font-bold leading-[120%] sm:text-2xl md:text-[28px] 2xl:text-[32px]">
                            {item?.owner?.first_name} {item?.owner?.last_name}
                          </h4>
                          <p className="text-sm font-light leading-[120%] sm:text-xl md:text-[20px] 2xl:text-2xl">
                            {item?.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                </Tabs>
              </div>

              <div className="w-full lg:w-[40%] xl:w-[37%] 2xl:w-[32%]">
                {project?.reward?.length ? (
                  <div>
                    <h3 className="mb-[30px] text-2xl font-bold leading-[120%] text-primary md:mb-[60px] md:text-[#3c3c3c]">
                      Выберите вознаграждение
                    </h3>
                    {width > 1023 ? (
                      <>
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
                      </>
                    ) : (
                      <Swiper
                        slidesPerView={1.2}
                        spaceBetween={20}
                        grabCursor={true}
                        mousewheel={true}
                        css-mode="true"
                        modules={[Scrollbar]}
                        className="mySwiper"
                        breakpoints={{
                          640: {
                            slidesPerView: 2,
                          },

                          1024: {
                            slidesPerView: 3,
                          },
                        }}
                      >
                        {project?.reward?.map((reward, index) => (
                          <SwiperSlide key={index} className="max-w-[415px]">
                            <RewardCard
                              heading={reward.reward_name}
                              delivered={reward.methods_obtaining}
                              quantity={reward.quantity}
                              price={reward.price + " ₽"}
                            >
                              {reward.description_reward}
                            </RewardCard>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;

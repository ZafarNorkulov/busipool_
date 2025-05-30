"use client";
import Image from "next/image";
import avatar from "@/assets/images/project-page-images/avatar.png";
import rocket from "@/assets/images/project-page-images/rocket.png";
import Button from "../../Button";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import { checkConversation, startConvo } from "@/app/api/chat/chat";
import Code from "@/assets/images/social/code.png";
import Telegram from "@/assets/images/social/telegramgray.png";
import VK from "@/assets/images/social/vkgray.png";
import Whatsapp from "@/assets/images/social/whatsapp-gray.png";

const ProjectOverview = ({ data: project }) => {
  const [toggleHeart, setToggleHeart] = useState(false);

  const [token, setToken] = useState("");
  const router = useRouter();

  const socials = [
    { src: Code, href: "#", alt: "Code" },
    { src: Telegram, href: "https://t.me/busipool", alt: "Telegram" },
    { src: VK, href: "https://vk.com/busipool", alt: "VK" },
    { src: Whatsapp, href: "https://wa.me/79265828518", alt: "Whatsapp" },
  ];

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
        router.push(`/profil/chat/${res?.id}`);
      } else {
        console.log("No existing conversation, starting a new one...");
        const newConversation = await startConvo({
          username: receiver?.username,
          token,
        });

        if (newConversation) {
          localStorage.setItem("convo_id", String(newConversation?.id));
          router.push(`/profil/chat/${newConversation.id}`);
        } else {
          console.error("Failed to start a new conversation");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-container mb-[60px] flex flex-col items-baseline gap-[30px] lg:flex-row xl:mb-[150px] xl:gap-[100px]">
      <div className="min-[425px] w-full rounded-xl lg:w-[50%] xl:flex-1">
        {project.image ? (
          <img
            src={project.image}
            alt="card image"
            width={0}
            height={0}
            className="h-[210px] w-full rounded-xl xs:h-auto lg:h-[350px] xl:h-[400px] 2xl:h-[450px] 2xl:object-contain"
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
            src={project?.owner?.avatar || avatar}
            alt="avatar"
            width={0}
            height={0}
            sizes="100%"
            className="mr-[15px] size-5 rounded-full object-contain object-center md:size-[40px]"
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
  );
};

export default ProjectOverview;

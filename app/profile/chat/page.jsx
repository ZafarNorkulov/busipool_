"use client";
import { getConversations } from "@/app/api/chat/chat";
import useWindowSize from "@/hooks/useWindowSize";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import profileImageDefault from "@/assets/images/profileImageDefault.png";

const ChatPage = () => {
  const [convos, setConvos] = useState([]);
  const { width } = useWindowSize();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("access_token");
    (async () => {
      getConversations(token).then((res) => setConvos(res));
    })();
  }, []);

  const dateFormatter = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedDate = `${formattedHours}:${formattedMinutes}`;
    return formattedDate;
  };
  const data =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis dolore incidunt repudiandae, unde quidem, pariatur quos sed, magnam distinctio maxime dolorem doloremque tempora fugiat ex facere id quibusdam saepe ut. Perferendis est voluptas maxime dicta sed molestiae doloribus explicabo incidunt expedita, deserunt adipisci sequi quas veritatis necessitatibus facere a labore optio recusandae fugiat magnam velit reiciendis facilis! Porro voluptate accusantium ut, quisquam perferendis sint modi distinctio, dicta dolor nesciunt reprehenderit repellendus. Nobis id libero quo natus, nostrum quam placeat.";
  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Чат"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>

      <div className="max-container">
        <div className="mx-auto flex w-full flex-col gap-y-[10px] sm:max-w-[90%] md:max-w-[70%]">
          {convos?.map((item, idx) => (
            <Link
              href={`/profile/chat/${item?.id}`}
              className="flex w-full cursor-pointer items-end justify-between border-b border-slate-400 px-[5px] py-1"
            >
              <div className="flex items-center gap-x-2">
                <Image
                  src={item?.receiver?.avatar || profileImageDefault}
                  width={50}
                  height={50}
                  objectFit="cover"
                  className="rounded-full"
                />

                <div className="">
                  <h4 className="text-base font-semibold md:text-lg">
                    {item?.receiver?.username}
                  </h4>
                  <p className="text-sm text-zinc-400 md:text-base">
                    {width > 768
                      ? data?.slice(0, 55)
                      : width > 640
                        ? data?.slice(0, 70)
                        : data?.slice(0, 30) || "Чат создан"}
                  </p>
                </div>
              </div>
              <span className="text-sm">
                {item?.last_message?.timestamp &&
                  dateFormatter(item?.last_message?.timestamp)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatPage;

"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import sendProjectImage from "@/assets/images/sendImage.png";
import Button from "@/components/Button";
import HomeBlogs from "@/components/sections/HomeBlogs";
import CreateProject from "@/components/profile/create/form";

const CreateProjectProfile = () => {
  const [isSendForm, setIsSendForm] = useState(false);

  return (
    <section>
      {!isSendForm ? (
        <CreateProject setIsSendForm={setIsSendForm} />
      ) : (
        <div className="mb-[100px] mt-[60px] md:mb-[150px]">
          <div className="mb-[100px] bg-secondary py-[30px] md:mb-[150px] md:py-[100px]">
            <div className="max-container flex flex-col justify-between gap-[30px] lg:flex-row">
              <div className="flex flex-col lg:items-start lg:text-left">
                <h2 className="text-[28px]max-w-[727px] mb-[10px] font-bold leading-[120%] text-gray-dark md:mb-[30px] md:text-[36px] lg:text-[42px] xl:text-[64px]">
                  Ваш проект отправлен на модерацию
                </h2>
                <p className="wrap-balance mb-[30px] max-w-[620px] text-base font-light leading-[110%] text-gray-light md:mb-[60px] md:!text-[26px] lg:text-[32px]">
                  Как только мы увидим ваш проект и убедимся, что он не нарушает
                  правила нашего сервиса, то сразу сообщим вам о решении на
                  почту
                </p>
                <Link href={"/profil"}>
                  <Button
                    text="Личный кабинет"
                    style={"font-light text-sm !py-5 w-[230px]"}
                    primary
                    extraSmall
                  />
                </Link>
              </div>
              <Image
                src={sendProjectImage}
                alt="image"
                priority={true}
                width={0}
                height={0}
                className="md:h-80max-w-full object-contain lg:h-auto lg:!max-w-[500px] 2xl:max-w-[700px]"
              />
            </div>
          </div>
          <HomeBlogs />
        </div>
      )}
    </section>
  );
};

export default CreateProjectProfile;

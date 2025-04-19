"use client";
import React, { useState } from "react";
import MainSettings from "./mainSettings";
import ContactSettings from "./contactSettings";

const ProfileSettings = () => {
  const [activeSettings, setActiveSettings] = useState("main-settings");

  const profileSettings = {
    "main-settings": <MainSettings />,
    "contact-settings": <ContactSettings />,
  };

  return (
    <section>
      <div className="max-container mb-[100px] mt-[30px] md:mb-[150px] md:mt-[100px]">
        <div className="mb-[60px] flex flex-col items-center">
          <h2 className="mb-[30px] text-[24px] font-bold text-gray-dark md:text-[32px]">
            Настройки
          </h2>
          <ul className="flex gap-[80px]">
            <li
              data-form="main-settings"
              className={`cursor-pointer border-b pb-[5px] text-[14px] font-semibold leading-[24px] ${activeSettings == "main-settings" ? "border-primary text-primary" : "border-transparent text-gray-light"}`}
              onClick={() => setActiveSettings("main-settings")}
            >
              Основное
            </li>
            <li
              className={`cursor-pointer border-b pb-[5px] text-[14px] font-semibold leading-[24px] ${activeSettings == "contact-settings" ? "border-primary text-primary" : "border-transparent text-gray-light"}`}
              onClick={() => setActiveSettings("contact-settings")}
            >
              Контакты
            </li>
          </ul>
        </div>

        {profileSettings[activeSettings]}
      </div>
    </section>
  );
};

export default ProfileSettings;

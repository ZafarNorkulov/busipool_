"use client";
import { getProfile } from "@/app/api/profile/profile";
import React, { useEffect, useState } from "react";

const ChatBubble = ({ message, isSent, user }) => {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setCurrentUser(JSON.parse(storedUser));
  }, []);

  return (
    <div
      className={`${isSent && "ml-auto"} mt-[30px] flex w-max max-w-[355px] flex-col gap-y-[5px] leading-[120%] text-gray-dark sm:max-w-[50%] md:gap-y-[10px] lg:max-w-[37.5%]`}
    >
      <h3 className="user text-base font-bold md:text-xl">
        {currentUser?.id !== user?.id ? user?.username : "Вы"}
      </h3>
      <p
        className={`text-sm font-light md:text-lg ${isSent && "text-primary"}`}
      >
        {message}
      </p>
    </div>
  );
};
export default ChatBubble;

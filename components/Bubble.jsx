"use client";
import React, { useEffect, useState } from "react";

const ChatBubble = ({ message, isSent, user }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(storedUser);
  }, []);

  if (!(user && currentUser)) {
    return <div>Загрузка...</div>;
  }
  return (
    <div
      className={`${isSent && "ml-auto"} mt-[30px] flex w-max max-w-[355px] flex-col gap-y-[5px] leading-[120%] text-gray-dark sm:max-w-[50%] md:gap-y-[10px] lg:max-w-[37.5%]`}
    >
      <h3 className="user text-base font-bold md:text-xl">
        {isSent ? "Вы" : currentUser?.username}
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

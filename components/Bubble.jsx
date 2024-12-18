"use client";
import React, { useEffect, useState } from "react";

const ChatBubble = ({ message, isSent }) => {
  const [receiver, setReceiver] = useState("");
  useEffect(() => {
    const receive = localStorage.getItem("receiver");
    setReceiver(receive);
  }, []);

  {
  }
  return (
    <div className="chat-content h-full max-h-[510px] overflow-y-scroll">
      {!isSent ? (
        <div className="mt-[30px] flex w-[70%] max-w-[355px] flex-col gap-y-[5px] leading-[120%] text-gray-dark sm:w-[50%] md:gap-y-[10px] lg:w-[37.5%]">
          <h3 className="user text-base font-bold md:text-xl">
            {receiver?.first_name} {receiver?.last_name}
          </h3>
          <p className="text-sm font-light md:text-lg">{message}</p>
        </div>
      ) : (
        <div className="ml-auto mt-[30px] flex w-max max-w-[355px] flex-col gap-y-[5px] leading-[120%] text-gray-dark sm:max-w-[50%] md:gap-y-[10px] lg:max-w-[37.5%]">
          <h3 className="user text-base font-bold md:text-xl">Вы</h3>
          <p className="text-sm font-light text-primary md:text-lg">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};
export default ChatBubble;

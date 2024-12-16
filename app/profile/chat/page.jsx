import Head from "next/head";
import React from "react";
import FeedbackChat from "@/components/FeedbackChat";

const Chat = () => {
  return (
    <>
      <Head></Head>
      <section>
        <div className="max-container">
          <div className="mx-auto flex w-full max-w-[1068px] flex-col items-center justify-center">
            <div className="title mb-[46px] flex flex-col items-center gap-y-[30px] font-bold leading-[120%] text-gray-dark">
              <h3 className="text-xl md:text-2xl">Беседа с пользователем</h3>
              <div className="flex gap-x-[60px] text-lg md:text-xl">
                <h4>Абрамов Филипп</h4>
                <h4>+7(932)432-54-32</h4>
              </div>
            </div>
            <FeedbackChat />
          </div>
        </div>
      </section>
    </>
  );
};
export default Chat;

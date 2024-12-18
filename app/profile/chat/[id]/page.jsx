"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { getConversationById } from "@/app/api/chat/chat";
import { useParams } from "next/navigation";
import Bubble from "@/components/Bubble";
import useWebSocket from "@/hooks/useWebSocket";

const Chat = () => {
  const [allMessages, setAllMessages] = useState();
  const [message, setMessage] = useState("");
  const params = useParams();
  const [receiver, setReceiver] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("receiver");
    const access_token = localStorage.getItem("access_token");
    setToken(access_token);
    setReceiver(JSON.parse(user));
  }, []);
  const webSocketUrl = `${process.env.NEXT_PUBLIC_SOCKET_URL}/ws/chat/${`${params?.id || ""}/`}?token=${token}`;
  const { messages, sendMessage } = useWebSocket(webSocketUrl);
  useEffect(() => {
    if (token) {
      getMessages();
    }
  }, [token]);

  const getMessages = async () => {
    try {
      const conversationRes = await getConversationById({
        convo_id: params?.id,
        token,
      });
      setAllMessages(conversationRes.data || []);
    } catch (error) {
      console.log("error");
      if (error && typeof error === "object" && "response" in error) {
        if (error.response.status === 302) {
          getConversationById(err.response.data.id).then((res) => {
            setAllMessages(res.data.message_set || []);
          });
        } else {
          console.error("Error Data:", err.response.data);
        }
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  };
  // console.log(allMessages);

  return (
    <>
      <Head></Head>
      <section>
        <div className="max-container">
          <div className="mx-auto flex w-full max-w-[1068px] flex-col items-center justify-center">
            <div className="title mb-[46px] flex flex-col items-center gap-y-[30px] font-bold leading-[120%] text-gray-dark">
              <h3 className="text-xl md:text-2xl">Беседа с пользователем</h3>
              <div className="flex gap-x-[60px] text-lg md:text-xl">
                <h4>
                  {receiver?.first_name} {receiver?.last_name}
                </h4>
                <h4>{receiver?.phone}</h4>
              </div>
            </div>
            <div className="chat relative h-[600px] w-full border border-gray-dark px-[20px] py-[20px] md:h-[785px] md:px-[60px] md:py-[30px]">
              {messages?.map((item, idx) => (
                <Bubble
                  message={item?.text}
                  isSent={item?.sender_type === "initiator"}
                  key={idx}
                />
              ))}
              {allMessages?.map((item, idx) => (
                <Bubble
                  message={item?.text}
                  isSent={item?.sender_type === "initiator"}
                  key={idx}
                />
              ))}
              <div className="absolute bottom-5 left-5 flex w-[calc(100%-40px)] flex-col gap-y-[30px] md:bottom-[60px] md:left-[30px] md:w-[calc(100%-60px)]">
                <div className="mx-auto h-[1px] w-[60%] bg-gray-dark opacity-60"></div>
                <div className="flex flex-row items-baseline gap-x-5 md:gap-x-[30px]">
                  <textarea
                    placeholder="Напишите сообщение"
                    rows={1}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none border border-gray-dark p-[10px] text-sm font-light leading-6 placeholder:text-gray-dark focus-visible:rounded-none focus-visible:outline-primary md:p-5"
                  />
                  <button
                    onClick={() => sendMessage({ message })}
                    className="w-[180px] rounded-[5px] bg-primary py-[10px] text-sm font-bold leading-6 text-white md:w-[246px] md:py-5"
                  >
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Chat;

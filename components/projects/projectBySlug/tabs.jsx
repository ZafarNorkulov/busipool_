"use client";
import React, { useEffect, useState } from "react";
import { getComments, postComment } from "@/app/api/projects/project";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useParams, useRouter } from "next/navigation";
import { checkConversation, startConvo } from "@/app/api/chat/chat";

const ProjectTabs = ({ data }) => {
  const [commentData, setCommentData] = useState("");
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("access_token");
      const storedUser = localStorage.getItem("user");
      setUser(JSON.parse(storedUser ? storedUser : {}));
      setToken(storedToken);
    }
  }, []);
  const fetchComments = async () => {
    getComments(id, token).then((res) => {
      const reversedData = res.reverse();
      setComments(reversedData);
    });
  };
  useEffect(() => {
    fetchComments();
  }, [id, token]);

  const sendComment = () => {
    const comment = {
      comment: commentData,
      owner: user?.id,
      project: data?.id,
    };
    postComment(comment, token)
      .then((res) => {})
      .finally(setCommentData(""));
  };

  const handleSendMessage = async () => {
    const receiver = data?.owner;
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
    <div className="w-full lg:w-[54%] 2xl:w-[57%]">
      <Tabs>
        <TabList
          className={"md:mv-[60px] mb-[30px] flex gap-14 text-[#4F4F4F]"}
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
              __html: data?.detailed_description,
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

            <button
              className="mt-8 h-[65px] w-full rounded-[6px] bg-primary text-[22px] font-normal text-white"
              onClick={handleSendMessage}
            >
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
  );
};

export default ProjectTabs;

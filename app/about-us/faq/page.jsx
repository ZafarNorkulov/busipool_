"use client";
import React, { useEffect, useState } from "react";
import Accordion from "@/components/Accordion";
import HomeBlogs from "@/components/sections/HomeBlogs";
import Question from "@/assets/images/_.png";
import { getFaqs } from "@/app/api/blogs/blogs";
import Image from "next/image";
import SwiperSection from "@/components/SwiperSection";
import Head from "next/head";

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetchFaqsApi();
  }, []);

  function fetchFaqsApi() {
    getFaqs().then((response) => {
      console.log(response);
      setFaqs(response);
    });
  }

  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Faq"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <div className="max-container mb-[100px] pt-[100px] md:mb-[150px] md:pt-[150px]">
        <h2 className="section-title mb-[30px]">Вопрос-ответ</h2>

        <div className="mx-auto max-w-[1140px]">
          <div className="flex items-center gap-4">
            <Image src={Question} width={30} height={30} alt="img" />
            {faqs?.map((faq) => (
              <Accordion
                key={faq.id}
                title={faq.title}
                description={faq.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-[177px]">
        <h2 className="section-title my-[100px]">Актуальные проекты</h2>
        <SwiperSection />
      </div>
      <HomeBlogs />
    </>
  );
};

export default FAQPage;

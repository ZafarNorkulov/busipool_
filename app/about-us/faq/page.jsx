"use client"
import React, { useEffect, useState } from "react";

import Accordion from "@/components/Accordion";
import HomeBlogs from "@/components/sections/HomeBlogs";

import { getFaqs } from "@/app/api/blogs/blogs";


const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetchFaqsApi();
  }, []);

  function fetchFaqsApi() {
    getFaqs().then((response) => {
      console.log(response);
      setFaqs(response);
    })
  }


  return (
    <>
      <div className="max-container mb-[100px] pt-[100px] md:mb-[150px] md:pt-[150px]">
        <h2 className="section-title mb-[30px]">Вопрос-ответ</h2>

        <div className="mx-auto max-w-[1140px]">
          {
            faqs?.map((faq) => (
              <Accordion key={faq.id} title={faq.title} description={faq.description} />
            ))
          }
        </div>
      </div>

      <HomeBlogs />
    </>
  );
};

export default FAQPage;

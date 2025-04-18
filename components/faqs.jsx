"use client";
import { getFaqs } from "@/app/api/blogs/blogs";
import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";

const Faqs = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetchFaqsApi();
  }, []);

  function fetchFaqsApi() {
    getFaqs().then((response) => {
      setFaqs(response);
    });
  }

  return (
    <div className="relative">
      <h2 className="section-title mb-[30px] mt-[100px] 2xl:mb-[100px]">
        Финансовые инструменты
      </h2>

      <div className="mx-auto max-w-[1140px] gap-3 md:mx-[8%]">
        {faqs?.map((faq) => (
          <Accordion
            key={faq.id}
            title={faq.title}
            description={faq.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;

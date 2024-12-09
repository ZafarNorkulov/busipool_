"use client";
import HomeBlogs from "@/components/sections/HomeBlogs";
import { getPartnersLogo } from "../../api/partners/partner";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

const PartnersPage = () => {
  const [partners, setPartners] = useState();

  function fetchPartnerwithLogo() {
    getPartnersLogo()
      .then((response) => {
        setPartners(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchPartnerwithLogo();
  }, []);

  return (
    <>
      <Head>
        <title>{"BUSIPOOL | Партнеры"}</title>
        <meta
          name="description"
          content={
            "Сбор денег для бизнеса, технологических, творческих и социальных проектов"
          }
        />
        <link rel="icon" href="/Fav.png" />
      </Head>
      <div className="max-container mt-[100px] md:mt-[150px]">
        <h2 className="section-title mb-[60px] md:mb-[100px]">Наши партнеры</h2>

        <div className="mb-[100px] flex grid-cols-12 flex-wrap gap-x-[40px] gap-y-[60px] sm:grid md:mb-[150px]">
          {partners?.map((logo, index) => (
            <div
              key={index}
              className="col-span-6 w-[calc(50%-20px)] sm:w-auto md:col-span-3"
            >
              <img
                src={logo?.image}
                className="h-full w-full object-cover"
                alt={logo?.name}
              />
            </div>
          ))}
        </div>
      </div>
      <HomeBlogs />
    </>
  );
};

export default PartnersPage;

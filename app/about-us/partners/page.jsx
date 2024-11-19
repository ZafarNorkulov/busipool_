"use client";
import HomeBlogs from "@/components/sections/HomeBlogs";
import { getPartnersLogo } from "../../api/partners/partner"
import { useEffect, useState } from "react";
import Image from "next/image";


const PartnersPage = () => {
  const [partners, setPartners] = useState()

  function fetchPartnerwithLogo() {
    getPartnersLogo().then(response => {
      setPartners(response)
    }).catch((error) => {
      console.log(error);
    })

  }
  useEffect(() => {
    fetchPartnerwithLogo()
  }, [])
  return (
    <>
      <div className="max-container mt-[100px] md:mt-[150px]">
        <h2 className="section-title mb-[60px] md:mb-[100px]">Наши партнеры</h2>

        <div className="grid grid-cols-12 gap-x-[40px] mb-[100px] gap-y-[60px] md:mb-[150px]  ">
          {partners?.map((logo, index) => (
            <div key={index} className="col-span-6 md:col-span-3 ">
              <img src={logo?.image} className="object-cover w-full h-full" alt={logo?.name} />
            </div>
          ))}
         
        </div>
      </div>
      <HomeBlogs />
    </>
  );
};

export default PartnersPage;

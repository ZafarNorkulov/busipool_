"use client";
import { getPartnersLogo } from "@/app/api/partners/partner";
import { useEffect, useState } from "react";

const PartnersList = () => {
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
  );
};

export default PartnersList;

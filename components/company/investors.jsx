"use client";
import { getProjectSubCategory } from "@/app/api/projects/project";
import React, { useEffect, useState } from "react";
import InvestorCardLink from "./InvestorCardLink";

const CompanyInvestors = () => {
  const [investors, setInvestors] = useState([]);

  const getInverstors = () => {
    getProjectSubCategory().then((response) => {
      setInvestors(response);
    });
  };

  useEffect(() => {
    getInverstors();
  }, []);
  return (
    <div>
      <h2 className="section-title mb-[60px] md:mb-[100px]">База инвесторов</h2>

      <div className="grid grid-cols-12 gap-[30px] md:gap-[20px]">
        {investors.map((investor, index) => (
          <div className="col-span-6 sm:col-span-4 md:col-span-4">
            <InvestorCardLink
              key={index}
              name={investor.name}
              id={investor.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyInvestors;

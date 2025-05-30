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
        {investors.map((investor, index) => {
          const isLastRow = index >= Math.floor(investors.length / 3) * 3;
          const colSpanClass = isLastRow ? "sm:col-span-6" : "sm:col-span-4";

          return (
            <div key={index} className={`col-span-6 ${colSpanClass}`}>
              <InvestorCardLink name={investor.name} slug={investor.slug} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyInvestors;

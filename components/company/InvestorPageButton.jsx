"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const InvestorPageButton = ({ investor, id }) => {
  console.log(investor == id);
  return (
    <Link
      href={`/company/${investor.id}`}
      className={`text-nowrap rounded-[5px] border px-[30px] py-[15px] font-bold opacity-75 transition active:scale-[0.99] ${investor?.id == id ? "bg-primary text-white" : "text-gray-light"}`}
    >
      {investor.name}
    </Link>
  );
};

export default InvestorPageButton;

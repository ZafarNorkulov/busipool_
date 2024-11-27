"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, onclick }) => {
  const path = usePathname();

  return (
    <li className="relative" onClick={onclick}>
      <Link
        className={`flex items-center font-bold uppercase leading-normal hover:text-primary focus:text-primary focus-visible:text-primary active:text-primary xl:text-base text-sm ${path == href && "text-primary"}`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;

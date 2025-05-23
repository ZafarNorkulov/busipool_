"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, onclick }) => {
  const path = usePathname();
  const isActive = href === "" ? path === "/" : path.includes(`/${href}`);

  return (
    <li className="relative" onClick={onclick}>
      <Link
        className={`flex items-center text-sm font-bold uppercase !leading-5 hover:text-primary focus:text-primary focus-visible:text-primary active:text-primary xl:text-base ${isActive && "text-primary"}`}
        href={`/${href}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;

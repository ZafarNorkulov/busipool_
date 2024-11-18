"use client";
import Footer from "@/components/sections/Footer";
import { usePathname } from "next/navigation";
import Scroll from "@/components/Scroll";
import dynamic from "next/dynamic";
const Navbar = dynamic(()=>import("@/components/Navbar"),{
  ssr:false
})

const MainLayoutBody = ({ children }) => {
  const path = usePathname();

  const authPathnames = ["/sign-in", "/sign-up", "/sign-up/confirm"];

  return (
    <body>
      <Scroll />
      {!authPathnames.includes(path) && <Navbar />}

      {children}

      {!authPathnames.includes(path) && <Footer />}
    </body>
  );
};

export default MainLayoutBody;

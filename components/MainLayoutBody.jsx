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

  const signInPathnames = ["/sign-in", "/sign-up", "/sign-up/confirm"];

  return (
    <body>
      <Scroll />
      {!signInPathnames.includes(path) && <Navbar />}

      {children}

      {!signInPathnames.includes(path) && <Footer />}
    </body>
  );
};

export default MainLayoutBody;

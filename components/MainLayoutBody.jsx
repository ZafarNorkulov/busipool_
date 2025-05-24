"use client";
import Footer from "@/components/sections/Footer";
import { usePathname } from "next/navigation";
import Scroll from "@/components/Scroll";
import dynamic from "next/dynamic";
import FloatMenuButton from "@/components/FloatButton";
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const MainLayoutBody = ({ children }) => {
  const path = usePathname();

  const authPathnames = [
    "/voyti",
    "/registratsiya",
    "/registratsiya/podtverdit",
  ];

  return (
    <body>
      <Scroll />
      {!authPathnames.includes(path) && <Navbar />}

      {children}
      <FloatMenuButton />
      {!authPathnames.includes(path) && <Footer />}
    </body>
  );
};

export default MainLayoutBody;

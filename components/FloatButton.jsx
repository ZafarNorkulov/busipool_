import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Fab = dynamic(() => import("react-tiny-fab").then((mod) => mod.Fab), {
  ssr: false,
});
const Action = dynamic(
  () => import("react-tiny-fab").then((mod) => mod.Action),
  {
    ssr: false,
  },
);
import "react-tiny-fab/dist/styles.css";
import Image from "next/image";
import Whatsapp from "@/assets/images/social/whatsapp-colored.svg";
import Telegram from "@/assets/images/social/telegram-colored.svg";
import vk from "@/assets/images/social/vk-colored.svg";
import phone from "@/assets/images/social/phone-colored.png";

const FloatMenuButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const socials = [
    {
      src: vk,
      href: "https://vk.com/busipool",
      alt: "VK",
      background: "#1976d2",
    },
    {
      src: Telegram,
      href: "https://t.me/busipool",
      alt: "Telegram",
      background: "#2ab4f5",
    },
    {
      src: Whatsapp,
      href: "https://wa.me/79265828518",
      alt: "Whatsapp",
      background: "#40c251",
    },
    { src: phone, href: "tel", alt: "Телефон", background: "#fff" },
  ];

  if (!isClient) return null; // Serverda hech narsa qaytarmaydi

  return (
    <Fab
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      }
      mainButtonStyles={{ backgroundColor: "rgb(121 164 113)" }}
      event="click"
    >
      {socials.map((item) => (
        <Action
          text={item.alt}
          key={item.src}
          style={{ backgroundColor: item.background, padding: 4 }}
        >
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <Image src={item.src} width={40} height={40} alt="" />
          </a>
        </Action>
      ))}
    </Fab>
  );
};

export default FloatMenuButton;

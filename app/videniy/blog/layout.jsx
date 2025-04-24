import React from "react";

export const metadata = {
  title: "Блог | BUSIPOOL",
  description:
    "Новости, статьи и аналитика по инвестициям и краудфандингу. Следите за последними обновлениями и экспертными мнениями на нашей платформе. Блог",
  icons: {
    icon: "/rocket.svg",
  },
};

const Layout = ({ children }) => {
  return <>{children}</>;
};

export default Layout;

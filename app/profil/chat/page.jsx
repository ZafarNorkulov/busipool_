import ChatList from "@/components/profile/chat";

export const metadata = {
  title: "BUSIPOOL | Чат список",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const ChatPage = () => {
  return <ChatList />;
};

export default ChatPage;

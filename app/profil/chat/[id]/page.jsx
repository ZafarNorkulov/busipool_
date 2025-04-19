import ChatById from "@/components/profile/chat/chatById";

export const metadata = {
  title: "BUSIPOOL | Беседы",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const Chat = () => {
  return <ChatById />;
};
export default Chat;

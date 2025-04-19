import Register from "@/components/auth/register";

export const metadata = {
  title: "BUSIPOOL | Регистрация",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const SignUpPage = () => {
  return <Register />;
};

export default SignUpPage;

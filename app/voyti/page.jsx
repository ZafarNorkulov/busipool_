import Login from "@/components/auth/login";

export const metadata = {
  title: "BUSIPOOL | Войти",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const SignInPage = () => {
  return <Login />;
};

export default SignInPage;

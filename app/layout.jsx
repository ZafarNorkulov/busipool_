import "@/assets/styles/globals.css";
import AuthProvider from "@/components/AuthProvider";
import MainLayoutBody from "@/components/MainLayoutBody";

export const metadata = {
  title: "BUSIPOOL | Инвестиции в будущее",
  description: "Инвестиции в будущее",
  keywords:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/rocket.svg" type="image/svg+xml" />
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>

        <MainLayoutBody children={children} />
      </html>
    </AuthProvider>
  );
};

export default MainLayout;

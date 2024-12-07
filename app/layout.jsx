"use client";
import "@/assets/styles/globals.css";
import MainLayoutBody from "@/components/MainLayoutBody";
import store from "@/store";
import { Provider } from "react-redux";
  


const MainLayout = ({ children }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default MainLayout;

"use client";
import "@/assets/styles/globals.css";
import MainLayoutBody from "@/components/MainLayoutBody";
import store from "@/store";
import Head from "next/head";
import { Provider } from "react-redux";

const MainLayout = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <html lang="en">
          <Head>
            <link rel="icon" href="/rocket.svg" type="image/svg+xml" />
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(99335993, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
              });
            `,
              }}
            ></script>
          </Head>

          <MainLayoutBody children={children} />
          <div>
            <img
              src="https://mc.yandex.ru/watch/99335993"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </html>
      </Provider>
    </>
  );
};

export default MainLayout;

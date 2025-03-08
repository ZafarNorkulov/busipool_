import MainLayoutBody from "@/components/MainLayoutBody";
import Head from "next/head";
import "@/assets/styles/globals.css";
import ReduxProvider from "@/providers/reduxProvider";

export const metadata = {
  title: "Busipool",
  description:
    "Сбор денег для бизнеса, технологических, творческих и социальных проектов",
  icons: {
    icon: "/rocket.svg",
  },
};

const MainLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <Head>
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
        <ReduxProvider>
          <MainLayoutBody children={children} />
          <div>
            <img
              src="https://mc.yandex.ru/watch/99335993"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </ReduxProvider>
      </html>
    </>
  );
};

export default MainLayout;

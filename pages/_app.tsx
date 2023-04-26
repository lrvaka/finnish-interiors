import "../styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "../components/ui/Loading";
import { Inter } from "@next/font/google";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import gsap from "gsap";
import { useRouter } from "next/router";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState, useRef } from "react";
import InitialLoadContext from "../store/initialLoad-context";
import Navbar from "../components/ui/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

export default function App({ Component, pageProps }: AppProps) {
  const [firstLoad, setFirstLoad] = useState(false);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}')
        `}
      </Script>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <InitialLoadContext.Provider
        value={{
          firstLoad,
          setFirstLoad,
        }}
      >
        <Navbar />

        <Component {...pageProps} firstLoad={firstLoad} />
      </InitialLoadContext.Provider>
    </>
  );
}

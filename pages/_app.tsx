import "../styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "../components/ui/Loading";
import { Inter } from "@next/font/google";
import GsapContext from "../store/gsap-context";
import { useRef } from "react";
import gsap from "gsap";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const mainTimeline = useRef<GSAPTimeline>(gsap.timeline());

  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <GsapContext.Provider value={{ mainTimeline }}>
        <Loading />
        <Component {...pageProps} />
      </GsapContext.Provider>
    </>
  );
}

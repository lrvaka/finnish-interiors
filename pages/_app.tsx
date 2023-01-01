import "../styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "../components/ui/Loading";
import { Inter } from "@next/font/google";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import gsap from "gsap/dist/gsap";
import { useRouter } from "next/router";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>

      <Component {...pageProps} />
    </>
  );
}

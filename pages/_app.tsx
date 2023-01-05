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
import { useEffect, useState, createContext } from "react";
import InitialLoadContext from "../store/initialLoad-context";
import Navbar from "../components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

export default function App({ Component, pageProps }: AppProps) {
  const [firstLoad, setFirstLoad] = useState(false);

  return (
    <>
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

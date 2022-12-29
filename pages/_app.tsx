import "../styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "../components/ui/Loading";
import { Inter } from "@next/font/google";

import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

if (typeof window !== "undefined") {

}

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
      <Loading />
      <Component {...pageProps} />
    </>
  );
}

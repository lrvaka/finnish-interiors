import Head from "next/head";
import Hero from "../components/HomeComponents/Hero";
import Projects from "../components/HomeComponents/Projects";
import Navbar from "../components/ui/Navbar";
import Services from "../components/HomeComponents/Services";
import CTA from "../components/HomeComponents/CTA";
import AboutUs from "../components/HomeComponents/AboutsUs";
import WhyUs from "../components/HomeComponents/WhyUs";
import Footer from "../components/ui/Footer";
import Loading from "../components/ui/Loading";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useState, useCallback, useContext } from "react";
import InitialLoadContext from "../store/initialLoad-context";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

type CallbackType = (animation: GSAPTimeline, index: number | string) => void;

export default function Home({ firstLoad }: { firstLoad: boolean }) {
  // define a timeline
  const [tl, setTl] = useState<GSAPTimeline>();
  // pass a callback to child elements, this will add animations to the timeline

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  const addAnimation = useCallback<CallbackType>(
    (animation: GSAPTimeline, index: number | string) => {
      tl && tl.add(animation, index);
    },
    [tl]
  );

  return (
    <>
      {!firstLoad ? <Loading addAnimation={addAnimation} /> : null}
      <Head>
        <title>
          Finnish Interiors: New York City&apos;s Premier Interior Contracting
          Company
        </title>
        <meta
          name="description"
          content="Looking for professional and reliable interior contracting services in New York City? Look no further than Finnish Interiors. Our team of experienced contractors is dedicated to providing top-quality workmanship and attention to detail on every project. Contact us today for a consultation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-[95px] lg:pt-[121px]">
        <Hero addAnimation={addAnimation} />
        <Projects addAnimation={addAnimation} />
        <AboutUs />
        <Services />
        <CTA />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}

import Head from "../helpers/Head";
import Footer from "../components/ui/Footer";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../components/AboutComponents/Header";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import Stats from "../components/AboutComponents/Stats";
import Info from "../components/AboutComponents/Info";
import Values from "../components/AboutComponents/Values";

const meta = {
  title: "About Us - Finnish Interiors",
  description:
    "Learn more about New York City's leading interior contracting company",
  url: "https://www.finnishinteriors.com/about",
  twitter: "https://twitter.com/finnishinteriors",
  imageUrl: "https://www.finnishinteriors.com/twitter.png",
  imageAlt: "Finnish Interiors",
};

export default function About() {
  return (
    <>
      <Head heading={meta} />

      <main className="pt-[95px] lg:pt-[121px]">
        <Header />
        <Stats />
        <Info />
        <Values />
      </main>
      <Footer />
    </>
  );
}

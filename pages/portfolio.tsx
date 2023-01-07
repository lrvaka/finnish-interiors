import Head from "../helpers/Head";
import Footer from "../components/ui/Footer";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../components/PortfolioComponents/Header";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import PortfolioItems from "../components/PortfolioComponents/PortfolioItems";

const meta = {
  title: "Portfolio - Finnish Interiors",
  description:
    "Check out what New York City's leading interior contracting company has been working on over the past few years!",
  url: "https://www.finnishinteriors.com/portfolio",
  twitter: "https://twitter.com/finnishinteriors",
  imageUrl: "https://www.finnishinteriors.com/twitter.jpeg",
  imageAlt: "Finnish Interiors",
};

export default function Portfolio() {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <>
      <Head heading={meta} />

      <main className="pt-[95px] lg:pt-[121px]">
        <Header />
        <PortfolioItems />
      </main>
      <Footer />
    </>
  );
}

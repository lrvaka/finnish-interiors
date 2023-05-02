import Head from "../helpers/Head";
import ContactForm from "../components/ContactComponents/ContactForm";
import Footer from "../components/ui/Footer";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

const meta = {
  title: "Contact Us - Finnish Interiors",
  description:
    "Get in touch with New York City's leading interior contracting company",
  url: "https://www.finnishinteriors.com/contact",
  twitter: "https://twitter.com/finnishinteriors",
  imageUrl: "https://www.finnishinteriors.com/twitter.png",
  imageAlt: "Finnish Interiors",
};

export default function Contact() {
  return (
    <>
      <Head heading={meta} />

      <main className="pt-[95px] lg:pt-[121px]">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

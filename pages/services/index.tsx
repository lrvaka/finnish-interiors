import Head from "../../helpers/Head";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ServicesComponents/Header";
import ServicesItems from "../../components/ServicesComponents/ServicesItems";

const meta = {
  title: "Services - Finnish Interiors",
  description:
    "See what New York City's leading interior contracting company has to offer",
  url: "https://www.finnishinteriors.com/services",
  twitter: "https://twitter.com/finnishinteriors",
  imageUrl: "https://www.finnishinteriors.com/twitter.png",
  imageAlt: "Finnish Interiors",
};

export default function Services() {
  return (
    <>
      <Head heading={meta} />

      <main className="pt-[95px] lg:pt-[121px]">
        <Header />
        <ServicesItems />
      </main>
      <Footer />
    </>
  );
}

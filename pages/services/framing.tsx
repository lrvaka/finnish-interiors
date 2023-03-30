import Head from "../../helpers/Head";
import { ServiceItemHeader } from "../../components/ServicesComponents/Header";
import { FcFrame } from "react-icons/fc";
import framingImg from "../../public/images/services/framing.jpeg";
import ServiceItemInfo from "../../components/ServicesComponents/ServiceItemInfo";
import MoreServices from "../../components/ServicesComponents/MoreServices";
import Footer from "../../components/ui/Footer";

const meta = {
  title: "Framing - Services - Finnish Interiors",
  description: "Experience premier framing servicing!",
  url: "https://www.finnishinteriors.com/services/framing",
  twitter: "https://twitter.com/finnishinteriors",
  imageUrl: "https://www.finnishinteriors.com/twitter.png",
  imageAlt: "Finnish Interiors",
};

const headerInfo = {
  name: "Framing",
  img: framingImg,
  description:
    "Constructing the framework for new interior spaces, such as walls and ceilings, as well as repairing or replacing damaged framing.",
  icon: FcFrame,
};

const whatsIncluded = [
  {
    name: "Interior Metal Stud Framing",
    desc: "Experience the strength and versatility of metal stud framing for your interior walls and partitions. Our expert team can design and install non-load-bearing metal stud walls, including 1-4hr fire rated partitions, elevator and MEP shafts, free-standing and knee-wall partitions, tailored to your specific requirements.",
  },

  {
    name: "Custom Curved Ceilings, Soffits, Light Coves, and Window Pocket Details",
    desc: "Transform your space with our expertly installed custom curved ceilings, soffits, light coves, and window pocket details, designed to enhance aesthetics and create a truly distinctive interior design.",
  },

  {
    name: "Load-Bearing Metal Framing",
    desc: "For projects that require additional structural support, our team is equipped to design and install load-bearing metal framing systems, providing the strength and durability you need without sacrificing design flexibility.",
  },

  {
    name: "Blocking for All Trades",
    desc: "Our comprehensive services include blocking for various trades, such as light fixtures, millwork, and mechanical in-wall and ceiling fixtures, ensuring seamless integration and optimal performance of all components within your space.",
  },

  {
    name: "Custom Metal Fabrication",
    desc: "Leverage our expertise in custom metal fabrication to create unique architectural elements, such as decorative metal screens, railings, and other features, for a truly distinctive interior design.",
  },
];

const whyUs = [
  {
    name: "Experienced Professionals",
    desc: "Our team of repair and restoration experts brings years of experience and extensive knowledge, ensuring that each project meets the highest standards of quality and precision.",
  },

  {
    name: "Comprehensive Solutions",
    desc: "We offer a wide range of repair and restoration services tailored to your specific needs, providing bespoke solutions for both residential and commercial spaces.",
  },

  {
    name: "Quality Materials",
    desc: "We utilize only the best materials in our repair and restoration projects, ensuring optimal performance, durability, and long-lasting results.",
  },

  {
    name: "Timely Project Completion",
    desc: "We understand the importance of meeting deadlines and work diligently to complete each project on schedule without compromising quality.",
  },

  {
    name: "Exceptional Customer Service",
    desc: "At Finnish Interiors, we prioritize client satisfaction and collaborate closely with you throughout the project to ensure your vision is realized to perfection.",
  },
];

const aboutTheService =
  "Your Trusted Partner for Exceptional Metal Framing Solutions in New York City! At Finnish Interiors, we specialize in providing high-quality metal framing services for both residential and commercial clients. Our team of skilled professionals is dedicated to delivering superior workmanship, exceptional customer satisfaction, and tailored solutions that cater to your unique needs.";

const Framing = () => {
  return (
    <>
      <Head heading={meta} />
      <main className="pt-[95px] lg:pt-[121px]">
        <ServiceItemHeader headerInfo={headerInfo} />
        <ServiceItemInfo
          whatsIncluded={whatsIncluded}
          whyUs={whyUs}
          aboutTheService={aboutTheService}
        />
        <MoreServices service="Framing" />
      </main>
      <Footer />
    </>
  );
};

export default Framing;

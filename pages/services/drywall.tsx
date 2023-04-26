import Head from "../../helpers/Head";
import { ServiceItemHeader } from "../../components/ServicesComponents/Header";
import { BiCog } from "react-icons/bi";
import drywallImg from "../../public/images/services/drywall.jpeg";
import ServiceItemInfo from "../../components/ServicesComponents/ServiceItemInfo";
import MoreServices from "../../components/ServicesComponents/MoreServices";
import Footer from "../../components/ui/Footer";

const meta = {
  title: "Drywall - Services - Finnish Interiors",
  description: "Experience premier drywall servicing!",
  url: "https://www.finnishinteriors.com/services/drywall",
  twitter: "https://twitter.com/finnishinteriors",
  imageUrl: "https://www.finnishinteriors.com/twitter.png",
  imageAlt: "Finnish Interiors",
};

const headerInfo = {
  name: "Drywall",
  img: drywallImg,
  description:
    "Installation of all classifications of drywall assemblies and high level finishes for paint, wallpaper and specialty plaster finishes.",
  icon: BiCog,
};

const whatsIncluded = [
  {
    name: "Drywall Installation",
    desc: "Experience expert installation of various drywall products tailored to your specific needs. We work with a range of materials, including fire-resistant, soundproof, moisture-resistant, and specialty drywall, to ensure optimal performance in every space.",
  },

  {
    name: "Drywall Finishing",
    desc: "Achieve the perfect finish for your walls with our comprehensive drywall finishing services. From a standard Level 3 paintable finish to a high-end Level 5 finish, we have you covered. Our skilled team can also prep walls for wallpaper, custom Venetian and Marmorino finishes, adding a touch of elegance to your interior.",
  },

  {
    name: "Access Door Installation and Finishing",
    desc: "Our team specializes in the installation and finishing of various types of access doors, including tappable, hidden, beaded, GRFG, and recessed doors for tile, ensuring seamless integration with your interior design.",
  },

  {
    name: "Column Enclosures",
    desc: "Upgrade your space with our expertly crafted column enclosures, available in a variety of styles, such as boxed, curved, and custom round designs, to blend seamlessly with your architectural elements.",
  },

  {
    name: "Ceiling Installations",
    desc: "Enhance your interior with our professional ceiling installation services. Custom and specialty ceilings such as Armstrong, Rulon, USG, and TURF, as well as sound isolation solutions to improve the acoustics in your space.",
  },
];

const whyUs = [
  {
    name: "Skilled Professionals",
    desc: "Our team of drywall experts boasts years of experience and extensive knowledge, ensuring that each project meets the highest standards of quality and precision.",
  },

  {
    name: "Customized Solutions",
    desc: "We offer a wide range of drywall services tailored to your specific project requirements and design preferences, providing bespoke solutions for both residential and commercial spaces.",
  },

  {
    name: "Quality Materials",
    desc: "We utilize only the best materials in our drywall projects, ensuring optimal performance, durability, and long-lasting results.",
  },

  {
    name: "Timely Project Completion",
    desc: "We understand the importance of meeting deadlines and work diligently to complete each project on schedule without compromising quality.",
  },

  {
    name: "Exceptional Customer Service",
    desc: "At Finnish Interiors, we prioritize client satisfaction and collaborate closely with you throughout the project to ensure your vision is brought to life.",
  },
];

const aboutTheService =
  "Your Expert Solution for Interior Repair and Restoration Services in the New York Metropolitan area! At Finnish Interiors, we are committed to providing exceptional repair and restoration services for both residential and commercial clients. Our team of skilled professionals takes pride in breathing new life into your interior spaces, combining outstanding craftsmanship and unparalleled customer satisfaction to ensure that your project is completed with precision, efficiency, and the highest quality standards.";

const Drywall = () => {
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
        <MoreServices service="Drywall" />
      </main>
      <Footer />
    </>
  );
};

export default Drywall;

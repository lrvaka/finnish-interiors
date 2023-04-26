import Head from "../../helpers/Head";
import { ServiceItemHeader } from "../../components/ServicesComponents/Header";
import { MdOutlineCleaningServices } from "react-icons/md";
import restorationImg from "../../public/images/services/restoration.jpg";
import ServiceItemInfo from "../../components/ServicesComponents/ServiceItemInfo";
import MoreServices from "../../components/ServicesComponents/MoreServices";
import Footer from "../../components/ui/Footer";

const meta = {
  title: "Restoration And Rescue - Services - Finnish Interiors",
  description: "Experience premier drywall servicing!",
  url: "https://www.finnishinteriors.com/services/restoration-rescue",
  twitter: "https://twitter.com/finnishinteriors",
  imageUrl: "https://www.finnishinteriors.com/twitter.png",
  imageAlt: "Finnish Interiors",
};

const headerInfo = {
  name: "Restoration and rescue",
  img: restorationImg,
  description:
    "We provide restoration and rescue services for damaged spaces and take on rescue projects, collaborating with contractors and architects to deliver high-end finished spaces.",
  icon: MdOutlineCleaningServices,
};

const whatsIncluded = [
  {
    name: "Structural Repairs",
    desc: "Rely on our expertise for all your structural repair needs, from fixing damaged load-bearing walls to addressing foundation issues, ensuring the safety and stability of your property.",
  },

  {
    name: "Water Damage Restoration",
    desc: "Trust our team to effectively mitigate water damage caused by leaks, floods, or plumbing issues, including the removal of excess water, drying, cleaning, and sanitizing your affected spaces.",
  },

  {
    name: "Fire and Smoke Damage Restoration",
    desc: "Let our experienced professionals restore your property after a fire, addressing structural damage, smoke and soot removal, odor elimination, and the cleaning and sanitizing of affected surfaces.",
  },

  {
    name: "Mold Remediation",
    desc: "Ensure a healthy indoor environment with our comprehensive mold remediation services, including mold inspection, removal, cleaning, and prevention, to protect your property and its occupants.",
  },

  {
    name: "Flooring Restoration and Rescue",
    desc: "Restore the beauty and functionality of your floors with our expert restoration and rescue services, including hardwood refinishing, tile regrouting, and carpet repair.",
  },

  {
    name: "Wall and Ceiling Repair",
    desc: "Revitalize your interior spaces with our professional wall and ceiling repair services, addressing issues like cracks, holes, water damage, and peeling paint, for a fresh, seamless finish.",
  },

  {
    name: "Window and Door Repair",
    desc: "Improve the functionality and aesthetics of your windows and doors with our expert repair services, including glass replacement, weatherstripping, and hardware upgrades.",
  },
];

const whyUs = [
  {
    name: "Experienced Professionals",
    desc: "Our team of restoration and rescue experts brings years of experience and extensive knowledge, ensuring that each project meets the highest standards of quality and precision.",
  },

  {
    name: "Comprehensive Solutions",
    desc: "We offer a wide range of restoration and rescue services tailored to your specific needs, providing bespoke solutions for both residential and commercial spaces.",
  },

  {
    name: "Quality Materials",
    desc: "We utilize only the best materials in our restoration and rescue projects, ensuring optimal performance, durability, and long-lasting results.",
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
  "Your Expert Solution for Interior Restoration and Rescue Services in the New York Metropolitan area! At Finnish Interiors, we are committed to providing exceptional restoration and rescue services for both residential and commercial clients. Our team of skilled professionals takes pride in breathing new life into your interior spaces, combining outstanding craftsmanship and unparalleled customer satisfaction to ensure that your project is completed with precision, efficiency, and the highest quality standards.";

const RepairAndRestoration = () => {
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

export default RepairAndRestoration;

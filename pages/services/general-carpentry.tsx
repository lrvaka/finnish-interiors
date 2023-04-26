import Head from "../../helpers/Head";
import { ServiceItemHeader } from "../../components/ServicesComponents/Header";
import { IoHammerOutline } from "react-icons/io5";
import carpentryImg from "../../public/images/home/about-us/img.jpg";
import ServiceItemInfo from "../../components/ServicesComponents/ServiceItemInfo";
import MoreServices from "../../components/ServicesComponents/MoreServices";
import Footer from "../../components/ui/Footer";

const meta = {
  title: "General carpentry - Services - Finnish Interiors",
  description: "Experience premier general carpentry servicing!",
  url: "https://www.finnishinteriors.com/services/general-carpentry",
  twitter: "https://twitter.com/finnishinteriors",
  imageUrl: "https://www.finnishinteriors.com/twitter.png",
  imageAlt: "Finnish Interiors",
};

const headerInfo = {
  name: "General carpentry",
  img: carpentryImg,
  description:
    "Custom millwork including specialty moldings, trim work and custom doors and frames.",
  icon: IoHammerOutline,
};

const whatsIncluded = [
  {
    name: "Custom Cabinetry and Shelving",
    desc: "Our expert carpenters can design and build beautiful, functional custom cabinets and shelves that will elevate your interior space and provide ample storage.",
  },

  {
    name: "Crown Molding and Trim Work",
    desc: "Add a touch of elegance and sophistication to your rooms with our expertly installed crown molding and trim work that seamlessly blends with your existing décor.",
  },

  {
    name: "Doors, Frames and Hardware",
    desc: "Upgrade your home or office with our perfectly crafted doors, frames, and hardware, designed to enhance aesthetics and improve security and energy efficiency.",
  },

  {
    name: "Wood Flooring Installation and Repair",
    desc: "Experience the warmth and charm of stunning wood floors, expertly installed and maintained by our seasoned carpenters.",
  },

  {
    name: "Partition Walls and Room Dividers",
    desc: "Maximize your living or working space with our custom-built partition walls and room dividers, tailored to suit your specific needs and preferences.",
  },

  {
    name: "Staircases and Railings",
    desc: "Ensure safety and style with our bespoke staircases and railings, crafted to complement your home's architecture and interior design.",
  },
];

const whyUs = [
  {
    name: "Experienced and Skilled Craftsmen",
    desc: "Our team of highly skilled carpenters boasts years of experience, ensuring that each project is completed to the highest standard.",
  },

  {
    name: "Exceptional Customer Service",
    desc: "We prioritize our clients' satisfaction and work closely with them throughout the project to ensure their vision is brought to life.",
  },

  {
    name: "Quality Materials",
    desc: "We use only the finest materials, ensuring that our carpentry work is durable, functional, and visually appealing.",
  },

  {
    name: "Timely Project Completion",
    desc: "We understand the importance of timely project completion and work diligently to finish each job on schedule.",
  },
];

const aboutTheService =
  "Your One-Stop Solution for Outstanding Interior Carpentry Services in the New York Metropolitan area! At Finnish Interiors, we are committed to delivering top-notch interior carpentry solutions for both residential and commercial clients. Our team of skilled and experienced carpenters is dedicated to transforming your space with meticulous craftsmanship and attention to detail.";

const GeneralCarpentry = () => {
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
        <MoreServices service="General carpentry" />
      </main>
      <Footer />
    </>
  );
};

export default GeneralCarpentry;

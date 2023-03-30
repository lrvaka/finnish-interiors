import NextLink from "next/link";
import Image from "next/image";
import gsap from "gsap";

import carpentryImg from "../../public/images/home/about-us/img.jpg";
import framingImg from "../../public/images/services/framing.jpeg";
import drywallImg from "../../public/images/services/drywall.jpeg";
import projectImg from "../../public/images/services/project-manage.jpeg";
import restorationImg from "../../public/images/services/restoration.jpg";

import { FcFrame } from "react-icons/fc";
import { IoHammerOutline } from "react-icons/io5";
import { BiCog } from "react-icons/bi";
import { MdOutlineCleaningServices } from "react-icons/md";

const services = [
  {
    name: "General carpentry",
    href: "/services/general-carpentry",
    img: carpentryImg,
    description:
      "Installing trim, molding, and other woodwork; building custom cabinets, shelving, and other storage solutions; and repairing or replacing damaged woodwork.",
    icon: IoHammerOutline,
  },
  {
    name: "Framing",
    href: "/services/framing",
    img: framingImg,
    description:
      "Constructing the framework for new interior spaces, such as walls and ceilings, as well as repairing or replacing damaged framing.",
    icon: FcFrame,
  },
  {
    name: "Drywall",
    href: "/services/drywall",
    img: drywallImg,

    description:
      "Installing new drywall, repairing damaged drywall, and finishing drywall surfaces with tape, joint compound, and texture.",
    icon: BiCog,
  },
  {
    name: "Repair and Restoration",
    href: "/services/repair-restoration",
    img: restorationImg,
    description:
      "We work with remediation companies to restore hospitality, commercial and residential spaces after damages caused by fire, flood and environmental issues.",
    icon: MdOutlineCleaningServices,
  },
  // {
  //   name: "Project management",
  //   img: projectImg,
  //   description:
  //     "Managing budgets and schedules to ensure that projects are completed on time and within budget, as well as obtaining necessary permits and ensuring that projects are completed in compliance with local building codes and regulations.",

  //   icon: FaHardHat,
  //   last: true,
  // },
];

const MoreServices = ({ service }: { service: string }) => {
  const onEnter = ({ currentTarget }: { currentTarget: any }) => {
    gsap.context(() => {
      gsap.to("#inner-img", {
        scale: 1.05,
        ease: "power4.easeOut",
      });

      gsap.to(currentTarget, {
        y: 10,
        ease: "power4.easeOut",
      });

      gsap.to("#heading", {
        color: "#00406A",
      });
    }, currentTarget); // <- IMPORTANT! Scopes selector text
  };

  const onLeave = ({ currentTarget }: { currentTarget: any }) => {
    gsap.context(() => {
      gsap.to("#inner-img", {
        scale: 1,
        ease: "power4.easeOut",
      });

      gsap.to(currentTarget, {
        y: 0,
        ease: "power4.easeOut",
      });

      gsap.to("#heading", {
        color: "#000000",
      });
    }, currentTarget); // <- IMPORTANT! Scopes selector text
  };

  return (
    <div className="bg-gray-100 ">
      <div className=" px-4 lg:px-6 py-20 z-10 relative flex flex-col max-w-screen-xl mx-auto overflow-hidden h-full">
        <div className=" relative z-20 flex flex-col lg:flex-row justify-between lg:items-end gap-5">
          {" "}
          <h2 className="text-black text-3xl lg:text-4xl font-bold">
            More of our services
          </h2>
          <NextLink
            href="/services"
            className=" max-w-max  border-theme-100 border-2 py-4 px-7 h-fit font-semibold text-theme-200 lg:text-lg transition-all hover:text-theme-200 hover:bg-theme-100 hover:scale-95"
          >
            All services
          </NextLink>
        </div>
        <div className="grid grid-cols-1 py-10 gap-10 flex-col lg:grid-cols-2">
          {services
            .filter((e, i) => e.name !== service)
            .slice(0, 2)
            .map((e, i) => (
              <NextLink
                href={e.href}
                key={e.name}
                className="cursor-pointer relative flex flex-col gap-6 border border-slate-200 border-b-theme-100 border-b-[5px] h-full"
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                <div
                  id="main-img"
                  className="relative w-full  z-10  h-[400px] overflow-hidden"
                >
                  <Image
                    id="inner-img"
                    className="object-cover"
                    fill
                    src={e.img}
                    alt={"beautiful picture of " + e.name}
                  />
                </div>
                <div className="p-10 h-[275px]">
                  <div className="flex h-20 w-20 items-center justify-center bg-theme-200 text-white sm:shrink-0 -mt-28 relative z-10 mb-5">
                    <e.icon className="h-16 w-16" aria-hidden="true" />
                  </div>
                  <div className="flex h-full flex-col justify-between sm:min-w-0 sm:flex-1">
                    <div>
                      <h2
                        id="heading"
                        className="text-2xl font-semibold leading-8 text-gray-900"
                      >
                        {e.name}
                      </h2>
                      <p className="mt-2 text-base leading-7 text-gray-600">
                        {e.description}
                      </p>
                    </div>
                    <div className="mt-5 text-theme-200 font-semibold text-lg underline">
                      Learn more
                    </div>
                  </div>
                </div>
              </NextLink>
            ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default MoreServices;

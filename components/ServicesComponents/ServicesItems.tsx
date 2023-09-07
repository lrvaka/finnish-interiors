import { useRef, useEffect } from "react";
import carpentryImg from "../../public/images/home/about-us/img.jpg";
import framingImg from "../../public/images/services/framing.jpeg";
import drywallImg from "../../public/images/services/drywall.jpeg";
import projectImg from "../../public/images/services/project-manage.jpeg";
import restorationImg from "../../public/images/services/restoration.jpg";
import Image from "next/image";
import NextLink from "next/link";
import gsap from "gsap";

import { FcFrame } from "react-icons/fc";
import { IoHammerOutline } from "react-icons/io5";

import { BiCog } from "react-icons/bi";
import { MdOutlineCleaningServices } from "react-icons/md";
import Modal from "../ui/Modal";

const services = [
  {
    name: "General carpentry",
    href: "/services/general-carpentry",
    img: carpentryImg,
    description:
      "Custom millwork including specialty moldings, trim work and custom doors and frames.",
    icon: IoHammerOutline,
    first: true,
  },
  {
    name: "Framing",
    href: "/services/framing",
    img: framingImg,
    description:
      "Construction of framework for new interior spaces such as wall, ceilings, custom soffits, light coves and curved ceilings.",
    icon: FcFrame,
  },
  {
    name: "Drywall",
    href: "/services/drywall",
    img: drywallImg,

    description:
      "Installation of all classifications of drywall assemblies and high level finishes for paint, wallpaper and specialty plaster finishes.",
    icon: BiCog,
  },
  // {
  //   name: "Restoration and rescue",
  //   href: "/services/restoration-rescue",
  //   img: restorationImg,
  //   description:
  //     "We provide restoration and rescue services for damaged spaces and take on rescue projects, collaborating with contractors and architects to deliver high-end finished spaces.",
  //   icon: MdOutlineCleaningServices,
  //   last: true,
  // },
  // {
  //   name: "Project management",
  //   img: projectImg,
  //   description:
  //     "Managing budgets and schedules to ensure that projects are completed on time and within budget, as well as obtaining necessary permits and ensuring that projects are completed in compliance with local building codes and regulations.",

  //   icon: FaHardHat,
  //   last: true,
  // },
];

const regularClass =
  "cursor-pointer relative flex flex-col gap-6 border border-slate-200 border-b-theme-100 border-b-[5px] h-max";
const firstClass =
  "cursor-pointer relative flex flex-col gap-6 border border-slate-200 lg:-mt-20 border-b-theme-100  border-b-[5px] h-max";
const lastClass =
  "cursor-pointer relative flex flex-col gap-6 border border-slate-200 lg:mt-20 border-b-theme-100  border-b-[5px] h-max";

export default function ServicesItems() {
  const container = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#header > *", {
        y: -10,
        opacity: 0,
      });

      gsap.set("#items > *", {
        y: -10,
        opacity: 0,
      });

      gsap.to("#header > *, #items > *", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom", // when the top of the trigger hits the top of the viewport
        },
        stagger: 0.2,
        y: 0,
        opacity: 1,
        ease: "power4.easeOut",
      });
    }, container); // <- IMPORTANT! Scopes selector text

    return () => {
      ctx.revert();
    }; // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div ref={container} className="bg-white my-28 lg:my-60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div
            id="items"
            className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"
          >
            {services.map((service) => (
              <NextLink
                href={service.href}
                key={service.name}
                className={
                  service.first
                    ? firstClass
                    : service.last
                    ? lastClass
                    : regularClass
                }
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
                    src={service.img}
                    alt={"beautiful picture of " + service.name}
                  />
                </div>
                <div className="p-10">
                  <div className="flex h-20 w-20 items-center justify-center bg-theme-200 text-white sm:shrink-0 -mt-28 relative z-10 mb-5">
                    <service.icon className="h-16 w-16" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <h2
                      id="heading"
                      className="text-2xl font-semibold leading-8 text-gray-900"
                    >
                      {service.name}
                    </h2>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>
                    <div className="mt-5 text-theme-200 font-semibold text-lg underline">
                      Learn more
                    </div>
                  </div>
                </div>
              </NextLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

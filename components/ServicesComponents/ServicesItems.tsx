import { useRef, useEffect } from "react";
import carpentryImg from "../../public/images/home/about-us/img.jpg";
import Image from "next/image";
import gsap from "gsap";

import { FcFrame } from "react-icons/fc";
import { IoHammerOutline } from "react-icons/io5";
import { FaHardHat } from "react-icons/fa";
import { BiCog } from "react-icons/bi";

const features = [
  {
    name: "General carpentry",
    img: carpentryImg,
    description:
      "Installing trim, molding, and other woodwork; building custom cabinets, shelving, and other storage solutions; and repairing or replacing damaged woodwork.",
    icon: IoHammerOutline,
    first: true,
  },
  {
    name: "Framing",
    img: carpentryImg,
    description:
      "Constructing the framework for new interior spaces, such as walls and ceilings, as well as repairing or replacing damaged framing.",
    icon: FcFrame,
  },
  {
    name: "Drywall installation and repair",
    img: carpentryImg,
    description:
      "Installing new drywall, repairing damaged drywall, and finishing drywall surfaces with tape, joint compound, and texture.",
    icon: FaHardHat,
  },
  {
    name: "Project management",
    img: carpentryImg,
    description:
      "Managing budgets and schedules to ensure that projects are completed on time and within budget, as well as obtaining necessary permits and ensuring that projects are completed in compliance with local building codes and regulations.",
    icon: BiCog,
    last: true,
  },
];

const regularClass =
  "relative flex flex-col gap-6 border border-slate-200 border-b-theme-100 border-b-[5px] h-max";
const firstClass =
  "relative flex flex-col gap-6 border border-slate-200 lg:-mt-20 border-b-theme-100  border-b-[5px] h-max";
const lastClass =
  "relative flex flex-col gap-6 border border-slate-200 lg:mt-20 border-b-theme-100  border-b-[5px] h-max";

export default function ServicesItems() {
  const container = useRef<HTMLDivElement | null>(null);

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
    <div ref={container} className="bg-white my-40 lg:my-60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div
            id="items"
            className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"
          >
            {features.map((feature) => (
              <div
                key={feature.name}
                className={
                  feature.first
                    ? firstClass
                    : feature.last
                    ? lastClass
                    : regularClass
                }
              >
                <div id="main-img" className="relative w-full  z-10  h-[400px]">
                  <Image
                    className="object-cover"
                    fill
                    src={feature.img}
                    alt={"beautiful picture of about us"}
                  />
                </div>
                <div className="p-10">
                  <div className="flex h-20 w-20 items-center justify-center bg-theme-200 text-white sm:shrink-0 -mt-28 relative z-10 mb-5">
                    <feature.icon className="h-16 w-16" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-gray-900">
                      {feature.name}
                    </p>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

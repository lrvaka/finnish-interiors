import { useRef, useEffect } from "react";
import gsap from "gsap";

import { FcFrame } from "react-icons/fc";
import { IoHammerOutline } from "react-icons/io5";
import { FaHardHat } from "react-icons/fa";
import { BiCog } from "react-icons/bi";

const features = [
  {
    name: "General carpentry",
    description:
      "Custom millwork including specialty moldings, trim work and custom doors and frames.",
    icon: IoHammerOutline,
  },
  {
    name: "Framing",
    description:
      "Construction of framework for new interior spaces such as wall, ceilings, custom soffits, light coves and curved ceilings.",
    icon: FcFrame,
  },
  {
    name: "Drywall",
    description:
      "Installation of all classifications of drywall assemblies and high level finishes for paint, wallpaper and specialty plaster finishes.",
    icon: FaHardHat,
  },
  // {
  //   name: "Restoration and rescue",
  //   description:
  //     "We provide restoration and rescue services for damaged spaces and take on rescue projects, collaborating with contractors and architects to deliver high-end finished spaces.",
  //   icon: BiCog,
  // },
];

export default function Services() {
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
        <div id="header" className="sm:text-center max-w-lg mx-auto">
          <div className="text-lg font-semibold text-theme-200">
            Our services
          </div>
          <h2 className="text-black text-3xl lg:text-4xl font-bold leading-tight">
            We cover a wide array of interior contracting services
          </h2>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div
            id="items"
            className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"
          >
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-theme-200 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import img from "../../public/images/home/why-us/img.webp";
import backdrop from "../../public/images/home/why-us/backdrop.png";
import { CheckIcon } from "@heroicons/react/24/outline";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const whyUsList = [
  {
    title: "Over 25 years of experience",
  },
  {
    title: "300+ projects completed",
  },
  {
    title: "Exceptional work quality",
  },
];

const WhyUs = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#text-section > *", {
        y: -10,
        opacity: 0,
      });

      gsap.set("#point-section > *", {
        y: -10,
        opacity: 0,
      });

      gsap.set("#main-img", {
        y: -10,
        opacity: 0,
      });

      gsap.to("#text-section > *, #point-section > *, #main-img", {
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
    <div ref={container} className="relative my-40 lg:my-60 ">
      <div className="z-10 relative flex flex-col max-w-screen-xl mx-auto h-full">
        <div className="relative z-10 px-4 lg:px-6  h-full flex gap-20 flex-col lg:flex-row">
          <div className="relative lg:w-[750px] h-[500px] lg:h-[700px] overflow-visible">
            <div
              id="main-img"
              className="absolute z-10 w-[80%] lg:w-[85%] h-full left-3"
            >
              <Image
                className="object-cover"
                fill
                src={img}
                alt={"beautiful picture of about us"}
              />
            </div>

            <div className="relative h-full w-full -translate-x-2 -translate-y-4">
              <Image src={backdrop} fill alt="triangle backdrop" />
            </div>
          </div>
          <div className="self-center">
            <div id="text-section" className="max-w-prose">
              <div className="text-lg font-semibold text-theme-200">Why us</div>
              <h2 className="text-black text-3xl lg:text-4xl font-bold leading-tight">
                We lead with experience and quality
              </h2>
              <p className="mt-5 text-lg text-gray-600 lg:leading-relaxed">
                Expert interior contractors for top-quality work and customer
                satisfaction. Our team has the skills and experience to handle
                any project, big or small.
              </p>
            </div>
            <div id="point-section" className="mt-10 flex flex-col gap-3">
              {whyUsList.map((e, i) => {
                return (
                  <div className="flex gap-4 items-center" key={i + e.title}>
                    <CheckIcon className="w-6 h-6 p-1 bg-theme-100 text-theme-200" />
                    <p className="text-lg font-semibold">{e.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

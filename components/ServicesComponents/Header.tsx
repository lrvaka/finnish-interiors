import { useEffect, useRef, useContext } from "react";
import Image from "next/image";
import gsap from "gsap";
import img from "../../public/images/about/about-us.jpeg";
import backdrop from "../../public/images/about/backdrop.png";

const Hero = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#info-section > *", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom", // when the top of the trigger hits the top of the viewport
        },
        stagger: 0.1,
        y: -10,
        opacity: 0,
        ease: "power4.easeOut",
      });
    }, container); // <- IMPORTANT! Scopes selector text

    return () => {
      ctx.revert();
    }; // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div ref={container}>
      <div className="relative overflow-hidden">
        <div className="z-10 relative flex flex-col max-w-screen-xl mx-auto overflow-hidden h-full">
          <div
            id="info-section"
            className=" mt-20 lg:mt-40 px-4 lg:px-6 max-w-screen-sm  lg:max-w-screen-md relative z-20"
          >
            <h1 className="text-black text-3xl lg:text-5xl font-bold">
              Our services
            </h1>
            <p className=" text-slate-400 leading-normal mt-5 lg:text-xl ">
              Enhance your interior spaces with our expert contracting services,
              including specializations in general carpentry, framing, and
              drywall.
            </p>

            <div className="flex gap-5 mt-10">
              <button className="bg-theme-100 border-theme-100 border-2 py-4 px-7 h-fit font-semibold text-theme-200 lg:text-lg">
                Get a quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
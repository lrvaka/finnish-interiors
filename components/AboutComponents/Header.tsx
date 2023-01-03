import { useEffect, useRef, useContext } from "react";
import Image from "next/image";
import gsap from "gsap";
import img from "../../public/images/about/about-us.jpeg";
import backdrop from "../../public/images/home/about-us/backdrop.png";

const Hero = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#background-img", {
        scale: 1.5,
        opacity: 0.5,
      });

      gsap.set("#info-section > *", {
        y: -10,
        opacity: 1,
      });

      gsap.timeline().to(
        "#info-section > *",
        {
          stagger: 0.1,
          y: 0,
          opacity: 1,
          ease: "power4.easeOut",
        },
        "-=4"
      );
    }, container); // <- IMPORTANT! Scopes selector text

    return () => {
      ctx.revert();
    }; // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <>
      <div
        ref={container}
        className="h-[600px] lg:h-[600px] relative overflow-hidden"
      >
        <div className="z-10 relative flex flex-col max-w-screen-xl mx-auto overflow-hidden h-full">
          <div
            id="info-section"
            className="mt-40 lg:mt-40 px-4 lg:px-6 max-w-screen-sm  lg:max-w-screen-md relative z-20"
          >
            <h1 className="text-black text-3xl lg:text-5xl font-bold">
              Experience and Expertise in Interior Contracting
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
              <button className=" border-theme-100 border-2   py-4 px-7 h-fit font-semibold text-black lg:text-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[300px] lg:h-[700px] overflow-visible ">
        <div
          id="main-img"
          className="absolute z-10 px-4 lg:px-6 w-[90%] lg:w-[900px] h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            className="object-cover"
            fill
            src={img}
            alt={"beautiful picture of about us"}
          />
        </div>

        <div className="relative h-full w-1/2 translate-y-5 lg:translate-y-20 rotate-180">
          <Image src={backdrop} fill alt="triangle backdrop" />
        </div>
      </div>
    </>
  );
};

export default Hero;

import { useEffect, useRef, useContext } from "react";
import Image from "next/image";
import gsap from "gsap";
import img from "../../public/images/about/about-us.jpeg";
import backdrop from "../../public/images/about/backdrop.png";
import NextLink from "next/link";

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

      gsap.from("#header-img > *", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom", // when the top of the trigger hits the top of the viewport
        },
        stagger: 0.1,
        duration: 2,
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
      <div className="h-[400px] lg:h-[500px] relative overflow-hidden">
        <div className="z-10 relative flex flex-col max-w-screen-xl mx-auto overflow-hidden h-full">
          <div
            id="info-section"
            className="text-center mx-auto mt-20 px-4 lg:px-6 max-w-screen-sm  lg:max-w-screen-md relative z-20"
          >
            <h1 className="text-black text-3xl lg:text-5xl font-bold">
              About us
            </h1>
            <p className=" text-slate-500 text-lg leading-normal mt-2 lg:mt-5 lg:text-xl ">
              Get to know us: Our team is made up of talented and passionate
              individuals who are committed to delivering the best products and
              services to our clients.
            </p>

            <div className="flex gap-5 mt-7 lg:mt-10 justify-center">
              <NextLink
                href="/contact"
                className="bg-theme-100 border-theme-100 border-2 py-4 px-7 h-fit font-semibold text-theme-200 lg:text-lg"
              >
                Get a quote
              </NextLink>
              <a
                href="#info"
                className=" border-theme-100 border-2   py-4 px-7 h-fit font-semibold text-theme-200 lg:text-lg"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="header-img"
        className="relative h-[300px] lg:h-[700px] overflow-visible "
      >
        <div className="absolute z-10 px-4 lg:px-6 w-[90%] lg:w-[900px] 2xl:w-[1200px] h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            className="object-cover"
            sizes="100vw"
            fill
            src={img}
            alt={"beautiful picture of about us"}
          />
        </div>

        <div className="relative h-full w-3/4 translate-y-5 lg:translate-y-20 ">
          <Image src={backdrop} fill alt="triangle backdrop" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

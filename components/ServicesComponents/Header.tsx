import { useEffect, useRef, useContext } from "react";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import img from "../../public/images/about/about-us.jpeg";
import backdrop from "../../public/images/about/backdrop.png";
import { IconType } from "react-icons";
import NextLink from "next/link";

type HeaderInfoType = {
  name: string;
  img: StaticImageData;
  description: string;
  icon: IconType;
};

const ServiceItemHeader = ({ headerInfo }: { headerInfo: HeaderInfoType }) => {
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

      gsap.from("#inner-img", {
        scale: 1.1,
        opacity: 0.5,
        duration: 5,
        ease: "power4.easeOut",
      });
    }, container); // <- IMPORTANT! Scopes selector text

    return () => {
      ctx.revert();
    }; // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div ref={container}>
      <div className="relative overflow-hidden  mt-10 ">
        <div className="z-10 relative flex flex-col max-w-screen-xl mx-auto overflow-hidden h-full">
          <div
            id="info-section"
            className=" mt-20 px-4 lg:px-6 relative z-20 flex flex-col lg:flex-row justify-between lg:items-end gap-10"
          >
            <div className="flex gap-5 flex-col lg:flex-row">
              <div className="flex h-20 w-20 items-center justify-center bg-theme-200 text-white sm:shrink-0 relative z-10">
                <headerInfo.icon className="h-16 w-16" aria-hidden="true" />
              </div>
              <div className="max-w-prose">
                <h1 className="text-black text-3xl lg:text-5xl font-bold">
                  {headerInfo.name}
                </h1>
                <p className=" text-slate-500 text-lg leading-normal mt-2 lg:mt-5 lg:text-xl ">
                  {headerInfo.description}
                </p>
              </div>
            </div>
            <NextLink
              href="/contact"
              className=" max-w-max bg-theme-100 border-theme-100 border-2 py-4 px-7 h-fit font-semibold text-theme-200 lg:text-lg"
            >
              Get a quote
            </NextLink>
          </div>
        </div>
      </div>

      <div className="h-[700px] my-32">
        <Image
          id="inner-img"
          className="w-full object-cover h-full"
          src={headerInfo.img}
          alt={headerInfo.name}
        />
      </div>
    </div>
  );
};

const Header = () => {
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
            className="text-center mx-auto mt-20  px-4 lg:px-6 max-w-screen-sm  lg:max-w-screen-md relative z-20"
          >
            <h1 className="text-black text-3xl lg:text-5xl font-bold">
              Our services
            </h1>
            <p className=" text-slate-500 text-lg leading-normal mt-2 lg:mt-5 lg:text-xl ">
              Discover our range of services: Our team of skilled professionals
              offer general carpentry, framing, and drywall services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ServiceItemHeader };
export default Header;

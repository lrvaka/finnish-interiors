import { useEffect, useRef, useContext } from "react";
import Image from "next/image";
import gsap from "gsap";

import { StaticImageData } from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper";

const PortfolioItemHeader = ({
  name,
  location,
  projectImages,
}: {
  name: string;
  location: string;
  projectImages: Array<StaticImageData>;
}) => {
  const container = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

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
      <div className="relative overflow-hidden">
        <div className="z-10 relative flex flex-col max-w-screen-xl mx-auto overflow-hidden h-full">
          <div
            id="info-section"
            className="text-center mx-auto mt-20 mb-10 px-4 lg:px-6 max-w-screen-sm  lg:max-w-screen-md relative z-20"
          >
            <h1 className="text-black text-3xl lg:text-5xl font-bold">
              {name}
            </h1>
            <p className=" text-slate-500 text-lg leading-normal mt-2 lg:mt-5 lg:text-xl ">
              {location}
            </p>
          </div>
          <div className="h-[300px] md:h-[600px] lg:h-[900px] relative mb-8">
            <Swiper
              id="inner-img"
              slidesPerView="auto"
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={30}
              loop={true}
              breakpoints={{
                // when window width is >= 320px
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }}
              className="h-full w-full"
            >
              {projectImages.map((e, i) => {
                return (
                  <SwiperSlide
                    className="relative  w-full h-full"
                    key={"project-item " + i}
                  >
                    <Image
                      className="object-contain"
                      fill
                      src={e}
                      alt={"beautiful picture of " + name}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-between z-10 text-teal-900 flex gap-2 self-center ">
              <button
                aria-label="Left button"
                className="text-3xl p-2 bg-theme-100"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ChevronLeftIcon className="text-black h-5 w-5 lg:w-8 lg:h-8" />
              </button>
              <button
                aria-label="Right button"
                className="text-3xl p-2 bg-theme-100"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <ChevronRightIcon className="text-black h-5 w-5 lg:w-8 lg:h-8" />
              </button>
            </div>
          </div>
        </div>
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
            className="text-center mx-auto mt-20 px-4 lg:px-6 max-w-screen-sm  lg:max-w-screen-md relative z-20"
          >
            <h1 className="text-black text-3xl lg:text-5xl font-bold">
              Our portfolio
            </h1>
            <p className=" text-slate-500 text-lg leading-normal mt-2 lg:mt-5 lg:text-xl ">
              See our work in action: Our portfolio showcases a selection of our
              past projects, highlighting the range of services we offer and the
              high-quality workmanship we deliver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
export { PortfolioItemHeader };

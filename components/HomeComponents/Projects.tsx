import Image from "next/image";
import pattern from "../../public/images/pattern.png";
import Modal from "../ui/Modal";
import { PortfolioItemModalInner } from "../PortfolioComponents/PortfolioItem";
import { projectList } from "../PortfolioComponents/PortfolioItems";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Swiper as SwiperType, Navigation } from "swiper";
import gsap from "gsap";
import NextLink from 'next/link'

// Import Swiper styles
import "swiper/css";
import { SwiperModule } from "swiper/types";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type CallbackType = (animation: GSAPTimeline, index: number | string) => void;

const Projects = ({
  addAnimation,
  ...props
}: {
  addAnimation: CallbackType;
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  const onEnter = ({ currentTarget }: { currentTarget: any }) => {
    gsap.context(() => {
      gsap.to("#inner-img", {
        scale: 1.05,
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

      gsap.to("#heading", {
        color: "#000000",
      });
    }, currentTarget); // <- IMPORTANT! Scopes selector text
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#inner > *", {
        y: -10,
        opacity: 0,
      });

      gsap.to("#inner > *", {
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
  }, [addAnimation]); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div
      ref={container}
      className="h-[800px] relative bg-theme-100 my-40 lg:my-60 mt-44"
    >
      <div className="z-10 relative flex flex-col max-w-screen-xl mx-auto overflow-hidden h-full">
        <div className="absolute opacity-50 -translate-y-[50%] right-0 -translate-x-2/3 lg:-translate-y-[50%] lg:-translate-x-1/4  max-w-sm  ">
          <Image
            src={pattern}
            alt="beautiful background image of finnish interiors"
          />
        </div>

        <div className="absolute opacity-50  bottom-0 left-0 max-w-sm translate-y-1/3 translate-x-1/4  lg:translate-y-1/4 lg:translate-x-0">
          <Image
            src={pattern}
            alt="beautiful background image of finnish interiors"
          />
        </div>

        <div id="inner" className="relative z-10 py-10 px-4 lg:px-6">
          <div className="mb-5 lg:mb-16 flex justify-between flex-col lg:flex-row">
            <div>
              <div className="text-lg font-semibold text-theme-200">
                Past projects
              </div>
              <h2 className="text-black text-3xl lg:text-4xl font-bold leading-tight">
                Our project results speak <br className=" hidden sm:block" />{" "}
                for themselves
              </h2>
            </div>
            <div className="relative z-10 text-teal-900 flex gap-2 self-center mt-5 lg:mt-0 lg:self-end">
              <button
                aria-label="Left button"
                className="text-3xl p-2 bg-slate-50 "
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ChevronLeftIcon className="text-black h-5 w-5 lg:w-8 lg:h-8" />
              </button>
              <button
                aria-label="Right button"
                className="text-3xl p-2 bg-slate-50"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <ChevronRightIcon className="text-black h-5 w-5 lg:w-8 lg:h-8" />
              </button>
            </div>
          </div>
          <Swiper
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
              // when window width is >= 480px
              756: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="h-[500px]"
          >
            {projectList.map((e, i) => {
              return (
                <SwiperSlide
                  id="swiper"
                  key={"project-item " + i}
                  className="bg-white"
                >
                  <NextLink
                   href={`/portfolio/${e.slug}`}
                   passHref
                   onMouseEnter={onEnter}
                   onMouseLeave={onLeave}
                  >
                    <div
                 
                      className="relative w-full h-[75%] overflow-hidden"
                    >
                      <Image
                        className="object-cover"
                        id="inner-img"
                        fill
                        src={e.img}
                        alt={"beautiful picture of " + e.name}
                      />
                    </div>
                    <div className="p-5">
                      <h3 id="heading" className="text-2xl">
                        {e.name}
                      </h3>
                      <p className="text-slate-500">{e.location}</p>
                    </div>
                  </NextLink>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;

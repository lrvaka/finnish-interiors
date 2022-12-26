import Image from "next/image";
import pattern from "../../public/images/pattern.png";
import helloTendImg from "../../public/images/projects/HelloTend/mask-studio.webp";
import jenFishImg from "../../public/images/projects/Michilli - Jennifer Fisher SoHo/96be.jpg";
import stefRicciImg from "../../public/images/projects/Michilli - Stefano Ricci at Fuller Building/AM-05_04.jpg";
import mulberryImg from "../../public/images/projects/Michilli - mulberryengland on Wooster Street/STORE_GALLERY_00.webp";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Swiper as SwiperType, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import { SwiperModule } from "swiper/types";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const projectList = [
  {
    name: "HelloTend",
    location: "Williamsburg, Brooklyn",
    img: helloTendImg,
  },
  {
    name: "Jennifer Fisher",
    location: "Soho, Manhattan",
    img: jenFishImg,
  },
  {
    name: "Stefano Ricci",
    location: "Madison Ave, New York",
    img: stefRicciImg,
  },
  {
    name: "Mulberry England",
    location: "Wooster St, New York",
    img: mulberryImg,
  },
];

const Projects = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="h-[800px] relative bg-theme-100 my-32">
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

        <div className="relative z-10 py-10 px-4 lg:px-6">
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
                className="text-3xl p-2 bg-slate-50 "
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ChevronLeftIcon className="text-black h-5 w-5 lg:w-8 lg:h-8" />
              </button>
              <button
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
                <SwiperSlide key={"project-item " + i} className="bg-white">
                  <div className="relative w-full h-[75%]">
                    <Image
                      className="object-cover"
                      fill
                      src={e.img}
                      alt={"beautiful picture of " + e.name}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-2xl">{e.name}</h3>
                    <p className="text-slate-500">{e.location}</p>
                  </div>
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

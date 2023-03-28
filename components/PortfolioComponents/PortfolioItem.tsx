import { StaticImageData } from "next/image";
import { useRef } from "react";
import Modal from "../ui/Modal";
import gsap from "gsap";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const regularClass =
  "cursor-pointer relative flex flex-col gap-6 border border-slate-200 border-b-theme-100 border-b-[5px] h-max";
const firstClass =
  "cursor-pointer relative flex flex-col gap-6 border border-slate-200 lg:mt-20 border-b-theme-100  border-b-[5px] h-max";
const lastClass =
  "cursor-pointer relative flex flex-col gap-6 border border-slate-200 lg:-mt-20 border-b-theme-100  border-b-[5px] h-max";

const conditionalClassName = (pos?: string) =>
  pos === "first" ? firstClass : pos === "last" ? lastClass : regularClass;

const PortfolioItemModalInner = ({
  name,
  location,
  projectImages,
}: {
  name: string;
  location: string;
  projectImages: Array<StaticImageData>;
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
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
        }}
        className="h-[75%] w-full"
      >
        {projectImages.map((e, i) => {
          return (
            <SwiperSlide key={"project-item " + i}>
              <div className="relative  w-full h-full">
                <Image
                  className="object-contain"
                  fill
                  src={e}
                  alt={"beautiful picture of " + name}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className=" flex flex-col justify-center text-center mt-2 flex-1">
        <div className="relative z-10 text-teal-900 flex gap-2 self-center ">
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
        <Dialog.Title className="text-xl lg:text-3xl font-semibold mt-2">
          {name}
        </Dialog.Title>
        <Dialog.Description className="text-lg lg:text-2xl">
          {location}
        </Dialog.Description>
      </div>
    </>
  );
};

const PortfolioItem = ({
  name,
  projectImages,
  location,
  pos,
  img,
}: {
  name: string;
  location: string;
  pos?: string;
  img: StaticImageData;
  projectImages: Array<StaticImageData>;
}) => {
  const onEnter = ({ currentTarget }: { currentTarget: HTMLDivElement }) => {
    gsap.context(() => {
      gsap.to("#inner-img", {
        scale: 1.05,
        ease: "power4.easeOut",
      });

      gsap.to(currentTarget, {
        y: 10,
        ease: "power4.easeOut",
      });

      gsap.to("#heading", {
        color: "#00406A",
      });
    }, currentTarget); // <- IMPORTANT! Scopes selector text
  };

  const onLeave = ({ currentTarget }: { currentTarget: HTMLDivElement }) => {
    gsap.context(() => {
      gsap.to("#inner-img", {
        scale: 1,
        ease: "power4.easeOut",
      });

      gsap.to(currentTarget, {
        y: 0,
        ease: "power4.easeOut",
      });

      gsap.to("#heading", {
        color: "#000000",
      });
    }, currentTarget); // <- IMPORTANT! Scopes selector text
  };

  return (
    <Modal
      inner={
        <PortfolioItemModalInner
          projectImages={projectImages}
          name={name}
          location={location}
        />
      }
    >
      <div
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={conditionalClassName(pos)}
      >
        <div
          id="main-img"
          className="relative w-full  z-10  h-[400px] overflow-hidden"
        >
          <Image
            id="inner-img"
            className="object-cover"
            fill
            src={img}
            alt={"beautiful picture of about us"}
          />
        </div>
        <div className="p-10 pt-5">
          <div className="sm:min-w-0 sm:flex-1">
            <h2
              id="heading"
              className="text-2xl font-semibold leading-8 text-gray-900"
            >
              {name}
            </h2>
            <p className="text-base  text-slate-500">{location}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PortfolioItem;

export { PortfolioItemModalInner };

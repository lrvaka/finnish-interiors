import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Modal({
  children,
  className,
  name,
  location,
  projectImages,
  onMouseEnter,
  onMouseLeave,
}: {
  children: JSX.Element | JSX.Element[];
  className: string;
  name: string;
  location: string;
  projectImages: Array<any>;
  onMouseEnter: (currentTarget: any) => void;
  onMouseLeave: (currentTarget: any) => void;
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Dialog
        className=" shadow-2xl z-50 p-1 pb-5 md:p-5 w-[98vw] h-[85vh] md:h-[90vh] md:w-[90vw] 2xl:h-[80vh] 2xl:w-[80vw] fixed bg-theme-200 border rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel className="h-full relative flex flex-col">
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
          <div className="text-white flex flex-col justify-center text-center mt-2 flex-1">
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
          <button
            className="p-1 bg-red-300 text-black lg:p-2 w-max h-max self-center absolute top-0 left-0 z-20"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </Dialog.Panel>
      </Dialog>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children}
      </div>
    </>
  );
}

export default Modal;

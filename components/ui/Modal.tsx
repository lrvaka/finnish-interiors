import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Swiper as SwiperType, Navigation } from "swiper";
import Image from "next/image";

function Modal({
  children,
  className,
  name,
  location,
  projectImages,
}: {
  children: JSX.Element | JSX.Element[];
  className: string;
  name: string;
  location: string;
  projectImages: Array<any>;
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Dialog
        className=" z-50 p-1 pb-5 md:p-5 w-[98vw] h-[92vh] md:h-[90vh] md:w-[90vw] 2xl:h-[80vh] 2xl:w-[80vw] fixed bg-slate-100 border rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel>
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
            className="h-[500px]"
          >
            {projectImages.map((e, i) => {
              return (
                <SwiperSlide key={"project-item " + i} className="bg-white">
                  <div className="relative w-full h-[75%]">
                    <Image
                      className="object-cover"
                      fill
                      src={e}
                      alt={"beautiful picture of " + name + " " + i}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
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
          <Dialog.Title className="text-3xl font-semibold">{name}</Dialog.Title>
          <Dialog.Description className="text-2xl">
            {location}
          </Dialog.Description>

          <button onClick={() => setIsOpen(false)}>Close</button>
        </Dialog.Panel>
      </Dialog>
      <div onClick={() => setIsOpen(true)} className={className}>
        {children}
      </div>
    </>
  );
}

export default Modal;

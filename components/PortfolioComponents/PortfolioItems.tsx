import { useRef, useEffect } from "react";
import carpentryImg from "../../public/images/home/about-us/img.jpg";
import helloTendImg from "../../public/images/projects/HelloTend/mask-studio.webp";
import jenFishImg from "../../public/images/projects/Michilli - Jennifer Fisher SoHo/96be.jpg";
import stefRicciImg from "../../public/images/projects/Michilli - Stefano Ricci at Fuller Building/AM-05_04.jpg";
import mulberryImg from "../../public/images/projects/Michilli - mulberryengland on Wooster Street/STORE_GALLERY_00.webp";
import Image from "next/image";
import gsap from "gsap";

import { FcFrame } from "react-icons/fc";
import { IoHammerOutline } from "react-icons/io5";
import { FaHardHat } from "react-icons/fa";
import { BiCog } from "react-icons/bi";

const projectList = [
  {
    name: "HelloTend",
    location: "Williamsburg, Brooklyn",
    img: helloTendImg,
    first: true,
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
    last: true,
  },
];

const regularClass =
  "relative flex flex-col gap-6 border border-slate-200 border-b-theme-100 border-b-[5px] h-max";
const firstClass =
  "relative flex flex-col gap-6 border border-slate-200 lg:-mt-20 border-b-theme-100  border-b-[5px] h-max";
const lastClass =
  "relative flex flex-col gap-6 border border-slate-200 lg:mt-20 border-b-theme-100  border-b-[5px] h-max";

export default function PortfolioItems() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#header > *", {
        y: -10,
        opacity: 0,
      });

      gsap.set("#items > *", {
        y: -10,
        opacity: 0,
      });

      gsap.to("#header > *, #items > *", {
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
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div ref={container} className="bg-white my-28 lg:my-60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div
            id="items"
            className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"
          >
            {projectList.map((item) => (
              <div
                key={item.name}
                className={
                  item.first ? firstClass : item.last ? lastClass : regularClass
                }
              >
                <div id="main-img" className="relative w-full  z-10  h-[400px]">
                  <Image
                    className="object-cover"
                    fill
                    src={item.img}
                    alt={"beautiful picture of about us"}
                  />
                </div>
                <div className="p-10 pt-5">
                  <div className="sm:min-w-0 sm:flex-1">
                    <h2 className="text-2xl font-semibold leading-8 text-gray-900">
                      {item.name}
                    </h2>
                    <p className="text-base  text-slate-500">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

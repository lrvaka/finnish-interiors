import { useEffect, useRef, useContext } from "react";
import Image from "next/image";
import heroBg from "../../public/images/hero-bg.png";
import pattern from "../../public/images/pattern.png";
import NextLink from "next/link";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";

type CallbackType = (animation: GSAPTimeline, index: number | string) => void;

const contact = [
  {
    name: "Call us",
    detail: "(323) 238-0682",
    linkTitle: "Give us a call",
    link: "tel:(323)238-0682",
    icon: PhoneIcon,
    border: true,
  },
  {
    name: "Email us",
    detail: "info@constructor.com",
    linkTitle: "Send us a email",
    link: "mailto:info@constructor.com",
    icon: EnvelopeIcon,
    border: true,
  },
  {
    name: "Send us mail",
    detail: "941 McLean Ave, Suite 328 Yonkers, NY 10704",
    linkTitle: "View on Google Maps",
    link: "https://goo.gl/maps/6FU1YEJEjmVKSaTr8",
    icon: MapPinIcon,
    border: false,
  },
];

const Border = () => {
  return (
    <div id="border" className=" min-h-[1px] lg:min-w-[1px] bg-slate-300"></div>
  );
};

const Hero = ({ addAnimation, ...props }: { addAnimation: CallbackType }) => {
  const container = useRef<HTMLDivElement | null>(null);
  const contactSection = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Note that ref.current may be null. This is expected, because you may
    // conditionally render the ref-ed element, or you may forgot to assign it

    let animation = gsap.timeline();

    let ctx = gsap.context(() => {
      gsap.set("#background-img", {
        scale: 1.5,
        opacity: 0.5,
      });

      gsap.set("#info-section > *", {
        y: -10,
        opacity: 0,
      });

      animation = gsap
        .timeline()
        .to("#background-img", {
          scale: 1,
          opacity: 1,
          duration: 5,
          ease: "power4.easeOut",
        })
        .to(
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

    let ctx1 = gsap.context(() => {
      gsap.set(contactSection.current, {
        y: -10,
        opacity: 0.5,
      });

      animation.add(
        gsap.to(contactSection.current, {
          y: 0,
          opacity: 1,
          ease: "power4.easeOut",
        }),
        "-=4.25"
      );
    }, contactSection); // <- IMPORTANT! Scopes selector text

    addAnimation(animation, "-=0.75");

    return () => {
      ctx.revert();
      ctx1.revert();
    }; // cleanup
  }, [addAnimation]); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <>
      <div
        ref={container}
        className="h-[700px] lg:h-[800px] relative overflow-hidden"
      >
        <div className="z-10 relative flex flex-col max-w-screen-xl mx-auto overflow-hidden h-full">
          <div className="absolute opacity-50 -translate-y-[50%] -translate-x-1/3 lg:-translate-y-[50%] lg:-translate-x-1/4  max-w-sm  ">
            <Image
              src={pattern}
              alt="beautiful background image of finnish interiors"
            />
          </div>

          <div className="absolute opacity-50  bottom-0 right-0 max-w-sm translate-y-1/3 translate-x-1/4  lg:translate-y-1/4 lg:translate-x-0">
            <Image
              src={pattern}
              alt="beautiful background image of finnish interiors"
            />
          </div>

          <div
            id="info-section"
            className="mt-40 lg:mt-52 px-4 lg:px-6 max-w-screen-sm  lg:max-w-screen-md relative z-20"
          >
            <h1 className="text-white text-3xl lg:text-5xl font-bold">
              Transform Your Space with NYC&apos;s Expert Interior Contracting
              Services
            </h1>
            <p className=" text-slate-300 text-lg leading-normal mt-5 lg:text-xl ">
              Enhance your interior spaces with our expert contracting services,
              including specializations in general carpentry, framing, and
              drywall.
            </p>

            <div className="flex gap-5 mt-10">
              <NextLink
                href="/contact"
                className="bg-theme-100 border-theme-100 border-2 py-4 px-7 h-fit font-semibold text-theme-200 lg:text-lg"
              >
                Get a quote
              </NextLink>
              <NextLink
                href="/services"
                className=" border-theme-100 border-2   py-4 px-7 h-fit font-semibold text-white lg:text-lg"
              >
                Our services
              </NextLink>
            </div>
          </div>
        </div>
        <div>
          <Image
            id="background-img"
            src={heroBg}
            className="object-cover"
            fill
            alt="beautiful background image of finnish interiors"
          />
        </div>
      </div>
      <div
        ref={contactSection}
        className="relative z-10 -mt-28 max-w-screen-xl flex flex-col lg:flex-row mx-auto px-4 lg:px-6 lg:h-52"
      >
        {contact.map((e, i) => {
          return (
            <>
              <div
                id="contact-info"
                key={i + "contact-info"}
                className=" gap-10 lg:gap-0 bg-slate-50 flex-1 flex flex-col py-9 px-12 lg:py-10 lg:px-14 "
              >
                <div className="flex gap-4 flex-1">
                  <e.icon className=" h-16 w-16 p-3 bg-theme-200 text-white " />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">{e.name}</h3>
                    <div className=" text-gray-400 max-w-[200px] sm:text-sm xl:text-base">
                      {e.detail}
                    </div>
                  </div>
                </div>
                <a href={e.link} className="text-center underline text-lg">
                  {e.linkTitle}
                </a>
              </div>
              {e.border ? <Border /> : null}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Hero;

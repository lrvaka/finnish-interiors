import Image from "next/image";
import img from "../../public/images/home/about-us/img.jpg";
import backdrop from "../../public/images/home/about-us/backdrop.png";
import { useRef, useEffect } from "react";
import NextLink from "next/link";
import gsap from "gsap";

const AboutUs = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#text-section > *", {
        y: -10,
        opacity: 0,
      });

      gsap.set("#main-img", {
        y: -10,
        opacity: 0,
      });

      gsap.to("#text-section > *, #main-img", {
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
    <div ref={container} className="relative my-40 lg:my-60 ">
      <div className="z-10 relative flex flex-col max-w-screen-xl mx-auto h-full">
        <div className="relative z-10 px-4 lg:px-6  h-full flex gap-20 flex-col lg:flex-row">
          <div id="text-section" className="self-center max-w-prose">
            <div className="text-lg font-semibold text-theme-200">About us</div>
            <h2 className="text-black text-3xl lg:text-4xl font-bold leading-tight">
              New York City&apos;s expert interior contractors
            </h2>
            <p className="mt-5 text-lg text-gray-600  mb-10">
              At our interior contracting company, we specialize in providing
              high-quality services in the areas of general carpentry, framing,
              and drywall. Our team of experienced professionals has the skills
              and expertise to handle any project, big or small, and ensure that
              the final result is flawless. We pride ourselves on delivering
              exceptional workmanship and attention to detail, and we strive to
              exceed our clients&apos; expectations on every project. Contact us
              today to learn more about how we can help transform your space.
            </p>
            <NextLink
              href="/contact"
              className=" bg-theme-200 border-theme-200 border-2 py-4 px-7 h-fit font-semibold text-theme-100 lg:text-lg"
            >
              Get a quote
            </NextLink>
          </div>
          <div className="relative lg:w-[750px] h-[500px] lg:h-[700px] overflow-visible">
            <div
              id="main-img"
              className="absolute z-10 w-[80%] lg:w-[85%] h-full right-3"
            >
              <Image
                className="object-cover"
                fill
                src={img}
                alt={"beautiful picture of about us"}
              />
            </div>

            <div className="relative h-full w-full translate-x-2 translate-y-4">
              <Image src={backdrop} fill alt="triangle backdrop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

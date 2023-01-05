import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import missionImg from "../../public/images/about/mission.jpeg";
// import ourStory from "../../public/images/about/our-story.jpeg";
import ourStory from "../../public/images/projects/HelloTend/studio-exports_0013_2020_03_03_Tend_Williamsburg0682.webp";
import yellowBackdrop from "../../public/images/home/about-us/backdrop.png";
import blueBackdrop from "../../public/images/home/why-us/backdrop.png";

const Info = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(
        "#main-img > *, #main-img1 > *, #text-section > *, #text-section1 > *",
        {
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom", // when the top of the trigger hits the top of the viewport
          },
          stagger: 0.2,
          y: -10,
          opacity: 0,
          ease: "power4.easeOut",
        }
      );
    }, container); // <- IMPORTANT! Scopes selector text

    return () => {
      ctx.revert();
    }; // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div ref={container} className=" relative bg-gray-100 py-16 lg:py-32">
      <div className="z-10 relative flex flex-col max-w-screen-xl mx-auto h-full">
        <div className="relative z-10 px-4 lg:px-6 h-full flex gap-32 lg:gap-10 flex-col lg:flex-row">
          <div className="flex flex-col-reverse lg:flex-col gap-20  lg:flex-[1] ">
            <div
              id="main-img"
              className="relative w-full h-[500px] lg:h-[700px]"
            >
              <Image
                className="object-cover"
                fill
                src={missionImg}
                alt={"beautiful picture of about us"}
              />
              <div className="relative h-full w-full -translate-x-4 -translate-y-4 -z-10">
                <Image src={blueBackdrop} fill alt="triangle backdrop" />
              </div>
            </div>
            <div id="text-section" className="max-w-prose lg:px-10 lg:py-10">
              <div className="text-lg font-semibold text-theme-200">
                Our mission
              </div>
              <h2 className="text-black text-3xl lg:text-4xl font-bold leading-tight">
                Provide exceptional service to our clients
              </h2>
              <p className="mt-5 text-base text-gray-600 lg:leading-relaxed">
                At our Finnish Interiors, our mission is to provide the highest
                level of service to our clients. We are dedicated to delivering
                exceptional results and building long-lasting relationships with
                each and every one of our customers. Our team of skilled
                professionals is committed to exceeding expectations and going
                above and beyond to ensure complete satisfaction. We take pride
                in our work and strive to be the best in the industry. Thank you
                for considering us for your interior contracting needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-20 lg:flex-[1.2]">
            <div id="text-section1" className=" max-w-prose lg:px-10 lg:py-10">
              <div className="text-lg font-semibold text-theme-200">
                Our story
              </div>
              <h2 className="text-black text-3xl lg:text-4xl font-bold leading-tight">
                What makes us who we are & why we are
              </h2>
              <p className="mt-5 text-base text-gray-600 lg:leading-relaxed">
                Our company has a rich history dating back several years. From
                the very beginning, we have been dedicated to providing the
                highest level of service to our clients and delivering
                exceptional results. We have grown and evolved over the years,
                constantly striving to improve and stay at the forefront of the
                interior contracting industry. Today, we are proud to be
                recognized as a trusted and reliable choice for all of your
                interior contracting needs.
              </p>
            </div>
            <div
              id="main-img1"
              className="relative w-full h-[500px] lg:h-[760px]"
            >
              <Image
                className="object-cover"
                fill
                src={ourStory}
                alt={"beautiful picture of about us"}
              />
              <div className="relative h-full w-full translate-x-4 translate-y-4 -z-10">
                <Image src={yellowBackdrop} fill alt="triangle backdrop" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

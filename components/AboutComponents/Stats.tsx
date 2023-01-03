import { useRef, useEffect } from "react";
import gsap from "gsap";

const stats = [
  {
    number: 25,
    desc: "Years of experience",
  },
  {
    number: 300,
    desc: "Successful projects",
  },

  {
    number: 100,
    desc: "Happy clients",
  },
];

const Stats = () => {
  const container = useRef<HTMLDivElement | null>(null);

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
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div ref={container} className="h-[320px] relative mt-32 mb-16 lg:mt-32 lg:mb-5">
      <div className="z-10 relative flex flex-col max-w-screen-lg mx-auto overflow-hidden h-full">
        <div
          id="inner"
          className="relative z-10 px-4 lg:px-6 h-full flex flex-col sm:flex-row justify-around lg:justify-between items-center"
        >
          {stats.map((e, i) => {
            return (
              <div className="text-center" key={e.desc}>
                <div className=" text-4xl lg:text-5xl font-bold">
                  {e.number}
                  <span className=" text-theme-200">+</span>
                </div>
                <div className=" text-slate-400 text-lg lg:text-xl">
                  {e.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;

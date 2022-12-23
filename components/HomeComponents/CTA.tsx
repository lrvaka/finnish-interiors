import Image from "next/image";
import heroBg from "../../public/images/hero-bg.png";
import pattern from "../../public/images/pattern.png";

const CTA = () => {
  return (
    <div className="h-[320px] relative my-32 bg-theme-200">
      <div className="z-10 relative flex flex-col max-w-screen-2xl mx-auto overflow-hidden h-full">
        <div className="absolute opacity-25 -translate-y-[50%] -translate-x-1/3 lg:translate-y-0 lg:-translate-x-1/4 lg:-rotate-90  max-w-sm  ">
          <Image
            src={pattern}
            alt="beautiful background image of finnish interiors"
          />
        </div>

        <div className="absolute opacity-25  bottom-0 right-0 max-w-sm translate-y-3/4 translate-x-1/4  lg:translate-y-1/4 lg:translate-x-0">
          <Image
            src={pattern}
            alt="beautiful background image of finnish interiors"
          />
        </div>

        <div className="relative z-10 px-4 lg:px-6  h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center">
          <h2 className="text-white text-3xl lg:text-4xl font-bold max-w-screen-md">
            Ready to elevate your interior space?
            <br className="hidden lg:block" /> Get a quote today.
          </h2>

          <div className="flex gap-5 mt-10">
            <button className="bg-theme-100 border-theme-100 border-2 py-4 px-7 h-fit font-semibold text-theme-200 lg:text-lg">
              Get a quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;

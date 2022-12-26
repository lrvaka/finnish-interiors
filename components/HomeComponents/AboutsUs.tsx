import Image from "next/image";
import img from "../../public/images/about-us/img.jpg";
import backdrop from "../../public/images/about-us/backdrop.png";

const AboutUs = () => {
  return (
    <div className="relative my-32 ">
      <div className="z-10 relative flex flex-col max-w-screen-xl mx-auto h-full">
        <div className="relative z-10 px-4 lg:px-6  h-full flex gap-20 flex-col lg:flex-row">
          <div className="self-center max-w-prose">
            <div className="text-lg font-semibold text-theme-200">About us</div>
            <h2 className="text-black text-3xl lg:text-4xl font-bold leading-tight">
              Expert interior contractors <br /> offering a flawless finish
            </h2>
            <p className="mt-5 text-base text-gray-600 lg:leading-relaxed">
              At our interior contracting company, we specialize in providing
              high-quality services in the areas of general carpentry, framing,
              and drywall. Our team of experienced professionals has the skills
              and expertise to handle any project, big or small, and ensure that
              the final result is flawless. We pride ourselves on delivering
              exceptional workmanship and attention to detail, and we strive to
              exceed our clients&apos; expectations on every project. Whether
              you are looking to renovate a single room or undertake a
              full-scale home or business remodel, we have the skills and
              resources to make your vision a reality. Contact us today to learn
              more about how we can help transform your space.
            </p>
            <button className=" mt-10 bg-theme-200 border-theme-200 border-2 py-4 px-7 h-fit font-semibold text-theme-100 lg:text-lg">
              Get a quote
            </button>
          </div>
          <div className="relative lg:w-[750px] h-[500px] lg:h-[700px] overflow-visible">
            <div className="absolute z-10 w-[80%] lg:w-[85%] h-full right-3">
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

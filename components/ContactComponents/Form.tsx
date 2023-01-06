import Image from "next/image";
import { useRef, useEffect } from "react";
import formImg from "../../public/images/contact/form-img.jpeg";
import gsap from "gsap";

export default function Form() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#inner-img", {
        scale: 1.1,
        opacity: 0.5,
        duration: 5,
        ease: "power4.easeOut",
      });

      gsap.from("#items > *, #form-items > *", {
        stagger: 0.2,
        y: -10,
        opacity: 0,
        ease: "power4.easeOut",
      });
    }, container); // <- IMPORTANT! Scopes selector text

    return () => {
      ctx.revert();
    }; // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div ref={container} className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            id="inner-img"
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src={formImg}
            alt=""
          />
        </div>
      </div>
      <div className="relative py-16 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
        <div className="lg:pr-8">
          <div id="items" className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              We&apos;d love to hear from you! Send us a message using the form
              opposite, or email us. We&apos;d love to hear from you! Send us a
              message using the form opposite, or email us.
            </p>
            <form
              id="form-items"
              action="#"
              method="POST"
              className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    required
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    required
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <span
                    id="phone-description"
                    className="text-sm text-gray-500"
                  >
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <span
                    id="phone-description"
                    className="text-sm text-gray-500"
                  >
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone-description"
                    className="block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="how-can-we-help"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How can we help you?
                  </label>
                  <span
                    id="how-can-we-help-description"
                    className="text-sm text-gray-500"
                  >
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="how-can-we-help"
                    name="how-can-we-help"
                    aria-describedby="how-can-we-help-description"
                    rows={4}
                    className="block w-full  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center  border border-transparent bg-theme-100 py-2 px-4 text-sm font-medium text-theme-200 shadow-sm hover:bg-theme-200 hover:text-theme-100 focus:outline-none focus:ring-2 focus:ring-theme-100 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

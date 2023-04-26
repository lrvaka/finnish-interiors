import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import formImg from "../../public/images/contact/form-img.jpeg";
import gsap from "gsap";
import axios from "axios";

const Backdrop = () => (
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
);

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    howCanWeHelp: "",
  });

  const [formStatus, setFormStatus] = useState("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      await axios.post("/api/zapier/contact", formData);
      setFormStatus("success");
    } catch (error) {
      setFormStatus("error");
    }
  };

  if (formStatus === "success") {
    return (
      <div className="flex justify-center text-center my-10">
        <h4 className="font-medium">
          Thank you for your submission, <br /> you&apos;ll hear back from us
          soon!
        </h4>
      </div>
    );
  }

  if (formStatus === "error") {
    return (
      <div className="flex justify-center text-center my-10">
        <h4 className="font-medium">
          There was an error with your submission - we apologize for the
          inconvenience. Please try again or contact us directly at 914-237-3417
          or info@finnishinteriors.com
        </h4>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="form-items"
      action="#"
      method="POST"
      className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First name
        </label>
        <div className="mt-1">
          <input
            required
            onChange={handleChange}
            type="text"
            name="firstName"
            id="firstName"
            className="block w-full  border-gray-300 shadow-sm focus:border-theme-100 focus:ring-theme-200 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last name
        </label>
        <div className="mt-1">
          <input
            onChange={handleChange}
            required
            type="text"
            name="lastName"
            id="lastName"
            className="block w-full  border-gray-300 shadow-sm focus:border-theme-100 focus:ring-theme-200 sm:text-sm"
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
            onChange={handleChange}
            required
            id="email"
            name="email"
            type="email"
            className="block w-full border-gray-300 shadow-sm focus:border-theme-100 focus:ring-theme-200 sm:text-sm"
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
        </div>
        <div className="mt-1">
          <input
            onChange={handleChange}
            required
            type="text"
            name="phone"
            id="phone"
            aria-describedby="phone-description"
            className="block w-full border-gray-300 shadow-sm focus:border-theme-100 focus:ring-theme-200 sm:text-sm"
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
          <span id="phone-description" className="text-sm text-gray-500">
            Optional
          </span>
        </div>
        <div className="mt-1">
          <input
            onChange={handleChange}
            type="text"
            name="company"
            id="company"
            className="block w-full border-gray-300 shadow-sm focus:border-theme-100 focus:ring-theme-200 sm:text-sm"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label
            htmlFor="howCanWeHelp"
            className="block text-sm font-medium text-gray-700"
          >
            How can we help you?
          </label>
          <span id="howCanWeHelp-description" className="text-sm text-gray-500">
            Max. 500 characters
          </span>
        </div>
        <div className="mt-1">
          <textarea
            onChange={handleChange}
            id="howCanWeHelp"
            name="howCanWeHelp"
            aria-describedby="howCanWeHelp-description"
            rows={4}
            className="block w-full  border-gray-300 shadow-sm focus:border-theme-100 focus:ring-theme-200 sm:text-sm"
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
  );
};

export default function ContactForm() {
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
      <Backdrop />
      <div className="relative py-16 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
        <div className="lg:pr-8">
          <div id="items" className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              We&apos;d love to hear from you! Send us a message using the form
              or email us about your project and some information about
              yourself!
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

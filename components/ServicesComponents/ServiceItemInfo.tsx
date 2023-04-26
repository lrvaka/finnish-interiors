import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";

type WhatsIncludedType = Array<{ name: string; desc: string }>;
type WhyUsType = Array<{ name: string; desc: string }>;

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
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
      await axios.post("/api/zapier/services", formData);
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
      id="form-items"
      onSubmit={handleSubmit}
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
            onChange={handleChange}
            required
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

const ServiceItemInfo = ({
  whatsIncluded,
  whyUs,
  aboutTheService,
}: {
  whatsIncluded: WhatsIncludedType;
  whyUs: WhyUsType;
  aboutTheService: string;
}) => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(
        "#about-the-service > *, #whats-included, #whats-included-items > *, #why-us, #why-us-items > *, #form > *",
        {
          y: -10,
          opacity: 0,
        }
      );

      gsap.to(
        "#about-the-service > *, #whats-included, #whats-included-items > *, #why-us, #why-us-items > *, #form > *",
        {
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom", // when the top of the trigger hits the top of the viewport
          },
          stagger: 0.2,
          y: 0,
          opacity: 1,
          ease: "power4.easeOut",
        }
      );

      gsap.to("#form > *", {
        scrollTrigger: {
          trigger: "#form",
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
    <div
      ref={container}
      className="my-20 z-10 relative gap-20 flex flex-col lg:flex-row  max-w-screen-xl mx-auto  px-4 lg:px-6"
    >
      <div className="flex flex-col gap-20 relative max-w-prose">
        <div id="about-the-service">
          <h2 className="text-black text-3xl lg:text-4xl font-bold">
            About the service
          </h2>
          <p className="text-lg text-gray-600 mt-5">{aboutTheService}</p>
        </div>
        <div>
          <h3
            id="whats-included"
            className="text-black text-2xl lg:text-3xl font-bold"
          >
            What&apos;s included
          </h3>
          <ul id="whats-included-items" className="flex flex-col gap-7 mt-5">
            {whatsIncluded.map((e, i) => (
              <li key={e.name}>
                <h4 className="text-xl text-gray-900">{e.name}</h4>
                <p className="text-lg text-gray-600">{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 id="why-us" className="text-black text-2xl lg:text-3xl font-bold">
            Why us
          </h3>
          <ul id="why-us-items" className="flex flex-col gap-7 mt-5">
            {whyUs.map((e, i) => (
              <li key={e.name}>
                <h4 className="text-xl text-gray-900">{e.name}</h4>
                <p className="text-lg text-gray-600">{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        id="form"
        className=" lg:sticky lg:top-36  border-t-theme-100 border  border-slate-200 self-start   px-4 py-10 border-t-[5px] "
      >
        <h4 className="text-black text-xl lg:text-2xl font-bold">
          Fill out the form to hear from us
        </h4>
        <p className="text-lg text-gray-600">
          Experience premiere interior contracting services today!
        </p>
        <Form />
      </div>
    </div>
  );
};

export default ServiceItemInfo;

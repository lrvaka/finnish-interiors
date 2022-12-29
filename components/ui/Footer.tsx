import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

import Image from "next/image";
import logo from "../../public/images/logo-white.png";

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

const socialMedia = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    icon: FaFacebook,
  },
];

const Border = () => {
  return <div className=" min-h-[1px] lg:min-w-[1px] bg-slate-300"></div>;
};

const Footer = () => {
  return (
    <footer className="bg-theme-200 text-white">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className=" flex flex-col lg:flex-row lg:h-52">
          {" "}
          {contact.map((e, i) => {
            return (
              <>
                <div
                  key={i + "contact-info"}
                  className=" gap-10 lg:gap-0  flex-1 flex flex-col py-9 px-12 lg:py-10 lg:px-14 "
                >
                  <div className="flex gap-4 flex-1">
                    <e.icon className=" h-16 w-16 p-3 bg-theme-100 text-theme-200 " />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-bold text-white">
                        {e.name}
                      </h3>
                      <div className=" text-gray-300 max-w-[200px] sm:text-sm xl:text-base">
                        {e.detail}
                      </div>
                    </div>
                  </div>
                  <a
                    href={e.link}
                    className="text-center underline text-lg text-white"
                  >
                    {e.linkTitle}
                  </a>
                </div>
                {e.border ? <Border /> : null}
              </>
            );
          })}
        </div>
        <div className="flex justify-between flex-col lg:flex-row py-16 lg:py-32 gap-20 lg:gap-0 max-w-xl mx-auto">
          <div>
            <div className="max-w-[175px]">
              <Image src={logo} alt="finnish interiors contracting llc" />
            </div>
            <p className="mt-5">
              Transform your space with NYC&apos;s <br /> expert interior
              contracting services.
            </p>
            <div className="flex gap-3 mt-5">
              {socialMedia.map((e, i) => {
                return (
                  <div
                    className="bg-theme-100 text-theme-200 p-2"
                    key={e.name + i}
                  >
                    <e.icon className="w-5 h-5" />
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="font-semibold text-theme-100 text-xl">
              Quick Links
            </div>

            <ul className="text-lg flex flex-col gap-2 mt-2">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-10 border-t-[1px] border-t-theme-100/50 text-xs lg:text-sm px-2">
        <span>© 2022 Finnish Interiors Contracting LLC. |</span>
        <a className="underline" href="https://blockhead.digital/" target="_blank" rel="noreferrer">
          &nbsp;Website by Blockhead Digital
        </a>
      </div>
    </footer>
  );
};

export default Footer;
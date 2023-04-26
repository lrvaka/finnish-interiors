import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

import Image from "next/image";
import NextLink from "next/link";
import logo from "../../public/images/logo-white.png";

const contact = [
  {
    name: "Call us",
    detail: "(914)-237-3417",
    linkTitle: "Give us a call",
    link: "tel:(914)-237-3417",
    icon: PhoneIcon,
    border: true,
  },
  {
    name: "Email us",
    detail: "info@finnishinteriors.com",
    linkTitle: "Send us an email",
    link: "mailto:info@finnishinteriors.com",
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
    link: "https://www.linkedin.com/company/finnish-interiors/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/finnishinteriors/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/people/Finnish-Interiors/100088846917140/",
  },
];

const Border = () => {
  return <div className=" min-h-[1px] lg:min-w-[1px] bg-slate-300"></div>;
};

const Footer = () => {
  return (
    <footer className="bg-theme-200 text-white">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className=" flex flex-col lg:flex-row lg:h-40">
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
                      <a
                        href={e.link}
                        className="hover:text-theme-100 text-2xl font-bold text-white"
                      >
                        {e.name}
                      </a>
                      <div className=" text-gray-300 max-w-[200px] sm:text-sm xl:text-base">
                        {e.detail}
                      </div>
                    </div>
                  </div>
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
              Transform your space with NY Metro&apos;s <br /> expert interior
              contracting services.
            </p>
            <div className="flex gap-3 mt-5">
              {socialMedia.map((e, i) => {
                return (
                  <a
                    aria-label={e.name}
                    href={e.link}
                    className="bg-theme-100 text-theme-200 p-2"
                    key={e.name + i}
                  >
                    <e.icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <div className="font-semibold text-theme-100 text-xl">
              Quick Links
            </div>

            <ul className="text-lg flex flex-col gap-2 mt-2">
              <li>
                <NextLink href="/">Home</NextLink>
              </li>
              <li>
                <NextLink href="/about">About</NextLink>
              </li>
              <li>
                <NextLink href="/services">Services</NextLink>
              </li>
              <li>
                <NextLink href="/portfolio">Portfolio</NextLink>
              </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-10 border-t-[1px] border-t-theme-100/50 text-xs lg:text-sm px-2">
        <span>© 2022 Finnish Interiors Contracting LLC. |</span>
        <a
          className="underline"
          href="https://blockhead.digital/"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Website by Blockhead Digital
        </a>
      </div>
    </footer>
  );
};

export default Footer;

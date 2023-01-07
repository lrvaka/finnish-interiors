import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import NextLink from "next/link";
import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

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

const MobileNav = () => {
  const [show, setShow] = useState<boolean | undefined>();
  const container = useRef<HTMLDivElement | null>(null);
  const ctx = useRef<any | null>(null);
  const rightX = useRef<any | null>(null);
  const leftX = useRef<any | null>(null);
  const button = useRef<any | null>(null);

  useIsomorphicLayoutEffect(() => {
    ctx.current = gsap.context(() => {}, container); // nothing initially (we'll add() to the context when endX changes)
    return () => ctx.current.revert();
  }, [ctx]);

  // run when `endX` changes
  useIsomorphicLayoutEffect(() => {
    if (show) {
      ctx.current.add(() => {
        gsap
          .timeline()
          .to(container.current, {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: "power4.inOut",
          })
          .to("#nav-items > *", {
            y: 0,
            autoAlpha: 1,
            stagger: 0.025,
            ease: "power4.inOut",
          }, "-=0.4");

        gsap.to(leftX.current, {
          rotate: 45,
          transformOrigin: "center",
          duration: 0.75,
          y: 4,
          ease: "power4.inOut",
        });

        gsap.to(rightX.current, {
          rotate: -45,
          duration: 0.75,
          y: -4,
          transformOrigin: "center",
          ease: "power4.inOut",
        });
      });
    } else if (show === false) {
      ctx.current.add(() => {
        gsap
          .timeline()
          .to(container.current, {
            y: "-25%",
            autoAlpha: 0,
            duration: 0.75,
            ease: "power4.inOut",
          })
          .to("#nav-items > *", {
            y: -10,
            autoAlpha: 0,
            stagger: 0.01,
            ease: "power4.inOut",
          });

        gsap.to(leftX.current, {
          rotate: 0,
          y: 0,
          duration: 0.75,
          ease: "power4.inOut",
        });

        gsap.to(rightX.current, {
          rotate: 0,
          y: 0,
          duration: 0.75,
          ease: "power4.inOut",
        });
      });
    }
  }, [show]);

  return (
    <>
      <button
        ref={button}
        onClick={() => setShow(!show)}
        className="relative z-50 md:hidden ml-3 bg-theme-100 border-theme-100 border-2 py-3 px-2 lg:py-4 lg:px-7 h-fit font-semibold text-theme-200 lg:text-lg"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          className=" overflow-visible"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc></desc>
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line ref={leftX} x1="4" y1="8" x2="20" y2="8"></line>
          <line ref={rightX} x1="4" y1="16" x2="20" y2="16"></line>
        </svg>
      </button>
      <div
        ref={container}
        className="md:hidden flex px-5 text-2xl justify-center text-center items-center  invisible -translate-y-full fixed z-40  w-screen h-screen top-0 left-0 overflow-hidden bg-theme-200 text-white "
      >
        <ul id="nav-items" className="flex flex-col gap-5">
          <li onClick={() => setShow(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link href="/services">Services</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className=" mt-2">
            <div className="flex gap-3 justify-center">
              {socialMedia.map((e, i) => {
                return (
                  <a
                    href={e.link}
                    className="bg-theme-100 text-theme-200 p-2"
                    key={e.name + i}
                  >
                    <e.icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </li>
          <li className="mt-5" onClick={() => setShow(false)}>
            <NextLink
              href="/contact"
              className="mt-5 bg-theme-100 border-theme-100 border-2 py-3 px-2 h-fit font-semibold text-theme-200"
            >
              Get a quote
            </NextLink>
          </li>
        </ul>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <header className=" bg-white fixed z-20 w-full">
        <div className="border-b border-gray-300 flex justify-between p-5 items-center max-w-screen-2xl mx-auto">
          <NextLink href="/" className="max-w-[120px] lg:max-w-[175px]">
            <Image
              src={logo}
              alt="finnish interiors - leading interior contractors"
            />
          </NextLink>
          <nav className="hidden md:block ">
            <ul className="flex gap-12 items-center justify-center h-full font-light text-xl">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <NextLink
              href="/contact"
              className=" bg-theme-100 border-theme-100 border-2 py-3 px-2 lg:py-4 lg:px-7 h-fit font-semibold text-theme-200 lg:text-lg"
            >
              Get a quote
            </NextLink>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

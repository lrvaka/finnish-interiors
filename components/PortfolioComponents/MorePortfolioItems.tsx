import NextLink from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { projectList } from "./PortfolioItems";
import { FcFrame } from "react-icons/fc";
import { IoHammerOutline } from "react-icons/io5";
import { BiCog } from "react-icons/bi";
import { MdOutlineCleaningServices } from "react-icons/md";

type Project = {
  name: string;
  location: string;
  projectImages: string[];
  img: string;
  gc?: string;
  slug?: string;
};

const getRandomProjects = (
  projectList: Project[], // <- add type for projectList
  portfolioItemName: string, // <- add type for portfolioItemName
  count: number // <- add type for count
): Project[] => {
  const filteredList = projectList.filter((e) => e.name !== portfolioItemName);
  const randomProjects = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * filteredList.length);
    randomProjects.push(filteredList[randomIndex]);
    filteredList.splice(randomIndex, 1);
  }

  return randomProjects;
};

const MorePortfolioItems = ({
  portfolioItemName,
}: {
  portfolioItemName: string;
}) => {
  const container = useRef<HTMLDivElement | null>(null);
  const randomProjects = getRandomProjects(projectList, portfolioItemName, 2);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#header > *, #projects > *", {
        y: -10,
        opacity: 0,
      });

      gsap.to("#header > *, #projects > *", {
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

  const onEnter = ({ currentTarget }: { currentTarget: any }) => {
    gsap.context(() => {
      gsap.to("#inner-img", {
        scale: 1.05,
        ease: "power4.easeOut",
      });

      gsap.to(currentTarget, {
        y: 10,
        ease: "power4.easeOut",
      });

      gsap.to("#heading", {
        color: "#00406A",
      });
    }, currentTarget); // <- IMPORTANT! Scopes selector text
  };

  const onLeave = ({ currentTarget }: { currentTarget: any }) => {
    gsap.context(() => {
      gsap.to("#inner-img", {
        scale: 1,
        ease: "power4.easeOut",
      });

      gsap.to(currentTarget, {
        y: 0,
        ease: "power4.easeOut",
      });

      gsap.to("#heading", {
        color: "#000000",
      });
    }, currentTarget); // <- IMPORTANT! Scopes selector text
  };

  return (
    <div ref={container} className="bg-gray-100 ">
      <div className=" px-4 lg:px-6 py-20 z-10 relative flex flex-col max-w-screen-xl mx-auto overflow-hidden h-full">
        <div
          id="header"
          className=" relative z-20 flex flex-col lg:flex-row justify-between lg:items-end gap-5"
        >
          {" "}
          <h2 className="text-black text-3xl lg:text-4xl font-bold">
            More of our projects
          </h2>
          <NextLink
            href="/portfolio"
            className=" max-w-max  border-theme-100 border-2 py-4 px-7 h-fit font-semibold text-theme-200 lg:text-lg transition-all hover:text-theme-200 hover:bg-theme-100 hover:scale-95"
          >
            All projects
          </NextLink>
        </div>
        <div
          id="projects"
          className="grid grid-cols-1 py-10 gap-10 flex-col lg:grid-cols-2"
        >
          {randomProjects.map((e, i) => (
            <NextLink
              key={e.slug}
              href={`/portfolio/${e.slug}`}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="cursor-pointer relative flex flex-col gap-6 border border-slate-200 border-b-theme-100 border-b-[5px] h-max"
            >
              <div
                id="main-img"
                className="relative w-full  z-10  h-[400px] overflow-hidden"
              >
                <Image
                  id="inner-img"
                  className="object-cover"
                  fill
                  src={e.img}
                  alt={"beautiful picture of about us"}
                />
              </div>
              <div className="p-10 pt-5">
                <div className="sm:min-w-0 sm:flex-1">
                  <h2
                    id="heading"
                    className="text-2xl font-semibold leading-8 text-gray-900"
                  >
                    {e.name}
                  </h2>
                  <p className="text-base  text-slate-500">{e.location}</p>
                </div>
              </div>
            </NextLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MorePortfolioItems;

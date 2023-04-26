import { useRef, useEffect } from "react";
import projectListImages from "../../helpers/project_images";
import PortfolioItem from "./PortfolioItem";
import gsap from "gsap";

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const projectList = [
  {
    name: "HelloTend",
    location: "Williamsburg, Brooklyn",
    projectImages: projectListImages.helloTend,
    img: projectListImages.helloTend[0],
  },
  {
    name: "Jennifer Fisher",
    location: "Soho, Manhattan",
    projectImages: projectListImages.jenniferFisher,
    img: projectListImages.jenniferFisher[0],
    gc: "Michilli",
  },
  {
    name: "Stefano Ricci",
    location: "Madison Ave, New York",
    projectImages: projectListImages.stefanoRicci,
    img: projectListImages.stefanoRicci[0],
    gc: "Michilli",
  },
  {
    name: "Mulberry England",
    location: "Wooster St, New York",
    projectImages: projectListImages.mulberryEngland,
    img: projectListImages.mulberryEngland[0],
    gc: "Michilli",
  },
  {
    name: "Gentle Monster",
    location: "70 Wooster St, New York",
    projectImages: projectListImages.gentleMonster,
    img: projectListImages.gentleMonster[0],

    gc: "Michilli",
  },
  {
    name: "Khaite",
    location: "165 Mercer St, New York",
    projectImages: projectListImages.khaite,
    img: projectListImages.khaite[0],
    gc: "Michilli",
  },
  {
    name: "Lacoste",
    location: "541 Broadway, New York",
    projectImages: projectListImages.lacoste,
    img: projectListImages.lacoste[0],
    gc: "Michilli",
  },
  {
    name: "Zadig & Voltaire",
    location: "845 madison Ave, New York",
    projectImages: projectListImages.zadig,
    img: projectListImages.zadig[0],
    gc: "Michilli",
  },
  {
    name: "Assouline",
    location: "3 Park Ave, New York",
    projectImages: projectListImages.assouline,
    img: projectListImages.assouline[0],
    gc: "JRM",
  },
  {
    name: "The Olivia",
    location: "315 West 33rd St, New York",
    projectImages: projectListImages.olivia,
    img: projectListImages.olivia[0],
    gc: "JRM",
  },
  {
    name: "Brooklyn Nets",
    location: "Brooklyn, New York",
    projectImages: projectListImages.bse,
    img: projectListImages.bse[0],
    gc: "Reidy Contracting Group",
  },
  {
    name: "Moncler",
    location: "Woodbury Common, New York",
    projectImages: projectListImages.moncler,
    img: projectListImages.moncler[0],
    gc: "SAJO",
  },
  {
    name: "Moose Knuckle",
    location: "57 Green St., New York",
    projectImages: projectListImages.mooseKnuckle,
    img: projectListImages.mooseKnuckle[0],
    gc: "SAJO",
  },
  {
    name: "CitizenM Hotel Bowery",
    location: "189 Bowery, New York",
    projectImages: projectListImages.citizenMBowery,
    img: projectListImages.citizenMBowery[0],
  },
  {
    name: "CitizenM Hotel",
    location: "218 W 50th St, New York",
    projectImages: projectListImages.citizenM,
    img: projectListImages.citizenM[0],
  },
  {
    name: "Wall Street Hotel",
    location: "88 Wall St, New York",
    projectImages: projectListImages.wallStreetHotel,
    img: projectListImages.wallStreetHotel[0],
  },
  {
    name: "181 E 65th St. Apartment",
    location: "181 E 65th, New York",
    projectImages: projectListImages.apt181East65th,
    img: projectListImages.apt181East65th[0],
  },
  {
    name: "455 E 86th St. Apartment",
    location: "455 E 86th St, New York",
    projectImages: projectListImages.apt455East86th,
    img: projectListImages.apt455East86th[0],
  },
  {
    name: "475 Greenwich St. Apartment",
    location: "475 Greenwich St, New York",
    projectImages: projectListImages.apt475Greenwich,
    img: projectListImages.apt475Greenwich[0],
  },
].map((project) => ({ ...project, slug: createSlug(project.name) }));

export default function PortfolioItems() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#items > *", {
        y: -10,
        opacity: 0,
      });

      gsap.to("#items > *", {
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
    <div ref={container} className="bg-white my-28 lg:mt-40 mb-60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div
            id="items"
            className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"
          >
            {projectList.map((item) => (
              <PortfolioItem
                key={item.name}
                projectImages={item.projectImages}
                name={item.name}
                location={item.location}
                img={item.img}
                slug={item.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { projectList };

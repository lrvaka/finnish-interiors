import { useRef, useEffect } from "react";
import projectListImages from "../../helpers/project_images";
import helloTendImg from "../../public/images/projects/HelloTend/mask-studio.webp";
import jenFishImg from "../../public/images/projects/Michilli - Jennifer Fisher SoHo/96be.jpg";
import stefRicciImg from "../../public/images/projects/Michilli - Stefano Ricci at Fuller Building/AM-05_04.jpg";
import mulberryImg from "../../public/images/projects/Michilli - mulberryengland on Wooster Street/STORE_GALLERY_00.webp";
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
    img: helloTendImg,
    pos: "first",
  },
  {
    name: "Jennifer Fisher",
    location: "Soho, Manhattan",
    projectImages: projectListImages.jenniferFisher,
    img: jenFishImg,
    gc: "Michilli",
  },
  {
    name: "Stefano Ricci",
    location: "Madison Ave, New York",
    projectImages: projectListImages.stefanoRicci,
    img: stefRicciImg,
    gc: "Michilli",
  },
  {
    name: "Mulberry England",
    location: "Wooster St, New York",
    projectImages: projectListImages.mulberryEngland,
    img: mulberryImg,
    pos: "last",
    gc: "Michilli",
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
                pos={item.pos}
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

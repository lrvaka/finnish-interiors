import { StaticImageData } from "next/image";

type ProjectType = {
  title: string;
  location: string;
  pos?: string;
  img: StaticImageData;
  projectImages: Array<StaticImageData>;
  gc?: string;
  slug: string;
};

const PortfolioItemInfo = ({ project }: { project: ProjectType }) => {
  return (
    <div className="mx-auto px-4 lg:px-6 max-w-screen-md relative  mb-16">
      {project.gc ? (
        <>
          <h3 className="text-xl text-gray-900">General contractor</h3>
          <p className="text-lg text-gray-600">{project.gc}</p>
        </>
      ) : null}
    </div>
  );
};

export default PortfolioItemInfo;

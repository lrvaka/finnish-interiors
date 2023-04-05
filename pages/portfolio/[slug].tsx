import { projectList } from "../../components/PortfolioComponents/PortfolioItems";
import { GetStaticPaths, GetStaticProps } from "next";
import Footer from "../../components/ui/Footer";
import { PortfolioItemHeader } from "../../components/PortfolioComponents/Header";
import PortfolioItemInfo from "../../components/PortfolioComponents/PortfolioItemInfo";
import MorePortfolioItems from "../../components/PortfolioComponents/MorePortfolioItems";
import Head from "../../helpers/Head";

export default function PortfolioItem({
  project,
}: {
  project: typeof projectList[0];
}) {
  const meta = {
    title: `${project.name} - Portfolio - Finnish Interiors`,
    description: `Check out this project we did - ${project.name} at ${project.location}!`,
    url: `https://www.finnishinteriors.com/portfolio/${project.slug}`,
    twitter: "https://twitter.com/finnishinteriors",
    imageUrl: "https://www.finnishinteriors.com/twitter.png",
    imageAlt: "Finnish Interiors",
  };

  return (
    <>
      <Head heading={meta} />
      <main className="pt-[95px] lg:pt-[121px]">
        <PortfolioItemHeader
          name={project.name}
          location={project.location}
          projectImages={project.projectImages}
        />
        <PortfolioItemInfo project={project} />
        <MorePortfolioItems portfolioItemName={project.name} />
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectList.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projectList.find((project) => project.slug === params?.slug);

  return { props: { project } };
};

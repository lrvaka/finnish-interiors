import { projectList } from "../../components/PortfolioComponents/PortfolioItems";
import { GetStaticPaths, GetStaticProps } from "next";
import Footer from "../../components/ui/Footer";
import { PortfolioItemHeader } from "../../components/PortfolioComponents/Header";
import PortfolioItemInfo from "../../components/PortfolioComponents/PortfolioItemInfo";
import MorePortfolioItems from "../../components/PortfolioComponents/MorePortfolioItems";

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

export default function PortfolioItem({
  project,
}: {
  project: typeof projectList[0];
}) {
  return (
    <>
      {/* <Head heading={meta} /> */}
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

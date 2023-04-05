import { projectList } from "../components/PortfolioComponents/PortfolioItems";

export default function SiteMap() {
  return <div>Loading</div>;
}

export async function getServerSideProps({ res }) {
  const baseUrl = "https://www.finnishinteriors.com/portfolio";
  const defaultUrls = [
    "https://www.finnishinteriors.com/",
    "https://www.finnishinteriors.com/portfolio",
  ].map((page) => {
    return `
    <loc>${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  `;
  });

  const portfolioItems = projectList.map((item) => {
    const slug = item.slug === "/" ? "/" : `/${item.slug}`;
    return `
        <loc>${baseUrl}${slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      `;
  });

  const final = [...defaultUrls, ...portfolioItems];

  const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${final
            .map((url) => {
              return `<url>
                        ${url}
                      </url>
                    `;
            })
            .join("")}
      </urlset>
      `;
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap());
  res.end();
  return {
    props: {},
  };
}

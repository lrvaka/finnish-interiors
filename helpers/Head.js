import Head from "next/head";
import PropTypes from "prop-types";

const DocHead = (props) => {
  return (
    <>
      <Head>
        <title>{props.heading.title}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href={props.heading.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={props.heading.description} />
        <meta property="og:title" content={props.heading.title} />
        <meta property="og:description" content={props.heading.description} />
        {props.heading.imageUrl && (
          <meta property="og:image" content={props.heading.imageUrl} />
        )}
        {props.heading.imageAlt && (
          <meta property="og:image:alt" content={props.heading.imageAlt} />
        )}
        <meta property="og:url" content={props.heading.url} />
        <meta
          name="twitter:card"
          content={props.heading.imageUrl ? "summary_large_image" : "summary"}
        />
        <meta name="twitter:site" content={props.heading.twitter} />
        <meta name="twitter:creator" content={props.heading.twitter} />
        <meta name="twitter:title" content={props.heading.title} />
        <meta name="twitter:description" content={props.heading.description} />
        {props.heading.imageUrl && (
          <meta property="twitter:image" content={props.heading.imageUrl} />
        )}
        {props.heading.imageAlt && (
          <meta property="twitter:image:alt" content={props.heading.imageAlt} />
        )}
      </Head>
    </>
  );
};

export default DocHead;

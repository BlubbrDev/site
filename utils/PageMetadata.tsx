import React from "react";
import Head from "next/head";

/**
 * Defines the interface of props used by the tracked page component.
 */
interface PageMetadataProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

/**
 * The metadata associated with any given page.
 * @param title the title of the given page.
 * @param description the description of the current page.
 * @param url the url to the current page.
 * @param image the image associated with the current page.
 * @returns a head tag associated with the given parameters.
 */
export default function PageMetadata({
  title = "Blubbr",
  description = "Blubbr is a financial services palatform that allows users to gain instant access to the worlds financial information so that they can make smarter, more informed financial decisions.",
  url = "blubbr.io",
  image = "blubbr_512.png",
}: PageMetadataProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Blubbr" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="Blubbr.io" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="Blubbr" />
      <meta name="twitter:description" content={description} />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </Head>
  );
}

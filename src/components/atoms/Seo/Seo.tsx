import React from 'react';
import { useLocation } from '@reach/router';

import { useSiteMetadata } from 'hooks/useSiteMetadata';

export type SeoType = {
  title?: string;
  description?: string;
  image?: {
    image: { url: string };
  };
  article?: boolean;
};

const Seo = ({
  title,
  description,
  image,
  article,
  children,
}: React.PropsWithChildren<SeoType>) => {
  const { pathname } = useLocation();

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    twitterUsername,
    image: defaultImage,
  } = useSiteMetadata();

  const titleSeparator = '|';
  const titleTemplate = title ? `${title} ${titleSeparator} ${defaultTitle}` : defaultTitle;

  const seo = {
    title: titleTemplate,
    description: description || defaultDescription,
    image: image?.image.url ? image.image.url : `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta name="twitter:creator" content={twitterUsername} />
      {seo.url && <link rel="canonical" href={seo.url} />}
      {children}
    </>
  );
};

export default Seo;

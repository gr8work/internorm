import { graphql, useStaticQuery } from 'gatsby';

export type UseSiteMetadataType = {
  site: {
    siteMetadata: Record<'title' | 'description' | 'siteUrl' | 'twitterUsername' | 'image', string>;
  };
};

export const useSiteMetadata = () => {
  const data = useStaticQuery<UseSiteMetadataType>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          twitterUsername
          image
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

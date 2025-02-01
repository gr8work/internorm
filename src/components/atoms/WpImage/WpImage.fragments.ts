import { graphql } from 'gatsby';

export const query = graphql`
  fragment WpImageFragment on WpMediaItem {
    altText
    localFile {
      childImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
  }
`;

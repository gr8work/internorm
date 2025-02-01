import React, { FC, useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { IImage } from './interface';
import { Wrapper } from './styles';

export const Image: FC<IImage> = ({ alt, src, type, className, objectFit }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { ne: "pdf" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () => data.allFile.edges.find((item: any) => item.node.relativePath === src),
    [data, src]
  );

  return (
    <Wrapper type={type} className={className}>
      {match && (
        <GatsbyImage image={match.node.childImageSharp.gatsbyImageData} {...{ alt, objectFit }} />
      )}
    </Wrapper>
  );
};

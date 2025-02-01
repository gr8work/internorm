import { GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

import { StyledGatsbyImageWrapper, StyledImageWrapper } from './WpImage.styles';

export type WpImageType = {
  altText: string;
  localFile: {
    publicURL?: string;
    extension?: string;
    childImageSharp?: {
      gatsbyImageData?: IGatsbyImageData;
    };
  };
};

const WpImage = ({
  localFile,
  altText,
  className,
  ...delegated
}: WpImageType & Omit<GatsbyImageProps, 'image' | 'alt' | 'as'>) => {
  if (!localFile?.childImageSharp?.gatsbyImageData || !localFile?.publicURL) return null;

  if (localFile.extension === 'svg' && localFile.publicURL) {
    return <StyledImageWrapper {...{ src: localFile.publicURL, alt: altText, className }} />;
  }

  return (
    <StyledGatsbyImageWrapper
      {...delegated}
      {...{
        image: localFile.childImageSharp.gatsbyImageData,
        alt: altText,
        className,
      }}
    />
  );
};

export default WpImage;

import type { GatsbyImageProps } from 'gatsby-plugin-image';

export interface IImage {
  src: string;
  alt: string;
  type?: string;
  className?: string;
  objectFit?: GatsbyImageProps['objectFit'];
}

export interface IImageWrapper {
  type?: string;
}

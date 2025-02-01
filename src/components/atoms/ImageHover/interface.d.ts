export interface IImageHover {
  children: ReactNode;
  type?: TypeOfHoverImage;
  className?: string;
}

export interface TypeOfImageStyle {
  type?: TypeOfHoverImage;
}

export type TypeOfHoverImage = 'current-offers' | 'guide-post' | 'realizations' | 'default';

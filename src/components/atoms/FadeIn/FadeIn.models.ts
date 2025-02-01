export type FadeInVariantType = 'none' | 'up';

export type FadeInAnimationType = { opacity?: number; y?: number };

export type FadeInOptionsType = {
  initial?: FadeInAnimationType;
  whileInView?: FadeInAnimationType;
  viewport?: { once?: boolean };
  transition?: { duration?: number; delay?: number };
};

export type FadeInPropsType = {
  children: React.ReactNode;
  asEl?:
    | 'div'
    | 'section'
    | 'aside'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'ul'
    | 'li'
    | 'article'
    | 'header';
  custom?: FadeInOptionsType;
  className?: string;
  id?: string;
  layout?: boolean;
  animationVariant?: FadeInVariantType;
};

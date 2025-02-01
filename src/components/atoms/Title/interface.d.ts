export interface ITitle extends React.ComponentPropsWithoutRef<'div'> {
  title?: string;
  subTitle?: string;
  type?: TitleType;
}

export interface ITitleWrapper {
  type: string;
}

export type TitleType =
  | 'default'
  | 'dark'
  | 'red-opacity'
  | 'white'
  | 'section'
  | 'security'
  | 'product-title'
  | 'realizations'
  | 'card-pink'
  | 'intro'
  | 'newsletter-post'
  | 'project-item'
  | 'homepage-banner';

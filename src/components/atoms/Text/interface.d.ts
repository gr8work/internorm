export interface IText extends React.ComponentPropsWithoutRef<'div'> {
  type?: TextType;
  text?: string;
  className?: string;
}

export interface ITextWrapper {
  type: string;
}

export type TextType =
  | 'default'
  | 'form-text'
  | 'red-file'
  | 'white'
  | 'white-big'
  | 'swiper-icons'
  | 'slider-text'
  | 'red-title'
  | 'dark-title'
  | 'red-data'
  | 'gray-data'
  | 'contact-us-text'
  | 'vertical-slider-white'
  | 'vertical-slider-dark';

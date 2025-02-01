import { TitleType } from 'components/atoms/Title/interface';
import { TextType } from 'components/atoms/Text/interface';
import { WpImageType } from 'components/atoms/WpImage';

export type ISliderVerticalDescription = {
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  linkText?: string;
  linkTo?: string;
  buttonLink?: string;
  typeText?: TextType;
  typeTitle?: TitleType;
  typeLink?: string;
  typeButton?: string;
  author?: {
    image: WpImageType;
    subTitle: string;
    title: string;
  };
};

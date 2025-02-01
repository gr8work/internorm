import { TextType } from 'components/atoms/Text/interface';
import { ButtonType } from 'components/atoms/Button';
import { WpImageType } from 'components/atoms/WpImage';

export interface IQuality {
  subTitle?: string;
  title?: string;
  content?: string;
  items?: Items[];
  button?: ButtonType;
  type?: 'large-dark' | 'white' | 'default';
  typeText?: TextType;
}

interface Items {
  image?: WpImageType;
  title?: string;
  content?: string;
  link?: {
    url: string;
    target?: string;
  };
}

export interface IQualityWrapper {
  type?: 'large-dark' | 'white' | 'default';
}

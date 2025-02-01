import { TextType } from 'components/atoms/Text/interface';
import { TitleType } from 'components/atoms/Title/interface';
import { ButtonType } from 'components/atoms/Button/interface';
import { WpImageType } from 'components/atoms/WpImage';

export interface IBlackBannerCurrent {
  currentBlackBanner: IBlackBanner[];
}

export interface IBlackBanner {
  title: string;
  subTitle: string;
  text: string;
  button: ButtonType;
  image: WpImageType;
  typeText?: TextType;
  typeTitle?: TitleType;
  isWarrantyPage?: boolean;
}

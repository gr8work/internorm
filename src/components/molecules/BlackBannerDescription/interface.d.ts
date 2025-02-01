import { TextType } from 'components/atoms/Text/interface';
import { TitleType } from 'components/atoms/Title/interface';
import { IButton } from 'components/atoms/Button/interface';

export interface IBlackBannerDescription {
  title: string;
  subTitle: string;
  description: string;
  textButton: string;
  linkButton: IButton['link'];
  typeText?: TextType;
  typeTitle?: TitleType;
}

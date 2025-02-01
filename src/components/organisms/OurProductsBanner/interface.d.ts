import { WpImageType } from 'components/atoms/WpImage';
import { ButtonType } from 'components/atoms/Button';

export interface IOurProductsBanner {
  subTitle: string;
  title: string;
  description: string;
  image: WpImageType;
  kindButton: ButtonType;
  contactButton: ButtonType;
}

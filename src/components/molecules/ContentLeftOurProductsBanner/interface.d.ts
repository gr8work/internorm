import { ButtonType } from 'components/atoms/Button';

export interface IOurProductBanner {
  subTitle?: string;
  title: string;
  description: string;
  kindButton: ButtonType;
  contactButton: ButtonType;
}

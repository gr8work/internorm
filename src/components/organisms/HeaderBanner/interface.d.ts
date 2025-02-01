import { ButtonType } from 'components/atoms/Button';
import { WpImageType } from 'components/atoms/WpImage';

export interface IHeaderBanner {
  ref?: any;
  title: string;
  button: ButtonType;
  imageMobile: WpImageType;
  imageDesktop: WpImageType;
}

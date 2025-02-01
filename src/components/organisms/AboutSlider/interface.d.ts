import { WpImageType } from 'components/atoms/WpImage';
import { ButtonType } from 'components/atoms/Button';

export interface IAboutSlider {
  map: WpImageType;
  images: { image: WpImageType }[];
  button: ButtonType;
}

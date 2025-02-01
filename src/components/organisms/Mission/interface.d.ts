import { WpImageType } from 'components/atoms/WpImage';
import { ButtonType } from 'components/atoms/Button';

export interface IMission {
  image?: WpImageType;
  subTitle?: string;
  title?: string;
  button?: ButtonType;
  previewVideo?: string;
  video?: string;
  handleClick: function;
}

export interface IMissionVideo {
  previewVideo?: string;
  video?: string;
}

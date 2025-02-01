import { WpImageType } from 'components/atoms/WpImage';

export interface IImagesSwiperLabels {
  items: Items[];
}

interface Items {
  mainTextLabel: string;
  secondTextLabel: string;
  image?: WpImageType;
  content?: string;
  link?: { uri: string } | null;
}

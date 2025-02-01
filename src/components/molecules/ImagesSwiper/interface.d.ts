import { WpImageType } from 'components/atoms/WpImage';

export interface IImagesSwiper {
  items: Items[];
  type?: string;
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

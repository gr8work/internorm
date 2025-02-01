import { WpImageType } from 'components/atoms/WpImage';

export interface ISoloLocation {
  image: WpImageType;
  title: string;
  content: string;
  link: {
    url: string;
    target?: string;
  };
}

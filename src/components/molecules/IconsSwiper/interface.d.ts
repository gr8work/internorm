import { IIcon } from 'components/atoms/Icon/interface';
import { IList } from 'components/molecules/List/interface';

export interface IIconsSwiper {
  items: Items[];
  type?: string;
}

export interface ISoloSlider {
  last: boolean;
}

interface Items {
  icon: IIcon;
  text?: string;
  list?: IList;
}

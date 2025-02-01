import { Items } from 'components/molecules/List/interface';

export interface INavBar {
  links: Items[];
  src: string;
  alt: string;
  to: string;
  active: boolean;
  activeScroll: boolean;
  handleClick?: any;
}

export interface INavBarWrapper {
  active: boolean;
  activeScroll: boolean;
}

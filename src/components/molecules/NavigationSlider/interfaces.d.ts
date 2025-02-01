import { Items } from 'components/molecules/ImagesSwiper/interface';

export interface INavigationSlider {
  sliders: Items[];
  activeIndex: integer;
}

export interface INavigationSliderWrapper {
  active: boolean;
}

import { SwiperOptions } from 'swiper';
import { breakpointsObject } from 'theme/breakpoints';

export const sliderOptions: (cardsLength: number) => SwiperOptions = (cardsLength) => ({
  spaceBetween: 30,
  slidesPerView: 1,
  breakpoints: {
    [breakpointsObject.sm]: {
      slidesPerView: cardsLength < 3 ? cardsLength : 3,
    },
    [breakpointsObject.md]: {
      slidesPerView: cardsLength < 4 ? cardsLength : 4,
    },
    [breakpointsObject.lg]: {
      slidesPerView: cardsLength < 5 ? cardsLength : 5,
    },
    [breakpointsObject.xl]: {
      slidesPerView: cardsLength < 6 ? cardsLength : 6,
    },
  },
});

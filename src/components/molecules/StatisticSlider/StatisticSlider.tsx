import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { StyledSwiper } from './StatisticSlider.styles';

import 'swiper/css';
import SliderArrow from 'components/atoms/SliderArrow';
import { Autoplay } from 'swiper';

export type StatisticSliderType = {
  slides: React.ReactNode[];
  className?: string;
};

const ImagesSwiper = ({ slides, className }: StatisticSliderType) => (
  <StyledSwiper
    className={className}
    modules={[Autoplay]}
    autoplay={{ delay: 4000 }}
    slidesPerView={1}
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>{slide}</SwiperSlide>
    ))}
    <SliderArrow side="prev" type="light-secondary" />
    <SliderArrow side="next" type="light-secondary" />
  </StyledSwiper>
);

export default ImagesSwiper;

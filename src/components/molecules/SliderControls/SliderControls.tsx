import React from 'react';
import { useSwiper } from 'swiper/react';

import prevIcon from 'assets/icons/slider-arrow-left.svg';
import nextIcon from 'assets/icons/slider-arrow-right.svg';

import { StyledArrowIcon, StyledDot, StyledWrapper } from './SliderControls.styles';
import { SliderType } from '../Slider';

export type SliderControlsType = {
  slides: number[];
  activeIndex: number;
  variant: SliderType['variant'];
};

const SliderControls = ({ slides = [], activeIndex, variant = 'primary' }: SliderControlsType) => {
  const swiper = useSwiper();

  if (!swiper || slides.length <= 1) return null;

  return (
    <StyledWrapper data-variant={variant}>
      <StyledArrowIcon src={prevIcon} type="16" handleClick={() => swiper.slidePrev()} />
      {slides.map((_, index) => (
        <StyledDot
          key={`dot-${index}`}
          active={activeIndex === index}
          onClick={() => swiper.slideTo(index)}
        >
          {index + 1}
        </StyledDot>
      ))}
      <StyledArrowIcon src={nextIcon} type="16" handleClick={() => swiper.slideNext()} />
    </StyledWrapper>
  );
};

export default SliderControls;

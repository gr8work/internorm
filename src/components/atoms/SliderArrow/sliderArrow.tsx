import React, { FC } from 'react';
import { ISliderArrow } from './interface';
import {
  StyledNextArrow,
  StyledNextHoverArrow,
  StyledPrevArrow,
  StyledPrevHoverArrow,
  StyledNextHoverArrowSecondary,
  Wrapper,
} from './styles';
import { useSwiper } from 'swiper/react';

const arrowsNextMap = {
  light: (
    <>
      <StyledNextArrow />
      <StyledNextHoverArrow />
    </>
  ),
  dark: (
    <>
      <StyledNextArrow />
      <StyledNextHoverArrow />
    </>
  ),
  'light-secondary': (
    <>
      <StyledNextArrow />
      <StyledNextHoverArrowSecondary />
    </>
  ),
};

const arrowsPrevMap = {
  light: (
    <>
      <StyledPrevArrow />
      <StyledPrevHoverArrow />
    </>
  ),
  dark: (
    <>
      <StyledPrevArrow />
      <StyledPrevHoverArrow />
    </>
  ),
  'light-secondary': (
    <>
      <StyledPrevArrow />
      <StyledNextHoverArrowSecondary />
    </>
  ),
};

export const SliderArrow: FC<ISliderArrow> = ({ side, type = 'light' }) => {
  const swiper = useSwiper();

  return (
    <Wrapper
      data-type={type}
      side={side}
      onClick={() => (side === 'prev' ? swiper.slidePrev() : swiper.slideNext())}
    >
      {side === 'prev' ? arrowsPrevMap[type] : arrowsNextMap[type]}
    </Wrapper>
  );
};

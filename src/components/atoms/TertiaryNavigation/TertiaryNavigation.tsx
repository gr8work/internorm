import React from 'react';
import { useSwiper } from 'swiper/react';

import { StyledArrowLeft, StyledArrowRight } from './TertiaryNavigation.styles';
import TertiaryNavigationArrowIcon from 'assets/icon-components/TertiaryNavigationArrowIcon';
import { SliderType } from 'components/molecules/Slider';

const TertiaryNavigation = ({ type = 'primary' }: { type?: SliderType['navigationType'] }) => {
  const swiper = useSwiper();

  return (
    <>
      <StyledArrowLeft {...{ type }} onClick={() => swiper.slidePrev()}>
        <TertiaryNavigationArrowIcon />
      </StyledArrowLeft>
      <StyledArrowRight {...{ type }} onClick={() => swiper.slideNext()}>
        <TertiaryNavigationArrowIcon />
      </StyledArrowRight>
    </>
  );
};

export default TertiaryNavigation;

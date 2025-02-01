import React, { FC } from 'react';
import { INavigationSlider } from './interfaces';
import { useSwiper } from 'swiper/react';
import { Wrapper, Solo } from './styles';
import prevIcon from 'assets/icons/slider-arrow-left.svg';
import nextIcon from 'assets/icons/slider-arrow-right.svg';
import Icon from 'components/atoms/Icon';

export const NavigationSlider: FC<INavigationSlider> = ({ sliders, activeIndex }) => {
  const swiper = useSwiper();

  return (
    <Wrapper>
      <Icon src={prevIcon} type="16" handleClick={() => swiper.slidePrev()} />
      {sliders.map(({ title }, index) => (
        <Solo key={title} active={activeIndex === index} onClick={() => swiper.slideTo(index)}>
          {index + 1}
        </Solo>
      ))}
      <Icon src={nextIcon} type="16" handleClick={() => swiper.slideNext()} />
    </Wrapper>
  );
};

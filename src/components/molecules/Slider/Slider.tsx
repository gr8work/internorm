import React, { useState } from 'react';
import { Autoplay, SwiperOptions } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';

import SliderControls from 'components/molecules/SliderControls';

import { breakpointsObject } from 'theme/breakpoints';

import { StyledSliderWrapper, StyledSwiper } from './Slider.styles';
import TertiaryNavigation from 'components/atoms/TertiaryNavigation';

export type SliderType = {
  slides: React.ReactNode[];
  options?: SwiperOptions;
  variant?: SliderVariantType;
  className?: string;
  navigationType?: 'primary' | 'secondary';
};

type SliderOptionsMappedType = {
  [variant in SliderVariantType]?: SwiperOptions;
};

export type SliderVariantType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'secondaryRight'
  | 'secondaryLeft'
  | 'secondaryCenter'
  | 'tertiary';

const Slider = ({
  variant = 'default',
  slides = [],
  options = {},
  className,
  navigationType,
}: SliderType) => {
  const [slideActiveIndex, setSlideActiveIndex] = useState(0);
  const [snapGrid, setSnapGrid] = useState<number[]>([]);

  if (!slides?.length) return null;

  const primaryVariantOptions: SwiperOptions = {
    spaceBetween: 30,
    breakpoints: {
      [breakpointsObject.lg]: {
        direction: 'vertical',
      },
    },
  };

  const sliderOptions: SliderOptionsMappedType = {
    default: { spaceBetween: 30 },
    primary: primaryVariantOptions,
    secondary: { ...primaryVariantOptions, breakpoints: undefined },
    secondaryRight: { ...primaryVariantOptions, breakpoints: undefined },
    secondaryLeft: { ...primaryVariantOptions, breakpoints: undefined },
  };

  const defaultSlider = (
    <StyledSwiper
      modules={[Autoplay]}
      autoplay={{
        delay: 4000,
      }}
      {...options}
      {...{ className }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </StyledSwiper>
  );

  const sliderWithControls = (
    <StyledSliderWrapper {...{ className }}>
      <StyledSwiper
        data-variant={variant}
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        {...sliderOptions[variant]}
        {...options}
        onSlideChange={({ activeIndex }) => setSlideActiveIndex(activeIndex)}
        observer
        onInit={(swiper) => {
          if (swiper?.snapGrid) {
            setSnapGrid(swiper.snapGrid);
          }
        }}
        onResize={(swiper) => {
          if (swiper?.snapGrid) {
            setSnapGrid(swiper.snapGrid);
          }
        }}
        onObserverUpdate={(swiper) => {
          if (swiper?.snapGrid) {
            setSnapGrid(swiper.snapGrid);
          }
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
        {variant === 'tertiary' ? (
          <TertiaryNavigation type={navigationType} />
        ) : (
          <SliderControls {...{ slides: snapGrid, activeIndex: slideActiveIndex, variant }} />
        )}
      </StyledSwiper>
    </StyledSliderWrapper>
  );

  return variant !== 'default' ? sliderWithControls : defaultSlider;
};

export default Slider;

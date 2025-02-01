import React from 'react';

import { ButtonType } from 'components/atoms/Button';
import { WpImageType } from 'components/atoms/WpImage';
import {
  StyledBackgroundImage,
  StyledButton,
  StyledCard,
  StyledSubTitle,
  StyledWrapper,
} from './RedSlider.styles';
import StatisticSlider from 'components/molecules/StatisticSlider';
import RichText from 'components/atoms/RichText';

export type RedSliderType = {
  backgroundImage: WpImageType;
  sliderElements: {
    heading: string;
    subTitle: string;
    text: string;
    button: ButtonType;
  }[];
};

const RedSlider = ({ backgroundImage, sliderElements }: RedSliderType) => {
  const slides = sliderElements?.map((slide) => (
    <StyledCard key={slide.heading}>
      <StyledSubTitle>{slide.subTitle}</StyledSubTitle>
      <RichText html={slide.heading} />
      <RichText html={slide.text} />
      <StyledButton
        {...{
          text: slide.button.label,
          link: slide.button.link,
          ariaLabel: slide.button.ariaLabel,
        }}
      />
    </StyledCard>
  ));

  return (
    <StyledWrapper>
      <StyledBackgroundImage {...backgroundImage} />
      <StatisticSlider {...{ slides }} />
    </StyledWrapper>
  );
};

export default RedSlider;

import React from 'react';
import type { WpImageType } from 'components/atoms/WpImage';
import { SliderType } from 'components/molecules/Slider';
import {
  StyledDescription,
  StyledHeading,
  StyledSlider,
  StyledWpImage,
  StyledWrapper,
} from './InspirationRealizationIntro.styles';
import FadeIn from 'components/atoms/FadeIn';

export type RealizationIntroType = {
  title: string;
  text?: string;
  imageSlider?: {
    image?: WpImageType;
  }[];
};

const InspirationRealizationIntro = ({ title, text, imageSlider }: RealizationIntroType) => {
  const slides = imageSlider
    ?.map(({ image }) => (image ? <StyledWpImage key={image?.altText} {...image} /> : null))
    .filter((image) => image != null);

  const infoSliderOptions: SliderType['options'] = {
    slidesPerView: 1,
    spaceBetween: 30,
  };
  return (
    <StyledWrapper aria-labelledby="intro-heading">
      <FadeIn>
        <StyledHeading id="intro-heading" {...{ title, type: 'intro' }} />
      </FadeIn>
      <FadeIn custom={{ transition: { delay: 0.2 } }}>
        {text && <StyledDescription {...{ text }} />}
      </FadeIn>
      <FadeIn custom={{ transition: { delay: 0.4 } }}>
        {slides ? (
          <StyledSlider
            {...{
              variant: 'secondaryCenter',
              slides,
              options: infoSliderOptions,
            }}
          />
        ) : null}
      </FadeIn>
    </StyledWrapper>
  );
};

export default InspirationRealizationIntro;

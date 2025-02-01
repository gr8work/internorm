import React from 'react';

import { SliderType } from 'components/molecules/Slider';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import LightAccents, { LightAccentsType } from 'components/molecules/LightAccents';

import { breakpointsObject } from 'theme/breakpoints';

import {
  StyledCard,
  StyledCardImage,
  StyledCardSlider,
  StyledContent,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from './DoorSafety.styles';
import { WpImageType } from 'components/atoms/WpImage';
import FadeIn from 'components/atoms/FadeIn';

export type DoorSafetyType = {
  subTitle: string;
  heading: string;
  text: string;
  cards: {
    image: WpImageType;
    heading: string;
    text: string;
  }[];
  accents: LightAccentsType;
};

const DoorSafety = ({ subTitle, heading, text, cards, accents }: DoorSafetyType) => {
  const cardSliderOptions: SliderType['options'] = {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      [breakpointsObject.md]: {
        slidesPerView: 2,
      },
      [breakpointsObject.lg]: {
        slidesPerView: 3,
      },
    },
  };

  const cardSlides = cards.map((card) => (
    <StyledCard key={card.heading}>
      <StyledCardImage {...card.image} />
      <Title {...{ title: card.heading, type: 'card-pink' }} />
      <Text text={card.text} type="white" />
    </StyledCard>
  ));

  return (
    <StyledWrapper>
      <StyledContent>
        <FadeIn>
          <StyledTitle {...{ subTitle, title: heading, type: 'white' }} />
        </FadeIn>
        <FadeIn>
          <StyledText {...{ text, type: 'white' }} />
        </FadeIn>
        <FadeIn>
          <StyledCardSlider
            {...{
              slides: cardSlides,
              options: cardSliderOptions,
              variant: 'primary',
            }}
          />
        </FadeIn>
      </StyledContent>
      <LightAccents {...accents} />
    </StyledWrapper>
  );
};

export default DoorSafety;

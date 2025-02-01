import React from 'react';

import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';
import { SliderType } from 'components/molecules/Slider';

import { breakpointsObject } from 'theme/breakpoints';

import {
  StyledCardImage,
  StyledSlider,
  StyledSolutionCard,
  StyledSolutionCardContent,
  StyledWrapper,
} from './ProductSolutions.styles';
import { ButtonType } from 'components/atoms/Button';
import { WpImageType } from 'components/atoms/WpImage';
import FadeIn from 'components/atoms/FadeIn';
import ArrowMore from 'components/atoms/ArrowMore';

export type ProductSolutionsType = {
  title: string;
  cards: {
    image: WpImageType;
    title: string;
    text: string;
    button: ButtonType;
  }[];
};

const ProductSolutions = ({ title, cards }: ProductSolutionsType) => {
  if (!cards?.length) {
    return null;
  }

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

  const solutionSlides = cards.map((card) => (
    <StyledSolutionCard key={card.title} as={FadeIn}>
      <StyledCardImage {...card.image} />
      <StyledSolutionCardContent>
        <Title {...{ title: card.title, type: 'product-title' }} />
        <Text {...{ text: card.text }} />
        {card.button.link ? <ArrowMore link={card.button.link} /> : null}
      </StyledSolutionCardContent>
    </StyledSolutionCard>
  ));

  return (
    <StyledWrapper>
      <FadeIn>
        <Title {...{ title, type: 'section' }} />
      </FadeIn>
      <FadeIn>
        <StyledSlider
          {...{ slides: solutionSlides, options: cardSliderOptions, variant: 'secondary' }}
        />
      </FadeIn>
    </StyledWrapper>
  );
};

export default ProductSolutions;

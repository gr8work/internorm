import React from 'react';

import { SwiperSlide } from 'swiper/react';

import { ButtonType } from 'components/atoms/Button';
import WhyUsCard, { WhyUsCardType } from 'components/molecules/WhyUsCard';

import 'swiper/css';

import {
  StyledButton,
  StyledContainer,
  StyledSwiper,
  StyledTitle,
  StyledWrapper,
} from './WhyUs.styles';
import { sliderOptions } from './WhyUs.constants';
import FadeIn from 'components/atoms/FadeIn';

export type WhyUsType = {
  cards: WhyUsCardType[];
  subTitle?: string;
  title?: string;
  button?: ButtonType;
  variant?: 'default' | 'architect-page' | 'partner-page' | 'why-internorm';
  cardTitleVariant?: 'partner-page-secondary';
  background?: 'white' | 'alabaster';
};

const WhyUs = ({
  title,
  subTitle,
  cards,
  button,
  variant = 'default',
  background,
  cardTitleVariant,
}: WhyUsType) => {
  const cardsLength = cards.length;

  return (
    <StyledWrapper data-background={background} data-variant={variant}>
      <StyledContainer>
        <FadeIn>{title ? <StyledTitle {...{ type: 'section', title, subTitle }} /> : null}</FadeIn>
        <FadeIn custom={{ transition: { delay: 0.2 } }}>
          <StyledSwiper
            variant="secondaryCenter"
            slides={cards.map((card) => (
              <SwiperSlide key={card.heading}>
                <WhyUsCard {...card} {...{ cardTitleVariant }} />
              </SwiperSlide>
            ))}
            options={sliderOptions(cardsLength)}
          />
        </FadeIn>
        <FadeIn custom={{ transition: { delay: 0.4 } }}>
          {button?.label || button?.link ? (
            <StyledButton
              {...{
                text: button.label,
                link: button.link,
                ariaLabel: button.ariaLabel,
                type: variant === 'partner-page' ? 'red' : 'grey',
              }}
            />
          ) : null}
        </FadeIn>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default WhyUs;

import React from 'react';
import CurrentOffersDescription from 'components/molecules/CurrentOffersDescription';
import { ItemCurrentOffer, StyledTitle, StyledWpImage, WrapperCurrentOffers } from './styles';
import { CurrentOffersType } from './interface';
import Slider, { SliderType } from 'components/molecules/Slider';
import { breakpointsObject } from 'theme/breakpoints';
import FadeIn from 'components/atoms/FadeIn';
import ImageHover from 'components/atoms/ImageHover';
import LinkWrapContent from 'components/atoms/LinkWrappContent';

export const CurrentOffers = ({ title, items }: CurrentOffersType) => {
  const sliderOptions: SliderType['options'] = {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      [breakpointsObject.md]: {
        slidesPerView: 1,
      },
      [breakpointsObject.lg]: {
        slidesPerView: 2,
      },
      [breakpointsObject.xl]: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <WrapperCurrentOffers>
      <FadeIn>
        <StyledTitle {...{ title, type: 'section' }} />
      </FadeIn>
      <Slider
        {...{ options: sliderOptions, variant: 'secondary' }}
        slides={items.map(({ currentOffer }) => (
          <ItemCurrentOffer key={`${title}-${currentOffer.title}`}>
            <LinkWrapContent link={currentOffer.button.link}>
              <ImageHover type="current-offers">
                <StyledWpImage {...currentOffer.image} />
              </ImageHover>
            </LinkWrapContent>
            <CurrentOffersDescription {...currentOffer} />
          </ItemCurrentOffer>
        ))}
      />
    </WrapperCurrentOffers>
  );
};

import React from 'react';

import { ButtonType } from 'components/atoms/Button';
import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';
import { SliderType } from 'components/molecules/Slider';

import { breakpointsObject } from 'theme/breakpoints';

import {
  StyledButton,
  StyledCard,
  StyledCardImage,
  StyledCardSlider,
  StyledContent,
  StyledHeading,
  StyledImage,
  StyledIntro,
  StyledPreviewSlider,
  StyledText,
  StyledWrapper,
} from './ProductAdvantages.styles';
import { CustomThemeColorType } from 'theme/styled';
import { WpImageType } from 'components/atoms/WpImage';
import FadeIn from 'components/atoms/FadeIn';
import { richTextToSlug } from 'utils/richTextToSlug';

export type ProductAdvantagesType = {
  heading: string;
  text: string;
  previewImages: {
    image: WpImageType;
  }[];
  cards: {
    image: WpImageType;
    heading: string;
    text: string;
  }[];
  button: ButtonType;
  sectionColor?: CustomThemeColorType;
};

const ProductAdvantages = ({
  heading,
  text,
  previewImages,
  cards,
  button,
  sectionColor = 'alabaster',
}: ProductAdvantagesType) => {
  if (!heading || !text || !previewImages || !cards) {
    return null;
  }

  const previewImageSlides = previewImages
    ?.filter(({ image }) => image !== null)
    .map(({ image }) => <StyledImage key={image?.altText} {...image} />);

  const cardSlides = cards?.map((card) => (
    <StyledCard key={card.heading}>
      <StyledCardImage {...card.image} />
      <Title title={card.heading} type="product-title" />
      <Text text={card.text} />
    </StyledCard>
  ));

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

  return (
    <StyledWrapper id={richTextToSlug(heading)} {...{ sectionColor }}>
      <StyledIntro as={FadeIn}>
        <StyledContent>
          <StyledHeading title={heading} type="section" />
          <StyledText text={text} />
        </StyledContent>
        <StyledPreviewSlider {...{ slides: previewImageSlides, variant: 'primary' }} />
      </StyledIntro>
      <FadeIn>
        <StyledCardSlider
          {...{
            slides: cardSlides,
            options: cardSliderOptions,
            variant: 'secondary',
          }}
        />
      </FadeIn>
      <FadeIn>
        {button?.label || button?.link ? (
          <StyledButton
            {...{ text: button.label, link: button.link, ariaLabel: button.ariaLabel, type: 'red' }}
          />
        ) : null}
      </FadeIn>
    </StyledWrapper>
  );
};

export default ProductAdvantages;

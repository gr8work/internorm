import React from 'react';

import Title from 'components/atoms/Title';
import Slider from 'components/molecules/Slider';

import { WpImageType } from 'components/atoms/WpImage';

import {
  StyledAboutContent,
  StyledAboutText,
  StyledAboutWpImage,
  StyledFullWidthSlider,
  StyledFullWidthWpImage,
  StyledSectionTitle,
  StyledTagSlider,
  StyledWrapper,
} from './ProductModelRealizations.styles';
import FadeIn from 'components/atoms/FadeIn';

export type ProductModelRealizationsType = {
  title: string;
  fullWidthImages: { image: WpImageType }[];
  aboutContent: {
    subTitle: string;
    title: string;
    text: string;
    images: { image: WpImageType }[];
    tags: { text: string }[];
  };
};

const ProductModelRealizations = ({
  title,
  fullWidthImages,
  aboutContent,
}: ProductModelRealizationsType) => {
  const fullWidthSlides = fullWidthImages?.map(({ image }) => (
    <StyledFullWidthWpImage key={image.altText} {...image} />
  ));

  const aboutSlides = aboutContent.images?.map(({ image }) => (
    <StyledAboutWpImage key={image.altText} {...image} />
  ));

  return (
    <StyledWrapper>
      <FadeIn>
        <StyledSectionTitle {...{ title, type: 'realizations' }} />
      </FadeIn>
      <StyledFullWidthSlider
        {...{
          slides: fullWidthSlides,
          variant: 'secondary',
        }}
      />
      <StyledAboutContent>
        <article>
          <FadeIn>
            <Title {...{ subTitle: aboutContent.subTitle, title: aboutContent.title }} />
          </FadeIn>
          <FadeIn>
            <StyledAboutText {...{ text: aboutContent.text }} />
          </FadeIn>
          <FadeIn>
            <StyledTagSlider
              {...{
                variant: 'primary',
                tags: aboutContent.tags,
                customTagWidth: '260px',
              }}
            />
          </FadeIn>
        </article>
        <Slider {...{ slides: aboutSlides, variant: 'secondary' }} />
      </StyledAboutContent>
    </StyledWrapper>
  );
};

export default ProductModelRealizations;

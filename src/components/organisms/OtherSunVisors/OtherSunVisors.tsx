import React from 'react';

import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';
import { CustomThemeColorType } from 'theme/styled';

import {
  StyledButton,
  StyledContent,
  StyledHeading,
  StyledImage,
  StyledImageSlider,
  StyledIntro,
  StyledProduct,
  StyledProducts,
  StyledText,
  StyledWrapper,
} from './OtherSunVisors.styles';
import { WpImageType } from 'components/atoms/WpImage';
import FadeIn from 'components/atoms/FadeIn';
import { richTextToSlug } from 'utils/richTextToSlug';

export type OtherSunVisorsType = {
  heading: string;
  text: string;
  products: {
    images: {
      image: WpImageType;
    }[];
    heading: string;
    text: string;
  }[];
  button: {
    label: string;
    ariaLabel: string;
    type: string;
    url: string;
  };
  sectionColor?: CustomThemeColorType;
};

const OtherSunVisors = ({
  heading,
  text,
  products = [],
  button,
  sectionColor = 'heavenlyWhite',
}: OtherSunVisorsType) => (
  <StyledWrapper id={richTextToSlug(heading)} {...{ sectionColor }}>
    <StyledContent>
      <StyledIntro>
        <FadeIn>
          <StyledHeading title={heading} type="section" />
        </FadeIn>
        <FadeIn>
          <StyledText text={text} />
        </FadeIn>
      </StyledIntro>
      <StyledProducts>
        {products?.map((product) => {
          const slides = product.images?.map(({ image }) => (
            <StyledImage key={image.altText} {...image} />
          ));

          return (
            <FadeIn asEl="li" key={product.heading}>
              <StyledProduct>
                <StyledImageSlider {...{ slides, variant: 'primary' }} />
                <Title title={product.heading} type="product-title" />
                <Text text={product.text} />
              </StyledProduct>
            </FadeIn>
          );
        })}
      </StyledProducts>
      <StyledButton text={button.label} link={button.url} type={button.type} />
    </StyledContent>
  </StyledWrapper>
);

export default OtherSunVisors;

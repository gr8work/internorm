import React from 'react';

import Title from 'components/atoms/Title';
import { WpImageType } from 'components/atoms/WpImage';

import {
  StyledCategory,
  StyledContent,
  StyledHeading,
  StyledImage,
  StyledText,
  StyledWrapper,
} from './ProductCard.styles';
import ArrowMore from 'components/atoms/ArrowMore';

export type ProductCardType = {
  title: string;
  text: string;
  subTitle: string;
  link: { target: string; url: string };
  image: WpImageType;
  variant?: 'primary' | 'secondary';
  heading?: string;
};

const ProductCard = ({
  variant = 'primary',
  image,
  subTitle,
  title,
  text,
  link,
  heading,
}: ProductCardType) => (
  <StyledWrapper data-variant={variant}>
    <StyledImage {...image} />
    <StyledContent>
      {heading ? <StyledHeading>{heading}</StyledHeading> : null}
      <Title title={title} type="product-title" />
      <StyledCategory>{subTitle}</StyledCategory>
      <StyledText text={text} />
      <ArrowMore {...{ link }} />
    </StyledContent>
  </StyledWrapper>
);

export default ProductCard;

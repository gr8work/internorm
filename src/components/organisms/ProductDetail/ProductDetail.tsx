import React, { useState } from 'react';

import { ButtonType } from 'components/atoms/Button';
import Text from 'components/atoms/Text';
import Icon from 'components/atoms/Icon';
import { WpImageType } from 'components/atoms/WpImage';

import uwStatIcon from 'assets/icons/uw-stat.svg';
import dbStatIcon from 'assets/icons/db-stat.svg';
import rcStatIcon from 'assets/icons/rc-stat.svg';

import { CustomThemeColorType } from 'theme/styled';

import {
  StyledBadge,
  StyledBadges,
  StyledButton,
  StyledCategoriesListScroll,
  StyledCategory,
  StyledContent,
  StyledPreview,
  StyledPreviewImage,
  StyledReactTooltip,
  StyledSlider,
  StyledStat,
  StyledStats,
  StyledStatText,
  StyledTitle,
  StyledWrapper,
} from './ProductDetail.styles';
import FadeIn from 'components/atoms/FadeIn';

export type ProductDetailType = {
  title: string;
  text: string;
  stats: {
    icon: string;
    text: string;
    hiddenText?: string;
  }[];
  badges: {
    image: WpImageType;
  }[];
  button: ButtonType;
  hasStylisticLines: boolean | null;
  stylisticLines?: {
    color: CustomThemeColorType;
    category: string;
    images?: {
      image: WpImageType;
    }[];
  }[];
  images?: {
    image: WpImageType;
  }[];
};

const ProductDetail = ({
  stylisticLines,
  title,
  text,
  stats,
  badges,
  button,
  hasStylisticLines,
  images,
}: ProductDetailType) => {
  const [activeStylisticLine, setActiveStylisticLine] = useState(stylisticLines?.[0]);

  const whichImages =
    hasStylisticLines && activeStylisticLine?.images ? activeStylisticLine.images : images;

  const slides = whichImages?.map(({ image }) => (
    <StyledPreview key={image.altText}>
      <StyledPreviewImage {...image} objectFit="contain" />
    </StyledPreview>
  ));

  type IconsType = {
    [x: string]: string;
  };

  const icons: IconsType = {
    'uw-stat': uwStatIcon,
    'db-stat': dbStatIcon,
    'rc-stat': rcStatIcon,
  };

  return (
    <StyledWrapper>
      {hasStylisticLines ? (
        <StyledCategoriesListScroll component="ul">
          {stylisticLines?.map((line) => (
            <li key={line.category}>
              <StyledCategory
                type="button"
                isSelected={activeStylisticLine?.category === line.category}
                activeColor={line.color}
                onClick={() => setActiveStylisticLine(line)}
              >
                {line.category}
              </StyledCategory>
            </li>
          ))}
        </StyledCategoriesListScroll>
      ) : null}
      <StyledSlider
        {...{
          slides: slides ?? [],
          variant: 'primary',
          objectFit: 'contain',
          options: { spaceBetween: 30 },
        }}
      />
      <StyledContent>
        <FadeIn>
          <StyledTitle {...{ title, type: 'product-title' }} />
        </FadeIn>
        <FadeIn>
          <Text {...{ text }} />
        </FadeIn>
        <StyledReactTooltip type="light" effect="solid" />
        <FadeIn>
          <StyledStats role="list">
            {stats.map((stat) => (
              <StyledStat key={stat.text} data-tip={stat?.hiddenText ?? ''}>
                <Icon src={icons[stat.icon]} />
                <StyledStatText>{stat.text}</StyledStatText>
              </StyledStat>
            ))}
          </StyledStats>
        </FadeIn>
        <FadeIn>
          {badges?.length ? (
            <StyledBadges role="list">
              {badges.map(({ image }) => (
                <li key={image?.altText}>
                  <StyledBadge {...image} {...{ objectFit: 'contain' }} />
                </li>
              ))}
            </StyledBadges>
          ) : null}
        </FadeIn>
        <FadeIn>
          <StyledButton {...{ text: button.label, link: button.link, type: button.type }} />
        </FadeIn>
      </StyledContent>
    </StyledWrapper>
  );
};

export default ProductDetail;

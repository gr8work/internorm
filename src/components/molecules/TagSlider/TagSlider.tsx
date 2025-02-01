import React from 'react';
import styled, { css } from 'styled-components';
import Slider, { SliderType } from 'components/molecules/Slider';
import Text from 'components/atoms/Text';
import { breakpointsObject } from 'theme/breakpoints';
import { media } from 'theme/media';

const StyledSliderWrapper = styled(Slider)<{ navigationType: SliderType['navigationType'] }>`
  width: 100%;
  height: 138px;
  display: grid;
  border-radius: 50px;
  place-content: center;
  background-color: ${({ theme }) => theme.colors.white};

  .swiper-wrapper {
    align-items: center;
    margin-inline: auto;
    width: 100%;
    height: 100%;

    ${media.up('md')} {
      width: 90%;
    }

    ${media.up('lg')} {
      width: 80%;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
    }
  }

  ${({ navigationType }) =>
    navigationType &&
    navigationType === 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.colors.billowyClouds};
    `}
`;

const StyledTag = styled(Text)<{ width?: string }>`
  font-size: 13px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.grayBar};
  font-weight: 400;
  margin-inline: auto;
  text-align: center;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  strong {
    font-size: 16px;
  }
`;

type TagSliderProps = {
  tags: { text: string }[];
  type?: 'primary' | 'secondary';
  customTagWidth?: string;
  className?: string;
};

const TagSlider = ({ type = 'primary', tags, customTagWidth, className }: TagSliderProps) => {
  const sliderPrimaryOptions: SliderType['options'] = {
    slidesPerView: 2,
    autoplay: { delay: 4000 },
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    breakpoints: {
      [breakpointsObject.xs]: {
        slidesPerView: 2,
        centeredSlides: true,
      },
      [breakpointsObject.sm]: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      [breakpointsObject.md]: {
        slidesPerView: 4,
        centeredSlides: false,
      },
      [breakpointsObject.lg]: {
        slidesPerView: 3,
        centeredSlides: false,
      },
      [breakpointsObject.xl]: {
        slidesPerView: 5,
        centeredSlides: false,
      },
    },
  };

  const sliderSecondaryOptions: SliderType['options'] = {
    slidesPerView: 1.5,
    autoplay: { delay: 4000 },
    centeredSlides: true,
    loop: true,
    breakpoints: {
      [breakpointsObject.xs]: {
        centeredSlides: true,
        slidesPerView: 3,
      },
      [breakpointsObject.sm]: {
        centeredSlides: false,
        slidesPerView: 4,
      },
      [breakpointsObject.md]: {
        slidesPerView: 4,
      },
      [breakpointsObject.lg]: {
        slidesPerView: 3,
      },
      [breakpointsObject.xxl]: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <StyledSliderWrapper
      variant="tertiary"
      className={className}
      navigationType={type}
      options={type === 'primary' ? sliderPrimaryOptions : sliderSecondaryOptions}
      slides={tags.map(({ text }) => (
        <StyledTag key={text} {...{ text, width: customTagWidth }} />
      ))}
    />
  );
};

export default TagSlider;

import React, { useState } from 'react';

import ChooseModels, { ChooseModelsType, ChooseModelType } from 'components/organisms/ChooseModels';
import { ButtonType } from 'components/atoms/Button';
import { ViewVariantType } from 'components/organisms/SwitchCategoryViewMode';

import { sliderOptions } from './ProductLineView.constants';

import {
  StyledButton,
  StyledContent,
  StyledSlideBackground,
  StyledSlider,
  StyledText,
  StyledTitle,
  StyledWpImage,
  StyledWrapper,
} from './ProductLineView.styles';
import { breakpointsObject } from 'theme/breakpoints';
import { SliderType } from 'components/molecules/Slider';
import { richTextToSlug } from 'utils/richTextToSlug';

export type ProductLineViewType = {
  heading: string;
  text: string;
  chooseModels: ChooseModelsType;
  variant?: ProductLineVariantType;
  button?: ButtonType;
  category?: {
    name: string;
    tag: string;
  };
  viewVariant?: ViewVariantType;
};

export type ProductLineVariantType = 'passive-windows' | 'insulating-windows' | 'sliding-doors';

const passiveWindowsSliderOptions: SliderType['options'] = {
  spaceBetween: 0,
  slidesPerView: 2.5,
  breakpoints: {
    [breakpointsObject.sm]: {
      slidesPerView: 3,
    },
    [breakpointsObject.md]: {
      slidesPerView: 4,
    },
  },
};

const slidingDoorsSliderOptions: SliderType['options'] = {
  spaceBetween: 0,
  slidesPerView: 1,
};

const ProductLineView = ({
  variant,
  category,
  heading,
  text,
  button,
  chooseModels,
  viewVariant,
}: ProductLineViewType) => {
  const [selectedTag, setSelectedTag] = useState<ChooseModelType['tag'] | undefined>(
    chooseModels?.models?.[0]?.tag?.toLowerCase().trim() ?? undefined
  );

  const selectedImages = chooseModels?.models?.find(
    ({ tag }) => tag?.toLowerCase().trim() === selectedTag
  )?.previewImages;

  const slides = Array.isArray(selectedImages)
    ? selectedImages?.map(({ image }) => {
        if (!image) return null;

        return (
          <StyledSlideBackground key={image.altText}>
            <StyledWpImage {...image} />
          </StyledSlideBackground>
        );
      })
    : selectedImages?.[viewVariant ?? 'product']?.map(({ image }) => (
        <StyledSlideBackground key={image.altText}>
          <StyledWpImage {...image} />
        </StyledSlideBackground>
      ));

  return (
    <StyledWrapper
      data-variant={variant}
      id={category?.tag ? category.tag : richTextToSlug(heading)}
    >
      {slides ? <StyledSlider {...sliderOptions} {...{ slides, variant: 'primary' }} /> : null}
      <StyledContent>
        <StyledTitle title={heading} type="product-title" />
        <StyledText text={text} />
        {button?.label || button?.link ? (
          <StyledButton type="white" text={button.label} link={button.link} />
        ) : null}
        <ChooseModels
          {...chooseModels}
          {...{
            selectedTag,
            setSelectedTag,
            sliderOptions:
              variant === 'passive-windows'
                ? passiveWindowsSliderOptions
                : slidingDoorsSliderOptions,
          }}
        />
      </StyledContent>
    </StyledWrapper>
  );
};

export default ProductLineView;

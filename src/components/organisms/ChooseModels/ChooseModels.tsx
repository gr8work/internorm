import React from 'react';
import { ButtonType } from 'components/atoms/Button';

import {
  StyledChooseButton,
  StyledDescription,
  StyledModel,
  StyledModelImage,
  StyledMoreButton,
  StyledPriceText,
  StyledSlider,
  StyledSubTitle,
  StyledTitle,
  StyledWrapper,
} from './ChooseModels.styles';
import { WpImageType } from 'components/atoms/WpImage';
import { SliderType } from 'components/molecules/Slider';
import { breakpointsObject } from 'theme/breakpoints';
import { useBreakpoints } from 'hooks/useBreakpoints';

export type ChooseModelsType = {
  text?: string;
  models: ChooseModelType[];
  variant?: ChooseModelsVariantType;
  selectedTag?: string;
  setSelectedTag?: React.Dispatch<React.SetStateAction<string | undefined>>;
  sliderOptions?: SliderType['options'];
};

export type ChooseModelType = {
  title?: string;
  tag?: string;
  previewImages?:
    | {
        product?: {
          image: WpImageType;
        }[];
        architecture?: {
          image: WpImageType;
        }[];
      }
    | { image?: WpImageType }[];
  image?: WpImageType;
  description?: string;
  beforePriceText?: string;
  price?: {
    value?: string;
    currency?: string;
  };
  button?: ButtonType;
};

export type ChooseModelsVariantType = 'default' | 'category' | 'doors';

const categoryPageSliderOption: SliderType['options'] = {
  slidesPerView: 1.5,
  spaceBetween: 0,
  breakpoints: {
    [breakpointsObject.md]: {
      slidesPerView: 3.5,
    },
    [breakpointsObject.lg]: {
      slidesPerView: 5,
    },
  },
};

const ChooseModels = ({
  variant = 'default',
  text,
  models,
  selectedTag,
  setSelectedTag,
  sliderOptions,
}: ChooseModelsType) => {
  const { width } = useBreakpoints();

  return (
    <StyledWrapper {...{ variant }}>
      {text ? <StyledSubTitle subTitle={text} /> : null}

      <StyledSlider
        variant="secondaryLeft"
        options={sliderOptions || categoryPageSliderOption}
        slides={models?.map((model: ChooseModelType) => {
          const modelTag = model?.tag?.toLowerCase().trim();

          return (
            <StyledModel
              key={model.title}
              isSelected={selectedTag === modelTag}
              onClick={setSelectedTag ? () => setSelectedTag(modelTag) : undefined}
              tabIndex={-1}
            >
              {model.image && (variant === 'category' || variant === 'doors') ? (
                <StyledModelImage {...model.image} objectFit="contain" />
              ) : null}
              {modelTag ? (
                <StyledChooseButton
                  type="button"
                  isSelected={selectedTag === modelTag}
                  onClick={setSelectedTag ? () => setSelectedTag(modelTag) : undefined}
                >
                  <StyledTitle>{model.title}</StyledTitle>
                </StyledChooseButton>
              ) : null}
              {model.description ? (
                <StyledDescription>{model.description}</StyledDescription>
              ) : null}
              {model.price?.value ? (
                <StyledPriceText>
                  {model.beforePriceText ? model.beforePriceText : null}
                  <strong>
                    {model.price.value}
                    <sup>{model.price.currency}</sup>
                  </strong>
                </StyledPriceText>
              ) : null}
              {model.button?.label || model.button?.link ? (
                <StyledMoreButton
                  text={model.button.label}
                  type={variant === 'category' ? 'red' : 'white'}
                  link={model.button.link}
                  isSelected={
                    (variant === 'category' && width < 1240) ||
                    (variant === 'default' && width < 1240)
                      ? true
                      : selectedTag === modelTag
                  }
                />
              ) : null}
            </StyledModel>
          );
        })}
      />
    </StyledWrapper>
  );
};

export default ChooseModels;

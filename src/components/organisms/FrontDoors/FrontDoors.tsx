import React, { useState } from 'react';

import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';
import ChooseModels, { ChooseModelsType, ChooseModelType } from 'components/organisms/ChooseModels';

import {
  StyledContent,
  StyledModels,
  StyledSlideBackground,
  StyledSlider,
} from './FrontDoors.styles';
import WpImage from 'components/atoms/WpImage';
import FadeIn from 'components/atoms/FadeIn';
import { SliderType } from 'components/molecules/Slider';
import { breakpointsObject } from 'theme/breakpoints';
import { richTextToSlug } from 'utils/richTextToSlug';

export type FrontDoorsType = {
  title: string;
  text: string;
  chooseModels: ChooseModelsType;
  isCategorySectionReverse?: boolean;
};

const frontDoorsSliderOptions: SliderType['options'] = {
  spaceBetween: 0,
  slidesPerView: 1.5,
  breakpoints: {
    [breakpointsObject.md]: {
      slidesPerView: 3,
    },
  },
};

const FrontDoors = ({
  title,
  text,
  chooseModels,
  isCategorySectionReverse = false,
}: FrontDoorsType) => {
  const [selectedTag, setSelectedTag] = useState<ChooseModelType['tag'] | undefined>(
    chooseModels?.models?.[0]?.tag
  );

  const selectedImages =
    chooseModels?.models?.find(({ tag }) => tag === selectedTag)?.previewImages ?? [];

  const slides =
    Array.isArray(selectedImages) &&
    selectedImages?.map(({ image }) => {
      if (!image) return null;

      return (
        <StyledSlideBackground key={image.altText}>
          <WpImage {...image} />
        </StyledSlideBackground>
      );
    });

  return (
    <StyledContent id={richTextToSlug(title)} {...{ isCategorySectionReverse }}>
      <StyledModels>
        <FadeIn>
          <Title {...{ title, type: 'section' }} />
        </FadeIn>
        <FadeIn>
          <Text {...{ text }} />
        </FadeIn>
        <FadeIn>
          <ChooseModels
            {...chooseModels}
            {...{
              variant: 'doors',
              selectedTag,
              setSelectedTag,
              sliderOptions: frontDoorsSliderOptions,
            }}
          />
        </FadeIn>
      </StyledModels>
      {slides ? <StyledSlider {...{ slides, variant: 'primary' }} /> : null}
    </StyledContent>
  );
};

export default FrontDoors;

import React from 'react';
import {
  StyledContent,
  StyledImage,
  StyledIntro,
  StyledPreviewSlider,
  StyledText,
  StyledWrapper,
} from 'components/organisms/ProductAdvantages/ProductAdvantages.styles';
import {
  StyledButton,
  StyledList,
  StyledListWrapper,
  StyledTitle,
} from './SpecialOfferDescriptionSlider.styles';
import { CustomThemeColorType } from 'theme/styled';
import { ButtonType } from 'components/atoms/Button';
import WpImage, { WpImageType } from 'components/atoms/WpImage';
import RichText from 'components/atoms/RichText';
import FadeIn from 'components/atoms/FadeIn';

export type SpecialOfferDescriptionType = {
  heading: string;
  subHeading: string;
  titleList: string;
  text: string;
  previewImages: {
    image: WpImageType;
  }[];
  image: WpImageType;
  listItems: { text: string }[];
  button: ButtonType;
  sectionColor?: CustomThemeColorType;
};

const SpecialOfferDescriptionSlider = ({
  titleList,
  heading,
  previewImages,
  text,
  subHeading,
  image,
  listItems,
  sectionColor = 'white',
  button,
}: SpecialOfferDescriptionType) => {
  const previewImageSlides = previewImages?.map(({ image: sliderImage }) => (
    <StyledImage key={sliderImage?.altText} {...sliderImage} />
  ));

  return (
    <StyledWrapper {...{ sectionColor }}>
      <StyledIntro>
        <StyledContent>
          <FadeIn>
            <StyledTitle subTitle={subHeading} title={heading} type="section" />
          </FadeIn>
          <FadeIn>
            <StyledText text={text} />
          </FadeIn>
          <StyledButton text={button.label} link={button.link} />
        </StyledContent>
        <StyledPreviewSlider {...{ slides: previewImageSlides, variant: 'primary' }} />
        <StyledContent>
          <WpImage {...image} />
        </StyledContent>
        <StyledContent>
          <FadeIn>
            <StyledTitle title={titleList} type="section" />
          </FadeIn>
          <FadeIn>
            <StyledListWrapper>
              <StyledList>
                {listItems.map((item) => (
                  <li key={item.text}>
                    <RichText html={item.text} />
                  </li>
                ))}
              </StyledList>
            </StyledListWrapper>
          </FadeIn>
        </StyledContent>
      </StyledIntro>
    </StyledWrapper>
  );
};
export default SpecialOfferDescriptionSlider;

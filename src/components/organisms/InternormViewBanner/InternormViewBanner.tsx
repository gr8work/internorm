import React from 'react';

import { ButtonType } from 'components/atoms/Button';

import { WpImageType } from 'components/atoms/WpImage';

import {
  StyledButton,
  StyledContent,
  StyledFadeInList,
  StyledTitle,
  StyledWpImage,
  StyledWrapper,
} from './InternormViewBanner.styles';
import FadeIn from 'components/atoms/FadeIn';
import RichText from 'components/atoms/RichText';

export type InternormViewBannerType = {
  image: WpImageType;
  subTitle: string;
  button: ButtonType;
  heading: string;
  advantageList: {
    text: string;
  }[];
};

const InternormViewBanner = ({
  image,
  subTitle,
  button,
  advantageList,
  heading,
}: InternormViewBannerType) => (
  <StyledWrapper>
    <StyledWpImage {...image} />
    <StyledContent>
      <FadeIn>
        <StyledTitle {...{ subTitle, title: heading, type: 'product-title' }} />
      </FadeIn>
      <StyledFadeInList asEl="ul">
        {advantageList?.map((advantage) => (
          <li key={advantage.text}>
            <RichText html={advantage.text} />
          </li>
        ))}
      </StyledFadeInList>
      <FadeIn>
        <StyledButton {...{ text: button.label, link: button.link, type: 'red' }} />
      </FadeIn>
    </StyledContent>
  </StyledWrapper>
);

export default InternormViewBanner;

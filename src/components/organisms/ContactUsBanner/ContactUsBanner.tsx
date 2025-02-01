import React from 'react';

import { ButtonType } from 'components/atoms/Button';
import Title from 'components/atoms/Title';

import { WpImageType } from 'components/atoms/WpImage';

import {
  StyledButton,
  StyledContent,
  StyledText,
  StyledWpImage,
  StyledWrapper,
} from './ContactUsBanner.styles';
import FadeIn from 'components/atoms/FadeIn';

export type ContactUsBannerType = {
  image: WpImageType;
  subTitle: string;
  title: string;
  text: string;
  button: ButtonType;
  variant?: 'default' | 'inspirations';
};

const ContactUsBanner = ({
  image,
  subTitle,
  title,
  text,
  button,
  variant = 'default',
}: ContactUsBannerType) => (
  <StyledWrapper>
    <StyledWpImage {...image} />
    <StyledContent>
      <FadeIn>
        <Title {...{ subTitle, title, type: 'product-title' }} />
      </FadeIn>
      <FadeIn custom={{ transition: { delay: 0.2 } }}>
        <StyledText {...{ text }} />
      </FadeIn>
    </StyledContent>
    <FadeIn custom={{ transition: { delay: 0.4 } }}>
      <StyledButton
        data-variant={variant}
        {...{ text: button.label, link: button.link, type: 'red' }}
      />
    </FadeIn>
  </StyledWrapper>
);

export default ContactUsBanner;

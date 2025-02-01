import React from 'react';
import BlackBannerDescription from 'components/molecules/BlackBannerDescription';
import { StyledContainer, StyledWpImage, WrapperBannerBlack } from './styles';

import { IBlackBanner } from 'components/organisms/BlackBanner/interface';

export const BlackBanner = ({
  title,
  subTitle,
  text,
  button,
  image,
  typeTitle = 'white',
  typeText = 'vertical-slider-white',
  isWarrantyPage = false,
}: IBlackBanner) => (
  <StyledContainer isWarrantyPage={isWarrantyPage}>
    <WrapperBannerBlack>
      <StyledWpImage {...image} {...{ objectPosition: 'center top' }} />
      <BlackBannerDescription
        description={text}
        typeText={typeText}
        title={title}
        typeTitle={typeTitle}
        subTitle={subTitle}
        linkButton={button.link}
        textButton={button.label}
      />
    </WrapperBannerBlack>
  </StyledContainer>
);

import Breadcrumb from 'components/atoms/Breadcrumb';
import { ButtonType } from 'components/atoms/Button';
import { WpImageType } from 'components/atoms/WpImage';
import React from 'react';
import { PageContextType } from 'types';
import {
  StyledBar,
  StyledBarButton,
  StyledBarContainer,
  StyledBarHeading,
  StyledBenefitList,
  StyledContainer,
  StyledContent,
  StyledContentButton,
  StyledGradient,
  StyledHeading,
  StyledText,
  StyledWpImage,
  StyledWrapper,
} from './ZoneBanner.styles';

export type ZoneBannerType = {
  heading: string;
  text: string;
  image: WpImageType;
  button: ButtonType;
  bar: BarType;
};

type BarType = {
  heading: string;
  subTitle: string;
  button: ButtonType;
  benefitList: { benefit: string }[];
};

export type ZoneBannerProps = {
  pageContext: PageContextType;
  variant?: 'architect' | 'partner';
} & ZoneBannerType;

const ZoneBanner = ({
  variant = 'architect',
  image,
  heading,
  text,
  button,
  bar,
  pageContext,
}: ZoneBannerProps) => (
  <StyledWrapper>
    <StyledWpImage {...image} />
    <StyledGradient />
    <StyledContainer>
      <StyledContent data-variant={variant}>
        <Breadcrumb {...{ pageContext }} />
        <StyledHeading {...{ title: heading }} />
        <StyledText {...{ text }} />
        <StyledContentButton
          {...{ text: button.label, ariaLabel: button.ariaLabel, link: button.link }}
        />
      </StyledContent>
    </StyledContainer>
    <StyledBar data-variant={variant}>
      <StyledBarContainer>
        <StyledBarHeading {...{ subTitle: bar.subTitle, title: bar.heading }} />
        <StyledBenefitList>
          {bar.benefitList.map(({ benefit }) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </StyledBenefitList>
        <StyledBarButton
          {...{ text: bar.button.label, ariaLabel: bar.button.ariaLabel, link: bar.button.link }}
        />
      </StyledBarContainer>
    </StyledBar>
  </StyledWrapper>
);

export default ZoneBanner;

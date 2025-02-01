import { ButtonType } from 'components/atoms/Button';
import React from 'react';
import {
  StyledButton,
  StyledContent,
  StyledHeading,
  StyledText,
  StyledWrapper,
} from './DownloadBanner.styles';

export type DownloadBannerType = {
  heading: string;
  text: string;
  button: ButtonType;
};

const DownloadBanner = ({ heading, text, button }: DownloadBannerType) => (
  <StyledWrapper>
    <StyledContent>
      <StyledHeading>{heading}</StyledHeading>
      <StyledText>{text}</StyledText>
    </StyledContent>
    <StyledButton
      {...{ text: button.label, ariaLabel: button.ariaLabel, link: button.link, type: 'dark' }}
    />
  </StyledWrapper>
);

export default DownloadBanner;

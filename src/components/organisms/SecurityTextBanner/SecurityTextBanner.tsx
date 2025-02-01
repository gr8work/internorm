import React from 'react';
import {
  ListSecurityDescription,
  StyledButton,
  StyledSecuritySubTitle,
  StyledSecurityTitle,
  WrapperSecurityBanner,
  WrapperSecurityDescription,
} from './SecurityTextBanner.styles';

import Text from 'components/atoms/Text';
import WpImage, { WpImageType } from 'components/atoms/WpImage';
import FadeIn from 'components/atoms/FadeIn';
import TagSlider from 'components/molecules/TagSlider';
import { ButtonType } from 'components/atoms/Button';

export type SecurityTextBannerType = {
  title: string;
  description: string;
  subTitle?: string;
  image: WpImageType;
  listSecurity: { text: string }[];
  tags: { text: string }[];
  button: ButtonType;
};

const SecurityTextBanner = ({
  title,
  description,
  image,
  listSecurity,
  tags,
  subTitle,
  button,
}: SecurityTextBannerType) => (
  <WrapperSecurityBanner>
    <WrapperSecurityDescription>
      <FadeIn>
        <StyledSecurityTitle>{title}</StyledSecurityTitle>
      </FadeIn>
      <FadeIn>
        <Text type="default" text={description} />
      </FadeIn>
      <FadeIn>
        <ListSecurityDescription>
          {listSecurity.map(({ text }) => (
            <li key={text}>{text}</li>
          ))}
        </ListSecurityDescription>
      </FadeIn>
      {button?.label ? (
        <FadeIn>
          <StyledButton
            {...{ text: button.label, link: button.link, ariaLabel: button.ariaLabel }}
          />
        </FadeIn>
      ) : null}
      <FadeIn>
        <StyledSecuritySubTitle {...{ subTitle, type: 'section' }} />
        <TagSlider {...{ variant: 'secondary', tags, type: 'secondary' }} />
      </FadeIn>
    </WrapperSecurityDescription>
    <WpImage {...image} />
  </WrapperSecurityBanner>
);

export default SecurityTextBanner;

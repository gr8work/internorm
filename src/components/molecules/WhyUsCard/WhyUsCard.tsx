import React from 'react';

import Icon from 'components/atoms/Icon';

import qualityIcon from 'assets/icons/quality.svg';
import designIcon from 'assets/icons/design.svg';
import trustIcon from 'assets/icons/trust.svg';
import innovationIcon from 'assets/icons/innovation.svg';
import safetyIcon from 'assets/icons/safety.svg';
import statisticIcon from 'assets/icons/statistic.svg';
import premiumIcon from 'assets/icons/premium.svg';
import penIcon from 'assets/icons/pen.svg';

import { StyledBadge, StyledHeading, StyledText, StyledWrapper } from './WhyUsCard.styles';
import { WhyUsType } from 'components/organisms/WhyUs';

export type WhyUsCardType = {
  icon: WhyUsCardIconType;
  heading: string;
  text?: string;
  cardTitleVariant?: WhyUsType['cardTitleVariant'];
};

export type WhyUsCardIconType =
  | 'quality'
  | 'design'
  | 'trust'
  | 'innovation'
  | 'safety'
  | 'premium'
  | 'statistic'
  | 'pen';

type IconsMapType = {
  [icon in WhyUsCardType['icon']]: string;
};

const iconsMap: IconsMapType = {
  quality: qualityIcon,
  design: designIcon,
  trust: trustIcon,
  innovation: innovationIcon,
  safety: safetyIcon,
  premium: statisticIcon,
  statistic: premiumIcon,
  pen: penIcon,
};

const WhyUsCard = ({ icon, heading, text, cardTitleVariant }: WhyUsCardType) => (
  <StyledWrapper key={heading}>
    <StyledBadge>
      <Icon src={iconsMap[icon]} />
    </StyledBadge>
    <StyledHeading data-title={cardTitleVariant}>{heading}</StyledHeading>
    {text ? <StyledText>{text}</StyledText> : null}
  </StyledWrapper>
);

export default WhyUsCard;

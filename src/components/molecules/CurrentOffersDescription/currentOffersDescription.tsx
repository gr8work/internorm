import React from 'react';
import {
  StyledLinkWrap,
  StyledOfferText,
  StyledText,
  StyledTitle,
  WrapperActionPromo,
  WrapperDescriptionCurrentOffer,
} from './styles';

import ArrowIconRight from 'assets/icon-components/ArrowIconRight';
import { CurrentOfferType } from 'components/organisms/CurrentOffers/interface';
import LinkWrapContent from 'components/atoms/LinkWrappContent';

export const CurrentOffersDescription = ({
  title,
  text,
  textOffer,
  type = 'light',
  button,
}: CurrentOfferType['currentOffer']) => (
  <WrapperDescriptionCurrentOffer data-type={type}>
    <LinkWrapContent
      link={typeof button?.link !== 'string' && button.link?.url ? button.link.url : ''}
    >
      <StyledTitle {...{ title }} />
    </LinkWrapContent>
    <StyledText {...{ text }} />
    <WrapperActionPromo type={type}>
      {button?.label ? (
        <StyledLinkWrap
          url={typeof button?.link !== 'string' && button.link?.url ? button.link.url : ''}
        >
          {button?.label}
          <ArrowIconRight />
        </StyledLinkWrap>
      ) : null}
      <StyledOfferText>{textOffer}</StyledOfferText>
    </WrapperActionPromo>
  </WrapperDescriptionCurrentOffer>
);

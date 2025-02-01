import React, { FC } from 'react';
import { IOurProductBanner } from './interface';
import {
  StyledLinkWrap,
  WrapperActionProductBanner,
  WrapperContentTextOurProductsBanner,
  WrapperLinkAction,
} from './styles';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import ArrowIconRight from 'assets/icon-components/ArrowIconRight';

export const ContentLeftOurProductsBanner: FC<IOurProductBanner> = ({
  description,
  subTitle,
  title,
  contactButton,
  kindButton,
}) => (
  <WrapperContentTextOurProductsBanner>
    <Title type="dark" {...{ title, subTitle }} />
    <Text text={description} />
    <WrapperActionProductBanner>
      <Button type="white" {...{ text: kindButton.label, link: kindButton.link }} />
      <WrapperLinkAction>
        <p>lub</p>
        {contactButton?.label ? (
          <StyledLinkWrap
            url={
              typeof contactButton?.link !== 'string' && contactButton.link?.url
                ? contactButton.link.url
                : ''
            }
          >
            {contactButton?.label}
            <ArrowIconRight />
          </StyledLinkWrap>
        ) : null}
      </WrapperLinkAction>
    </WrapperActionProductBanner>
  </WrapperContentTextOurProductsBanner>
);

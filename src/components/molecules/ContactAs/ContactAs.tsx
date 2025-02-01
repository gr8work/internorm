import React from 'react';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import { ButtonType } from 'components/atoms/Button';
import { StyledButton, WrapperContactAs, WrapperContentPage } from './ContactAs.styles';
import { CustomThemeColorType } from 'theme/styled';

export type ContactAsType = {
  title: string;
  text: string;
  subTitle: string;
  button: ButtonType;
  backgroundColor?: CustomThemeColorType;
  className?: string;
};

const ContactAs = ({
  title,
  text,
  subTitle,
  button,
  backgroundColor = 'billowyClouds',
  className,
}: ContactAsType) => (
  <WrapperContentPage {...{ className }}>
    <WrapperContactAs {...{ backgroundColor }}>
      <Title {...{ title, subTitle }} type="product-title" />
      <Text {...{ text }} type="default" />
      <StyledButton {...{ text: button?.label, link: button?.link }} />
    </WrapperContactAs>
  </WrapperContentPage>
);
export default ContactAs;

import React from 'react';

import RichText from 'components/atoms/RichText';

import { IText } from './interface';

import { StyledWrapper } from './styles';

export const Text = ({ type = 'default', text, ...delegated }: IText) =>
  text ? (
    <StyledWrapper type={type} {...delegated}>
      <RichText html={text} />
    </StyledWrapper>
  ) : null;

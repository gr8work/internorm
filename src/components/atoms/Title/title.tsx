import React from 'react';

import RichText from 'components/atoms/RichText';

import { ITitle } from './interface';

import { StyledWrapper } from './styles';

const Title = ({ title, subTitle, type = 'default', ...delegated }: ITitle) =>
  title || subTitle ? (
    <StyledWrapper type={type} {...delegated}>
      {subTitle ? <p>{subTitle}</p> : null}
      {title ? <RichText html={title} /> : null}
    </StyledWrapper>
  ) : null;

export default Title;

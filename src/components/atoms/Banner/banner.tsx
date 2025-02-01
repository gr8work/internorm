import React, { FC } from 'react';
import { IBanner } from './interface';
import { Wrapper } from './styles';

export const Banner: FC<IBanner> = ({ background, children, type }) => (
  <Wrapper background={background} type={type}>
    {children}
  </Wrapper>
);

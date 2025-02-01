import React, { FC } from 'react';
import { ILabel } from './interface';
import { Wrapper } from './styles';

export const Label: FC<ILabel> = ({ type, typeText = 'normal', children }) => (
  <Wrapper type={type} typeText={typeText}>
    {children}
  </Wrapper>
);

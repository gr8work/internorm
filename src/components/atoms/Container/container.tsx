import React from 'react';
import { Wrapper } from './styles';
import { IContainer } from './interface';

export const Container = ({ asEl = 'div', children, ...delegated }: IContainer) => (
  <Wrapper as={asEl} {...delegated}>
    {children}
  </Wrapper>
);

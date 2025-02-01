import React from 'react';
import Link from 'components/atoms/Link';
import { IHeaderBar } from './interfaces';
import { Wrapper } from './styles';

export const HeaderBar = ({ items }: IHeaderBar) => (
  <Wrapper>
    <ul>
      {items.map(({ id, label, uri }) => (
        <Link key={id} to={uri} type="header-bar">
          {label}
        </Link>
      ))}
    </ul>
  </Wrapper>
);

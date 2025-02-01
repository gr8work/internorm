import React, { FC } from 'react';
import { ILink } from './interface';
import { Link as GatsbyLink } from 'gatsby';
import { CustomLink } from './styles';
import { generateLink } from 'utils/getFitWpLink';

export const Link: FC<ILink> = ({ to, type = 'default', target = '_self', children }) => {
  const href = generateLink(to);
  const isInternal = /^\/(?!\/)/.test(href);

  return isInternal ? (
    <CustomLink as={GatsbyLink} to={href} type={type}>
      {children}
    </CustomLink>
  ) : (
    <CustomLink href={href} target={target} type={type}>
      {children}
    </CustomLink>
  );
};

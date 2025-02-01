import React, { PropsWithoutRef } from 'react';
import type { GatsbyLinkProps } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';

export interface LinkProps {
  url: string;
  target?: string;
  queryString?: string;
  ariaLabel?: string;
  className?: string;
}

export type LinkType = {
  label: string;
} & LinkProps;

const LinkWrap = <T,>({
  url,
  target,
  queryString,
  ariaLabel,
  children,
  className,
  ...delegated
}: PropsWithoutRef<Omit<GatsbyLinkProps<T>, 'to'>> & LinkProps) => {
  const isInternal = /^\/(?!\/)/.test(url);
  const fullUrl = `${url}${queryString || ''}`;

  const commonProps = {
    className,
    'aria-label': ariaLabel,
    ...delegated,
  };

  return isInternal ? (
    <GatsbyLink {...commonProps} to={fullUrl}>
      {children}
    </GatsbyLink>
  ) : (
    <a {...commonProps} href={fullUrl} target={target} rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default LinkWrap;

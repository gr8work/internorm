import React, { FC } from 'react';
import { IButton } from './interface';
import { CustomLink, CustomButton } from './styles';
import { generateLink } from 'utils/getFitWpLink';

export const Button: FC<IButton> = ({
  type = 'red',
  text,
  link,
  ariaLabel,
  className,
  handleClick,
}) => {
  const isLinkObject = typeof link !== 'string';

  return link ? (
    <CustomLink
      boxtype={type}
      url={isLinkObject ? generateLink(link.url) : generateLink(link)}
      target={isLinkObject ? link.target : ''}
      className={className}
      aria-label={ariaLabel}
    >
      {text}
    </CustomLink>
  ) : (
    <CustomButton
      boxtype={type}
      className={className}
      aria-label={ariaLabel}
      onClick={() => (handleClick ? handleClick() : null)}
    >
      {text}
    </CustomButton>
  );
};

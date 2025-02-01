import React from 'react';
import styled from 'styled-components';

import { getFitWpUrl } from 'utils/getFitWpLink';
import ArrowIconRight from 'assets/icon-components/ArrowIconRight';
import LinkWrap from 'components/atoms/LinkWrap';

const StyledLinkWrap = styled(LinkWrap)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grayBar};
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.redLink};
  }

  & svg {
    display: block;
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }
`;

const ArrowMore = ({
  link,
  label = 'WIĘCEJ',
  className,
}: {
  link?: { url?: string; target?: string } | string;
  label?: string;
  className?: string;
}) => {
  const url = getFitWpUrl(link);
  const target = typeof link !== 'string' ? link?.target : '';

  return (
    <StyledLinkWrap {...{ url, className, target }}>
      {label}
      <ArrowIconRight />
    </StyledLinkWrap>
  );
};

export default ArrowMore;

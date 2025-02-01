import React, { useState } from 'react';
import {
  CopyrightDesign,
  CopyrightMainLinks,
  CopyrightText,
  StylesLink,
  WrapCopyright,
} from './styles';
import OrgLogo from './OrgLogo';
import Link from 'components/atoms/Link';
import { LinkProps } from 'components/atoms/LinkWrap';

export type CopyrightFooterProps = {
  list: {
    text: string;
    link: LinkProps;
  }[];
  copyrightText: string;
};

export const CopyrightElement = ({ list, copyrightText }: CopyrightFooterProps) => {
  const [isHovered, setHovered] = useState(false);
  const currentYear = new Date().getFullYear();
  return (
    <WrapCopyright>
      <CopyrightMainLinks>
        {list.map((item, index) => (
          <StylesLink type="copyright-link-text" key={index} to={item.link?.url}>
            {item.text}
          </StylesLink>
        ))}
      </CopyrightMainLinks>
      <CopyrightText>
        <p>
          © {currentYear} {copyrightText}
        </p>
      </CopyrightText>
      <CopyrightDesign onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <p>Design: </p>
        <Link to="https://oryginalni.studio/" target="_blank">
          <OrgLogo active={isHovered} />
        </Link>
      </CopyrightDesign>
    </WrapCopyright>
  );
};

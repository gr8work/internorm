import React from 'react';
import { INavBar } from './interface';
import {
  Wrapper,
  RightSide,
  StyledSendButton,
  StyledLocationLink,
  StyledLocationIcon,
} from './styles';
import { useFlatListToHierarchical } from 'hooks/useFlatListToHierarchical';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import List from 'components/molecules/List';

export const NavBar = ({
  links,
  src,
  alt,
  to,
  active,
  activeScroll,
  children,
  handleClick,
}: React.PropsWithChildren<INavBar>) => (
  <Wrapper active={active} activeScroll={activeScroll}>
    <Link to={to}>
      <Image src={src} alt={alt} type="navbar" />
    </Link>
    <RightSide active={active} activeScroll={activeScroll}>
      <List
        type="links-navbar"
        className="navbar-links"
        items={useFlatListToHierarchical(links, true)}
        handleClick={() => handleClick()}
      />
      <StyledSendButton
        {...{ active, activeScroll }}
        link="#formularz-kontaktowy"
        type="grey"
        text="Wyślij zapytanie"
      />
      <StyledLocationLink href="/o-nas/okna-warszawa" {...{ active, activeScroll }}>
        <StyledLocationIcon />
        <p>
          Znajdź oddział
          <br />
          Internorm
        </p>
      </StyledLocationLink>
      {children}
    </RightSide>
  </Wrapper>
);

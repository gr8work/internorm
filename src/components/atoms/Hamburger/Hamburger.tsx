import React from 'react';

import VisuallyHidden from 'components/atoms/VisuallyHidden';

import { StyledBar, StyledHamburger } from './Hamburger.styles';

export type HamburgerType = {
  isOpen: boolean;
  toggleIsOpen: () => void;
  className?: string;
};

const Hamburger = ({ isOpen, toggleIsOpen, className, ...delegated }: HamburgerType) => (
  <StyledHamburger
    {...delegated}
    className={className}
    onClick={toggleIsOpen}
    aria-expanded={isOpen}
    aria-controls="primary-navigation"
    aria-pressed={isOpen}
  >
    <StyledBar />
    <VisuallyHidden>Menu</VisuallyHidden>
  </StyledHamburger>
);

export default Hamburger;

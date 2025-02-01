import styled from 'styled-components';
import { media } from 'theme/media';
import ProductSwitchIcon from 'assets/icon-components/ProductSwitchIcon';
import ArchitectureSwitchIcon from 'assets/icon-components/ArchitectureSwitchIcon';

export const StyledProductSwitchIcon = styled(ProductSwitchIcon)`
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.3s cubic-bezier(0.94, -0.31, 0.14, 1.24);
`;

export const StyledArchitectureSwitchIcon = styled(ArchitectureSwitchIcon)`
  color: ${({ theme }) => theme.colors.grayBar};
  transition: color 0.3s cubic-bezier(0.94, -0.31, 0.14, 1.24);
`;

export const StyledSwitch = styled.button`
  --inside-gap: 16px;
  --circle-size: 43px;

  border: 1.5px solid ${({ theme }) => theme.colors.white};
  padding: 5px;
  /* height: max-content;
  width: fit-content; */
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 28px;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  gap: var(--inside-gap);
  position: relative;
  cursor: pointer;
  grid-area: switch;

  ${media.up('lg')} {
    flex-direction: row;
  }

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.colors.redLink};
    width: var(--circle-size);
    aspect-ratio: 1;
    position: absolute;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.darkRed};
    filter: drop-shadow(2px 2px 6px rgba(237, 28, 35, 0.42));
    transition: transform 0.3s cubic-bezier(0.94, -0.31, 0.14, 1.24);
  }

  &[aria-pressed='true'] {
    &::before {
      transform: translateY(calc(100% + var(--inside-gap)));

      ${media.up('lg')} {
        transform: translateX(calc(100% + var(--inside-gap)));
      }
    }

    ${StyledArchitectureSwitchIcon} {
      color: ${({ theme }) => theme.colors.white};
    }

    ${StyledProductSwitchIcon} {
      color: ${({ theme }) => theme.colors.grayBar};
    }
  }
`;

export const StyledIconWrapper = styled.div`
  padding: 10px;
  width: var(--circle-size);
  aspect-ratio: 1;
  border-radius: 100vmax;
  height: 40px;
  position: relative;
  display: grid;
  place-items: center;
`;

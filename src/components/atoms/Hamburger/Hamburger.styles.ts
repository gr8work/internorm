import styled from 'styled-components';

export const StyledBar = styled.span`
  display: block;
  width: var(--bar-width);
  height: var(--bar-height);
  background-color: var(--bar-color);
  transition: background-color 0.3s ease-in-out;

  &::after,
  &::before {
    position: absolute;
    left: 10px;
    width: var(--bar-width);
    height: var(--bar-height);
    content: '';
    background-color: var(--bar-color);
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  &::after {
    top: var(--hamburger-padding);
  }

  &::before {
    bottom: var(--hamburger-padding);
  }
`;

export const StyledHamburger = styled.button`
  --hamburger-clickable-size: 50px;
  --hamburger-padding: 10px;
  --bar-width: calc(var(--hamburger-clickable-size) - 2 * var(--hamburger-padding));
  --bar-height: 2px;

  &[data-color='dark'] {
    --bar-color: ${({ theme }) => theme.colors.grayBar};
    --hover-color: ${({ theme }) => theme.colors.alabaster};
  }

  &[data-color='light'] {
    --bar-color: ${({ theme }) => theme.colors.white};
    --hover-color: ${({ theme }) => theme.colors.gray};
  }

  &[aria-pressed='true'] {
    ${StyledBar} {
      background-color: transparent;

      &::after {
        transform: translateY(8px) rotate(45deg);
      }

      &::before {
        transform: translateY(-10px) rotate(-45deg);
      }
    }
  }

  position: relative;
  width: var(--hamburger-clickable-size);
  height: calc(var(--hamburger-clickable-size) - 10px);
  padding: var(--hamburger-padding);
  border-radius: var(--border-radius);
  border: 0;
  background-color: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--hover-color);
  }
`;

import styled, { css } from 'styled-components';
import { TypeOfImageStyle } from './interface';

export const Wrapper = styled.div<TypeOfImageStyle>`
  width: 100%;
  overflow: hidden;
  position: relative;
  ${({ type }) => {
    switch (type) {
      case 'current-offers':
        return css`
          min-height: 319px;
        `;
      case 'guide-post':
        return css`
          min-height: 189px;
        `;
      case 'realizations':
        return css`
          min-height: 485px;
        `;
      default:
        return css`
          min-height: 400px;
        `;
    }
  }}
`;

export const WrapperImage = styled.div<TypeOfImageStyle>`
  --x: 0;
  --y: 0;

  height: 100%;
  left: 0%;
  overflow: hidden;
  position: absolute;
  top: 0%;
  width: 100%;
  mask-image: radial-gradient(#fff, #000);
  img {
    height: 110%;
    left: -5%;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: -5%;
    transition: opacity var(--base-duration) var(--base-ease),
      transform var(--base-duration) var(--base-ease);
    transform: translateX(var(--x)) translateY(var(--y)) !important;
    transition: all 0.4s !important;
    user-select: none !important;
    width: 110%;
  }

  ${({ type }) => {
    switch (type) {
      case 'current-offers':
        return css`
          border-radius: 10px 10px 0 0;
        `;
      case 'realizations':
        return css`
          border-radius: 0;
        `;
      default:
        return css`
          border-radius: 10px;
        `;
    }
  }}
`;

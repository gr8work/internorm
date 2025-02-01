import { SliderType } from 'components/molecules/Slider';
import styled, { css } from 'styled-components';

export const StyledArrowRight = styled.button<{ type?: SliderType['navigationType'] }>`
  width: 40px;
  height: 40px;
  position: absolute;
  right: -1px;
  top: 50%;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.redLink};
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  height: 138px;
  display: block;
  width: 64px;
  height: 100%;
  border-radius: 0 50px 50px 0;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.grayBar};
  }

  ${({ type }) =>
    type === 'primary' &&
    css`
      background: rgb(245, 240, 233);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.9) 15%,
        rgba(255, 255, 255, 1) 100%
      );
    `}

  ${({ type }) =>
    type === 'secondary' &&
    css`
      background: rgb(245, 240, 233);
      background: linear-gradient(
        90deg,
        rgba(245, 240, 233, 0.4) 0%,
        rgba(245, 240, 233, 0.9) 15%,
        rgba(245, 240, 233, 1) 100%
      );
    `}
`;

export const StyledArrowLeft = styled(StyledArrowRight)`
  left: -1px;
  transform: translateY(-50%) rotate(180deg);
`;

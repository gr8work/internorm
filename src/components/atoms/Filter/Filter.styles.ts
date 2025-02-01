import styled, { css } from 'styled-components';

export const ButtonFilterItem = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  font-size: 14px;
  line-height: 19px;
  background-color: ${({ theme }) => theme.colors.heavenlyWhite};
  border-radius: 13px;
  padding: 2px 12px;
  width: fit-content;
  border: 1px solid transparent;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.heavenlyWhite};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.heavenlyWhite};
    `}
`;

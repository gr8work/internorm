import ArrowDownIcon from './ArrowDownIcon';
import styled, { css } from 'styled-components';

export const StyledContent = styled.div`
  display: grid;
  max-height: 0;
  overflow: hidden;
`;

export const StyledArrowDownIcon = styled(ArrowDownIcon)``;

export const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 2;
  padding: 25px 25px 25px 0;
  cursor: pointer;

  &:hover {
    ${StyledArrowDownIcon} {
      color: ${({ theme }) => theme.colors.redLink};
    }
  }
`;
export const Wrapper = styled.section<{ isCollapsed: boolean }>`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      ${StyledContent} {
        height: auto;
        max-height: max-content;
        padding-bottom: 2em;
        line-height: 1.5;
      }

      ${StyledArrowDownIcon} {
        transform: rotateX(-180deg);
      }
    `}
`;

import styled, { css } from 'styled-components';

import { media } from 'theme/media';

import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import Image from 'components/atoms/Image';

export const StyledSystemList = styled.ul<{ items?: number }>`
  list-style-type: none;
  display: grid;
  align-content: start;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-left: 20px;
`;

export const StyledSubTitle = styled(Title)`
  p {
    font-weight: 700;
  }
`;

export const StyledTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.gray};
  transition: color 0.3s ease-in-out;
`;

export const StyledDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
  transition: color 0.3s ease-in-out;
`;

export const StyledMoreButton = styled(Button)<{ isSelected: boolean }>`
  visibility: hidden;
  width: max-content;
  flex-shrink: 0;
  margin-bottom: 40px;
  transition: all 0.3s ease-in-out;
  opacity: 0;

  ${media.up('lg')} {
    margin-block: auto;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const StyledSystemButton = styled.button<{ isSelected: boolean }>`
  border: 0;
  text-align: left;
  cursor: pointer;
  background-color: transparent;
  height: fit-content;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -21.5px;
    height: 100%;
    border-left: 2px solid ${({ theme }) => theme.colors.redLink};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
`;

export const StyledSystemContent = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

export const StyledSystemImage = styled(Image)`
  height: 200px;
  min-width: 255px;
  padding-right: 30px;
`;

export const StyledSystem = styled.div<{ isSelected: boolean }>`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 20px;
  border: none;
  background-color: transparent;
  text-align: left;
  cursor: pointer;

  ${media.up('lg')} {
    flex-direction: row;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      ${StyledTitle}, ${StyledDescription} {
        color: ${({ theme }) => theme.colors.grayBar};
      }

      ${StyledDescription} {
        font-weight: 700;
      }

      ${StyledSystemButton}::after {
        opacity: 1;
      }
    `}

  &:hover {
    ${StyledSystemButton}::after {
      opacity: 1;
    }

    ${StyledTitle},${StyledDescription} {
      color: ${({ theme }) => theme.colors.grayBar};
    }
  }
`;

export const StyledWrapper = styled.div`
  display: grid;
  align-content: start;
  gap: 30px;
  width: 100%;

  ${media.up('lg')} {
    gap: 40px;
  }
`;

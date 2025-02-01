import styled, { css } from 'styled-components';

import { media } from 'theme/media';
import { CategoryViewWrapperStyle } from './SwitchCategoryViewMode';

type AreaType = {
  area: string;
};

export const StyledWrapper = styled.section<CategoryViewWrapperStyle>`
  padding: 55px ${({ theme }) => theme.gap.side} 65px;

  ${({ backgroundColor }) => {
    switch (backgroundColor) {
      case 'white':
        return css`
          background-color: ${({ theme }) => theme.colors.white};
        `;
      case 'alabaster':
        return css`
          background-color: ${({ theme }) => theme.colors.alabaster};
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.billowyClouds};
        `;
    }
  }}
`;

export const StyledTitle = styled.h2`
  font-size: 13px;
  letter-spacing: 2px;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.colors.grayBar};
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  margin-bottom: 44px;
  text-transform: uppercase;

  ${media.up('lg')} {
    margin-bottom: 32px;
  }
`;

export const StyledSwitchWrapper = styled.div`
  display: grid;
  place-content: start;
  grid-template-areas:
    'switch type-0 text-0'
    'switch type-1 text-1';
  gap: 15px;
  grid-template-rows: repeat(2, 1fr);
  place-content: center;
  align-items: center;

  ${media.up('lg')} {
    grid-template-areas:
      'type-0 switch type-1'
      'text-0 switch text-1';
    justify-items: center;
    gap: 5px 25px;
  }
`;

export const StyledType = styled.h3<AreaType>`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.grayBar};
  font-weight: 700;
  font-family: ${({ theme }) => theme.secondFont};
  line-height: 26px;
  grid-area: ${({ area }) => area};
`;

export const StyledText = styled.p<AreaType>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0.8px;
  grid-area: ${({ area }) => area};

  ${media.up('lg')} {
    max-width: 216px;
    text-align: center;
  }
`;

import styled, { css } from 'styled-components';
import { BackgroundTextTitlePropStyle } from 'components/molecules/CenterTitleText';
import { media } from 'theme/media';

export const CenterTitleTextWrapper = styled.section<BackgroundTextTitlePropStyle>`
  padding: 30px;
  text-align: center;

  h3 {
    font-weight: 700;
  }

  ${media.up('lg')} {
    padding: 70px;
  }

  ${({ type }) => {
    switch (type) {
      case 'billowyClouds':
        return css`
          background-color: ${({ theme }) => theme.colors.billowyClouds};
        `;
      case 'alabaster':
        return css`
          background-color: ${({ theme }) => theme.colors.alabaster};
        `;
      case 'lighter-small':
        return css`
          h3 {
            font-weight: 300;
          }

          p {
            font-size: 16px;
            max-width: 550px;
            margin: auto;
          }
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.white};
        `;
    }
  }}
`;

export const WrapperContent = styled.div`
  max-width: 820px;
  margin: auto;

  p {
    margin-top: 40px;
    letter-spacing: 0.8px;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.grayBar};
    font-family: ${({ theme }) => theme.font};
  }
`;

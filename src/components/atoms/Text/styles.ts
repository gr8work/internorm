import styled, { css } from 'styled-components';
import { ITextWrapper } from './interface';

export const StyledWrapper = styled.div<ITextWrapper>`
  ${({ type }) => {
    switch (type) {
      case 'form-text':
        return css`
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0.5px;
          font-weight: 300;
          color: ${({ theme }) => theme.colors.grayBar};
        `;
      case 'slider-text':
        return css`
          font-size: 14px;
          line-height: 28px;
          letter-spacing: 0.7px;
          font-weight: 300;
          color: ${({ theme }) => theme.colors.grayBar};
        `;
      case 'contact-us-text':
        return css`
          font-size: 14px;
          line-height: 32px;
          letter-spacing: 1.4px;
          font-weight: 300;
          color: ${({ theme }) => theme.colors.grayBar};
        `;
      case 'red-file':
        return css`
          font-size: 12px;
          line-height: 27px;
          letter-spacing: 0px;
          font-weight: 300;
          color: ${({ theme }) => theme.colors.redLink};
        `;
      case 'red-data':
        return css`
          font-size: 13px;
          line-height: 18px;
          letter-spacing: 2.6px;
          font-weight: 700;
          color: ${({ theme }) => theme.colors.redLink};
        `;
      case 'gray-data':
        return css`
          font-size: 13px;
          line-height: 18px;
          letter-spacing: 2.6px;
          font-weight: 700;
          color: ${({ theme }) => theme.colors.gray};
        `;
      case 'white':
        return css`
          font-size: 14px;
          line-height: 26px;
          letter-spacing: 1px;
          font-weight: 300;
          color: ${({ theme }) => theme.colors.billowyClouds};
        `;
      case 'vertical-slider-white':
        return css`
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 0.5px;
          font-weight: 300;
          color: ${({ theme }) => theme.colors.billowyClouds};
        `;
      case 'vertical-slider-dark':
        return css`
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 0.5px;
          font-weight: 300;
          color: ${({ theme }) => theme.colors.grayBar};
        `;
      case 'white-big':
        return css`
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 1px;
          font-weight: 300;
          color: ${({ theme }) => theme.colors.billowyClouds};
        `;
      case 'swiper-icons':
        return css`
          text-transform: uppercase;
          max-width: 160px;
          text-align: center;
          font-size: 13px;
          line-height: 18px;
          letter-spacing: 2px;
          font-weight: 400;
          color: ${({ theme }) => theme.colors.billowyClouds};
        `;
      case 'red-title':
        return css`
          & * {
            text-transform: uppercase;
            text-align: center;
            font-size: 18px;
            line-height: 28px;
            letter-spacing: 2px;
            font-weight: 400;
            color: ${({ theme }) => theme.colors.pink};
          }
        `;
      case 'dark-title':
        return css`
          & * {
            text-transform: uppercase;
            text-align: center;
            font-size: 18px;
            line-height: 28px;
            letter-spacing: 2px;
            font-weight: 400;
            color: ${({ theme }) => theme.colors.grayBar};
          }
        `;
      default:
        return css`
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 0.5px;
          font-weight: 300;
          color: ${({ theme }) => theme.colors.grayBar};

          strong {
            font-weight: 700;
          }
        `;
    }
  }}
`;

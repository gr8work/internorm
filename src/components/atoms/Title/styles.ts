import styled, { css } from 'styled-components';
import { media } from 'theme/media';
import { ITitleWrapper } from './interface';

export const StyledWrapper = styled.div<ITitleWrapper>`
  display: flex;
  flex-direction: column;

  p {
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    line-height: 18px;
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }

  ${({ type }) => {
    switch (type) {
      case 'dark':
        return css`
          gap: 10px;

          p {
            color: ${({ theme }) => theme.colors.grayBar};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${({ theme }) => theme.colors.grayBar};
          }

          ${media.up('lg')} {
            gap: 17px;
          }
        `;
      case 'red-opacity':
        return css`
          gap: 10px;

          p {
            color: ${({ theme }) => theme.colors.pink};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-size: 30px;
            line-height: 1.2;
            color: ${({ theme }) => theme.colors.billowyClouds};

            ${media.up('lg')} {
              font-size: 40px;
            }
          }

          ${media.up('lg')} {
            gap: 20px;
          }
        `;
      case 'card-pink':
        return css`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            text-transform: uppercase;
            text-align: center;
            font-size: 18px;
            line-height: 28px;
            letter-spacing: 2px;
            font-weight: 400;
            color: ${({ theme }) => theme.colors.pink};
          }
        `;
      case 'white':
        return css`
          gap: 10px;

          p {
            color: ${({ theme }) => theme.colors.pink};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${({ theme }) => theme.colors.white};
          }

          ${media.up('lg')} {
            gap: 20px;
          }
        `;
      case 'section':
        return css`
          gap: 5px;

          p {
            color: ${({ theme }) => theme.colors.redLink};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${({ theme }) => theme.colors.grayBar};
            font-size: 30px;
            line-height: 1.2;

            ${media.up('lg')} {
              font-size: 40px;
            }
          }
        `;
      case 'newsletter-post':
        return css`
          gap: 20px;

          p {
            color: ${({ theme }) => theme.colors.redLink};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${({ theme }) => theme.colors.grayBar};
            font-size: 30px;
            line-height: 1.2;
          }
        `;
      case 'product-title':
        return css`
          gap: 5px;

          p {
            color: ${({ theme }) => theme.colors.redLink};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${({ theme }) => theme.colors.grayBar};
            font-size: 30px;
            line-height: 1.2;
          }
        `;
      case 'project-item':
        return css`
          gap: 5px;

          p {
            color: ${({ theme }) => theme.colors.redLink};
            font-size: 13px;
            font-weight: 700;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${({ theme }) => theme.colors.grayBar};
            font-size: 22px;
            line-height: 1.2;
          }
        `;
      case 'realizations':
        return css`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${({ theme }) => theme.colors.grayBar};
            font-size: 20px;
            line-height: 1.2;

            ${media.up('lg')} {
              font-size: 30px;
            }
          }
        `;
      case 'intro':
        return css`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${({ theme }) => theme.colors.grayBar};
            font-size: 40px;
            line-height: 1.2;

            ${media.up('lg')} {
              font-size: 46px;
            }
          }
        `;
      case 'homepage-banner':
        return css`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${({ theme }) => theme.colors.white};
            font-size: 40px;
            line-height: 1.2;

            ${media.up('lg')} {
              font-size: 56px;
            }
          }
        `;
      default:
        return css`
          gap: 5px;

          p {
            color: ${({ theme }) => theme.colors.redLink};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${({ theme }) => theme.colors.grayBar};
          }
        `;
    }
  }}
`;

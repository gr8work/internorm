import styled, { css } from 'styled-components';
import { media } from 'theme/media';
import { IImageWrapper } from './interface';

const Wrapper = styled.div<IImageWrapper>`
  ${({ type }) => {
    switch (type) {
      case 'our-products-banner':
        return css`
          img {
            max-height: 952px;

            ${media.down('lg')} {
              width: 100%;
            }
          }

          ${media.up('lg')} {
            margin-top: 0;
            margin-bottom: 0;
          }
        `;
      case 'contact-form':
        return css`
          width: 100%;
          text-align: center;

          ${media.up('lg')} {
            position: absolute;
            bottom: 0;
          }
        `;
      case 'navbar':
        return css`
          width: 145px;
          height: auto;
        `;
      case 'footer-banner':
        return css`
          position: absolute;
          top: -30px;
          right: -28px;
          box-shadow: 40px 40px 40px #2e2b273b;
          max-width: 368px;

          ${media.down('sm')} {
            width: 100%;
          }

          ${media.up('md')} {
            right: 0;
          }

          ${media.up('md')} {
            display: none;
          }

          ${media.up('lg')} {
            display: block;
            width: 20vw;
            max-width: 375px;
          }

          ${media.up('xl')} {
            right: calc(306px - 20vw);
          }
        `;
      case 'current-offers':
        return css`
          width: 100%;
          height: auto;

          ${media.down('lg')} {
            img {
              min-height: 319px;
            }
          }
        `;
      case 'product-category-intro':
        return css`
          width: 100%;

          ${media.up('lg')} {
            width: 49%;
          }
        `;
      default:
        return css`
          width: 100%;
          height: 100%;

          .gatsby-image-wrapper {
            width: 100%;
            height: 100%;
          }

          img {
            width: 100%;
            height: 100%;
          }
        `;
    }
  }}
`;

export { Wrapper };

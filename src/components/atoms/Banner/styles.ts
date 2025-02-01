import styled, { css } from 'styled-components';
import { media } from 'theme/media';
import { IBannerWrapper } from './interface';

const Wrapper = styled.div<IBannerWrapper>`
  background: url('${({ background }) => background.sm}');
  background-size: cover;
  background-position: top center;
  ${({ background }) =>
    background.md &&
    `
        ${media.up('md')}{
            background: ${background.md ? `url("${background.md}")` : ''};
            background-size: cover;
            background-position: center;
        }
    `}
  ${({ background }) =>
    background.lg &&
    `
        ${media.up('lg')}{
            background: ${background.lg ? `url("${background.lg}")` : ''};
            background-size: cover;
            background-position: center;
        }
    `}
    ${({ background }) =>
    background.xl &&
    `
        ${media.up('xl')}{
            background: ${background.xl ? `url("${background.xl}")` : ''};
            background-size: cover;
            background-position: center;
        }
    `}
    ${({ type }) => {
    switch (type) {
      case 'our-products-banner':
        return css`
          width: 100%;
          height: 605px;
          ${media.up('lg')} {
            height: 869px;
          }
        `;
      default:
        return css`
          width: 100%;
          height: 605px;
          ${media.up('lg')} {
            height: 869px;
          }
        `;
    }
  }}
`;

export { Wrapper };

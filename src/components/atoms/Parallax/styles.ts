import styled, { css } from 'styled-components';
import { media } from 'theme/media';
import { IParallaxWrapper } from './interface';

import ParallaxShadow from 'assets/images/home/parallax-shadow.webp';
import ParallaxShadowMobile from 'assets/images/home/parallax-shadow-mobile.webp';

const Wrapper = styled.div<IParallaxWrapper>`
  width: 100%;
  cursor: pointer;
  ${({ type }) => {
    switch (type) {
      case 'parallax-shadow':
        return css`
          height: 250px;
          position: relative;
          .parallax-banner {
            height: 250px;
          }
          &:after {
            content: '';
            display: block;
            width: 100%;
            height: 250px;
            background: url('${ParallaxShadowMobile}');
            background-size: cover;
            background-position: top center;
            position: absolute;
            bottom: -2px;
          }
          ${media.up('md')} {
            height: 500px;
            &:after {
              height: 500px;
            }
            .parallax-banner {
              height: 500px;
            }
          }
          ${media.up('lg')} {
            height: 1000px;
            &:after {
              height: 1000px;
              background: url('${ParallaxShadow}');
              background-size: cover;
              background-position: top center;
            }
            .parallax-banner {
              height: 1000px;
            }
          }
        `;
      default:
        return css`
          height: 100vh;
        `;
    }
  }}
`;

export { Wrapper };

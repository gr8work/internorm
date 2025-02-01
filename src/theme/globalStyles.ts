import { createGlobalStyle } from 'styled-components';
import { media } from './media';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { breadcrumbStyles } from './breadcrumb';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-padding-top: 102px;

    ${media.up('lg')}{
      scroll-padding-top: 138px;
    }
  }

  body {
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.fontSize};
    color: ${(props) => props.theme.colors.darkText};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    word-break: break-word;
    zoom: 0.9;
  }

  h1 {
    font-family: ${(props) => props.theme.secondFont};
    font-size: ${(props) => props.theme.desktop.h1.fontSize};
    font-weight: ${(props) => props.theme.desktop.h1.fontWeight};
    line-height: ${(props) => props.theme.desktop.h1.lineHeight};
    ${media.up('lg')}{
      font-size: ${(props) => props.theme.desktop.h1.lg.fontSize};
      line-height: ${(props) => props.theme.desktop.h1.lg.lineHeight};
    }
  }

  h2 {
    font-family: ${(props) => props.theme.secondFont};
    font-size: ${(props) => props.theme.desktop.h2.fontSize};
    font-weight: ${(props) => props.theme.desktop.h2.fontWeight};
    line-height: ${(props) => props.theme.desktop.h2.lineHeight};

  }

  h3 {
    font-family: ${(props) => props.theme.secondFont};
    font-size: ${(props) => props.theme.desktop.h3.fontSize};
    font-weight: ${(props) => props.theme.desktop.h3.fontWeight};
    line-height: ${(props) => props.theme.desktop.h3.lineHeight};
  }

  h4 {
    font-family: ${(props) => props.theme.secondFont};
    font-size: ${(props) => props.theme.desktop.h4.fontSize};
    font-weight: ${(props) => props.theme.desktop.h4.fontWeight};
    line-height: ${(props) => props.theme.desktop.h4.lineHeight};
    ${media.up('lg')}{
      font-size: ${(props) => props.theme.desktop.h4.lg.fontSize};
      line-height: ${(props) => props.theme.desktop.h4.lg.lineHeight};
    }
  }

  h5 {
    font-family: ${(props) => props.theme.secondFont};
    font-size: ${(props) => props.theme.desktop.h5.fontSize};
    font-weight: ${(props) => props.theme.desktop.h5.fontWeight};
    line-height: ${(props) => props.theme.desktop.h5.lineHeight};
  }

  button:focus-visible, a:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focusColor};
    outline-offset: 2px;
  }

  button, a {
    font-family: ${({ theme }) => theme.font}
  }

  ${breadcrumbStyles};
`;

export default GlobalStyle;

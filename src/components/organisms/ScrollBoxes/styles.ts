import styled from 'styled-components';
import { media } from 'theme/media';
import WpImage from 'components/atoms/WpImage';

export const Wrapper = styled.div<{ height: number }>`
  background-color: ${({ theme }) => theme.colors.billowyClouds};
  width: 100%;
  position: relative;
  ${media.up('lg')} {
    height: ${({ height }) => `calc(100vh * ${height} * 1.11)`};
  }
`;

export const WrapperFix = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
`;

export const SoloSlider = styled.div<{ height: number }>`
  min-height: 100vh;
  width: 100%;
  ${media.up('lg')} {
    height: ${({ height }) => height * 1.11}px;
    opacity: 0;
    transition: opacity 0.8s;
    position: absolute;
    top: 0;
    &.active {
      opacity: 1;
      z-index: 2;
    }
    &.fixed {
      position: fixed;
    }
    &.bottom {
      position: absolute;
      bottom: 0;
      top: auto;
    }
  }
`;

export const SoloSliderImage = styled.div`
  height: calc(100vh * 1.11);
  width: 100%;
`;

export const StyledWpImage = styled(WpImage)`
  height: 100%;
`;

export const ImagesListOut = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  display: none;
  top: 0;
  right: 0;
  z-index: 3;
  ${media.up('lg')} {
    display: block;
  }
`;

export const ImagesList = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`;

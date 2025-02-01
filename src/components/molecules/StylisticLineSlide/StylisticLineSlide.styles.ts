import WpImage from 'components/atoms/WpImage';
import styled, { css } from 'styled-components';

import { media } from 'theme/media';
import { CustomThemeColorType } from 'theme/styled';

export const StyledProductWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  width: 100%;

  ${media.up('lg')} {
    padding: 0 78px 38px;
  }
`;

export const StyledProductImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
  padding: 46px 90px;
  gap: 50px;
  mix-blend-mode: multiply;

  ${media.up('lg')} {
    flex-direction: row;
    gap: 151px;
    padding: unset;
  }
`;

export const StyledFirstImage = styled(WpImage)`
  min-height: 140px;
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 388px;

  ${media.up('lg')} {
    max-height: unset;
    height: 600px;
  }
`;

export const StyledSecondImage = styled(WpImage)`
  min-height: 140px;
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 388px;

  ${media.up('lg')} {
    max-height: unset;
    height: 600px;
  }
`;

export const StyledBar = styled.div<{ color: CustomThemeColorType }>`
  width: 100%;
  padding: 30px 30px 45px;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  align-items: center;
  gap: 21px;
  min-height: 246px;
  justify-content: center;

  ${({ color }) => css`
    background-color: ${({ theme }) => theme.colors[color]};
  `}
  ${media.up('lg')} {
    flex-direction: row;
    gap: 40px;
    padding: 22px 60px;
    min-height: unset;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    line-height: 2;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  flex-shrink: 0;

  p {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 2px;
  }
`;

export const StyledArchitectureWrapper = styled.div`
  width: 100%;
  height: 866px;

  ${media.up('lg')} {
    height: 748px;

    ${StyledBar} {
      position: absolute;
      bottom: 38px;
      left: 78px;
      right: 78px;
      width: auto;
    }
  }
`;

export const StyledArichtectureImage = styled(WpImage)`
  width: 100%;
  height: 578px;
  z-index: -1;

  ${media.up('lg')} {
    height: 748px;
  }
`;

import Button from 'components/atoms/Button';
import WpImage from 'components/atoms/WpImage';
import styled from 'styled-components';
import { media } from 'theme/media';

export const StyledWrapper = styled.div`
  max-width: 1920px;
  margin-inline: auto;
  position: relative;
  min-height: 615px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(237, 28, 35, 0.74);
  }
`;

export const StyledBackgroundImage = styled(WpImage)`
  position: absolute;
  inset: 0;
  z-index: -1;
`;

export const StyledCard = styled.div`
  max-width: 846px;
  margin-inline: auto;
  width: 100%;
  color: ${({ theme }) => theme.colors.lynxWhite};
  text-align: center;
  display: grid;
  place-content: center;
  justify-items: center;
  min-height: 615px;
  gap: 40px;
  padding-block: 40px;

  h2,
  h3,
  h4 {
    font-weight: 400;
    font-size: 40px;
    line-height: 56px;

    strong {
      font-weight: 700;
    }

    ${media.up('lg')} {
      font-size: 56px;
      line-height: 74px;
    }
  }

  padding-inline: 30px;

  ${media.up('xl')} {
    padding-inline: 0;
  }

  p:not(:first-child) {
    font-size: 24px;
    line-height: 44px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};

    ${media.up('lg')} {
      font-size: 30px;
      line-height: 50px;
    }
  }
`;

export const StyledSubTitle = styled.p`
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 400;
  line-height: 18px;
  text-transform: uppercase;
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
  background-color: rgba(46, 43, 39, 0.8);
`;

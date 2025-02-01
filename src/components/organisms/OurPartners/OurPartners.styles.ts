import WpImage from 'components/atoms/WpImage';
import Slider from 'components/molecules/Slider';
import styled from 'styled-components';
import { media } from 'theme/media';

export const StyledWrapper = styled.div`
  padding-block: 60px;
  max-width: 952px;
  margin-inline: auto;
  display: grid;
  place-items: center;
  gap: 50px;
  padding-inline: ${({ theme }) => theme.gap.side};

  ${media.up('lg')} {
    padding-block: 100px;
  }

  ${media.up('xl')} {
    padding-inline: 0;
  }
`;

export const StyledSubTitle = styled.p`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 18px;
`;

export const StyledCiteAuthor = styled.p`
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.redLink};
  margin-block: 20px 60px;
`;

export const StyledCite = styled.cite`
  display: flex;
  margin-inline: auto;
  font-style: normal;
  max-width: 814px;
  text-align: center;
  margin-bottom: 40px;

  ${media.up('lg')} {
    margin-bottom: 60px;
  }

  h2,
  h3,
  h4,
  p {
    font-family: ${({ theme }) => theme.secondFont};
    font-size: 30px;
    line-height: 40px;
    font-weight: 300;

    ${media.up('lg')} {
      font-size: 40px;
      line-height: 50px;
    }

    strong {
      font-weight: 700;
    }

    span {
      font-size: 62px;
      color: ${({ theme }) => theme.colors.redLink};
      font-weight: 400;
      padding-bottom: 20px;

      ${media.up('lg')} {
        font-size: 124px;
      }
    }
  }
`;

export const StyledLogo = styled(WpImage)`
  max-width: 150px;
  max-height: 50px;
`;

export const StyledOpinion = styled.div`
  display: grid;
  place-items: center;
`;

export const StyledPartnerLogo = styled(WpImage)`
  max-width: 150px;
  max-height: 50px;
`;

export const StyledPartnersSlider = styled(Slider)`
  margin-top: 60px;

  ${media.up('lg')} {
    margin-top: 140px;
  }
`;

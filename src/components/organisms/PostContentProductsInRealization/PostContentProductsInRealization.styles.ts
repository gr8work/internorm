import ContactAs from 'components/molecules/ContactAs';
import Slider from 'components/molecules/Slider';
import styled from 'styled-components';
import { media } from 'theme/media';

export const StyledWrapper = styled.div`
  max-width: 1717px;
  margin: 0 auto 50px;
  background-color: ${({ theme }) => theme.colors.billowyClouds};
  display: flex;
  flex-direction: column;
  padding: 25px 30px 40px;

  ${media.up('lg')} {
    flex-direction: row;
    gap: 74px;
    padding: 65px 75px;
    margin-bottom: 70px;
  }

  ${media.up('xl')} {
    padding: 65px 179px 75px 74px;
  }
`;

export const StyledCardSlider = styled(Slider)`
  flex-shrink: 0;
`;

export const StyledProducts = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledHeading = styled.p`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.grayBar};
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const StyledContactAs = styled(ContactAs)`
  margin-block: 40px 50px;
  height: max-content;

  ${media.up('lg')} {
    margin-bottom: 0;
  }
`;

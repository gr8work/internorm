import styled from 'styled-components';

import Container from 'components/atoms/Container';
import Text from 'components/atoms/Text';
import Slider from 'components/molecules/Slider';
import Title from 'components/atoms/Title';

import { media } from 'theme/media';
import WpImage from 'components/atoms/WpImage';

export const StyledWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.grayBar};
  display: grid;
  place-items: center;
  margin: 40px auto;
  padding-block: 30px 92px;
  max-width: 1920px;
  position: relative;

  ${media.up('lg')} {
    margin-block: 120px 180px;
    padding-block: 100px;
  }
`;

export const StyledContent = styled(Container)`
  text-align: center;
`;

export const StyledTitle = styled(Title)`
  font-size: 40px;
  margin-bottom: 30px;

  ${media.up('lg')} {
    font-size: 30px;
    margin-bottom: 40px;
  }
`;

export const StyledText = styled(Text)`
  max-width: 1056px;
  margin-inline: auto;
`;

export const StyledCardSlider = styled(Slider)`
  max-width: 1486px;
  margin-top: 40px;

  ${media.up('lg')} {
    margin-top: 85px;
  }
`;

export const StyledCardImage = styled(WpImage)`
  border-radius: 10px;
  overflow: hidden;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

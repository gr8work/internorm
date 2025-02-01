import Container from 'components/atoms/Container';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import styled from 'styled-components';
import { media } from 'theme/media';
import Button from 'components/atoms/Button';
import Slider from 'components/molecules/Slider';
import { OtherSunVisorsType } from './OtherSunVisors';
import WpImage from 'components/atoms/WpImage';

export const StyledWrapper = styled.section<{
  sectionColor: OtherSunVisorsType['sectionColor'];
}>`
  background-color: ${({ theme, sectionColor }) => sectionColor && theme.colors[sectionColor]};
  padding-block: 30px 92px;
  padding-inline: ${({ theme }) => theme.gap.side};

  ${media.up('lg')} {
    padding-block: 100px;
  }
`;

export const StyledContent = styled(Container)`
  padding: 0;
  display: grid;
`;

export const StyledHeading = styled(Title)`
  margin-bottom: 30px;

  ${media.up('lg')} {
    margin-bottom: 40px;
  }
`;

export const StyledText = styled(Text)`
  display: grid;
  gap: 32px;
  margin-bottom: 40px;

  ${media.up('lg')} {
    margin-bottom: 75px;
  }
`;

export const StyledImage = styled(WpImage)`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledImageSlider = styled(Slider)`
  height: 485px;
  margin-bottom: 40px;
`;

export const StyledProducts = styled.ul`
  list-style-type: none;
  display: grid;
  place-items: center;
  gap: 40px;

  ${media.up('lg')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 145px;
  }
`;

export const StyledProduct = styled.div`
  max-width: 840px;
`;

export const StyledButton = styled(Button)`
  margin-top: 80px;
  justify-self: center;
`;

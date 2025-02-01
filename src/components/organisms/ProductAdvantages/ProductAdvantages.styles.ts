import Container from 'components/atoms/Container';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import styled from 'styled-components';
import { media } from 'theme/media';
import Slider from 'components/molecules/Slider';
import { ProductAdvantagesType } from './ProductAdvantages';
import WpImage from 'components/atoms/WpImage';
import Button from 'components/atoms/Button';

export const StyledWrapper = styled.section<{
  sectionColor: ProductAdvantagesType['sectionColor'];
}>`
  background-color: ${({ theme, sectionColor }) => sectionColor && theme.colors[sectionColor]};
  display: grid;
  place-items: center;
  padding-block: 30px 92px;

  ${media.up('lg')} {
    padding-block: 100px;
  }
`;

export const StyledContent = styled(Container)`
  padding: 0;
`;

export const StyledHeading = styled(Title)`
  margin-bottom: 30px;
  padding-inline: 30px;

  ${media.up('lg')} {
    margin-bottom: 40px;
    padding-inline: 0;
  }
`;

export const StyledText = styled(Text)`
  display: grid;
  gap: 32px;
  padding-inline: 30px;

  ${media.up('lg')} {
    padding-inline: 0;
  }
`;

export const StyledImage = styled(WpImage)`
  width: 100%;
  height: 449px;

  ${media.up('lg')} {
    border-radius: 10px;
    overflow: hidden;
    height: 485px;
  }
`;

export const StyledIntro = styled.div`
  display: grid;
  gap: 50px;
  margin-bottom: 50px;
  max-width: 1486px;

  ${media.up('lg')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 150px;
    margin-bottom: 60px;
    padding-inline: ${({ theme }) => theme.gap.side};
  }
`;

export const StyledCardImage = styled(WpImage)`
  border-radius: 10px;
  overflow: hidden;
  height: 343px;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledCardSlider = styled(Slider)`
  max-width: 1486px;
  margin-bottom: 40px;
  padding-inline: ${({ theme }) => theme.gap.side};
`;

export const StyledPreviewSlider = styled(Slider)`
  ${media.up('lg')} {
    height: 485px;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 60px;
`;

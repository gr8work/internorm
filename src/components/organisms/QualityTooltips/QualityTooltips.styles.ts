import styled from 'styled-components';
import { ListSecurityDescription } from 'components/organisms/SecurityTextBanner/SecurityTextBanner.styles';
import ListCheck from 'assets/icons/list-check.svg';
import { PaginationSlider } from 'components/organisms/CurrentOffers/styles';
import Container from 'components/atoms/Container';
import Slider from 'components/molecules/Slider';
import { media } from 'theme/media';
import Button from 'components/atoms/Button';

export const QualityTooltipsWrapper = styled.div`
  background: ${({ theme }) => theme.colors.heavenlyWhite};
  padding-block: 60px 100px;

  ${media.up('lg')} {
    padding-top: 0;
  }
`;
export const QualityTooltipsTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 40px;
`;

export const WrapperDescriptionQuality = styled.div`
  button {
    margin-block: 40px;
  }

  ${media.up('lg')} {
    margin-top: 100px;
    max-width: 48%;
  }
`;

export const TextDescriptionQuality = styled.p`
  font-size: 14px;
  line-height: 32px;
  letter-spacing: 0.7px;
  margin-top: 40px;
`;

export const ListQualityDescription = styled(ListSecurityDescription)`
  li {
    &::before {
      background: url('${ListCheck}');
    }
  }
`;

export const QualityTooltipsContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  ${media.up('lg')} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const WrapperSwiperToolTip = styled.div`
  ${media.up('lg')} {
    max-width: 52%;

    .slick-slide {
      padding-top: 100px;
    }
  }

  .slick-dots {
    width: fit-content;
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;
export const PaginationSliderTooltip = styled(PaginationSlider)`
  ${media.up('lg')} {
    left: 40px;
  }
`;

export const StyledSlider = styled(Slider)`
  margin-top: 50px;

  ${media.up('lg')} {
    margin-top: 150px;
    margin-left: 40px;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;

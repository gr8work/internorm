import styled from 'styled-components';
import { media } from 'theme/media';
import WpImage from 'components/atoms/WpImage';

import Title from 'components/atoms/Title';

export const ItemCurrentOffer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

export const WrapperCurrentOffers = styled.div`
  margin-block: 30px 70px;
  display: grid;
  gap: 45px;
  max-width: calc(1717px + 60px);
  padding-inline: 30px;
  margin-inline: auto;

  ${media.up('lg')} {
    margin-block: 78px 120px;
    gap: 0;

    .swiper-wrapper {
      padding: 40px;
      margin-left: 20px;
    }
  }
`;

export const StyledWpImage = styled(WpImage)`
  height: 319px;
  border-radius: 10px 10px 0 0;
`;

export const StyledTitle = styled(Title)`
  display: none;

  ${media.up('lg')} {
    display: block;
  }
`;

export const PaginationSlider = styled.div`
  bottom: -50px !important;

  li {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;

    &.slick-active {
      background: #ed1c23cc;
      border-radius: 50%;
      color: white;
    }
  }

  span {
    line-height: 22px;
  }
`;

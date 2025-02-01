import styled from 'styled-components';
import { media } from 'theme/media';
import ArrowMore from 'components/atoms/ArrowMore';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  position: relative;
  margin: 0 auto;
  .swiper{
    padding: 20px 0;
  }

  ${media.up('lg')} {
    .swiper {
      padding-left: 250px;
    }
  }
`;

const PrevIcon = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  left: 100px;
  top: 170px;
`;

const NextIcon = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  right: 100px;
  top: 190px;
`;

const SoloSlide = styled.div`
  display: flex;
  width: 100%;
  padding: 0 30px;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.03);
  }
`;

export const StyledArrowMore = styled(ArrowMore)`
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export { Wrapper, SoloSlide, PrevIcon, NextIcon };

import styled from 'styled-components';
import { media } from 'theme/media';
import LongArrow from 'assets/icons/long-arrow.svg';
import { ISoloSlider } from './interface';

const Wrapper = styled.div`
  ${media.up('lg')} {
    padding: 81px 0 0;
    width: calc(100% - 394px);
  }
`;

const SoloSlide = styled.div<ISoloSlider>`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px 0;
    position: relative;
    &:after{
        content: '';
        position: absolute;
        display: ${({ last }) => (last ? 'none' : 'block')};
        height: 6.8px;
        width: 111.5px;
        background url("${LongArrow}");
        top: 14px;
        right: -56px;
        z-index; 5;
    }
`;

export { Wrapper, SoloSlide };

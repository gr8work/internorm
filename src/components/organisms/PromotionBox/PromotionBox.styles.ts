import styled from 'styled-components';
import { media } from 'theme/media';
import { PromotionBoxType } from './PromotionBox';

export const Wrapper = styled.div<{ bg: PromotionBoxType['backgroundColor'] }>`
  width: 100%;
  padding: 45px 0 50px;
  background-color: ${({ theme, bg }) => bg && theme.colors[bg]};
  position: relative;
  z-index: 1;

  ${media.up('lg')} {
    padding: 55px 0 68px;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 28px;

  ${media.up('lg')} {
    grid-template-columns: max-content auto max-content;
    gap: 44px;
    align-items: center;
  }

  strong {
    font-weight: 700;
  }
`;

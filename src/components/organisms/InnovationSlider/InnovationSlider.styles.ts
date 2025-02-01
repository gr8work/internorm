import styled from 'styled-components';
import { media } from 'theme/media';

export const WrapperInnovationSlider = styled.div`
  background-color: ${({ theme }) => theme.colors.billowyClouds};
  padding-bottom: 48px;

  ${media.up('lg')} {
    padding-bottom: 140px;
  }
`;

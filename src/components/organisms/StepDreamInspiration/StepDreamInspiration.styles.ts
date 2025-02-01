import { Box, Wrapper } from 'components/organisms/WhatNext/styles';
import styled from 'styled-components';
import { media } from 'theme/media';

export const StyleBox = styled(Box)`
  padding: 40px 0 40px;

  ${media.up('lg')} {
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 50px 0 70px;
  }

  ${media.down('lg')} {
    text-align: center;

    a {
      margin: auto;
    }
  }
`;

export const StyleWrapper = styled(Wrapper)`
  ${media.up('lg')} {
    max-width: 1200px;
    margin: auto;
  }

  ${media.up('xl')} {
    max-width: 1426px;
  }
`;

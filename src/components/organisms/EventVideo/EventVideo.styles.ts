import styled from 'styled-components';
import { media } from 'theme/media';

import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gallery};
`;

export const StyledContent = styled.div`
  display: grid;

  ${media.up('lg')} {
    margin-left: auto;
  }
`;

export const StyledText = styled(Text)`
  margin-top: 20px;

  ${media.up('lg')} {
    margin-top: 40px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 1426px;
  margin-inline: auto;
  padding: 40px ${({ theme }) => theme.gap.side};
  display: grid;
  width: 100%;
  align-items: start;
  gap: 30px;

  ${media.up('lg')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;
    padding-block: 100px;
  }
  ${media.up('xl')} {
    padding-inline: unset;
  }
`;

export const StyledTitle = styled(Title)`
  h2,
  h3,
  h4,
  p {
    line-height: 50px;
  }
`;

export const StyledImageButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  height: 406px;
`;

import Button from 'components/atoms/Button';
import styled from 'styled-components';
import { media } from 'theme/media';

export const StyledWrapper = styled.div`
  max-width: 905px;
  margin-inline: auto;
  display: grid;
  place-items: center;
  text-align: center;
  margin-bottom: 70px;

  ${media.up('lg')} {
    margin-bottom: 120px;
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  width: 100%;
  text-align: left;
  margin-block: 50px 65px;
  padding-inline: ${({ theme }) => theme.gap.side};

  ${media.up('lg')} {
    margin-top: 90px;
  }

  p {
    padding-inline: 40px;
    line-height: 2;
  }
`;

export const StyledButton = styled(Button)`
  width: max-content;
`;

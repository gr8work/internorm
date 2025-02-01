import styled from 'styled-components';
import { media } from 'theme/media';
import Button from '../../atoms/Button';

export const WrapperNewsletter = styled.div`
  background: ${({ theme }) => theme.colors.heavenlyWhite};
  padding: 60px 40px 88px;
  grid-area: newsletter;
  display: flex;
  align-self: start;
  flex-direction: column;
  gap: 26px;
  margin-block: 0 10px;

  ${media.up('lg')} {
    margin-block: 0 40px;
  }
`;

export const WrapperActionNewsletter = styled.div`
  position: relative;

  input {
    max-width: calc(100% - 155px);
    border-radius: 21px 0 0 21px;
  }

  button {
    max-width: 155px;
  }
`;
export const StyledButton = styled(Button)`
  opacity: 0.8;
`;

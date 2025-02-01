import Button from 'components/atoms/Button';
import styled from 'styled-components';
import { media } from 'theme/media';
import { CustomThemeColorType } from 'theme/styled';

export const WrapperContactAs = styled.div<{ backgroundColor: CustomThemeColorType }>`
  padding: 30px;
  background: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;

  ${media.up('lg')} {
    gap: 20px;
    padding: 60px;
    max-width: 435px;
  }
`;

export const WrapperContentPage = styled.div`
  position: relative;
  flex-shrink: 0;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;

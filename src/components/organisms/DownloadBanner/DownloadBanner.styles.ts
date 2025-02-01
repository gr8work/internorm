import Button from 'components/atoms/Button';
import styled from 'styled-components';
import { media } from 'theme/media';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.heavenlyWhite};
  padding: 30px 30px 37px;
  max-width: 1426px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media.up('lg')} {
    padding: 40px 100px;
    flex-direction: row;
    gap: 142px;
    align-items: center;
  }
`;

export const StyledHeading = styled.p`
  font-size: 13px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.redLink};
  text-transform: uppercase;
`;

export const StyledText = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.grayBar};
  letter-spacing: 0.5px;
  line-height: 28px;
`;

export const StyledButton = styled(Button)`
  background-color: rgba(46, 43, 39, 0.8);
  flex-shrink: 0;
`;

export const StyledContent = styled.div`
  display: grid;
  gap: 21px;
  padding-bottom: 17px;
`;

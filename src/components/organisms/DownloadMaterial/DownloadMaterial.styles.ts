import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button';
import { media } from 'theme/media';
import Input from 'components/atoms/Input';
import wrong from 'assets/icons/wrong.svg';
import { DownloadNewsletterType } from './DownloadMaterial';

export const StyledWrapper = styled.div<Pick<DownloadNewsletterType, 'isOpen' | 'height'>>`
  background-color: ${({ theme }) => theme.colors.gallery};
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  ${({ isOpen, height }) =>
    isOpen &&
    css`
      max-height: ${height};
    `};
`;

export const StyledHeading = styled.p`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  grid-area: heading;
`;

export const StyledEmailInput = styled.input`
  border: unset;
  border: 1px solid ${({ theme }) => theme.colors.lynxWhite};
  height: 41px;
  border-radius: 21px;
  padding-inline: 17px;
  grid-area: email;

  &[data-error='true'] {
    border-color: ${({ theme }) => theme.colors.redLink};
  }
`;

export const StyledButton = styled(Button)`
  flex-shrink: 0;
  width: 100%;
  grid-area: button;
`;

export const StyledEmailError = styled.p`
  color: ${({ theme }) => theme.colors.redLink};
  grid-area: email-error;
  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
  color: #ed1c23;
  display: flex;
  gap: 5px;

  &:before {
    content: '';
    width: 14px;
    height: 16px;
    display: block;
    background: url('${wrong}');
    background-size: 14px 16px;
  }
`;

export const StyledPrivacyError = styled(StyledEmailError)`
  grid-area: checkbox-error;
`;

export const StyledCheckbox = styled(Input)`
  grid-area: checkbox;
`;

export const StyledContainer = styled.div`
  padding: 30px 30px 50px;
  display: grid;
  gap: 22px;
  grid-template-areas:
    'heading'
    'email'
    'email-error'
    'checkbox'
    'checkbox-error'
    'button';

  ${media.up('md')} {
    grid-template-columns: 225px 1fr 225px;
    grid-template-areas:
      'heading email button'
      '. email-error email-error'
      '. checkbox checkbox'
      '. checkbox-error checkbox-error';
  }
`;

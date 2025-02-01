import React, { useState } from 'react';
import {
  StyledButton,
  StyledCheckbox,
  StyledContainer,
  StyledEmailError,
  StyledEmailInput,
  StyledHeading,
  StyledPrivacyError,
  StyledWrapper,
} from './DownloadMaterial.styles';

export type DownloadNewsletterType = {
  isOpen: boolean;
  height: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
} & Record<'buttonText' | 'emailError' | 'emailPlaceholder' | 'heading' | 'privacyText', string> &
  React.ElementType<'div'>;

// eslint-disable-next-line react/display-name
const DownloadMaterial = React.forwardRef(
  (
    {
      heading,
      buttonText,
      emailError,
      emailPlaceholder,
      privacyText,
      className,
      setEmail,
      isOpen,
      height,
    }: DownloadNewsletterType,
    ref: React.ForwardedRef<HTMLDivElement | null>
  ) => {
    const [inputValue, setInputValue] = useState('');
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [error, setError] = useState({ email: false, privacy: false });

    const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

    const handleEmail = (value: string) => {
      setError({
        email: !isValidEmail(value),
        privacy: !checkboxValue,
      });

      if (isValidEmail(value) && checkboxValue) {
        setEmail(value);
        localStorage.setItem('email', value);
      }
    };

    return (
      <StyledWrapper {...{ className, ref, isOpen, height }}>
        <StyledContainer>
          <StyledHeading>{heading}</StyledHeading>
          <StyledEmailInput
            {...{
              placeholder: emailPlaceholder,
              onChange: (e) => setInputValue(e.target.value),
              value: inputValue,
              'data-error': error.email,
            }}
          />
          {error.email && <StyledEmailError>{emailError}</StyledEmailError>}
          {error.privacy && <StyledPrivacyError>Proszę o zaznaczenie zgody!</StyledPrivacyError>}
          <StyledCheckbox
            type="checkbox"
            name="policy"
            text={privacyText}
            handleChange={() => setCheckboxValue((prev) => !prev)}
          />
          <StyledButton {...{ text: buttonText, handleClick: () => handleEmail(inputValue) }} />
        </StyledContainer>
      </StyledWrapper>
    );
  }
);

export default DownloadMaterial;

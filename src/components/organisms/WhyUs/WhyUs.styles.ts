import styled from 'styled-components';
import Container from 'components/atoms/Container';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';
import Slider from 'components/molecules/Slider';

export const StyledTitle = styled(Title)`
  max-width: 574px;
  margin-inline: auto;
`;

export const StyledContainer = styled(Container)`
  text-align: center;
  padding-block: 70px;
`;

export const StyledSwiper = styled(Slider)`
  width: 100%;
  margin: 60px auto 40px;
`;

export const StyledWrapper = styled.div`
  &[data-background='white'] {
    background-color: ${({ theme }) => theme.colors.white};
  }

  &[data-background='alabaster'] {
    background-color: ${({ theme }) => theme.colors.alabaster};
  }

  &[data-variant='architect-page'],
  &[data-variant='partner-page'] {
    ${StyledTitle} {
      max-width: 980px;
    }
  }

  &[data-variant='why-internorm'] {
    ${StyledContainer} {
      padding-block: 0 40px;
    }

    ${StyledSwiper} {
      margin-top: 40px;
    }
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 49px;
`;

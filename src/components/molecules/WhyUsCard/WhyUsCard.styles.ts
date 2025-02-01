import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 20px;
  text-align: center;
  max-width: 256px;
  margin-inline: auto;
`;

export const StyledBadge = styled.div`
  background-color: ${({ theme }) => theme.colors.billowyClouds};
  width: 80px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 100vmax;
  margin-bottom: 25px;
`;

export const StyledHeading = styled.h3`
  font-size: 14px;
  line-height: 2;
  color: ${({ theme }) => theme.colors.grayBar};
  font-family: ${({ theme }) => theme.font};
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;

  &[data-title='partner-page-secondary'] {
    text-transform: none;
    font-size: 18px;
  }
`;

export const StyledText = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.grayBar};
  font-weight: 400;
`;

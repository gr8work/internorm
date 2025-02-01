import styled from 'styled-components';

import Slider from 'components/molecules/Slider';

export const StyledWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-bottom: 70px;
  margin-bottom: 60px;

  &[data-variant='window-guide'] {
    max-width: 843px;
    margin-inline: auto;
  }
`;

export const StyledCardSlider = styled(Slider)`
  flex-shrink: 0;
`;

export const StyledHeading = styled.h2`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.grayBar};
  text-transform: uppercase;
`;

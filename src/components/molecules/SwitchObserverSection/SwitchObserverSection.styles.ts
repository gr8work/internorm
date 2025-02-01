import styled from 'styled-components';
import Switch from '../Switch';

export const StyledObserverSection = styled.section`
  min-height: 100px;
`;

export const StyledObserverSwitch = styled(Switch)`
  position: fixed;
  top: 50%;
  right: ${({ theme }) => theme.gap.side};
  z-index: 1;
  transition: opacity 0.4s ease-in-out;

  &[data-visible='false'] {
    visibility: hidden;
    opacity: 0;
  }

  &[data-visible='true'] {
    visibility: visible;
    opacity: 1;
  }
`;

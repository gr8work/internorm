import styled from 'styled-components';
import CircleTooltip from 'assets/icons/circle-tooltip.svg';
import { media } from 'theme/media';
import ReactTooltip from 'react-tooltip';
import { PositionOfDot } from './SliderToolTips';

export const WrapperImgToolTip = styled.div`
  margin-bottom: 40px;
  position: relative;

  img {
    width: 100%;
  }
`;

export const DotPointToolTip = styled.div`
  width: 15px;
  height: 15px;
  font-size: 0;
  background-image: url('${CircleTooltip}');
`;

export const StyledStatsToolTip = styled.ul`
  list-style-type: none;
`;

export const StyledStatTooltip = styled.li<PositionOfDot>`
  position: absolute;
  top: ${({ topPercent }) => topPercent}%;
  left: ${({ leftPercent }) => leftPercent}%;
`;

export const StyledReactTooltip = styled(ReactTooltip)`
  filter: drop-shadow(0 13px 16px rgba(0, 0, 0, 0.16));
  width: 50%;
  max-width: 338px;
  opacity: 1;

  &.__react_component_tooltip {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 2;
    color: ${({ theme }) => theme.colors.gray};

    &.show {
      opacity: 1;
    }
  }

  ${media.down('md')} {
    &.__react_component_tooltip {
      &.show {
        opacity: 0;
        display: none;
        visibility: hidden;
      }
    }
  }
`;

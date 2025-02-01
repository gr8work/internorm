import React from 'react';

import {
  StyledArchitectureSwitchIcon,
  StyledIconWrapper,
  StyledProductSwitchIcon,
  StyledSwitch,
} from './Switch.styles';

export type SwitchType = {
  isSwitchPressed: boolean;
  toggleIsSwitchPressed: () => void;
};

const Switch = ({ isSwitchPressed, toggleIsSwitchPressed, ...delegated }: SwitchType) => (
  <StyledSwitch
    {...delegated}
    type="button"
    aria-pressed={isSwitchPressed}
    onClick={toggleIsSwitchPressed}
  >
    <StyledIconWrapper>
      <StyledProductSwitchIcon />
    </StyledIconWrapper>
    <StyledIconWrapper>
      <StyledArchitectureSwitchIcon />
    </StyledIconWrapper>
  </StyledSwitch>
);

export default Switch;

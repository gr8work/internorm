import React, { useRef } from 'react';

import { SwitchType } from 'components/molecules/Switch';

import { useIntersectionObserver } from 'hooks/useIntersectionObserver';

import { StyledObserverSection, StyledObserverSwitch } from './SwitchObserverSection.styles';

const SwitchObserverSection = ({
  children,
  isSwitchPressed,
  toggleIsSwitchPressed,
}: React.PropsWithChildren<{
  isSwitchPressed: SwitchType['isSwitchPressed'];
  toggleIsSwitchPressed: SwitchType['toggleIsSwitchPressed'];
}>) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: false,
    threshold: 0.1,
  });

  const isVisible = !!entry?.isIntersecting;

  return (
    <StyledObserverSection ref={ref}>
      {children}
      <StyledObserverSwitch
        {...{ isSwitchPressed, toggleIsSwitchPressed }}
        data-visible={isVisible}
      />
    </StyledObserverSection>
  );
};

export default SwitchObserverSection;

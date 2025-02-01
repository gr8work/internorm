import React, { ReactElement, ReactNode, useEffect, useState } from 'react';

const hiddenStyles: React.CSSProperties = {
  display: 'inline-block',
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
};

type VisuallyHiddenProps = {
  children: ReactNode | ReactElement;
} & React.HTMLAttributes<HTMLSpanElement>;

const VisuallyHidden = ({ children, ...delegated }: VisuallyHiddenProps) => {
  const [forceShow, setForceShow] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        setForceShow(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        setForceShow(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  if (forceShow) {
    return children as ReactElement;
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <span style={hiddenStyles} {...delegated}>
      {children}
    </span>
  );
};

export default VisuallyHidden;

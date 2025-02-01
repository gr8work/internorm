import React from 'react';

export default function useToggle(initialValue = false) {
  const [value, setValue] = React.useState<boolean>(initialValue);
  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, toggle] as const;
}

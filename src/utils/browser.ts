export const isBrowser = () => typeof window !== 'undefined';

export const getWindowWidth = () => isBrowser() && window.innerWidth;

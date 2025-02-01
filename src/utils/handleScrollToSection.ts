export const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();

  const hash = (e?.target as HTMLAnchorElement)?.hash;

  const element = hash !== '' ? document.querySelector(hash) : null;
  if (element && !!window) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    element.classList.add('scroll-offset');
    window.history.pushState({}, '', hash);
  }
};

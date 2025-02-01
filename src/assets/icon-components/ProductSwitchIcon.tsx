import React from 'react';

const ProductSwitchIcon = (props: React.PropsWithChildren<React.SVGProps<SVGSVGElement>>) => (
  <svg
    {...props}
    width="17"
    height="22"
    viewBox="0 0 17 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="true"
  >
    <rect x="0.5" y="0.5" width="16" height="21" stroke="currentColor" />
    <path d="M8.5 22V0" stroke="currentColor" />
  </svg>
);

export default ProductSwitchIcon;

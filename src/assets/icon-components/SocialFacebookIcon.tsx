import React from 'react';

const SocialFacebookIcon = (props: React.PropsWithChildren<React.SVGProps<SVGSVGElement>>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    width="38"
    height="38"
    viewBox="0 0 38 38"
  >
    <circle cx="19" cy="19" r="19" fill="currentColor" />
    <path
      d="M11.306,12.612H8v3.306h3.306v9.918h4.959V15.918h3.008l.3-3.306H16.265V11.235c0-.79.159-1.1.922-1.1h2.384V6H15.6c-2.972,0-4.291,1.309-4.291,3.815Z"
      transform="translate(4.176 3.132)"
      stroke="currentColor"
    />
  </svg>
);

export default SocialFacebookIcon;

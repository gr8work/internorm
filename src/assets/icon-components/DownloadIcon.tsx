import React from 'react';

const DownloadIcon = (props: React.PropsWithChildren<React.SVGProps<SVGSVGElement>>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21.525"
    role="img"
    aria-hidden="true"
  >
    <path
      d="M2.063 21.525A2.049 2.049 0 0 1 0 19.463v-3.975h1.163v3.975a.968.968 0 0 0 .9.9h16.875a.968.968 0 0 0 .9-.9v-3.975H21v3.975a2.049 2.049 0 0 1-2.062 2.063Zm8.438-5.55L5.325 10.8l.825-.788 3.787 3.75V0h1.125v13.763l3.787-3.75.825.788Z"
      fill="currentColor"
    />
  </svg>
);

export default DownloadIcon;

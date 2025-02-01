import React from 'react';

const EmailIcon = (props: React.PropsWithChildren<React.SVGProps<SVGSVGElement>>) => (
  <svg
    role="img"
    aria-hidden="true"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="27"
    viewBox="0 0 19 27"
  >
    <text
      fill="currentColor"
      data-name="@"
      fontFamily="NunitoSans-Regular, Nunito Sans"
      fontSize="20"
      letterSpacing=".02em"
      transform="translate(0 19)"
    >
      <tspan x="0" y="0">
        @
      </tspan>
    </text>
  </svg>
);

export default EmailIcon;

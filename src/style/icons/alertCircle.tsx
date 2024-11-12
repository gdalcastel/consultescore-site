import * as React from 'react';

function AlertCircle(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 17}
      height={props.width || 17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 15.228a6.667 6.667 0 100-13.334 6.667 6.667 0 000 13.334zM8.5 5.894v2.667M8.5 11.228h.007"
        stroke="#949494"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AlertCircle;

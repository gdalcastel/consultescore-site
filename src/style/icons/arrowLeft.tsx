import * as React from 'react';

function ArrowLeft(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 24}
      height={props.height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.5 12H6h12.5zM6 12l6-6-6 6zm0 0l6 6-6-6z"
        fill="#42387F"
      />
      <path
        d="M6 12l6 6m6.5-6H6h12.5zM6 12l6-6-6 6z"
        stroke="#42387F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowLeft;

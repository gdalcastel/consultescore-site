import * as React from 'react';

function User(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 33}
      height={props.height || 33}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={16.5}
        cy={16.561}
        r={15}
        fill="#FFEDBA"
        stroke="#FBBC04"
        strokeWidth={2}
      />
      <path
        d="M22.9 23.76v-1.6a3.2 3.2 0 00-3.2-3.2h-6.4a3.2 3.2 0 00-3.2 3.2v1.6M16.5 15.76a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z"
        stroke="#FBBC04"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default User;

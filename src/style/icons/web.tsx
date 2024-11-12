import * as React from 'react';

function Web(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 44}
      height={props.height || 44}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2003_14239)">
        <path
          d="M6.875 17.875h8.25v2.75h-8.25v-2.75z"
          fill="#FBBC04"
        />
        <path
          d="M0 11v27.5A5.506 5.506 0 005.5 44h33a5.506 5.506 0 005.5-5.5V11H0zm4.125 5.5A1.374 1.374 0 015.5 15.125h11a1.375 1.375 0 011.375 1.375V22a1.375 1.375 0 01-1.375 1.375h-11A1.375 1.375 0 014.125 22v-5.5zM38.5 39.875h-33a1.375 1.375 0 010-2.75h33a1.375 1.375 0 010 2.75zm0-5.5h-33a1.375 1.375 0 010-2.75h33a1.375 1.375 0 010 2.75zm0-5.5h-33a1.375 1.375 0 010-2.75h33a1.375 1.375 0 010 2.75zm0-5.5H22a1.375 1.375 0 010-2.75h16.5a1.375 1.375 0 010 2.75zm0-5.5H22a1.375 1.375 0 010-2.75h16.5a1.375 1.375 0 010 2.75z"
          fill="#DCDCDC"
        />
        <path
          d="M44 8.25V5.5A5.506 5.506 0 0038.5 0h-33A5.506 5.506 0 000 5.5v2.75h44zm-16.5-5.5h11a1.375 1.375 0 010 2.75h-11a1.375 1.375 0 010-2.75zm-13.75 0a1.375 1.375 0 110 2.75 1.375 1.375 0 010-2.75zm-4.125 0a1.375 1.375 0 110 2.75 1.375 1.375 0 010-2.75zm-4.125 0a1.375 1.375 0 110 2.75 1.375 1.375 0 010-2.75z"
          fill="#42387F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2003_14239">
          <path
            fill="#fff"
            d="M0 0H44V44H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Web;

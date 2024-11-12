import * as React from 'react';

function Like(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 52}
      height={props.height || 44}
      viewBox="0 0 52 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2003_14265)">
        <path
          d="M13 12.375h-2.75a2.75 2.75 0 00-2.75 2.75V41.25A2.75 2.75 0 0010.25 44H13a2.75 2.75 0 002.75-2.75V15.125a2.75 2.75 0 00-2.75-2.75z"
          fill="#42387F"
        />
        <path
          d="M50.234 19.404a6.795 6.795 0 00-5.609-2.904h-7.879a34.948 34.948 0 003.277-10.146 5.428 5.428 0 00-1.218-4.4 5.519 5.519 0 00-4.218-1.962 5.466 5.466 0 00-5.423 4.558c-.547 3.25-2.139 9.063-6.664 11.95h-4v23.944l.972.972a4.095 4.095 0 002.916 1.209h18.838a5.508 5.508 0 005.187-3.67l4.691-13.292a6.798 6.798 0 00-.87-6.259z"
          fill="#DCDCDC"
        />
        <path
          d="M3.667 16H2.333C1.597 16 1 16.895 1 18v19c0 1.105.597 2 1.333 2h1.334C4.403 39 5 38.105 5 37V18c0-1.105-.597-2-1.333-2z"
          fill="#FBBC04"
        />
      </g>
      <defs>
        <clipPath id="clip0_2003_14265">
          <path
            fill="#fff"
            transform="translate(.5)"
            d="M0 0H51V44H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Like;

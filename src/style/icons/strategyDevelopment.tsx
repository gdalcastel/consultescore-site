import * as React from 'react';

function StrategyDevelopment(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 44}
      height={props.height || 44}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2003_14223)">
        <path
          d="M19.25 0h-1.375a4.125 4.125 0 000 8.25h1.375V0zM22 0h13.75v8.25H22V0zM43.24 2.894L38.5.525v7.2l4.74-2.363a1.376 1.376 0 000-2.46v-.008z"
          fill="#FBBC04"
        />
        <path
          d="M8.25 2.75A8.25 8.25 0 000 11v19.25A8.25 8.25 0 018.25 22V2.75zM38.5 38.5H22v4.125A1.375 1.375 0 0023.375 44H38.5a2.75 2.75 0 100-5.5z"
          fill="#42387F"
        />
        <path
          d="M38.5 11H11v11.236a2.51 2.51 0 01-2.513 2.514 5.66 5.66 0 00-5.71 4.96 5.5 5.5 0 005.473 6.04H38.5a5.5 5.5 0 015.5 5.5V16.5a5.5 5.5 0 00-5.5-5.5zm-8.25 20.625H16.5a1.375 1.375 0 010-2.75h13.75a1.375 1.375 0 010 2.75zm-15.124-8.25A1.375 1.375 0 0116.5 22h6.875a1.375 1.375 0 010 2.75H16.5a1.375 1.375 0 01-1.374-1.375zm22-5.5H16.5a1.375 1.375 0 010-2.75h20.625a1.375 1.375 0 010 2.75z"
          fill="#DCDCDC"
        />
      </g>
      <defs>
        <clipPath id="clip0_2003_14223">
          <path
            fill="#fff"
            d="M0 0H44V44H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default StrategyDevelopment;

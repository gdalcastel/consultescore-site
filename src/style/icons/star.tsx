import * as React from 'react';

function Star(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2003_14564)">
        <path
          transform="translate(.576)"
          fill="#fff"
          d="M0 0H19.3939V19.3939H0z"
        />
        <path
          d="M10.274 1.616l2.497 5.059 5.584.816-4.04 3.935.953 5.56-4.994-2.626-4.994 2.626.954-5.56-4.04-3.935 5.583-.816 2.497-5.059z"
          fill={props.fill || '#FBBC04'}
          stroke={props.fill || '#FBBC04'}
          strokeWidth={1.61616}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2003_14564">
          <path
            fill="#fff"
            transform="translate(.576)"
            d="M0 0H19.3939V19.3939H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Star;

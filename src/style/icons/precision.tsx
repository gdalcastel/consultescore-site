import * as React from 'react';

function Precision(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 64}
      height={props.height || 65}
      viewBox="0 0 64 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={32}
        cy={32.5}
        r={30}
        fill="#E1DFF6"
        stroke="#42387F"
        strokeWidth={4}
      />
      <g
        clipPath="url(#clip0_2003_14817)"
        stroke="#42387F"
        strokeWidth={1.1875}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M35.69 33.177A9.39 9.39 0 1028.35 15.89a9.39 9.39 0 107.339 17.287z" />
        <path d="M34.721 30.897a6.913 6.913 0 10-5.403-12.727 6.913 6.913 0 005.403 12.727z" />
        <path d="M32.92 24.536h-1.9a1.401 1.401 0 01-1.381-1.382c0-.748.633-1.382 1.381-1.382h1.9c.749 0 1.382.634 1.382 1.382M31.077 24.536h1.9c.749 0 1.382.633 1.382 1.382-.058.748-.633 1.324-1.44 1.324h-1.9c-.69 0-1.324-.576-1.324-1.324M32 20.908v.864M32 27.242v.921M22.87 50.563a3.86 3.86 0 10-3.016-7.106 3.86 3.86 0 003.016 7.106z" />
        <path d="M19.678 47.278l.806.806 2.245-2.245M33.526 50.555a3.86 3.86 0 10-3.016-7.105 3.86 3.86 0 003.016 7.105z" />
        <path d="M30.271 47.279l.864.806 2.188-2.245M44.507 50.555a3.86 3.86 0 10-3.017-7.105 3.86 3.86 0 003.017 7.105z" />
        <path d="M41.252 47.279l.864.806 2.188-2.245M21.348 40.83a2.703 2.703 0 012.706-2.706h15.89a2.703 2.703 0 012.707 2.706M32 39.966v-3.57" />
      </g>
      <defs>
        <clipPath id="clip0_2003_14817">
          <path
            fill="#fff"
            transform="translate(13 14)"
            d="M0 0H38V38H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Precision;

import * as React from 'react';

function Business(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 35}
      height={props.height || 36}
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={17.2864}
        cy={17.886}
        r={16.0833}
        fill="#DFEEF6"
        stroke="#0E67C2"
        strokeWidth={2.14444}
      />
      <g clipPath="url(#clip0_2003_14469)">
        <mask
          id="a"
          style={{
            maskType: 'luminance'
          }}
          maskUnits="userSpaceOnUse"
          x={6}
          y={7}
          width={23}
          height={22}
        >
          <path
            d="M6.564 7.164H28.01v21.444H6.564V7.164z"
            fill="#fff"
          />
        </mask>
        <g
          mask="url(#a)"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#0E67C2"
        >
          <path d="M6.564 11.631a4.478 4.478 0 014.468-4.467h2.68a4.478 4.478 0 014.468 4.467v16.084c0 .493-.4.893-.893.893H9.245a2.686 2.686 0 01-2.68-2.68V11.63zm4.468-2.68a2.691 2.691 0 00-2.68 2.68v14.297c0 .49.404.893.893.893h7.148v-15.19a2.691 2.691 0 00-2.68-2.68h-2.681z" />
          <path d="M16.393 18.78a4.478 4.478 0 014.467-4.468h2.68a4.478 4.478 0 014.468 4.468v7.148a2.686 2.686 0 01-2.68 2.68h-8.042a.893.893 0 01-.893-.893V18.78zm4.467-2.681a2.691 2.691 0 00-2.68 2.68v8.042h7.148c.49 0 .893-.404.893-.893V18.78a2.691 2.691 0 00-2.68-2.681h-2.68zM10.139 25.48c0-1.207 1.025-2.233 2.234-2.233 1.208 0 2.233 1.026 2.233 2.234v2.234c0 .493-.4.893-.893.893h-2.68a.893.893 0 01-.894-.893V25.48zm2.234-.446c-.222 0-.447.226-.447.447v1.34h.893v-1.34c0-.222-.225-.447-.447-.447zM10.139 12.525c0-.494.4-.894.893-.894h2.68a.894.894 0 010 1.787h-2.68a.894.894 0 01-.893-.893zM10.139 16.1c0-.494.4-.894.893-.894h2.68a.894.894 0 110 1.787h-2.68a.893.893 0 01-.893-.894zM10.139 19.673c0-.493.4-.893.893-.893h2.68a.894.894 0 010 1.787h-2.68a.894.894 0 01-.893-.894z" />
          <path d="M19.967 19.673c0-.493.4-.893.893-.893h2.68a.894.894 0 010 1.787h-2.68a.894.894 0 01-.893-.894zM19.967 23.247c0-.494.4-.893.893-.893h2.68a.893.893 0 110 1.787h-2.68a.894.894 0 01-.893-.894z" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2003_14469">
          <path
            fill="#fff"
            transform="translate(6.564 7.164)"
            d="M0 0H21.4444V21.4444H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Business;

import * as React from 'react';

function GaugeMedium(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 80}
      height={props.height || 51}
      viewBox="0 0 80 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M33.409 39.207c-.724 1.253-.892 2.758-.469 4.183a5.92 5.92 0 002.726 3.419 5.92 5.92 0 004.323.651c1.447-.346 2.665-1.244 3.389-2.497 1.506-2.61 2.288-15.475 2.288-15.475s-10.75 7.11-12.257 9.72z"
        fill="#42387F"
      />
      <path
        d="M64.758 14.93l-.324-.31c-6.065-5.777-13.835-9.167-21.995-9.597L42 5v15.657l.382.032c4.266.369 8.315 2.141 11.576 5.067l.293.262 10.506-11.089z"
        fill="#FCC93A"
      />
      <path
        d="M26.706 26.516c3.26-2.927 7.31-4.7 11.576-5.068l.382-.033V5.76l-.438.023c-8.16.43-15.93 3.82-21.995 9.597l-.324.31 10.508 11.088.291-.261zM73.239 43.547c.298-.001.592-.065.866-.19.273-.123.52-.304.726-.532.198-.217.352-.475.453-.758.1-.283.144-.585.13-.886-.431-8.599-3.656-16.779-9.133-23.162l-.295-.343-10.51 11.09.248.309c2.818 3.487 4.51 7.83 4.83 12.401.046.568.293 1.096.692 1.48.4.383.92.594 1.46.59H73.24zM17.294 43.546a2.085 2.085 0 001.46-.59c.4-.385.647-.913.693-1.48.32-4.57 2.011-8.913 4.827-12.4l.25-.31-10.51-11.09-.295.343c-5.477 6.383-8.702 14.563-9.134 23.162-.014.302.03.604.132.886.1.283.255.542.454.759.205.227.452.408.725.532.274.123.568.188.865.188h10.533z"
        fill="#DCDCDC"
      />
    </svg>
  );
}

export default GaugeMedium;

import * as React from 'react';

function GaugeHigh(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        d="M41.288 43.965c-1.446 0-2.833-.606-3.856-1.685a5.92 5.92 0 01-1.598-4.07 5.92 5.92 0 011.598-4.07c1.023-1.08 2.41-1.685 3.856-1.685 3.013 0 14.546 5.755 14.546 5.755s-11.533 5.755-14.546 5.755z"
        fill="#42387F"
      />
      <path
        d="M15.906 15.688l.324-.31C22.296 9.6 30.065 6.212 38.225 5.782l.438-.023v15.656l-.382.033c-4.266.368-8.315 2.14-11.576 5.067l-.293.261-10.506-11.088zM53.294 26.516c-3.26-2.927-7.31-4.7-11.576-5.068l-.382-.033V5.76l.438.023c8.16.43 15.93 3.82 21.995 9.597l.324.31-10.508 11.088-.291-.261zM6.761 43.547c-.298-.001-.592-.065-.866-.19a2.208 2.208 0 01-.726-.532 2.225 2.225 0 01-.453-.758 2.317 2.317 0 01-.13-.886c.431-8.599 3.656-16.779 9.133-23.162l.295-.343 10.51 11.09-.248.309c-2.818 3.487-4.51 7.83-4.83 12.401a2.314 2.314 0 01-.692 1.48c-.4.383-.92.594-1.46.59H6.76z"
        fill="#DCDCDC"
      />
      <path
        d="M62.706 43.546a2.085 2.085 0 01-1.46-.59 2.313 2.313 0 01-.693-1.48c-.32-4.57-2.011-8.913-4.827-12.4l-.25-.31 10.51-11.09.295.343c5.477 6.383 8.702 14.563 9.134 23.162.014.302-.03.604-.132.886-.1.283-.255.542-.454.759a2.207 2.207 0 01-.725.532 2.106 2.106 0 01-.865.188H62.706z"
        fill="#FBBC04"
      />
    </svg>
  );
}

export default GaugeHigh;
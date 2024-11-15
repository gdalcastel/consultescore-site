import * as React from 'react';

function Language(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 25}
      height={props.height || 24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      {...props}
    >
      <path
        d="M4.752 10a8.047 8.047 0 000 4H7.6a19.83 19.83 0 010-4H4.752zm.818-2h2.346c.266-1.217.65-2.307 1.121-3.214A8.035 8.035 0 005.57 8zm14.678 2H17.4c.135 1.33.135 2.67 0 4h2.848a8.046 8.046 0 000-4zm-.818-2a8.035 8.035 0 00-3.467-3.214c.472.907.855 1.997 1.121 3.214h2.346zm-9.818 2a17.763 17.763 0 000 4h5.776c.15-1.33.15-2.67 0-4H9.612zm.358-2h5.06a10.759 10.759 0 00-.783-2.177C13.619 4.568 12.947 4 12.5 4c-.448 0-1.119.568-1.747 1.823-.315.632-.58 1.367-.783 2.177zm-4.4 8a8.035 8.035 0 003.467 3.214c-.472-.907-.855-1.997-1.121-3.214H5.57zm13.86 0h-2.346c-.266 1.217-.65 2.307-1.121 3.214A8.035 8.035 0 0019.43 16zm-9.46 0c.203.81.468 1.545.783 2.177.628 1.255 1.3 1.823 1.747 1.823.448 0 1.119-.568 1.747-1.823.315-.632.58-1.367.783-2.177H9.97zm2.53 6c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"
        fill="#E2E8F0"
      />
    </svg>
  );
}

export default Language;

import * as React from 'react';

function Credit(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 100}
      height={props.height || 80}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M82.813 43.11c-8.61 0-15.626 6.981-15.626 15.549 0 8.567 7.016 15.548 15.626 15.548 8.609 0 15.624-6.981 15.624-15.548 0-8.568-7.015-15.55-15.624-15.55zm0 27.988c-6.891 0-12.5-5.582-12.5-12.44 0-6.856 5.609-12.438 12.5-12.438 6.89 0 12.5 5.582 12.5 12.439s-5.61 12.439-12.5 12.439z"
        fill="#42387F"
      />
      <path
        d="M82.813 53.994c.859 0 1.562.7 1.562 1.555H87.5c0-2.021-1.313-3.732-3.125-4.385V49.33H81.25v1.835c-1.813.638-3.125 2.348-3.125 4.385 0 2.565 2.11 4.665 4.688 4.665.859 0 1.562.7 1.562 1.554a1.563 1.563 0 01-3.125 0h-3.125c0 2.022 1.313 3.732 3.125 4.385v1.835h3.125v-1.835c1.813-.637 3.125-2.348 3.125-4.385 0-2.565-2.11-4.664-4.688-4.664-.859 0-1.562-.7-1.562-1.555s.703-1.555 1.563-1.555z"
        fill="#FBBC04"
      />
      <path
        d="M70.311 21.341c.704 0 1.313-.466 1.5-1.135a1.547 1.547 0 00-.687-1.741L50.812 6.026a1.56 1.56 0 00-1.641 0L28.858 18.465a1.547 1.547 0 00-.687 1.741 1.555 1.555 0 001.5 1.136h4.687v10.884h-1.562v3.11H67.17v-3.11h-1.563V21.342H70.311zM48.436 32.227H37.5V21.342h10.938v10.884zm14.063 0H51.561V21.342H62.5v10.884zM35.202 18.232L50 9.167l14.797 9.065H35.202zM26.563 36.89h46.874V40H26.563v-3.11zM17.188 43.11c-8.61 0-15.625 6.981-15.625 15.549 0 8.567 7.015 15.548 15.624 15.548 8.61 0 15.625-6.981 15.625-15.548 0-8.568-7.015-15.55-15.624-15.55zm0 27.988c-6.891 0-12.5-5.582-12.5-12.44 0-6.856 5.609-12.438 12.5-12.438 6.89 0 12.5 5.582 12.5 12.439s-5.61 12.439-12.5 12.439z"
        fill="#42387F"
      />
      <path
        d="M12.656 57.103h-1.719v3.11h1.72c.718 3.545 3.874 6.22 7.655 6.22v-3.11c-2.03 0-3.75-1.306-4.406-3.11h4.406v-3.11h-4.406a4.671 4.671 0 014.406-3.11v-3.109a7.83 7.83 0 00-7.656 6.22z"
        fill="#FBBC04"
      />
      <path
        d="M50 43.11c-8.61 0-15.625 6.981-15.625 15.549 0 8.567 7.016 15.548 15.625 15.548 8.61 0 15.625-6.981 15.625-15.548 0-8.568-7.016-15.55-15.625-15.55zm0 27.988c-6.89 0-12.5-5.582-12.5-12.44 0-6.856 5.61-12.438 12.5-12.438s12.5 5.582 12.5 12.439S56.89 71.098 50 71.098z"
        fill="#42387F"
      />
      <path
        d="M15.625 35.538l-2.266-1.493-1.734 2.581 4.688 3.11c.265.17.562.264.859.264.297 0 .61-.093.86-.264l4.687-3.11-1.735-2.581-2.265 1.493v-6.422h-3.125v6.422h.031z"
        fill="#FBBC04"
      />
      <path
        d="M15.625 22.896h3.125v3.11h-3.125v-3.11zM15.625 16.677h3.125v3.11h-3.125v-3.11z"
        fill="#42387F"
      />
      <path
        d="M82.813 40c.296 0 .609-.093.859-.264l4.687-3.11-1.734-2.581-2.266 1.493v-6.422h-3.125v6.422l-2.265-1.493-1.735 2.581 4.688 3.11c.266.17.562.264.86.264h.03z"
        fill="#FBBC04"
      />
      <path
        d="M81.25 22.896h3.125v3.11H81.25v-3.11zM81.25 16.677h3.125v3.11H81.25v-3.11z"
        fill="#42387F"
      />
      <path
        d="M43.36 63.046l11.046-10.993 2.21 2.199-11.047 10.993-2.21-2.199zM46.662 53.16l2.21-2.2 2.21 2.2-2.21 2.198-2.21-2.199zM48.895 64.155l2.21-2.2 2.209 2.2-2.21 2.199-2.21-2.2z"
        fill="#FBBC04"
      />
    </svg>
  );
}

export default Credit;
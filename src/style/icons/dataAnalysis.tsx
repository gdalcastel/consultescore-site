import * as React from 'react';

function DataAnalysis(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 80}
      height={props.height || 80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M36.25 55H7.5A2.507 2.507 0 015 52.5V10c0-1.375 1.125-2.5 2.5-2.5h61.25c1.375 0 2.5 1.125 2.5 2.5v28.45c0 .688.563 1.25 1.25 1.25.688 0 1.25-.563 1.25-1.25V10c0-2.763-2.237-5-5-5H7.5c-2.763 0-5 2.237-5 5v42.5c0 2.763 2.237 5 5 5h28.75c.688 0 1.25-.563 1.25-1.25 0-.688-.563-1.25-1.25-1.25z"
        fill="#42387F"
      />
      <path
        d="M77.5 56.25c0-10.337-8.412-18.75-18.75-18.75C48.413 37.5 40 45.913 40 56.25 40 66.588 48.413 75 58.75 75c5 0 9.7-1.95 13.263-5.487A18.678 18.678 0 0077.5 56.25zm-6.412 10.575l-3.55-3.55a11.115 11.115 0 002.387-5.775h5.025a16.136 16.136 0 01-3.862 9.325zM58.75 47.5c4.825 0 8.75 3.925 8.75 8.75a8.742 8.742 0 01-2.563 6.188A8.742 8.742 0 0158.75 65C53.925 65 50 61.075 50 56.25s3.925-8.75 8.75-8.75zm16.2 7.5h-5.025C69.35 49.788 65.2 45.65 60 45.075V40.05c7.963.613 14.338 6.988 14.95 14.95zm-16.2 17.5c-8.962 0-16.25-7.287-16.25-16.25 0-8.962 6.625-15.563 15-16.2v5.025c-5.612.625-10 5.4-10 11.175 0 6.2 5.05 11.25 11.25 11.25 2.575 0 5.025-.862 7.025-2.463l3.55 3.55A16.19 16.19 0 0158.75 72.5zM41.25 25a3.63 3.63 0 00-.5-1.825l4.112-4.7c.425.175.888.275 1.375.275.488 0 .95-.1 1.375-.275l4.113 4.7c-.3.537-.5 1.162-.5 1.825a3.761 3.761 0 003.75 3.75 3.761 3.761 0 003.75-3.75 3.63 3.63 0 00-.5-1.825l4.112-4.7c.425.175.888.275 1.375.275a3.761 3.761 0 003.75-3.75 3.761 3.761 0 00-3.75-3.75 3.761 3.761 0 00-3.75 3.75c0 .662.188 1.288.5 1.825l-4.112 4.7a3.599 3.599 0 00-1.375-.275c-.488 0-.95.1-1.375.275l-4.113-4.7c.3-.537.5-1.162.5-1.825a3.761 3.761 0 00-3.75-3.75 3.761 3.761 0 00-3.75 3.75c0 .662.188 1.288.5 1.825l-4.112 4.7a3.599 3.599 0 00-1.375-.275A3.761 3.761 0 0033.75 25a3.761 3.761 0 003.75 3.75A3.761 3.761 0 0041.25 25zm22.5-11.25c.688 0 1.25.563 1.25 1.25 0 .688-.563 1.25-1.25 1.25-.688 0-1.25-.563-1.25-1.25 0-.688.563-1.25 1.25-1.25zM56.25 25c0 .688-.563 1.25-1.25 1.25-.688 0-1.25-.563-1.25-1.25 0-.688.563-1.25 1.25-1.25.688 0 1.25.563 1.25 1.25zm-10-11.25c.688 0 1.25.563 1.25 1.25 0 .688-.563 1.25-1.25 1.25-.688 0-1.25-.563-1.25-1.25 0-.688.563-1.25 1.25-1.25zm-8.75 12.5c-.688 0-1.25-.563-1.25-1.25 0-.688.563-1.25 1.25-1.25.688 0 1.25.563 1.25 1.25 0 .688-.563 1.25-1.25 1.25z"
        fill="#FBBC04"
      />
      <path
        d="M8.75 50c0 .688.563 1.25 1.25 1.25h5c.688 0 1.25-.563 1.25-1.25V36.25c0-.688-.563-1.25-1.25-1.25h-5c-.688 0-1.25.563-1.25 1.25V50zm2.5-12.5h2.5v11.25h-2.5V37.5zM20 30c-.688 0-1.25.563-1.25 1.25V50c0 .688.563 1.25 1.25 1.25h5c.688 0 1.25-.563 1.25-1.25V31.25c0-.688-.563-1.25-1.25-1.25h-5zm3.75 18.75h-2.5V32.5h2.5v16.25zM30 51.25h5c.688 0 1.25-.563 1.25-1.25V40c0-.688-.563-1.25-1.25-1.25h-5c-.688 0-1.25.563-1.25 1.25v10c0 .688.563 1.25 1.25 1.25zm1.25-10h2.5v7.5h-2.5v-7.5zM10 13.75h2.5c.688 0 1.25-.563 1.25-1.25 0-.688-.563-1.25-1.25-1.25H10c-.688 0-1.25.563-1.25 1.25 0 .688.563 1.25 1.25 1.25zM17.5 13.75h10c.688 0 1.25-.563 1.25-1.25 0-.688-.563-1.25-1.25-1.25h-10c-.688 0-1.25.563-1.25 1.25 0 .688.563 1.25 1.25 1.25zM10 20h2.5c.688 0 1.25-.563 1.25-1.25 0-.688-.563-1.25-1.25-1.25H10c-.688 0-1.25.563-1.25 1.25 0 .688.563 1.25 1.25 1.25zM17.5 20h10c.688 0 1.25-.563 1.25-1.25 0-.688-.563-1.25-1.25-1.25h-10c-.688 0-1.25.563-1.25 1.25 0 .688.563 1.25 1.25 1.25zM10 26.25h2.5c.688 0 1.25-.563 1.25-1.25 0-.688-.563-1.25-1.25-1.25H10c-.688 0-1.25.563-1.25 1.25 0 .688.563 1.25 1.25 1.25zM28.75 25c0-.688-.563-1.25-1.25-1.25h-10c-.688 0-1.25.563-1.25 1.25 0 .688.563 1.25 1.25 1.25h10c.688 0 1.25-.563 1.25-1.25z"
        fill="#42387F"
      />
    </svg>
  );
}

export default DataAnalysis;
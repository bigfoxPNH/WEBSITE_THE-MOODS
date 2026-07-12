import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={props.className || "w-10 h-10"}
      fill="none"
      stroke="currentColor"
      {...props}
    >
      {/* Circle Outline */}
      <circle cx="50" cy="50" r="44" strokeWidth="4" />
      
      {/* Interlocking Monogram C and M */}
      {/* 'C' path */}
      <path
        d="M 38,32 C 24,38 24,62 38,68"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* 'M' path */}
      <path
        d="M 44,68 L 44,32 L 56,48 L 68,32 L 68,68"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

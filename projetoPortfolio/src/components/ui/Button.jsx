import React from "react";

const Button = (props) => {
  return (
    <button className="inline-flex items-center justify-center w-57 h-11.5 gap-13.25 rounded-3xl bg-transparent border border-[#2A2D40] overflow-hidden hover:border-[#A6ADFF]/60 transition-colors cursor-pointer group">
      <span className="text-[#F2F3FA] text-sm font-sans font-normal">{props.children}</span>

      <svg
        className="w-4 h-4 text-[#A6ADFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </button>
  );
};

export default Button;

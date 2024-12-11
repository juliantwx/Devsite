import React from "react";

function CustomSVG({ text }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      style={{ color: "inherit" }}
    >
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="middle"
        className="text-[24px] font-bold"
        fill="currentColor"
      >
        {text}
      </text>
    </svg>
  );
}

export default CustomSVG;

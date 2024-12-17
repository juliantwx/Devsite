import React from "react";

function CustomSVG({ text, width = 48, height = 48 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      style={{ color: "inherit" }}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-[24px] font-bold"
        fill="currentColor"
      >
        {text}
      </text>
    </svg>
  );
}

export default CustomSVG;

import React from "react";

function Maintenance() {
  return (
    <div className="min-h-inherit flex flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 font-semibold tracking-tight text-gray-900 text-4xl sm:text-6xl">
          Under Maintenance
        </h1>
        <p className="mt-6 font-medium text-gray-500 text-base sm:text-xl/8">
          Exciting updates are on the way! My portfolio is currently undergoing
          maintenance to provide you with a better experience. For urgent
          matters, feel free to email me at{" "}
          <a
            href="mailto:juliantwx.work@gmail.com"
            className="text-teal font-semibold underline"
          >
            juliantwx.work@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Maintenance;

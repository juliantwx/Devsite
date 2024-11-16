import React from "react";

function NotFound() {
  return (
    <div className="min-h-inherit flex flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="font-semibold text-dark-blue text-base sm:text-xl">404</p>
        <h1 className="mt-4 font-semibold tracking-tight text-gray-900 text-5xl sm:text-7xl">
          Page not found :(
        </h1>
        <p className="mt-6 font-medium text-gray-500 text-lg sm:text-xl/8">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
    </div>
  );
}

export default NotFound;

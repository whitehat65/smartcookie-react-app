import React from "react";

const AppBox = ({ imgSrc, altText, name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-44 hover:shadow-lg transition"
    >
      <img
        src={imgSrc}
        alt={altText}
        width={95}
        height={63.33}      // Set height same as width for a square aspect ratio
        className="mb-4 object-contain"
        style={{ objectFit: "contain" }} // Ensure consistent containment
      />
      <div className="bg-red-600 text-white px-3 py-1 rounded w-full flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
          />
        </svg>
        <span className="font-semibold text-base">{name}</span> {/* Fixed font size */}
      </div>
    </a>
  );
};

export default AppBox;
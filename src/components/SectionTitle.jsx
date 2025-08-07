import React from "react";

const SectionTitle = ({ children, className = "" }) => {
  return (
    <h2
      className={`text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-800 ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;

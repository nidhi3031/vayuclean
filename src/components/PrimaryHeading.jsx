import React from "react";

const PrimaryHeading = ({ children, className = "" }) => {
  return (
    <h1
      className={`text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${className}`}
    >
      {children}
    </h1>
  );
};

export default PrimaryHeading;

import React from "react";

const Description = ({ children, className = "" }) => {
  return (
    <p className={`text-gray-600  text-base leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

export default Description;

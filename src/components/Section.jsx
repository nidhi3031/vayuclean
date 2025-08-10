import React from "react";

const Section = ({ children, className = "", bgImage, ...rest }) => {
  return (
    <section
      className={`relative py-12 md:py-24 px-4 sm:px-6 lg:px-24 ${className}`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
      {...rest}
    >
      {/* Overlay */}
      {bgImage && (
        <div className="absolute inset-0 bg-black/50 z-0" aria-hidden="true" />
      )}

      {/* Content */}
      <div className="relative container mx-auto z-10">{children}</div>
    </section>
  );
};

export default Section;

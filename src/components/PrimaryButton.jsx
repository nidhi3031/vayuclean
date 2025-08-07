import React from "react";
import { useNavigate } from "react-router-dom";

const PrimaryButton = ({
  children,
  onClick,
  className = "",
  to,
  type = "button",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`bg-primary  text-lg text-white px-8 py-3 rounded-lg font-medium transition duration-300 hover:bg-[#009dbb] ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

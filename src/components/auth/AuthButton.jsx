import React from "react";

const AuthButton = ({ children, type = "button", variant = "primary", className = "", ...props }) => {
  const baseStyles = "inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-sky-600 text-white shadow-lg shadow-sky-200 hover:bg-sky-700 focus:ring-sky-500",
    secondary:
      "border border-sky-200 bg-white text-sky-700 hover:border-sky-500 hover:text-sky-600 focus:ring-sky-200",
  };

  return (
    <button type={type} className={`${baseStyles} ${variants[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};

export default AuthButton;

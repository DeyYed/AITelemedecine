import React from "react";

const AuthTextField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = true,
  autoComplete,
}) => {
  const inputId = name || label?.replace(/\s+/g, "-").toLowerCase();

  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-600">{label}</span>
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
      />
    </label>
  );
};

export default AuthTextField;

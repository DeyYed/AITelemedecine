import React from "react";
import { Search } from "lucide-react";

const ClinicSearchBar = ({ label, placeholder, value, onChange, onSubmit, inputId }) => {
  const generatedId = inputId || label?.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (onSubmit) {
          onSubmit(value);
        }
      }}
      className="group relative flex w-full items-center overflow-hidden rounded-3xl border border-sky-100 bg-white px-4 py-3 shadow-sm transition focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-100"
      role="search"
      aria-label={label}
    >
    <Search className="mr-3 h-5 w-5 text-sky-500" aria-hidden="true" />
      <label htmlFor={generatedId} className="sr-only">
        {label}
      </label>
      <input
        id={generatedId}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="flex-1 border-none bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="ml-3 text-xs font-semibold text-sky-600 transition hover:text-sky-700"
        >
          Clear
        </button>
      )}
    </form>
  );
};

export default ClinicSearchBar;

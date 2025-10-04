import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-3 text-2xl font-semibold text-sky-700">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 text-lg font-bold text-white">
            AI
          </span>
          <span className="leading-tight">
            AI Telemedicine
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="#features" className="transition hover:text-sky-600">
            Features
          </a>
          <a href="#how-it-works" className="transition hover:text-sky-600">
            How it Works
          </a>
          <a href="#contact" className="transition hover:text-sky-600">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#/auth/login"
            className="hidden rounded-full border border-sky-200 px-5 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-600 hover:text-sky-600 md:inline-flex"
          >
            Log In
          </a>
          <a
            href="#/auth/register"
            className="inline-flex items-center rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

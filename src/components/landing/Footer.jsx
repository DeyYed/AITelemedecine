import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <h3 className="text-lg font-semibold text-white">AI Telemedicine</h3>
          <p className="mt-2 text-sm text-slate-400">
            Delivering compassionate care through technology, wherever you are.
          </p>
        </div>
        <nav className="flex justify-center gap-6 text-sm font-medium">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
          <a href="#privacy" className="transition hover:text-white">
            Privacy Policy
          </a>
          <a href="#/auth/login" className="transition hover:text-white">
            Login
          </a>
        </nav>
      </div>
      <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
        Copyright © 2025 created by John Dayrill P. Flores
      </div>
    </footer>
  );
};

export default Footer;

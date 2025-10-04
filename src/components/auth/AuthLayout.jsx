import React from "react";

const AuthLayout = ({ title, subtitle, children, footer }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50 via-white to-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-sky-200/60 blur-3xl" />
      </div>
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-md space-y-8 rounded-3xl bg-white/95 p-10 shadow-xl shadow-sky-200">
          <div className="text-center">
            <a href="#/" className="mx-auto inline-flex items-center gap-3 text-2xl font-semibold text-sky-700">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 text-lg font-bold text-white">
                AI
              </span>
              <span className="leading-tight">AI Telemedicine</span>
            </a>
            <h1 className="mt-8 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-sm text-slate-600">{subtitle}</p>
            )}
          </div>
          <div className="space-y-6">{children}</div>
          {footer && <div className="text-center text-sm text-slate-600">{footer}</div>}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

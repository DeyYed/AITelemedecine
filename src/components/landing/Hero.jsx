import React from "react";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-24 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white font-semibold">
              AI
            </span>
            <span>AI Telemedicine Clinic</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Healthcare Anytime, Anywhere.
          </h1>
          <p className="mt-6 text-lg text-slate-600 sm:text-xl">
            Book doctors, consult online, and get prescriptions from the comfort of your home.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#/auth/register"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-sky-200 px-7 py-3 text-base font-semibold text-sky-700 transition hover:border-sky-600 hover:text-sky-600"
            >
              Book a Doctor
            </a>
          </div>
        </div>
        <div className="relative w-full max-w-lg">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-sky-500/20 via-sky-300/10 to-white blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80"
            alt="Telemedicine consultation between doctor and patient"
            className="relative z-10 w-full rounded-3xl object-cover shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

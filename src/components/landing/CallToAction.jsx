import React from "react";

const CallToAction = () => {
  return (
    <section id="get-started" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700" />
      <div className="relative mx-auto max-w-5xl rounded-4xl bg-white/5 px-8 py-16 text-center text-white shadow-xl backdrop-blur">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Start your first online consultation today.
        </h2>
        <p className="mt-4 text-lg text-sky-100">
          Join thousands who trust AI Telemedicine for safe, reliable, and convenient healthcare.
        </p>
        <a
          href="#/auth/register"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-sky-700 shadow-lg transition hover:bg-slate-100"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;

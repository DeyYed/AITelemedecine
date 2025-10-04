import React from "react";
import { UserPlus, Stethoscope, ClipboardCheck } from "lucide-react";

const steps = [
  {
    title: "Create your account",
    description:
      "Answer a few quick questions and personalize your health profile to get started.",
    Icon: UserPlus,
  },
  {
    title: "Find a doctor & book",
    description:
      "Search specialists, compare availability, and secure appointments in seconds.",
    Icon: Stethoscope,
  },
  {
    title: "Consult & get prescription",
    description:
      "Join secured video calls, receive diagnoses, and access digital prescriptions instantly.",
    Icon: ClipboardCheck,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Seamless care in just a few steps. Set up, connect with a doctor, and continue living healthier.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map(({ title, description, Icon }, index) => (
            <div
              key={title}
              className="relative flex flex-col gap-6 rounded-3xl border border-transparent bg-white p-8 text-left shadow-sm shadow-sky-100 transition hover:-translate-y-1 hover:border-sky-200"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-50">
                <Icon className="h-10 w-10 text-sky-600" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm text-slate-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

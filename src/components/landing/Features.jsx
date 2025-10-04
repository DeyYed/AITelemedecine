import React from "react";
import {
  Video,
  CalendarClock,
  FileHeart,
  BrainCircuit,
} from "lucide-react";

const features = [
  {
    title: "Online Consultations",
    description: "Video or chat sessions with licensed doctors whenever you need support.",
    Icon: Video,
  },
  {
    title: "Easy Appointments",
    description: "Self-service scheduling that syncs with your calendar and reminders.",
    Icon: CalendarClock,
  },
  {
    title: "Digital Prescriptions",
    description: "Receive secure prescriptions instantly after each consultation.",
    Icon: FileHeart,
  },
  {
    title: "AI Symptom Checker",
    description: "Assess symptoms quickly with our intelligent triage assistant.",
    Icon: BrainCircuit,
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Everything you need for modern care
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Empowering clinics and patients with tools designed for efficient, compassionate telehealth.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {features.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm shadow-sky-100 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-50">
                <Icon className="h-10 w-10 text-sky-600" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

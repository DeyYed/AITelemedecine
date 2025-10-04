import React from "react";
import DashboardLayout from "../../components/dashboard/layout/DashboardLayout.jsx";
import { patientQuickStats } from "../../data/patientDashboardData.js";
import { CalendarPlus, Video } from "lucide-react";

const DashboardHome = () => {
  return (
    <DashboardLayout activePath="/patient/dashboard" patientName="Juan">
      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Your health at a glance</h2>
            <p className="mt-1 text-sm text-slate-600">
              Stay on top of your appointments, prescriptions, and care team in one place.
            </p>
          </div>
          <a
            href="#/patient/book"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700 sm:w-auto"
          >
            <CalendarPlus className="h-4 w-4" aria-hidden="true" />
            Book a Doctor
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {patientQuickStats.map(({ label, value, description }) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm shadow-sky-100"
            >
              <p className="text-sm font-medium text-slate-500">{label}</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
              <p className="mt-2 text-xs text-slate-500">{description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-sky-100">
            <h3 className="text-lg font-semibold text-slate-900">Upcoming care tips</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Prepare your latest blood pressure readings before your next consult.</li>
              <li>• Review lifestyle recommendations from your cardiologist.</li>
              <li>• Remember to request prescription refills two days in advance.</li>
            </ul>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-sky-100 p-6 shadow-sm shadow-sky-100">
            <h3 className="text-lg font-semibold text-slate-900">Need a quick consult?</h3>
            <p className="text-sm text-slate-600">
              Connect with specialists instantly through secure video or chat consultations.
            </p>
            <a
              href="#/patient/book"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700 sm:w-auto"
            >
              <Video className="h-4 w-4" aria-hidden="true" />
              Start a virtual visit
            </a>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default DashboardHome;

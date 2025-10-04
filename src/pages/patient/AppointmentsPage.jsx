import React from "react";
import DashboardLayout from "../../components/dashboard/layout/DashboardLayout.jsx";
import { patientAppointments } from "../../data/patientDashboardData.js";
import { CalendarDays } from "lucide-react";

const statusStyles = {
  Upcoming: "bg-emerald-50 text-emerald-600",
  Completed: "bg-slate-100 text-slate-600",
};

const AppointmentsPage = () => {
  return (
    <DashboardLayout activePath="/patient/appointments" patientName="Juan">
      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-slate-900">Appointments</h2>
          <p className="text-sm text-slate-600">
            View your upcoming and completed visits with your care team.
          </p>
        </div>
        <div className="space-y-4">
          {patientAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-sky-100 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                  <CalendarDays className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-sky-600">{appointment.doctor}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{appointment.date}</p>
                  <p className="text-sm text-slate-600">{appointment.time}</p>
                </div>
              </div>
              <span
                className={`inline-flex items-center self-start rounded-full px-4 py-1 text-xs font-semibold sm:self-auto ${
                  statusStyles[appointment.status] || "bg-slate-100 text-slate-600"
                }`}
              >
                {appointment.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default AppointmentsPage;

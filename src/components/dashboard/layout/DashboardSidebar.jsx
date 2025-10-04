import React from "react";
import { CalendarClock, Home, LogOut, Pill, Stethoscope } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home, href: "#/patient/dashboard" },
  { label: "Book Doctor", icon: Stethoscope, href: "#/patient/book" },
  { label: "Appointments", icon: CalendarClock, href: "#/patient/appointments" },
  { label: "Prescriptions", icon: Pill, href: "#/patient/prescriptions" },
];

const DashboardSidebar = ({ activePath, className = "" }) => {
  return (
    <aside
      className={`flex h-full w-64 shrink-0 flex-col overflow-hidden border-r border-slate-200 bg-white/90 backdrop-blur ${className}`}
    >
      <div className="flex h-20 items-center gap-3 border-b border-slate-200 px-6">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-lg font-bold text-white">
          AI
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-900">AI Telemedicine</p>
          <p className="text-xs text-slate-500">Patient Portal</p>
        </div>
      </div>
  <nav className="flex flex-1 flex-col space-y-1 overflow-y-auto px-4 py-6">
        {navItems.map(({ label, icon: Icon, href }) => {
          const isActive = activePath === href.replace(/^#/, "");
          return (
            <a
              key={label}
              href={href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-sky-600 text-white shadow-lg shadow-sky-200"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span>{label}</span>
            </a>
          );
        })}
      </nav>
      <div className="border-t border-slate-200 px-4 py-6">
        <a
          href="#/auth/login"
          className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
        >
          <LogOut className="h-5 w-5" aria-hidden="true" />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default DashboardSidebar;

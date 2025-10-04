import React, { useEffect, useRef, useState } from "react";
import { Bell, Menu, UserCog, IdCard } from "lucide-react";

const DashboardTopbar = ({ patientName = "Juan Dela Cruz", onToggleSidebar }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = patientName?.trim()?.charAt(0)?.toUpperCase() || "P";

  return (
    <header className="sticky top-0 z-30 flex flex-wrap items-center gap-4 border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur sm:flex-nowrap sm:justify-between sm:px-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 p-2 text-slate-600 transition hover:border-sky-300 hover:text-sky-600 lg:hidden"
          onClick={onToggleSidebar}
          aria-label="Toggle navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div>
          <p className="text-xs text-slate-500 sm:text-sm">Welcome back</p>
          <p className="text-lg font-semibold text-slate-900 sm:text-xl">{`Hello, ${patientName}!`}</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end sm:gap-4">
        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition hover:bg-sky-100"
        >
          <Bell className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Notifications</span>
        </button>
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 text-base font-semibold text-white shadow-sm transition hover:bg-sky-700"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open profile menu</span>
            {initials}
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-100 bg-white p-2 text-sm shadow-xl shadow-sky-100">
              <a
                href="#/patient/profile/edit"
                className="flex items-center gap-3 rounded-xl px-3 py-3 font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                onClick={() => setMenuOpen(false)}
              >
                <UserCog className="h-4 w-4" aria-hidden="true" />
                Edit Profile
              </a>
              <a
                href="#/patient/profile/info"
                className="flex items-center gap-3 rounded-xl px-3 py-3 font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                onClick={() => setMenuOpen(false)}
              >
                <IdCard className="h-4 w-4" aria-hidden="true" />
                Check Info
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardTopbar;

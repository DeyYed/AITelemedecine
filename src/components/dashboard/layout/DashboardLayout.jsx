import React, { useState } from "react";
import DashboardSidebar from "./DashboardSidebar.jsx";
import DashboardTopbar from "./DashboardTopbar.jsx";

const DashboardLayout = ({ activePath, patientName = "Juan", children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
        <DashboardSidebar activePath={activePath} className="hidden h-full flex-col lg:flex" />

        {/* Mobile sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-72 transform bg-white shadow-xl transition-transform duration-300 lg:hidden ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <DashboardSidebar activePath={activePath} className="flex h-full flex-col" />
        </div>
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            onClick={closeSidebar}
          />
        )}

        <div className="flex h-full flex-1 flex-col overflow-hidden">
          <DashboardTopbar
            patientName={patientName}
            onToggleSidebar={toggleSidebar}
          />
          <main className="flex-1 overflow-y-auto px-4 py-8 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl space-y-6 pb-12">{children}</div>
          </main>
        </div>
      </div>
  );
};

export default DashboardLayout;

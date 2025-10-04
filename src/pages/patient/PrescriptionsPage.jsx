import React, { useState } from "react";
import DashboardLayout from "../../components/dashboard/layout/DashboardLayout.jsx";
import { patientPrescriptions } from "../../data/patientDashboardData.js";
import { ClipboardList } from "lucide-react";
import PrescriptionDetailModal from "../../components/dashboard/prescriptions/PrescriptionDetailModal.jsx";

const PrescriptionsPage = () => {
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  const openDetail = (prescription) => {
    setSelectedPrescription(prescription);
  };

  const closeDetail = () => {
    setSelectedPrescription(null);
  };

  return (
    <DashboardLayout activePath="/patient/prescriptions" patientName="Juan">
      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-slate-900">Prescriptions</h2>
          <p className="text-sm text-slate-600">
            Track your active and historical prescriptions from your physicians.
          </p>
        </div>
        <div className="grid gap-4">
          {patientPrescriptions.map((prescription) => (
            <button
              key={prescription.id}
              type="button"
              onClick={() => openDetail(prescription)}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm shadow-sky-100 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                    <ClipboardList className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-sky-600">{prescription.doctor}</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">{prescription.medicine}</p>
                    <p className="text-sm text-slate-600">{prescription.dosage}</p>
                  </div>
                </div>
                <span className="self-start rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold text-sky-600 sm:self-auto">
                  {prescription.id}
                </span>
              </div>
              <p className="mt-4 text-xs text-slate-500">{prescription.instructions}</p>
            </button>
          ))}
        </div>
      </section>
      <PrescriptionDetailModal
        isOpen={Boolean(selectedPrescription)}
        prescription={selectedPrescription}
        onClose={closeDetail}
      />
    </DashboardLayout>
  );
};

export default PrescriptionsPage;

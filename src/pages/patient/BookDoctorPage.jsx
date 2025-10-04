import React, { useState } from "react";
import DashboardLayout from "../../components/dashboard/layout/DashboardLayout.jsx";
import { doctorsDirectory } from "../../data/patientDashboardData.js";
import { CheckCircle, CalendarPlus } from "lucide-react";

const BookDoctorPage = () => {
  const [confirmation, setConfirmation] = useState(null);

  const handleBookDoctor = (doctor) => {
    setConfirmation({
      doctorName: doctor.name,
      scheduled: doctor.availability,
    });

    // TODO: Replace with API booking logic
    console.log("Appointment booked with", doctor.name);
  };

  return (
    <DashboardLayout activePath="/patient/book" patientName="Juan">
      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-slate-900">Book a doctor</h2>
          <p className="text-sm text-slate-600">
            Browse available specialists and book a virtual or in-person visit.
          </p>
        </div>

        {confirmation && (
          <div className="flex items-start gap-3 rounded-3xl border border-sky-200 bg-sky-50 px-6 py-4 text-sm text-sky-700">
            <CheckCircle className="mt-1 h-5 w-5" aria-hidden="true" />
            <div>
              <p className="font-semibold">Appointment booked!</p>
              <p className="mt-1 text-xs text-slate-600">
                {confirmation.doctorName} — {confirmation.scheduled}
              </p>
            </div>
          </div>
        )}

        <div className="grid gap-4">
          {doctorsDirectory.map((doctor) => (
            <div
              key={doctor.id}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-sky-100 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{doctor.name}</h3>
                <p className="text-sm text-sky-600">{doctor.specialization}</p>
                <p className="mt-2 text-xs text-slate-500">{doctor.availability}</p>
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700 sm:w-auto"
                onClick={() => handleBookDoctor(doctor)}
              >
                <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default BookDoctorPage;

import React, { useState } from "react";
import DashboardLayout from "../../components/dashboard/layout/DashboardLayout.jsx";

const ProfileInfoPage = () => {
  const [formData, setFormData] = useState({
    fullName: "Juan Dela Cruz",
    email: "juan@example.com",
    phone: "+63 900 123 4567",
    birthDate: "1992-04-12",
    gender: "male",
    addressLine: "123 Mabini Street",
    city: "Manila",
    province: "Metro Manila",
    postalCode: "1000",
    emergencyContact: "Maria Dela Cruz",
    emergencyPhone: "+63 917 765 4321",
    medicalNotes: "Hypertension, monitoring cholesterol levels.",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Health information saved. Your doctor can now review your updated profile.");
    // TODO: Persist patient info to backend
    console.log("Patient info updated", formData);
  };

  return (
    <DashboardLayout activePath="/patient/profile/info" patientName={formData.fullName}>
      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-slate-900">Patient information</h2>
          <p className="text-sm text-slate-600">
            Complete your personal details so clinicians can better understand your health background.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {status && (
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {status}
            </div>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="text-sm font-medium text-slate-600">Full Name</span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="Complete name"
              />
            </label>
            <label>
              <span className="text-sm font-medium text-slate-600">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="e.g. juan@example.com"
              />
            </label>
            <label>
              <span className="text-sm font-medium text-slate-600">Phone Number</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="Mobile or landline"
              />
            </label>
            <label>
              <span className="text-sm font-medium text-slate-600">Birth Date</span>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </label>
            <label>
              <span className="text-sm font-medium text-slate-600">Gender</span>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </label>
            <label>
              <span className="text-sm font-medium text-slate-600">Emergency Contact</span>
              <input
                type="text"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="Contact person"
              />
            </label>
            <label>
              <span className="text-sm font-medium text-slate-600">Emergency Contact Number</span>
              <input
                type="tel"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="Contact number"
              />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label>
              <span className="text-sm font-medium text-slate-600">Address Line</span>
              <input
                type="text"
                name="addressLine"
                value={formData.addressLine}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="House number, street"
              />
            </label>
            <label>
              <span className="text-sm font-medium text-slate-600">City / Municipality</span>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="e.g. Manila"
              />
            </label>
            <label>
              <span className="text-sm font-medium text-slate-600">Province / Region</span>
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="e.g. Metro Manila"
              />
            </label>
            <label>
              <span className="text-sm font-medium text-slate-600">Postal Code</span>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="ZIP code"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-sm font-medium text-slate-600">Medical Notes</span>
            <textarea
              name="medicalNotes"
              value={formData.medicalNotes}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="Add allergies, ongoing treatments, or health goals"
            />
          </label>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700 sm:w-auto"
            >
              Save information
            </button>
          </div>
        </form>
      </section>
    </DashboardLayout>
  );
};

export default ProfileInfoPage;

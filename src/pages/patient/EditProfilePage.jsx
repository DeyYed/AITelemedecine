import React, { useState } from "react";
import DashboardLayout from "../../components/dashboard/layout/DashboardLayout.jsx";

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "Juan Dela Cruz",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please try again.");
      setStatus("");
      return;
    }

    setError("");
    setStatus("Profile updated successfully. Your changes are saved.");
    // TODO: Integrate with user profile update API
    console.log("Profile updated", formData);
  };

  return (
    <DashboardLayout activePath="/patient/profile/edit" patientName={formData.name}>
      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-slate-900">Edit your profile</h2>
          <p className="text-sm text-slate-600">
            Update your personal information and account credentials.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {error && (
            <div className="rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-600">
              {error}
            </div>
          )}
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
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="Juan Dela Cruz"
              />
            </label>
            <label>
              <span className="text-sm font-medium text-slate-600">New Password</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="Enter new password"
                autoComplete="new-password"
              />
            </label>
            <label>
              <span className="text-sm font-medium text-slate-600">Confirm Password</span>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="Re-enter new password"
                autoComplete="new-password"
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </DashboardLayout>
  );
};

export default EditProfilePage;

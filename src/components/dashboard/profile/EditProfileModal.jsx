import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const EditProfileModal = ({ isOpen, onClose, onSave, initialName = "Juan" }) => {
  const [formData, setFormData] = useState({
    name: initialName,
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setFormData((prev) => ({ ...prev, name: initialName }));
  }, [initialName]);

  useEffect(() => {
    if (!isOpen) {
      setError("");
      setStatus("");
      setFormData((prev) => ({ ...prev, password: "", confirmPassword: "" }));
    }
  }, [isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus("");
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please try again.");
      setStatus("");
      return;
    }

    setError("");
    setStatus("Profile updated successfully!");
    onSave({ name: formData.name, password: formData.password });
    
    setTimeout(() => {
      onClose();
      setStatus("");
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">Edit your profile</h2>
          <p className="mt-1 text-sm text-slate-600">
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

          <label className="block">
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

          <label className="block">
            <span className="text-sm font-medium text-slate-600">New Password</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="Enter new password (optional)"
              autoComplete="new-password"
            />
          </label>

          <label className="block">
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

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;

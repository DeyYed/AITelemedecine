import React from "react";
import { AlertTriangle } from "lucide-react";

const AuthAlert = ({ message }) => {
  if (!message) return null;

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-600">
      <AlertTriangle className="mt-0.5 h-5 w-5" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
};

export default AuthAlert;

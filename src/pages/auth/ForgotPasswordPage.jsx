import React, { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout.jsx";
import AuthTextField from "../../components/auth/AuthTextField.jsx";
import AuthButton from "../../components/auth/AuthButton.jsx";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Hook up forgot password API
    console.log("Password reset link requested for", email);
    setStatus("If your email is registered, you will receive a reset link shortly.");
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email and we’ll send you instructions to reset your password."
      footer={
        <span>
          Remembered your password?{" "}
          <a href="#/auth/login" className="font-semibold text-sky-600 hover:text-sky-700">
            Back to Login
          </a>
        </span>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="space-y-4">
          <AuthTextField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
        <AuthButton type="submit">Send Reset Link</AuthButton>
        {status && (
          <p className="text-center text-sm text-slate-600">
            {status}
          </p>
        )}
      </form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;

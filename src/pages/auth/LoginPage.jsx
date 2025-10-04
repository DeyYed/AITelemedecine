import React, { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout.jsx";
import AuthTextField from "../../components/auth/AuthTextField.jsx";
import AuthButton from "../../components/auth/AuthButton.jsx";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Integrate login API
    console.log("Login form submitted", formData);
    window.location.hash = "/patient/dashboard";
  };

  return (
    <AuthLayout
      title="Login to Your Account"
      subtitle="Access consultations, prescriptions, and follow-up care in one place."
      footer={
        <div className="space-y-1">
          <div>
            <a
              href="#/auth/forgot-password"
              className="font-semibold text-sky-600 hover:text-sky-700"
            >
              Forgot Password?
            </a>
          </div>
          <span>
            Don’t have an account?{" "}
            <a
              href="#/auth/register"
              className="font-semibold text-sky-600 hover:text-sky-700"
            >
              Sign Up
            </a>
          </span>
        </div>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="space-y-4">
          <AuthTextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
          />
          <AuthTextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            autoComplete="current-password"
          />
        </div>
        <AuthButton type="submit">Login</AuthButton>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;

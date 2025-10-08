import React, { useEffect, useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout.jsx";
import AuthTextField from "../../components/auth/AuthTextField.jsx";
import AuthButton from "../../components/auth/AuthButton.jsx";
import AuthAlert from "../../components/auth/AuthAlert.jsx";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) {
      setError("");
    }
  };

  useEffect(() => {
    if (error && formData.password === formData.confirmPassword) {
      setError("");
    }
  }, [error, formData.password, formData.confirmPassword]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const pw = formData.password?.trim();
    const cpw = formData.confirmPassword?.trim();
    if (!pw || pw.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (pw !== cpw) {
      setError("Password and confirmation do not match.");
      return;
    }

    setError("");
    // TODO: Integrate API call for registration
    console.log("Register form submitted", formData);
    window.location.hash = "/patient/dashboard";
  };

  return (
    <AuthLayout
      title="Create Your Patient Account"
      subtitle="Join thousands of patients receiving trusted online care."
      footer={
        <span>
          Already have an account?{" "}
          <a href="#/auth/login" className="font-semibold text-sky-600 hover:text-sky-700">
            Login
          </a>
        </span>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <AuthAlert message={error} />
        <div className="space-y-4">
          <AuthTextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Dey Flores"
            autoComplete="name"
          />
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
            placeholder="Enter a secure password"
            autoComplete="new-password"
          />
          <AuthTextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-type your password"
            autoComplete="new-password"
          />
        </div>
        <AuthButton type="submit">Sign Up</AuthButton>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;

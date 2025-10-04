import React, { useEffect, useMemo, useState } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage.jsx";
import DashboardHome from "./pages/patient/DashboardHome.jsx";
import BookDoctorPage from "./pages/patient/BookDoctorPage.jsx";
import AppointmentsPage from "./pages/patient/AppointmentsPage.jsx";
import PrescriptionsPage from "./pages/patient/PrescriptionsPage.jsx";
import EditProfilePage from "./pages/patient/EditProfilePage.jsx";
import ProfileInfoPage from "./pages/patient/ProfileInfoPage.jsx";
import AiAssistant from "./components/assistant/AiAssistant.jsx";

const routes = {
  "/": LandingPage,
  "/auth/login": LoginPage,
  "/auth/register": RegisterPage,
  "/auth/forgot-password": ForgotPasswordPage,
  "/patient/dashboard": DashboardHome,
  "/patient/book": BookDoctorPage,
  "/patient/appointments": AppointmentsPage,
  "/patient/prescriptions": PrescriptionsPage,
  "/patient/profile/edit": EditProfilePage,
  "/patient/profile/info": ProfileInfoPage,
};

const getPathFromHash = () => {
  if (typeof window === "undefined") return "/";
  const hashPath = window.location.hash.replace(/^#/, "") || "/";
  return routes[hashPath] ? hashPath : "/";
};

const App = () => {
  const [currentPath, setCurrentPath] = useState(getPathFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getPathFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const PageComponent = useMemo(() => routes[currentPath] || LandingPage, [currentPath]);

  return (
    <>
      <PageComponent />
      <AiAssistant currentPath={currentPath} />
    </>
  );
};

export default App;
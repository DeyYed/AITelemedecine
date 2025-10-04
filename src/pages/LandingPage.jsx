import React from "react";
import Header from "../components/landing/Header.jsx";
import Hero from "../components/landing/Hero.jsx";
import Features from "../components/landing/Features.jsx";
import HowItWorks from "../components/landing/HowItWorks.jsx";
import CallToAction from "../components/landing/CallToAction.jsx";
import Footer from "../components/landing/Footer.jsx";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;

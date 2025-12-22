import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { ImageLightboxProvider } from "./components/ImageLightbox";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";
import Chatwidget from "./components/ChatWidget";

import Index from "./pages/Index";
import About from "./pages/About";
import HairRejuvenation from "./pages/HairRejuvenation";
import ScalpPigmentation from "./pages/ScalpPigmentation";
import PRPTherapy from "./pages/PRP";
import Hair from "./pages/hair";
import Diagnostic from "./pages/Diagnostic";
import BlogList from "./pages/Blog/BlogList";
import BlogDetail from "./pages/Blog/BlogDetail";
import Results from "./pages/Results";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";
import NotFound from "./pages/NotFound";
import FolitreatHairTreatment from "./pages/folitreat";
import HairTransplantFUE from "./pages/Child/fueTransplant";
import GFC from "./pages/Child/GFC";
import Mesotherapy from "./pages/Child/mesotherapy";
import Exogro from "./pages/Child/exogro";
import IVHairTherapy from "./pages/Child/IVhair";
import Beforeafter from "./pages/Child/beforeafter";
import Trichoscopy from "./pages/trichoscopy";
import HairDensity from "./pages/HairDensity";
import BloodHormonalTests from "./pages/BloodTests";
import GeneticAssesment from "./pages/GeneticAssesment";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MedicalDisclaimer from "./pages/MedicalDisclaimer";

import AdminLogin from "./components/adminLogin";
import AdminApp from "./components/adminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import EnquiryModal from "./components/EnquiryModal";

const queryClient = new QueryClient();

// ✅ App content that can use useLocation()
const AppContent: React.FC = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const isAdminPage = location.pathname.startsWith("/admin");

  // ✅ Pages where Chatwidget should be hidden
  const hideChatOn = [
    "/admin",
    "/terms",
    "/privacy-policy",
    "/medical-disclaimer",
  ];

  const shouldHideChat = hideChatOn.some((path) =>
    location.pathname.startsWith(path)
  );

  const handleClose = () => setShowModal(false);
  const handleSubmit = (data: any) => {
    console.log("Enquiry submitted:", data);
    setShowModal(false);
  };

  const handleLogin = () => {
    localStorage.setItem("isAdminLoggedIn", "true");
    window.location.href = "/admin/dashboard";
  };

  // 🕒 Show enquiry modal after 5s (only once per session)
  useEffect(() => {
    if (!isAdminPage) {
      const hasSeenModal = sessionStorage.getItem("hasSeenModal");
      if (!hasSeenModal) {
        const timer = setTimeout(() => {
          setShowModal(true);
          sessionStorage.setItem("hasSeenModal", "true");
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [isAdminPage]);

  return (
    <>
      {!isAdminPage && (
        <EnquiryModal
          isOpen={showModal}
          onClose={handleClose}
          onSubmit={handleSubmit}
          treatment="Consultation"
        />
      )}

      <Routes>
        {/* 🌐 Public pages */}
        <Route path="/" element={<Index />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/hair-treatments/*" element={<Hair />} />
        <Route path="/diagnostic/*" element={<Diagnostic />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/results/*" element={<Results />} />
        <Route path="/careers/*" element={<Careers />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/testimonials" element={<Results />} />
        <Route path="*" element={<NotFound />} />

        {/* ⚖️ Legal Pages */}
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />

        {/* 💇‍♀️ Treatments */}
        <Route path="/folitreat-treatment" element={<FolitreatHairTreatment />} />
        <Route path="/gfc-treatment" element={<GFC />} />
        <Route path="/mesotherapy" element={<Mesotherapy />} />
        <Route path="/iv-hair-therapy" element={<IVHairTherapy />} />
        <Route path="/prp-treatment" element={<PRPTherapy />} />
        <Route path="/scalp-pigmentation" element={<ScalpPigmentation />} />
        <Route path="/exogro" element={<Exogro />} />
        <Route path="/results/before-after" element={<Beforeafter />} />
        <Route path="/trichoscopy" element={<Trichoscopy />} />
        <Route path="/hair-density" element={<HairDensity />} />
        <Route path="/blood-hormonal" element={<BloodHormonalTests />} />
        <Route path="/genetic-assessment" element={<GeneticAssesment />} />
        <Route path="/hair-rejuvenation" element={<HairRejuvenation />} />
        <Route path="/fue-transplant" element={<HairTransplantFUE />} />

        <Route path="/admin/login" element={<AdminLogin onLogin={handleLogin} />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminApp />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* 💬 Conditionally show Chatwidget */}
      {!shouldHideChat && <Chatwidget />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ImageLightboxProvider>
          <BrowserRouter>
            <ScrollToTop />
            <ScrollToHash />
            <AppContent />
          </BrowserRouter>
        </ImageLightboxProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
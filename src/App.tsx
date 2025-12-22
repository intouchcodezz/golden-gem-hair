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
import AdminApp from "./components/AdminApp";
import ProtectedRoute from "./components/ProtectedRoute";
import EnquiryModal from "./components/EnquiryModal";

import AddBlog from "./pages/Admin/AddBlog";
import BlogAdminList from "./pages/Admin/BlogAdminList";
import EditBlog from "./pages/Admin/EditBlog";

const queryClient = new QueryClient();

/* ---------------- App Content ---------------- */

const AppContent: React.FC = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const isAdminPage = location.pathname.startsWith("/admin");

  const hideChatOn = [
    "/admin",
    "/terms",
    "/privacy-policy",
    "/medical-disclaimer",
  ];

  const shouldHideChat = hideChatOn.some((p) =>
    location.pathname.startsWith(p)
  );

  useEffect(() => {
    if (!isAdminPage) {
      const seen = sessionStorage.getItem("hasSeenModal");
      if (!seen) {
        const t = setTimeout(() => {
          setShowModal(true);
          sessionStorage.setItem("hasSeenModal", "true");
        }, 5000);
        return () => clearTimeout(t);
      }
    }
  }, [isAdminPage]);

  return (
    <>
      {!isAdminPage && (
        <EnquiryModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={() => setShowModal(false)}
          treatment="Consultation"
        />
      )}

      <Routes>
        {/* Public */}
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
        <Route path="*" element={<NotFound />} />

        {/* Legal */}
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />

        {/* Treatments */}
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

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminApp />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/blogs"
          element={
            <ProtectedRoute>
              <BlogAdminList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/blogs/add"
          element={
            <ProtectedRoute>
              <AddBlog />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/blogs/edit/:id"
          element={
            <ProtectedRoute>
              <EditBlog />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!shouldHideChat && <Chatwidget />}
    </>
  );
};

/* ---------------- App Wrapper ---------------- */

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

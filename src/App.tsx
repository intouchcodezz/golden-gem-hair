import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { ImageLightboxProvider } from "./components/ImageLightbox";

import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";
import ChatWidget from "./components/ChatWidget";
import EnquiryModal from "./components/EnquiryModal";

/* -------- Pages -------- */
import Index from "./pages/Index";
import About from "./pages/About";
import Hair from "./pages/hair";
import Diagnostic from "./pages/Diagnostic";
import BlogList from "./pages/Blog/BlogList";
import BlogDetail from "./pages/Blog/BlogDetail";
import Results from "./pages/Results";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";
import NotFound from "./pages/NotFound";

/* -------- Treatments -------- */
import HairRejuvenation from "./pages/HairRejuvenation";
import ScalpPigmentation from "./pages/ScalpPigmentation";
import PRPTherapy from "./pages/PRP";
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

/* -------- Legal -------- */
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MedicalDisclaimer from "./pages/MedicalDisclaimer";

/* -------- Admin -------- */
import AdminApp from "./components/AdminApp";
import AdminDashboard from "./components/adminDashboard";
import AdminLogin from "./components/adminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogAdminList from "./pages/Admin/BlogAdminList";
import AddBlog from "./pages/Admin/AddBlog";
import EditBlog from "./pages/Admin/EditBlog";

/* ----------------------------- */

const queryClient = new QueryClient();

/* ================= App Content ================= */

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
          onClose={() => setShowModal(false)}
          onSubmit={() => setShowModal(false)}
          treatment="Consultation"
        />
      )}

      <Routes>
        {/* -------- Public -------- */}
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

        {/* -------- Legal -------- */}
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />

        {/* -------- Treatments -------- */}
        <Route
          path="/folitreat-treatment"
          element={<FolitreatHairTreatment />}
        />
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

        {/* -------- Admin Login -------- */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* -------- Admin Protected -------- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminApp />
            </ProtectedRoute>
          }
        >
          {/* Dashboard as index route */}
          <Route index element={<AdminDashboard />} />

          {/* Blog management */}
          <Route path="blogs" element={<BlogAdminList />} />
          <Route path="blogs/add" element={<AddBlog />} />
          <Route path="blogs/edit/:id" element={<EditBlog />} />
        </Route>

        {/* -------- 404 -------- */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!shouldHideChat && <ChatWidget />}
    </>
  );
};

/* ================= App Wrapper ================= */

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
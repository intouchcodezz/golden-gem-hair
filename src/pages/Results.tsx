import Footer from "@/components/Footer";
import Testimonials from "./Child/testimonials";
import Photos from "./Child/beforeafter"
import { Routes, Route } from "react-router-dom";

const Results = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="photos" element={<Photos />} />
          <Route path="patient-testimonials" element={<Testimonials />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
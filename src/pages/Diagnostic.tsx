import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Routes, Route } from "react-router-dom";
import HairAnalysis from "../pages/Child/HairAnalysis"
import DigitalMicroscopy from "../pages/Child/AdvancedDiagnostics";
// import Trichoscopy from "./diagnostic/Trichoscopy";
import NotFound from "./NotFound";

const Diagnostic = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="hair-analysis" element={<HairAnalysis />} />
          <Route path="digital-microscopy" element={<DigitalMicroscopy />} />
          {/* <Route path="trichoscopy" element={<Trichoscopy />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Advanced Hair & Scalp Diagnostics
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Comprehensive assessment and testing for accurate diagnosis
          </p>
        </div>

          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="card-treatment">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Hair Analysis</h3>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li>• Hair Shaft Analysis</li>
                  <li>• Hair Density Measurement</li>
                  <li>• Hair Strength Testing</li>
                  <li>• Microscopic Examination</li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>

            <div className="card-treatment">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Scalp Examination</h3>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li>• Visual Assessment</li>
                  <li>• pH Testing</li>
                  <li>• Sebum Analysis</li>
                  <li>• Inflammation Detection</li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>

            <div className="card-treatment">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Digital Microscopy</h3>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li>• High-Resolution Imaging</li>
                  <li>• Hair Follicle Analysis</li>
                  <li>• Miniaturization Detection</li>
                  <li>• Progress Monitoring</li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>

            <div className="card-treatment">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Trichoscopy</h3>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li>• Dermoscopic Evaluation</li>
                  <li>• Phototrichogram</li>
                  <li>• Hair Pattern Analysis</li>
                  <li>• Detailed Documentation</li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>

            <div className="card-treatment">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Blood Tests & Investigations</h3>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li>• Hormonal Assessment</li>
                  <li>• Nutritional Analysis</li>
                  <li>• Thyroid Function Tests</li>
                  <li>• Iron Studies</li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>

            <div className="card-treatment">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Consultation Process</h3>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li>• Initial Assessment</li>
                  <li>• Medical History Review</li>
                  <li>• Treatment Planning</li>
                  <li>• Follow-up Schedule</li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready for Your Diagnostic Assessment?</h3>
            <p className="mb-6">Get a comprehensive evaluation of your hair and scalp health with our advanced diagnostic services.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Diagnostic Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Call for Consultation
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Diagnostic;
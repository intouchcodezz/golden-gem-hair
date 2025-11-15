import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import ScalpCare from "./Child/ScalpCare";
import Surgical from "./Child/Surgical";
import ScientificApproach from "./Child/GFC";
import NotFound from "./NotFound";
import GrowthTherapies from "./Child/GrowthTherapies";
import HairRejuvenation from "./HairRejuvenation";
import HairTransplantFUE from "./Child/fueTransplant";

const Trichology = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Always on top */}
      <Header />

      {/* Routed pages in the middle */}
      <main className="flex-grow">
        <Routes>
          <Route path="growth-therapies" element={<GrowthTherapies />} />
          <Route path="hair-rejuvenation" element={<HairRejuvenation />} />
          <Route path="scalp-care" element={<ScalpCare />} />
          <Route path="surgical" element={<Surgical />} />
          <Route path="fue-transplant" element={<HairTransplantFUE />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Trichology;
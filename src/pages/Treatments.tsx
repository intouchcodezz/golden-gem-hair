import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const Treatments = () => {
  const treatmentCategories = [
    {
      title: "Hair Loss Treatments",
      description: "Comprehensive solutions for male and female pattern baldness",
      treatments: ["Minoxidil Therapy", "Finasteride Treatment", "DHT Blockers", "Topical Solutions"]
    },
    {
      title: "Scalp Disorders",
      description: "Specialized treatments for various scalp conditions",
      treatments: ["Dandruff Treatment", "Scalp Psoriasis", "Seborrheic Dermatitis", "Fungal Infections"]
    },
    {
      title: "Hair Thinning Solutions",
      description: "Advanced therapies to improve hair density and volume",
      treatments: ["Density Improvement", "Volume Enhancement", "Preventive Care", "Maintenance Programs"]
    },
    {
      title: "Medical Treatments",
      description: "Prescription medications and hormone therapy",
      treatments: ["Prescription Medications", "Hormone Therapy", "Supplement Protocols", "Combination Therapy"]
    },
    {
      title: "Laser Therapy",
      description: "Low-level laser therapy for hair growth stimulation",
      treatments: ["LLLT Sessions", "Red Light Therapy", "Photobiomodulation", "Treatment Schedules"]
    },
    {
      title: "Platelet Rich Plasma (PRP)",
      description: "Regenerative therapy using your body's healing factors",
      treatments: ["PRP Process", "Treatment Sessions", "Recovery Guidelines", "Maintenance Protocol"]
    },
    {
      title: "Hair Transplant Consultation",
      description: "Expert consultation for surgical hair restoration",
      treatments: ["FUE Method", "FUT Method", "Referral Partners", "Pre/Post Care"]
    },
    {
      title: "Maintenance Programs",
      description: "Ongoing care for sustained results",
      treatments: ["Follow-up Care", "Progress Monitoring", "Lifestyle Guidance", "Product Recommendations"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Hair & Scalp Treatments</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive treatment solutions for all your hair and scalp concerns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {treatmentCategories.map((category, index) => (
              <Card
                key={index}
                className="card-treatment hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Scissors className="text-primary w-5 h-5" />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {category.treatments.map((treatment, idx) => (
                      <li key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {treatment}
                      </li>
                    ))}
                  </ul>

                  <Button className="btn-treatment w-full">
                    View Details
                  </Button>

                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-4">Not Sure Which Treatment is Right for You?</h3>
              <p className="text-muted-foreground mb-6">
                Our experts will assess your condition and recommend the most effective treatment plan
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-treatment">
                Schedule Consultation
              </Button>
              <Button className="btn-treatment-outline">
                View Treatment Guide
              </Button>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Treatments;
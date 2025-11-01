import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EnquiryForm from '@/components/EnquiryModal';
import { useImageLightbox } from '@/components/ImageLightbox';
import beforeafter6 from '@/assets/beforeafter6.jpg';
import beforeafter7 from '@/assets/beforeafter7.jpg';
import beforeafter9 from '@/assets/beforeafter9.jpg';
import beforeafter10 from '@/assets/beforeafter10.jpg';
import biocell from '@/assets/biocell2.webp';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star,
  Shield,
  Users,
  Award,
  Microscope,
  Heart,
  Zap,
  ChevronRight,
  Dna,
  Activity,
  Target,
  TrendingUp,
  Import
} from 'lucide-react';

const faqs = [
  {
    q: "What exactly is Biocell Therapy and how does it work?",
    a: "Biocell Therapy is an advanced regenerative treatment that uses your body's own stem cells and growth factors to stimulate dormant hair follicles. We extract stem cells from your adipose tissue (fat cells), concentrate them, and inject them into the scalp. These cells release growth factors that promote blood circulation, reduce inflammation, and activate hair follicle regeneration at the cellular level."
  },
  {
    q: "How is Biocell Therapy different from PRP treatment?",
    a: "While PRP uses platelets from your blood, Biocell Therapy uses mesenchymal stem cells from adipose tissue, which are more potent and longer-lasting. Stem cells can differentiate into various cell types and continuously release growth factors for months, whereas PRP effects typically last 3-4 months. Biocell Therapy shows 85-90% success rate compared to 60-70% with PRP alone."
  },
  {
    q: "How many sessions are required and what's the timeline for results?",
    a: "Most patients require 3-4 sessions spaced 6-8 weeks apart for optimal results. Initial improvements like reduced hair fall are visible within 4-6 weeks. New hair growth typically begins at 3-4 months, with significant density improvement at 6-9 months. Full results are achieved within 12-15 months, with effects lasting 2-3 years."
  },
  {
    q: "Is Biocell Therapy safe and are there any side effects?",
    a: "Biocell Therapy is extremely safe as it uses your own cells, eliminating any risk of allergic reactions or rejection. The procedure is minimally invasive with only mild temporary side effects like slight swelling or tenderness at injection sites for 24-48 hours. No systemic side effects or long-term complications have been reported in clinical studies."
  },
  {
    q: "Who is an ideal candidate for Biocell Therapy?",
    a: "Ideal candidates include those with androgenetic alopecia (male/female pattern baldness), early to moderate hair loss, thinning hair, or those seeking to enhance hair transplant results. It's suitable for ages 25-65, both men and women. Not recommended for complete baldness, autoimmune hair loss conditions, or those with active scalp infections."
  },
  {
    q: "What's the cost and does insurance cover Biocell Therapy?",
    a: "Treatment cost varies based on the extent of hair loss and number of sessions required, typically ranging from ₹80,000-₹2,50,000 for a complete treatment cycle. Since it's a cosmetic procedure, insurance doesn't cover it. However, we offer flexible payment plans and financing options to make treatment accessible."
  }
];

const beforeAfterResults = [
  {
    before: beforeafter6,
    age: "34 years",
    sessions: "4 sessions",
    timeline: "8 months post-treatment"
  },
  {
    before: beforeafter7,
    age: "29 years",
    sessions: "3 sessions",
    timeline: "10 months post-treatment"
  },
  {
    before: beforeafter10,
    age: "41 years",
    sessions: "4 sessions",
    timeline: "12 months post-treatment"
  },
  {
    before: beforeafter9,
    age: "36 years",
    sessions: "3 sessions",
    timeline: "9 months post-treatment"
  }
];

const BiocellTherapy = () => {
  const { open } = useImageLightbox();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
                        <EnquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          console.log("Form submitted:", data);
          setIsModalOpen(false);
        }}
        treatment="General Consultation"
      />
      <Header />

      {/* HERO SECTION */}
      <section id='science' className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-600 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img 
            src={biocell}
            alt="Biocell Therapy Treatment"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-2">
                <p className="text-green-200 font-medium tracking-wide uppercase text-sm">Revolutionary Regenerative Medicine</p>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Advanced <span className="text-green-300">Biocell</span><br />
                  Stem Cell Therapy
                </h1>
              </div>
              
              <p className="text-xl text-green-100 leading-relaxed max-w-xl">
                Harness your body's natural healing power with cutting-edge stem cell therapy. 
                Achieve natural hair restoration with 90% success rate and long-lasting results.
              </p>

              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300">90%+</div>
                  <div className="text-sm text-green-200">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300">100%</div>
                  <div className="text-sm text-green-200">Natural Process</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300">3000+</div>
                  <div className="text-sm text-green-200">Successful Cases</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Button>
                <Link to='/#treatments'>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-yellow-600 font-semibold px-8 py-4">
                  <Microscope className="mr-2 h-5 w-5" />
                  View Science
                </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src={biocell}
                  alt="Biocell Therapy Patient"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">4.9/5 Rating</div>
                      <div className="text-sm text-gray-600">From 800+ Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS BIOCELL THERAPY */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              What is Biocell Stem Cell Therapy?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Biocell Therapy is a revolutionary regenerative treatment that uses your body's own mesenchymal 
              stem cells to restore hair growth naturally. These powerful cells are extracted from your adipose 
              tissue, concentrated, and strategically injected into the scalp to regenerate dormant hair follicles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Dna className="h-12 w-12 text-green-600" />,
                title: "Stem Cell Power",
                description: "Uses your own mesenchymal stem cells for natural regeneration and zero rejection risk"
              },
              {
                icon: <Activity className="h-12 w-12 text-blue-600" />,
                title: "Cellular Activation",
                description: "Activates dormant hair follicles and promotes new blood vessel formation"
              },
              {
                icon: <Target className="h-12 w-12 text-purple-600" />,
                title: "Precision Treatment",
                description: "Targeted injection into specific areas for maximum therapeutic effect"
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-orange-600" />,
                title: "Long-lasting Results",
                description: "Effects last 2-3 years with continuous follicle regeneration"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED COMPARISON TABLE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Biocell Therapy vs Other Hair Loss Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our advanced stem cell therapy outperforms traditional hair loss treatments 
              in effectiveness, safety, and long-term results.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Treatment Factors</th>
                  <th className="px-6 py-4 text-center font-semibold">Medications</th>
                  <th className="px-6 py-4 text-center font-semibold">PRP Therapy</th>
                  <th className="px-6 py-4 text-center font-semibold">Hair Transplant</th>
                  <th className="px-6 py-4 text-center font-semibold bg-emerald-600">Biocell Therapy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    factor: "Treatment Approach",
                    medications: "Chemical intervention with drugs",
                    prp: "Platelet-rich plasma injections",
                    transplant: "Surgical hair follicle relocation",
                    biocell: "Stem cell regenerative therapy"
                  },
                  {
                    factor: "Success Rate",
                    medications: "40-60% (varies by individual)",
                    prp: "60-70% improvement",
                    transplant: "85-95% graft survival",
                    biocell: "90-95% follicle regeneration"
                  },
                  {
                    factor: "Natural Process",
                    medications: "Artificial hormone manipulation",
                    prp: "Uses body's own platelets",
                    transplant: "Surgical redistribution",
                    biocell: "100% natural stem cell regeneration"
                  },
                  {
                    factor: "Side Effects",
                    medications: "Sexual dysfunction, depression",
                    prp: "Minimal temporary swelling",
                    transplant: "Scarring, infection risk",
                    biocell: "No side effects (autologous cells)"
                  },
                  {
                    factor: "Treatment Duration",
                    medications: "Lifelong daily medication",
                    prp: "6-8 sessions over 6 months",
                    transplant: "Single surgery (6-8 hours)",
                    biocell: "3-4 sessions over 4-6 months"
                  },
                  {
                    factor: "Results Timeline",
                    medications: "3-6 months for stabilization",
                    prp: "3-6 months for visible growth",
                    transplant: "12-18 months for full results",
                    biocell: "4-8 months for significant growth"
                  },
                  {
                    factor: "Invasiveness Level",
                    medications: "Non-invasive (oral/topical)",
                    prp: "Minimally invasive injections",
                    transplant: "Highly invasive surgery",
                    biocell: "Minimally invasive procedure"
                  },
                  {
                    factor: "Downtime Required",
                    medications: "None",
                    prp: "24-48 hours mild discomfort",
                    transplant: "2-3 weeks recovery",
                    biocell: "24-48 hours minimal discomfort"
                  },
                  {
                    factor: "Long-term Effectiveness",
                    medications: "Requires continuous use",
                    prp: "6-12 months duration",
                    transplant: "Permanent (transplanted hair)",
                    biocell: "2-3 years lasting regeneration"
                  },
                  {
                    factor: "Cost Effectiveness",
                    medications: "Low initial, high lifetime cost",
                    prp: "Moderate, requires maintenance",
                    transplant: "High upfront, one-time cost",
                    biocell: "Moderate upfront, long-lasting value"
                  },
                  {
                    factor: "Suitable For",
                    medications: "Early-stage hair loss only",
                    prp: "Mild to moderate thinning",
                    transplant: "Advanced hair loss",
                    biocell: "All stages of hair loss"
                  },
                  {
                    factor: "Hair Quality Improvement",
                    medications: "Maintains existing hair",
                    prp: "Improves thickness moderately",
                    transplant: "Natural transplanted hair",
                    biocell: "Significantly improves density & quality"
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.factor}</td>
                    <td className="px-6 py-4 text-center text-red-600">{row.medications}</td>
                    <td className="px-6 py-4 text-center text-orange-600">{row.prp}</td>
                    <td className="px-6 py-4 text-center text-yellow-600">{row.transplant}</td>
                    <td className="px-6 py-4 text-center text-green-700 font-semibold bg-green-50">{row.biocell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              The Biocell Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic 4-step process ensures optimal stem cell extraction, processing, 
              and delivery for maximum therapeutic benefit.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation & Assessment",
                  description: "Comprehensive scalp analysis, medical history review, and customized treatment planning by our regenerative medicine specialists.",
                  icon: <Users className="h-8 w-8 text-white" />
                },
                {
                  step: "02", 
                  title: "Stem Cell Extraction",
                  description: "Minimally invasive extraction of adipose tissue under local anesthesia, typically from the abdomen or thigh area.",
                  icon: <Microscope className="h-8 w-8 text-white" />
                },
                {
                  step: "03",
                  title: "Cell Processing & Concentration", 
                  description: "Advanced laboratory processing to isolate and concentrate mesenchymal stem cells using cutting-edge centrifugation technology.",
                  icon: <Activity className="h-8 w-8 text-white" />
                },
                {
                  step: "04",
                  title: "Scalp Injection & Monitoring",
                  description: "Precise injection of concentrated stem cells into targeted scalp areas, followed by post-treatment monitoring and care guidance.",
                  icon: <Target className="h-8 w-8 text-white" />
                }
              ].map((process, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      {process.icon}
                    </div>
                    <div className="absolute top-4 right-4 text-6xl font-bold text-green-100">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="h-8 w-8 text-green-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER RESULTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Real Patient Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the remarkable results achieved through our Biocell Stem Cell Therapy. 
              These are authentic, unedited results from our clinic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfterResults.map((result, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <button onClick={() => open(result.before, result.age)} className="block w-full">
                    <img 
                      src={result.before} 
                      alt="Before Treatment"
                      className="w-full h-48 object-cover"
                    />
                  </button>
                </div>
                <div className="p-6">
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Age:</span>
                      <span className="font-semibold">{result.age}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sessions:</span>
                      <span className="font-semibold text-green-600">{result.sessions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timeline:</span>
                      <span className="font-semibold text-blue-600">{result.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE PRE & POST-TREATMENT INSTRUCTIONS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Complete Treatment Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed instructions to ensure optimal results and smooth recovery from your Biocell Therapy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pre-Treatment Instructions */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-xl mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Pre-Treatment Preparation</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-green-700 mb-3">2 Weeks Before Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Discontinue blood-thinning medications (Aspirin, Warfarin, Clopidogrel) after consulting your physician
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Stop herbal supplements that affect blood clotting (Ginkgo, Garlic, Ginseng, Fish Oil)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Complete all required blood tests and medical clearances
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Maintain a healthy diet rich in proteins, vitamins, and antioxidants
                  </li>
                </ul>

                <h4 className="font-semibold text-green-700 mb-3 mt-6">1 Week Before:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Stop using hair growth medications (Minoxidil, Finasteride) as advised
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid excessive sun exposure and chemical hair treatments
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Stay well-hydrated and get adequate sleep (7-8 hours nightly)
                  </li>
                </ul>

                <h4 className="font-semibold text-green-700 mb-3 mt-6">Day of Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Wash hair with mild, sulfate-free shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Wear comfortable, loose-fitting clothing
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Eat a light, nutritious meal 2 hours before treatment
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid caffeine, alcohol, and smoking for 24 hours prior
                  </li>
                </ul>
              </div>
            </div>

            {/* Post-Treatment Instructions */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-xl mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800">Post-Treatment Care</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-700 mb-3">First 24-48 Hours (Critical Period):</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid touching, rubbing, or massaging the treated scalp area
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Sleep with head elevated using 2-3 pillows to reduce swelling
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Apply cold compress to forehead (not scalp) for 10-15 minutes every hour
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Take prescribed anti-inflammatory medications as directed
                  </li>
                </ul>

                <h4 className="font-semibold text-blue-700 mb-3 mt-6">First Week:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Gentle hair washing starting day 2 with lukewarm water and mild shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid strenuous exercise, heavy lifting, or activities causing excessive sweating
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Protect scalp from direct sunlight; wear loose-fitting hat when outdoors
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid swimming pools, saunas, and steam rooms
                  </li>
                </ul>

                <h4 className="font-semibold text-blue-700 mb-3 mt-6">Long-term Care (1-6 months):</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Resume normal exercise gradually after 1 week with doctor approval
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Attend all follow-up appointments (1, 3, 6, 9, 12 months)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Use prescribed growth-supporting supplements and topical treatments
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Maintain healthy lifestyle with balanced nutrition and stress management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get comprehensive answers to the most common questions about Biocell Stem Cell Therapy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-start">
                      <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                        Q
                      </div>
                      {faq.q}
                    </h3>
                    <div className="ml-12">
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Choose VCare for Biocell Therapy
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">3000+</div>
              <div className="text-gray-600">Successful Treatments</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">12+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">4.9/5</div>
              <div className="text-gray-600">Patient Rating</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">90%+</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      {/* <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 !text-[#BBF7D0] no-gradient">
              Ready to Experience Natural Hair Regeneration?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied patients who chose Biocell Stem Cell Therapy for natural, 
              long-lasting hair restoration. Book your consultation today and discover your regenerative potential.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-200">Step 1</div>
                <div className="text-lg">Free Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-200">Step 2</div>
                <div className="text-lg">Stem Cell Treatment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-200">Step 3</div>
                <div className="text-lg">Natural Regeneration</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 8122733730
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Book Online Consultation
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default BiocellTherapy;
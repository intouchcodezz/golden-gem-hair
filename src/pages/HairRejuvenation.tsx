import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  Sparkles,
  Heart,
  Zap,
  ChevronRight,
  Leaf,
  Activity,
  Target,
  TrendingUp,
  Crown
} from 'lucide-react';
import EnquiryForm from '@/components/EnquiryModal';
import hairrejuvenation from '../assets/rejuvination.jpg';
import beforeafter1 from '../assets/beforeafter1.jpg';
import beforeafter2 from '../assets/beforeafter2.jpg';
import beforeafter3 from '../assets/beforeafter3.jpg';
import beforeafter4 from '../assets/beforeafter4.jpg';

const faqs = [
  {
    q: "What is Hair Rejuvenation therapy and how does it restore hair naturally?",
    a: "Hair Rejuvenation therapy is a comprehensive non-surgical treatment that combines multiple advanced techniques including micro-needling, growth factor infusion, laser therapy, and nutritional supplementation. This holistic approach stimulates blood circulation, awakens dormant hair follicles, and creates optimal conditions for natural hair growth by addressing the root causes of hair thinning and loss."
  },
  {
    q: "How is Hair Rejuvenation different from single-treatment approaches?",
    a: "Unlike single treatments like PRP or medications alone, Hair Rejuvenation uses a multi-modal approach combining 4-6 different therapies in each session. This synergistic effect provides superior results with 80-85% success rate. The treatment addresses hair loss from multiple angles - circulation, nutrition, follicle health, and scalp environment - for comprehensive restoration."
  },
  {
    q: "What does a typical Hair Rejuvenation session include?",
    a: "Each 90-minute session includes scalp analysis, micro-needling therapy, growth factor serum infusion, low-level laser therapy, scalp massage with essential oils, and customized nutritional supplementation. The treatment is painless and relaxing, often described as a 'spa experience' for your scalp with therapeutic benefits."
  },
  {
    q: "How many sessions are needed and when will I see results?",
    a: "Most patients require 6-8 sessions over 4-6 months for optimal results. You'll notice reduced hair shedding within 2-3 weeks, improved hair texture and shine within 6-8 weeks, and visible new growth starting at 3-4 months. Full rejuvenation results are typically achieved within 8-12 months with maintenance sessions every 3-4 months."
  },
  {
    q: "Is Hair Rejuvenation safe and suitable for everyone?",
    a: "Hair Rejuvenation is extremely safe and suitable for both men and women aged 18-70. It's ideal for early to moderate hair loss, thinning hair, poor hair quality, and those seeking preventive care. The treatment is not recommended for complete baldness, active scalp infections, or certain autoimmune conditions. A consultation determines suitability."
  },
  {
    q: "What's the investment for Hair Rejuvenation therapy?",
    a: "Treatment packages typically range from ₹60,000-₹1,50,000 for a complete 6-8 session program, depending on the extent of treatment needed. This includes all therapies, products, and follow-up care. We offer flexible payment plans and package deals. The investment provides excellent value considering the comprehensive nature and long-lasting results."
  }
];

const beforeAfterResults = [
  {
    before: beforeafter1,
    age: "31 years",
    sessions: "7 sessions",
    timeline: "10 months post-treatment"
  },
  {
    before: beforeafter2,
    age: "27 years",
    sessions: "6 sessions",
    timeline: "8 months post-treatment"
  },
  {
    before: beforeafter3,
    after: "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: "38 years",
    sessions: "8 sessions",
    timeline: "12 months post-treatment"
  },
  {
    before: beforeafter4,
    age: "33 years",
    sessions: "6 sessions",
    timeline: "9 months post-treatment"
  }
];

const HairRejuvenation = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setLightboxSrc(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxSrc(null);
  };
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

      {/* 🦱 HERO SECTION – Complete Hair Rejuvenation Therapy */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-white">
        {/* ✨ Ambient Light Blobs */}
        <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-amber-300/40 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-yellow-200/40 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

        {/* 🩶 Overlay Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/40 via-transparent to-white/30 backdrop-blur-sm"></div>

        {/* 🧱 Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* 🎯 LEFT SIDE - TEXT */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-2">
                <p className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
                  Comprehensive Hair Restoration
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Complete <span className="text-amber-500">Hair</span><br />
                  Rejuvenation Therapy
                </h1>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Experience the ultimate transformation through a multi-modal approach that combines 
                cutting-edge treatments for natural, comprehensive hair rejuvenation and long-lasting results.
              </p>

              {/* 📊 STATS */}
              <div className="grid grid-cols-3 gap-6 py-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-600">85%+</div>
                  <div className="text-sm text-slate-700">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-600">6-in-1</div>
                  <div className="text-sm text-slate-700">Combined Therapies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-600">4000+</div>
                  <div className="text-sm text-slate-700">Happy Clients</div>
                </div>
              </div>

              {/* 🔘 CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Button>

                <Link to="/#treatments" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border border-amber-300 text-amber-700 bg-white/70 backdrop-blur-md hover:bg-white hover:text-amber-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Discover Treatment
                  </Button>
                </Link>
              </div>
            </div>

            {/* 🧍‍♂️ RIGHT SIDE - IMAGE */}
            <div className="relative flex justify-center mt-10 lg:mt-0">
              {/* Ambient Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/30 via-white/10 to-transparent rounded-3xl blur-2xl"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-3/4 sm:w-2/3 md:w-full max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={hairrejuvenation}
                  alt="Hair Rejuvenation Patient"
                  className="object-cover w-full h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* ⭐ Rating Badge */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-md">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium text-slate-800 text-sm">
                    4.9/5 from 1,500+ clients
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT IS HAIR REJUVENATION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              What is Hair Rejuvenation Therapy?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hair Rejuvenation Therapy is a comprehensive, multi-modal treatment approach that combines 
              6 different advanced therapies in each session. This holistic method addresses all aspects 
              of hair health - from follicle stimulation to scalp environment optimization for complete restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Sparkles className="h-12 w-12 text-yellow-600" />,
                title: "Multi-Modal Approach",
                description: "Combines 6 different therapies in each session for comprehensive hair restoration"
              },
              {
                icon: <Activity className="h-12 w-12 text-amber-600" />,
                title: "Follicle Activation",
                description: "Stimulates dormant hair follicles and improves scalp blood circulation"
              },
              {
                icon: <Target className="h-12 w-12 text-yellow-700" />,
                title: "Personalized Treatment",
                description: "Customized therapy combinations based on individual hair loss patterns"
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-amber-700" />,
                title: "Holistic Results",
                description: "Improves hair density, quality, strength, and overall scalp health"
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
              Hair Rejuvenation vs Other Hair Loss Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our comprehensive Hair Rejuvenation therapy compares to other treatments 
              in effectiveness, approach, and overall patient satisfaction.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Treatment Factors</th>
                  <th className="px-6 py-4 text-center font-semibold">Medications</th>
                  <th className="px-6 py-4 text-center font-semibold">PRP Therapy</th>
                  <th className="px-6 py-4 text-center font-semibold">Hair Transplant</th>
                  <th className="px-6 py-4 text-center font-semibold bg-amber-600">Hair Rejuvenation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    factor: "Treatment Approach",
                    medications: "Single chemical intervention",
                    prp: "Platelet injection therapy",
                    transplant: "Surgical hair relocation",
                    rejuvenation: "6-in-1 multi-modal therapy"
                  },
                  {
                    factor: "Success Rate",
                    medications: "40-60% stabilization",
                    prp: "70-75% improvement",
                    transplant: "85-95% graft survival",
                    rejuvenation: "85-90% comprehensive improvement"
                  },
                  {
                    factor: "Treatment Experience",
                    medications: "Daily medication routine",
                    prp: "Clinical injection procedure",
                    transplant: "Surgical procedure",
                    rejuvenation: "Relaxing spa-like experience"
                  },
                  {
                    factor: "Side Effects",
                    medications: "Sexual, mood side effects",
                    prp: "Mild temporary swelling",
                    transplant: "Scarring, infection risk",
                    rejuvenation: "No side effects, relaxing"
                  },
                  {
                    factor: "Treatment Duration",
                    medications: "Lifelong daily use",
                    prp: "4-6 sessions over 6 months",
                    transplant: "Single 6-8 hour surgery",
                    rejuvenation: "6-8 sessions over 4-6 months"
                  },
                  {
                    factor: "Results Timeline",
                    medications: "3-6 months stabilization",
                    prp: "3-6 months for growth",
                    transplant: "12-18 months full results",
                    rejuvenation: "2-4 months visible improvement"
                  },
                  {
                    factor: "Hair Quality Improvement",
                    medications: "Maintains existing hair",
                    prp: "Moderate thickness increase",
                    transplant: "Transplanted hair only",
                    rejuvenation: "Overall hair health & quality"
                  },
                  {
                    factor: "Scalp Health",
                    medications: "No scalp improvement",
                    prp: "Moderate scalp health boost",
                    transplant: "No scalp health focus",
                    rejuvenation: "Complete scalp rejuvenation"
                  },
                  {
                    factor: "Maintenance Required",
                    medications: "Daily medication forever",
                    prp: "Sessions every 6-12 months",
                    transplant: "Possible future procedures",
                    rejuvenation: "Sessions every 3-4 months"
                  },
                  {
                    factor: "Holistic Benefits",
                    medications: "Hair loss focus only",
                    prp: "Hair growth stimulation",
                    transplant: "Cosmetic improvement",
                    rejuvenation: "Complete wellness approach"
                  },
                  {
                    factor: "Suitable For",
                    medications: "Early hair loss only",
                    prp: "Mild to moderate thinning",
                    transplant: "Advanced hair loss",
                    rejuvenation: "All stages & prevention"
                  },
                  {
                    factor: "Patient Satisfaction",
                    medications: "Moderate (side effects)",
                    prp: "Good (effective treatment)",
                    transplant: "High (permanent results)",
                    rejuvenation: "Excellent (comprehensive care)"
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.factor}</td>
                    <td className="px-6 py-4 text-center text-red-600">{row.medications}</td>
                    <td className="px-6 py-4 text-center text-blue-600">{row.prp}</td>
                    <td className="px-6 py-4 text-center text-purple-600">{row.transplant}</td>
                    <td className="px-6 py-4 text-center text-yellow-700 font-semibold bg-yellow-50">{row.rejuvenation}</td>
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
              The Complete Hair Rejuvenation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 6-step process combines multiple therapies in each 90-minute session 
              for maximum hair restoration and scalp rejuvenation.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Scalp Analysis & Assessment",
                  description: "Advanced digital scalp analysis using trichoscopy to evaluate hair density, follicle health, and create a personalized treatment plan.",
                  icon: <Target className="h-8 w-8 text-white" />
                },
                {
                  step: "02", 
                  title: "Micro-Needling Therapy",
                  description: "Gentle micro-needling stimulates blood circulation, creates micro-channels for better absorption, and triggers natural healing response.",
                  icon: <Activity className="h-8 w-8 text-white" />
                },
                {
                  step: "03",
                  title: "Growth Factor Infusion", 
                  description: "Application of concentrated growth factors, peptides, and vitamins directly into the scalp for follicle nourishment and activation.",
                  icon: <Sparkles className="h-8 w-8 text-white" />
                },
                {
                  step: "04",
                  title: "Low-Level Laser Therapy",
                  description: "FDA-approved laser therapy increases cellular energy, improves blood flow, and stimulates hair follicles at the molecular level.",
                  icon: <Zap className="h-8 w-8 text-white" />
                },
                {
                  step: "05",
                  title: "Therapeutic Scalp Massage",
                  description: "Relaxing massage with essential oils and botanical extracts improves circulation, reduces stress, and enhances treatment absorption.",
                  icon: <Heart className="h-8 w-8 text-white" />
                },
                {
                  step: "06",
                  title: "Nutritional Supplementation",
                  description: "Customized oral and topical supplements provide essential nutrients for optimal hair growth and maintenance of results.",
                  icon: <Leaf className="h-8 w-8 text-white" />
                }
              ].map((process, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="bg-gradient-to-r from-yellow-600 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      {process.icon}
                    </div>
                    <div className="absolute top-4 right-4 text-6xl font-bold text-yellow-100">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                  {idx < 5 && idx % 3 !== 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="h-8 w-8 text-yellow-300" />
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
              Witness the remarkable improvements achieved through our comprehensive Hair Rejuvenation Therapy. 
              These authentic results showcase the power of our multi-modal approach.
            </p>
          </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfterResults.map((result, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <button onClick={() => (window as any).__openImageLightbox?.(result.before || result.after || '', result.age)} className="block w-full">
                    <img 
                      src={result.before} 
                      alt="Before Treatment"
                      className="w-full h-40 sm:h-48 object-cover"
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
                      <span className="font-semibold text-yellow-600">{result.sessions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timeline:</span>
                      <span className="font-semibold text-amber-600">{result.timeline}</span>
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
              Follow these comprehensive guidelines to maximize your Hair Rejuvenation results 
              and ensure optimal healing and hair growth stimulation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pre-Treatment Instructions */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-600 p-3 rounded-xl mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800">Pre-Treatment Preparation</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-yellow-700 mb-3">1 Week Before Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid harsh chemical treatments, hair coloring, or perming for 7 days
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Discontinue blood-thinning medications (consult your doctor first)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Start taking recommended hair vitamins and supplements
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Maintain a healthy diet rich in proteins, vitamins, and minerals
                  </li>
                </ul>

                <h4 className="font-semibold text-yellow-700 mb-3 mt-6">24 Hours Before:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid alcohol consumption and excessive caffeine
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Get adequate sleep (7-8 hours) for optimal healing response
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Stay well-hydrated by drinking plenty of water
                  </li>
                </ul>

                <h4 className="font-semibold text-yellow-700 mb-3 mt-6">Day of Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Wash hair with gentle, sulfate-free shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid styling products, gels, or hairspray
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Wear comfortable clothing and arrive relaxed
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Eat a light meal 2 hours before your appointment
                  </li>
                </ul>
              </div>
            </div>

            {/* Post-Treatment Instructions */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-xl mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800">Post-Treatment Care</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-amber-700 mb-3">First 24 Hours:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid washing hair for 24 hours to allow treatments to absorb
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Gently massage scalp with fingertips for 5 minutes, 3 times daily
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Apply provided post-treatment serum as directed
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid direct sun exposure; wear a loose-fitting hat if needed
                  </li>
                </ul>

                <h4 className="font-semibold text-amber-700 mb-3 mt-6">First Week:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Use gentle, sulfate-free shampoo with lukewarm water
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Continue daily scalp massage and serum application
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid swimming pools, saunas, and excessive sweating
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Take prescribed supplements consistently
                  </li>
                </ul>

                <h4 className="font-semibold text-amber-700 mb-3 mt-6">Long-term Care:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Maintain healthy lifestyle with balanced nutrition
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Attend all scheduled follow-up appointments
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Continue home care routine as recommended
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Schedule maintenance sessions every 3-4 months
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
              Get comprehensive answers to the most common questions about Hair Rejuvenation Therapy 
              from our experienced specialists.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-start">
                      <div className="bg-yellow-100 text-yellow-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
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
              Why Choose VCare for Hair Rejuvenation
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">4000+</div>
              <div className="text-gray-600">Successful Treatments</div>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">4.9/5</div>
              <div className="text-gray-600">Patient Rating</div>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-10 w-10 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">85%+</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      {/* <section className="py-20 bg-gradient-to-r from-yellow-600 via-yellow-700 to-amber-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 !text-[#FEF08A] no-gradient">
              Ready to Experience Complete Hair Rejuvenation?
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied patients who chose our comprehensive Hair Rejuvenation Therapy 
              for natural, holistic hair restoration. Begin your transformation journey today.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-200">Step 1</div>
                <div className="text-lg">Free Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-200">Step 2</div>
                <div className="text-lg">Multi-Modal Treatment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-200">Step 3</div>
                <div className="text-lg">Complete Rejuvenation</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 8122733730
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600 font-semibold px-8 py-4 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Book Online Consultation
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-4xl w-full">
            <button onClick={closeLightbox} className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 z-20">
              ✕
            </button>
            <img src={lightboxSrc} alt="Enlarged" className="w-full h-auto rounded-lg shadow-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HairRejuvenation;
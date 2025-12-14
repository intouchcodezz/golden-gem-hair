import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryModal';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import exogro from '@/assets/exogro.jpg';
import beforeafter7 from '@/assets/beforeafter7.jpg';
import beforeafter8 from '@/assets/beforeafter8.jpg';
import beforeafter9 from '@/assets/beforeafter9.jpg';
import beforeafter12 from '@/assets/beforeafter12.jpg';
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
  ChevronRight
} from 'lucide-react';

const faqs = [
  {
    q: "What is ExoGro therapy?",
    a: "ExoGro is an advanced non-surgical hair restoration treatment that utilizes exosome technology derived from stem cells to deliver growth factors directly to hair follicles, promoting regeneration and hair density without the need for surgery."
  },
  {
    q: "How long does an ExoGro session take and what's the recovery time?",
    a: "An ExoGro session typically takes 45-60 minutes, including preparation and application. There is no recovery time; patients can return to normal activities immediately, with any mild redness fading within hours."
  },
  {
    q: "How many ExoGro sessions are needed for results?",
    a: "Most patients require 3-5 sessions, spaced 4-6 weeks apart, for optimal results. Annual maintenance sessions may be recommended to maintain hair health and density."
  },
  {
    q: "Is ExoGro therapy painful?",
    a: "ExoGro is minimally invasive with topical numbing applied, resulting in little to no discomfort. The micro-injection process feels like a mild prick at most."
  },
  {
    q: "When will I see results from ExoGro therapy?",
    a: "Early improvements in hair thickness and reduced shedding can appear within 1-2 months. Full results, including significant hair regrowth and density, are typically visible at 3-6 months."
  },
  {
    q: "Who is a good candidate for ExoGro therapy?",
    a: "ExoGro is ideal for individuals with early to advanced hair thinning, androgenetic alopecia, or those seeking to enhance results from hair transplants. It's suitable for all hair types and non-surgical preferences."
  }
];

const beforeAfterResults = [
  {
    before: beforeafter7,
    age: "32 years",
    sessions: "4 sessions",
    timeline: "5 months post-treatment"
  },
  {
    before: beforeafter8,
    age: "37 years",
    sessions: "3 sessions",
    timeline: "4 months post-treatment"
  },
  {
    before: beforeafter9,
    age: "29 years",
    sessions: "5 sessions",
    timeline: "6 months post-treatment"
  },
  {
    before: beforeafter12,
    age: "34 years",
    sessions: "4 sessions",
    timeline: "5 months post-treatment"
  }
];

const HairTransplantExoGro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <SEO
        title="Exogro Hair Treatment in Chennai | Hair Growth Therapy"
        description="Boost hair growth and reduce hair fall with Exogro therapy. Stimulate follicles naturally for thicker, healthier hair in Chennai."
        canonical="https://thegoldengemhairclinic.com/exogro"
      />
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

      {/* HERO SECTION - Modern Premium Aesthetic */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-white">
        {/* Ambient Glow Blobs */}
        <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-amber-300/40 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-yellow-200/40 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/40 via-transparent to-white/30 backdrop-blur-sm"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT SIDE - TEXT */}
            <div className="space-y-8 text-center md:text-left">
              <div className="space-y-2">
                <p className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
                  Cutting-Edge Exosome Therapy
                </p>
                <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                  ExoGro <br />
                  <span className="text-amber-500">Hair Restoration</span>
                </h1>
              </div>

              <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
                Unlock the regenerative power of stem cell-derived exosomes to rejuvenate follicles, 
                increase hair density, and achieve natural, long-lasting growth — safely and non-surgically.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-600">95%+</div>
                  <div className="text-xs sm:text-xs md:text-base text-[#1A1A1A]">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-600">45–60 Min</div>
                  <div className="text-xs sm:text-xs md:text-base text-[#1A1A1A]">Session Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-600">3000+</div>
                  <div className="text-xs sm:text-xs md:text-base text-[#1A1A1A]">Happy Patients</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Button>

                <Link to="/#home" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border border-amber-300 text-amber-700 bg-white/70 backdrop-blur-md hover:bg-white hover:text-amber-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    <Microscope className="mr-2 h-5 w-5" />
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="relative flex justify-center mt-10 md:mt-0">
              {/* Ambient highlight behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/30 via-white/10 to-transparent rounded-3xl blur-2xl"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-3/4 sm:w-2/3 md:w-full max-w-md lg:max-w-lg">
                <img
                  src={exogro}
                  alt="ExoGro Hair Restoration Treatment"
                  className="object-cover w-full h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-md">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium text-slate-800 text-sm">
                    4.8/5 from 1,100+ clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE EXOGRO SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Why Choose ExoGro?
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              ExoGro harnesses advanced exosome technology for superior hair follicle regeneration, 
              offering faster results and longer-lasting benefits than traditional therapies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Users className="h-12 w-12 text-yellow-600" />,
                title: "Stem Cell Technology",
                description: "Exosomes from mesenchymal stem cells for targeted regeneration"
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-500" />,
                title: "No Downtime",
                description: "Immediate return to activities with minimal side effects"
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-400" />,
                title: "High Efficacy",
                description: "95%+ success rate in stimulating hair regrowth"
              },
              {
                icon: <Microscope className="h-12 w-12 text-yellow-300" />,
                title: "Versatile Application",
                description: "Enhances FUT/FUE outcomes or standalone therapy"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-md font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED COMPARISON TABLE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              ExoGro vs Other Hair Restoration Methods
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Compare ExoGro with other techniques to discover the most advanced option for your hair restoration needs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-md shadow-md">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white">
                  <th className="px-6 py-4 text-left font-semibold text-xs sm:text-xs md:text-base">Comparison Factors</th>
                  <th className="px-6 py-4 text-center font-semibold text-xs sm:text-xs md:text-base">FUT (Strip)</th>
                  <th className="px-6 py-4 text-center font-semibold text-xs sm:text-xs md:text-base">FUE</th>
                  <th className="px-6 py-4 text-center font-semibold text-xs sm:text-xs md:text-base">GFC</th>
                  <th className="px-6 py-4 text-center font-semibold text-xs sm:text-xs md:text-base bg-yellow-500">ExoGro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    factor: "Treatment Type",
                    fut: "Surgical (strip extraction)",
                    fue: "Surgical (individual follicle extraction)",
                    gfc: "Non-surgical (growth factor injections)",
                    exogro: "Non-surgical (exosome therapy)"
                  },
                  {
                    factor: "Procedure Duration",
                    fut: "4-6 hours",
                    fue: "6-8 hours",
                    gfc: "30-60 minutes",
                    exogro: "45-60 minutes"
                  },
                  {
                    factor: "Scarring",
                    fut: "Linear scar",
                    fue: "Tiny dot scars",
                    gfc: "No scarring",
                    exogro: "No scarring"
                  },
                  {
                    factor: "Recovery Time",
                    fut: "10-14 days",
                    fue: "7-10 days",
                    gfc: "None",
                    exogro: "None"
                  },
                  {
                    factor: "Sessions Needed",
                    fut: "1-2 sessions",
                    fue: "1-3 sessions",
                    gfc: "4-6 sessions",
                    exogro: "3-5 sessions"
                  },
                  {
                    factor: "Results Timeline",
                    fut: "12-18 months",
                    fue: "12-18 months",
                    gfc: "6-9 months",
                    exogro: "3-6 months"
                  },
                  {
                    factor: "Invasiveness",
                    fut: "Highly invasive",
                    fue: "Moderately invasive",
                    gfc: "Minimally invasive",
                    exogro: "Minimally invasive"
                  },
                  {
                    factor: "Cost",
                    fut: "Most economical for large sessions",
                    fue: "Moderate to high",
                    gfc: "Moderate",
                    exogro: "Moderate to high"
                  },
                  {
                    factor: "Ideal Candidate",
                    fut: "Extensive hair loss",
                    fue: "Mild to moderate hair loss",
                    gfc: "Early to moderate thinning",
                    exogro: "All stages of hair thinning"
                  },
                  {
                    factor: "Maintenance",
                    fut: "None (permanent results)",
                    fue: "None (permanent results)",
                    gfc: "Every 6-12 months",
                    exogro: "Annual maintenance"
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.factor}</td>
                    <td className="px-6 py-4 text-center text-orange-600">{row.fut}</td>
                    <td className="px-6 py-4 text-center text-amber-600">{row.fue}</td>
                    <td className="px-6 py-4 text-center text-yellow-600">{row.gfc}</td>
                    <td className="px-6 py-4 text-center text-yellow-700 font-semibold bg-yellow-50">{row.exogro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER RESULTS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Real Patient Results
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Witness the transformative effects of ExoGro therapy on hair density and scalp health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfterResults.map((result, idx) => (
              <div key={idx} className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <button onClick={() => (window as any).__openImageLightbox?.(result.before, result.age)} className="block w-full">
                    <img 
                      src={result.before} 
                      alt="Before Treatment"
                      className="w-full h-48 object-cover"
                    />
                  </button>
                </div>
                <div className="p-6">
                  <div className="space-y-2 text-xs sm:text-xs md:text-base text-[#1A1A1A]">
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
                      <span className="font-semibold text-green-600">{result.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE PRE & POST-TREATMENT INSTRUCTIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Complete Care Instructions
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Follow these guidelines to maximize the benefits of your ExoGro treatment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pre-Treatment Instructions */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-md p-8">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-600 p-3 rounded-xl mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-yellow-800">Pre-Treatment Preparation</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-yellow-700 mb-3">1 Week Before Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid blood-thinning medications (e.g., Aspirin, Ibuprofen) after consulting your doctor
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Discontinue herbal supplements that affect clotting (e.g., Fish Oil, Ginseng)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Stay hydrated and maintain a balanced diet for better absorption
                  </li>
                </ul>

                <h4 className="font-medium text-yellow-700 mb-3 mt-6">Day of Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Wash hair thoroughly with mild shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Eat a light meal to maintain energy levels
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid caffeine and alcohol 24 hours prior
                  </li>
                </ul>
              </div>
            </div>

            {/* Post-Treatment Instructions */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-md p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-xl mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800">Post-Treatment Care</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-green-700 mb-3">First 48 Hours:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Keep scalp clean and avoid touching treated areas
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Apply ice packs if any mild swelling occurs
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Take prescribed anti-inflammatory if recommended
                  </li>
                </ul>

                <h4 className="font-medium text-green-700 mb-3 mt-6">First 2 Weeks:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Gently wash hair after 24 hours with provided shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid strenuous exercise or sun exposure
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    No swimming, saunas, or chemical hair treatments
                  </li>
                </ul>

                <h4 className="font-medium text-green-700 mb-3 mt-6">Long-term Care:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Attend follow-up sessions as scheduled
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Use recommended hair care products for maintenance
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Maintain a nutrient-rich diet to support hair health
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Answers to common questions about ExoGro hair restoration therapy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-md shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-md font-semibold text-gray-800 mb-4 flex items-start">
                      <div className="bg-yellow-100 text-yellow-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                        Q
                      </div>
                      {faq.q}
                    </h3>
                    <div className="ml-12">
                      <p className="text-xs text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Why trust The Golden Gem Clinic for Your ExoGro Therapy
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Our clinic pioneers exosome-based treatments with certified experts and cutting-edge protocols for superior hair restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-yellow-600" />,
                title: "Exosome Experts",
                description: "Board-certified specialists with advanced training in regenerative therapies."
              },
              {
                icon: <Heart className="h-12 w-12 text-yellow-500" />,
                title: "Proven Results",
                description: "Over 3,000 treatments with 95% patient satisfaction."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-400" />,
                title: "Lab-Certified Exosomes",
                description: "Sourced from FDA-compliant labs for purity and potency."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-300" />,
                title: "Safe Protocols",
                description: "Sterile, accredited facilities meeting the highest standards."
              }
            ].map((indicator, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{indicator.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{indicator.title}</h3>
                <p className="text-gray-600">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
};

export default HairTransplantExoGro;
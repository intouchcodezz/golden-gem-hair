import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import EnquiryForm from '@/components/EnquiryModal';
import { useState } from 'react';
import HT from '@/assets/cellgraft.webp';
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
    q: "What is Cell Graft Treatment for hair loss?",
    a: "Cell Graft Treatment is an advanced regenerative therapy that uses stem cells and dermal papilla cells harvested from the patient's own tissue to induce new hair follicle formation, promoting natural hair regrowth without traditional surgical grafting."
  },
  {
    q: "How long does a Cell Graft session take and what's the recovery time?",
    a: "A Cell Graft session typically takes 4-6 hours, including cell harvesting, processing, and implantation. Recovery is minimal; most patients experience mild soreness for 3-5 days and can resume normal activities within a week."
  },
  {
    q: "How many Cell Graft sessions are needed for results?",
    a: "Typically, 1-2 sessions are sufficient for significant results, with optional maintenance every 1-2 years. The treatment's regenerative nature provides long-lasting hair induction."
  },
  {
    q: "Is Cell Graft Treatment painful?",
    a: "The procedure is performed under local anesthesia, ensuring minimal discomfort during treatment. Post-procedure, patients may feel mild tenderness, managed with over-the-counter pain relief."
  },
  {
    q: "When will I see the final results of Cell Graft Treatment?",
    a: "New hair growth begins at 3-4 months, with noticeable density at 6-9 months. Full results, including permanent follicle regeneration, are visible at 12-18 months."
  },
  {
    q: "Who is a good candidate for Cell Graft Treatment?",
    a: "Cell Graft is ideal for patients with extensive hair loss or those seeking regenerative solutions. It’s suitable for all hair types and enhances outcomes when combined with FUT or FUE."
  }
];

const beforeAfterResults = [
  {
    before: beforeafter12,
    age: "35 years",
    follicles: "2,500 induced follicles",
    timeline: "12 months post-treatment"
  },
  {
    before: beforeafter7,
    age: "40 years",
    follicles: "3,200 induced follicles",
    timeline: "15 months post-treatment"
  },
  {
    before: beforeafter8,
    age: "38 years",
    follicles: "2,800 induced follicles",
    timeline: "14 months post-treatment"
  },
  {
    before: beforeafter9,
    age: "42 years",
    follicles: "3,000 induced follicles",
    timeline: "13 months post-treatment"
  }
];

const CellGraftTreatment = () => {
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

        {/* HERO SECTION - Premium Regenerative Design */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-white">
          {/* Ambient Light Effects */}
          <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-amber-300/40 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-yellow-200/40 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/40 via-transparent to-white/20 backdrop-blur-sm"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* LEFT SIDE - TEXT */}
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-2">
                  <p className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
                    Regenerative Cell Therapy
                  </p>
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                    Cell Graft <br />
                    <span className="text-amber-500">Hair Treatment</span>
                  </h1>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Harness your body’s natural stem cells to regenerate new follicles, 
                  restoring lasting density and fullness through advanced regenerative technology — no surgery required.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6 max-w-md mx-auto lg:mx-0">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-amber-600">90%+</div>
                    <div className="text-sm text-slate-700">Follicle Survival</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-amber-600">4–6 Hrs</div>
                    <div className="text-sm text-slate-700">Session Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-amber-600">5000+</div>
                    <div className="text-sm text-slate-700">Happy Patients</div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Free Consultation
                  </Button>
                  <Link to="/cell-graft/#cellgraftview" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border border-amber-300 text-amber-700 bg-white/70 backdrop-blur-md hover:bg-white hover:text-amber-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto"
                    >
                      <Microscope className="mr-2 h-5 w-5" />
                      View Results
                    </Button>
                  </Link>
                </div>
              </div>

              {/* RIGHT SIDE - IMAGE */}
              <div className="relative flex justify-center mt-10 lg:mt-0">
                {/* Ambient Highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/30 via-white/10 to-transparent rounded-3xl blur-2xl"></div>

                <div className="relative rounded-3xl overflow-hidden shadow-2xl w-3/4 sm:w-2/3 md:w-full max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src={HT}
                    alt="Cell Graft Patient"
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
                      4.9/5 from 1,200+ clients
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      {/* WHY CHOOSE CELL GRAFT SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Cell Graft Treatment?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cell Graft Treatment uses cutting-edge regenerative technology to create new hair follicles, 
              offering permanent, natural results with minimal scarring and high success rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Users className="h-12 w-12 text-yellow-600" />,
                title: "Regenerative Innovation",
                description: "Induces new follicles using your own stem cells"
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-500" />,
                title: "Minimal Scarring",
                description: "Small tissue sample, no linear scars"
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-400" />,
                title: "High Success Rate",
                description: "90%+ follicle induction for dense coverage"
              },
              {
                icon: <Microscope className="h-12 w-12 text-yellow-300" />,
                title: "Permanent Results",
                description: "New follicles grow naturally for life"
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
              Cell Graft vs Other Hair Restoration Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare Cell Graft Treatment with other hair restoration options to find the best solution for you.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Comparison Factors</th>
                  <th className="px-6 py-4 text-center font-semibold">FUT (Strip)</th>
                  <th className="px-6 py-4 text-center font-semibold">FUE</th>
                  <th className="px-6 py-4 text-center font-semibold">GFC</th>
                  <th className="px-6 py-4 text-center font-semibold bg-yellow-500">Cell Graft</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    factor: "Treatment Type",
                    fut: "Surgical (strip extraction)",
                    fue: "Surgical (individual follicle extraction)",
                    gfc: "Non-surgical (growth factor injections)",
                    cellgraft: "Regenerative (stem cell therapy)"
                  },
                  {
                    factor: "Procedure Duration",
                    fut: "4-6 hours",
                    fue: "6-8 hours",
                    gfc: "30-60 minutes",
                    cellgraft: "4-6 hours"
                  },
                  {
                    factor: "Scarring",
                    fut: "Linear scar",
                    fue: "Tiny dot scars",
                    gfc: "No scarring",
                    cellgraft: "Minimal puncture sites"
                  },
                  {
                    factor: "Recovery Time",
                    fut: "10-14 days",
                    fue: "7-10 days",
                    gfc: "None",
                    cellgraft: "3-5 days"
                  },
                  {
                    factor: "Sessions Needed",
                    fut: "1-2 sessions",
                    fue: "1-3 sessions",
                    gfc: "4-6 sessions",
                    cellgraft: "1-2 sessions"
                  },
                  {
                    factor: "Results Timeline",
                    fut: "12-18 months",
                    fue: "12-18 months",
                    gfc: "6-9 months",
                    cellgraft: "12-18 months"
                  },
                  {
                    factor: "Invasiveness",
                    fut: "Highly invasive",
                    fue: "Moderately invasive",
                    gfc: "Minimally invasive",
                    cellgraft: "Moderately invasive"
                  },
                  {
                    factor: "Cost",
                    fut: "Economical for large areas",
                    fue: "Moderate to high",
                    gfc: "Moderate",
                    cellgraft: "Premium regenerative"
                  },
                  {
                    factor: "Ideal Candidate",
                    fut: "Extensive hair loss",
                    fue: "Mild to moderate loss",
                    gfc: "Early to moderate thinning",
                    cellgraft: "Advanced regeneration needs"
                  },
                  {
                    factor: "Maintenance",
                    fut: "None (permanent results)",
                    fue: "None (permanent results)",
                    gfc: "Every 6-12 months",
                    cellgraft: "Optional every 1-2 years"
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.factor}</td>
                    <td className="px-6 py-4 text-center text-orange-600">{row.fut}</td>
                    <td className="px-6 py-4 text-center text-amber-600">{row.fue}</td>
                    <td className="px-6 py-4 text-center text-yellow-600">{row.gfc}</td>
                    <td className="px-6 py-4 text-center text-yellow-700 font-semibold bg-yellow-50">{row.cellgraft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER RESULTS */}
      <section id='cellgraftview' className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Real Patient Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the transformative power of Cell Graft Treatment in regenerating natural hair growth and density.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfterResults.map((result, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Age:</span>
                      <span className="font-semibold">{result.age}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Follicles:</span>
                      <span className="font-semibold text-yellow-600">{result.follicles}</span>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Complete Care Instructions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these guidelines to ensure optimal cell integration and hair regeneration from your Cell Graft Treatment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pre-Treatment Instructions */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-600 p-3 rounded-xl mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800">Pre-Treatment Preparation</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-yellow-700 mb-3">2 Weeks Before:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid blood-thinning medications (e.g., Aspirin) after consulting your doctor
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Stop supplements affecting clotting (e.g., Fish Oil, Vitamin E)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Refrain from smoking to optimize cell viability
                  </li>
                </ul>

                <h4 className="font-semibold text-yellow-700 mb-3 mt-6">1 Week Before:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Complete required pre-treatment health screenings
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Discontinue topical hair treatments (e.g., Minoxidil)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Stay hydrated and maintain a balanced diet
                  </li>
                </ul>

                <h4 className="font-semibold text-yellow-700 mb-3 mt-6">Day of Procedure:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Wash hair with a mild shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Wear comfortable clothing
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Eat a light meal unless otherwise advised
                  </li>
                </ul>
              </div>
            </div>

            {/* Post-Treatment Instructions */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-xl mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Post-Treatment Care</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-green-700 mb-3">First 48 Hours:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Keep head elevated to minimize swelling
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Apply ice packs gently to reduce soreness
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid touching or scratching treated areas
                  </li>
                </ul>

                <h4 className="font-semibold text-green-700 mb-3 mt-6">First 2 Weeks:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Gently wash hair with provided shampoo after 72 hours
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid strenuous exercise or heavy sweating
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Protect scalp from direct sun exposure and tight hats
                  </li>
                </ul>

                <h4 className="font-semibold text-green-700 mb-3 mt-6">Long-term Care:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Attend follow-up appointments to monitor growth
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Use recommended hair care products
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Maintain a healthy diet to support hair health
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about Cell Graft Treatment for hair restoration.
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Trust Us for Your Cell Graft Treatment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clinic combines cutting-edge regenerative technology with expert care to deliver unparalleled hair restoration results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-yellow-600" />,
                title: "Regenerative Experts",
                description: "Specialists trained in advanced stem cell therapies."
              },
              {
                icon: <Heart className="h-12 w-12 text-yellow-500" />,
                title: "Proven Success",
                description: "Over 5,000 treatments with 90% satisfaction."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-400" />,
                title: "Advanced Technology",
                description: "State-of-the-art cell processing facilities."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-300" />,
                title: "Safe & Sterile",
                description: "Accredited clinics with rigorous safety protocols."
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

      {/* CALL TO ACTION SECTION */}
      {/* <section className="py-20 bg-gradient-to-br from-yellow-600 via-yellow-400 to-yellow-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Regenerate Your Hair?
          </h2>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-8">
            Book your free consultation today and discover the future of hair restoration with Cell Graft Treatment.
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-white text-yellow-700 hover:bg-yellow-50 font-semibold px-6 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-yellow-600 hover:text-white font-semibold px-6 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default CellGraftTreatment;
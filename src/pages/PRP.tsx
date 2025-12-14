import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import EnquiryForm from '@/components/EnquiryModal';
import SEO from '@/components/SEO';
import { useImageLightbox } from '@/components/ImageLightbox';
import beforeafter7 from '@/assets/beforeafter7.jpg';
import beforeafter8 from '@/assets/beforeafter8.jpg';
import beforeafter9 from '@/assets/beforeafter9.jpg';
import beforeafter12 from '@/assets/beforeafter12.jpg';
import prp from '@/assets/prp2.webp';
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
  Droplet,
  Heart,
  Zap,
  ChevronRight,
  Activity,
  Target,
  TrendingUp,
  Syringe
} from 'lucide-react';

const faqs = [
  {
    q: "What exactly is PRP therapy and how does it work for hair loss?",
    a: "PRP (Platelet Rich Plasma) therapy is a non-surgical treatment that uses your own blood platelets to stimulate hair growth. We draw your blood, concentrate the platelets using a centrifuge, and inject the platelet-rich plasma into your scalp. These platelets release growth factors that improve blood circulation, strengthen existing hair follicles, and potentially awaken dormant follicles to promote new hair growth."
  },
  {
    q: "How many PRP sessions do I need and when will I see results?",
    a: "Most patients require 4-6 initial sessions spaced 4-6 weeks apart, followed by maintenance sessions every 6-12 months. You may notice reduced hair shedding within 2-4 weeks. Visible hair thickening typically appears after 3-4 months, with optimal results visible at 6-9 months. Results vary based on individual response and extent of hair loss."
  },
  {
    q: "Is PRP therapy safe and are there any side effects?",
    a: "PRP is extremely safe since it uses your own blood, eliminating any risk of allergic reactions or disease transmission. Common side effects are minimal and temporary, including mild swelling, redness, or tenderness at injection sites for 24-48 hours. Some patients may experience mild headache or dizziness immediately after treatment, which resolves quickly."
  },
  {
    q: "Who is a good candidate for PRP hair therapy?",
    a: "Ideal candidates include those with androgenetic alopecia (male/female pattern baldness), early to moderate hair loss, thinning hair, or patchy hair loss. PRP works best for patients with recent hair loss (within 5 years) and those with adequate platelet count. It's not recommended for complete baldness, autoimmune hair loss, or patients with blood disorders or those on blood thinners."
  },
  {
    q: "What's the cost of PRP therapy and does insurance cover it?",
    a: "PRP therapy costs typically range from ₹8,000-₹15,000 per session, with a complete treatment course of 4-6 sessions costing ₹40,000-₹90,000. Since it's considered a cosmetic procedure, health insurance generally doesn't cover PRP therapy. However, we offer flexible payment plans and package deals to make treatment more affordable."
  }
];

const beforeAfterResults = [
  {
    before: beforeafter7,
    age: "32 years",
    sessions: "6 sessions",
    timeline: "8 months post-treatment"
  },
  {
    before: beforeafter9,
    age: "28 years",
    sessions: "5 sessions",
    timeline: "10 months post-treatment"
  },
  {
    before: beforeafter8,
    age: "39 years",
    sessions: "6 sessions",
    timeline: "12 months post-treatment"
  },
  {
    before: beforeafter12,
    age: "35 years",
    sessions: "5 sessions",
    timeline: "9 months post-treatment"
  }
];

const PRPTherapy = () => {
  const { open } = useImageLightbox();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
        <>
      <SEO
        title="Best PRP Hair Treatment in Chennai"
        description="Experience natural hair regrowth with PRP treatment. Uses your own platelets to reduce thinning, strengthen roots, and boost hair density."
        canonical="https://thegoldengemhairclinic.com/prp-treatment"
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

      {/* MODERN HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50 to-white">
        {/* Decorative blurred blobs */}
        <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-amber-300/40 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-yellow-200/40 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Text Section */}
            <div className="space-y-8">
              <p className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
                Regrow Hair Naturally
              </p>
              <h1 className="text-3xl md:text-4xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
                Platelet Rich <span className="text-amber-600">Plasma Therapy</span>
              </h1>
              <p className="text-sm sm:text-sm md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
                Rejuvenate your hair using your body’s natural healing power. Safe, 
                effective, and backed by thousands of success stories.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="inline-block mr-2 w-5 h-5" />
                  Get Free Consultation
                </button>
                <Link to="#aboutprp">
                  <button className="px-8 py-4 bg-white/70 backdrop-blur-md text-slate-800 border border-amber-200 hover:bg-white hover:shadow-md font-semibold rounded-xl transition-all duration-300">
                    <Droplet className="inline-block mr-2 w-5 h-5 text-amber-500" />
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/30 via-white/10 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={prp}
                  alt="PRP Hair Therapy"
                  className="object-cover w-full h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-md">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-medium text-slate-800">4.8/5 from 1200+ clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS PRP THERAPY */}
      <section id='aboutprp' className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              What is PRP Hair Therapy?
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Platelet Rich Plasma (PRP) therapy is a cutting-edge, non-surgical treatment that uses the healing 
              power of your own blood platelets to stimulate hair follicles and promote natural hair growth. 
              This FDA-approved procedure concentrates your blood's growth factors to rejuvenate dormant hair follicles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Droplet className="h-10 w-10 text-blue-600" />,
                title: "Blood Concentration",
                description: "Uses your own blood platelets concentrated 3-5x higher than normal levels"
              },
              {
                icon: <Activity className="h-10 w-10 text-green-600" />,
                title: "Growth Factor Release",
                description: "Platelets release multiple growth factors that stimulate cellular repair and regeneration"
              },
              {
                icon: <Target className="h-10 w-10 text-purple-600" />,
                title: "Follicle Stimulation",
                description: "Direct injection into scalp targets hair follicles for maximum therapeutic benefit"
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-orange-600" />,
                title: "Natural Results",
                description: "Gradual improvement over 6-9 months with enhanced hair thickness and density"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-md font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED COMPARISON TABLE */}
      <section className="py-0 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              PRP Therapy vs Other Hair Loss Treatments
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Compare how PRP therapy stands against other popular hair loss treatments 
              in effectiveness, safety, and overall patient satisfaction.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-sm sm:text-sm md:text-base">
                  <th className="px-6 py-4 text-left font-semibold text-sm sm:text-sm md:text-base">Treatment Factors</th>
                  <th className="px-6 py-4 text-center font-semibold text-sm sm:text-sm md:text-base">Medications</th>
                  <th className="px-6 py-4 text-center font-semibold bg-amber-600 text-sm sm:text-sm md:text-base">PRP Therapy</th>
                  <th className="px-6 py-4 text-center font-semibold text-sm sm:text-sm md:text-base">Hair Transplant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    factor: "Treatment Approach",
                    medications: "Chemical intervention with drugs",
                    prp: "Platelet-rich plasma injections",
                    transplant: "Surgical hair follicle relocation",
                  },
                  {
                    factor: "Success Rate",
                    medications: "40-60% (varies by individual)",
                    prp: "70-80% improvement in hair density",
                    transplant: "85-95% graft survival",
                  },
                  {
                    factor: "Natural Process",
                    medications: "Artificial hormone manipulation",
                    prp: "Uses body's own healing factors",
                    transplant: "Surgical redistribution",
                  },
                  {
                    factor: "Side Effects",
                    medications: "Sexual dysfunction, depression",
                    prp: "Minimal swelling, temporary discomfort",
                    transplant: "Scarring, infection risk",
                  },
                  {
                    factor: "Treatment Duration",
                    medications: "Lifelong daily medication",
                    prp: "4-6 sessions over 6 months",
                    transplant: "Single surgery (6-8 hours)",
                  },
                  {
                    factor: "Results Timeline",
                    medications: "3-6 months for stabilization",
                    prp: "3-6 months for visible improvement",
                    transplant: "12-18 months for full results",
                  },
                  {
                    factor: "Invasiveness Level",
                    medications: "Non-invasive (oral/topical)",
                    prp: "Minimally invasive injections",
                    transplant: "Highly invasive surgery",
                  },
                  {
                    factor: "Downtime Required",
                    medications: "None",
                    prp: "24-48 hours mild discomfort",
                    transplant: "2-3 weeks recovery",
                  },
                  {
                    factor: "Long-term Effectiveness",
                    medications: "Requires continuous use",
                    prp: "12-18 months with maintenance",
                    transplant: "Permanent (transplanted hair)",
                  },
                  {
                    factor: "Cost Effectiveness",
                    medications: "Low initial, high lifetime cost",
                    prp: "Moderate cost, good value for results",
                    transplant: "High upfront, one-time cost",
                  },
                  {
                    factor: "Suitable For",
                    medications: "Early-stage hair loss only",
                    prp: "Early to moderate hair thinning",
                    transplant: "Advanced hair loss",
                  },
                  {
                    factor: "Hair Quality Improvement",
                    medications: "Maintains existing hair",
                    prp: "Improves thickness and strength",
                    transplant: "Natural transplanted hair",
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-800 text-sm sm:text-sm md:text-base">{row.factor}</td>
                    <td className="px-6 py-4 text-center text-red-600 text-sm sm:text-sm md:text-base">{row.medications}</td>
                    <td className="px-6 py-4 text-center text-blue-700 font-semibold bg-blue-50 text-sm sm:text-sm md:text-base">{row.prp}</td>
                    <td className="px-6 py-4 text-center text-yellow-600 text-sm sm:text-sm md:text-base">{row.transplant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS */}
      <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              The PRP Treatment Process
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Our proven 4-step PRP process takes just 60-90 minutes per session, 
              ensuring optimal platelet concentration and precise delivery for maximum results.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Blood Collection",
                  description: "We draw 60-100ml of your blood using standard phlebotomy techniques, similar to routine blood tests. The process is quick, safe, and virtually painless.",
                  icon: <Syringe className="h-8 w-8 text-white" />
                },
                {
                  step: "02", 
                  title: "Platelet Separation",
                  description: "Your blood is processed in a specialized centrifuge for 15 minutes to separate and concentrate platelets, creating PRP with 3-5x normal platelet concentration.",
                  icon: <Activity className="h-8 w-8 text-white" />
                },
                {
                  step: "03",
                  title: "Scalp Preparation", 
                  description: "The treatment area is cleaned and numbed with local anesthetic to ensure comfort during injections. The scalp is marked for precise injection placement.",
                  icon: <Target className="h-8 w-8 text-white" />
                },
                {
                  step: "04",
                  title: "PRP Injection & Care",
                  description: "The concentrated PRP is carefully injected into the scalp using fine needles at multiple points. Post-treatment care instructions and follow-up appointments are scheduled.",
                  icon: <Heart className="h-8 w-8 text-white" />
                }
              ].map((process, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-md p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      {process.icon}
                    </div>
                    <div className="absolute top-4 right-4 text-6xl font-bold text-blue-100">
                      {process.step}
                    </div>
                    <h3 className="text-md font-semibold text-gray-800 mb-4">{process.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="h-8 w-8 text-blue-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER RESULTS */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Real Patient Transformations
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              See the remarkable improvements achieved through our PRP Hair Therapy. 
              These authentic results demonstrate the effectiveness of our treatment protocol.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfterResults.map((result, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <button onClick={() => open(result.before)} className="block w-full">
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
                      <span className="font-semibold text-blue-600">{result.sessions}</span>
                    </div>                    <div className="flex justify-between">
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Complete Treatment Guidelines
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Follow these detailed instructions to maximize your PRP therapy results 
              and ensure optimal healing and hair growth stimulation.
            </p>
          </div>

            <div className="grid lg:grid-cols-2 gap-12">
            {/* Pre-Treatment Instructions */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-xl mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">Pre-Treatment Preparation</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-blue-700 mb-3">1 Week Before Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Stop taking anti-inflammatory medications (Aspirin, Ibuprofen, Naproxen) and blood thinners
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid fish oil, vitamin E, and herbal supplements that may affect blood clotting
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Stay well-hydrated by drinking 8-10 glasses of water daily
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Maintain a healthy diet rich in proteins, iron, and vitamins
                  </li>
                </ul>

                <h4 className="font-medium text-blue-700 mb-3 mt-6">24 Hours Before:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid alcohol consumption and excessive caffeine intake
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Get adequate sleep (7-8 hours) to optimize your body's healing response
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid smoking as it impairs blood circulation and healing
                  </li>
                </ul>

                <h4 className="font-medium text-blue-700 mb-3 mt-6">Day of Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Wash hair with gentle, sulfate-free shampoo the night before
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Eat a light, nutritious meal 2 hours before your appointment
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid styling products, gels, or hairspray on treatment day
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Wear comfortable clothing and arrive relaxed
                  </li>
                </ul>
              </div>
            </div>

            {/* Post-Treatment Instructions */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-xl mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800">Post-Treatment Care</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-green-700 mb-3">First 24 Hours (Critical):</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid washing hair or getting the scalp wet for 24 hours
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Do not touch, rub, or massage the treated scalp area
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Sleep with head elevated on 2-3 pillows to reduce swelling
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Apply ice pack to forehead (not scalp) for 15 minutes every hour if needed
                  </li>
                </ul>

                <h4 className="font-medium text-green-700 mb-3 mt-6">First Week:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Use gentle, sulfate-free shampoo with lukewarm water starting day 2
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid vigorous exercise, heavy lifting, or activities causing excessive sweating
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Protect scalp from direct sun exposure; wear a loose-fitting hat outdoors
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid swimming pools, saunas, steam rooms, and hot baths
                  </li>
                </ul>

                <h4 className="font-medium text-green-700 mb-3 mt-6">Long-term Care (1-6 months):</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Gradually resume normal activities and exercise after 1 week
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Attend all scheduled follow-up appointments (1, 3, 6 months)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Continue prescribed supplements and topical treatments as recommended
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
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
            <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Get detailed answers to the most common questions about PRP Hair Therapy 
              from our experienced medical professionals.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-md shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-md font-semibold text-gray-800 mb-4 flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Why Choose The Golden Gem Clinic for PRP Hair Therapy
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-md font-bold text-gray-800 mb-2">5000+</div>
              <div className="text-gray-600">Successful PRP Treatments</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-md font-bold text-gray-800 mb-2">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-yellow-600" />
              </div>
              <div className="text-md font-bold text-gray-800 mb-2">4.8/5</div>
              <div className="text-gray-600">Patient Rating</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-purple-600" />
              </div>
              <div className="text-md font-bold text-gray-800 mb-2">75%+</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
};

export default PRPTherapy;
import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EnquiryForm from '@/components/EnquiryModal';
import SEO from '@/components/SEO';
import mesotherapy from '@/assets/mesotherap.jpg';
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
    q: "What is Mesotherapy for hair restoration?",
    a: "Mesotherapy is a non-surgical treatment that involves microinjections of a customized blend of vitamins, minerals, amino acids, and medications into the scalp to stimulate hair follicles, improve scalp health, and promote hair growth."
  },
  {
    q: "How long does a Mesotherapy session take and what's the recovery time?",
    a: "A Mesotherapy session typically takes 20-40 minutes. There’s no downtime; patients can resume normal activities immediately, with mild redness or sensitivity subsiding within a few hours."
  },
  {
    q: "How many Mesotherapy sessions are needed for results?",
    a: "Typically, 6-10 sessions, spaced 1-2 weeks apart, are recommended for optimal results. Maintenance sessions every 3-6 months may be advised to sustain hair growth and scalp health."
  },
  {
    q: "Is Mesotherapy painful?",
    a: "Mesotherapy involves microinjections, which may cause mild discomfort, but a numbing cream is applied to minimize pain. Most patients describe the sensation as a slight pinch."
  },
  {
    q: "When will I see results from Mesotherapy?",
    a: "Initial improvements, such as reduced hair fall and better hair texture, may be seen within 2-3 months. Significant hair growth and density improvements typically appear after 4-6 months with a full treatment course."
  },
  {
    q: "Who is a good candidate for Mesotherapy?",
    a: "Mesotherapy is ideal for individuals with early hair thinning, androgenetic alopecia, or those seeking a non-surgical boost to hair health. It’s also effective as a complementary treatment with FUT, FUE, or GFC."
  }
];

const beforeAfterResults = [
  {
    before: beforeafter7,
    age: "29 years",
    sessions: "8 sessions",
    timeline: "6 months post-treatment"
  },
  {
    before: beforeafter8,
    age: "34 years",
    sessions: "7 sessions",
    timeline: "5 months post-treatment"
  },
  {
    before: beforeafter9,
    age: "31 years",
    sessions: "6 sessions",
    timeline: "5 months post-treatment"
  },
  {
    before: beforeafter12,
    age: "36 years",
    sessions: "9 sessions",
    timeline: "7 months post-treatment"
  }
];

const HairTransplantMesotherapy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <SEO
        title="Advanced Hair Mesotherapy Treatment in Chennai"
        description="Stimulate hair growth and restore scalp health with professional mesotherapy — nourishing follicles, reducing hair loss, and boosting hair density naturally."
        canonical="https://thegoldengemhairclinic.com/mesotherapy"
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

      {/* HERO SECTION - Modern Glass & Gradient Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-white">
        {/* Ambient Light Blobs */}
        <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-amber-300/40 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-yellow-200/40 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/30 via-transparent to-white/20 backdrop-blur-sm"></div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT SIDE - TEXT */}
            <div className="space-y-8 text-center md:text-left">
              <div>
                <p className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
                  Non-Surgical Hair Rejuvenation
                </p>
                <h1 className="text-3xl md:text-4xl font-bold md:leading-[3.4rem] text-slate-800 leading-tight">
                  Mesotherapy <span className="text-amber-500">for Hair</span>
                </h1>
              </div>

              <p className="text-sm sm:text-sm md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
                Revitalize your hair with microinjections of essential nutrients and medications, 
                stimulating follicles and enhancing scalp health — completely non-surgical and safe.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-600">95%+</div>
                  <div className="text-xs sm:text-xs md:text-base text-[#1A1A1A]">Patient Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-600">20–40 Min</div>
                  <div className="text-xs sm:text-xs md:text-base text-[#1A1A1A]">Session Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-600">3500+</div>
                  <div className="text-xs sm:text-xs md:text-base text-[#1A1A1A]">Happy Patients</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Free Consultation
                </Button>

                <Link to="#viewmesotherapy" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border border-amber-300 text-amber-700 bg-white/70 backdrop-blur-md hover:bg-white hover:text-amber-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    <Microscope className="mr-2 h-5 w-5" />
                    View Results
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="relative flex justify-center mt-10 md:mt-0">
              {/* Ambient Highlight Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/30 via-white/10 to-transparent rounded-3xl blur-2xl"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-3/4 sm:w-2/3 md:w-full max-w-md">
                <img
                  src={mesotherapy}
                  alt="Mesotherapy Hair Treatment"
                  className="object-cover w-full h-[450px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-md">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium text-slate-800 text-sm">4.7/5 from 900+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE MESOTHERAPY SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Why Choose Mesotherapy?
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Mesotherapy offers a non-invasive, nutrient-rich solution to boost hair growth, 
              improve scalp health, and achieve thicker hair with no downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Users className="h-12 w-12 text-yellow-600" />,
                title: "Non-Invasive",
                description: "No surgery or incisions, perfect for non-surgical preferences"
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-500" />,
                title: "Zero Downtime",
                description: "Resume daily activities immediately after each session"
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-400" />,
                title: "Nutrient Boost",
                description: "Delivers essential vitamins and minerals directly to follicles"
              },
              {
                icon: <Microscope className="h-12 w-12 text-yellow-300" />,
                title: "Versatile Treatment",
                description: "Effective alone or as a complement to FUT/FUE/GFC"
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
      <section className="py-0 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Mesotherapy vs Other Hair Restoration Methods
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Compare Mesotherapy with other hair restoration techniques to find the best solution for your needs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white">
                  <th className="px-6 py-4 text-left font-semibold text-sm sm:text-sm md:text-base">Comparison Factors</th>
                  <th className="px-6 py-4 text-center font-semibold">FUT (Strip)</th>
                  <th className="px-6 py-4 text-center font-semibold text-sm sm:text-sm md:text-base">FUE</th>
                  <th className="px-6 py-4 text-center font-semibold text-sm sm:text-sm md:text-base">GFC</th>
                  <th className="px-6 py-4 text-center font-semibold bg-yellow-500 text-sm sm:text-sm md:text-base">Mesotherapy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    factor: "Treatment Type",
                    fut: "Surgical (strip extraction)",
                    fue: "Surgical (individual follicle extraction)",
                    gfc: "Non-surgical (growth factor injections)",
                    mesotherapy: "Non-surgical (nutrient microinjections)"
                  },
                  {
                    factor: "Procedure Duration",
                    fut: "4-6 hours",
                    fue: "6-8 hours",
                    gfc: "30-60 minutes",
                    mesotherapy: "20-40 minutes"
                  },
                  {
                    factor: "Scarring",
                    fut: "Linear scar",
                    fue: "Tiny dot scars",
                    gfc: "No scarring",
                    mesotherapy: "No scarring"
                  },
                  {
                    factor: "Recovery Time",
                    fut: "10-14 days",
                    fue: "7-10 days",
                    gfc: "None",
                    mesotherapy: "None"
                  },
                  {
                    factor: "Sessions Needed",
                    fut: "1-2 sessions",
                    fue: "1-3 sessions",
                    gfc: "4-6 sessions",
                    mesotherapy: "6-10 sessions"
                  },
                  {
                    factor: "Results Timeline",
                    fut: "12-18 months",
                    fue: "12-18 months",
                    gfc: "6-9 months",
                    mesotherapy: "4-6 months"
                  },
                  {
                    factor: "Invasiveness",
                    fut: "Highly invasive",
                    fue: "Moderately invasive",
                    gfc: "Minimally invasive",
                    mesotherapy: "Minimally invasive"
                  },
                  {
                    factor: "Cost",
                    fut: "Most economical for large sessions",
                    fue: "Moderate to high",
                    gfc: "Moderate",
                    mesotherapy: "Low to moderate"
                  },
                  {
                    factor: "Ideal Candidate",
                    fut: "Extensive hair loss",
                    fue: "Mild to moderate hair loss",
                    gfc: "Early to moderate hair thinning",
                    mesotherapy: "Early hair thinning, scalp health"
                  },
                  {
                    factor: "Maintenance",
                    fut: "None (permanent results)",
                    fue: "None (permanent results)",
                    gfc: "Every 6-12 months",
                    mesotherapy: "Every 3-6 months"
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.factor}</td>
                    <td className="px-6 py-4 text-center text-orange-600">{row.fut}</td>
                    <td className="px-6 py-4 text-center text-amber-600">{row.fue}</td>
                    <td className="px-6 py-4 text-center text-yellow-600">{row.gfc}</td>
                    <td className="px-6 py-4 text-center text-yellow-700 font-semibold bg-yellow-50">{row.mesotherapy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER RESULTS */}
      <section id='viewmesotherapy' className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Real Patient Results
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Explore the transformations achieved with Mesotherapy, showcasing improved hair density and scalp vitality.
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
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Complete Care Instructions
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Follow these guidelines to ensure optimal results and a comfortable experience with Mesotherapy.
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
                <h4 className="font-medium text-yellow-700 mb-3">1 Week Before Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid blood-thinning medications (e.g., Aspirin, Ibuprofen) after consulting your doctor
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Stop herbal supplements that may affect clotting (e.g., Fish Oil, Ginkgo)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid alcohol and smoking to optimize scalp health
                  </li>
                </ul>

                <h4 className="font-medium text-yellow-700 mb-3 mt-6">Day of Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Wash hair with a mild shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Eat a light meal before the session
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid caffeine 24 hours prior
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
                <h3 className="text-xl font-bold text-green-800">Post-Treatment Care</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-green-700 mb-3">First 24 Hours:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid touching or scratching the treated scalp
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Refrain from washing hair for 24 hours
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid strenuous exercise or sweating
                  </li>
                </ul>

                <h4 className="font-medium text-green-700 mb-3 mt-6">First Week:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Gently wash hair with mild shampoo after 24 hours
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid direct sunlight or tight hats
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Refrain from swimming or saunas
                  </li>
                </ul>

                <h4 className="font-medium text-green-700 mb-3 mt-6">Long-term Care:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Follow the recommended session schedule (1-2 weeks apart)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Attend follow-up appointments to track progress
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Use prescribed hair care products as advised
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Maintain a balanced diet for optimal scalp health
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
              Answers to common questions about Mesotherapy for hair restoration.
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
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Why trust The Golden Gem Clinic for Your Mesotherapy
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Our clinic delivers exceptional Mesotherapy results with expert care, advanced techniques, and a patient-first approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-yellow-600" />,
                title: "Expert Specialists",
                description: "Certified dermatologists with over 8 years of Mesotherapy expertise."
              },
              {
                icon: <Heart className="h-12 w-12 text-yellow-500" />,
                title: "High Satisfaction",
                description: "Over 3,500 successful treatments with a 94% satisfaction rate."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-400" />,
                title: "Customized Formulations",
                description: "Tailored nutrient blends for optimal hair and scalp health."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-300" />,
                title: "Safe Environment",
                description: "Accredited facilities with strict safety and hygiene standards."
              }
            ].map((indicator, idx) => (
              <div key={idx} className="bg-white p-8 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{indicator.icon}</div>
                <h3 className="text-md font-semibold text-gray-800 mb-3">{indicator.title}</h3>
                <p className="text-xs text-gray-600">{indicator.description}</p>
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

export default HairTransplantMesotherapy;
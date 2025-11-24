import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import gfc2 from "@/assets/gfc2.jpg";
import gfc3 from "@/assets/gfc3.jpg";
import beforeafter12 from "@/assets/beforeafter12.jpg";
import beforeafter20 from "@/assets/beforeafter20.jpg";
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
    q: "What is Growth Factor Concentrate (GFC) therapy?",
    a: "GFC therapy is a non-surgical hair restoration treatment that uses growth factors derived from your own blood to stimulate hair follicles, promote hair growth, and improve hair density. It’s a safe, minimally invasive procedure with no downtime."
  },
  {
    q: "How long does a GFC session take and what's the recovery time?",
    a: "A GFC session typically takes 30-60 minutes, including blood draw and preparation. There’s no significant recovery time; most patients resume normal activities immediately, with minor scalp redness subsiding within a few hours."
  },
  {
    q: "How many GFC sessions are needed for results?",
    a: "Most patients require 4-6 sessions, spaced 4-6 weeks apart, for optimal results. Maintenance sessions may be recommended every 6-12 months to sustain hair growth and density."
  },
  {
    q: "Is GFC therapy painful?",
    a: "GFC is minimally invasive and performed with local anesthesia or numbing cream, so discomfort is minimal. Patients may feel a slight prick during injections, but it’s generally well-tolerated."
  },
  {
    q: "When will I see results from GFC therapy?",
    a: "Initial improvements, such as reduced hair fall and improved hair texture, may be noticeable within 2-3 months. Significant hair growth and density improvements typically appear after 6-9 months with a full treatment course."
  },
  {
    q: "Who is a good candidate for GFC therapy?",
    a: "GFC is ideal for patients with early to moderate hair thinning or androgenetic alopecia. It’s suitable for those seeking non-surgical options or as a complementary treatment to FUT/FUE to enhance results."
  }
];

const beforeAfterResults = [
  {
    before: beforeafter12,
    age: "28 years",
    sessions: "5 sessions",
    timeline: "8 months post-treatment"
  },
  {
    before: beforeafter20,
    age: "35 years",
    sessions: "6 sessions",
    timeline: "9 months post-treatment"
  },
  {
    before: gfc3,
    age: "30 years",
    sessions: "4 sessions",
    timeline: "7 months post-treatment"
  },
  {
    before: gfc2,
    age: "33 years",
    sessions: "5 sessions",
    timeline: "8 months post-treatment"
  }
];

const HairTransplantGFC = () => {
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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* 🎬 Background Video or Image */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/banner-placeholder.jpg"
        >
          <source src="/videos/GFC.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔲 Overlay for readability */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* 🧱 HERO CONTENT */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 md:py-16">
          </div>
        </div>
      </section>


      {/* WHY CHOOSE GFC SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Choose GFC Therapy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GFC therapy is a Non-invasive, natural approach to hair restoration, 
              using your body’s own growth factors to rejuvenate hair follicles with minimal downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Users className="h-12 w-12 text-yellow-600" />,
                title: "Non-Surgical",
                description: "No incisions or stitches, ideal for those avoiding surgery"
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-500" />,
                title: "No Downtime",
                description: "Resume daily activities immediately after treatment"
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-400" />,
                title: "Natural Results",
                description: "Uses your own growth factors for safe, effective hair growth"
              },
              {
                icon: <Microscope className="h-12 w-12 text-yellow-300" />,
                title: "Complementary",
                description: "Enhances results when combined with FUT or FUE"
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
              GFC vs Other Hair Restoration Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare GFC therapy with other hair restoration techniques to find the best solution for your needs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Comparison Factors</th>
                  <th className="px-6 py-4 text-center font-semibold">FUT (Strip)</th>
                  <th className="px-6 py-4 text-center font-semibold">FUE</th>
                  <th className="px-6 py-4 text-center font-semibold">PRP</th>
                  <th className="px-6 py-4 text-center font-semibold bg-yellow-500">GFC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    factor: "Treatment Type",
                    fut: "Surgical (strip extraction)",
                    fue: "Surgical (individual follicle extraction)",
                    prp: "Non-surgical (platelet-rich plasma injections)",
                    gfc: "Non-surgical (growth factor injections)"
                  },
                  {
                    factor: "Procedure Duration",
                    fut: "4-6 hours",
                    fue: "6-8 hours",
                    prp: "30-60 minutes",
                    gfc: "30-60 minutes"
                  },
                  {
                    factor: "Scarring",
                    fut: "Linear scar",
                    fue: "Tiny dot scars",
                    prp: "No scarring",
                    gfc: "No scarring"
                  },
                  {
                    factor: "Recovery Time",
                    fut: "10-14 days",
                    fue: "7-10 days",
                    prp: "None",
                    gfc: "None"
                  },
                  {
                    factor: "Sessions Needed",
                    fut: "1-2 sessions",
                    fue: "1-3 sessions",
                    prp: "5-10 sessions",
                    gfc: "4-8 sessions"
                  },
                  {
                    factor: "Results Timeline",
                    fut: "12-18 months",
                    fue: "12-18 months",
                    prp: "3-6 months",
                    gfc: "6-9 months"
                  },
                  {
                    factor: "Invasiveness",
                    fut: "Highly invasive",
                    fue: "Moderately invasive",
                    prp: "Minimally invasive",
                    gfc: "Minimally invasive"
                  },
                  {
                    factor: "Cost",
                    fut: "Most economical for large sessions",
                    fue: "Moderate to high",
                    prp: "Moderate",
                    gfc: "Moderate"
                  },
                  {
                    factor: "Ideal Candidate",
                    fut: "Extensive hair loss",
                    fue: "Mild to moderate hair loss",
                    prp: "Early hair thinning",
                    gfc: "Early to moderate hair thinning"
                  },
                  {
                    factor: "Maintenance",
                    fut: "None (permanent results)",
                    fue: "None (permanent results)",
                    prp: "Every 6-12 months",
                    gfc: "Every 6-12 months"
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.factor}</td>
                    <td className="px-6 py-4 text-center text-orange-600">{row.fut}</td>
                    <td className="px-6 py-4 text-center text-amber-600">{row.fue}</td>
                    <td className="px-6 py-4 text-center text-yellow-600">{row.prp}</td>
                    <td className="px-6 py-4 text-center text-yellow-700 font-semibold bg-yellow-50">{row.gfc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER RESULTS */}
      <section id='viewgfc' className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Real Patient Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the transformations achieved with GFC therapy, showcasing improved hair density and reduced hair fall.
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Complete Care Instructions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these guidelines to ensure optimal results and a smooth experience with GFC therapy.
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
                <h4 className="font-semibold text-yellow-700 mb-3">1 Week Before Treatment:</h4>
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
                    Stay hydrated to optimize blood draw quality
                  </li>
                </ul>

                <h4 className="font-semibold text-yellow-700 mb-3 mt-6">Day of Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Wash hair with mild shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Eat a light meal before the session
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid caffeine and alcohol 24 hours prior
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
                <h4 className="font-semibold text-green-700 mb-3">First 24 Hours:</h4>
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

                <h4 className="font-semibold text-green-700 mb-3 mt-6">First Week:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Gently wash hair with mild shampoo after 24 hours
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid direct sunlight or hats that press on the scalp
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Refrain from swimming or saunas
                  </li>
                </ul>

                <h4 className="font-semibold text-green-700 mb-3 mt-6">Long-term Care:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Follow the recommended session schedule (4-6 weeks apart)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Attend follow-up appointments to monitor progress
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Use prescribed hair care products as advised
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Maintain a healthy lifestyle for optimal results
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
              Answers to common questions about GFC therapy for hair restoration.
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
              Why Trust The Golden Gem for Your GFC Therapy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clinic combines advanced technology, experienced specialists, and a patient-focused approach for exceptional GFC therapy results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-yellow-600" />,
                title: "Specialized Expertise",
                description: "Certified dermatologists with over 10 years of GFC therapy experience."
              },
              {
                icon: <Heart className="h-12 w-12 text-yellow-500" />,
                title: "Patient Satisfaction",
                description: "Over 4,000 successful GFC treatments with a 95% satisfaction rate."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-400" />,
                title: "Advanced Technology",
                description: "State-of-the-art centrifugation for high-potency growth factor preparation."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-300" />,
                title: "Safe Environment",
                description: "Accredited facilities ensuring the highest safety and hygiene standards."
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
            Ready to Revitalize Your Hair?
          </h2>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-8">
            Schedule your free consultation today and start your journey to thicker, healthier hair with GFC therapy.
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

export default HairTransplantGFC;
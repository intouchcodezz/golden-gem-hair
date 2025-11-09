import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { useState } from 'react';
import EnquiryForm from '@/components/EnquiryModal';
import Footer from '@/components/Footer';
import fue from '@/assets/fue.jpg';
import beforeafter2 from '@/assets/beforeafter2.jpg';
import beforeafter3 from '@/assets/beforeafter3.jpg';
import beforeafter4 from '@/assets/beforeafter4.jpg';
import beforeafter9 from '@/assets/beforeafter9.jpg';
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
    q: "How long does the FUE procedure take and what's the recovery time?",
    a: "The FUE procedure typically takes 6-8 hours depending on the number of grafts. Recovery is faster than FUT, with most patients returning to normal activities within 5-7 days. Tiny punch sites heal within 7-10 days, leaving minimal scarring."
  },
  {
    q: "Will there be visible scarring with FUE?",
    a: "FUE leaves tiny, dot-like scars (0.8-1.2mm) scattered across the donor area, which are barely noticeable, especially with short hair. Advanced techniques and smaller punches ensure scars are virtually undetectable."
  },
  {
    q: "How many grafts can be harvested with FUE in one session?",
    a: "FUE typically allows for 2,000-3,000 grafts per session, though up to 4,000 grafts are possible in some cases. Multiple sessions may be needed for extensive coverage due to donor area limitations."
  },
  {
    q: "Is FUE painful? What about post-operative discomfort?",
    a: "FUE is performed under local anesthesia, so no pain is felt during the procedure. Post-operative discomfort is minimal, often described as mild soreness in the donor area, managed with over-the-counter pain relievers for 2-5 days."
  },
  {
    q: "When will I see the final results of my FUE transplant?",
    a: "Transplanted hair sheds within 2-4 weeks (normal shock loss), with regrowth starting at 3-4 months. Visible improvement is seen at 6-9 months, and final results appear at 12-18 months, providing permanent, natural-looking hair."
  },
  {
    q: "What makes FUE a good choice compared to FUT?",
    a: "FUE is ideal for patients preferring minimal scarring, shorter recovery, and flexibility to wear short hairstyles. It’s suited for smaller to moderate hair loss cases and preserves donor hair for future procedures, though it may require multiple sessions for extensive coverage."
  }
];

const beforeAfterResults = [
  {
    before: beforeafter2,
    age: "32 years",
    grafts: "2,800 grafts",
    timeline: "12 months post-op"
  },
  {
    before: beforeafter3,
    age: "29 years",
    grafts: "3,200 grafts",
    timeline: "14 months post-op"
  },
  {
    before: beforeafter4,
    age: "36 years",
    grafts: "2,500 grafts",
    timeline: "13 months post-op"
  },
  {
    before: beforeafter9,
    age: "33 years",
    grafts: "3,000 grafts",
    timeline: "15 months post-op"
  }
];

const HairTransplantFUE = () => {
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

{/* 🦱 HERO SECTION – Follicular Unit Extraction (FUE) */}
<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-white">
  {/* ✨ Ambient Glow Blobs */}
  <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-amber-300/40 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
  <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-yellow-200/40 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

  {/* 🩶 Subtle Overlay */}
  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/40 via-transparent to-white/30 backdrop-blur-sm"></div>

  {/* 🧱 CONTENT CONTAINER */}
  <div className="relative z-10 container mx-auto px-6 lg:px-10 py-16 lg:py-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* 🎯 LEFT SIDE - TEXT */}
      <div className="space-y-8 text-center lg:text-left">
        <div className="space-y-2">
          <p className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
            Minimally Invasive Hair Restoration
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
            Follicular Unit <br />
            <span className="text-amber-500">Extraction (FUE)</span>
          </h1>
        </div>

        <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
          Experience the modern, scar-minimizing FUE method for natural-looking results, faster recovery, and greater styling flexibility — without visible scars or stitches.
        </p>

        {/* 📊 STATS */}
        <div className="grid grid-cols-3 gap-6 py-6 max-w-md mx-auto lg:mx-0">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-amber-600">70–80%</div>
            <div className="text-sm text-slate-700">Graft Survival</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-amber-600">3000+</div>
            <div className="text-sm text-slate-700">Grafts/Session</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-amber-600">5000+</div>
            <div className="text-sm text-slate-700">Happy Patients</div>
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

          <Link to="#viewfue" className="w-full sm:w-auto">
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

      {/* 🧍‍♂️ RIGHT SIDE - IMAGE */}
      <div className="relative flex justify-center mt-10 lg:mt-0">
        {/* Ambient Glow Behind Image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/30 via-white/10 to-transparent rounded-3xl blur-2xl"></div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl w-3/4 sm:w-2/3 md:w-full max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-[1.02]">
          <img
            src={fue}
            alt="FUE Hair Transplant Patient"
            className="object-cover w-full h-[480px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

          {/* ⭐ RATING CARD */}
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


      {/* WHY CHOOSE FUE SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Choose FUE?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FUE offers a minimally invasive approach with minimal scarring, faster recovery, 
              and flexibility for modern hairstyles, making it ideal for many patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Users className="h-12 w-12 text-yellow-600" />,
                title: "Minimal Scarring",
                description: "Tiny dot scars allow for short hairstyles without visible marks"
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-500" />,
                title: "Faster Recovery",
                description: "Return to normal activities in 5-7 days with minimal downtime"
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-400" />,
                title: "Natural Results",
                description: "Precise extraction ensures natural-looking hairlines"
              },
              {
                icon: <Microscope className="h-12 w-12 text-yellow-300" />,
                title: "Flexible Sessions",
                description: "Ideal for smaller sessions or staged treatments over time"
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
              FUE vs Other Hair Transplant Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare FUE with other hair restoration techniques to find the best option for your needs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Comparison Factors</th>
                  <th className="px-6 py-4 text-center font-semibold">FUT (Strip)</th>
                  <th className="px-6 py-4 text-center font-semibold bg-yellow-500">Traditional FUE</th>
                  <th className="px-6 py-4 text-center font-semibold">DHI</th>
                  <th className="px-6 py-4 text-center font-semibold">AFT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    factor: "Extraction Method",
                    fut: "Strip of scalp removed surgically for dissection",
                    fue: "Individual punch extraction (1.0-1.2mm)",
                    dhi: "Punch extraction with direct implanter",
                    aft: "Ultra-fine titanium punches (0.6-0.7mm)"
                  },
                  {
                    factor: "Grafts Per Session",
                    fut: "3,000-5,000+ grafts possible",
                    fue: "2,000-3,000 grafts typical",
                    dhi: "2,500-3,500 grafts",
                    aft: "2,000-3,000 grafts"
                  },
                  {
                    factor: "Scarring Pattern",
                    fut: "Linear scar (concealed with hair >1-2cm)",
                    fue: "Multiple dotted scars across donor",
                    dhi: "Minimal dotted scars",
                    aft: "Virtually no visible scarring"
                  },
                  {
                    factor: "Healing Time",
                    fut: "10-14 days (suture removal needed)",
                    fue: "7-10 days",
                    dhi: "5-7 days",
                    aft: "2-3 days"
                  },
                  {
                    factor: "Graft Survival Rate",
                    fut: "85-95% (minimal transection)",
                    fue: "70-80%",
                    dhi: "80-85%",
                    aft: "90-95%"
                  },
                  {
                    factor: "Procedure Duration",
                    fut: "4-6 hours for large sessions",
                    fue: "6-8 hours",
                    dhi: "6-8 hours",
                    aft: "5-7 hours"
                  },
                  {
                    factor: "Cost Per Graft",
                    fut: "Most economical for large sessions",
                    fue: "Moderate to high",
                    dhi: "High",
                    aft: "Premium pricing"
                  },
                  {
                    factor: "Ideal Candidate",
                    fut: "Extensive hair loss, need max grafts",
                    fue: "Mild to moderate hair loss",
                    dhi: "Precision coverage needs",
                    aft: "Premium results, minimal downtime"
                  },
                  {
                    factor: "Hair Length Requirement",
                    fut: "Can keep hair longer during procedure",
                    fie: "Must shave donor area",
                    dhi: "Partial shaving possible",
                    aft: "Minimal shaving"
                  },
                  {
                    factor: "Future Procedures",
                    fut: "Donor area preserved for future use",
                    fue: "Limited by donor depletion",
                    dhi: "Moderate donor preservation",
                    aft: "Good donor preservation"
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.factor}</td>
                    <td className="px-6 py-4 text-center text-orange-600">{row.fut}</td>
                    <td className="px-6 py-4 text-center text-yellow-700 font-semibold bg-yellow-50">{row.fue}</td>
                    <td className="px-6 py-4 text-center text-amber-600">{row.dhi}</td>
                    <td className="px-6 py-4 text-center text-yellow-600">{row.aft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER RESULTS */}
      <section id='viewfue' className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Real Patient Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the transformations achieved with FUE, showcasing natural results and minimal scarring from our clinic.
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
                      className="w-full h-38 object-cover"
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
                      <span>Grafts:</span>
                      <span className="font-semibold text-yellow-600">{result.grafts}</span>
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

      {/* COMPREHENSIVE PRE & POST-OP INSTRUCTIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Complete Care Instructions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these guidelines to ensure a smooth FUE procedure and optimal recovery.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pre-Operative Instructions */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-600 p-3 rounded-xl mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800">Pre-Operative Preparation</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-yellow-700 mb-3">2 Weeks Before Procedure:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid blood-thinning medications (e.g., Aspirin, Ibuprofen) after consulting your doctor
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Stop herbal supplements that may increase bleeding (e.g., Fish Oil, Ginseng)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Quit smoking to enhance healing and graft survival
                  </li>
                </ul>

                <h4 className="font-semibold text-yellow-700 mb-3 mt-6">1 Week Before:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Discontinue Minoxidil or other topical hair treatments
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Complete required blood work and medical clearances
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Arrange transportation as sedation may be used
                  </li>
                </ul>

                <h4 className="font-semibold text-yellow-700 mb-3 mt-6">Day of Procedure:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Wash hair with regular shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Wear a loose, button-up shirt for comfort
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Eat a light breakfast unless sedation is planned
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid caffeine and alcohol 24 hours prior
                  </li>
                </ul>
              </div>
            </div>

            {/* Post-Operative Instructions */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-xl mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Post-Operative Care</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-green-700 mb-3">First 48 Hours (Critical Period):</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Sleep with head elevated at 45 degrees
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Apply ice packs to forehead to minimize swelling
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid touching or scratching donor or recipient areas
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Take prescribed medications as instructed
                  </li>
                </ul>

                <h4 className="font-semibold text-green-700 mb-3 mt-6">First 2 Weeks:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Gently wash hair after 48 hours with provided shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid strenuous activities and heavy lifting
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Protect scalp from direct sunlight
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Refrain from swimming or saunas
                  </li>
                </ul>

                <h4 className="font-semibold text-green-700 mb-3 mt-6">Long-term Care (1-6 months):</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Resume light exercise after 2 weeks with approval
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Attend follow-up visits at 2 weeks, 3, 6, 12 months
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Consider hair growth treatments (e.g., Minoxidil) as advised
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Maintain a healthy diet for optimal hair growth
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
              Answers to common questions about the FUE hair transplant procedure.
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
              Why Trust Us for Your FUE Procedure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clinic offers unmatched expertise, advanced technology, and a commitment to patient satisfaction for exceptional FUE results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-yellow-600" />,
                title: "Expert Surgeons",
                description: "Board-certified specialists with over 15 years of FUE expertise."
              },
              {
                icon: <Heart className="h-12 w-12 text-yellow-500" />,
                title: "High Patient Satisfaction",
                description: "Over 5,000 successful FUE procedures with a 97% satisfaction rate."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-400" />,
                title: "Cutting-Edge Technology",
                description: "Using precision punches and advanced imaging for optimal graft extraction."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-300" />,
                title: "Safe Environment",
                description: "Accredited facilities with strict adherence to safety and hygiene standards."
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
            Ready to Restore Your Hair?
          </h2>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-8">
            Book your free consultation today and start your journey to natural, scar-free hair restoration with FUE.
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

export default HairTransplantFUE;
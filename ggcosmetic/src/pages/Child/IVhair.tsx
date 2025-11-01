import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import EnquiryForm from '@/components/EnquiryModal';
import { useState } from 'react';
import HT from '@/assets/ivhair.png';
import beforeafter18 from '@/assets/beforeafter18.webp';
import beforeafter19 from '@/assets/beforeafter19.webp';
import beforeafter20 from '@/assets/beforeafter20.jpg';
import beforeafter21 from '@/assets/beforeafter21.webp';
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
    q: "What is IV Hair Therapy?",
    a: "IV Hair Therapy is a non-surgical treatment that delivers a potent blend of vitamins, minerals, and nutrients directly into the bloodstream via intravenous infusion to nourish hair follicles, promote hair growth, and improve scalp health."
  },
  {
    q: "How long does an IV Hair Therapy session take and what's the recovery time?",
    a: "An IV Hair Therapy session takes 30-60 minutes. There’s no downtime; patients can resume normal activities immediately, with no significant side effects."
  },
  {
    q: "How many IV Hair Therapy sessions are needed for results?",
    a: "Most patients benefit from 6-8 sessions, spaced 1-2 weeks apart, for optimal results. Maintenance sessions every 3-6 months may be recommended to sustain hair health."
  },
  {
    q: "Is IV Hair Therapy painful?",
    a: "The IV insertion may cause a slight pinch, but the process is generally painless. Patients typically feel relaxed during the infusion."
  },
  {
    q: "When will I see results from IV Hair Therapy?",
    a: "Initial improvements, such as reduced hair fall and shinier hair, may be noticeable within 1-2 months. Significant growth and density improvements typically appear after 4-6 months."
  },
  {
    q: "Who is a good candidate for IV Hair Therapy?",
    a: "IV Hair Therapy is ideal for those with hair thinning, nutrient deficiencies, or stress-related hair loss. It’s also effective as a complementary treatment to FUT, FUE, or other therapies."
  }
];

const beforeAfterResults = [
  {
    before: beforeafter18,
    age: "30 years",
    sessions: "7 sessions",
    timeline: "5 months post-treatment"
  },
  {
    before: beforeafter19,
    age: "36 years",
    sessions: "6 sessions",
    timeline: "4 months post-treatment"
  },
  {
    before: beforeafter20,
    age: "28 years",
    sessions: "8 sessions",
    timeline: "6 months post-treatment"
  },
  {
    before: beforeafter21,
    age: "33 years",
    sessions: "7 sessions",
    timeline: "5 months post-treatment"
  }
];

const IVHairTherapy = () => {
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
<section className="relative bg-gradient-to-br from-yellow-600 via-yellow-400 to-yellow-200 min-h-screen flex items-center overflow-hidden">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* LEFT SIDE - TEXT */}
      <div className="space-y-6 text-center md:text-left">
        <div className="space-y-2">
          <p className="text-white font-medium tracking-wide uppercase text-sm">
            Nutrient-Powered Hair Restoration
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            IV Hair<br />
            <span className="text-yellow-100">Therapy</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-yellow-100 leading-relaxed max-w-md mx-auto md:mx-0">
          Supercharge your hair growth with intravenous delivery of essential nutrients, 
          designed to nourish follicles and enhance scalp vitality without surgery.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 py-6">
          <div className="text-center">
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white">90%+</div>
            <div className="text-xs sm:text-sm text-white">Patient Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white">30–60 Min</div>
            <div className="text-xs sm:text-sm text-white">Session Time</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white">3200+</div>
            <div className="text-xs sm:text-sm text-white">Happy Patients</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="w-full sm:w-auto bg-white text-yellow-700 hover:bg-yellow-50 font-semibold px-8 py-4"
          >
            <Phone className="mr-2 h-5 w-5" />
            Free Consultation
          </Button>

          <Link to="/iv-hair-therapy/#ivhairview" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-yellow-600 hover:text-white font-semibold px-8 py-4"
            >
              <Microscope className="mr-2 h-5 w-5" />
              View Results
            </Button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="relative flex justify-center mt-10 md:mt-0">
        <img 
          src={HT}
          alt="Hair Treatment Patient"
          className="rounded-xl shadow-2xl w-3/4 sm:w-2/3 md:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
        />
        <div className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <div>
              <div className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                4.7/5 Rating
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600">From 950+ Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* WHY CHOOSE IV HAIR THERAPY SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Choose IV Hair Therapy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IV Hair Therapy delivers targeted nutrition directly to your bloodstream, 
              boosting hair follicle health and promoting vibrant, lasting hair growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Users className="h-12 w-12 text-yellow-600" />,
                title: "Non-Surgical",
                description: "No incisions or recovery, ideal for non-invasive preferences"
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-500" />,
                title: "Zero Downtime",
                description: "Resume daily activities immediately after infusion"
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-400" />,
                title: "Nutrient-Rich",
                description: "Delivers vitamins and minerals for optimal hair health"
              },
              {
                icon: <Microscope className="h-12 w-12 text-yellow-300" />,
                title: "Complementary",
                description: "Enhances results when paired with other hair treatments"
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
              IV Hair Therapy vs Other Hair Restoration Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare IV Hair Therapy with other techniques to find the best solution for your hair restoration needs.
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
                  <th className="px-6 py-4 text-center font-semibold bg-yellow-500">IV Hair Therapy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    factor: "Treatment Type",
                    fut: "Surgical (strip extraction)",
                    fue: "Surgical (individual follicle extraction)",
                    gfc: "Non-surgical (growth factor injections)",
                    iv: "Non-surgical (intravenous nutrient infusion)"
                  },
                  {
                    factor: "Procedure Duration",
                    fut: "4-6 hours",
                    fue: "6-8 hours",
                    gfc: "30-60 minutes",
                    iv: "30-60 minutes"
                  },
                  {
                    factor: "Scarring",
                    fut: "Linear scar",
                    fue: "Tiny dot scars",
                    gfc: "No scarring",
                    iv: "No scarring"
                  },
                  {
                    factor: "Recovery Time",
                    fut: "10-14 days",
                    fue: "7-10 days",
                    gfc: "None",
                    iv: "None"
                  },
                  {
                    factor: "Sessions Needed",
                    fut: "1-2 sessions",
                    fue: "1-3 sessions",
                    gfc: "4-6 sessions",
                    iv: "6-8 sessions"
                  },
                  {
                    factor: "Results Timeline",
                    fut: "12-18 months",
                    fue: "12-18 months",
                    gfc: "6-9 months",
                    iv: "4-6 months"
                  },
                  {
                    factor: "Invasiveness",
                    fut: "Highly invasive",
                    fue: "Moderately invasive",
                    gfc: "Minimally invasive",
                    iv: "Minimally invasive"
                  },
                  {
                    factor: "Cost",
                    fut: "Most economical for large sessions",
                    fue: "Moderate to high",
                    gfc: "Moderate",
                    iv: "Low to moderate"
                  },
                  {
                    factor: "Ideal Candidate",
                    fut: "Extensive hair loss",
                    fue: "Mild to moderate hair loss",
                    gfc: "Early to moderate thinning",
                    iv: "Nutrient-deficient or thinning hair"
                  },
                  {
                    factor: "Maintenance",
                    fut: "None (permanent results)",
                    fue: "None (permanent results)",
                    gfc: "Every 6-12 months",
                    iv: "Every 3-6 months"
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.factor}</td>
                    <td className="px-6 py-4 text-center text-orange-600">{row.fut}</td>
                    <td className="px-6 py-4 text-center text-amber-600">{row.fue}</td>
                    <td className="px-6 py-4 text-center text-yellow-600">{row.gfc}</td>
                    <td className="px-6 py-4 text-center text-yellow-700 font-semibold bg-yellow-50">{row.iv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER RESULTS */}
      <section id='ivhairview' className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Real Patient Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the transformative impact of IV Hair Therapy on hair density and vitality.
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
              Follow these guidelines to ensure the best results from your IV Hair Therapy sessions.
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
                    Stay well-hydrated to support IV infusion
                  </li>
                </ul>

                <h4 className="font-semibold text-yellow-700 mb-3 mt-6">Day of Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Eat a light meal before the session
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Wear loose clothing for IV access
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
                    Stay hydrated by drinking plenty of water
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid heavy exercise or sweating
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Monitor IV insertion site for minor redness
                  </li>
                </ul>

                <h4 className="font-semibold text-green-700 mb-3 mt-6">First Week:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Wash hair gently with mild shampoo
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

                <h4 className="font-semibold text-green-700 mb-3 mt-6">Long-term Care:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Follow the recommended session schedule (1-2 weeks apart)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Attend follow-up appointments to monitor progress
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Maintain a balanced diet rich in vitamins
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
              Answers to common questions about IV Hair Therapy for hair restoration.
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
              Why Trust Us for Your IV Hair Therapy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clinic combines medical expertise with advanced IV therapy protocols to deliver exceptional hair restoration results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-yellow-600" />,
                title: "Medical Expertise",
                description: "Certified medical professionals trained in IV therapy administration."
              },
              {
                icon: <Heart className="h-12 w-12 text-yellow-500" />,
                title: "High Satisfaction",
                description: "Over 3,200 successful treatments with 90% satisfaction."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-400" />,
                title: "Custom Formulations",
                description: "Tailored nutrient blends to address specific hair needs."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-300" />,
                title: "Safe Environment",
                description: "Accredited facilities with stringent hygiene standards."
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
            Ready to Nourish Your Hair?
          </h2>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-8">
            Book your free consultation today and start your journey to healthier, fuller hair with IV Hair Therapy.
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

export default IVHairTherapy;
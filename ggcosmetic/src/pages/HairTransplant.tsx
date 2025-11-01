import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HT from '@/assets/HT.jpg'
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
    q: "How long does the FUT procedure take and what's the recovery time?",
    a: "The FUT procedure typically takes 4-8 hours depending on the number of grafts needed. Initial healing of the donor strip area takes 10-14 days, with sutures removed after 10-12 days. Most patients can return to work within 2 weeks, though the donor area should be protected for 3-4 weeks during healing."
  },
  {
    q: "Will there be a visible scar with FUT?",
    a: "FUT does leave a linear scar at the donor site where the strip was removed. However, with advanced closure techniques like trichophytic closure, the scar can be minimized and easily concealed with hair as short as 1-2 cm. The scar typically heals to a thin line that becomes less visible over time."
  },
  {
    q: "How many grafts can be harvested with FUT in one session?",
    a: "FUT allows for harvesting large numbers of grafts in a single session - typically 2,000 to 4,000 grafts, and in some cases up to 5,000+ grafts. This makes it ideal for patients needing extensive coverage or those with advanced hair loss patterns who want maximum density in fewer sessions."
  },
  {
    q: "Is FUT painful? What about post-operative discomfort?",
    a: "The procedure itself is performed under local anesthesia, so you won't feel pain during the surgery. Post-operatively, there is moderate discomfort at the donor site for 3-7 days, which is managed with prescribed pain medication. Most patients describe it as a tight, pulling sensation that gradually subsides."
  },
  {
    q: "When will I see the final results of my FUT transplant?",
    a: "Transplanted hair typically sheds within 2-4 weeks (normal shock loss), then begins regrowing at 3-4 months. Noticeable improvement appears at 6-9 months, with final results visible at 12-18 months. The transplanted hair is permanent and will grow for a lifetime as it comes from the permanent donor zone."
  },
  {
    q: "What makes FUT a good choice compared to FUE?",
    a: "FUT offers several advantages: higher graft yield in one session, less damage to follicles during extraction (85-95% survival rate), more cost-effective for large sessions, and preservation of the donor area for potential future procedures. It's particularly beneficial for patients needing maximum grafts or those with limited donor density."
  }
];

const beforeAfterResults = [
  {
    before: "https://images.pexels.com/photos/5691627/pexels-photo-5691627.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: "34 years",
    grafts: "3,500 grafts",
    timeline: "14 months post-op"
  },
  {
    before: "https://images.pexels.com/photos/5691627/pexels-photo-5691627.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: "30 years",
    grafts: "4,200 grafts",
    timeline: "16 months post-op"
  },
  {
    before: "https://images.pexels.com/photos/5691627/pexels-photo-5691627.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: "38 years",
    grafts: "3,800 grafts",
    timeline: "15 months post-op"
  },
  {
    before: "https://images.pexels.com/photos/5691627/pexels-photo-5691627.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: "31 years",
    grafts: "2,900 grafts",
    timeline: "13 months post-op"
  }
];

const HairTransplantFUT = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 gap-6 items-center">
            
            {/* LEFT SIDE - TEXT */}
            <div className="text-blue space-y-6">
              <div className="space-y-2">
                <p className="text-white font-medium tracking-wide uppercase text-sm">
                  Proven Gold Standard Hair Restoration
                </p>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                  Follicular Unit<br />
                  <span className="text-blue-100">Transplantation (FUT)</span>
                </h1>
              </div>

              <p className="text-base md:text-xl text-blue-100 leading-relaxed max-w-md">
                Experience the time-tested strip method for maximum graft yield. 
                Ideal for extensive coverage with 85-95% survival rate and cost-effective results.
              </p>

              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-bold text-white">85-95%</div>
                  <div className="text-xs md:text-sm text-white">Graft Survival</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-bold text-white">4000+</div>
                  <div className="text-xs md:text-sm text-white">Grafts/Session</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-bold text-white">6000+</div>
                  <div className="text-xs md:text-sm text-white">Happy Patients</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800 hover:text-white font-semibold px-6 py-3">
                  <Microscope className="mr-2 h-5 w-5" />
                  View Results
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="relative flex justify-center">
              <img 
                src={HT}
                alt="Hair Transplant Patient"
                className="rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm md:text-base">4.8/5 Rating</div>
                    <div className="text-xs text-gray-600">From 1,500+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE FUT SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Choose FUT (Strip Method)?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FUT remains the gold standard for hair transplantation, offering maximum graft yield, 
              superior quality, and cost-effectiveness for extensive hair restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: "Maximum Grafts",
                description: "Harvest 3,000-5,000+ grafts in single session for extensive coverage"
              },
              {
                icon: <Shield className="h-12 w-12 text-green-600" />,
                title: "High Survival Rate",
                description: "85-95% graft survival with minimal transection during extraction"
              },
              {
                icon: <Award className="h-12 w-12 text-purple-600" />,
                title: "Cost-Effective",
                description: "Better value for large sessions with lower per-graft cost"
              },
              {
                icon: <Microscope className="h-12 w-12 text-orange-600" />,
                title: "Quality Control",
                description: "Microscopic dissection ensures premium multi-follicular units"
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
              FUT vs Other Hair Transplant Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare FUT (Strip Method) with other popular hair restoration techniques 
              to understand which method best suits your needs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Comparison Factors</th>
                  <th className="px-6 py-4 text-center font-semibold bg-green-600">FUT (Strip)</th>
                  <th className="px-6 py-4 text-center font-semibold">Traditional FUE</th>
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
                    fue: "Must shave donor area",
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
                    <td className="px-6 py-4 text-center text-green-700 font-semibold bg-green-50">{row.fut}</td>
                    <td className="px-6 py-4 text-center text-orange-600">{row.fue}</td>
                    <td className="px-6 py-4 text-center text-yellow-600">{row.dhi}</td>
                    <td className="px-6 py-4 text-center text-blue-600">{row.aft}</td>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Real Patient Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the transformation of our patients who chose FUT for their hair restoration journey. 
              These are real, unedited results from our clinic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfterResults.map((result, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={result.before} 
                    alt="Before Treatment"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={result.after} 
                    alt="After Treatment"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    After
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Age:</span>
                      <span className="font-semibold">{result.age}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Grafts:</span>
                      <span className="font-semibold text-blue-600">{result.grafts}</span>
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
              Detailed guidelines to ensure optimal results and smooth recovery from your FUT procedure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pre-Operative Instructions */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-xl mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800">Pre-Operative Preparation</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-700 mb-3">2 Weeks Before Procedure:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Stop blood-thinning medications (Aspirin, Ibuprofen, Vitamin E) after consulting your doctor
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Discontinue herbal supplements that affect bleeding (Ginseng, Ginkgo, Fish Oil)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Stop smoking to improve healing and graft survival
                  </li>
                </ul>

                <h4 className="font-semibold text-blue-700 mb-3 mt-6">1 Week Before:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Stop using Minoxidil or other topical hair treatments
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Complete all pre-operative blood work and medical clearances
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Arrange transportation home (sedation may be used)
                  </li>
                </ul>

                <h4 className="font-semibold text-blue-700 mb-3 mt-6">Day of Procedure:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Wash hair thoroughly with regular shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Wear comfortable, loose button-up shirt
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Eat normal breakfast (unless sedation planned)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid caffeine and alcohol 24 hours before
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
                    Keep head elevated at 45 degrees while sleeping
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Apply ice packs to forehead to reduce swelling
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Do NOT touch or scratch transplanted or donor area
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Take prescribed pain medication and antibiotics as directed
                  </li>
                </ul>

                <h4 className="font-semibold text-green-700 mb-3 mt-6">First 2 Weeks:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Gentle washing after 48 hours with provided shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Return for suture removal on day 10-12
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid strenuous activity, bending, and heavy lifting
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Protect donor area from direct sun and pressure
                  </li>
                </ul>

                <h4 className="font-semibold text-green-700 mb-3 mt-6">Long-term Care (1-6 months):</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Resume exercise after 3-4 weeks with doctor approval
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Attend follow-up appointments at 2 weeks, 3, 6, 12 months
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Use recommended hair growth products (Minoxidil, Finasteride)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Maintain healthy lifestyle with balanced nutrition
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
              Get answers to the most common questions about FUT hair transplant procedure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
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
              Why Trust Us for Your FUT Procedure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clinic combines decades of expertise, cutting-edge technology, and a patient-first approach to deliver exceptional hair restoration results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-blue-600" />,
                title: "Board-Certified Surgeons",
                description: "Our team consists of internationally recognized surgeons with over 20 years of experience in FUT procedures."
              },
              {
                icon: <Heart className="h-12 w-12 text-green-600" />,
                title: "Patient Satisfaction",
                description: "Over 6,000 successful procedures with a 98% patient satisfaction rate based on verified reviews."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-600" />,
                title: "Advanced Technology",
                description: "Utilizing state-of-the-art microscopic dissection and trichophytic closure for optimal results."
              },
              {
                icon: <Shield className="h-12 w-12 text-purple-600" />,
                title: "Safe & Sterile Environment",
                description: "Fully accredited facilities adhering to the highest standards of safety and hygiene."
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
      {/* <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Hair?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Schedule your free consultation today and take the first step towards a fuller, natural-looking head of hair with FUT.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800 hover:text-white font-semibold px-6 py-3">
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

export default HairTransplantFUT;
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import EnquiryForm from '@/components/EnquiryModal';
import { Button } from "@/components/ui/button";
import beforeafter5 from "@/assets/beforeafter5.jpg";
import beforeafter8 from "@/assets/beforeafter8.jpg";
import beforeafter7 from "@/assets/beforeafter7.jpg";
import beforeafter1 from "@/assets/beforeafter1.jpg";
import folitreat from "@/assets/folitreat2.jpg";
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
  ChevronDown,
  ChevronRight,
  Leaf,
  Activity,
  Target,
  TrendingUp,
  Crown,
  Droplets,
  Scissors
} from 'lucide-react';

const faqs = [
  {
    q: "What is Folitreat Hair Treatment and how does it work?",
    a: "Folitreat is an advanced hair treatment that uses a unique blend of peptides, growth factors, and botanical extracts to nourish hair follicles from within. The treatment works by penetrating deep into the scalp to strengthen hair roots, improve blood circulation, and provide essential nutrients that promote healthy hair growth and prevent hair fall."
  },
  {
    q: "How is Folitreat different from other hair treatments?",
    a: "Unlike conventional treatments, Folitreat combines cutting-edge biotechnology with natural ingredients. It targets multiple causes of hair loss simultaneously - DHT blocking, inflammation reduction, improved circulation, and follicle nourishment. The treatment is non-invasive, pain-free, and shows visible results within weeks."
  },
  {
    q: "What does a Folitreat session include?",
    a: "Each Folitreat session includes comprehensive scalp analysis, gentle cleansing, application of the proprietary Folitreat serum using micro-infusion technology, therapeutic scalp massage, and LED light therapy. Sessions last approximately 60 minutes and are completely comfortable and relaxing."
  },
  {
    q: "How many sessions are needed and when will I see results?",
    a: "Most clients need 8-10 sessions over 3-4 months for optimal results. Initial improvements like reduced hair fall are noticed within 2-3 weeks. New hair growth becomes visible around 6-8 weeks, with full results achieved in 4-6 months. Maintenance sessions every 2-3 months help sustain results."
  },
  {
    q: "Is Folitreat safe and suitable for everyone?",
    a: "Folitreat is completely safe and suitable for both men and women aged 18-65. It's ideal for early to moderate hair loss, thinning hair, weak hair quality, and preventive care. The treatment is not recommended for pregnant/nursing women, active scalp infections, or those with certain autoimmune conditions."
  },
  {
    q: "What is the investment for Folitreat treatment?",
    a: "Complete Folitreat packages typically range from ₹45,000-₹1,20,000 for 8-10 sessions, depending on the treatment area and hair loss severity. Each package includes all sessions, home care products, and follow-up consultations. We offer flexible EMI options and seasonal packages for added value."
  }
];

const beforeAfterResults = [
  {
    before: beforeafter5,
    age: "29 years",
    sessions: "8 sessions",
    timeline: "5 months post-treatment"
  },
  {
    before: beforeafter8,
    age: "35 years",
    sessions: "10 sessions",
    timeline: "6 months post-treatment"
  },
  {
    before: beforeafter1,
    age: "42 years",
    sessions: "9 sessions",
    timeline: "7 months post-treatment"
  },
  {
    before: beforeafter7,
    age: "26 years",
    sessions: "8 sessions",
    timeline: "4 months post-treatment"
  }
];

const FolitreatHairTreatment = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
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

        <Header />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-yellow-800 via-yellow-700 to-amber-600 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img 
            src={folitreat}
            alt="Folitreat Hair Treatment"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-2">
                <p className="text-yellow-200 font-medium tracking-wide uppercase text-sm">Advanced Hair Restoration</p>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Folitreat <span className="text-yellow-300">Advanced</span><br />
                  Hair Treatment
                </h1>
              </div>
              
              <p className="text-xl text-yellow-100 leading-relaxed max-w-xl">
                Revolutionary hair restoration technology that combines biotechnology with natural botanicals 
                for stronger, thicker, and healthier hair growth.
              </p>

              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">90%+</div>
                  <div className="text-sm text-yellow-200">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">Pain-Free</div>
                  <div className="text-sm text-yellow-200">Treatment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">5000+</div>
                  <div className="text-sm text-yellow-200">Happy Clients</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 font-semibold px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Button>
                <Link to="/#treatments">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-yellow-600 font-semibold px-8 py-4">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src={folitreat}
                  alt="Folitreat Patient"
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
                      <div className="text-sm text-gray-600">From 2000+ Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS FOLITREAT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-amber-400 animate-bounce mr-3" />
              <span className="golden-gradient-text">
                What is Folitreat Hair Treatment?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Folitreat is a breakthrough hair restoration treatment that uses advanced peptide technology 
              combined with natural botanical extracts to rejuvenate hair follicles, strengthen hair roots, 
              and stimulate natural hair growth for lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Droplets className="h-12 w-12 text-yellow-600" />,
                title: "Peptide Technology",
                description: "Advanced peptides penetrate deep to nourish and strengthen hair follicles"
              },
              {
                icon: <Leaf className="h-12 w-12 text-amber-600" />,
                title: "Natural Botanicals",
                description: "Powerful plant extracts that promote healthy hair growth naturally"
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-700" />,
                title: "DHT Blocking",
                description: "Prevents hair loss by blocking DHT, the main cause of hair thinning"
              },
              {
                icon: <Activity className="h-12 w-12 text-amber-700" />,
                title: "Follicle Activation",
                description: "Awakens dormant follicles and improves scalp blood circulation"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-amber-400 animate-bounce mr-3" />
              <span className="golden-gradient-text">
                Folitreat vs Traditional Treatments
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Folitreat's advanced technology outperforms traditional hair loss treatments 
              in effectiveness, safety, and patient satisfaction.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Treatment Factors</th>
                  <th className="px-6 py-4 text-center font-semibold">Oral Medications</th>
                  <th className="px-6 py-4 text-center font-semibold">Topical Solutions</th>
                  <th className="px-6 py-4 text-center font-semibold">PRP Therapy</th>
                  <th className="px-6 py-4 text-center font-semibold bg-amber-600">Folitreat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    factor: "Technology Used",
                    oral: "Chemical compounds",
                    topical: "Minoxidil formula",
                    prp: "Blood-derived platelets",
                    folitreat: "Advanced peptides + botanicals"
                  },
                  {
                    factor: "Success Rate",
                    oral: "50-65% effectiveness",
                    topical: "40-60% improvement",
                    prp: "70-75% results",
                    folitreat: "90%+ visible improvement"
                  },
                  {
                    factor: "Pain Level",
                    oral: "No pain",
                    topical: "No pain",
                    prp: "Moderate discomfort",
                    folitreat: "Completely pain-free"
                  },
                  {
                    factor: "Side Effects",
                    oral: "Sexual dysfunction, mood changes",
                    topical: "Scalp irritation, flaking",
                    prp: "Swelling, bruising",
                    folitreat: "No side effects"
                  },
                  {
                    factor: "Treatment Duration",
                    oral: "Lifelong daily use",
                    topical: "Twice daily application",
                    prp: "4-6 sessions needed",
                    folitreat: "8-10 sessions program"
                  },
                  {
                    factor: "Results Timeline",
                    oral: "4-6 months minimum",
                    topical: "3-6 months",
                    prp: "3-5 months",
                    folitreat: "2-3 weeks initial results"
                  },
                  {
                    factor: "Hair Quality",
                    oral: "Maintains existing hair",
                    topical: "Slight thickness increase",
                    prp: "Good quality improvement",
                    folitreat: "Excellent quality & shine"
                  },
                  {
                    factor: "Scalp Health",
                    oral: "No improvement",
                    topical: "May cause irritation",
                    prp: "Moderate improvement",
                    folitreat: "Complete scalp rejuvenation"
                  },
                  {
                    factor: "Maintenance",
                    oral: "Daily forever",
                    topical: "Twice daily forever",
                    prp: "Every 6-12 months",
                    folitreat: "Every 2-3 months"
                  },
                  {
                    factor: "Natural Approach",
                    oral: "Chemical-based",
                    topical: "Synthetic formula",
                    prp: "Natural but invasive",
                    folitreat: "Natural & non-invasive"
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.factor}</td>
                    <td className="px-6 py-4 text-center text-red-600">{row.oral}</td>
                    <td className="px-6 py-4 text-center text-blue-600">{row.topical}</td>
                    <td className="px-6 py-4 text-center text-purple-600">{row.prp}</td>
                    <td className="px-6 py-4 text-center text-yellow-700 font-semibold bg-yellow-50">{row.folitreat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-amber-400 animate-bounce mr-3" />
              <span className="golden-gradient-text">
                The Folitreat Treatment Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each 60-minute Folitreat session is designed to be relaxing and effective, 
              combining multiple advanced therapies for optimal hair restoration.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Scalp Analysis",
                  description: "Comprehensive digital analysis using advanced trichoscopy to assess hair density, follicle health, and identify the root causes of hair loss.",
                  icon: <Target className="h-8 w-8 text-white" />
                },
                {
                  step: "02", 
                  title: "Deep Cleansing",
                  description: "Gentle yet thorough cleansing to remove buildup, excess oil, and impurities, preparing the scalp for maximum absorption of treatment.",
                  icon: <Droplets className="h-8 w-8 text-white" />
                },
                {
                  step: "03",
                  title: "Folitreat Serum Application", 
                  description: "Application of proprietary peptide-rich serum using micro-infusion technology for deep penetration and targeted follicle nourishment.",
                  icon: <Sparkles className="h-8 w-8 text-white" />
                },
                {
                  step: "04",
                  title: "LED Light Therapy",
                  description: "Clinical-grade LED light therapy stimulates cellular activity, increases ATP production, and enhances the absorption of active ingredients.",
                  icon: <Zap className="h-8 w-8 text-white" />
                },
                {
                  step: "05",
                  title: "Therapeutic Massage",
                  description: "Specialized scalp massage technique improves blood circulation, reduces stress, and enhances treatment effectiveness naturally.",
                  icon: <Heart className="h-8 w-8 text-white" />
                },
                {
                  step: "06",
                  title: "Home Care Protocol",
                  description: "Personalized home care regimen with specialized products and supplements to maintain and enhance treatment results between sessions.",
                  icon: <Leaf className="h-8 w-8 text-white" />
                }
              ].map((process, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
                    <div className="bg-gradient-to-r from-yellow-600 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      {process.icon}
                    </div>
                    <div className="absolute top-4 right-4 text-6xl font-bold text-yellow-100">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-amber-400 animate-bounce mr-3" />
              <span className="golden-gradient-text">
                Real Folitreat Transformations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the remarkable improvements our clients have achieved with Folitreat treatment. 
              These authentic results showcase the power of advanced hair restoration technology.
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
                      <span className="font-semibold text-amber-600">{result.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRE & POST CARE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-amber-400 animate-bounce mr-3" />
              <span className="golden-gradient-text">
                Treatment Care Guidelines
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these guidelines to maximize your Folitreat results and ensure optimal healing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pre-Treatment */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-600 p-3 rounded-xl mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800">Pre-Treatment Care</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-yellow-700 mb-3">Before Your Session:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Wash hair with mild shampoo 24 hours before treatment
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid styling products, gels, or hairspray on treatment day
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Don't apply oil or heavy conditioners before session
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Stay well-hydrated and get adequate sleep
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid alcohol 48 hours before treatment
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    Eat a light meal 2 hours before appointment
                  </li>
                </ul>
              </div>
            </div>

            {/* Post-Treatment */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-xl mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800">Post-Treatment Care</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-amber-700 mb-3">After Your Session:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Don't wash hair for 12 hours after treatment
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Apply provided home care serum daily as directed
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid swimming pools and saunas for 48 hours
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Use gentle, sulfate-free shampoo recommended by clinic
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Take prescribed supplements consistently
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Maintain healthy diet rich in proteins and vitamins
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-amber-400 animate-bounce mr-3" />
              <span className="bg-gradient-to-r from-gray-900 via-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about Folitreat treatment, sessions, safety, and results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((f, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg">
                <button
                  type="button"
                  aria-expanded={false}
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left text-lg font-semibold"
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`w-5 h-5 ml-4 transition-transform ${openFaq === idx ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                <div
                  className={`mt-4 text-gray-700 overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="py-2">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FolitreatHairTreatment;
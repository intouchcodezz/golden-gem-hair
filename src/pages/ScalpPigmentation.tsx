import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import beforeafter18 from '@/assets/beforeafter18.webp';
import beforeafter19 from '@/assets/beforeafter19.webp';
import beforeafter20 from '@/assets/beforeafter20.jpg';
import beforeafter21 from '@/assets/beforeafter21.webp';
import scalp from '@/assets/scalp.jpg';
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
  Brush,
  Heart,
  Zap,
  ChevronRight,
  Eye,
  Palette,
  Timer,
  TrendingUp,
  Camera,
  Scissors
} from 'lucide-react';

const faqs = [
  {
    q: "What exactly is Scalp Micro Pigmentation and how does it work?",
    a: "Scalp Micro Pigmentation (SMP) is a specialized cosmetic tattooing technique that uses micro-fine needles to deposit natural pigments into the scalp's epidermal layer. The process creates thousands of tiny impressions that replicate the appearance of hair follicles, giving the illusion of a closely shaved head with natural hair density. Unlike traditional tattoos, SMP uses specific equipment, techniques, and pigments designed specifically for scalp application."
  },
  {
    q: "How is SMP different from a regular tattoo or hair transplant?",
    a: "SMP differs significantly from tattoos in pigment composition, needle depth, and technique. We use carbon-based pigments that won't turn blue or green over time, and deposit them only in the epidermis (not deeper dermis like tattoos). Unlike hair transplants, SMP is non-surgical, doesn't require donor hair, works on any degree of hair loss, and provides immediate results without scarring or lengthy recovery periods."
  },
  {
    q: "How many sessions are required and what's the timeline?",
    a: "Most clients require 2-4 sessions spaced 7-10 days apart for optimal results. Session 1 establishes the baseline and shape, Session 2 adds density and refinement, Session 3 (if needed) perfects the look with final adjustments. Each session takes 2-4 hours depending on the area covered. Results are immediately visible after each session, with full healing completed 7-10 days after the final session."
  },
  {
    q: "Is SMP safe and are there any side effects?",
    a: "SMP is extremely safe when performed by certified professionals using sterile equipment and quality pigments. The procedure is minimally invasive with very low risk. Common temporary side effects include mild redness, tenderness, and slight swelling for 2-4 days. Serious complications are rare but can include infection (if aftercare isn't followed) or allergic reactions (less than 1% of cases). We conduct patch tests for sensitive individuals."
  },
  {
    q: "Who is a good candidate for Scalp Micro Pigmentation?",
    a: "SMP is suitable for most people experiencing hair loss, including male pattern baldness, female pattern hair loss, alopecia areata, scarring from surgery or injury, and those wanting to add density to thinning hair. Ideal candidates are in good health, have realistic expectations, and prefer a low-maintenance solution. It's not recommended for those with active scalp conditions, certain autoimmune disorders, or unrealistic expectations about hair growth."
  },
  {
    q: "How long does SMP last and will I need touch-ups?",
    a: "SMP results typically last 4-6 years before requiring touch-ups, though this varies by individual factors like skin type, sun exposure, and lifestyle. The pigment gradually fades but maintains its natural appearance. Most clients need minor touch-ups every 3-5 years to refresh the color and density. Annual touch-up sessions can help maintain optimal appearance and are significantly less extensive than initial treatment."
  },
  {
    q: "What's the cost of SMP treatment?",
    a: "SMP investment varies based on the extent of treatment area and number of sessions required, typically ranging from ₹40,000-₹1,50,000 for complete treatment. Factors affecting cost include degree of hair loss, head size, complexity of the case, and geographic location. This includes all initial sessions, aftercare products, and consultation. Touch-up sessions are priced separately. We offer financing options to make treatment accessible."
  },
  {
    q: "Can SMP be removed or modified if I'm not satisfied?",
    a: "Yes, SMP can be modified, lightened, or removed, though it's more complex than the initial procedure. Modifications can adjust hairline shape, density, or color. Removal typically requires laser treatments (similar to tattoo removal) and takes multiple sessions. However, with proper consultation, realistic expectations, and skilled application, client satisfaction rates exceed 95%. We offer a consultation process specifically to minimize the need for future changes."
  }
];

const beforeAfterResults = [
  {
    before: beforeafter18,
    age: "32 years",
    sessions: "3 sessions",
    timeline: "Norwood 4 to Full Coverage"
  },
  {
    before: beforeafter19,
    age: "28 years",
    sessions: "2 sessions",
    timeline: "Hairline Restoration"
  },
  {
    before: beforeafter20,
    age: "45 years",
    sessions: "4 sessions",
    timeline: "Crown + Vertex Coverage"
  },
  {
    before: beforeafter21,
    age: "38 years",
    sessions: "3 sessions",
    timeline: "Scar Camouflage + Density"
  }
];

const ScalpMicroPigmentation = () => {
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

      {/* HERO SECTION – Modern Golden Gradient + Glass Design */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-white">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-amber-300/40 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-yellow-200/40 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

        {/* Background Image with Soft Overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img 
            src="https://images.pexels.com/photos/5452296/pexels-photo-5452296.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="SMP Treatment Process"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/50 via-transparent to-white/20 backdrop-blur-sm"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-2">
                <p className="text-amber-600 font-semibold tracking-wide uppercase text-sm">
                  Advanced Cosmetic Tattooing
                </p>
                <h1 className="text-3xl md:text-4xl font-bold leading-[3.2rem] md:leading-[3.4rem] text-slate-800"> 
                  Professional <span className="text-amber-500">Scalp Micro</span><br />
                  Pigmentation
                </h1>
              </div>

              <p className="text-sm sm:text-sm md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
                Transform your appearance with the most advanced non-surgical hair restoration. 
                Achieve the perfect illusion of natural hair density — instant, lasting, and completely safe.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-xl sm:text-xl md:text-2xl font-bold text-amber-600">98%+</div>
                  <div className="text-sm text-slate-700">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-xl md:text-2xl font-bold text-amber-600">Non-Surgical</div>
                  <div className="text-sm text-slate-700">Safe Procedure</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-xl md:text-2xl font-bold text-amber-600">5000+</div>
                  <div className="text-sm text-slate-700">Successful Cases</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                    <Camera className="mr-2 h-5 w-5" />
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT - Image Section */}
            <div className="relative hidden lg:flex justify-center">
              {/* Ambient highlight behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/30 via-white/10 to-transparent rounded-3xl blur-2xl"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-md">
                <img 
                  src={scalp}
                  alt="SMP Results"
                  className="object-cover w-full h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-md">
                  <div className="flex -space-x-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium text-slate-800 text-sm">4.9/5 from 1200+ clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS SMP */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              What is Scalp Micro Pigmentation?
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Scalp Micro Pigmentation is a groundbreaking non-surgical cosmetic procedure that uses specialized 
              micro-needles to deposit natural pigments into the scalp's epidermal layer. This creates the visual 
              impression of natural hair follicles, delivering an incredibly realistic appearance of a full head of hair.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
                {
                  icon: <Palette className="h-12 w-12 text-amber-600" />,
                title: "Precision Artistry",
                description: "Custom color matching and artistic placement creating incredibly natural-looking results"
              },
              {
                  icon: <Eye className="h-12 w-12 text-amber-600" />,
                title: "Visual Illusion",
                description: "Creates the perfect optical illusion of natural hair density and youthful hairline"
              },
              {
                  icon: <Shield className="h-12 w-12 text-amber-600" />,
                title: "Safe & Proven",
                description: "FDA-approved pigments and sterile techniques ensure maximum safety and effectiveness"
              },
              {
                  icon: <Timer className="h-12 w-12 text-amber-600" />,
                title: "Immediate Results",
                description: "Visible improvement immediately after first session with progressive enhancement"
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
      <section className="py-0 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              SMP vs Other Hair Loss Solutions
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Compare Scalp Micro Pigmentation against traditional hair loss treatments to understand 
              why it's becoming the preferred choice for millions worldwide.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs sm:text-xs md:text-base">
                  <th className="px-6 py-4 text-left font-semibold">Comparison Factors</th>
                  <th className="px-6 py-4 text-center font-semibold text-xs sm:text-xs md:text-base">Hair Systems/Wigs</th>
                  <th className="px-6 py-4 text-center font-semibold text-xs sm:text-xs md:text-base">Hair Medications</th>
                  <th className="px-6 py-4 text-center font-semibold text-xs sm:text-xs md:text-base">Hair Transplant</th>
                  <th className="px-6 py-4 text-center font-semibold text-xs sm:text-xs md:text-base bg-amber-600">Scalp Micro Pigmentation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    factor: "Appearance Quality",
                    wigs: "Can look artificial, requires styling",
                    medications: "Maintains existing hair only",
                    transplant: "Natural but limited coverage",
                    smp: "Incredibly realistic, perfect hairline definition"
                  },
                  {
                    factor: "Immediate Results",
                    wigs: "Instant but temporary",
                    medications: "3-6 months minimum",
                    transplant: "12-18 months for full results",
                    smp: "Immediately visible improvement"
                  },
                  {
                    factor: "Maintenance Required",
                    wigs: "Daily styling, regular replacement",
                    medications: "Daily application, lifelong",
                    transplant: "Minimal after healing",
                    smp: "Touch-ups every 4-6 years"
                  },
                  {
                    factor: "Surgical Requirements",
                    wigs: "None (external solution)",
                    medications: "None (topical/oral)",
                    transplant: "Major surgery required",
                    smp: "Non-surgical cosmetic procedure"
                  },
                  {
                    factor: "Side Effects",
                    wigs: "Scalp irritation, discomfort",
                    medications: "Sexual dysfunction, mood changes",
                    transplant: "Scarring, infection risk, pain",
                    smp: "Minimal: mild redness for 2-3 days"
                  },
                  {
                    factor: "Lifestyle Restrictions",
                    wigs: "Swimming, sports, intimate situations",
                    medications: "None significant",
                    transplant: "Activity restrictions during healing",
                    smp: "Minimal restrictions after healing"
                  },
                  {
                    factor: "Suitable Hair Loss Types",
                    wigs: "Any degree of hair loss",
                    medications: "Early stage only",
                    transplant: "Moderate loss with donor hair",
                    smp: "All types and degrees of hair loss"
                  },
                  {
                    factor: "Confidence Level",
                    wigs: "Constant worry about detection",
                    medications: "Dependent on effectiveness",
                    transplant: "High when successful",
                    smp: "Extremely high, worry-free lifestyle"
                  },
                  {
                    factor: "Cost Over 10 Years",
                    wigs: "₹5-15 lakhs (replacements, maintenance)",
                    medications: "₹2-5 lakhs (ongoing prescriptions)",
                    transplant: "₹2-8 lakhs (one-time + possible touch-ups)",
                    smp: "₹1-2 lakhs (initial + occasional touch-ups)"
                  },
                  {
                    factor: "Detection Risk",
                    wigs: "High risk if not perfectly fitted",
                    medications: "None (natural hair)",
                    transplant: "Low when healed properly",
                    smp: "Virtually undetectable when done properly"
                  },
                  {
                    factor: "Weather Resistance",
                    wigs: "Problems with wind, water, heat",
                    medications: "No weather concerns",
                    transplant: "Natural hair behavior",
                    smp: "Completely weather-proof"
                  },
                  {
                    factor: "Age Suitability",
                    wigs: "Any age",
                    medications: "Limited by health conditions",
                    transplant: "Limited by donor hair availability",
                    smp: "Suitable for ages 18-80+"
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.factor}</td>
                    <td className="px-6 py-4 text-center text-red-600">{row.wigs}</td>
                    <td className="px-6 py-4 text-center text-orange-600">{row.medications}</td>
                    <td className="px-6 py-4 text-center text-yellow-600">{row.transplant}</td>
                    <td className="px-6 py-4 text-center text-amber-700 font-semibold bg-amber-50">{row.smp}</td>
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
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              The Professional SMP Process
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Our comprehensive 4-phase approach ensures exceptional results through meticulous 
              planning, artistic execution, and progressive refinement.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Detailed Consultation & Design",
                  description: "Comprehensive scalp analysis, color matching, hairline design using advanced imaging technology, and creation of your personalized treatment plan.",
                  icon: <Users className="h-8 w-8 text-white" />
                },
                {
                  step: "02", 
                  title: "Session 1: Foundation & Framework",
                  description: "Establish the hairline shape, initial pigment application, and create the foundational framework for your new look using precision micro-needling.",
                  icon: <Brush className="h-8 w-8 text-white" />
                },
                {
                  step: "03",
                  title: "Session 2-3: Density & Refinement", 
                  description: "Add density, depth, and texture to create natural variation. Fine-tune color matching and perfect the overall appearance through layered application.",
                  icon: <Palette className="h-8 w-8 text-white" />
                },
                {
                  step: "04",
                  title: "Final Session & Aftercare",
                  description: "Complete final adjustments, ensure perfect symmetry and density, provide comprehensive aftercare instructions and schedule follow-up appointments.",
                  icon: <CheckCircle className="h-8 w-8 text-white" />
                }
              ].map((process, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-md p-8 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="bg-gradient-to-r from-amber-600 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      {process.icon}
                    </div>
                    <div className="absolute top-4 right-4 text-6xl font-bold text-amber-100">
                      {process.step}
                    </div>
                    <h3 className="text-md font-semibold text-gray-800 mb-4">{process.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="h-8 w-8 text-amber-300" />
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
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Incredible Patient Transformations
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Experience the dramatic before and after results achieved through our advanced SMP techniques. 
              These authentic results showcase the life-changing potential of professional scalp micro pigmentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfterResults.map((result, idx) => (
              <div key={idx} className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <button onClick={() => (window as any).__openImageLightbox?.(result.before, result.age)} className="block w-full">
                    <img 
                      src={result.before} 
                      alt="Before SMP Treatment"
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
                      <span className="font-semibold text-blue-600">{result.sessions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Result:</span>
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
              Essential Treatment Guidelines
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-2xl mx-auto leading-normal">
              Following these detailed pre and post-treatment instructions is crucial for achieving 
              optimal results and ensuring proper healing of your SMP treatment.
            </p>
          </div>

            <div className="grid lg:grid-cols-2 gap-12">
            {/* Pre-Treatment Instructions */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-md p-8">
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-xl mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-800">Pre-Treatment Preparation</h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-blue-700 mb-3">1 Week Before Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Discontinue blood-thinning medications (Aspirin, Ibuprofen) after consulting your doctor
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid alcohol consumption for 48 hours before treatment
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Stop using hair growth treatments (Minoxidil, Propecia) as advised
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid excessive sun exposure and tanning treatments
                  </li>
                </ul>

                <h4 className="font-medium text-amber-700 mb-3 mt-6">24 Hours Before:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Get a good night's sleep (minimum 7-8 hours) for optimal healing
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid caffeine and energy drinks on treatment day
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Wash hair thoroughly with antibacterial shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Shave head to desired length (usually 0-1mm for best results)
                  </li>
                </ul>

                <h4 className="font-medium text-blue-700 mb-3 mt-6">Day of Treatment:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Eat a substantial meal before arriving (treatment can take 3-5 hours)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Arrive with clean scalp, no styling products or oils
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Wear comfortable, dark-colored clothing
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    Bring entertainment (phone, tablet) for longer sessions
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
                <h4 className="font-medium text-amber-700 mb-3">First 4 Days (Critical Healing Period):</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Keep scalp completely dry - no washing, swimming, or excessive sweating
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Sleep on clean pillowcase, preferably on your back
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Avoid direct sunlight and wear a loose-fitting hat when outdoors
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Do not touch, scratch, or pick at treated areas
                  </li>
                </ul>

                <h4 className="font-medium text-amber-700 mb-3 mt-6">Days 5-10:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Begin gentle washing with lukewarm water and mild, fragrance-free shampoo
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Pat dry gently with clean towel - no rubbing or aggressive drying
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Light exercise is okay, but avoid activities causing excessive sweating
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Apply recommended aftercare moisturizer as directed
                  </li>
                </ul>

                <h4 className="font-medium text-amber-700 mb-3 mt-6">Long-term Care (Weeks 2+):</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    Resume normal activities and exercise routines
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Always use SPF 30+ sunscreen on scalp when exposed to sun
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Use quality moisturizers to maintain skin health and pigment vibrancy
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                    Schedule follow-up appointments as recommended
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
              Get detailed answers to the most common questions about Scalp Micro Pigmentation 
              from our expert practitioners.
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
              Why Choose The Golden Gem Clinic for Scalp Micro Pigmentation
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-xl sm:text-xl md:text-3xl font-bold text-gray-800 mb-2">5000+</div>
              <div className="text-gray-600">Successful Treatments</div>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-indigo-600" />
              </div>
              <div className="text-xl sm:text-xl md:text-3xl font-bold text-gray-800 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-purple-600" />
              </div>
              <div className="text-xl sm:text-xl md:text-3xl font-bold text-gray-800 mb-2">4.9/5</div>
              <div className="text-gray-600">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-cyan-600" />
              </div>
              <div className="text-xl sm:text-xl md:text-3xl font-bold text-gray-800 mb-2">98%+</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ScalpMicroPigmentation;
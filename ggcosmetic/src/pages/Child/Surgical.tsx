import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import EnquiryForm from '@/components/EnquiryModal';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/HT.jpg';
import beforeafter3 from '@/assets/beforeafter3.jpg';
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
  ChevronRight,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

import { useImageLightbox } from '@/components/ImageLightbox';

const Surgical = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqs = [
    {
      q: "How many days does it take for complete healing?",
      a: "With our advanced AFT technique using ultra-fine titanium punches and no blades, the donor and recipient areas heal remarkably quickly. Initial healing occurs within 2-3 days, with minimal discomfort. The transplanted area may experience some shedding for about 10 days, after which new hair growth begins to appear as tiny hair follicles."
    },
    {
      q: "What makes AFT different and superior to traditional FUE?",
      a: "AFT uses significantly smaller titanium-tip punches (0.6-0.7mm vs 1.0-1.2mm in FUE), resulting in faster healing and minimal scarring. We enhance the grafts with PRP (Platelet-Rich Plasma) and stem cell therapy, which promotes 90%+ graft survival rate compared to 70-80% in traditional methods. The precision instruments allow for higher density implantation with natural-looking results."
    },
    {
      q: "How many sessions will I need for optimal results?",
      a: "The number of sessions depends on your degree of hair loss, donor hair density, and desired coverage. Most patients achieve excellent results with 1-2 sessions. During your free consultation, our surgeon will assess your individual case and create a personalized treatment plan with realistic expectations and timeline."
    },
    {
      q: "Is the AFT procedure painful and will there be visible scarring?",
      a: "AFT is virtually painless thanks to advanced local anesthesia and precision micro-instruments. Most patients report minimal to no discomfort during and after the procedure. Scarring is minimal to non-existent as we don't make large incisions - only tiny punctures that heal completely within days, leaving no visible marks."
    },
    {
      q: "When will I see the final results of my hair transplant?",
      a: "You'll notice initial hair growth starting at 3-4 months post-procedure. Significant improvement becomes visible at 6-8 months, with final results apparent at 12-15 months. The transplanted hair is permanent and will continue to grow naturally for a lifetime, as it's taken from the permanent zone of your scalp."
    },
    {
      q: "What is the success rate of AFT compared to other methods?",
      a: "Our AFT technique boasts a 90-95% graft survival rate, significantly higher than traditional methods. This is achieved through minimal handling of grafts, enhanced preservation solutions, PRP treatment, and precision implantation. Over 98% of our patients report satisfaction with their natural-looking results."
    }
  ];

  const beforeAfterResults = [
    {
      before: beforeafter3,
      age: "32 years",
      grafts: "2,800 grafts",
      timeline: "12 months post-op"
    },
    {
      before: beforeafter20,
      age: "28 years",
      grafts: "3,200 grafts",
      timeline: "14 months post-op"
    },
    {
      before: beforeafter21,
      age: "45 years",
      grafts: "4,000 grafts",
      timeline: "6 months post-op"
    }
  ];

  const { open } = useImageLightbox();

  const features = [
    {
      icon: <Zap className="w-[clamp(36px,8vw,48px)] h-[clamp(36px,8vw,48px)] text-primary mb-[clamp(16px,4vw,24px)]" />,
      title: "Advanced Technology",
      description: "Ultra-fine titanium punches (0.6-0.7mm) for minimal trauma and faster healing"
    },
    {
      icon: <Shield className="w-[clamp(36px,8vw,48px)] h-[clamp(36px,8vw,48px)] text-green-500 mb-[clamp(16px,4vw,24px)]" />,
      title: "95% Success Rate",
      description: "Highest graft survival rate with PRP and stem cell enhancement"
    },
    {
      icon: <Clock className="w-[clamp(36px,8vw,48px)] h-[clamp(36px,8vw,48px)] text-purple-500 mb-[clamp(16px,4vw,24px)]" />,
    title: "Quick Recovery",
      description: "Return to work in 2-3 days with minimal downtime and discomfort"
    },
    {
      icon: <Award className="w-[clamp(36px,8vw,48px)] h-[clamp(36px,8vw,48px)] text-orange-500 mb-[clamp(16px,4vw,24px)]" />,
      title: "Natural Results",
      description: "Precise angle and depth control for completely natural-looking hair"
    }
  ];

  const comparisonData = [
    {
      factor: "Extraction Method",
      fut: "Strip of scalp removed with scalpel",
      fue: "Manual punch extraction (1.0-1.2mm)",
      dhi: "Improved punch technique with implanter",
      aft: "Ultra-fine titanium punches (0.6-0.7mm) with rotary device"
    },
    {
      factor: "Invasiveness Level",
      fut: "Highly invasive surgery",
      fue: "Moderately invasive",
      dhi: "Minimally invasive",
      aft: "Ultra-minimally invasive"
    },
    {
      factor: "Scarring & Marks",
      fut: "Permanent linear scar",
      fue: "Visible dotted scars",
      dhi: "Minimal dotted scars",
      aft: "Virtually no visible scarring"
    },
    {
      factor: "Healing Time",
      fut: "14-21 days",
      fue: "7-10 days",
      dhi: "5-7 days",
      aft: "2-3 days with collagen enhancement"
    },
    {
      factor: "Graft Survival Rate",
      fut: "60-70%",
      fue: "70-80%",
      dhi: "80-85%",
      aft: "90-95% with PRP/Stem cells"
    },
    {
      factor: "Pain & Discomfort",
      fut: "High post-operative pain",
      fue: "Moderate discomfort",
      dhi: "Low discomfort",
      aft: "Minimal to no discomfort"
    }
  ];

  const trustIndicators = [
    { icon: Users, number: "5000+", label: "Successful Procedures", color: "#3b82f6" },
    { icon: Award, number: "15+", label: "Years Experience", color: "#10b981" },
    { icon: Star, number: "4.9/5", label: "Patient Rating", color: "#8b5cf6" },
    { icon: Shield, number: "95%+", label: "Success Rate", color: "hsl(var(--primary))" }
  ];

  const preOpInstructions = [
    "Stop blood-thinning medications (Aspirin, Ibuprofen, Vitamin E) after consulting your doctor",
    "Discontinue herbal supplements (Ginseng, Ginkgo Biloba, Green Tea extract)",
    "Avoid excessive sun exposure to scalp",
    "Wash hair with antibacterial shampoo provided",
    "Wear loose, button-up shirt (avoid pulling clothes over head)",
    "Eat a light, nutritious breakfast",
    "Avoid caffeine, alcohol, and smoking for 24 hours prior"
  ];

  const postOpInstructions = [
    "Do NOT touch, rub, or scratch the transplanted area",
    "Sleep with head elevated at 45-degree angle using pillows",
    "Apply ice packs to forehead (not scalp) for swelling control",
    "Take prescribed medications exactly as directed",
    "Resume normal exercise after 2 weeks with doctor approval",
    "Attend all follow-up appointments (1, 3, 6, 12 months)",
    "Use prescribed hair growth products as recommended",
    "Maintain healthy diet rich in proteins and vitamins"
  ];
      const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-[clamp(14px,2.5vw,16px)] leading-relaxed overflow-hidden overflow-y-auto">
           <EnquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          console.log("Form submitted:", data);
          setIsModalOpen(false);
        }}
        treatment="General Consultation"
      />
      {/* Hero Section */}
      <section className="relative flex items-center min-h-[600px] md:min-h-screen bg-gradient-to-br from-primary/80 to-primary/40 rounded-b-[clamp(20px,8vw,60px)] shadow-2xl overflow-hidden">
        <div className="relative z-10 w-full max-w-[1400px] mx-auto p-[clamp(20px,5vw,80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(30px,8vw,60px)] items-center">
            {/* Left Side - Text Content */}
            <div>
              <div style={{ marginBottom: 'clamp(20px, 5vw, 32px)' }}>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  fontWeight: '600', 
                  letterSpacing: '2px', 
                  textTransform: 'uppercase', 
                  fontSize: 'clamp(12px, 2.5vw, 14px)',
                  marginBottom: 'clamp(12px, 3vw, 16px)',
                  wordBreak: 'break-word',
                }}>
                  World-Class Hair Restoration
                </p>
                <h1 className="text-[clamp(24px,8vw,60px)] font-extrabold text-foreground mb-[clamp(16px,4vw,24px)] leading-[1.1] break-words hyphens-auto drop-shadow-md">
                  Advanced Follicular<br />
                  <span style={{ color: 'rgba(255, 255, 255, 0.95)' }}>Transplant</span> (AFT)
                </h1>
              </div>

              <p className="text-[clamp(16px,3.5vw,20px)] text-muted-foreground mb-[clamp(24px,6vw,40px)] font-medium leading-relaxed break-words">
                Experience the most advanced hair restoration technology with 95% success rate. 
                Get natural, permanent results with minimal downtime and no visible scarring.
              </p>

              <div className="grid grid-cols-3 gap-[clamp(8px,3vw,20px)] py-[clamp(20px,5vw,40px)]">
                <div className="text-center bg-white/90 p-[clamp(12px,4vw,24px)] rounded-[clamp(12px,3vw,20px)] backdrop-blur-md border border-border">
                  <div className="text-[clamp(18px,5vw,32px)] font-extrabold text-primary mb-1 break-keep">95%+</div>
                  <div className="text-[clamp(10px,2.5vw,14px)] font-semibold text-foreground break-words hyphens-auto">Success Rate</div>
                </div>
                <div className="text-center bg-white/90 p-[clamp(12px,4vw,24px)] rounded-[clamp(12px,3vw,20px)] backdrop-blur-md border border-border">
                  <div className="text-[clamp(18px,5vw,32px)] font-extrabold text-primary mb-1 break-keep">2-3</div>
                  <div className="text-[clamp(10px,2.5vw,14px)] font-semibold text-foreground break-words hyphens-auto">Days Healing</div>
                </div>
                <div className="text-center bg-white/90 p-[clamp(12px,4vw,24px)] rounded-[clamp(12px,3vw,20px)] backdrop-blur-md border border-border">
                  <div className="text-[clamp(18px,5vw,32px)] font-extrabold text-primary mb-1 break-keep">5000+</div>
                  <div className="text-[clamp(10px,2.5vw,14px)] font-semibold text-foreground break-words hyphens-auto">Happy Patients</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-[clamp(8px,2vw,16px)] mt-[clamp(20px,5vw,40px)]">
                <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-[clamp(4px,2vw,8px)] px-[clamp(16px,4vw,32px)] py-[clamp(12px,3vw,16px)] rounded-full btn-global font-semibold shadow-md transition-all hover:scale-105">
                  <Phone size={16} />
                  <span>Free Consultation</span>
                </button>
                <Link to="#viewpatient">
                <button className="rounded-full font-semibold inline-flex items-center gap-[clamp(4px,2vw,8px)] backdrop-blur-md cursor-pointer transition-all duration-300 btn-global px-[clamp(14px,4vw,30px)] py-[clamp(10px,3vw,14px)]">
                  <Microscope size={16} />
                  <span>View Results</span>
                </button>
                </Link>
              </div>
            </div>

            {/* Right Side - Enhanced Image */}
            <div className="flex justify-center items-center relative">
              <div className="relative">
                <img 
                  className="rounded-[clamp(16px,4vw,24px)] shadow-2xl w-full max-w-[clamp(280px,80vw,400px)] aspect-[4/3] object-cover"
                  src={heroImage}
                  alt="Hair Transplant Results"
                />

                <div className="absolute bottom-[clamp(-10px,-3vw,-20px)] left-[clamp(-10px,-3vw,-20px)] bg-white/95 p-[clamp(12px,3vw,20px)] rounded-[clamp(12px,3vw,16px)] shadow-md backdrop-blur-md border border-border">
                  <div className="flex items-center gap-[clamp(8px,2vw,12px)]">
                    <div className="flex gap-[2px]">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-[clamp(12px,3vw,16px)] h-[clamp(12px,3vw,16px)] text-primary fill-primary" />
                      ))}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-foreground text-[clamp(14px,3vw,16px)]">4.9/5 Rating</div>
                      <div className="text-[clamp(10px,2.5vw,12px)] text-muted-foreground">From 1,200+ Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose AFT Section */}
      <section className="px-[clamp(16px,4vw,40px)] py-[clamp(40px,10vw,100px)] max-w-[1400px] mx-auto">
        <div>
          <h2 className="text-[clamp(28px,7vw,48px)] font-bold text-foreground text-center mb-[clamp(8px,2vw,16px)] leading-[1.2] break-words hyphens-auto">
            Why Choose AFT Over Traditional Methods?
          </h2>
          <p className="text-[clamp(16px,3.5vw,18px)] text-muted-foreground text-center mb-[clamp(40px,8vw,60px)] max-w-[700px] mx-auto leading-[1.6] break-words">
            AFT represents the pinnacle of hair transplant technology, offering superior results 
            with minimal invasiveness and maximum comfort.
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(16px,4vw,32px)] mb-[clamp(40px,8vw,60px)]">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-card backdrop-blur-[15px] rounded-[clamp(16px,4vw,24px)] p-[clamp(20px,5vw,32px)] shadow-soft border border-border transition-all duration-300">
                <div className="flex justify-center mb-[clamp(16px,4vw,24px)]">
                  {feature.icon}
                </div>
                <h3 className="text-[clamp(18px,4vw,24px)] font-bold text-foreground mb-[clamp(12px,3vw,16px)] break-words">
                  {feature.title}
                </h3>
                 <p className="text-[clamp(14px,3vw,16px)] text-muted-foreground leading-[1.6] break-words">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="px-[clamp(16px,4vw,40px)] py-[clamp(40px,10vw,100px)] max-w-[1400px] mx-auto">
        <div>
          <h2 className="text-[clamp(28px,7vw,48px)] font-bold text-foreground text-center mb-[clamp(8px,2vw,16px)] leading-[1.2] break-words hyphens-auto">
            AFT vs Traditional Hair Transplant Methods
          </h2>
          <p className="text-[clamp(16px,3.5vw,18px)] text-muted-foreground text-center mb-[clamp(40px,8vw,60px)] max-w-[700px] mx-auto leading-[1.6] break-words">
            See how our Advanced Follicular Transplant technique outperforms traditional methods 
            in every important aspect of hair restoration.
          </p>

          <div className="overflow-x-auto mb-[clamp(20px,5vw,40px)] rounded-[clamp(16px,4vw,24px)] shadow-md border border-border">
  <table className="w-full min-w-[600px] bg-card border-collapse">
              <thead className="bg-card">
                <tr>
                  <th className="text-left font-semibold px-4 py-3 border-b border-border">Comparison Factors</th>
                  <th className="text-center font-semibold px-4 py-3 border-b border-border">FUT (Strip)</th>
                  <th className="text-center font-semibold px-4 py-3 border-b border-border">Traditional FUE</th>
                  <th className="text-center font-semibold px-4 py-3 border-b border-border">DHI</th>
                  <th className="text-center font-semibold px-4 py-3 border-b border-border bg-emerald-600 text-white">
                    AFT (Advanced)
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-muted/30' : 'bg-card'}>
                    <td className="px-4 py-3 font-semibold border-r border-border">{row.factor}</td>
                    <td className="px-4 py-3 text-center text-red-600">{row.fut}</td>
                    <td className="px-4 py-3 text-center text-orange-500">{row.fue}</td>
                    <td className="px-4 py-3 text-center text-yellow-600">{row.dhi}</td>
                    <td className="px-4 py-3 text-center text-emerald-600 font-semibold bg-emerald-50">{row.aft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Before & After Results */}
      <section id='viewpatient' className="px-[clamp(16px,4vw,40px)] py-[clamp(40px,10vw,100px)] max-w-[1400px] mx-auto">
        <div>
          <h2 className="text-[clamp(28px,7vw,48px)] font-bold text-foreground text-center mb-[clamp(8px,2vw,16px)] leading-[1.2] break-words hyphens-auto">
            Real Patient Results
          </h2>
          <p className="text-[clamp(16px,3.5vw,18px)] text-muted-foreground text-center mb-[clamp(40px,8vw,60px)] max-w-[700px] mx-auto leading-[1.6] break-words">
            Witness the transformation of our patients who chose AFT for their hair restoration journey. 
            These are real, unedited results from our clinic.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {beforeAfterResults.map((result, idx) => (
              <div key={idx} className="bg-card rounded-[clamp(16px,4vw,24px)] shadow-md overflow-hidden">
                <div className="p-2">
                  <button onClick={() => open(result.before, `Age: ${result.age}`)} className="block w-full">
                    <div className="h-56 md:h-64 lg:h-72 overflow-hidden rounded-[clamp(12px,3vw,16px)]">
                      <img src={result.before} alt={`Before — ${result.age}`} className="w-full h-full object-cover" />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Care Instructions */}
      <section className="px-[clamp(16px,4vw,40px)] py-[clamp(40px,10vw,100px)] max-w-[1400px] mx-auto">
        <div>
          <h2 className="text-[clamp(28px,7vw,48px)] font-bold text-foreground text-center mb-[clamp(8px,2vw,16px)] leading-[1.2] break-words hyphens-auto">
            Complete Care Instructions
          </h2>
          <p className="text-[clamp(16px,3.5vw,18px)] text-muted-foreground text-center mb-[clamp(40px,8vw,60px)] max-w-[700px] mx-auto leading-[1.6] break-words">
            Detailed guidelines to ensure optimal results and smooth recovery from your AFT procedure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pre-Operative Instructions */}
            <div className="bg-gradient-to-br from-blue-100/50 to-blue-200/50 rounded-[clamp(16px,4vw,24px)] p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-800 p-2 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-[clamp(20px,4vw,24px)] h-[clamp(20px,4vw,24px)] text-white" />
                </div>
                <h3 className="text-blue-900 font-semibold text-lg">Pre-Operative Preparation</h3>
              </div>

              <div>
                <h4 className="text-blue-900 font-medium mb-2">2 Weeks Before & Day of Procedure:</h4>
                <ul className="space-y-2">
                  {preOpInstructions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-[clamp(14px,3vw,16px)] h-[clamp(14px,3vw,16px)] text-blue-500 mt-[2px] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Post-Operative Instructions */}
            <div className="bg-gradient-to-br from-emerald-100/50 to-emerald-200/50 rounded-[clamp(16px,4vw,24px)] p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-2 rounded-full flex items-center justify-center">
                  <Heart className="w-[clamp(20px,4vw,24px)] h-[clamp(20px,4vw,24px)] text-white" />
                </div>
                <h3 className="text-emerald-900 font-semibold text-lg">Post-Operative Care</h3>
              </div>

              <div>
                <h4 className="text-emerald-900 font-medium mb-2">First 48 Hours & Long-term Care:</h4>
                <ul className="space-y-2">
                  {postOpInstructions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-[clamp(14px,3vw,16px)] h-[clamp(14px,3vw,16px)] text-emerald-500 mt-[2px] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-[clamp(16px,4vw,40px)] py-[clamp(40px,10vw,100px)] max-w-[1400px] mx-auto">
        <div>
          <h2 className="text-[clamp(28px,7vw,48px)] font-bold text-foreground text-center mb-[clamp(8px,2vw,16px)] leading-[1.2] break-words hyphens-auto">
            Frequently Asked Questions
          </h2>
          <p className="text-[clamp(16px,3.5vw,18px)] text-muted-foreground text-center mb-[clamp(40px,8vw,60px)] max-w-[700px] mx-auto leading-[1.6] break-words">
            Get answers to the most common questions about AFT hair transplant procedure.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-card rounded-[clamp(16px,4vw,24px)] shadow-md overflow-hidden"
              >
                <div
                  className="flex items-center gap-4 p-4 cursor-pointer"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-[clamp(28px,6vw,32px)] h-[clamp(28px,6vw,32px)] flex items-center justify-center font-bold text-[clamp(12px,2.5vw,14px)] flex-shrink-0">
                    Q
                  </div>
                  <h3 className="text-foreground font-medium flex-1">{faq.q}</h3>
                  <ChevronDown
                    className={`w-[clamp(20px,4vw,24px)] h-[clamp(20px,4vw,24px)] text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      expandedFaq === idx ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </div>

                {expandedFaq === idx && (
                  <div className="p-4 text-gray-700">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="px-[clamp(16px,4vw,40px)] py-[clamp(40px,10vw,100px)] max-w-[1400px] mx-auto">
        <div>
          <h2 className="text-[clamp(28px,7vw,48px)] font-bold text-foreground text-center mb-[clamp(8px,2vw,16px)] leading-[1.2] break-words hyphens-auto">
            Why Patients Trust The Golden Gem
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {trustIndicators.map(({ icon: Icon, number, label, color }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="flex items-center justify-center rounded-full mb-4"
                  style={{
                    background: `${color}15`,
                    color: color,
                    width: 'clamp(64px, 12vw, 80px)',
                    height: 'clamp(64px, 12vw, 80px)',
                  }}
                >
                  <Icon style={{ width: 'clamp(32px, 6vw, 40px)', height: 'clamp(32px, 6vw, 40px)' }} />
                </div>
                <div className="text-[clamp(24px,5vw,32px)] font-bold text-foreground">{number}</div>
                <div className="text-[clamp(14px,3vw,16px)] text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Surgical;
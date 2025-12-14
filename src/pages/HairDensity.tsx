import React from 'react';
import { Button } from "@/components/ui/button";
import EnquiryForm from '@/components/EnquiryModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import HT from '@/assets/density.jpg';
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
    q: "What is Hair Density & Thickness Analysis?",
    a: "Hair Density & Thickness Analysis uses advanced digital imaging tools to measure the number of hairs per square centimeter (hairs/cm²) and the diameter of individual hair shafts. This non-invasive test provides precise data to assess hair health and monitor treatment outcomes."
  },
  {
    q: "How is the analysis performed?",
    a: "The procedure involves capturing high-resolution images of the scalp using a digital dermatoscope or specialized camera. Software analyzes the images to calculate hair density and thickness, with results reviewed by a specialist in a 20-30 minute session."
  },
  {
    q: "Why is tracking hair density and thickness important?",
    a: "Tracking density and thickness helps evaluate the effectiveness of treatments like PRP, Mesotherapy, or transplants, identifies areas needing further intervention, and guides customized plans to optimize hair regrowth and vitality."
  },
  {
    q: "Is the analysis painful or invasive?",
    a: "The analysis is 100% non-invasive and painless. A handheld imaging device gently scans the scalp, requiring no needles, incisions, or downtime."
  },
  {
    q: "Who should get a Hair Density & Thickness Analysis?",
    a: "It’s ideal for anyone undergoing hair restoration treatments (e.g., PRP, Mesotherapy, FUE, Cell Graft) or those noticing thinning or reduced hair volume. It’s also useful for proactive hair health monitoring."
  },
  {
    q: "How often should I get this analysis?",
    a: "For those undergoing treatments, analysis every 3-6 months tracks progress. For general monitoring, an annual checkup is recommended to maintain optimal hair health."
  },
  {
    q: "What results can I expect from the analysis?",
    a: "You’ll receive a detailed report with metrics like hairs/cm², average hair shaft diameter, and comparisons to baseline or previous sessions. This data informs treatment adjustments for maximum efficacy."
  }
];

const densityVisuals = [
  {
    image: "https://images.pexels.com/photos/5691627/pexels-photo-5691627.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Low density (50 hairs/cm²), thin shafts pre-treatment",
    condition: "Before Treatment",
    metrics: "Density: 50 hairs/cm², Thickness: 40µm"
  },
  {
    image: "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Improved density (90 hairs/cm²), thicker shafts post-PRP",
    condition: "After PRP (6 months)",
    metrics: "Density: 90 hairs/cm², Thickness: 60µm"
  },
  {
    image: "https://images.pexels.com/photos/5691627/pexels-photo-5691627.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Moderate density (60 hairs/cm²), early thinning pre-treatment",
    condition: "Before Treatment",
    metrics: "Density: 60 hairs/cm², Thickness: 45µm"
  },
  {
    image: "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Restored density (85 hairs/cm²) post-Cell Graft",
    condition: "After Cell Graft (12 months)",
    metrics: "Density: 85 hairs/cm², Thickness: 65µm"
  }
];

const HairDensityAnalysis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <SEO
        title="Hair Density Analysis in Chennai | Hair Health Check"
        description="Measure and improve hair density with professional scalp assessment. Identify thinning areas and plan effective hair restoration."
        canonical="https://thegoldengemhairclinic.com/hair-density"
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

      {/* 🧠 HERO SECTION – Hair Density & Thickness Analysis */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-100 to-white">
        {/* ✨ Ambient Glow Lights */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(255,230,150,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_65%,rgba(255,210,100,0.25),transparent_60%)]" />
        </div>

        {/* 🔳 Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-200/30 via-white/50 to-transparent backdrop-blur-[2px]" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* 💬 LEFT SIDE - TEXT */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-3">
                <p className="text-amber-700 font-semibold tracking-wide uppercase text-sm">
                  Precision Hair Monitoring
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[3.2rem] md:leading-[3.4rem] text-slate-900">
                  Hair Density &<br />
                  <span className="text-amber-600">Thickness Analysis</span>
                </h1>
              </div>

              <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] leading-relaxed max-w-lg mx-auto lg:mx-0">
                Track your <span className="font-semibold text-amber-700">hair growth progress</span> with advanced imaging technology.  
                Measure hair density (hairs/cm²) and thickness accurately to design personalized 
                treatment plans for <span className="font-semibold">optimal regrowth and vitality</span>.
              </p>

              {/* 📊 Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 max-w-md mx-auto lg:mx-0">
                {[
                  { value: "100%", label: "Non-Invasive" },
                  { value: "20–30 Min", label: "Analysis Time" },
                  { value: "7000+", label: "Patients Analyzed" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xs sm:text-xs md:text-base text-[#1A1A1A] font-bold">{stat.value}</div>
                    <div className="text-xs sm:text-xs md:text-base text-[#1A1A1A]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 w-full sm:w-auto rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Your Hair Checkup
                </Button>

                <Link to="#viewhairdensity" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-amber-400 text-amber-700 hover:bg-amber-50 hover:text-amber-800 font-semibold px-8 py-4 w-full rounded-xl transition-all duration-300"
                  >
                    <Microscope className="mr-2 h-5 w-5" />
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* 🧪 RIGHT SIDE - IMAGE */}
            <div className="relative flex justify-center mt-10 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-[90%] sm:w-[80%] md:w-[75%] lg:w-[95%] xl:w-[100%] transition-transform duration-500 hover:scale-[1.03]">
                <img 
                  src={HT}
                  alt="Hair Density Analysis"
                  className="object-cover w-full h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* ⭐ Rating Badge */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-md">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium text-slate-800 text-sm">
                    4.9/5 from 2,000+ clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DENSITY & THICKNESS ANALYSIS SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Why Choose Hair Density & Thickness Analysis?
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-3xl mx-auto">
              Our advanced digital imaging technology provides precise measurements of hair density and thickness, 
              enabling accurate tracking of treatment progress and customized hair restoration strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Microscope className="h-12 w-12 text-yellow-600" />,
                title: "High Accuracy",
                description: "Measures hairs/cm² and shaft diameter with digital precision."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-500" />,
                title: "Non-Invasive",
                description: "Painless analysis with no needles or recovery time."
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-400" />,
                title: "Tracks Progress",
                description: "Monitors improvements from treatments like PRP or transplants."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-300" />,
                title: "Personalized Plans",
                description: "Guides tailored treatments based on detailed metrics."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xs sm:text-xs md:text-base text-[#1A1A1A] font-semibold mb-3">{feature.title}</h3>
                <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED BENEFITS SECTION */}
      <section id='viewhairdensity' className="bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Benefits of Hair Density & Thickness Analysis
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-3xl mx-auto">
              Understand how precise density and thickness measurements empower effective hair restoration and long-term hair health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Accurate Density Measurement",
                description: "Uses digital imaging to count hairs/cm², providing exact data on hair density to assess thinning and guide treatment intensity."
              },
              {
                title: "Thickness Analysis",
                description: "Measures hair shaft diameter (in micrometers) to evaluate hair strength and detect miniaturization, critical for early intervention."
              },
              {
                title: "Tracks Treatment Success",
                description: "Compares pre- and post-treatment metrics to confirm improvements from therapies like PRP, Mesotherapy, or Cell Graft."
              },
              {
                title: "Identifies Problem Areas",
                description: "Pinpoints specific scalp regions with low density or thinning for targeted treatments, maximizing restoration outcomes."
              },
              {
                title: "Quick and Comfortable",
                description: "A 20-30 minute non-invasive procedure with no discomfort, making it an easy step for monitoring hair health."
              },
              {
                title: "Supports Preventive Care",
                description: "Regular analysis helps detect early thinning, enabling proactive measures to prevent significant hair loss."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xs sm:text-xs md:text-base text-[#1A1A1A] font-semibold mb-3">{benefit.title}</h3>
                <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A]">{benefit.description}</p>
              </div>
            ))}
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
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-3xl mx-auto">
              Answers to common questions about Hair Density & Thickness Analysis and its role in hair restoration.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-xs sm:text-xs md:text-base text-[#1A1A1A] font-semibold mb-4 flex items-start">
                      <div className="bg-yellow-100 text-yellow-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                        Q
                      </div>
                      {faq.q}
                    </h3>
                    <div className="ml-12">
                      <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] leading-relaxed">{faq.a}</p>
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
              Why trust The Golden Gem Clinic for Your Hair Analysis
            </h2>
            <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A] max-w-3xl mx-auto">
              Our clinic uses state-of-the-art digital imaging and expert analysis to deliver precise, actionable insights for your hair restoration journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-yellow-600" />,
                title: "Expert Analysts",
                description: "Certified specialists trained in advanced hair diagnostics."
              },
              {
                icon: <Heart className="h-12 w-12 text-yellow-500" />,
                title: "Proven Precision",
                description: "Over 7,000 analyses with 96% accuracy."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-400" />,
                title: "Advanced Technology",
                description: "High-resolution imaging with AI-assisted analysis."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-300" />,
                title: "Trusted Clinic",
                description: "Accredited facility with rigorous patient care standards."
              }
            ].map((indicator, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{indicator.icon}</div>
                <h3 className="text-xs sm:text-xs md:text-base text-[#1A1A1A] font-semibold mb-3">{indicator.title}</h3>
                <p className="text-xs sm:text-xs md:text-base text-[#1A1A1A]">{indicator.description}</p>
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

export default HairDensityAnalysis;
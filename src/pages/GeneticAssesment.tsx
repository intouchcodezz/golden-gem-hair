import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import EnquiryForm from '@/components/EnquiryModal';
import { Link } from 'react-router-dom';
import HT from '@/assets/gh.png';
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
    q: "What is a Genetic & Hormonal Assessment for hair loss?",
    a: "This assessment combines genetic testing, using a simple saliva sample, with hormonal profiling via blood tests to evaluate hereditary hair loss risks and hormonal conditions like PCOS or androgenetic alopecia. It provides a personalized report to guide targeted treatments."
  },
  {
    q: "How is the genetic test conducted?",
    a: "You provide a saliva sample using a home-collection kit or at our clinic. The sample is analyzed in a certified lab to assess genes linked to hair loss, such as those affecting androgen sensitivity. Results are available in 2-4 weeks."
  },
  {
    q: "What does the hormonal profiling include?",
    a: "Hormonal profiling tests key biomarkers like Testosterone, Dihydrotestosterone (DHT), Estrogen, Progesterone, and DHEA-S to identify imbalances contributing to hair loss, such as those seen in PCOS or androgenetic alopecia."
  },
  {
    q: "How do the results help with treatment?",
    a: "The assessment provides a detailed report on genetic predispositions and hormonal imbalances, enabling tailored treatments like DHT blockers, hormonal therapies, or advanced options like PRP or Cell Graft to address specific causes."
  },
  {
    q: "Who should get a Genetic & Hormonal Assessment?",
    a: "It’s ideal for those with a family history of hair loss, suspected hormonal issues (e.g., PCOS), or anyone seeking a personalized, proactive approach to hair restoration."
  },
  {
    q: "Is the assessment safe and reliable?",
    a: "The process is safe, non-invasive (saliva and blood samples), and conducted by accredited labs with 99% accuracy for genetic analysis and hormonal profiling."
  },
  {
    q: "How often should I repeat the assessment?",
    a: "Genetic testing is typically a one-time procedure, as your DNA doesn’t change. Hormonal profiling may be repeated every 6-12 months to monitor treatment progress or changes in conditions like PCOS."
  }
];

const assessmentComponents = [
  {
    title: "Genetic Testing for Hair Loss",
    description: "Analyzes genes linked to androgenetic alopecia and other hereditary hair loss patterns using a simple saliva sample."
  },
  {
    title: "Hormonal Profiling",
    description: "Measures hormones like Testosterone, DHT, and Estrogen to identify imbalances contributing to hair loss, such as PCOS."
  },
  {
    title: "Personalized Report",
    description: "Provides a detailed analysis of genetic risks and hormonal status, with actionable treatment recommendations."
  },
  {
    title: "Consultation with Experts",
    description: "Includes a session with our specialists to interpret results and design a customized hair restoration plan."
  }
];

const sampleReports = [
  {
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Genetic Risk Profile: High androgen sensitivity detected",
    details: "Identifies predisposition to androgenetic alopecia"
  },
  {
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Hormonal Profile: Elevated DHT levels",
    details: "Recommends DHT-blocking therapies"
  },
  {
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Genetic Report: Moderate hereditary risk",
    details: "Suggests preventive treatments like PRP"
  },
  {
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Hormonal Profile: PCOS-related imbalances",
    details: "Guides hormonal therapy and lifestyle changes"
  }
];

const GeneticHormonalAssessment = () => {
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

      {/* 🧬 HERO SECTION – Genetic & Hormonal Assessment */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-100 to-white">
        {/* 🌟 Ambient Glow Layers */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(255,220,150,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_65%,rgba(255,210,100,0.25),transparent_60%)]" />
        </div>

        {/* 🔳 Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/40 via-white/60 to-transparent backdrop-blur-[2px]" />

        {/* 🧱 Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* 💬 LEFT – TEXT CONTENT */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-3">
                <p className="text-amber-700 font-semibold tracking-wide uppercase text-sm">
                  Personalized Hair Solutions
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-900">
                  Genetic & Hormonal<br />
                  <span className="text-amber-600">Assessment</span>
                </h1>
              </div>

              <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Decode the <span className="font-semibold text-amber-700">biological factors</span> behind your hair loss 
                through advanced <span className="font-semibold">genetic and hormonal analysis</span>.  
                Using saliva and blood markers, we design a <span className="font-semibold">personalized regrowth roadmap</span> 
                tailored to your DNA and endocrine profile.
              </p>

              {/* 📊 Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 max-w-md mx-auto lg:mx-0">
                {[
                  { value: "99%", label: "Test Accuracy" },
                  { value: "2–4 Weeks", label: "Result Time" },
                  { value: "5000+", label: "Patients Assessed" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-amber-700">{stat.value}</div>
                    <div className="text-xs md:text-sm text-slate-700">{stat.label}</div>
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
                  Discover Your Hair DNA
                </Button>

                <Link to="#viewgenetic" className="w-full sm:w-auto">
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

            {/* 🧪 RIGHT – IMAGE SIDE */}
            <div className="relative flex justify-center mt-10 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-[90%] sm:w-[80%] md:w-[75%] lg:w-[95%] xl:w-[100%] transition-transform duration-500 hover:scale-[1.03]">
                <img 
                  src={HT}
                  alt="Genetic & Hormonal Assessment"
                  className="
                    w-full 
                    h-auto 
                    max-h-[420px] 
                    sm:max-h-[480px]
                    md:object-cover 
                    object-contain 
                    rounded-2xl
                  "
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
                    4.9/5 from 3,000+ clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE GENETIC & HORMONAL ASSESSMENT SECTION */}
      <section id='viewgenetic' className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Why Choose Genetic & Hormonal Assessment?
            </h2>
           <p className="text-base md:text-sm lg:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our state-of-the-art assessment combines genetic testing and hormonal profiling to deliver 
              a premium, personalized approach to hair restoration, targeting hereditary and hormonal causes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Microscope className="h-12 w-12 text-yellow-600" />,
                title: "Precision Diagnosis",
                description: "Identifies genetic and hormonal causes with 99% accuracy."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-500" />,
                title: "Non-Invasive Testing",
                description: "Simple saliva and blood samples, no discomfort."
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-400" />,
                title: "Personalized Solutions",
                description: "Tailored treatments based on your unique profile."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-300" />,
                title: "Premium Approach",
                description: "Modern, cutting-edge technology for elite care."
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

      {/* KEY ASSESSMENT COMPONENTS SECTION */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Key Components of the Assessment
            </h2>
            <p className="text-base md:text-sm lg:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Genetic & Hormonal Assessment includes advanced testing and expert consultation to create a tailored hair restoration plan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentComponents.map((component, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-md font-semibold text-gray-800 mb-3">{component.title}</h3>
                <p className="text-gray-600 text-sm">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Benefits of Genetic & Hormonal Assessment
            </h2>
            <p className="text-base md:text-sm lg:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our premium assessment empowers targeted, effective hair restoration by addressing hereditary and hormonal factors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Identifies Hereditary Risks",
                description: "Genetic testing reveals predispositions to androgenetic alopecia and other hereditary hair loss patterns, enabling preventive strategies."
              },
              {
                title: "Diagnoses Hormonal Imbalances",
                description: "Hormonal profiling detects imbalances like elevated DHT or PCOS-related issues, guiding targeted therapies for optimal results."
              },
              {
                title: "Personalized Treatment Plans",
                description: "Detailed reports inform customized treatments, such as DHT blockers, hormonal therapies, or advanced options like Cell Graft."
              },
              {
                title: "Non-Invasive and Convenient",
                description: "Uses simple saliva and blood samples, with home-collection kits available for genetic testing, ensuring ease and comfort."
              },
              {
                title: "Proactive Hair Loss Prevention",
                description: "Early identification of risks allows for preventive measures, reducing future hair loss and promoting long-term hair health."
              },
              {
                title: "Expert-Guided Solutions",
                description: "Includes consultation with specialists to interpret results and design a tailored restoration plan for maximum efficacy."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-md font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Frequently Asked Questions
            </h2>
           <p className="text-base md:text-sm lg:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Answers to common questions about Genetic & Hormonal Assessment for hair loss.
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
            <h2 className="text-3xl md:text-4xl font-bold leading-[3.2rem] md:leading-[3.4rem]">
              Why trust The Golden Gem Clinic for Your Genetic Assessment
            </h2>
            <p className="text-base md:text-sm lg:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our clinic partners with accredited labs and employs expert specialists to deliver precise, premium genetic and hormonal assessments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-yellow-600" />,
                title: "Certified Experts",
                description: "Dermatologists and geneticists trained in advanced diagnostics."
              },
              {
                icon: <Heart className="h-12 w-12 text-yellow-500" />,
                title: "High Accuracy",
                description: "99% accuracy in genetic and hormonal analysis."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-400" />,
                title: "Advanced Labs",
                description: "Partnered with cutting-edge genetic testing facilities."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-300" />,
                title: "Trusted Partners",
                description: "Collaborations with accredited labs for reliable results."
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

      <Footer />
    </div>
  );
};

export default GeneticHormonalAssessment;
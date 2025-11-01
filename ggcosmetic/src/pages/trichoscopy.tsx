import React from 'react';
import { Button } from "@/components/ui/button";
import EnquiryForm from '@/components/EnquiryModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HT from '@/assets/trichoscopy.jpeg';
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
    q: "What is trichoscopy and how does it work?",
    a: "Trichoscopy is a non-invasive diagnostic technique that uses a dermatoscope or digital microscope to examine the scalp and hair follicles at magnifications up to 100x. A handheld device captures high-resolution images, allowing specialists to analyze hair density, follicle health, scalp conditions, and hair shaft abnormalities in real time, providing a detailed roadmap for personalized treatment."
  },
  {
    q: "How long does a trichoscopy session take and what’s involved?",
    a: "A session takes 15-30 minutes. The process involves cleaning the scalp, using a dermatoscope to capture images of multiple scalp areas, and analyzing findings with advanced software. Results are discussed immediately, with no preparation or recovery needed."
  },
  {
    q: "Is trichoscopy safe and comfortable?",
    a: "Trichoscopy is 100% safe, painless, and non-invasive. The dermatoscope glides gently over the scalp without cutting or piercing the skin. Patients typically find the process comfortable, similar to a routine hair examination."
  },
  {
    q: "Who is an ideal candidate for trichoscopy?",
    a: "Trichoscopy is recommended for anyone noticing hair thinning, excessive shedding, scalp irritation, or those seeking a proactive assessment of hair health. It’s also essential for patients considering treatments like FUE, FUT, or Cell Graft to ensure accurate diagnosis and tailored plans."
  },
  {
    q: "What specific conditions can trichoscopy diagnose?",
    a: "Trichoscopy detects a wide range of issues, including dandruff, seborrheic dermatitis, psoriasis, folliculitis, androgenetic alopecia, alopecia areata, telogen effluvium, hair shaft disorders (e.g., trichorrhexis nodosa), and early follicle miniaturization, which signals future hair loss."
  },
  {
    q: "How does trichoscopy guide treatment and monitor progress?",
    a: "By providing detailed images of follicle health and scalp conditions, trichoscopy helps create customized treatment plans, such as targeted therapies for inflammation or growth factor treatments for thinning. Follow-up sessions track improvements in density and scalp health, ensuring treatment efficacy."
  },
  {
    q: "How often should trichoscopy be performed?",
    a: "For routine monitoring, an annual trichoscopy is ideal. For those with active hair loss or undergoing treatments, sessions every 3-6 months help track progress and adjust plans. Your specialist will recommend a schedule based on your condition."
  }
];

const trichoscopyVisuals = [
  {
    image: "https://images.pexels.com/photos/5691627/pexels-photo-5691627.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Scalp with dandruff and thinning follicles, magnified 50x",
    condition: "Pre-treatment (Unhealthy Scalp)"
  },
  {
    image: "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Healthy follicles and clear scalp post-treatment, magnified 50x",
    condition: "Post-treatment (Improved Health)"
  },
  {
    image: "https://images.pexels.com/photos/5691627/pexels-photo-5691627.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Follicle miniaturization and seborrheic dermatitis, magnified 70x",
    condition: "Pre-treatment (Early Hair Loss)"
  },
  {
    image: "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Restored follicle density and scalp vitality, magnified 70x",
    condition: "Post-treatment (Regrowth)"
  }
];

const Trichoscopy = () => {
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

  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      
      {/* LEFT SIDE - TEXT */}
      <div className="space-y-6 text-center lg:text-left">
        <div className="space-y-2">
          <p className="text-white font-medium tracking-wide uppercase text-sm">
            Precision Hair Diagnostics
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Trichoscopy<br />
            <span className="text-yellow-100">Hair & Scalp Analysis</span>
          </h1>
        </div>

        <p className="text-base md:text-xl text-yellow-100 leading-relaxed max-w-lg mx-auto lg:mx-0">
          Uncover the root cause of hair loss with our advanced trichoscopy analysis —
          a non-invasive, gold-standard diagnostic tool that uses high-magnification imaging 
          to assess scalp health, follicle condition, and guide personalized treatment plans.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 py-6 max-w-md mx-auto lg:mx-0">
          <div className="text-center">
            <div className="text-xl md:text-3xl font-bold text-white">100%</div>
            <div className="text-xs md:text-sm text-white">Non-Invasive</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-3xl font-bold text-white">15–30 Min</div>
            <div className="text-xs md:text-sm text-white">Analysis Time</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-3xl font-bold text-white">6000+</div>
            <div className="text-xs md:text-sm text-white">Patients Analyzed</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-white text-yellow-800 hover:bg-yellow-100 font-semibold px-8 py-4 w-full sm:w-auto"
          >
            <Phone className="mr-2 h-5 w-5" />
            Book Trichoscopy Analysis
          </Button>
          <Link to="#viewtrichoscopy" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-yellow-600 hover:text-white font-semibold px-8 py-4 w-full"
            >
              <Microscope className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="relative flex justify-center mt-10 lg:mt-0">
        <img
          src={HT}
          alt="Trichoscopy Analysis"
          className="rounded-2xl shadow-2xl w-[90%] sm:w-[80%] md:w-[75%] lg:w-[95%] xl:w-[100%] object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
        <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-lg shadow-xl scale-110 sm:scale-100">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div>
              <div className="font-semibold text-gray-800 text-sm md:text-base">
                4.8/5 Rating
              </div>
              <div className="text-xs text-gray-600">From 1,500+ Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* WHY CHOOSE TRICHOSCOPY SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Trichoscopy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trichoscopy is the gold-standard diagnostic tool used by advanced hair clinics worldwide, 
              offering unparalleled precision in assessing hair and scalp health to create effective, 
              personalized treatment strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Microscope className="h-12 w-12 text-yellow-600" />,
                title: "Unmatched Precision",
                description: "Magnifies up to 100x to reveal detailed follicle and scalp conditions."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-500" />,
                title: "Completely Non-Invasive",
                description: "Painless analysis with no needles, incisions, or downtime."
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-400" />,
                title: "Early Detection",
                description: "Identifies hair loss and scalp issues before they become severe."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-300" />,
                title: "Customized Solutions",
                description: "Guides tailored treatments based on precise diagnostic data."
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

      {/* DETAILED BENEFITS SECTION */}
      <section id='viewtrichoscopy' className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Comprehensive Benefits of Trichoscopy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trichoscopy provides critical insights into your hair and scalp health, 
              enabling proactive care and targeted treatments for lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Diagnoses Scalp Conditions",
                description: "Accurately detects conditions like dandruff, seborrheic dermatitis, psoriasis, and folliculitis, allowing targeted therapies to restore scalp health and support hair growth."
              },
              {
                title: "Evaluates Follicle Health",
                description: "Assesses hair density, follicle size, and signs of miniaturization, identifying early-stage androgenetic alopecia or other hair loss patterns for timely intervention."
              },
              {
                title: "Monitors Treatment Efficacy",
                description: "Tracks changes in follicle health, hair thickness, and scalp condition over time, ensuring treatments like GFC or Cell Graft are delivering optimal results."
              },
              {
                title: "Identifies Hair Shaft Disorders",
                description: "Detects abnormalities like trichorrhexis nodosa or monilethrix, which affect hair strength and appearance, guiding corrective care plans."
              },
              {
                title: "Quick and Comfortable",
                description: "A 15-30 minute procedure with no pain or downtime, making it an accessible first step for anyone concerned about hair health."
              },
              {
                title: "Supports Preventive Care",
                description: "Enables proactive monitoring of hair and scalp health, preventing progression of hair loss or scalp issues through early intervention."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUALS SECTION */}
      {/* <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Trichoscopy Visual Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore magnified views of hair follicles and scalp conditions, showcasing trichoscopy’s ability to reveal issues and track improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trichoscopyVisuals.map((visual, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={visual.image} 
                    alt={visual.description}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${visual.condition.includes('Pre-treatment') ? 'bg-red-500' : 'bg-green-500'} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {visual.condition}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600">{visual.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about trichoscopy and its role in hair restoration.
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
              Why Trust Us for Your Trichoscopy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clinic combines cutting-edge trichoscopy technology with expert dermatological analysis to deliver precise, reliable diagnostics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-yellow-600" />,
                title: "Certified Specialists",
                description: "Board-certified dermatologists with advanced trichoscopy training."
              },
              {
                icon: <Heart className="h-12 w-12 text-yellow-500" />,
                title: "Proven Accuracy",
                description: "Over 6,000 analyses with 95% diagnostic precision."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-400" />,
                title: "Cutting-Edge Technology",
                description: "High-resolution digital dermatoscopes with AI-assisted analysis."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-300" />,
                title: "Accredited Clinic",
                description: "Trusted facility with strict hygiene and patient care standards."
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 py-10">
            Ready to Discover Your Hair Health?
          </h2>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-8">
            Schedule your trichoscopy analysis today and take the first step toward personalized, effective hair restoration.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-yellow-800 hover:bg-yellow-100 font-semibold px-6 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Book Trichoscopy Analysis
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-yellow-600 hover:text-white font-semibold px-6 py-3">
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

export default Trichoscopy;
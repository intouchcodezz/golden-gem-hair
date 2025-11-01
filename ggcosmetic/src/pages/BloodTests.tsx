import React from 'react';
import { Button } from "@/components/ui/button";
import EnquiryForm from '@/components/EnquiryModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HT from '@/assets/blood.webp';
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
    q: "What are Blood & Hormonal Tests for Hair Loss?",
    a: "These tests analyze blood samples to identify internal factors contributing to hair loss, such as thyroid dysfunction, iron deficiency, vitamin levels, and hormonal imbalances. Results guide targeted treatment plans to address underlying causes."
  },
  {
    q: "Which specific tests are included in a hair loss profile?",
    a: "A comprehensive hair loss profile typically includes Thyroid Function Tests (TSH, T3, T4), Ferritin, Vitamin D, Vitamin B12, Iron/TIBC, Testosterone, DHEA-S, DHT, and Estrogen/Progesterone levels to assess deficiencies or imbalances."
  },
  {
    q: "How do these tests help with hair loss treatment?",
    a: "By pinpointing deficiencies or imbalances (e.g., low Ferritin or high DHT), tests allow specialists to recommend treatments like supplements, medications, or therapies (e.g., PRP, Mesotherapy) tailored to your specific needs."
  },
  {
    q: "Are the tests painful or invasive?",
    a: "The tests involve a simple blood draw, which may cause mild discomfort but is quick (5-10 minutes) and safe. Results are typically available within 1-3 days."
  },
  {
    q: "Who should get a Blood & Hormonal Test for hair loss?",
    a: "Anyone experiencing unexplained hair thinning, shedding, or slow regrowth, or those starting treatments like FUE, Cell Graft, or PRP, should get tested to identify internal causes."
  },
  {
    q: "How often should I repeat these tests?",
    a: "For initial diagnosis, one test is sufficient. If deficiencies or imbalances are found, retesting every 3-6 months monitors progress and adjusts treatment plans."
  },
  {
    q: "Where are the tests conducted?",
    a: "Tests are performed at our partner diagnostics center, equipped with advanced labs for accurate results. Contact us to schedule or learn more about our trusted partners."
  }
];

const keyTests = [
  {
    title: "Thyroid Function Tests (TSH, T3, T4)",
    description: "Assess thyroid hormone levels, as imbalances (hypothyroidism or hyperthyroidism) can cause hair thinning or shedding."
  },
  {
    title: "Ferritin and Iron/TIBC",
    description: "Measure iron storage and binding capacity; low levels are a common cause of hair loss, especially in women."
  },
  {
    title: "Vitamin D and B12",
    description: "Evaluate levels of these essential vitamins, as deficiencies can weaken hair follicles and slow growth."
  },
  {
    title: "Hormonal Panel (Testosterone, DHT, DHEA-S, Estrogen)",
    description: "Analyze hormones linked to androgenetic alopecia and other hair loss conditions, guiding targeted therapies."
  }
];

const BloodHormonalTests = () => {
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

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* LEFT SIDE - TEXT */}
      <div className="space-y-6 text-center md:text-left">
        <div className="space-y-2">
          <p className="text-white font-medium tracking-wide uppercase text-sm">
            Uncover Internal Causes
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            Blood & Hormonal<br />
            <span className="text-yellow-100">Tests for Hair Loss</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-yellow-100 leading-relaxed max-w-md mx-auto md:mx-0">
          Identify the root causes of hair loss with comprehensive blood and hormonal tests, 
          analyzing thyroid function, nutrient deficiencies, and hormonal imbalances to create 
          personalized treatment plans.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 py-6">
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-3xl font-bold text-white">10+</div>
            <div className="text-xs sm:text-sm text-white">Key Biomarkers</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-3xl font-bold text-white">5-10 Min</div>
            <div className="text-xs sm:text-sm text-white">Test Time</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl md:text-3xl font-bold text-white">8000+</div>
            <div className="text-xs sm:text-sm text-white">Patients Tested</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button 
            onClick={() => setIsModalOpen(true)} 
            size="lg" 
            className="bg-white text-yellow-800 hover:bg-yellow-100 font-semibold px-6 py-3 w-full sm:w-auto"
          >
            <Phone className="mr-2 h-5 w-5" />
            Book Hair Loss Profile Test
          </Button>

          <Link to="#viewbloodhormone" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black hover:bg-yellow-600 hover:text-white font-semibold px-6 py-3 w-full sm:w-auto"
            >
              <Microscope className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="relative flex justify-center">
        <img 
          src={HT}
          alt="Blood Test for Hair Loss"
          className="rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl object-cover"
        />
        <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg hidden sm:block">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <div>
              <div className="font-semibold text-gray-800 text-sm md:text-base">4.9/5 Rating</div>
              <div className="text-xs text-gray-600">From 2,500+ Reviews</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* WHY CHOOSE BLOOD & HORMONAL TESTS SECTION */}
      <section id='viewbloodhormone' className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Blood & Hormonal Tests?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Blood and hormonal tests uncover internal factors like thyroid dysfunction, nutrient deficiencies, 
              or hormonal imbalances, enabling precise, personalized hair restoration strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Microscope className="h-12 w-12 text-yellow-600" />,
                title: "Identifies Root Causes",
                description: "Pinpoints deficiencies or imbalances driving hair loss."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-500" />,
                title: "Safe & Quick",
                description: "Simple blood draw with results in 1-3 days."
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-400" />,
                title: "Guides Treatment",
                description: "Informs targeted therapies for optimal results."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-300" />,
                title: "Comprehensive Analysis",
                description: "Tests 10+ biomarkers for a complete health profile."
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

      {/* KEY TESTS OVERVIEW SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Key Tests for Hair Loss
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our hair loss profile includes essential blood and hormonal tests to identify underlying causes and guide effective treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyTests.map((test, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{test.title}</h3>
                <p className="text-gray-600">{test.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Tests are conducted at our trusted partner diagnostics center. 
              <a 
                href="https://example-diagnostics.com" 
                className="text-yellow-600 hover:text-yellow-700 font-semibold underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Learn more about our partner labs
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Benefits of Blood & Hormonal Tests
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand how blood and hormonal tests empower targeted hair restoration by addressing internal health factors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Identifies Nutrient Deficiencies",
                description: "Detects low levels of iron, Ferritin, Vitamin D, or B12, which can weaken hair follicles and cause shedding, enabling targeted supplementation."
              },
              {
                title: "Diagnoses Hormonal Imbalances",
                description: "Measures hormones like Testosterone, DHT, and Estrogen to identify causes of androgenetic alopecia or other hormone-related hair loss."
              },
              {
                title: "Assesses Thyroid Function",
                description: "Evaluates TSH, T3, and T4 levels to detect thyroid disorders, a common contributor to diffuse hair thinning and loss."
              },
              {
                title: "Guides Personalized Treatment",
                description: "Results inform tailored plans, combining supplements, medications, or therapies like PRP or Cell Graft for optimal outcomes."
              },
              {
                title: "Monitors Treatment Progress",
                description: "Follow-up tests track improvements in biomarker levels, ensuring treatments address underlying causes effectively."
              },
              {
                title: "Quick and Accessible",
                description: "A 5-10 minute blood draw with results in 1-3 days, conducted at our partner diagnostics center for convenience."
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

      {/* FAQ SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about Blood & Hormonal Tests for hair loss.
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
              Why Trust Us for Your Hair Loss Tests
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clinic partners with accredited diagnostics centers to deliver precise, reliable blood and hormonal test results for your hair restoration journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-yellow-600" />,
                title: "Expert Analysis",
                description: "Results reviewed by certified dermatologists and endocrinologists."
              },
              {
                icon: <Heart className="h-12 w-12 text-yellow-500" />,
                title: "High Accuracy",
                description: "Over 8,000 tests with 98% diagnostic reliability."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-400" />,
                title: "Advanced Labs",
                description: "Partnered with state-of-the-art diagnostics centers."
              },
              {
                icon: <Shield className="h-12 w-12 text-yellow-300" />,
                title: "Trusted Partners",
                description: "Collaborations with accredited labs for fast, accurate results."
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
            Ready to Uncover the Cause of Your Hair Loss?
          </h2>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-8">
            Book your Blood & Hormonal Hair Loss Profile Test today to identify internal factors and start your personalized restoration plan.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-yellow-800 hover:bg-yellow-100 font-semibold px-6 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Book Hair Loss Profile Test
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

export default BloodHormonalTests;
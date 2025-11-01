import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import EnquiryForm from '@/components/EnquiryModal';
import scalp from '@/assets/scalp-therapy.jpg';
import { 
  Video, 
  CheckCircle, 
  Phone, 
  Calendar, 
  ArrowRight, 
  Users,
  Award,
  Clock,
  Star,
  Shield,
  Sparkles
} from 'lucide-react';

const ScalpCare = () => {
  const [activeTab, setActiveTab] = useState(-1);

  const treatments = [
    {
      title: "Scalp Micropigmentation",
      description: "Revolutionary non-surgical cosmetic procedure that creates the appearance of fuller hair by depositing specialized pigments into the scalp.",
      features: ["Non-surgical", "Immediate results", "Natural appearance"],
      duration: "2-3 sessions",
      recovery: "1-2 days"
    },
    {
      title: "Advanced Scalp Therapy", 
      description: "Comprehensive therapeutic treatments designed to nourish and revitalize the scalp environment for optimal follicle health.",
      features: ["Deep nourishment", "Improved circulation", "Follicle optimization"],
      duration: "4-6 sessions",
      recovery: "No downtime"
    },
    {
      title: "Dandruff & Scalp Disorders",
      description: "Targeted medical treatments for persistent dandruff, seborrheic dermatitis, and various scalp conditions.",
      features: ["Medical-grade treatment", "Root cause analysis", "Long-term relief"],
      duration: "2-4 sessions",
      recovery: "Immediate"
    }
  ];

  const processSteps = [
    {
      title: "Comprehensive Consultation",
      description: "Detailed assessment of your scalp condition, medical history, and aesthetic goals using advanced diagnostic tools.",
      icon: Users
    },
    {
      title: "Advanced Diagnostics",
      description: "In-depth scalp analysis, follicle examination, and identification of underlying factors affecting scalp health.",
      icon: Shield
    },
    {
      title: "Customized Treatment Plan", 
      description: "Development of a personalized treatment protocol tailored to your specific scalp needs and desired outcomes.",
      icon: Award
    },
    {
      title: "Expert Treatment Application",
      description: "Professional treatment delivery by certified specialists using state-of-the-art equipment and techniques.",
      icon: Clock
    },
    {
      title: "Follow-up & Maintenance",
      description: "Comprehensive aftercare, progress monitoring, and maintenance plans to ensure optimal and lasting results.",
      icon: CheckCircle
    }
  ];

  const faqs = [
    {
      question: "Is scalp micropigmentation permanent?",
      answer: "Scalp micropigmentation is semi-permanent, typically lasting 3-5 years before requiring touch-ups. The longevity depends on skin type, lifestyle, and sun exposure."
    },
    {
      question: "How long does scalp therapy take to show results?",
      answer: "Initial improvements in scalp health can be seen within 2-4 weeks. Optimal results from scalp therapy typically become visible after 3-4 months of consistent treatment."
    },
    {
      question: "Are scalp treatments suitable for all ages?",
      answer: "Most scalp treatments are suitable for adults of all ages. However, a consultation is essential to determine the most appropriate treatment based on individual scalp condition and health status."
    },
    {
      question: "What's the difference between scalp therapy and hair growth treatments?",
      answer: "Scalp therapy focuses on improving scalp health, treating conditions like dandruff and inflammation. Hair growth treatments specifically target hair follicles to stimulate new growth."
    },
    {
      question: "How do I maintain results after treatment?",
      answer: "Follow-up care includes specialized scalp care products, periodic maintenance sessions, and lifestyle recommendations to preserve and enhance treatment results."
    }
  ];

  const stats = [
    { number: "95%", label: "Patient Satisfaction" },
    { number: "500+", label: "Successful Treatments" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-100">
           <EnquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          console.log("Form submitted:", data);
          setIsModalOpen(false);
        }}
        treatment="General Consultation"
      />
      {/* Hero Section - Redesigned */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-700">
        {/* ✨ Background gradient pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        {/* 🖼️ Background Image */}
        <img
          src={scalp} // ← change path to your actual image
          alt="Scalp Treatment Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-25 sm:opacity-40"
        />

        {/* 🔲 Overlay for readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* LEFT - TEXT */}
              <div className="text-center md:text-left">
                <Badge className="mb-6 bg-amber-200 text-amber-900 hover:bg-amber-300 border-0 shadow-lg">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Expert Scalp Solutions
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Expert Scalp Care
                  <span className="block text-amber-100 mt-2">Solutions</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-amber-50 mb-10 leading-relaxed max-w-xl">
                  Transform your scalp health with our advanced treatments. From micropigmentation 
                  to therapeutic care, achieve the confidence you deserve.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    size="lg" 
                    className="w-full sm:w-auto bg-white hover:bg-amber-50 text-amber-900 shadow-xl text-base font-semibold px-8 py-6"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-amber-200 text-amber-900 border-0">
                  About Our Treatments
                </Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6 leading-tight">
                  Comprehensive Scalp Solutions
                </h2>
              </div>
              
              <div className="space-y-4 text-amber-800">
                <p className="text-lg leading-relaxed">
                  Our scalp care expertise combines medical science with artistic precision to address 
                  a wide range of scalp concerns. Whether you're dealing with hair loss, scalp conditions, 
                  or seeking aesthetic enhancement, we provide personalized solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  From innovative micropigmentation techniques to therapeutic scalp treatments, our 
                  certified specialists deliver results that restore both appearance and confidence.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {["FDA Approved", "Certified Specialists", "Natural Results", "Expert Care"].map((feature) => (
                  <Badge key={feature} className="bg-amber-100 text-amber-800 border border-amber-300 px-4 py-2">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="overflow-hidden shadow-2xl border-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Award className="w-20 h-20 text-amber-600 mx-auto mb-4" />
                    <p className="text-amber-900 font-semibold text-xl">Expert Consultation Process</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-600 text-white border-0">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Our Scalp Care Treatments
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              Discover our range of specialized treatments designed to address various scalp concerns and aesthetic goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-amber-50 to-yellow-50">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge className="bg-amber-600 text-white border-0">
                      {treatment.duration}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-amber-900 mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-amber-700 mb-4 leading-relaxed">
                    {treatment.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-amber-600">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>Recovery: {treatment.recovery}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {treatment.features.map((feature, idx) => (
                        <Badge 
                          key={idx} 
                          className="bg-amber-100 text-amber-800 border border-amber-200"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-200 text-amber-900 border-0">
              Our Approach
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Our Treatment Process
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              We follow a comprehensive, patient-centered approach to ensure optimal results and exceptional care
            </p>
          </div>
          
          <div className="space-y-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-6 h-6 text-amber-600" />
                          <h3 className="text-xl font-bold text-amber-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-amber-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-200 text-amber-900 border-0">
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-amber-700">
              Common questions about our scalp care treatments and procedures
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer bg-gradient-to-br from-amber-50 to-yellow-50"
                onClick={() => setActiveTab(activeTab === index ? -1 : index)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-amber-900 pr-4">
                      {faq.question}
                    </h3>
                    <ArrowRight 
                      className={`h-5 w-5 text-amber-600 transition-transform flex-shrink-0 ${
                        activeTab === index ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                  
                  {activeTab === index && (
                    <div className="mt-4 pt-4 border-t border-amber-200">
                      <p className="text-amber-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-700 border-0 shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_50%)]" />
            </div>
            <CardContent className="relative z-10 p-12 text-center">
              <div className="mb-8">
                <Star className="h-16 w-16 text-amber-200 mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 no-gradient">
                  Ready to Transform Your Scalp?
                </h2>
                <p className="text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
                  Take the first step towards healthier, more confident you. Our expert team is ready to create a personalized scalp care plan that delivers exceptional results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-amber-900 hover:bg-amber-50 shadow-xl font-semibold px-8"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-amber-900 font-semibold px-8"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 8122733730
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </div>
  );
};

export default ScalpCare;
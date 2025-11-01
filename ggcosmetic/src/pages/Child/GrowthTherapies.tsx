import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import beforeafter12 from '@/assets/beforeafter12.jpg';
import beforeafter19 from '@/assets/beforeafter19.webp';
import EnquiryForm from '@/components/EnquiryModal';
import { 
  Video, 
  CheckCircle, 
  Phone, 
  Calendar, 
  ArrowRight, 
  PlayCircle,
  Star,
  Clock,
  Shield,
  Users,
  Award
} from 'lucide-react';
import { useImageLightbox } from '@/components/ImageLightbox';

// Import generated images
import hairGrowthHero from '@/assets/scalp.jpg';
import prpTreatment from '@/assets/prp.jpg';
import gfcTreatment from '@/assets/SMP.jpg';
import exosomeTherapy from '@/assets/smp1.jpg';
import consultationProcess from '@/assets/HT.jpg';

// GSAP/Draggable removed — replaced with simple clickable lightbox

const Growth = () => {
  const [activeTab, setActiveTab] = useState(-1);

  // Lightbox hook will be used for before/after images
  // Refs and GSAP draggable logic removed to simplify UX and provide consistent lightbox behavior
  
  import.meta;

  const treatments = [
    {
      title: "PRP + Microneedling",
      description: "Platelet-rich plasma combined with microneedling to stimulate dormant follicles and improve hair density.",
      image: prpTreatment,
      features: ["Minimal downtime", "Natural growth", "FDA approved"],
      duration: "45 min",
      sessions: "4-6 sessions"
    },
    {
      title: "GFC + Microneedling", 
      description: "Growth factor concentrate therapy combined with microneedling to enhance hair thickness and follicle activation.",
      image: gfcTreatment,
      features: ["Advanced technology", "Faster results", "Safe procedure"],
      duration: "60 min",
      sessions: "3-5 sessions"
    },
    {
      title: "Exosome Therapy",
      description: "Exosome-based therapy that rejuvenates the scalp and encourages new hair growth at the cellular level.",
      image: exosomeTherapy,
      features: ["Cutting-edge", "Cellular repair", "Long-lasting"],
      duration: "30 min",
      sessions: "2-4 sessions"
    }
  ];

  const processSteps = [
    {
      title: "Consultation & Assessment",
      description: "Detailed evaluation of hair and scalp condition using advanced diagnostics.",
      icon: Users
    },
    {
      title: "Diagnostics",
      description: "Hair analysis, trichoscopy, and hormonal/nutritional assessments to identify root causes.",
      icon: Shield
    },
    {
      title: "Therapy Application", 
      description: "PRP, GFC, or Exosome therapy performed by certified specialists.",
      icon: Award
    },
    {
      title: "Post-Treatment & Monitoring",
      description: "Follow-ups, progress tracking, and customized maintenance plans.",
      icon: Clock
    }
  ];

  const faqs = [
    {
      question: "Is Growth Therapy painful?",
      answer: "Minimal discomfort is usually experienced. We use local anesthetics and advanced techniques to ensure patient comfort throughout the procedure."
    },
    {
      question: "How long until results are visible?",
      answer: "Initial improvements can be seen within 3-6 months, with optimal results usually after 6-12 months of consistent treatment."
    },
    {
      question: "Is it safe for all ages?",
      answer: "Growth therapies are generally safe for adults over 18. A thorough consultation will determine if you are a suitable candidate based on your medical history."
    },
    {
      question: "How many sessions are required?",
      answer: "Typically 4-6 sessions spaced 4-6 weeks apart, followed by maintenance sessions as recommended by your specialist."
    }
  ];

  const stats = [
    { value: "95%", label: "Success Rate" },
    { value: "1000+", label: "Happy Patients" },
    { value: "5 Star", label: "Rating" },
    { value: "10+ Years", label: "Experience" }
  ];

  const { open } = useImageLightbox();
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-hero font-sans">
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
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${hairGrowthHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gold-100/80 via-gold-200/60 to-gold-300/40" />
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold-500 text-gold-50 hover:bg-gold-600">
              ✨ Advanced Hair Restoration
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gold-900 mb-6 leading-tight">
              Hair Growth
              <span className="block text-gold-700">Therapies</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gold-800 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Advanced medical treatments to stimulate hair regrowth and restore your confidence with cutting-edge technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setIsModalOpen(true)}
                size="lg" 
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-gold-50 shadow-medium group"
              >
                <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Book Free Consultation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur border-gold-300/50 shadow-soft">
                  <CardContent className="p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gold-700 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gold-600">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-gold-100 text-gold-700 border-gold-300">
                  About Our Treatments
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-900 mb-6">
                  What Are Growth Therapies?
                </h2>
              </div>
              
              <div className="space-y-4 text-gold-800">
                <p className="text-base sm:text-lg leading-relaxed">
                  Growth therapies are advanced treatments designed to stimulate hair follicles, 
                  improve scalp health, and promote hair regeneration. Our specialized therapies 
                  combine medical science with cutting-edge technology.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  We offer PRP + Microneedling, GFC + Microneedling, and Exosome therapies 
                  tailored to your specific hair loss pattern and scalp condition.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["FDA Approved", "Minimally Invasive", "Natural Results", "Expert Care"].map((feature) => (
                  <Badge key={feature} variant="secondary" className="bg-gold-100 text-gold-700">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="order-first lg:order-last">
              <Card className="overflow-hidden shadow-medium border-gold-300/50">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={consultationProcess}
                    alt="Hair Growth Consultation" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-900/20 to-transparent" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gold-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-gold-500 text-gold-50">
              Our Services
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-900 mb-6">
              Our Growth Therapies
            </h2>
            <p className="text-base sm:text-lg text-gold-700 max-w-3xl mx-auto">
              Explore our scientifically-backed treatments designed to restore hair density and improve scalp health
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {treatments.map((treatment, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-gold-300/50 bg-white/80 backdrop-blur">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gold-500 text-gold-50">
                      {treatment.duration}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gold-900 mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gold-700 mb-4 leading-relaxed">
                    {treatment.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gold-600">
                      <Clock className="mr-2 h-4 w-4" />
                      {treatment.sessions}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {treatment.features.map((feature, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-xs bg-gold-100 text-gold-700"
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-gold-100 text-gold-700 border-gold-300">
              Our Approach
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-900 mb-6">
              Our Treatment Process
            </h2>
            <p className="text-base sm:text-lg text-gold-700 max-w-3xl mx-auto">
              We follow a systematic, science-based approach to deliver the best results in hair restoration
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-6 border-gold-300/50 bg-white/80 backdrop-blur hover:shadow-soft transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-gold-50 font-bold text-lg shadow-soft">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gold-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gold-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="order-first sm:order-last">
              <Card className="overflow-hidden shadow-medium border-gold-300/50 h-full">
                <div className="aspect-[3/4] sm:aspect-auto sm:h-full relative">
                  <img 
                    src={consultationProcess}
                    alt="Growth therapy process" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-900/30 to-transparent" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gold-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-gold-500 text-gold-50">
              Results
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-900 mb-6">
              Success Stories
            </h2>
            <p className="text-base sm:text-lg text-gold-700 max-w-3xl mx-auto">
              Transformative results achieved by our patients through Growth Therapies
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                before: beforeafter12,
                title: "Female Pattern Hair Loss",
                description: "6 months of personalized PRP therapy and nutritional guidance",
                timeframe: "6 months"
              },
              {
                before: beforeafter19,
                title: "Androgenetic Alopecia", 
                description: "9 months of comprehensive treatment including GFC therapy",
                timeframe: "9 months"
              }
            ].map((result, index) => (
              <Card key={index} className="overflow-hidden shadow-medium border-gold-300/50 bg-white/90 backdrop-blur">
                <div className="p-2">
                  <button onClick={() => open(result.before, `${result.title} — Before`)} className="block w-full">
                    <img src={result.before} alt={`${result.title} — Before`} className="w-full h-72 md:h-64 object-cover rounded-md" loading="lazy" />
                  </button>
                </div>

                <CardContent className="p-4 sm:p-6 text-center">
                  <h4 className="text-base sm:text-lg font-bold text-gold-900 mb-2">
                    {result.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gold-700">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-gold-100 text-gold-700 border-gold-300">
              FAQ
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gold-700">
              Common questions about Growth Therapies
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="border-gold-300/50 bg-white/80 backdrop-blur hover:shadow-soft transition-all cursor-pointer"
                onClick={() => setActiveTab(activeTab === index ? -1 : index)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gold-900 pr-4">
                      {faq.question}
                    </h3>
                    <ArrowRight 
                      className={`h-5 w-5 text-gold-500 transition-transform flex-shrink-0 ${
                        activeTab === index ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                  
                  {activeTab === index && (
                    <div className="mt-4 pt-4 border-t border-gold-200">
                      <p className="text-sm sm:text-base text-gold-700 leading-relaxed">
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
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-primary shadow-strong border-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-600/20 to-gold-800/20" />
            <CardContent className="relative z-10 p-8 sm:p-12 text-center">
              <div className="mb-6">
                <Star className="h-12 w-12 text-gold-100 mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-50 mb-4">
                  Ready to Transform Your Hair?
                </h2>
                <p className="text-base sm:text-lg text-gold-100 max-w-2xl mx-auto leading-relaxed">
                  Take the first step towards healthier, thicker hair with a customized growth therapy plan designed just for you.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-gold-700 hover:bg-gold-50 shadow-medium"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto border-gold-100 text-gold-100 hover:bg-gold-100 hover:text-gold-700"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (555) 123-4567
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </div>
  );
};

export default Growth;
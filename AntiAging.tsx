import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

// Import generated images
import antiAgingHero from '@/assets/brunette.jpg';
import threadLiftTreatment from '@/assets/brunette.jpg';
import microbladingTreatment from '@/assets/brunette.jpg';
import fillersTreatment from '@/assets/brunette.jpg';
import botoxTreatment from '@/assets/brunette.jpg';
import consultationProcess from '@/assets/brunette.jpg';
import beforeTreatment from '@/assets/brunette.jpg';
import afterTreatment from '@/assets/brunette.jpg';

const AntiAging = () => {
  const [activeTab, setActiveTab] = useState(-1);

  const treatments = [
    {
      title: "Thread Lift",
      description: "Non-surgical facelift using biocompatible threads to lift and tighten sagging skin for a more youthful appearance.",
      image: threadLiftTreatment,
      features: ["Immediate results", "No surgery", "Minimal downtime"],
      duration: "60-90 min",
      sessions: "1-2 sessions"
    },
    {
      title: "Microblading", 
      description: "Semi-permanent eyebrow enhancement technique creating natural-looking, fuller brows with precise hair-like strokes.",
      image: microbladingTreatment,
      features: ["Long-lasting", "Natural look", "Customized shape"],
      duration: "2-3 hours",
      sessions: "1-2 sessions"
    },
    {
      title: "Dermal Fillers",
      description: "Injectable treatments to restore volume, smooth wrinkles, and enhance facial contours for a refreshed appearance.",
      image: fillersTreatment,
      features: ["Instant results", "Natural enhancement", "FDA approved"],
      duration: "30-45 min",
      sessions: "1-2 sessions"
    },
    {
      title: "Botox Injections",
      description: "Muscle-relaxing injections that smooth dynamic wrinkles and prevent new lines from forming.",
      image: botoxTreatment,
      features: ["Quick procedure", "Proven results", "Preventative care"],
      duration: "15-20 min",
      sessions: "Every 3-4 months"
    }
  ];

  const processSteps = [
    {
      title: "Consultation & Assessment",
      description: "Comprehensive facial analysis and discussion of your aesthetic goals with our certified specialists.",
      icon: Users
    },
    {
      title: "Treatment Planning",
      description: "Customized treatment plan tailored to your unique facial structure and desired outcomes.",
      icon: Shield
    },
    {
      title: "Professional Treatment", 
      description: "Expert application of chosen procedures using advanced techniques and premium products.",
      icon: Award
    },
    {
      title: "Follow-up & Maintenance",
      description: "Post-treatment care, progress monitoring, and maintenance scheduling for optimal results.",
      icon: Clock
    }
  ];

  const faqs = [
    {
      question: "Are anti-aging treatments painful?",
      answer: "Most treatments involve minimal discomfort. We use topical anesthetics and advanced injection techniques to ensure your comfort throughout the procedure."
    },
    {
      question: "How long do results last?",
      answer: "Results vary by treatment: Botox lasts 3-4 months, fillers 6-18 months, thread lifts 1-2 years, and microblading 1-3 years depending on skin type and aftercare."
    },
    {
      question: "What's the recovery time?",
      answer: "Most treatments have minimal downtime. Botox and fillers allow immediate return to activities, while thread lifts may require 1-2 days of rest."
    },
    {
      question: "Are the treatments safe?",
      answer: "All our treatments use FDA-approved products and are performed by certified professionals following strict safety protocols and sterile techniques."
    }
  ];

  const stats = [
    { value: "98%", label: "Satisfaction Rate" },
    { value: "2000+", label: "Treatments Done" },
    { value: "5 Star", label: "Reviews" },
    { value: "15+ Years", label: "Experience" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${antiAgingHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gold-100/80 via-gold-200/60 to-gold-300/40" />
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold-500 text-gold-50 hover:bg-gold-600">
              ✨ Advanced Aesthetic Medicine
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gold-900 mb-6 leading-tight">
              Anti-Aging
              <span className="block text-gold-700">Treatments</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gold-800 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Rejuvenate your appearance with our comprehensive range of non-surgical anti-aging treatments designed to restore youthful vitality
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-gold-50 shadow-medium group"
              >
                <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Book Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-gold-400 text-gold-700 hover:bg-gold-400 hover:text-gold-50"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                View Gallery
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
                  What Are Anti-Aging Treatments?
                </h2>
              </div>
              
              <div className="space-y-4 text-gold-800">
                <p className="text-base sm:text-lg leading-relaxed">
                  Anti-aging treatments are advanced aesthetic procedures designed to restore youthful 
                  appearance, reduce signs of aging, and enhance natural beauty. Our comprehensive 
                  approach combines the latest techniques with premium products.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  We specialize in Thread Lifts for skin tightening, Microblading for perfect brows, 
                  Dermal Fillers for volume restoration, and Botox for wrinkle prevention and treatment.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Non-Surgical", "Quick Recovery", "Natural Results", "Expert Care"].map((feature) => (
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
                    alt="Anti-aging consultation" 
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
              Anti-Aging Treatments
            </h2>
            <p className="text-base sm:text-lg text-gold-700 max-w-3xl mx-auto">
              Discover our range of scientifically-proven treatments designed to turn back the clock and enhance your natural beauty
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
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
              We follow a personalized, comprehensive approach to deliver natural-looking results that enhance your unique beauty
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
                    alt="Anti-aging treatment process" 
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
              Transformation Gallery
            </h2>
            <p className="text-base sm:text-lg text-gold-700 max-w-3xl mx-auto">
              Witness the remarkable transformations achieved through our anti-aging treatments
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                before: beforeTreatment,
                after: afterTreatment,
                title: "Thread Lift & Fillers",
                description: "Complete facial rejuvenation with thread lift and strategic filler placement",
                timeframe: "Immediately"
              },
              {
                before: afterTreatment,
                after: beforeTreatment,
                title: "Botox & Microblading", 
                description: "Wrinkle reduction and eyebrow enhancement for a refreshed look",
                timeframe: "2 weeks"
              }
            ].map((result, index) => (
              <Card key={index} className="overflow-hidden shadow-medium border-gold-300/50 bg-white/90 backdrop-blur">
                <div className="grid grid-cols-2">
                  <div>
                    <div className="bg-gold-100 px-3 py-2 text-center">
                      <span className="text-xs sm:text-sm font-semibold text-gold-700">Before</span>
                    </div>
                    <div className="aspect-square">
                      <img 
                        src={result.before}
                        alt="Before treatment" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="bg-gold-500 px-3 py-2 text-center">
                      <span className="text-xs sm:text-sm font-semibold text-gold-50">After - {result.timeframe}</span>
                    </div>
                    <div className="aspect-square">
                      <img 
                        src={result.after}
                        alt="After treatment" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
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
              Common questions about anti-aging treatments
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-primary shadow-strong border-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-600/20 to-gold-800/20" />
            <CardContent className="relative z-10 p-8 sm:p-12 text-center">
              <div className="mb-6">
                <Star className="h-12 w-12 text-gold-100 mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-50 mb-4">
                  Ready to Turn Back Time?
                </h2>
                <p className="text-base sm:text-lg text-gold-100 max-w-2xl mx-auto leading-relaxed">
                  Discover the perfect anti-aging treatment for you with a personalized consultation from our expert aesthetic professionals.
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
      </section>
    </div>
  );
};

export default AntiAging;
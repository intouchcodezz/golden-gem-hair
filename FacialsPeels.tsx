import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Phone, 
  Clock, 
  Users, 
  Award, 
  Sparkles, 
  Heart, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  MapPin,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/face.jpg';
import facialTreatment from '@/assets/face.jpg';
import chemicalPeel from '@/assets/face.jpg';
import hydrafacial from '@/assets/face.jpg';

const Facial: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(-1);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.fade-in-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const treatments = [
    {
      title: "Vampire Facial",
      description: "Revolutionary PRP therapy using your own blood to stimulate collagen production and natural skin regeneration.",
      image: facialTreatment,
      price: "$299",
      duration: "60 min",
      features: ["PRP Therapy", "Collagen Boost", "Natural Results"],
      icon: Heart
    },
    {
      title: "HydraFacial",
      description: "Deep cleansing and hydrating treatment with immediate results and zero downtime.",
      image: hydrafacial,
      price: "$179",
      duration: "45 min",
      features: ["Instant Glow", "Deep Cleanse", "No Downtime"],
      icon: Sparkles
    },
    {
      title: "Chemical Peel",
      description: "Professional-grade exfoliation to reveal fresh, radiant skin with customizable intensity levels.",
      image: chemicalPeel,
      price: "$149",
      duration: "30 min",
      features: ["Deep Exfoliation", "Custom Intensity", "Dramatic Results"],
      icon: Zap
    },
    {
      title: "MDA Treatment",
      description: "Medical-grade microdermabrasion for smoother texture and improved skin tone.",
      image: facialTreatment,
      price: "$129",
      duration: "45 min",
      features: ["Medical Grade", "Texture Improvement", "Scar Reduction"],
      icon: Award
    },
    {
      title: "EXO Glo Facial",
      description: "Luxurious exosome-infused treatment for advanced anti-aging and skin rejuvenation.",
      image: hydrafacial,
      price: "$349",
      duration: "75 min",
      features: ["Exosome Therapy", "Anti-Aging", "Premium Care"],
      icon: Sparkles
    },
    {
      title: "Organic Peel",
      description: "Natural enzyme peels using organic ingredients for gentle yet effective skin renewal.",
      image: chemicalPeel,
      price: "$119",
      duration: "40 min",
      features: ["Organic Enzymes", "Gentle Treatment", "Natural Renewal"],
      icon: Heart
    }
  ];

  const stats = [
    { number: "2,500+", label: "Happy Clients" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "15+", label: "Treatment Types" },
    { number: "10", label: "Years Experience" }
  ];

  const faqs = [
    {
      question: "How often should I get facials?",
      answer: "For optimal results, we recommend monthly facials for maintenance. Your aesthetician will create a personalized schedule based on your skin type and concerns."
    },
    {
      question: "What's the difference between chemical peels and microdermabrasion?",
      answer: "Chemical peels use acids to remove damaged skin layers, while microdermabrasion uses physical exfoliation. Peels typically have longer recovery times but address deeper issues."
    },
    {
      question: "Are vampire facials safe?",
      answer: "Yes, when performed by trained professionals using sterile techniques. Since it uses your own blood, there's no risk of allergic reactions. Mild swelling and redness are normal for 24-48 hours."
    },
    {
      question: "Can I combine different treatments?",
      answer: "Many treatments can be safely combined for enhanced results. Your aesthetician will determine the best combinations for your specific skin needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Luxury Facial
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Treatments
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Transform your skin with our advanced facial treatments and chemical peels. 
            Reveal your natural radiance with personalized care from certified aestheticians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-accent text-white hover:opacity-90 transition-all duration-300">
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center fade-in-card ${visibleCards.has(index) ? 'animate-scale-in' : 'opacity-0'}`}
                data-index={index}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Advanced Skincare Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive facial and chemical peel services combine cutting-edge technology 
                with time-tested techniques to deliver exceptional results. Each treatment is 
                performed by certified aestheticians using premium products.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Medical-Grade Products</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-medium">Certified Aestheticians</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-medium">Personalized Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="font-medium">Natural Results</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src={facialTreatment} 
                alt="Professional facial treatment" 
                className="rounded-2xl shadow-elevated w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Signature Treatments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete range of facial treatments, each designed to address 
              specific skin concerns and deliver remarkable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <Card 
                key={index}
                className={`fade-in-card hover-lift overflow-hidden bg-gradient-card ${
                  visibleCards.has(index + 10) ? 'animate-fade-in' : 'opacity-0'
                }`}
                data-index={index + 10}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary p-2 rounded-full shadow-soft">
                    <treatment.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-bold text-primary text-lg">{treatment.price}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {treatment.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{treatment.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {treatment.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-accent text-white hover:opacity-90">
                    Book Treatment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Treatment Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience our comprehensive approach to facial care for optimal results
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Skin Analysis",
                description: "Comprehensive assessment of your skin type and concerns using advanced diagnostic tools."
              },
              {
                step: "02", 
                title: "Treatment Planning",
                description: "Personalized treatment plan developed based on your skin analysis and aesthetic goals."
              },
              {
                step: "03",
                title: "Professional Treatment",
                description: "Expert application by certified aestheticians using premium products and techniques."
              },
              {
                step: "04",
                title: "Aftercare Guidance",
                description: "Comprehensive instructions and product recommendations to maintain your results."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start animate-fade-in">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our facial treatments
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="cursor-pointer hover-lift transition-all duration-300"
                onClick={() => setActiveTab(activeTab === index ? -1 : index)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <ArrowRight 
                      className={`h-5 w-5 text-primary transition-transform duration-300 ${
                        activeTab === index ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                  {activeTab === index && (
                    <p className="text-muted-foreground mt-4 pt-4 border-t border-border animate-fade-in">
                      {faq.answer}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your consultation today and discover the perfect treatment plan 
            for your unique skin needs with our expert aestheticians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              (555) 123-GLOW
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Visit Us</h3>
                <p className="text-muted-foreground text-sm">123 Spa Avenue, Beauty District</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Phone className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Call Us</h3>
                <p className="text-muted-foreground text-sm">(555) 123-GLOW</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Email Us</h3>
                <p className="text-muted-foreground text-sm">hello@luxefacials.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facial;
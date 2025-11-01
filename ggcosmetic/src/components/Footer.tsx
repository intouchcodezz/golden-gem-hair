import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Twitter, ArrowRight, Heart } from "lucide-react";
import logo from '../assets/newlogo.jpg';

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blogs", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ];

  const treatments = [
    { label: "Biocell Therapy", href: "/biocell-therapy" },
    { label: "PRP Treatment", href: "/prp-treatment" },
    { label: "Hair Transplantation", href: "/hair-transplant" },
    { label: "Scalp Micro Pigmentation", href: "/scalp-pigmentation" },
    { label: "Hair Rejuvenation", href: "/hair-rejuvenation" },
    { label: "Follitreat Therapy", href: "/folitreat-treatment" },
  ];

  return (
    <footer id="site-footer" className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground to-card-foreground">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Company Info - Larger Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6 group">
                <div className='w-16 h-16 overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 ring-2 ring-primary/20'>
                  <img src={logo} alt="Golden Gem Clinic" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    The Golden Gem
                  </h3>
                  <p className="text-xs text-background/60 font-medium tracking-wide">Hair & Trichology Clinic</p>
                </div>
              </div>
              
              <p className="text-background/70 leading-relaxed mb-8 text-sm">
                Leading hair and trichology clinic with 10+ years of excellence in providing 
                cutting-edge treatments with FDA-certified equipment and guaranteed results.
              </p>

              <div className="space-y-4">
                <a href="tel:+918122733730" className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-background/50 mb-0.5">Call Us</p>
                    <span className="text-background/90 font-medium">+91 8122733730</span>
                  </div>
                </a>
                
                <a href="mailto:info@thegoldengem.com" className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                    <Mail className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-background/50 mb-0.5">Email Us</p>
                    <span className="text-background/90 font-medium">info@thegoldengem.com</span>
                  </div>
                </a>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-background/50 mb-0.5">Visit Us</p>
                    <span className="text-background/80 text-sm leading-relaxed">
                      No: 325/255, MKN Rd, near old Sukkubhai Hotel, Ramapuram, Alandur, Chennai, Tamil Nadu 600016
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-bold mb-6 text-background flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-background/70 hover:text-primary transition-all duration-300 flex items-center gap-2 group text-sm"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-bold mb-6 text-background flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-secondary to-primary rounded-full" />
                Our Treatments
              </h4>
              <ul className="space-y-3">
                {treatments.map((treatment, index) => (
                  <li key={index}>
                    <Link 
                      to={treatment.href} 
                      className="text-background/70 hover:text-secondary transition-all duration-300 flex items-center gap-2 group text-sm"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{treatment.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold mb-6 text-background flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full" />
                Connect
              </h4>
              
              <p className="text-background/70 text-sm mb-6">Follow us on social media for updates and tips</p>
              
              <div className="grid grid-cols-4 gap-3 mb-8">
                <a 
                  href="https://www.instagram.com/thegoldengemcosmetic/?hl=en" 
                  className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary hover:to-primary/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 group"
                >
                  <Instagram className="w-5 h-5 text-primary group-hover:text-background transition-colors" />
                </a>
                <a 
                  href="https://www.facebook.com/TheGoldenGemCosmeticclinic/" 
                  className="aspect-square bg-gradient-to-br from-accent/20 to-accent/10 hover:from-accent hover:to-accent/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50 group"
                >
                  <Facebook className="w-5 h-5 text-accent group-hover:text-background transition-colors" />
                </a>
                <a 
                  href="https://www.youtube.com/@TheGoldenGemCosmeticClinic/featured" 
                  className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/10 hover:from-secondary hover:to-secondary/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-secondary/50 group"
                >
                  <Youtube className="w-5 h-5 text-secondary group-hover:text-background transition-colors" />
                </a>
                {/* <a 
                  href="#" 
                  className="aspect-square bg-gradient-to-br from-primary/20 to-accent/10 hover:from-primary hover:to-accent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 group"
                >
                  <Twitter className="w-5 h-5 text-primary group-hover:text-background transition-colors" />
                </a> */}
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <p className="text-xs text-background/60 font-medium mb-2">Open Hours</p>
                <p className="text-sm text-background/90 font-semibold">Mon - Sat: 9AM - 8PM</p>
                <p className="text-sm text-background/90 font-semibold">Sunday: 10AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-primary/50 blur-sm" />
        </div>

        {/* Bottom Bar */}
        <div className="py-8 pb-24 md:pb-16 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left px-4 sm:px-6 lg:px-12">
            
            {/* 🧡 Left Side - Copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-3 text-background/60 text-xs sm:text-sm leading-relaxed">
              <div className="flex items-center flex-wrap justify-center gap-1">
                <span>© 2025 The Golden Gem Cosmetic Clinic.</span>
                <span>Made with</span>
                <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse inline-block" />
                <span>for your hair care.</span>
              </div>
              <div className="flex items-center flex-wrap justify-center gap-1">
                <span>Designed & Maintained by</span>
                <a
                  href="https://intouchsolutions.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Intouch Solutions
                </a>
              </div>
            </div>

            {/* 🔗 Right Side - Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link
                to="/privacy-policy"
                className="text-background/60 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-background/60 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
              >
                Terms of Service
              </Link>
              <Link
                to="/medical-disclaimer"
                className="text-background/60 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
              >
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
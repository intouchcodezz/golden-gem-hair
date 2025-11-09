import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, Clock, Instagram, Facebook, Youtube, Calendar } from 'lucide-react';
import EnquiryForm from './EnquiryModal';
import { gsap } from 'gsap';
import logo from '../assets/newlogo.jpg';
import prp from '../assets/prp.jpg';
import ht from '../assets/ht.jpg';
import HairRejuvenation from '../assets/hairrejuvenation.jpg';
import folitreat from '../assets/folitreat.jpg'
import exogro from '../assets/exogro.webp'
import mesotherapy from '../assets/mesotherapy.jpg'
import gfc from '../assets/gfc.webp'
import smp from '../assets/SMP.jpg'
import ivhair from '../assets/ivhair.png'
import cellgraft from '../assets/cellgraft.webp'
import growththearpies from '../assets/growththearpies.jpeg'
import scalp from '../assets/scalp.jpg'
import smp1 from '../assets/smp1.jpg'


interface NavigationItem {
  title: string;
  hasDropdown: boolean;
  href?: string;
  subMenus?: {
    [key: string]: {
      name: string;
      items: {
        title: string;
        href: string;
        image: string;
        desc: string;
      }[];
    };
  };
}

const navigationItems: Record<string, NavigationItem> = {
  home: { title: 'Home', hasDropdown: false, href: '/' },
  about: { title: 'About', hasDropdown: false, href: '/about' },
  treatments: {
    title: 'Treatments',
    hasDropdown: true,
    subMenus: {
      semiSurgical: {
        name: 'Semi Surgical',
        items: [
          { title: 'GFC', href: '/gfc-treatment', image: gfc, desc: 'Growth Factor Concentrate' },
          { title: 'PRP', href: '/prp-treatment', image: prp, desc: 'Platelet Rich Plasma' },          
          { title: 'Mesotherapy', href: '/mesotherapy', image: mesotherapy, desc: 'Reduce visible marks' },
          { title: 'Scalp Micro Pigmentation', href: '/scalp-pigmentation', image: smp, desc: 'Even skin tone' },
          { title: 'Exogro', href: '/exogro', image: exogro, desc: 'Advanced treatment' },
          { title: 'IV Hair Therapy', href: '/iv-hair-therapy', image: ivhair, desc: 'Vitamin infusion' },
          { title: 'Cell Graft Therapy', href: '/cell-graft', image: cellgraft, desc: 'Cell regeneration' },
        ]
      },
      hair: {
        name: 'Non Surgical',
        items: [
          { title: 'Hair Rejuvenation', href: '/hair-treatments/hair-rejuvenation', image: HairRejuvenation, desc: 'Revitalize your hair' },
          { title: 'Folitreat therapy', href: '/folitreat-treatment', image: folitreat, desc: 'Follicle treatment' },
          { title: 'Growth Therapies', href: '/hair-treatments/growth-therapies', image: growththearpies, desc: 'Advanced growth solutions' },
          { title: 'Scalp Care', href: '/hair-treatments/scalp-care', image: scalp, desc: 'Scalp health & care' },
        ]
      },
      surgical: {
        name: 'Surgical',
        items: [
          { title: 'Hair Transplant FUE', href: '/fue-transplant', image: ht, desc: 'Follicular Unit Extraction' },
        ]
      },
    }
  },
  diagnostics: {
    title: 'Diagnostics',
    hasDropdown: true,
    subMenus: {
      Diagnosis: {
        name: 'Diagnosis',
        items: [
          { title: 'Trichoscopy', href: '/trichoscopy', image: prp, desc: 'Advanced diagnostics' },
          { title: 'Hair Density', href: '/hair-density', image: mesotherapy, desc: 'Complete analysis' },
          { title: 'Blood Tests', href: '/blood-hormonal', image: gfc, desc: 'Detailed assessment' },
          { title: 'Genetic Assessment', href: '/genetic-assessment', image: exogro, desc: 'Genetic profiling' },
        ]
      },
    }
  },
  results: {
    title: 'Results',
    hasDropdown: true,
    subMenus: {
      gallery: {
        name: 'Gallery',
        items: [
          { title: 'Before & After', href: '/results/before-after', image: smp1, desc: 'See transformations' },
        ]
      },
      testimonials: {
        name: 'Testimonials',
        items: [
          { title: 'Client Reviews', href: '/results/patient-testimonials', image: scalp, desc: 'What clients say' },
        ]
      },
    }
  },
  offers: { title: 'Offers', hasDropdown: false, href: '/offers' },
  careers: { title: 'Careers', hasDropdown: false, href: '/careers' },
  blog: { title: 'Blog', hasDropdown: false, href: '/blog' }
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      if (mobileMenuRef.current) {
        gsap.fromTo(mobileMenuRef.current,
          { x: '100%' },
          { x: 0, duration: 0.4, ease: 'power3.out' }
        );
      }
    } else {
      // animate menu out when closing (optional)
      if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, { x: '100%', duration: 0.25, ease: 'power3.in' });
      }
    }
    // note: body scroll locking is handled by a dedicated effect below
  }, [isMobileOpen]);

  // Centralized scroll lock: prevent body scroll when mobile menu or desktop mega-dropdown is open
  useEffect(() => {
    const shouldLock = isMobileOpen || activeMenu !== null;
    if (shouldLock) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = '';
    };
  }, [isMobileOpen, activeMenu]);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
    setActiveSubMenu(Object.keys(navigationItems[menu]?.subMenus || {})[0] || null);
    
    // Animate dropdown
    if (dropdownRef.current) {
      gsap.fromTo(dropdownRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setActiveSubMenu(null);
    }, 200);
  };

  const toggleMobileDropdown = (key: string) => {
    const newState = activeMobileMenu === key ? null : key;
    setActiveMobileMenu(newState);
    setActiveMobileSubMenu(null);
  };

  const toggleMobileSubMenu = (subKey: string) => {
    setActiveMobileSubMenu(activeMobileSubMenu === subKey ? null : subKey);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <EnquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          console.log("Form submitted:", data);
          setIsModalOpen(false);
        }}
        treatment="General Consultation"
      />

      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-foreground to-foreground/90 border-b border-border/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-2.5 text-[13px] text-primary-foreground/95">
            <div className="flex items-center gap-8">
              <a href="tel:+918122733730" className="flex items-center gap-2 hover:text-accent transition-colors group">
                <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">+91 8122733730</span>
              </a>
              <a href="mailto:info@goldengemcosmetic.com" className="flex items-center gap-2 hover:text-accent transition-colors group">
                <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>info@goldengemcosmetic.com</span>
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon-Sat: 9AM-7PM</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/60 text-xs font-medium">Follow Us:</span>
              <div className="flex items-center gap-2">
                {[
                  { Icon: Instagram, href: 'https://www.instagram.com/thegoldengemcosmetic/?hl=en' },
                  { Icon: Facebook, href: 'https://www.facebook.com/TheGoldenGemCosmeticclinic/' },
                  { Icon: Youtube, href: 'https://www.youtube.com/@TheGoldenGemCosmeticClinic/featured' }
                ].map(({ Icon, href }, idx) => (
                  <a 
                    key={idx} 
                    href={href} 
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:scale-110 transition-all"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 bg-background ${
          isScrolled ? 'shadow-lg border-b border-border' : 'border-b border-border/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-28 lg:h-32">
            {/* Logo - Large and prominent, printed style */}
            <a href="/" className="flex items-center group">
              <div className="relative w-auto transition-all duration-300 group-hover:scale-[1.02]" style={{ height: '110px' }}>
                <img 
                  src={logo} 
                  alt="Golden Gem Cosmetic Clinic" 
                  className="h-full object-contain"
                />
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <a 
                href="/" 
                className="px-4 py-2.5 text-sm font-semibold text-foreground rounded-lg hover:text-primary hover:bg-muted/50 transition-all"
              >
                Home
              </a>

              {Object.entries(navigationItems).map(([key, menu]) => {
                if (key === 'home' || key === 'offers' || key === 'about') return null;
                
                if (!menu.hasDropdown) {
                  return (
                    <a 
                      key={key} 
                      href={menu.href} 
                      className="px-4 py-2.5 text-sm font-semibold text-foreground rounded-lg hover:text-primary hover:bg-muted/50 transition-all"
                    >
                      {menu.title}
                    </a>
                  );
                }

                return (
                  <div
                    key={key}
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}
                    className="relative"
                  >
                    <button className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-foreground rounded-lg hover:text-primary hover:bg-muted/50 transition-all group">
                      {menu.title}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === key ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                );
              })}
              
                {['Offers', 'About'].map((link) => (
                  <a key={link} href={`/${link.toLowerCase()}`} className="px-4 py-3 text-slate-700 font-medium rounded hover:text-amber-500 hover:bg-amber-100/20 transition-colors">{link}</a>
                ))}
            </nav>

            {/* Full-Width Mega Dropdown */}
            {activeMenu && navigationItems[activeMenu]?.subMenus && (
              <div 
                onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
                onMouseLeave={handleMouseLeave}
                className="fixed left-0 right-0 bg-card shadow-2xl border-t border-b border-border z-40 mt-[28px] lg:mt-[32px] top-[112px] lg:top-[128px]"
              >
                <div 
                  ref={dropdownRef}
                  className="max-w-7xl mx-auto"
                >
                  <div className="flex h-[480px]">
                    {/* Left Panel */}
                    <div className="w-1/5 bg-muted/30 border-r border-border overflow-y-auto">
                      {Object.entries(navigationItems[activeMenu].subMenus!).map(([subKey, subMenu]) => (
                        <button
                          key={subKey}
                          onMouseEnter={() => setActiveSubMenu(subKey)}
                          className={`w-full text-left px-6 py-5 text-sm font-semibold transition-all border-l-4 ${
                            activeSubMenu === subKey
                              ? 'bg-primary/10 border-primary text-primary'
                              : 'border-transparent text-foreground hover:bg-muted/50 hover:text-primary'
                          }`}
                        >
                          {subMenu.name}
                        </button>
                      ))}
                    </div>

                    {/* Right Panel - Larger images */}
                    <div className="w-4/5 bg-card p-8 overflow-y-auto">
                      {activeSubMenu && navigationItems[activeMenu].subMenus![activeSubMenu] && (
                        <>
                          <h3 className="font-bold text-foreground mb-6 text-lg border-b-2 border-primary/20 pb-4">
                            {navigationItems[activeMenu].subMenus![activeSubMenu].name}
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {navigationItems[activeMenu].subMenus![activeSubMenu].items.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.href}
                                className="group block transition-all duration-300 hover:scale-[1.03]"
                              >
                                <div className="overflow-hidden rounded-xl mb-3 bg-muted/30 h-40 shadow-md group-hover:shadow-xl transition-all">
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                </div>
                                <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-tight">
                                  {item.title}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1 leading-snug">
                                  {item.desc}
                                </div>
                              </a>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden lg:flex items-center gap-2 px-6 py-3 font-semibold text-sm text-white bg-[#f4a00c] hover:shadow-lg hover:scale-105 rounded-xl transition-all"
              >
                <Calendar className="w-4 h-4" />
                Get Free Consultation
              </button>


              <button 
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2.5 rounded-lg bg-muted/50 hover:bg-muted text-foreground transition-colors"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-background z-50 overflow-y-auto lg:hidden transform ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 shadow-2xl`}
      >
        {/* Mobile Header */}
        <div className="sticky top-0 bg-background border-b border-border px-4 sm:px-6 py-4 flex items-center justify-between z-10">
          <a href="/" className="flex items-center">
            <div className="w-40 h-16 sm:w-48 sm:h-18" style={{ height: '110px' }}>
              <img 
                src={logo} 
                alt="Golden Gem Clinic" 
                className="w-full h-full object-contain"
              />
            </div>
          </a>
          <button 
            onClick={() => setIsMobileOpen(false)}
            className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="py-2">
          <a 
            href="/" 
            className="block px-4 sm:px-6 py-4 text-foreground font-semibold hover:bg-muted/50 border-b border-border/50"
            onClick={() => setIsMobileOpen(false)}
          >
            Home
          </a>

          {Object.entries(navigationItems).map(([key, menu]) => {
            if (key === 'home') return null;
            
            if (!menu.hasDropdown) {
              return (
                <a 
                  key={key} 
                  href={menu.href} 
                  className="block px-4 sm:px-6 py-4 text-foreground font-semibold hover:bg-muted/50 border-b border-border/50"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {menu.title}
                </a>
              );
            }

            return (
              <div key={key} className="border-b border-border/50">
                <button
                  onClick={() => toggleMobileDropdown(key)}
                  className="flex justify-between items-center w-full px-4 sm:px-6 py-4 font-semibold text-foreground hover:bg-muted/50"
                >
                  {menu.title}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileMenu === key ? 'rotate-180' : ''}`} />
                </button>

                {activeMobileMenu === key && menu.subMenus && (
                  <div className="bg-muted/30 border-l-4 border-primary">
                    {Object.entries(menu.subMenus).map(([subKey, subMenu]) => (
                      <div key={subKey} className="border-b border-border/30">
                        <button
                          onClick={() => toggleMobileSubMenu(subKey)}
                          className="flex justify-between items-center w-full px-4 sm:px-6 py-3 font-medium text-sm text-foreground hover:bg-muted/50"
                        >
                          {subMenu.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileSubMenu === subKey ? 'rotate-180' : ''}`} />
                        </button>

                        {activeMobileSubMenu === subKey && (
                          <div className="bg-card px-3 sm:px-4 py-3 space-y-3">
                            {subMenu.items.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.href}
                                className="block p-3 rounded-lg hover:bg-muted/50 border border-border"
                                onClick={() => setIsMobileOpen(false)}
                              >
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-32 rounded-lg object-cover mb-2"
                                />
                                <div className="font-semibold text-sm text-foreground">{item.title}</div>
                                <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="px-6 py-6">
            <button className="flex items-center justify-center w-full gap-2 px-6 py-4 font-semibold text-primary-foreground bg-[#f4a00c] hover:shadow-lg rounded-xl transition-all">
              <Calendar className="w-4 h-4" />
              Get Free Consultation
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

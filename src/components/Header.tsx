import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, Clock, Instagram, Facebook, Youtube, Calendar, Scissors, Sparkles } from 'lucide-react';
import EnquiryForm from './EnquiryModal';
import ClinicToggle from './ClinicToggle';
import { gsap } from 'gsap';
import logo from '../assets/newlogo.jpg';

// ── Hair treatment images ──────────────────────────────────────────────────
import prp from '../assets/prp3.webp';
import ht from '../assets/ht.jpg';
import HairRejuvenation from '../assets/hairrejuvenation.jpg';
import folitreat from '../assets/folitreat.jpg';
import exogro from '../assets/exogro.webp';
import geneticAssesment from '../assets/gh.png';
import blood from '../assets/blood.webp';
import mesotherapy from '../assets/meso.jpg';
import hd from '../assets/exogro.jpg';
import gfc from '../assets/gfc.webp';
import smp from '../assets/SMP.jpg';
import ivhair from '../assets/ivhair.png';
import growththearpies from '../assets/growth.jpg';
import scalp from '../assets/scalp.jpg';
import smp1 from '../assets/smp1.jpg';

// ── Skin treatment images ──────────────────────────────────────────────────
import vampire from '../assets/VampireFacial.jpg';
import pumpkin from '../assets/pumpkin-facial.jpg';
import miracle from '../assets/miracle-facial.jpg';
import MDA from '../assets/microdermabasion.jpg';
import organicpeel from '../assets/organic-peel.jpg';
import rejuvenation from '../assets/rejuvination.jpg';
import botox from '../assets/Botox.jpg';
import dermafillers from '../assets/Dermal-Fillers.png';
import threadlift from '../assets/Thread Lift.webp';
import HIFU from '../assets/HIFU.jpg';
import exoglo from '../assets/exoglo.jpg';
import fco2 from '../assets/FCO2.jpg';
import qswitch from '../assets/q-switch.webp';
import photofacial from '../assets/photofacial.jpg';
import laserhairreduction from '../assets/laserhair.jpg';
import chemicalpeel from '../assets/chemicalpeel.jpg';
import melanobreak from '../assets/MBT.jpg';
import microblading from '../assets/microbalding.jpg';
import antiacne from '../assets/anti-acne.jpg';
import hydra from '../assets/hydrafacial.webp';

// ── Skin concern images (use placeholders matching your asset names) ────────
import acneScarImg from '../assets/acne_scar.png';
import ageingImg from '../assets/aging.webp';
import darkCirclesImg from '../assets/dark_circles.webp';
import openPoresImg from '../assets/open_pores.webp';
import tannedSkinImg from '../assets/tanned.webp';

// Skin Diagnosis

import skinanalysis from '../assets/skin_analysis.jpg';
import dermoscopySkin from '../assets/dermoscopy_skin.jpg';
import PatchTest from '../assets/patch_test.webp';

/* ═══════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════ */
interface NavbarProps {
  clinic?: 'hair' | 'skin';
}

interface NavItem {
  title: string;
  href: string;
  image: string;
  desc: string;
}

interface SubMenu {
  name: string;
  items: NavItem[];
}

interface NavigationItem {
  title: string;
  hasDropdown: boolean;
  href?: string;
  subMenus?: Record<string, SubMenu>;
}

/* ═══════════════════════════════════════════════════════════
   THEME CONFIG
═══════════════════════════════════════════════════════════ */
const themes = {
  hair: {
    topBarBg: 'bg-gradient-to-r from-foreground to-foreground/90',
    ctaBtn: 'bg-[#f4a00c] hover:bg-[#e09200]',
    ctaText: 'text-white',
    activeIndicator: 'border-[#f4a00c] text-[#f4a00c] bg-[#f4a00c]/10',
    hoverText: 'hover:text-[#f4a00c]',
    pillActive: '#f4a00c',
  },
  skin: {
    topBarBg: 'bg-gradient-to-r from-[#8b1a4a] to-[#a82060]',
    ctaBtn: 'bg-[#d4537e] hover:bg-[#c0446e]',
    ctaText: 'text-white',
    activeIndicator: 'border-[#d4537e] text-[#d4537e] bg-[#d4537e]/10',
    hoverText: 'hover:text-[#d4537e]',
    pillActive: '#d4537e',
  },
} as const;

/* ═══════════════════════════════════════════════════════════
   HAIR NAVIGATION
═══════════════════════════════════════════════════════════ */
const hairNavigationItems: Record<string, NavigationItem> = {
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
        ],
      },
      hair: {
        name: 'Non Surgical',
        items: [
          { title: 'Hair Rejuvenation', href: '/hair-treatments/hair-rejuvenation', image: HairRejuvenation, desc: 'Revitalize your hair' },
          { title: 'Folitreat therapy', href: '/folitreat-treatment', image: folitreat, desc: 'Follicle treatment' },
          { title: 'Growth Therapies', href: '/hair-treatments/growth-therapies', image: growththearpies, desc: 'Advanced growth solutions' },
          { title: 'Scalp Care', href: '/hair-treatments/scalp-care', image: scalp, desc: 'Scalp health & care' },
        ],
      },
      surgical: {
        name: 'Surgical',
        items: [
          { title: 'Hair Transplant FUE', href: '/fue-transplant', image: ht, desc: 'Follicular Unit Extraction' },
        ],
      },
    },
  },

  diagnostics: {
    title: 'Diagnostics',
    hasDropdown: true,
    subMenus: {
      Diagnosis: {
        name: 'Diagnosis',
        items: [
          { title: 'Trichoscopy', href: '/trichoscopy', image: prp, desc: 'Advanced diagnostics' },
          { title: 'Hair Density', href: '/hair-density', image: hd, desc: 'Complete analysis' },
          { title: 'Blood Tests', href: '/blood-hormonal', image: blood, desc: 'Detailed assessment' },
          { title: 'Genetic Assessment', href: '/genetic-assessment', image: geneticAssesment, desc: 'Genetic profiling' },
        ],
      },
    },
  },

  results: {
    title: 'Results',
    hasDropdown: true,
    subMenus: {
      gallery: {
        name: 'Gallery',
        items: [
          { title: 'Before & After', href: '/results/before-after', image: smp1, desc: 'See transformations' },
        ],
      },
      testimonials: {
        name: 'Testimonials',
        items: [
          { title: 'Client Reviews', href: '/results/patient-testimonials', image: scalp, desc: 'What clients say' },
        ],
      },
    },
  },

  offers: { title: 'Offers', hasDropdown: false, href: '/offers' },
  careers: { title: 'Careers', hasDropdown: false, href: '/careers' },
  blog: { title: 'Blog', hasDropdown: false, href: '/blog' },
};

/* ═══════════════════════════════════════════════════════════
   SKIN NAVIGATION
═══════════════════════════════════════════════════════════ */
const skinNavigationItems: Record<string, NavigationItem> = {
  home: { title: 'Home', hasDropdown: false, href: '/skin-clinic' },
  about: { title: 'About', hasDropdown: false, href: '/skin/about-skin' },

  solutions: {
    title: 'Solutions',
    hasDropdown: true,
    subMenus: {
      concerns: {
        name: 'Skin Concerns',
        items: [
          { title: 'Acne Scar', href: '/skin/acne-scar', image: acneScarImg, desc: 'Targeted scar reduction' },
          { title: 'Pigmentation', href: '/skin/pigmentation', image: vampire, desc: 'Even skin tone correction' },
          { title: 'Dark Circles', href: '/skin/dark-circles', image: darkCirclesImg, desc: 'Under-eye brightening' },
          { title: 'Open Pores', href: '/skin/open-pores', image: openPoresImg, desc: 'Pore refinement therapy' },
          { title: 'Ageing Issues', href: '/skin/ageing-issues', image: ageingImg, desc: 'Anti-ageing solutions' },
          { title: 'Tanned Skin', href: '/skin/tanned-skin', image: tannedSkinImg, desc: 'De-tan & brightening' },
        ],
      },
      diagnosis: {
        name: 'Skin Diagnosis',
        items: [
          { title: 'Skin Analysis', href: '/skin/skin-analysis', image: skinanalysis, desc: 'Comprehensive skin profile' },
          { title: 'Dermoscopy', href: '/skin/dermoscopy', image: dermoscopySkin, desc: 'Advanced skin imaging' },
          { title: 'Patch Test', href: '/skin/patch-test', image: PatchTest, desc: 'Allergy & sensitivity testing' },
        ],
      },
    },
  },


  treatments: {
    title: 'Treatments',
    hasDropdown: true,
    subMenus: {
      facials: {
        name: 'Facial Treatments',
        items: [
          { title: 'Vampire Facial', href: '/skin/vampire-facial', image: vampire, desc: 'PRP-based skin rejuvenation' },
          { title: 'Hydrafacial', href: '/skin/hydrafacial', image: hydra, desc: 'Deep cleansing & hydration' },
          { title: 'Pumpkin Facial', href: '/skin/pumpkin-facial', image: pumpkin, desc: 'Vitamin-rich glow facial' },
          { title: 'Miracle Facial', href: '/skin/miracle-facial', image: miracle, desc: 'Deep rejuvenating radiance boost' },
          { title: 'MDA (Microdermabrasion)', href: '/skin/mda-microdermabrasion', image: MDA, desc: 'Gentle dead-cell exfoliation' },
          { title: 'MDA + Organic Peel', href: '/skin/mda-organic-peel', image: organicpeel, desc: 'Dual-action deep exfoliation' },
          { title: 'MDA + Rejuvenating', href: '/skin/mda-rejuvenating-therapy', image: rejuvenation, desc: 'Resurface & rejuvenate combo' },
        ],
      },
      antiAging: {
        name: 'Anti-Aging',
        items: [
          { title: 'Botox', href: '/skin/botox', image: botox, desc: 'Smooth dynamic wrinkles fast' },
          { title: 'Dermal Fillers', href: '/skin/dermal-fillers', image: dermafillers, desc: 'Restore lost facial volume' },
          { title: 'Thread Lift', href: '/skin/thread-lift', image: threadlift, desc: 'Non-surgical instant lift' },
          { title: 'HIFU', href: '/skin/hifu', image: HIFU, desc: 'Ultrasound skin tightening' },
          { title: 'EXO Glo Therapy', href: '/skin/exo-glo-therapy', image: exoglo, desc: 'Exosome cellular regeneration' },
        ],
      },
      lasers: {
        name: 'Laser Treatments',
        items: [
          { title: 'FCO2 Laser', href: '/skin/fco2-laser', image: fco2, desc: 'Fractional CO2 scar resurfacing' },
          { title: 'Q Switch Laser', href: '/skin/q-switch-laser', image: qswitch, desc: 'Pigmentation & tattoo removal' },
          { title: 'Photofacial', href: '/skin/photofacial', image: photofacial, desc: 'IPL sun-damage & redness therapy' },
          { title: 'Laser Hair Reduction', href: '/skin/laser-hair-reduction', image: laserhairreduction, desc: 'Permanent smooth hair-free skin' },
        ],
      },
      skinCare: {
        name: 'Skin Care & Peels',
        items: [
          { title: 'Chemical Peel', href: '/skin/chemical-peel', image: chemicalpeel, desc: 'Medical-grade exfoliation glow' },
          { title: 'Melanobreak Therapy', href: '/skin/melanobreak-therapy', image: melanobreak, desc: 'Stubborn melasma correction' },
          { title: 'Anti Acne Therapy', href: '/skin/anti-acne-therapy', image: antiacne, desc: 'Clear acne & fade scars' },
          { title: 'Microblading', href: '/skin/microblading', image: microblading, desc: 'Semi-permanent brow definition' },
        ],
      },
    },
  },
  offers: { title: 'Offers', hasDropdown: false, href: '/offers' },

  blog: { title: 'Blog', hasDropdown: false, href: '/blog' },

  careers: { title: 'Careers', hasDropdown: false, href: '/careers' },

  contact: { title: 'Contact', hasDropdown: false, href: '/contact' },
};

/* ═══════════════════════════════════════════════════════════
   NAVBAR COMPONENT
═══════════════════════════════════════════════════════════ */
export default function Navbar({ clinic }: NavbarProps) {
  const navigationItems =
    clinic === 'skin' ? skinNavigationItems : hairNavigationItems;
  const theme = themes[clinic || 'skin'];

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  /* scroll detection */
  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* mobile slide animation */
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (isMobileOpen) {
      gsap.fromTo(mobileMenuRef.current, { x: '100%' }, { x: 0, duration: 0.4, ease: 'power3.out' });
    } else {
      gsap.to(mobileMenuRef.current, { x: '100%', duration: 0.25, ease: 'power3.in' });
    }
  }, [isMobileOpen]);

  /* body scroll lock */
  useEffect(() => {
    const lock = isMobileOpen || activeMenu !== null;
    document.body.style.overflow = lock ? 'hidden' : 'unset';
    document.body.style.touchAction = lock ? 'none' : '';
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = '';
    };
  }, [isMobileOpen, activeMenu]);

  /* desktop hover handlers */
  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
    setActiveSubMenu(Object.keys(navigationItems[menu]?.subMenus || {})[0] || null);
    if (dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
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
    setActiveMobileMenu(activeMobileMenu === key ? null : key);
    setActiveMobileSubMenu(null);
  };
  const toggleMobileSubMenu = (subKey: string) =>
    setActiveMobileSubMenu(activeMobileSubMenu === subKey ? null : subKey);

  /* skin accent color for active states */
  const accentColor = clinic === 'skin' ? '#d4537e' : '#f4a00c';

  /* ────────────────────────────────────── */
  return (
    <>
      <EnquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => { console.log('Form submitted:', data); setIsModalOpen(false); }}
        treatment="General Consultation"
      />

      {/* ── Top contact bar (desktop) — toggle lives here ─── */}
      <div className={`hidden lg:block ${theme.topBarBg} border-b border-white/10 transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-2 text-[13px] text-primary-foreground/95">

            {/* Left: contact info */}
            <div className="flex items-center gap-6">
              <a href="tel:+918122229557" className="flex items-center gap-2 hover:text-white/80 transition-colors group">
                <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">+91 8122229557</span>
              </a>
              <a href="mailto:thegoldengemskinhairlaserclini@gmail.com" className="flex items-center gap-2 hover:text-white/80 transition-colors group">
                <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>thegoldengemskinhairlaserclini@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-3.5 h-3.5" />
                <span>
                  Mon–Sun: 10AM–8PM{' '}
                  <span className="text-red-300 font-semibold">(Tuesday Closed)</span>
                </span>
              </div>
            </div>

            {/* Right: toggle + socials */}
            <div className="flex items-center gap-5">
              {/* Clinic toggle — sits right in the top bar */}
              <ClinicToggle />

              <div className="w-px h-4 bg-white/20" />

              {/* Social icons */}
              <div className="flex items-center gap-1.5">
                {[
                  { Icon: Instagram, href: 'https://www.instagram.com/thegoldengemcosmetic/?hl=en' },
                  { Icon: Facebook, href: 'https://www.facebook.com/TheGoldenGemCosmeticclinic/' },
                  { Icon: Youtube, href: 'https://www.youtube.com/@TheGoldenGemCosmeticClinic/featured' },
                ].map(({ Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main navigation bar ───────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${clinic === 'skin'
          ? 'bg-[#fdf0f5]'
          : 'bg-background'
          } ${isScrolled ? 'shadow-lg border-b border-border' : 'border-b border-border/20'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-28 lg:h-32">

            {/* Logo */}
            <a href="/" className="flex items-center group">
              <div
                className="relative w-auto transition-all duration-300 group-hover:scale-[1.02]"
                style={{ height: '110px' }}
              >
                <img src={logo} alt="Golden Gem Cosmetic Clinic" className="h-full object-contain" />
              </div>
            </a>

            {/* ── Desktop nav ─────────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm">

              <a
                href={clinic === 'skin' ? '/skin-clinic' : '/'}
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${clinic === 'skin'
                  ? 'text-[#8b1a4a] hover:text-[#d4537e] hover:bg-pink-50'
                  : 'text-foreground hover:text-primary hover:bg-muted/50'
                  }`}
              >
                Home
              </a>

              {Object.entries(navigationItems).map(([key, menu]) => {
                if (key === 'home') return null;

                const linkCls = clinic === 'skin'
                  ? 'text-[#5a1030] hover:text-[#d4537e] hover:bg-pink-50'
                  : 'text-foreground hover:text-primary hover:bg-muted/50';

                if (!menu.hasDropdown) {
                  return (
                    <a
                      key={key}
                      href={menu.href}
                      className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${linkCls}`}
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
                    <button className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all group ${linkCls}`}>
                      {menu.title}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${activeMenu === key ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                );
              })}
            </nav>

            {/* ── Mega dropdown panel ─────────────────────────── */}
            {activeMenu && navigationItems[activeMenu]?.subMenus && (
              <div
                onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
                onMouseLeave={handleMouseLeave}
                className={`fixed left-0 right-0 shadow-2xl border-t border-b border-border z-40 ${clinic === 'skin' ? 'bg-[#fdf0f5]' : 'bg-card'
                  }`}
                style={{ top: '128px' }}
              >
                <div ref={dropdownRef} className="max-w-7xl mx-auto">
                  <div className="flex" style={{ height: 480 }}>

                    {/* Left panel */}
                    <div className={`w-1/5 border-r border-border overflow-y-auto flex-shrink-0 ${clinic === 'skin' ? 'bg-pink-100/60' : 'bg-muted/30'
                      }`}>
                      {Object.entries(navigationItems[activeMenu].subMenus!).map(([subKey, subMenu]) => (
                        <button
                          key={subKey}
                          onMouseEnter={() => setActiveSubMenu(subKey)}
                          className={`w-full text-left px-6 py-5 text-sm font-semibold transition-all border-l-4 ${activeSubMenu === subKey
                            ? clinic === 'skin'
                              ? 'bg-pink-100 border-[#d4537e] text-[#d4537e]'
                              : 'bg-primary/10 border-primary text-primary'
                            : clinic === 'skin'
                              ? 'border-transparent text-[#5a1030] hover:bg-pink-100/80 hover:text-[#d4537e]'
                              : 'border-transparent text-foreground hover:bg-muted/50 hover:text-primary'
                            }`}
                        >
                          {subMenu.name}
                        </button>
                      ))}
                    </div>

                    {/* Right panel */}
                    <div className={`w-4/5 p-8 overflow-y-auto ${clinic === 'skin' ? 'bg-[#fdf0f5]' : 'bg-card'
                      }`}>
                      {activeSubMenu && navigationItems[activeMenu].subMenus![activeSubMenu] && (
                        <>
                          <h3 className={`font-bold mb-6 text-lg border-b-2 pb-4 ${clinic === 'skin'
                            ? 'text-[#8b1a4a] border-[#d4537e]/30'
                            : 'text-foreground border-primary/20'
                            }`}>
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
                                <div className={`font-semibold text-sm transition-colors leading-tight ${clinic === 'skin'
                                  ? 'text-[#5a1030] group-hover:text-[#d4537e]'
                                  : 'text-foreground group-hover:text-primary'
                                  }`}>
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

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">

              {/* CTA Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className={`hidden lg:flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-xl transition-all hover:shadow-lg hover:scale-105 ${theme.ctaBtn} ${theme.ctaText}`}
              >
                <Calendar className="w-4 h-4" />
                Get Free Consultation
              </button>

              {/* Mobile: toggle + menu button */}
              <div className="lg:hidden flex items-center gap-2">
                {/* Pill toggle (mobile) — wrapped in a dark bg so it reads on white navbar */}
                <div className={`rounded-full px-0.5 py-0.5 ${clinic === 'skin' ? 'bg-[#8b1a4a]' : 'bg-foreground'}`}>
                  <ClinicToggle />
                </div>
                <button
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  className={`p-2.5 rounded-lg transition-colors ${clinic === 'skin'
                    ? 'bg-pink-100 hover:bg-pink-200 text-[#8b1a4a]'
                    : 'bg-muted/50 hover:bg-muted text-foreground'
                    }`}
                >
                  {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ────────────────────────────────────── */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* ── Mobile slide-in menu ──────────────────────────────── */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-96 z-50 overflow-y-auto lg:hidden transform ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 shadow-2xl ${clinic === 'skin' ? 'bg-[#fdf0f5]' : 'bg-background'
          }`}
      >
        {/* Mobile header */}
        <div className={`sticky top-0 border-b border-border px-4 sm:px-6 py-4 flex items-center justify-between z-10 ${clinic === 'skin' ? 'bg-[#fdf0f5]' : 'bg-background'
          }`}>
          <a href="/" className="flex items-center">
            <div style={{ height: '80px' }}>
              <img src={logo} alt="Golden Gem Clinic" className="h-full object-contain" />
            </div>
          </a>
          <button
            onClick={() => setIsMobileOpen(false)}
            className={`p-2 rounded-lg ${clinic === 'skin'
              ? 'bg-pink-100 hover:bg-pink-200 text-[#8b1a4a]'
              : 'bg-muted/50 hover:bg-muted text-foreground'
              }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile nav items */}
        <nav className="py-2">
          <a
            href={clinic === 'skin' ? '/skin-clinic' : '/'}
            className={`block px-4 sm:px-6 py-4 font-semibold hover:bg-pink-100/50 border-b border-border/50 ${clinic === 'skin' ? 'text-[#8b1a4a]' : 'text-foreground'
              }`}
            onClick={() => setIsMobileOpen(false)}
          >
            Home
          </a>

          {Object.entries(navigationItems).map(([key, menu]) => {
            if (key === 'home') return null;

            const mobileLinkCls = `block px-4 sm:px-6 py-4 font-semibold border-b border-border/50 ${clinic === 'skin'
              ? 'text-[#5a1030] hover:bg-pink-100/50'
              : 'text-foreground hover:bg-muted/50'
              }`;

            if (!menu.hasDropdown) {
              return (
                <a
                  key={key}
                  href={menu.href}
                  className={mobileLinkCls}
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
                  className={`flex justify-between items-center w-full px-4 sm:px-6 py-4 font-semibold ${clinic === 'skin'
                    ? 'text-[#5a1030] hover:bg-pink-100/50'
                    : 'text-foreground hover:bg-muted/50'
                    }`}
                >
                  {menu.title}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeMobileMenu === key ? 'rotate-180' : ''}`}
                  />
                </button>

                {activeMobileMenu === key && menu.subMenus && (
                  <div className={`border-l-4 ${clinic === 'skin' ? 'bg-pink-100/40 border-[#d4537e]' : 'bg-muted/30 border-primary'
                    }`}>
                    {Object.entries(menu.subMenus).map(([subKey, subMenu]) => (
                      <div key={subKey} className="border-b border-border/30">
                        <button
                          onClick={() => toggleMobileSubMenu(subKey)}
                          className={`flex justify-between items-center w-full px-4 sm:px-6 py-3 font-medium text-sm ${clinic === 'skin'
                            ? 'text-[#5a1030] hover:bg-pink-100/60'
                            : 'text-foreground hover:bg-muted/50'
                            }`}
                        >
                          {subMenu.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${activeMobileSubMenu === subKey ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {activeMobileSubMenu === subKey && (
                          <div className={`px-3 sm:px-4 py-3 space-y-3 ${clinic === 'skin' ? 'bg-[#fdf0f5]' : 'bg-card'
                            }`}>
                            {subMenu.items.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.href}
                                className={`block p-3 rounded-lg border border-border ${clinic === 'skin'
                                  ? 'hover:bg-pink-100/60'
                                  : 'hover:bg-muted/50'
                                  }`}
                                onClick={() => setIsMobileOpen(false)}
                              >
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-32 rounded-lg object-cover mb-2"
                                />
                                <div className={`font-semibold text-sm ${clinic === 'skin' ? 'text-[#5a1030]' : 'text-foreground'
                                  }`}>{item.title}</div>
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

          {/* Mobile CTA */}
          <div className="px-6 py-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className={`flex items-center justify-center w-full gap-2 px-6 py-4 font-semibold rounded-xl transition-all hover:shadow-lg ${theme.ctaBtn} ${theme.ctaText}`}
            >
              <Calendar className="w-4 h-4" />
              Get Free Consultation
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
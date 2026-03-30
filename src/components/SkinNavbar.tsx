import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, Clock, Instagram, Facebook, Youtube, Calendar } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import EnquiryForm from './EnquiryModal';
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
import vampire from '../assets/newlogo.jpg';
import botox from '../assets/newlogo.jpg';
import hydra from '../assets/newlogo.jpg';
import peel from '../assets/newlogo.jpg';
import laserImg from '../assets/newlogo.jpg';

/* ═══════════════════════════════════════════════════════════
   CLINIC TOGGLE
═══════════════════════════════════════════════════════════ */
function ClinicToggle({ mobile = false }: { mobile?: boolean }) {
    const navigate = useNavigate();
    const location = useLocation();
    const isSkin = location.pathname.startsWith('/skin');

    return (
        <div
            style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                /* ── Mobile: white bg so it's visible on any dark surface ── */
                background: mobile ? 'rgba(255,255,255,0.92)' : 'rgba(0,0,0,0.07)',
                border: mobile
                    ? '1px solid rgba(244,160,12,0.35)'
                    : '0.5px solid rgba(0,0,0,0.15)',
                borderRadius: '999px',
                padding: '3px',
                flexShrink: 0,
                /* subtle shadow on mobile so it stands out from header */
                boxShadow: mobile ? '0 1px 6px rgba(0,0,0,0.14)' : 'none',
            }}
        >
            {/* Animated amber pill */}
            <span
                style={{
                    position: 'absolute',
                    top: 3,
                    bottom: 3,
                    width: 'calc(50% - 3px)',
                    left: isSkin ? 'calc(50%)' : '3px',
                    borderRadius: '999px',
                    background: '#f4a00c',
                    transition: 'left 0.28s cubic-bezier(.4,0,.2,1)',
                    pointerEvents: 'none',
                }}
            />

            {/* Hair Clinic */}
            <button
                onClick={() => navigate('/')}
                style={{
                    position: 'relative',
                    zIndex: 1,
                    fontSize: mobile ? '11px' : '12px',
                    fontWeight: 700,
                    padding: mobile ? '5px 11px' : '5px 14px',
                    borderRadius: '999px',
                    border: 'none',
                    background: 'transparent',
                    /* Active = dark brown (readable on amber), inactive = mid-grey readable on white/light bg */
                    color: !isSkin ? '#3b1f02' : '#555',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.01em',
                }}
            >
                Hair Clinic
            </button>

            {/* Skin Clinic */}
            <button
                onClick={() => navigate('/skin-clinic')}
                style={{
                    position: 'relative',
                    zIndex: 1,
                    fontSize: mobile ? '11px' : '12px',
                    fontWeight: 700,
                    padding: mobile ? '5px 11px' : '5px 14px',
                    borderRadius: '999px',
                    border: 'none',
                    background: 'transparent',
                    color: isSkin ? '#3b1f02' : '#555',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.01em',
                }}
            >
                Skin Clinic
            </button>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════ */
interface NavbarProps {
    clinic: 'hair' | 'skin';
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
    about: { title: 'About', hasDropdown: false, href: '/about' },
    treatments: {
        title: 'Treatments',
        hasDropdown: true,
        subMenus: {
            facials: {
                name: 'Facial Treatments',
                items: [
                    { title: 'Vampire Facial', href: '/skin/vampire-facial', image: vampire, desc: 'PRP-based skin rejuvenation' },
                    { title: 'Hydrafacial', href: '/skin/hydrafacial', image: hydra, desc: 'Deep cleansing & hydration' },
                    { title: 'Pumpkin Facial', href: '/skin/pumpkin-facial', image: hydra, desc: 'Vitamin-rich glow facial' },
                    { title: 'Miracle Facial', href: '/skin/miracle-facial', image: hydra, desc: 'Deep rejuvenating radiance boost' },
                    { title: 'MDA (Microdermabrasion)', href: '/skin/mda-microdermabrasion', image: peel, desc: 'Gentle dead-cell exfoliation' },
                    { title: 'MDA + Organic Peel', href: '/skin/mda-organic-peel', image: peel, desc: 'Dual-action deep exfoliation' },
                    { title: 'MDA + Rejuvenating', href: '/skin/mda-rejuvenating-therapy', image: peel, desc: 'Resurface & rejuvenate combo' },
                ],
            },
            antiAging: {
                name: 'Anti-Aging',
                items: [
                    { title: 'Botox', href: '/skin/botox', image: botox, desc: 'Smooth dynamic wrinkles fast' },
                    { title: 'Dermal Fillers', href: '/skin/dermal-fillers', image: botox, desc: 'Restore lost facial volume' },
                    { title: 'Thread Lift', href: '/skin/thread-lift', image: botox, desc: 'Non-surgical instant lift' },
                    { title: 'HIFU', href: '/skin/hifu', image: botox, desc: 'Ultrasound skin tightening' },
                    { title: 'EXO Glo Therapy', href: '/skin/exo-glo-therapy', image: hydra, desc: 'Exosome cellular regeneration' },
                ],
            },
            lasers: {
                name: 'Laser Treatments',
                items: [
                    { title: 'FCO2 Laser', href: '/skin/fco2-laser', image: laserImg, desc: 'Fractional CO2 scar resurfacing' },
                    { title: 'Q Switch Laser', href: '/skin/q-switch-laser', image: laserImg, desc: 'Pigmentation & tattoo removal' },
                    { title: 'Photofacial', href: '/skin/photofacial', image: laserImg, desc: 'IPL sun-damage & redness therapy' },
                    { title: 'Laser Hair Reduction', href: '/skin/laser-hair-reduction', image: laserImg, desc: 'Permanent smooth hair-free skin' },
                ],
            },
            skinCare: {
                name: 'Skin Care & Peels',
                items: [
                    { title: 'Chemical Peel', href: '/skin/chemical-peel', image: peel, desc: 'Medical-grade exfoliation glow' },
                    { title: 'Melanobreak Therapy', href: '/skin/melanobreak-therapy', image: peel, desc: 'Stubborn melasma correction' },
                    { title: 'Anti Acne Therapy', href: '/skin/anti-acne-therapy', image: peel, desc: 'Clear acne & fade scars' },
                    { title: 'Microblading', href: '/skin/microblading', image: peel, desc: 'Semi-permanent brow definition' },
                ],
            },
        },
    },
    offers: { title: 'Offers', hasDropdown: false, href: '/offers' },
    blog: { title: 'Blog', hasDropdown: false, href: '/blog' },
    contact: { title: 'Contact', hasDropdown: false, href: '/contact' },
};

/* ═══════════════════════════════════════════════════════════
   NAVBAR COMPONENT
═══════════════════════════════════════════════════════════ */
export default function Navbar({ clinic }: NavbarProps) {
    const navigationItems =
        clinic === 'skin' ? skinNavigationItems : hairNavigationItems;

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

    useEffect(() => {
        const handler = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    useEffect(() => {
        if (!mobileMenuRef.current) return;
        if (isMobileOpen) {
            gsap.fromTo(mobileMenuRef.current, { x: '100%' }, { x: 0, duration: 0.4, ease: 'power3.out' });
        } else {
            gsap.to(mobileMenuRef.current, { x: '100%', duration: 0.25, ease: 'power3.in' });
        }
    }, [isMobileOpen]);

    useEffect(() => {
        const lock = isMobileOpen || activeMenu !== null;
        document.body.style.overflow = lock ? 'hidden' : 'unset';
        document.body.style.touchAction = lock ? 'none' : '';
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.touchAction = '';
        };
    }, [isMobileOpen, activeMenu]);

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

    return (
        <>
            <EnquiryForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={(data) => { console.log('Form submitted:', data); setIsModalOpen(false); }}
                treatment="General Consultation"
            />

            {/* ── Top contact bar ───────────────────────────────────── */}
            <div className="hidden lg:block bg-gradient-to-r from-foreground to-foreground/90 border-b border-border/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center py-2.5 text-[13px] text-primary-foreground/95">
                        <div className="flex items-center gap-8">
                            <a href="tel:+918122229557" className="flex items-center gap-2 hover:text-accent transition-colors group">
                                <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                                <span className="font-medium">+91 8122229557</span>
                            </a>
                            <a href="mailto:thegoldengemskinhairlaserclini@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors group">
                                <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                                <span>thegoldengemskinhairlaserclini@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-2 text-primary-foreground/70">
                                <Clock className="w-3.5 h-3.5" />
                                <span>
                                    Mon–Sun: 10AM–8PM{' '}
                                    <span className="text-red-500 font-semibold">(Tuesday Closed)</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-primary-foreground/60 text-xs font-medium">Follow Us:</span>
                            <div className="flex items-center gap-2">
                                {[
                                    { Icon: Instagram, href: 'https://www.instagram.com/thegoldengemcosmetic/?hl=en' },
                                    { Icon: Facebook, href: 'https://www.facebook.com/TheGoldenGemCosmeticclinic/' },
                                    { Icon: Youtube, href: 'https://www.youtube.com/@TheGoldenGemCosmeticClinic/featured' },
                                ].map(({ Icon, href }, idx) => (
                                    <a key={idx} href={href}
                                        className="w-7 h-7 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:scale-110 transition-all">
                                        <Icon className="w-3.5 h-3.5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main navigation bar ───────────────────────────────── */}
            <header className={`sticky top-0 z-50 transition-all duration-300 bg-background ${isScrolled ? 'shadow-lg border-b border-border' : 'border-b border-border/20'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center h-20 lg:h-24">

                        {/* ── Logo ─────────────────────────────────────────
                            Constrained height so it never overflows the bar.
                            object-contain keeps the full logo visible.
                        ── */}
                        <a href="/" className="flex items-center flex-shrink-0 group">
                            <img
                                src={logo}
                                alt="Golden Gem Cosmetic Clinic"
                                className="group-hover:scale-[1.02] transition-transform duration-300"
                                style={{
                                    /* 80px on mobile, 88px on desktop — fits neatly inside the bar */
                                    height: 'clamp(72px, 10vw, 88px)',
                                    width: 'auto',
                                    objectFit: 'contain',
                                    display: 'block',
                                }}
                            />
                        </a>

                        {/* ── Desktop nav ─────────────────────────────────── */}
                        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm">
                            <a
                                href={clinic === 'skin' ? '/skin-clinic' : '/'}
                                className="px-4 py-2.5 text-sm font-semibold text-foreground rounded-lg hover:text-primary hover:bg-muted/50 transition-all"
                            >
                                Home
                            </a>

                            {Object.entries(navigationItems).map(([key, menu]) => {
                                if (key === 'home') return null;

                                if (!menu.hasDropdown) {
                                    return (
                                        <a key={key} href={menu.href}
                                            className="px-4 py-2.5 text-sm font-semibold text-foreground rounded-lg hover:text-primary hover:bg-muted/50 transition-all">
                                            {menu.title}
                                        </a>
                                    );
                                }

                                return (
                                    <div key={key}
                                        onMouseEnter={() => handleMouseEnter(key)}
                                        onMouseLeave={handleMouseLeave}
                                        className="relative">
                                        <button className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-foreground rounded-lg hover:text-primary hover:bg-muted/50 transition-all group">
                                            {menu.title}
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === key ? 'rotate-180' : ''}`} />
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
                                className="fixed left-0 right-0 bg-card shadow-2xl border-t border-b border-border z-40"
                                style={{ top: '96px' }}
                            >
                                <div ref={dropdownRef} className="max-w-7xl mx-auto">
                                    <div className="flex" style={{ height: 480 }}>
                                        <div className="w-1/5 bg-muted/30 border-r border-border overflow-y-auto flex-shrink-0">
                                            {Object.entries(navigationItems[activeMenu].subMenus!).map(([subKey, subMenu]) => (
                                                <button key={subKey}
                                                    onMouseEnter={() => setActiveSubMenu(subKey)}
                                                    className={`w-full text-left px-6 py-5 text-sm font-semibold transition-all border-l-4 ${activeSubMenu === subKey
                                                        ? 'bg-primary/10 border-primary text-primary'
                                                        : 'border-transparent text-foreground hover:bg-muted/50 hover:text-primary'}`}>
                                                    {subMenu.name}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="w-4/5 bg-card p-8 overflow-y-auto">
                                            {activeSubMenu && navigationItems[activeMenu].subMenus![activeSubMenu] && (
                                                <>
                                                    <h3 className="font-bold text-foreground mb-6 text-lg border-b-2 border-primary/20 pb-4">
                                                        {navigationItems[activeMenu].subMenus![activeSubMenu].name}
                                                    </h3>
                                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                                        {navigationItems[activeMenu].subMenus![activeSubMenu].items.map((item, idx) => (
                                                            <a key={idx} href={item.href}
                                                                className="group block transition-all duration-300 hover:scale-[1.03]">
                                                                <div className="overflow-hidden rounded-xl mb-3 bg-muted/30 h-40 shadow-md group-hover:shadow-xl transition-all">
                                                                    <img src={item.image} alt={item.title}
                                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                                </div>
                                                                <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-tight">
                                                                    {item.title}
                                                                </div>
                                                                <div className="text-xs text-muted-foreground mt-1 leading-snug">{item.desc}</div>
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

                        {/* ── Right side: Toggle + CTA + Hamburger ──────── */}
                        <div className="flex items-center gap-3">

                            {/* Desktop toggle */}
                            <div className="hidden lg:flex items-center">
                                <ClinicToggle mobile={false} />
                            </div>

                            {/* Divider — desktop only */}
                            <div className="hidden lg:block w-px h-5 bg-border/40" />

                            {/* Book CTA — desktop only */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="hidden lg:flex items-center gap-2 px-6 py-3 font-semibold text-sm text-white bg-[#f4a00c] hover:shadow-lg hover:scale-105 rounded-xl transition-all"
                            >
                                <Calendar className="w-4 h-4" />
                                Get Free Consultation
                            </button>

                            {/* Mobile: toggle + hamburger side by side */}
                            <div className="lg:hidden flex items-center gap-2">
                                {/* Pass mobile=true so the toggle has a white background */}
                                <ClinicToggle mobile={true} />
                                <button
                                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                                    className="p-2.5 rounded-lg bg-muted/50 hover:bg-muted text-foreground transition-colors"
                                    aria-label="Toggle menu"
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
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsMobileOpen(false)} />
            )}

            {/* ── Mobile slide-in menu ──────────────────────────────── */}
            <div
                ref={mobileMenuRef}
                className={`fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-background z-50 overflow-y-auto lg:hidden transform ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 shadow-2xl`}
            >
                {/* Mobile menu header */}
                <div className="sticky top-0 bg-background border-b border-border px-4 sm:px-6 py-4 flex items-center justify-between z-10">
                    <a href="/" className="flex items-center flex-shrink-0">
                        <img
                            src={logo}
                            alt="Golden Gem Clinic"
                            style={{
                                height: '64px',
                                width: 'auto',
                                objectFit: 'contain',
                                display: 'block',
                            }}
                        />
                    </a>
                    <button onClick={() => setIsMobileOpen(false)}
                        className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-foreground"
                        aria-label="Close menu">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="py-2">
                    <a
                        href={clinic === 'skin' ? '/skin-clinic' : '/'}
                        className="block px-4 sm:px-6 py-4 text-foreground font-semibold hover:bg-muted/50 border-b border-border/50"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Home
                    </a>

                    {Object.entries(navigationItems).map(([key, menu]) => {
                        if (key === 'home') return null;

                        if (!menu.hasDropdown) {
                            return (
                                <a key={key} href={menu.href}
                                    className="block px-4 sm:px-6 py-4 text-foreground font-semibold hover:bg-muted/50 border-b border-border/50"
                                    onClick={() => setIsMobileOpen(false)}>
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
                                                            <a key={idx} href={item.href}
                                                                className="block p-3 rounded-lg hover:bg-muted/50 border border-border"
                                                                onClick={() => setIsMobileOpen(false)}>
                                                                <img src={item.image} alt={item.title}
                                                                    className="w-full h-32 rounded-lg object-cover mb-2" />
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

                    {/* Mobile CTA */}
                    <div className="px-6 py-6">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center justify-center w-full gap-2 px-6 py-4 font-semibold text-primary-foreground bg-[#f4a00c] hover:shadow-lg rounded-xl transition-all"
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
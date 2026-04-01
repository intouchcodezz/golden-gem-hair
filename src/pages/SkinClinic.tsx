import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import EnquiryForm from '../components/EnquiryModal';
import { skinTreatments } from '../data/skinTreatments';
import {
  Droplets,
  Sparkles,
  Zap,
  Crosshair,
  Sun,
  Waves,
  Lightbulb,
  Layers,
  Pen,
  Circle,
  Shield,
  FlaskConical,
  Leaf,
  Star,
  ShieldCheck,
  RefreshCw,
  Calendar,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  Clock,
  Heart,
} from 'lucide-react';

import doctorImg from '../assets/doctor.jpg';

const STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap');

  :root {
    --rose:        #d4607a;
    --rose-light:  #e8899a;
    --rose-deep:   #b04560;
    --rose-pale:   rgba(212,96,122,0.08);
    --rose-pale2:  rgba(212,96,122,0.14);
    --rose-bdr:    rgba(212,96,122,0.22);
    --blush:       #fdf2f5;
    --blush-2:     #f7dfe8;
    --mauve:       #7a2d40;
    --ink:         #1a0d11;
    --ink-2:       #3a1825;
    --cream:       #fff9fb;
    --white:       #ffffff;
    --text-muted:  rgba(26,13,17,0.60);
    --text-body:   rgba(26,13,17,0.80);
    --shadow-sm:   0 2px 12px rgba(212,96,122,0.08);
    --shadow-md:   0 8px 32px rgba(212,96,122,0.14);
    --shadow-lg:   0 20px 56px rgba(212,96,122,0.18);
  }

  .sc-wrap * { box-sizing: border-box; }
  .sc-wrap a { text-decoration: none; }
  .sc-display { font-family: 'Playfair Display', serif; }
  .sc-body { font-family: 'DM Sans', sans-serif; }

  @keyframes sc-shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .sc-shimmer-text {
    background: linear-gradient(90deg, var(--rose-deep) 0%, var(--rose-light) 42%, var(--rose-deep) 80%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: sc-shimmer 4s linear infinite;
  }

  @keyframes sc-fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes sc-slideIn {
    from { opacity: 0; transform: translateX(60px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes sc-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }
  @keyframes sc-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(212,96,122,0.5); }
    50% { box-shadow: 0 0 0 15px rgba(212,96,122,0); }
  }

  .sc-fade-in { animation: sc-fadeIn 0.8s ease both; }
  .sc-slide-in { animation: sc-slideIn 0.8s ease both; }
  .sc-float { animation: sc-float 6s ease-in-out infinite; }

  .sc-btn-rose {
    background: linear-gradient(135deg, var(--rose) 0%, var(--rose-deep) 100%);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 15px 30px;
    border-radius: 12px;
  }
  .sc-btn-rose:hover {
    background: linear-gradient(135deg, var(--rose-light) 0%, var(--rose) 100%);
    box-shadow: 0 10px 30px rgba(212,96,122,0.40);
    transform: translateY(-2px);
  }

  .sc-btn-outline {
    background: transparent;
    border: 2px solid var(--rose);
    color: var(--rose-deep);
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 28px;
    border-radius: 12px;
  }
  .sc-btn-outline:hover {
    background: var(--rose);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(212,96,122,0.30);
  }

  .sc-slider {
    position: relative;
    overflow: hidden;
    border-radius: 0;
  }
  .sc-slider-track {
    display: flex;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .sc-slider-slide {
    min-width: 100%;
    flex-shrink: 0;
  }
  .sc-slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.95);
    border: 1px solid var(--rose-bdr);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
  }
  .sc-slider-nav:hover {
    background: var(--rose);
    border-color: var(--rose);
    box-shadow: 0 8px 24px rgba(212,96,122,0.35);
  }
  .sc-slider-nav:hover svg {
    color: #fff;
  }
  .sc-slider-nav.left { left: 32px; }
  .sc-slider-nav.right { right: 32px; }
  .sc-slider-dots {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 10;
  }
  .sc-slider-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    border: 2px solid rgba(255,255,255,0.8);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .sc-slider-dot.active {
    background: var(--rose);
    border-color: var(--rose);
    transform: scale(1.3);
  }

  .sc-treatment-card {
    background: var(--white);
    border: 1px solid rgba(212,96,122,0.12);
    border-radius: 18px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .sc-treatment-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--rose), var(--rose-deep));
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  .sc-treatment-card:hover {
    border-color: var(--rose);
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(212,96,122,0.20);
  }
  .sc-treatment-card:hover::before {
    transform: scaleX(1);
  }

  .sc-section-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.20em;
    text-transform: uppercase;
    color: var(--rose);
  }

  .sc-stat-box {
    text-align: center;
    padding: 28px 20px;
    background: var(--white);
    border-radius: 16px;
    border: 1px solid rgba(212,96,122,0.10);
    transition: all 0.3s ease;
  }
  .sc-stat-box:hover {
    border-color: var(--rose);
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }

  .sc-testi-card {
    background: var(--white);
    border: 1px solid var(--rose-bdr);
    border-radius: 20px;
    padding: 32px 28px;
    position: relative;
    transition: all 0.3s ease;
  }
  .sc-testi-card::before {
    content: '"';
    position: absolute;
    right: 24px;
    top: 16px;
    font-family: 'Playfair Display', serif;
    font-size: 7rem;
    color: rgba(212,96,122,0.06);
    line-height: 1;
  }
  .sc-testi-card:hover {
    border-color: var(--rose);
    box-shadow: var(--shadow-lg);
    transform: translateY(-6px);
  }

  @media (max-width: 1024px) {
    .sc-slider-nav { width: 48px; height: 48px; }
    .sc-slider-nav.left { left: 20px; }
    .sc-slider-nav.right { right: 20px; }
  }

  @media (max-width: 768px) {
    .sc-slider-nav { width: 42px; height: 42px; }
    .sc-slider-nav.left { left: 12px; }
    .sc-slider-nav.right { right: 12px; }
    .sc-slider-dots { bottom: 20px; }
    .sc-btn-rose, .sc-btn-outline { font-size: 0.78rem; padding: 12px 22px; }
  }
`;

const HERO_SLIDES = [
  {
    title: 'Transform Your Skin',
    subtitle: 'Advanced Dermatology & Aesthetic Treatments',
    description: 'Experience premium skin care with FDA-approved technologies and certified dermatologists. Your journey to radiant, healthy skin starts here.',
    cta: 'Book Consultation',
    bg: 'linear-gradient(135deg, rgba(212,96,122,0.15) 0%, rgba(212,96,122,0.05) 100%), radial-gradient(ellipse at 70% 40%, rgba(212,96,122,0.12), transparent 70%)',
  },
  {
    title: 'Expert Care You Deserve',
    subtitle: '15+ Years of Dermatology Excellence',
    description: 'Our board-certified dermatologists combine medical expertise with artistic precision to deliver natural, long-lasting results tailored to your unique skin.',
    cta: 'Explore Treatments',
    bg: 'linear-gradient(135deg, rgba(180,69,96,0.15) 0%, rgba(180,69,96,0.05) 100%), radial-gradient(ellipse at 30% 60%, rgba(180,69,96,0.12), transparent 70%)',
  },
  {
    title: 'Clinically Proven Results',
    subtitle: '10,000+ Happy Clients & 98% Satisfaction',
    description: 'Join thousands who have trusted us with their skin transformation. Safe, effective treatments with visible results that speak for themselves.',
    cta: 'View Success Stories',
    bg: 'linear-gradient(135deg, rgba(232,137,154,0.15) 0%, rgba(232,137,154,0.05) 100%), radial-gradient(ellipse at 50% 50%, rgba(232,137,154,0.12), transparent 70%)',
  },
];

const iconMap: Record<string, React.ElementType> = {
  Droplets, Sparkles, Zap, Crosshair, Sun, Waves, Lightbulb,
  Layers, Pen, Circle, Shield, FlaskConical, Leaf, Star,
  ShieldCheck, RefreshCw, SunMedium: Sun, Citrus: Leaf,
};
const getIcon = (name: string): React.ElementType => iconMap[name] || Sparkles;

const STATS = [
  { icon: Users, value: '10,000+', label: 'Happy Clients Treated' },
  { icon: Award, value: '15+', label: 'Years of Excellence' },
  { icon: Star, value: '25+', label: 'Advanced Treatments' },
  { icon: Heart, value: '98%', label: 'Client Satisfaction' },
];

const TESTIMONIALS = [
  {
    name: 'Priya Ramesh',
    initials: 'PR',
    treatment: 'HydraFacial Treatment',
    quote: 'My skin has never looked this radiant and healthy. The team at Golden Gem is absolutely exceptional — professional, warm, caring and genuinely skilled. Every visit feels like a luxury spa experience combined with medical precision.',
    rating: 5,
  },
  {
    name: 'Ananya Krishnan',
    initials: 'AK',
    treatment: 'Laser Skin Rejuvenation',
    quote: 'After years of struggling with stubborn pigmentation and uneven skin tone, just three sessions gave me visible, dramatic results. I finally feel confident going makeup-free. The doctors really understand Indian skin!',
    rating: 5,
  },
  {
    name: 'Meera Subramaniam',
    initials: 'MS',
    treatment: 'RF Skin Tightening',
    quote: 'The results are nothing short of remarkable. My skin feels noticeably firmer, more lifted and youthful than it has in years. The entire process was comfortable and the staff made me feel safe throughout. Absolutely worth every penny.',
    rating: 5,
  },
];

const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: 'Certified Dermatologists',
    desc: 'Board-certified specialists with extensive experience in medical and cosmetic dermatology.',
  },
  {
    icon: Award,
    title: 'FDA-Approved Technology',
    desc: 'State-of-the-art equipment and proven treatment protocols for safe, effective results.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    desc: 'Every treatment is customized to your unique skin type, concerns and aesthetic goals.',
  },
  {
    icon: Star,
    title: 'Proven Track Record',
    desc: '10,000+ successful treatments with 98% client satisfaction and visible results.',
  },
  {
    icon: Clock,
    title: 'Minimal Downtime',
    desc: 'Advanced techniques designed to fit your lifestyle with quick recovery periods.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Highest hygiene standards and comprehensive pre-treatment consultations.',
  },
];

const SkinClinicStandalone: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('Skin Consultation');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  const openModal = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    setModalOpen(true);
  };

  return (
    <div className="sc-wrap min-h-screen bg-background flex flex-col">
      <style>{STYLE}</style>

      <SEO
        title="Golden Gem Skin Clinic | Advanced Skin Treatments Chennai"
        description="Advanced dermatology treatments including laser therapy, anti-aging treatments, facials and skin rejuvenation at The Golden Gem Cosmetic Clinic."
        canonical="https://thegoldengemhairclinic.com/skin-clinic"
      />

      <EnquiryForm
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={() => setModalOpen(false)}
        treatment={selectedTreatment}
      />

      <main className="flex-grow">
        {/* HERO SLIDER */}
        <section className="sc-slider" style={{ minHeight: '90vh', position: 'relative' }}>
          <div className="sc-slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={index}
                className="sc-slider-slide"
                style={{
                  minHeight: '90vh',
                  display: 'flex',
                  alignItems: 'center',
                  background: slide.bg,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative circles */}
                <div style={{
                  position: 'absolute',
                  right: '-8%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 600,
                  height: 600,
                  borderRadius: '50%',
                  border: '1px solid rgba(212,96,122,0.10)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute',
                  right: '-5%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 480,
                  height: 480,
                  borderRadius: '50%',
                  border: '1px solid rgba(212,96,122,0.12)',
                  pointerEvents: 'none',
                }} />

                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', width: '100%', zIndex: 1, position: 'relative' }}>
                  <div style={{ maxWidth: 720 }}>
                    <div className="sc-fade-in" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 28,
                      padding: '8px 20px',
                      border: '1px solid var(--rose-bdr)',
                      borderRadius: 100,
                      background: 'rgba(255,255,255,0.9)',
                    }}>
                      <div style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: 'var(--rose)',
                        animation: 'sc-pulse 2s infinite',
                      }} />
                      <span className="sc-section-label" style={{ fontSize: '0.72rem' }}>
                        {slide.subtitle}
                      </span>
                    </div>

                    <h1 className="sc-display sc-slide-in" style={{
                      fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: 'var(--ink)',
                      marginBottom: 22,
                    }}>
                      {slide.title.split(' ').map((word, i) => (
                        <span key={i}>
                          {i === slide.title.split(' ').length - 1 ? (
                            <span className="sc-shimmer-text">{word}</span>
                          ) : (
                            `${word} `
                          )}
                        </span>
                      ))}
                    </h1>

                    <p className="sc-body sc-fade-in" style={{
                      fontSize: '1rem',
                      lineHeight: 1.8,
                      color: 'var(--text-body)',
                      marginBottom: 40,
                      maxWidth: 580,
                      fontWeight: 400,
                    }}>
                      {slide.description}
                    </p>

                    <div className="sc-fade-in" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                      <button onClick={() => openModal('Skin Consultation')} className="sc-btn-rose">
                        <Calendar size={16} /> {slide.cta}
                      </button>
                      <a href="tel:+918122229557" className="sc-btn-outline">
                        <Phone size={16} /> Call Us Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button className="sc-slider-nav left" onClick={prevSlide} aria-label="Previous slide">
            <ChevronLeft size={22} color="#d4607a" />
          </button>
          <button className="sc-slider-nav right" onClick={nextSlide} aria-label="Next slide">
            <ChevronRight size={22} color="#d4607a" />
          </button>

          {/* Dots */}
          <div className="sc-slider-dots">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                className={`sc-slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* STATS BAR */}
        <section style={{
          background: 'var(--white)',
          borderTop: '1px solid var(--rose-bdr)',
          borderBottom: '1px solid var(--rose-bdr)',
          padding: '48px 48px',
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 28,
            }}>
              {STATS.map((stat) => (
                <div key={stat.label} className="sc-stat-box">
                  <stat.icon size={34} color="#d4607a" style={{ marginBottom: 16 }} />
                  <div className="sc-display sc-shimmer-text" style={{
                    fontSize: '2.2rem',
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: 10,
                  }}>
                    {stat.value}
                  </div>
                  <div className="sc-body" style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section style={{ padding: '100px 48px', background: 'var(--cream)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
              alignItems: 'center',
            }}>
              {/* Image */}
              <div style={{ position: 'relative' }}>
                <img
                  src={doctorImg}
                  alt="Expert Dermatologist"
                  style={{
                    width: '100%',
                    borderRadius: 24,
                    objectFit: 'cover',
                    boxShadow: '0 30px 60px rgba(212,96,122,0.15)',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: -36,
                  left: 36,
                  background: 'linear-gradient(135deg, var(--rose), var(--rose-deep))',
                  padding: '22px 28px',
                  borderRadius: 18,
                  boxShadow: '0 15px 40px rgba(212,96,122,0.30)',
                }}>
                  <div className="sc-display" style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: 6,
                  }}>
                    15+
                  </div>
                  <div className="sc-body" style={{
                    fontSize: '0.8rem',
                    letterSpacing: '0.10em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.9)',
                    fontWeight: 600,
                  }}>
                    Years Experience
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="sc-section-label" style={{ marginBottom: 20, display: 'block' }}>
                  About Golden Gem
                </span>

                <h2 className="sc-display" style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  marginBottom: 22,
                  color: 'var(--ink)',
                }}>
                  Expert Skin Care Backed by<br />
                  <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Medical Excellence</em>
                </h2>

                <div style={{
                  width: 70,
                  height: 3,
                  background: 'linear-gradient(90deg, var(--rose), var(--rose-deep))',
                  marginBottom: 26,
                  borderRadius: 3,
                }} />

                <p className="sc-body" style={{
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  color: 'var(--text-body)',
                  marginBottom: 18,
                  fontWeight: 400,
                }}>
                  At The Golden Gem Cosmetic Clinic, we combine <strong>advanced dermatology</strong> with
                  aesthetic precision to deliver safe, effective, and long-lasting skin treatments.
                </p>

                <p className="sc-body" style={{
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  color: 'var(--text-body)',
                  marginBottom: 30,
                  fontWeight: 400,
                }}>
                  Every treatment is <strong>tailored to your unique skin type</strong>, guided by certified
                  dermatologists using <strong>FDA-approved technologies</strong> for visible and natural results.
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                  marginBottom: 36,
                }}>
                  {[
                    'Board-Certified Dermatologists',
                    'Medically Approved Procedures',
                    'Advanced Laser & RF Technology',
                    'Personalized Treatment Plans',
                  ].map((item) => (
                    <div key={item} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '10px 0',
                    }}>
                      <CheckCircle size={20} color="#d4607a" style={{ flexShrink: 0 }} />
                      <span className="sc-body" style={{
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        color: 'var(--ink)',
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <button onClick={() => openModal('Skin Consultation')} className="sc-btn-rose">
                  <Calendar size={16} /> Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section style={{
          padding: '100px 48px',
          background: 'linear-gradient(170deg, var(--blush) 0%, #f9e4ec 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,96,122,0.10) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span className="sc-section-label" style={{ marginBottom: 16, display: 'block' }}>
                Why Choose Us
              </span>
              <h2 className="sc-display" style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 600,
                color: 'var(--ink)',
                lineHeight: 1.2,
                marginBottom: 18,
              }}>
                The Golden Gem <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Difference</em>
              </h2>
              <p className="sc-body" style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                maxWidth: 600,
                margin: '0 auto',
                lineHeight: 1.8,
              }}>
                Trusted by thousands for our expertise, technology, and personalized approach to skin care
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 28,
            }}>
              {WHY_CHOOSE.map((item) => (
                <div key={item.title} style={{
                  background: 'var(--white)',
                  border: '1px solid rgba(212,96,122,0.12)',
                  borderRadius: 20,
                  padding: '32px 28px',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--rose)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(212,96,122,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212,96,122,0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: 'var(--rose-pale)',
                    border: '1px solid rgba(212,96,122,0.16)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                    <item.icon size={26} color="#d4607a" />
                  </div>

                  <h3 className="sc-display" style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: 12,
                  }}>
                    {item.title}
                  </h3>

                  <p className="sc-body" style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    color: 'var(--text-body)',
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TREATMENTS */}
        <section
          style={{
            padding: "110px 48px 100px",
            position: "relative",
            overflow: "hidden",
            background: `
      linear-gradient(135deg, #fffaf5 0%, #fff0eb 60%, #fff5f0 100%),
      radial-gradient(circle at 25% 30%, rgba(212, 96, 122, 0.09) 0%, transparent 55%),
      radial-gradient(circle at 75% 70%, rgba(212, 96, 122, 0.07) 0%, transparent 60%)
    `,
            backgroundSize: "cover",
          }}
        >
          {/* Subtle decorative background pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
        radial-gradient(circle at 30% 40%, rgba(212, 96, 122, 0.06) 1px, transparent 1px),
        radial-gradient(circle at 70% 60%, rgba(212, 96, 122, 0.05) 1px, transparent 1px),
        linear-gradient(45deg, transparent 48%, rgba(212, 96, 122, 0.04) 50%, transparent 52%)
      `,
              backgroundSize: "80px 80px, 120px 120px, 200px 200px",
              opacity: 0.65,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Soft floating glow elements */}
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "8%",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,96,122,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
              zIndex: 1,
              animation: "floatSlow 25s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              right: "10%",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,96,122,0.09) 0%, transparent 70%)",
              filter: "blur(45px)",
              zIndex: 1,
              animation: "floatSlow 32s ease-in-out infinite reverse",
            }}
          />

          <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 2 }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span
                className="sc-section-label"
                style={{
                  marginBottom: 16,
                  display: "block",
                }}
              >
                Our Treatments
              </span>

              <h2
                className="sc-display"
                style={{
                  fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
                  fontWeight: 600,
                  color: "var(--ink)",
                  lineHeight: 1.15,
                  marginBottom: 20,
                }}
              >
                Signature Skin{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--rose)",
                    position: "relative",
                  }}
                >
                  Treatments
                </em>
              </h2>

              <p
                className="sc-body"
                style={{
                  fontSize: "1rem",
                  color: "var(--text-muted)",
                  maxWidth: 640,
                  margin: "0 auto",
                  lineHeight: 1.75,
                }}
              >
                Advanced, medically approved treatments crafted for every skin concern
              </p>
            </div>

            {/* Treatments Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 28,
              }}
            >
              {skinTreatments.map((treatment) => {
                const IconComponent = getIcon(treatment.icon);
                return (
                  <div
                    key={treatment.slug}
                    className="sc-treatment-card"
                    style={{
                      background: "#fff",
                      borderRadius: "22px",
                      overflow: "hidden",
                      boxShadow: "0 10px 40px rgba(212, 96, 122, 0.08)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "1px solid rgba(212,96,122,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-12px)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 50px rgba(212, 96, 122, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 40px rgba(212, 96, 122, 0.08)";
                    }}
                  >
                    <div
                      style={{
                        padding: "36px 28px",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 16,
                          background: "var(--rose-pale)",
                          border: "1px solid rgba(212,96,122,0.22)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 26,
                          boxShadow: "0 4px 15px rgba(212,96,122,0.12)",
                        }}
                      >
                        <IconComponent size={28} color="#d4607a" />
                      </div>

                      {/* Title */}
                      <h3
                        className="sc-display"
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          color: "var(--ink)",
                          marginBottom: 14,
                          lineHeight: 1.3,
                        }}
                      >
                        {treatment.name}
                      </h3>

                      {/* Description */}
                      <p
                        className="sc-body"
                        style={{
                          fontSize: "0.95rem",
                          color: "var(--text-body)",
                          lineHeight: 1.75,
                          marginBottom: 28,
                          flex: 1,
                        }}
                      >
                        {treatment.description}
                      </p>

                      {/* Buttons */}
                      <div style={{ display: "flex", gap: 12 }}>
                        <Link
                          to={`/skin/${treatment.slug}`}
                          className="sc-btn-outline"
                          style={{
                            flex: 1,
                            padding: "12px 20px",
                            fontSize: "0.85rem",
                            borderRadius: "10px",
                          }}
                        >
                          Learn More
                        </Link>
                        <button
                          onClick={() => openModal(treatment.name)}
                          className="sc-btn-rose"
                          style={{
                            flex: 1,
                            padding: "12px 20px",
                            fontSize: "0.85rem",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 7,
                          }}
                        >
                          <Calendar size={15} /> Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Consultation CTA */}
            <div style={{ textAlign: "center", marginTop: 64 }}>
              <p
                className="sc-body"
                style={{
                  fontSize: "0.98rem",
                  color: "var(--text-muted)",
                  marginBottom: 24,
                }}
              >
                Not sure which treatment is right for you?
              </p>
              <button
                onClick={() => openModal("Skin Consultation")}
                className="sc-btn-rose"
                style={{
                  padding: "14px 38px",
                  fontSize: "0.92rem",
                  borderRadius: "12px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  boxShadow: "0 8px 25px rgba(212, 96, 122, 0.25)",
                }}
              >
                <Calendar size={17} /> Get Free Skin Consultation
              </button>
            </div>
          </div>

          <style>{`
    @keyframes floatSlow {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(25px, -25px) rotate(3deg); }
    }
  `}</style>
        </section>

        {/* TESTIMONIALS */}
        <section style={{
          padding: '100px 48px',
          background: 'linear-gradient(170deg, #fff9fb 0%, var(--blush) 100%)',
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span className="sc-section-label" style={{ marginBottom: 16, display: 'block' }}>
                Client Stories
              </span>
              <h2 className="sc-display" style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 600,
                color: 'var(--ink)',
                lineHeight: 1.2,
                marginBottom: 18,
              }}>
                Transformations That <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Speak</em>
              </h2>
              <p className="sc-body" style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                maxWidth: 600,
                margin: '0 auto',
                lineHeight: 1.8,
              }}>
                Real results from real clients who trusted us with their skin
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 28,
            }}>
              {TESTIMONIALS.map((testi) => (
                <div key={testi.name} className="sc-testi-card">
                  <div style={{ display: 'flex', gap: 5, marginBottom: 20 }}>
                    {Array.from({ length: testi.rating }).map((_, i) => (
                      <Star key={i} size={16} color="#d4607a" fill="#d4607a" />
                    ))}
                  </div>

                  <p className="sc-display" style={{
                    fontSize: '1.05rem',
                    fontStyle: 'italic',
                    color: 'var(--text-body)',
                    lineHeight: 1.8,
                    marginBottom: 26,
                    fontWeight: 400,
                  }}>
                    "{testi.quote}"
                  </p>

                  <div style={{
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, var(--rose-bdr), transparent)',
                    marginBottom: 20,
                  }} />

                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 46,
                      height: 46,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--rose), var(--rose-deep))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <span className="sc-body" style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#fff',
                      }}>
                        {testi.initials}
                      </span>
                    </div>

                    <div>
                      <div className="sc-body" style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        marginBottom: 3,
                      }}>
                        {testi.name}
                      </div>
                      <div className="sc-body" style={{
                        fontSize: '0.82rem',
                        color: 'var(--rose)',
                        fontWeight: 500,
                      }}>
                        {testi.treatment}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section style={{ padding: '100px 48px', background: 'var(--cream)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(212,96,122,0.12) 0%, rgba(212,96,122,0.04) 100%)',
              border: '2px solid var(--rose-bdr)',
              borderRadius: 28,
              padding: '70px 52px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,96,122,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="sc-section-label" style={{ marginBottom: 20, display: 'block' }}>
                  Ready to Begin?
                </span>

                <h2 className="sc-display" style={{
                  fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  lineHeight: 1.2,
                  marginBottom: 22,
                }}>
                  Your Skin Transformation<br />
                  <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Starts Here</em>
                </h2>

                <p className="sc-body" style={{
                  fontSize: '1rem',
                  color: 'var(--text-body)',
                  maxWidth: 580,
                  margin: '0 auto 40px',
                  lineHeight: 1.8,
                }}>
                  Book a complimentary consultation with our expert dermatologists and discover the
                  personalized treatment plan designed just for you.
                </p>

                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={() => openModal('Skin Consultation')} className="sc-btn-rose" style={{
                    padding: '16px 38px',
                    fontSize: '0.92rem',
                    boxShadow: '0 10px 30px rgba(212,96,122,0.35)',
                  }}>
                    <Calendar size={17} /> Book Free Consultation
                  </button>
                  <a href="tel:+918122229557" className="sc-btn-outline" style={{
                    padding: '14px 36px',
                    fontSize: '0.92rem',
                  }}>
                    <Phone size={17} /> Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SkinClinicStandalone;
export { SkinClinicStandalone as SkinClinicContent };
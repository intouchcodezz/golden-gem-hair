import React, { useState } from 'react';
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
} from 'lucide-react';

const STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

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
    --text-muted:  rgba(26,13,17,0.50);
    --text-body:   rgba(26,13,17,0.76);
    --shadow-sm:   0 2px 12px rgba(212,96,122,0.08);
    --shadow-md:   0 8px 32px rgba(212,96,122,0.14);
    --shadow-lg:   0 20px 56px rgba(212,96,122,0.18);
    --radius-sm:   8px;
    --radius-md:   14px;
    --radius-lg:   20px;
    --radius-xl:   28px;
  }

  .gg-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .gg-wrap a { text-decoration: none; }

  /* ── Fonts ── */
  .gg-display { font-family: 'Playfair Display', serif; }
  .gg-body    { font-family: 'DM Sans', sans-serif; }

  /* ── Shimmer text ── */
  @keyframes gg-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  .gg-shimmer-text {
    background: linear-gradient(90deg, var(--rose-deep) 0%, var(--rose-light) 42%, var(--rose-deep) 80%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gg-shimmer 4s linear infinite;
  }

  /* ── Keyframes ── */
  @keyframes gg-fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes gg-float {
    0%, 100% { transform: translateY(0px); }
    50%      { transform: translateY(-10px); }
  }
  @keyframes gg-pulse-rose {
    0%, 100% { box-shadow: 0 0 0 0 rgba(212,96,122,0.45); }
    50%      { box-shadow: 0 0 0 14px rgba(212,96,122,0); }
  }
  @keyframes gg-rotate {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes gg-marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes gg-card-glow {
    0%, 100% { opacity: 0; }
    50%      { opacity: 1; }
  }

  .gg-fade-up   { animation: gg-fadeUp 0.75s ease both; }
  .gg-fade-up-1 { animation: gg-fadeUp 0.75s 0.12s ease both; }
  .gg-fade-up-2 { animation: gg-fadeUp 0.75s 0.24s ease both; }
  .gg-fade-up-3 { animation: gg-fadeUp 0.75s 0.36s ease both; }
  .gg-fade-up-4 { animation: gg-fadeUp 0.75s 0.48s ease both; }
  .gg-float     { animation: gg-float 5s ease-in-out infinite; }
  .gg-float-2   { animation: gg-float 7s ease-in-out 1.2s infinite; }
  .gg-rotate    { animation: gg-rotate 38s linear infinite; }

  /* ── Divider line ── */
  .gg-line {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--rose-bdr), transparent);
  }

  /* ── Ticker ── */
  .gg-ticker-inner { animation: gg-marquee 26s linear infinite; display: flex; width: max-content; }

  /* ── Buttons ── */
  .gg-btn-rose {
    background: linear-gradient(135deg, var(--rose) 0%, var(--rose-deep) 100%);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 0.72rem;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .gg-btn-rose:hover {
    background: linear-gradient(135deg, var(--rose-light) 0%, var(--rose) 100%);
    box-shadow: 0 8px 28px rgba(212,96,122,0.40);
    transform: translateY(-2px);
  }
  .gg-btn-outline {
    background: transparent;
    border: 1px solid var(--rose-bdr);
    color: var(--rose-deep);
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 0.72rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  .gg-btn-outline:hover {
    background: var(--rose-pale2);
    border-color: var(--rose);
    color: var(--rose-deep);
    transform: translateY(-1px);
  }

  /* ── Section label ── */
  .gg-section-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--rose);
  }

  /* ── Stat ── */
  .gg-stat {
    border-right: 1px solid var(--rose-bdr);
    text-align: center;
    padding: 28px 16px;
  }
  .gg-stat:last-child { border-right: none; }

  /* ── TREATMENT CARD ── */
  .gg-card {
    background: var(--white);
    border: 1px solid rgba(212,96,122,0.10);
    border-radius: var(--radius-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.35s cubic-bezier(0.22,1,0.36,1);
    position: relative;
    cursor: default;
  }
  .gg-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--radius-lg);
    background: linear-gradient(135deg, rgba(212,96,122,0.06) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
    z-index: 0;
  }
  .gg-card:hover {
    border-color: rgba(212,96,122,0.38);
    transform: translateY(-8px);
    box-shadow: 0 24px 52px rgba(212,96,122,0.18), 0 0 0 1px rgba(212,96,122,0.16);
  }
  .gg-card:hover::before { opacity: 1; }
  .gg-card-inner {
    position: relative;
    z-index: 1;
    padding: 28px 24px 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  /* ── Card icon wrapper ── */
  .gg-card-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: var(--rose-pale);
    border: 1px solid rgba(212,96,122,0.16);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }
  .gg-card:hover .gg-card-icon {
    background: rgba(212,96,122,0.15);
    border-color: rgba(212,96,122,0.32);
    transform: scale(1.06);
  }

  /* ── Card category chip ── */
  .gg-card-chip {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 100px;
    background: var(--rose-pale);
    border: 1px solid rgba(212,96,122,0.14);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--rose);
    margin-bottom: 10px;
    width: fit-content;
  }

  /* ── Testimonial ── */
  .gg-testi {
    background: var(--white);
    border: 1px solid var(--rose-bdr);
    border-radius: var(--radius-lg);
    padding: 36px 30px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .gg-testi::after {
    content: '"';
    position: absolute;
    right: 20px;
    top: 10px;
    font-family: 'Playfair Display', serif;
    font-size: 7rem;
    color: rgba(212,96,122,0.06);
    line-height: 1;
    pointer-events: none;
  }
  .gg-testi:hover {
    border-color: var(--rose);
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
  }

  /* ── Form input ── */
  .gg-input {
    background: var(--blush);
    border: 1px solid var(--rose-bdr);
    color: var(--ink);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.86rem;
    padding: 13px 16px;
    border-radius: var(--radius-sm);
    width: 100%;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .gg-input:focus {
    border-color: var(--rose);
    box-shadow: 0 0 0 3px rgba(212,96,122,0.11);
  }
  .gg-input::placeholder { color: rgba(26,13,17,0.32); }

  /* ── Ornament ── */
  .gg-ornament { display: flex; align-items: center; gap: 12px; }
  .gg-orn-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--rose-bdr)); }
  .gg-orn-line.r { background: linear-gradient(90deg, var(--rose-bdr), transparent); }

  /* ── Grain overlay ── */
  .gg-grain::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    opacity: 0.22;
    mix-blend-mode: multiply;
  }

  /* ════════════════════════════
     TREATMENTS SECTION STYLES
  ════════════════════════════ */
  .gg-treatments-section {
    padding: 100px 24px;
    background: linear-gradient(170deg, var(--blush) 0%, #f9e4ec 60%, var(--blush-2) 100%);
    position: relative;
    overflow: hidden;
  }
  .gg-treatments-section::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212,96,122,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .gg-treatments-section::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212,96,122,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .gg-treatments-header {
    text-align: center;
    margin-bottom: 64px;
    position: relative;
    z-index: 1;
  }

  .gg-treatments-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
    position: relative;
    z-index: 1;
  }

  .gg-treatments-cta {
    text-align: center;
    margin-top: 60px;
    position: relative;
    z-index: 1;
  }

  /* ── Card accent bar gradient variants ── */
  .gg-card-bar-1 { background: linear-gradient(90deg, #d4607a, #b04560); }
  .gg-card-bar-2 { background: linear-gradient(90deg, #e8899a, #d4607a); }
  .gg-card-bar-3 { background: linear-gradient(90deg, #b04560, #7a2d40); }
  .gg-card-bar-4 { background: linear-gradient(90deg, #d4607a, #e8899a); }

  /* ════════════
     RESPONSIVE
  ════════════ */
  @media (max-width: 1100px) {
    .gg-treatments-grid { grid-template-columns: repeat(3, 1fr); }
  }

  @media (max-width: 820px) {
    .gg-treatments-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .gg-treatments-section { padding: 72px 20px; }
    .gg-treatments-header { margin-bottom: 48px; }
    .gg-two-col { grid-template-columns: 1fr !important; }
    .gg-stats-grid { grid-template-columns: 1fr 1fr !important; }
    .gg-stats-grid .gg-stat:nth-child(2) { border-right: none; }
    .gg-stats-grid .gg-stat:nth-child(3) { border-right: 1px solid var(--rose-bdr); }
    .gg-contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
    .gg-hero-title { font-size: clamp(2.4rem, 9vw, 3.5rem) !important; }
  }

  @media (max-width: 520px) {
    .gg-treatments-grid {
      grid-template-columns: 1fr;
      gap: 14px;
    }
    .gg-treatments-section { padding: 60px 16px; }
    .gg-treatments-header { margin-bottom: 40px; }
    .gg-card-inner { padding: 24px 20px 20px; }
    .gg-card-icon { width: 44px; height: 44px; border-radius: 12px; }
  }

  @media (max-width: 400px) {
    .gg-treatments-section { padding: 52px 14px; }
    .gg-card-inner { padding: 20px 16px 18px; }
  }
`;

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const STATS = [
  { value: '10,000+', label: 'Happy Clients' },
  { value: '15+', label: 'Years of Excellence' },
  { value: '25+', label: 'Treatments' },
  { value: '98%', label: 'Satisfaction Rate' },
];

const TESTIMONIALS = [
  {
    name: 'Priya Ramesh', initials: 'PR',
    treatment: 'HydraFacial',
    quote: 'My skin has never looked this radiant. The team at Golden Gem is absolutely exceptional — professional, warm, and genuinely skilled.',
  },
  {
    name: 'Ananya Krishnan', initials: 'AK',
    treatment: 'Laser Skin Rejuvenation',
    quote: 'After years of struggling with pigmentation, just three sessions gave me visible results. I finally feel confident without makeup.',
  },
  {
    name: 'Meera Subramaniam', initials: 'MS',
    treatment: 'RF Skin Tightening',
    quote: 'The results are nothing short of remarkable. My skin feels firmer and more lifted than it has in years. Absolutely worth every penny.',
  },
];

/* ─────────────────────────────────────────────
   ICON MAP
───────────────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  Droplets, Sparkles, Zap, Crosshair, Sun, Waves, Lightbulb,
  Layers, Pen, Circle, Shield, FlaskConical, Leaf, Star,
  ShieldCheck, RefreshCw, SunMedium: Sun, Citrus: Leaf,
};
const getIcon = (name: string): React.ElementType => iconMap[name] || Sparkles;

/* ─────────────────────────────────────────────
   BAR VARIANT — cycles through 4 gradient styles
───────────────────────────────────────────── */
const barClass = (index: number) =>
  `gg-card-bar-${(index % 4) + 1}`;

/* ══════════════════════════════════════════════
   STANDALONE WRAPPER
══════════════════════════════════════════════ */
const SkinClinicStandalone: React.FC = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <main className="flex-grow">
      <SkinClinicContent />
    </main>
    <Footer />
  </div>
);

/* ══════════════════════════════════════════════
   MAIN PAGE CONTENT
══════════════════════════════════════════════ */
export const SkinClinicContent: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('Skin Consultation');

  const openModal = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    setModalOpen(true);
  };

  return (
    <div className="gg-wrap">
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

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section
        className="gg-grain"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(ellipse 80% 70% at 65% 40%, rgba(212,96,122,0.12) 0%, transparent 65%),' +
            'radial-gradient(ellipse 50% 55% at 10% 75%, rgba(212,96,122,0.07) 0%, transparent 60%),' +
            'linear-gradient(160deg, #fff9fb 0%, #fdf0f4 55%, #f9e2ea 100%)',
        }}
        aria-label="Skin Clinic Hero"
      >
        {[620, 480, 360].map((size, i) => (
          <div
            key={size}
            className={i === 2 ? 'gg-rotate' : ''}
            style={{
              position: 'absolute',
              right: i === 0 ? '-12%' : i === 1 ? '-6%' : '0%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: size,
              height: size,
              borderRadius: '50%',
              border: `1px solid rgba(212,96,122,${i === 2 ? '0.14' : '0.07'})`,
              pointerEvents: 'none',
            }}
          />
        ))}
        <div className="gg-float" style={{ position: 'absolute', right: '14%', top: '18%', opacity: 0.12 }}>
          <Sparkles size={72} color="#d4607a" />
        </div>
        <div className="gg-float-2" style={{ position: 'absolute', left: '5%', bottom: '22%', opacity: 0.07 }}>
          <Sparkles size={44} color="#d4607a" />
        </div>

        {/* Ticker */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, overflow: 'hidden', background: 'var(--rose)', padding: '7px 0', zIndex: 10 }}>
          <div className="gg-ticker-inner">
            {['✦ Advanced Dermatology & Aesthetics', '✦ FDA-Cleared Technologies', '✦ Certified Dermatologists', '✦ 10,000+ Happy Clients',
              '✦ Advanced Dermatology & Aesthetics', '✦ FDA-Cleared Technologies', '✦ Certified Dermatologists', '✦ 10,000+ Happy Clients'].map((t, i) => (
                <span key={i} style={{ fontSize: '0.64rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#fff', padding: '0 28px', whiteSpace: 'nowrap', fontFamily: "'DM Sans', sans-serif" }}>
                  {t}
                </span>
              ))}
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '130px 28px 90px', width: '100%' }}>
          <div style={{ maxWidth: 660 }}>
            <div className="gg-fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 28, padding: '7px 18px', border: '1px solid var(--rose-bdr)', borderRadius: 100, background: 'var(--rose-pale)' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--rose)', animation: 'gg-pulse-rose 2s infinite' }} />
              <span className="gg-section-label">Chennai's Premier Cosmetic Clinic</span>
            </div>
            <h1 className="gg-display gg-hero-title gg-fade-up-1" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 10 }}>
              Where Beauty<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Meets </em>
              <span className="gg-shimmer-text">Science</span>
            </h1>
            <p className="gg-body gg-fade-up-2" style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.78, maxWidth: 510, marginBottom: 40, fontWeight: 300 }}>
              Premium dermatology and aesthetic skin treatments designed to restore youthful,
              glowing and healthy skin — medically approved, personally crafted.
            </p>
            <div className="gg-fade-up-3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
              <button onClick={() => openModal('Skin Consultation')} className="gg-btn-rose" style={{ padding: '15px 32px', borderRadius: 10, boxShadow: '0 8px 28px rgba(212,96,122,0.35)' }}>
                <Calendar size={15} /> Book Skin Consultation
              </button>
              <Link to="/skin-clinic" className="gg-btn-outline" style={{ padding: '15px 32px', borderRadius: 10 }}>
                Explore Treatments <ArrowRight size={14} />
              </Link>
            </div>
            <div className="gg-fade-up-4" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {['Medically Approved Procedures', 'Certified Dermatologists', 'FDA-Cleared Technologies'].map((badge) => (
                <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle size={14} color="#d4607a" />
                  <span className="gg-body" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          STATS BAR
      ════════════════════════════════ */}
      <div style={{ background: 'var(--white)', borderTop: '1px solid var(--rose-bdr)', borderBottom: '1px solid var(--rose-bdr)' }}>
        <div className="gg-stats-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((s) => (
            <div key={s.label} className="gg-stat">
              <div className="gg-display gg-shimmer-text" style={{ fontSize: '2.1rem', fontWeight: 600, lineHeight: 1 }}>{s.value}</div>
              <div className="gg-body" style={{ fontSize: '0.67rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 7, fontWeight: 400 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════
          INTRODUCTION / ABOUT
      ════════════════════════════════ */}
      <section style={{ padding: '96px 28px', background: 'var(--cream)' }} aria-label="Introduction">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="gg-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            {/* Stat card */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: -1, borderRadius: 18, background: 'linear-gradient(135deg, var(--rose), rgba(212,96,122,0.1), var(--rose))', padding: 1, zIndex: 0 }}>
                <div style={{ background: 'var(--blush)', borderRadius: 17, height: '100%' }} />
              </div>
              <div style={{ position: 'relative', zIndex: 1, background: 'linear-gradient(135deg, var(--white) 0%, var(--blush) 100%)', borderRadius: 17, padding: 44, minHeight: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--rose-pale)', border: '1px solid var(--rose-bdr)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
                    <Sparkles size={22} color="#d4607a" />
                  </div>
                  <div className="gg-display gg-shimmer-text" style={{ fontSize: '3.4rem', fontWeight: 600, lineHeight: 1 }}>15+</div>
                  <div className="gg-body" style={{ fontSize: '0.67rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>Years of Excellence</div>
                </div>
                <div className="gg-line" style={{ margin: '24px 0' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  {[{ n: '25+', l: 'Treatments' }, { n: '10K+', l: 'Clients' }, { n: '98%', l: 'Satisfaction' }, { n: '5★', l: 'Rating' }].map((s) => (
                    <div key={s.l} style={{ padding: '14px', background: 'var(--rose-pale)', borderRadius: 10, border: '1px solid rgba(212,96,122,0.12)' }}>
                      <div className="gg-display gg-shimmer-text" style={{ fontSize: '1.55rem', fontWeight: 600 }}>{s.n}</div>
                      <div className="gg-body" style={{ fontSize: '0.63rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Text */}
            <div>
              <span className="gg-section-label" style={{ marginBottom: 16, display: 'block' }}>About Us</span>
              <h2 className="gg-display" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 400, lineHeight: 1.18, color: 'var(--ink)', marginBottom: 22 }}>
                Skin Treatments at<br /><em style={{ fontStyle: 'italic' }}>The Golden Gem</em>
              </h2>
              <div className="gg-line" style={{ maxWidth: 72, marginBottom: 26 }} />
              <div className="gg-body" style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.82, fontWeight: 300 }}>
                <p style={{ marginBottom: 16 }}>At The Golden Gem Cosmetic Clinic, we provide advanced dermatological and aesthetic treatments using cutting-edge technology and medically approved procedures.</p>
                <p style={{ marginBottom: 16 }}>Our specialists focus on skin rejuvenation, anti-aging, pigmentation correction and facial contouring treatments tailored for each individual.</p>
                <p style={{ marginBottom: 32 }}>Whether you want glowing skin, acne solutions, wrinkle reduction or laser procedures, our treatments deliver visible and long-lasting results.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
                {['Medically Approved Procedures', 'Certified Dermatologists', 'FDA-Cleared Technologies'].map((badge) => (
                  <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <CheckCircle size={15} color="#d4607a" style={{ flexShrink: 0 }} />
                    <span className="gg-body" style={{ fontSize: '0.85rem', color: 'var(--text-body)', fontWeight: 400 }}>{badge}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => openModal('Skin Consultation')} className="gg-btn-rose" style={{ padding: '14px 30px', borderRadius: 10 }}>
                <Calendar size={15} /> Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TREATMENTS GRID  ← BEAUTIFIED
      ════════════════════════════════ */}
      <section className="gg-treatments-section" aria-label="Skin Treatments">
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>

          {/* ── Header ── */}
          <div className="gg-treatments-header">
            <span className="gg-section-label" style={{ marginBottom: 14, display: 'block' }}>
              Our Treatments
            </span>
            <h2
              className="gg-display"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.1rem)',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1.18,
                marginBottom: 18,
              }}
            >
              Signature Skin{' '}
              <em style={{ fontStyle: 'italic' }}>Treatments</em>
            </h2>

            <div className="gg-ornament" style={{ maxWidth: 240, margin: '0 auto 18px' }}>
              <div className="gg-orn-line" />
              <Sparkles size={12} color="#d4607a" />
              <div className="gg-orn-line r" />
            </div>

            <p
              className="gg-body"
              style={{
                fontSize: '0.93rem',
                color: 'var(--text-muted)',
                maxWidth: 460,
                margin: '0 auto',
                lineHeight: 1.72,
                fontWeight: 300,
              }}
            >
              Explore our comprehensive range of advanced, medically approved skin treatments
              designed for every skin concern.
            </p>
          </div>

          {/* ── Grid ── */}
          <div className="gg-treatments-grid">
            {skinTreatments.map((treatment, index) => {
              const IconComponent = getIcon(treatment.icon);
              return (
                <div key={treatment.slug} className="gg-card">
                  {/* Accent bar — cycles through gradient variants */}
                  <div
                    className={barClass(index)}
                    style={{ height: 3, flexShrink: 0 }}
                    aria-hidden="true"
                  />

                  <div className="gg-card-inner">
                    {/* Category chip */}
                    <div className="gg-card-chip" aria-hidden="true">
                      Skin Treatment
                    </div>

                    {/* Icon */}
                    <div className="gg-card-icon" aria-hidden="true">
                      <IconComponent style={{ width: 22, height: 22, color: '#d4607a' }} />
                    </div>

                    {/* Title */}
                    <h3
                      className="gg-display"
                      style={{
                        fontSize: '1.08rem',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        marginBottom: 10,
                        lineHeight: 1.3,
                      }}
                    >
                      {treatment.name}
                    </h3>

                    {/* Divider */}
                    <div
                      style={{
                        height: 1,
                        background: 'linear-gradient(90deg, var(--rose-bdr), transparent)',
                        marginBottom: 12,
                        width: '60%',
                      }}
                    />

                    {/* Description */}
                    <p
                      className="gg-body"
                      style={{
                        fontSize: '0.80rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.68,
                        flexGrow: 1,
                        marginBottom: 22,
                        fontWeight: 300,
                      }}
                    >
                      {treatment.description}
                    </p>

                    {/* Action row */}
                    <div style={{ display: 'flex', gap: 9, marginTop: 'auto' }}>
                      <Link
                        to={`/skin/${treatment.slug}`}
                        className="gg-btn-outline"
                        style={{
                          flex: 1,
                          padding: '10px 0',
                          borderRadius: 9,
                          fontSize: '0.68rem',
                        }}
                        aria-label={`Know more about ${treatment.name}`}
                      >
                        Know More <ArrowRight size={11} />
                      </Link>
                      <button
                        onClick={() => openModal(treatment.name)}
                        className="gg-btn-rose"
                        style={{
                          flex: 1,
                          padding: '10px 0',
                          borderRadius: 9,
                          fontSize: '0.68rem',
                        }}
                        aria-label={`Book ${treatment.name}`}
                      >
                        <Calendar size={12} /> Book
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="gg-treatments-cta">
            <p
              className="gg-body"
              style={{
                fontSize: '0.87rem',
                color: 'var(--text-muted)',
                marginBottom: 20,
                fontWeight: 300,
              }}
            >
              Not sure which treatment is right for you?
            </p>
            <button
              onClick={() => openModal('Skin Consultation')}
              className="gg-btn-rose"
              style={{
                padding: '15px 38px',
                borderRadius: 11,
                fontSize: '0.75rem',
                boxShadow: '0 8px 28px rgba(212,96,122,0.32)',
              }}
            >
              <Calendar size={15} /> Get a Free Skin Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════ */}
      <section
        style={{ padding: '96px 28px', background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}
        aria-label="Testimonials"
      >
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(212,96,122,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="gg-section-label" style={{ marginBottom: 14, display: 'block' }}>Client Stories</span>
            <h2 className="gg-display" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.18 }}>
              Transformations That <em style={{ fontStyle: 'italic' }}>Speak</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="gg-testi">
                <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} color="#d4607a" fill="#d4607a" />)}
                </div>
                <p className="gg-display" style={{ fontSize: '1.02rem', fontStyle: 'italic', color: 'var(--text-body)', lineHeight: 1.75, marginBottom: 26, fontWeight: 400 }}>"{t.quote}"</p>
                <div className="gg-line" style={{ marginBottom: 20 }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg, var(--rose) 0%, var(--rose-deep) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="gg-body" style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fff' }}>{t.initials}</span>
                  </div>
                  <div>
                    <div className="gg-body" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--ink)' }}>{t.name}</div>
                    <div className="gg-body" style={{ fontSize: '0.67rem', color: 'var(--rose)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>{t.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CONTACT / CTA
      ════════════════════════════════ */}
      <section style={{ padding: '96px 28px', background: 'var(--blush)' }} aria-label="Contact">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Banner */}
          <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', marginBottom: 80, padding: '68px 48px', background: 'linear-gradient(135deg, rgba(212,96,122,0.10) 0%, rgba(212,96,122,0.03) 50%, rgba(212,96,122,0.08) 100%)', border: '1px solid var(--rose-bdr)', textAlign: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,96,122,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <span className="gg-section-label" style={{ marginBottom: 16, display: 'block', position: 'relative' }}>Ready to Begin?</span>
            <h2 className="gg-display" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.18, marginBottom: 18, position: 'relative' }}>
              Your Skin Transformation<br /><em style={{ fontStyle: 'italic' }}>Starts Here</em>
            </h2>
            <p className="gg-body" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.7, fontWeight: 300, position: 'relative' }}>
              Book a complimentary consultation with our dermatologists and discover the treatment that's right for you.
            </p>
            <button onClick={() => openModal('Skin Consultation')} className="gg-btn-rose" style={{ padding: '16px 40px', borderRadius: 10, fontSize: '0.78rem', boxShadow: '0 8px 28px rgba(212,96,122,0.32)', position: 'relative' }}>
              <Calendar size={16} /> Book Free Skin Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkinClinicStandalone;
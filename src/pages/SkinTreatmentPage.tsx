import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import EnquiryForm from '../components/EnquiryModal';
import { skinTreatments, treatmentImages } from '../data/skinTreatments';
import {
  ArrowLeft,
  CheckCircle,
  Calendar,
  Phone,
  Star,
  Sparkles,
  ArrowRight,
  Clock,
  Shield,
  Users,
  Award,
  ChevronDown,
  ChevronUp,
  MapPin,
  Mail,
  Zap,
  Droplets,
  Sun,
  Waves,
  Lightbulb,
  Layers,
  Pen,
  Circle,
  FlaskConical,
  Leaf,
  ShieldCheck,
  RefreshCw,
  Crosshair,
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
    --ink:         #1a0d11;
    --cream:       #fff9fb;
    --white:       #ffffff;
    --text-muted:  rgba(26,13,17,0.50);
    --text-body:   rgba(26,13,17,0.76);
    --shadow-sm:   0 2px 12px rgba(212,96,122,0.08);
    --shadow-md:   0 8px 32px rgba(212,96,122,0.14);
  }

  .st-wrap { min-height: 100vh; display: flex; flex-direction: column; background: var(--cream); }
  .st-wrap *, .st-wrap *::before, .st-wrap *::after { box-sizing: border-box; }
  .st-wrap a { text-decoration: none; }
  .st-wrap > main   { flex: 1 0 auto; }
  .st-wrap > footer { flex-shrink: 0; }

  .st-display { font-family: 'Playfair Display', serif; }
  .st-body    { font-family: 'DM Sans', sans-serif; }

  @keyframes st-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  .st-shimmer {
    background: linear-gradient(90deg, var(--rose-deep) 0%, var(--rose-light) 42%, var(--rose-deep) 80%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: st-shimmer 4s linear infinite;
  }

  @keyframes st-fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes st-float {
    0%,100% { transform: translateY(0px); }
    50%     { transform: translateY(-8px); }
  }
  @keyframes st-pulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(212,96,122,0.45); }
    50%     { box-shadow: 0 0 0 12px rgba(212,96,122,0); }
  }
  @keyframes st-rotate {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  .st-fade-0 { animation: st-fadeUp 0.7s 0.00s ease both; }
  .st-fade-1 { animation: st-fadeUp 0.7s 0.12s ease both; }
  .st-fade-2 { animation: st-fadeUp 0.7s 0.24s ease both; }
  .st-fade-3 { animation: st-fadeUp 0.7s 0.36s ease both; }
  .st-float  { animation: st-float 5s ease-in-out infinite; }
  .st-rotate { animation: st-rotate 38s linear infinite; }

  .st-line      { height: 1px; background: linear-gradient(90deg, transparent, var(--rose-bdr), transparent); }
  .st-line-left { height: 1px; background: linear-gradient(90deg, var(--rose-bdr), transparent); }

  .st-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.63rem;
    font-weight: 600;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--rose);
    display: block;
  }

  .st-orn   { display: flex; align-items: center; gap: 12px; }
  .st-orn-l { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--rose-bdr)); }
  .st-orn-r { flex: 1; height: 1px; background: linear-gradient(90deg, var(--rose-bdr), transparent); }

  .st-btn-rose {
    background: linear-gradient(135deg, var(--rose) 0%, var(--rose-deep) 100%);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 0.74rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 28px;
    white-space: nowrap;
  }
  .st-btn-rose:hover {
    background: linear-gradient(135deg, var(--rose-light) 0%, var(--rose) 100%);
    box-shadow: 0 8px 26px rgba(212,96,122,0.40);
    transform: translateY(-2px);
  }

  .st-btn-outline {
    background: transparent;
    border: 1px solid var(--rose-bdr);
    color: var(--rose-deep);
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 0.74rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 28px;
    text-decoration: none;
    white-space: nowrap;
  }
  .st-btn-outline:hover {
    background: var(--rose-pale2);
    border-color: var(--rose);
    transform: translateY(-1px);
  }

  .st-benefit {
    background: var(--white);
    border: 1px solid rgba(212,96,122,0.10);
    border-radius: 14px;
    padding: 18px 16px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    transition: all 0.28s ease;
  }
  .st-benefit:hover {
    border-color: rgba(212,96,122,0.32);
    box-shadow: var(--shadow-sm);
    transform: translateY(-3px);
  }

  .st-step {
    background: var(--white);
    border: 1px solid rgba(212,96,122,0.10);
    border-radius: 16px;
    padding: 24px 20px;
    transition: all 0.28s ease;
  }
  .st-step:hover {
    border-color: rgba(212,96,122,0.30);
    box-shadow: var(--shadow-sm);
    transform: translateY(-4px);
  }

  .st-faq {
    background: var(--white);
    border: 1px solid rgba(212,96,122,0.12);
    border-radius: 14px;
    overflow: hidden;
    transition: border-color 0.2s;
  }
  .st-faq.open { border-color: rgba(212,96,122,0.35); }
  .st-faq-q {
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    padding: 18px 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    color: var(--ink);
    transition: background 0.2s;
  }
  .st-faq-q:hover { background: var(--rose-pale); }
  .st-faq-a {
    padding: 0 20px 18px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.84rem;
    color: var(--text-body);
    line-height: 1.72;
    font-weight: 300;
  }

  .st-related-card {
    background: var(--white);
    border: 1px solid rgba(212,96,122,0.10);
    border-radius: 16px;
    padding: 22px 20px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-decoration: none;
    overflow: hidden;
  }
  .st-related-card:hover {
    border-color: rgba(212,96,122,0.38);
    box-shadow: var(--shadow-md);
    transform: translateY(-5px);
  }

  .st-cta-card {
    background: linear-gradient(145deg, #fff 0%, var(--blush) 100%);
    border: 1px solid var(--rose-bdr);
    border-radius: 20px;
    padding: 28px 24px;
    box-shadow: var(--shadow-md);
    position: sticky;
    top: 24px;
  }

  .st-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    border-radius: 100px;
    background: var(--rose-pale);
    border: 1px solid rgba(212,96,122,0.16);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.67rem;
    font-weight: 500;
    color: var(--rose-deep);
    white-space: nowrap;
  }

  .st-grain::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    opacity: 0.22;
    mix-blend-mode: multiply;
  }

  /* ─── Layout grids (desktop base) ─── */
  .st-content-grid  { display: grid; grid-template-columns: 1fr 320px; gap: 48px; align-items: start; }
  .st-benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .st-steps-grid    { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .st-related-grid  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
  .st-why-grid      { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }

  /* ─── 1280px: tighten internal gaps ─── */
  @media (max-width: 1280px) {
    .st-content-grid { gap: 40px; }
  }

  /* ─── 1100px: narrow sidebar ─── */
  @media (max-width: 1100px) {
    .st-content-grid  { grid-template-columns: 1fr 270px; gap: 32px; }
    .st-why-grid      { grid-template-columns: 1fr 1fr; }
    .st-related-grid  { grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .st-hero-inner    { padding: 110px 24px 64px !important; }
    .st-section-pad   { padding: 64px 24px !important; }
  }

  /* ─── 900px: sidebar narrows more ─── */
  @media (max-width: 900px) {
    .st-content-grid  { grid-template-columns: 1fr 240px; gap: 28px; }
    .st-cta-card      { padding: 22px 18px; }
    .st-step          { padding: 20px 16px; }
  }

  /* ─── 860px: sidebar drops below, full-width ─── */
  @media (max-width: 860px) {
    .st-content-grid  { grid-template-columns: 1fr; gap: 36px; }
    .st-cta-card      { position: static; }
    .st-sidebar       { order: -1; }
    .st-hero-inner    { padding: 100px 22px 60px !important; }
    .st-section-pad   { padding: 56px 22px !important; }
  }

  /* ─── 640px: single-col for most grids ─── */
  @media (max-width: 640px) {
    .st-hero-inner    { padding: 96px 18px 52px !important; }
    .st-hero-title    { font-size: clamp(1.8rem, 7vw, 2.4rem) !important; }
    .st-section-pad   { padding: 48px 18px !important; }
    .st-benefits-grid { grid-template-columns: 1fr; gap: 12px; }
    .st-steps-grid    { grid-template-columns: 1fr; gap: 12px; }
    .st-why-grid      { grid-template-columns: 1fr 1fr; gap: 10px; }
    .st-related-grid  { grid-template-columns: 1fr 1fr; gap: 12px; }
    .st-chips-row     { gap: 7px; }
    .st-cta-card      { padding: 20px 16px !important; }
    .st-hero-btns     { flex-direction: column; align-items: stretch; }
    .st-cta-btns      { flex-direction: column; align-items: stretch; }
    .st-banner-pad    { padding: 40px 22px !important; }
    .st-step          { padding: 18px 14px; }
    .st-benefit       { padding: 14px 13px; gap: 10px; }
    .st-related-card  { padding: 18px 16px; }
    .st-faq-q         { padding: 15px 16px; font-size: 0.84rem; }
    .st-faq-a         { padding: 0 16px 15px; }
  }

  /* ─── 480px: tighten padding further ─── */
  @media (max-width: 480px) {
    .st-hero-inner    { padding: 88px 16px 48px !important; }
    .st-hero-title    { font-size: clamp(1.7rem, 6.5vw, 2.1rem) !important; }
    .st-section-pad   { padding: 40px 16px !important; }
    .st-banner-pad    { padding: 32px 18px !important; }
    .st-chips-row     { gap: 6px; }
    .st-chip          { font-size: 0.62rem; padding: 4px 10px; }
  }

  /* ─── 400px: 1-col for all remaining grids ─── */
  @media (max-width: 400px) {
    .st-hero-inner    { padding: 80px 14px 44px !important; }
    .st-section-pad   { padding: 36px 14px !important; }
    .st-why-grid      { grid-template-columns: 1fr; }
    .st-related-grid  { grid-template-columns: 1fr; }
    .st-banner-pad    { padding: 28px 14px !important; }
  }
`;

/* ─────────────────────────────────────────────
   ICON MAP
───────────────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
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
  Shield: ShieldCheck,
  FlaskConical,
  Leaf,
  Star,
  ShieldCheck,
  RefreshCw,
  SunMedium: Sun,
  Citrus: Leaf,
};
const getIcon = (name: string): React.ElementType => iconMap[name] || Sparkles;

/* ─────────────────────────────────────────────
   EXTRA CONTENT per treatment
───────────────────────────────────────────── */
interface TreatmentExtra {
  tagline: string;
  duration: string;
  sessions: string;
  downtime: string;
  idealFor: string;
  howItWorks: string;
  steps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  aftercare: string[];
}

const treatmentExtras: Record<string, TreatmentExtra> = {
  default: {
    tagline: 'Advanced skin treatment for visible, lasting results',
    duration: '45–60 min',
    sessions: '3–6 sessions',
    downtime: 'Minimal',
    idealFor: 'All skin types',
    howItWorks:
      'Our certified dermatologists at The Golden Gem use clinically proven protocols and FDA-cleared technology to deliver safe, effective results tailored to your unique skin concerns. Each treatment is personalised after a thorough skin analysis.',
    steps: [
      { title: 'Skin Consultation', desc: 'Our expert analyses your skin type, concerns and goals to design a personalised treatment plan.' },
      { title: 'Preparation', desc: 'The treatment area is cleansed and prepped with professional-grade products to ensure optimal results.' },
      { title: 'Treatment', desc: 'The procedure is performed with precision using state-of-the-art equipment by our certified specialists.' },
      { title: 'Post-Care', desc: 'Soothing serums and SPF protection are applied. Detailed aftercare instructions are provided.' },
    ],
    faqs: [
      { q: 'Is this treatment safe for Indian skin tones?', a: 'Yes. All our treatments are calibrated and tested for diverse Indian skin tones. Our dermatologists have extensive experience with South Asian skin types.' },
      { q: 'How many sessions will I need?', a: 'The number of sessions depends on your individual skin concern and goals. Most clients see optimal results within 3–6 sessions, spaced 2–4 weeks apart.' },
      { q: 'Is there any downtime after the treatment?', a: 'Downtime is minimal for most treatments. Some may cause mild redness or sensitivity for 24–48 hours, which subsides quickly.' },
      { q: 'When will I see results?', a: 'Many clients notice improvements after the first session. Optimal, long-lasting results typically develop over 4–6 weeks as your skin regenerates.' },
      { q: 'Can I combine this with other treatments?', a: 'Yes, we often recommend complementary treatments for enhanced results. Our dermatologists will advise the best combination during your consultation.' },
    ],
    aftercare: [
      'Avoid direct sun exposure for 48 hours',
      'Apply SPF 50+ sunscreen daily',
      'Keep skin hydrated with a gentle moisturiser',
      'Avoid harsh exfoliants for 5–7 days',
      'Do not pick or scratch treated areas',
      'Follow the personalised aftercare plan provided',
    ],
  },
  'vampire-facial': {
    tagline: "Harness your body's own healing power for radiant skin",
    duration: '60–75 min',
    sessions: '3–4 sessions',
    downtime: '24–48 hours',
    idealFor: 'Fine lines, dull skin, acne scars',
    howItWorks:
      "The Vampire Facial (PRP – Platelet Rich Plasma) uses your own blood's growth factors to stimulate collagen production and accelerate skin renewal. A small blood sample is drawn, spun to concentrate the platelet-rich plasma, and then micro-needled into the skin. The growth factors trigger deep tissue regeneration for visibly firmer, smoother skin.",
    steps: [
      { title: 'Blood Draw', desc: 'A small amount of your blood is collected — the same as a routine blood test.' },
      { title: 'PRP Extraction', desc: 'The sample is centrifuged to separate and concentrate the platelet-rich plasma (PRP).' },
      { title: 'Micro-Needling', desc: 'The PRP is applied while micro-needling creates micro-channels for deep penetration into the dermis.' },
      { title: 'Serum & Recovery', desc: 'Calming serums are applied. Mild redness fades within 24–48 hours revealing glowing skin.' },
    ],
    faqs: [
      { q: 'Does the Vampire Facial hurt?', a: 'A topical numbing cream is applied before the procedure, making it very comfortable. Most clients feel only a mild tingling sensation.' },
      { q: 'How long do results last?', a: 'Results typically last 12–18 months. Maintenance sessions every 6–12 months help sustain the benefits.' },
      { q: 'Is PRP safe?', a: 'Absolutely. Since PRP uses your own blood, there is zero risk of allergic reaction or rejection. It is one of the safest regenerative treatments available.' },
      { q: 'When will I see results?', a: 'Initial improvements appear within 2–3 weeks as collagen synthesis begins. Full results develop over 2–3 months.' },
      { q: 'Can I wear makeup afterwards?', a: 'We recommend avoiding makeup for 24 hours post-treatment to let the skin breathe and heal properly.' },
    ],
    aftercare: [
      'Avoid washing face for 4–6 hours after treatment',
      'Apply SPF 50+ the next morning',
      'Stay hydrated — drink plenty of water',
      'Avoid saunas and intense exercise for 48 hours',
      'Do not apply active ingredients (retinol, AHAs) for 5 days',
      'Use the prescribed gentle moisturiser only',
    ],
  },
  hydrafacial: {
    tagline: 'Deep hydration infusion for an instant, lasting glow',
    duration: '45–60 min',
    sessions: 'Monthly maintenance',
    downtime: 'None',
    idealFor: 'All skin types, dehydrated & dull skin',
    howItWorks:
      'HydraFacial uses a patented Vortex-Fusion technology that simultaneously cleanses, extracts and infuses the skin with hydrating serums. Unlike traditional facials, it delivers continuous moisture and nutrients deep into the dermis while gently removing impurities — leaving skin visibly plump, clear and luminous immediately after treatment.',
    steps: [
      { title: 'Cleanse & Peel', desc: 'Dead skin cells are gently removed using a mild glycolic and salicylic acid blend.' },
      { title: 'Acid Peel', desc: 'A gentle peel loosens debris from pores without irritation, preparing skin for extraction.' },
      { title: 'Extractions', desc: 'Painless automated suction removes blackheads, whiteheads and congestion from pores.' },
      { title: 'Hydration Infusion', desc: 'Antioxidants, peptides and hyaluronic acid are infused into the freshly cleaned pores for deep nourishment.' },
    ],
    faqs: [
      { q: 'Is HydraFacial suitable for sensitive skin?', a: 'Yes! HydraFacial is one of the most gentle treatments available and is suitable for all skin types, including sensitive and rosacea-prone skin.' },
      { q: 'How often should I get a HydraFacial?', a: 'Monthly treatments are ideal for maintaining results. For specific skin concerns, more frequent sessions may be recommended initially.' },
      { q: 'Will I see results immediately?', a: 'Yes — most clients notice an immediate glow, improved hydration and refined pores right after their first session.' },
      { q: 'Can I get a HydraFacial before an event?', a: 'Absolutely. With zero downtime, it is perfect to do the day before a special occasion for an instant skin boost.' },
      { q: 'What is the difference between Basic and Advanced HydraFacial?', a: 'The Advanced version includes additional boosters and LED light therapy tailored to specific concerns like pigmentation, anti-aging or acne.' },
    ],
    aftercare: [
      'Apply broad-spectrum SPF 50+ daily',
      'Avoid direct heat (sauna, steam) for 24 hours',
      'Use a gentle, fragrance-free moisturiser',
      'Do not use retinol or exfoliants for 48 hours',
      'Stay hydrated to prolong the plumping effect',
      'Book monthly maintenance for best long-term results',
    ],
  },
};

const getExtra = (slug: string): TreatmentExtra =>
  treatmentExtras[slug] ?? treatmentExtras['default'];

/* ═══════════════════════════════════════════
   FAQ ITEM
═══════════════════════════════════════════ */
const FaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`st-faq${open ? ' open' : ''}`}>
      <button className="st-faq-q" onClick={() => setOpen(!open)}>
        <span className="st-body" style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--ink)' }}>
          {q}
        </span>
        {open
          ? <ChevronUp size={16} color="#d4607a" style={{ flexShrink: 0 }} />
          : <ChevronDown size={16} color="#d4607a" style={{ flexShrink: 0 }} />}
      </button>
      {open && <div className="st-faq-a">{a}</div>}
    </div>
  );
};

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */
const SkinTreatmentPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [modalOpen, setModalOpen] = useState(false);

  const treatment = skinTreatments.find((t) => t.slug === slug);
  const extra = treatment ? getExtra(treatment.slug) : getExtra('default');

  const image = treatment ? treatmentImages[treatment.slug] : '';

  /* ── 404 ── */
  if (!treatment) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--cream)' }}>
        <style>{STYLE}</style>
        <main style={{ flex: '1 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 className="st-display" style={{ fontSize: '2rem', color: 'var(--ink)', marginBottom: 12 }}>
              Treatment Not Found
            </h1>
            <p className="st-body" style={{ color: 'var(--text-muted)', marginBottom: 24, fontSize: '0.9rem' }}>
              The treatment you are looking for does not exist.
            </p>
            <Link to="/skin-clinic" className="st-btn-rose">
              <ArrowLeft size={14} /> Back to Skin Clinic
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = getIcon(treatment.icon);
  const relatedTreatments = skinTreatments.filter((t) => t.slug !== treatment.slug).slice(0, 4);

  return (
    <div className="st-wrap">
      <style>{STYLE}</style>

      <SEO
        title={`${treatment.name} | Golden Gem Skin Clinic Chennai`}
        description={treatment.description}
        canonical={`https://thegoldengemhairclinic.com/skin/${treatment.slug}`}
      />
      <EnquiryForm
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={() => setModalOpen(false)}
        treatment={treatment.name}
      />

      <main>

        {/* ════════════════════════════════
            HERO
        ════════════════════════════════ */}
        <section
          className="st-grain"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background:
              'radial-gradient(ellipse 70% 80% at 70% 40%, rgba(212,96,122,0.16) 0%, transparent 65%),' +
              'linear-gradient(155deg, #fff9fb 0%, #fde8ef 55%, #f5d0db 100%)',
            minHeight: 420,
          }}
          aria-label={`${treatment.name} hero`}
        >
          {/* Decorative circles */}
          {[560, 420, 300].map((size, i) => (
            <div
              key={size}
              className={i === 2 ? 'st-rotate' : ''}
              style={{
                position: 'absolute',
                right: i === 0 ? '-10%' : i === 1 ? '-4%' : '2%',
                top: '50%',
                transform: 'translateY(-50%)',
                width: size,
                height: size,
                borderRadius: '50%',
                border: `1px solid rgba(212,96,122,${i === 2 ? '0.16' : '0.08'})`,
                pointerEvents: 'none',
              }}
            />
          ))}

          {/* Floating icon */}
          <div
            className="st-float"
            style={{
              position: 'absolute',
              right: '10%',
              top: '20%',
              opacity: 0.10,
              pointerEvents: 'none',
            }}
          >
            <IconComponent style={{ width: 90, height: 90, color: '#d4607a' }} />
          </div>

          {/* MAIN GRID */}
          <div
            className="st-hero-inner"
            style={{
              maxWidth: 1280,
              margin: '0 auto',
              padding: '120px 28px 72px',
              position: 'relative',
              zIndex: 1,
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            {/* LEFT CONTENT */}
            <div>
              {/* Breadcrumb */}
              <nav
                className="st-fade-0 st-body"
                style={{
                  display: 'flex',
                  gap: 8,
                  marginBottom: 28,
                  fontSize: '0.74rem',
                  color: 'var(--text-muted)',
                  flexWrap: 'wrap',
                }}
              >
                <Link to="/">Home</Link>
                <span>/</span>
                <Link to="/skin-clinic">Skin Clinic</Link>
                <span>/</span>
                <span style={{ color: 'var(--rose)' }}>{treatment.name}</span>
              </nav>

              {/* Badge */}
              <div
                className="st-fade-0"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 22,
                  padding: '6px 16px',
                  border: '1px solid var(--rose-bdr)',
                  borderRadius: 100,
                  background: 'var(--rose-pale)',
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--rose)',
                  }}
                />
                <span className="st-label">Skin Treatment</span>
              </div>

              {/* Title */}
              <h1
                className="st-display st-hero-title"
                style={{
                  fontSize: 'clamp(2.2rem, 6vw, 4.2rem)',
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                {treatment.name}
              </h1>

              {/* Tagline */}
              <p
                className="st-body"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                {extra.tagline}
              </p>

              {/* CTA */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button onClick={() => setModalOpen(true)} className="st-btn-rose">
                  <Calendar size={15} /> Book This Treatment
                </button>
                <Link to="/skin-clinic" className="st-btn-outline">
                  <ArrowLeft size={14} /> All Treatments
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            {image && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={image}
                  alt={treatment.name}
                  style={{
                    width: '100%',
                    maxWidth: '420px',
                    borderRadius: '20px',
                    objectFit: 'cover',
                    boxShadow: '0 20px 60px rgba(212,96,122,0.25)',
                  }}
                />
              </div>
            )}
          </div>

          {/* RESPONSIVE */}
          <style>
            {`
      @media (max-width: 768px) {
        .st-hero-inner {
          grid-template-columns: 1fr !important;
          text-align: center;
        }
      }
    `}
          </style>
        </section>

        {/* ════════════════════════════════
            CONTENT + SIDEBAR
        ════════════════════════════════ */}
        <section
          className="st-section-pad"
          style={{ padding: '72px 20px', maxWidth: 1280, margin: '0 auto' }}
          aria-label="Treatment details"
        >
          {/* MAIN GRID */}
          <div
            className="st-content-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '48px',
            }}
          >
            {/* LEFT COLUMN */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>

              {/* About */}
              <div>
                <span className="st-label">Overview</span>
                <h2 className="st-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', marginBottom: 16 }}>
                  About <em>{treatment.name}</em>
                </h2>
                <div className="st-line-left" style={{ maxWidth: 60, marginBottom: 20 }} />
                <p className="st-body" style={{ lineHeight: 1.8 }}>
                  {extra.howItWorks}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <span className="st-label">What You Gain</span>
                <h2 className="st-display" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', marginBottom: 24 }}>
                  Key <em>Benefits</em>
                </h2>

                <div
                  className="st-benefits-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '14px',
                  }}
                >
                  {treatment.benefits.map((benefit, i) => (
                    <div key={i} className="st-benefit" style={{ display: 'flex', gap: 10 }}>
                      <CheckCircle size={16} color="#d4607a" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div>
                <span className="st-label">The Process</span>
                <h2 className="st-display" style={{ marginBottom: 24 }}>
                  Step-by-Step <em>Journey</em>
                </h2>

                <div
                  className="st-steps-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '20px',
                  }}
                >
                  {extra.steps.map((step, i) => (
                    <div key={i} className="st-step">
                      <div style={{ fontWeight: 'bold', marginBottom: 8 }}>
                        0{i + 1}
                      </div>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aftercare */}
              <div
                style={{
                  background: '#fff',
                  border: '1px solid var(--rose-bdr)',
                  borderRadius: 16,
                  padding: '24px',
                }}
              >
                <h3>Aftercare Tips</h3>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 10,
                  }}
                >
                  {extra.aftercare.map((tip, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8 }}>
                      <CheckCircle size={14} color="#d4607a" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Section */}
              <div>
                <span className="st-label">Our Promise</span>
                <h2 className="st-display" style={{ marginBottom: 24 }}>
                  Why Choose <em>The Golden Gem?</em>
                </h2>

                <div
                  className="st-why-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: 16,
                  }}
                >
                  {[
                    { title: 'Certified Experts', desc: 'Experienced dermatologists' },
                    { title: 'FDA Tech', desc: 'Approved equipment' },
                    { title: 'Personalised Care', desc: 'Tailored treatments' },
                    { title: '98% Satisfaction', desc: 'Happy clients' },
                  ].map((item) => (
                    <div key={item.title} style={{ padding: 16, border: '1px solid #eee', borderRadius: 12 }}>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <span className="st-label">Have Questions?</span>
                <h2 className="st-display" style={{ marginBottom: 24 }}>
                  Frequently Asked <em>Questions</em>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {extra.faqs.map((faq, i) => (
                    <FaqItem key={i} {...faq} />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RESPONSIVE FIX */}
          <style>
            {`
      @media (min-width: 768px) {
        .st-content-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (min-width: 1024px) {
        .st-content-grid {
          grid-template-columns: 1fr;
        }
      }
    `}
          </style>
        </section>

        {/* ════════════════════════════════
            RELATED TREATMENTS
        ════════════════════════════════ */}
        <section
          style={{ padding: '72px 28px', background: 'linear-gradient(170deg, var(--blush) 0%, var(--blush-2) 100%)', position: 'relative', overflow: 'hidden' }}
          aria-label="Related treatments"
        >
          <div style={{ position: 'absolute', top: -60, right: -60, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,96,122,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>

            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <span className="st-label" style={{ marginBottom: 12 }}>Explore More</span>
              <h2 className="st-display" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.18, marginBottom: 14 }}>
                Other <em style={{ fontStyle: 'italic' }}>Treatments</em>
              </h2>
              <div className="st-orn" style={{ maxWidth: 200, margin: '0 auto' }}>
                <div className="st-orn-l" />
                <Sparkles size={12} color="#d4607a" />
                <div className="st-orn-r" />
              </div>
            </div>

            <div className="st-related-grid">
              {relatedTreatments.map((t) => {
                const RelIcon = getIcon(t.icon);
                return (
                  <Link key={t.slug} to={`/skin/${t.slug}`} className="st-related-card">
                    <div style={{ height: 3, background: 'linear-gradient(90deg, var(--rose), var(--rose-deep))', borderRadius: '4px 4px 0 0', margin: '-22px -20px 16px' }} />
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--rose-pale)', border: '1px solid rgba(212,96,122,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <RelIcon style={{ width: 17, height: 17, color: '#d4607a' }} />
                    </div>
                    <h3 className="st-display" style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.3 }}>
                      {t.name}
                    </h3>
                    <p className="st-body" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 300, flexGrow: 1 }}>
                      {t.description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 'auto' }}>
                      <span className="st-body" style={{ fontSize: '0.67rem', fontWeight: 600, color: 'var(--rose)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        Know More
                      </span>
                      <ArrowRight size={11} color="#d4607a" />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link to="/skin-clinic" className="st-btn-outline" style={{ padding: '13px 30px' }}>
                <ArrowLeft size={14} /> View All Treatments
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            BOTTOM CTA BANNER
        ════════════════════════════════ */}
        <section style={{ padding: '72px 28px', background: 'var(--cream)' }} aria-label="CTA">
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div
              className="st-banner-pad"
              style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', padding: '56px 44px', background: 'linear-gradient(135deg, rgba(212,96,122,0.10) 0%, rgba(212,96,122,0.03) 50%, rgba(212,96,122,0.08) 100%)', border: '1px solid var(--rose-bdr)', textAlign: 'center' }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,96,122,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="st-label" style={{ marginBottom: 14 }}>Ready to Begin?</span>
                <h2 className="st-display" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.7rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.18, marginBottom: 14 }}>
                  Start Your Skin<br />
                  <em style={{ fontStyle: 'italic' }}>Transformation Today</em>
                </h2>
                <p className="st-body" style={{ fontSize: '0.92rem', color: 'var(--text-muted)', maxWidth: 420, margin: '0 auto 28px', lineHeight: 1.72, fontWeight: 300 }}>
                  Book a complimentary consultation and let our dermatologists design the perfect treatment plan for you.
                </p>
                <div className="st-cta-btns" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="st-btn-rose"
                    style={{ padding: '14px 34px', boxShadow: '0 8px 28px rgba(212,96,122,0.32)' }}
                  >
                    <Calendar size={15} /> Book Free Consultation
                  </button>
                  <a href="tel:+918122229557" className="st-btn-outline" style={{ padding: '14px 26px' }}>
                    <Phone size={14} /> Call Us Now
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

export default SkinTreatmentPage;
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import EnquiryForm from '../components/EnquiryModal';
import { skinTreatments, treatmentImages } from '../data/skinTreatments';
import { skinConcernExtras } from '../data/skinConcernExtras';
import { skinDiagnosisExtras } from '../data/skinDiagnosisExtras';
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
  Heart,
  Target,
} from 'lucide-react';

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
    --ink:         #1a0d11;
    --cream:       #fff9fb;
    --white:       #ffffff;
    --text-muted:  rgba(26,13,17,0.60);
    --text-body:   rgba(26,13,17,0.82);
    --shadow-sm:   0 2px 12px rgba(212,96,122,0.08);
    --shadow-md:   0 8px 32px rgba(212,96,122,0.14);
    --shadow-lg:   0 20px 56px rgba(212,96,122,0.18);
  }

  .stp-wrap * { box-sizing: border-box; }
  .stp-wrap a { text-decoration: none; }
  .stp-display { font-family: 'Playfair Display', serif; }
  .stp-body { font-family: 'DM Sans', sans-serif; }

  @keyframes stp-shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .stp-shimmer-text {
    background: linear-gradient(90deg, var(--rose-deep) 0%, var(--rose-light) 42%, var(--rose-deep) 80%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: stp-shimmer 4s linear infinite;
  }

  @keyframes stp-fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes stp-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }
  @keyframes stp-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(212,96,122,0.5); }
    50% { box-shadow: 0 0 0 15px rgba(212,96,122,0); }
  }

  .stp-fade-in { animation: stp-fadeIn 0.8s ease both; }
  .stp-float { animation: stp-float 6s ease-in-out infinite; }

  .stp-btn-rose {
    background: linear-gradient(135deg, var(--rose) 0%, var(--rose-deep) 100%);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 0.04em;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 18px 36px;
    border-radius: 12px;
  }
  .stp-btn-rose:hover {
    background: linear-gradient(135deg, var(--rose-light) 0%, var(--rose) 100%);
    box-shadow: 0 10px 30px rgba(212,96,122,0.40);
    transform: translateY(-2px);
  }

  .stp-btn-outline {
    background: transparent;
    border: 2px solid var(--rose);
    color: var(--rose-deep);
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 34px;
    border-radius: 12px;
    text-decoration: none;
  }
  .stp-btn-outline:hover {
    background: var(--rose);
    color: #fff;
    transform: translateY(-2px);
  }

  .stp-section-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.20em;
    text-transform: uppercase;
    color: var(--rose);
  }

  .stp-benefit-card {
    background: var(--white);
    border: 1px solid rgba(212,96,122,0.12);
    border-radius: 16px;
    padding: 24px 20px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    transition: all 0.3s ease;
  }
  .stp-benefit-card:hover {
    border-color: var(--rose);
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }

  .stp-step-card {
    background: var(--white);
    border: 1px solid rgba(212,96,122,0.12);
    border-radius: 18px;
    padding: 36px 28px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .stp-step-card::before {
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
  .stp-step-card:hover {
    border-color: var(--rose);
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
  }
  .stp-step-card:hover::before {
    transform: scaleX(1);
  }

  .stp-faq {
    background: var(--white);
    border: 1px solid rgba(212,96,122,0.12);
    border-radius: 16px;
    overflow: hidden;
    transition: border-color 0.3s;
    margin-bottom: 16px;
  }
  .stp-faq.open {
    border-color: var(--rose);
  }
  .stp-faq-q {
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    padding: 24px 28px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    font-family: 'DM Sans', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--ink);
    transition: background 0.2s;
  }
  .stp-faq-q:hover {
    background: var(--rose-pale);
  }
  .stp-faq-a {
    padding: 0 28px 24px;
    font-family: 'DM Sans', sans-serif;
    font-size: 1.05rem;
    color: var(--text-body);
    line-height: 1.8;
    font-weight: 400;
  }

  .stp-related-card {
    background: var(--white);
    border: 1px solid rgba(212,96,122,0.12);
    border-radius: 18px;
    padding: 32px 26px;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
    gap: 14px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
  }
  .stp-related-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--rose), var(--rose-deep));
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  .stp-related-card:hover {
    border-color: var(--rose);
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }
  .stp-related-card:hover::before {
    transform: scaleX(1);
  }

  .stp-info-box {
    background: linear-gradient(135deg, var(--white) 0%, var(--blush) 100%);
    border: 2px solid var(--rose-bdr);
    border-radius: 20px;
    padding: 32px 28px;
    position: sticky;
    top: 24px;
  }

  @media (max-width: 1024px) {
    .stp-btn-rose, .stp-btn-outline { font-size: 0.9rem; padding: 16px 32px; }
    .stp-faq-q { font-size: 1.05rem; padding: 20px 24px; }
    .stp-faq-a { font-size: 1rem; padding: 0 24px 20px; }
  }

  @media (max-width: 768px) {
    .stp-btn-rose, .stp-btn-outline { font-size: 0.85rem; padding: 14px 28px; }
    .stp-faq-q { font-size: 1rem; padding: 18px 20px; }
    .stp-faq-a { font-size: 0.95rem; padding: 0 20px 18px; }
    .stp-info-box { position: static; }
  }
`;

const iconMap: Record<string, React.ElementType> = {
  Droplets, Sparkles, Zap, Crosshair, Sun, Waves, Lightbulb,
  Layers, Pen, Circle, Shield: ShieldCheck, FlaskConical, Leaf, Star,
  ShieldCheck, RefreshCw, SunMedium: Sun, Citrus: Leaf,
};
const getIcon = (name: string): React.ElementType => iconMap[name] || Sparkles;

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
  benefits_detailed: string[];
}

const treatmentExtras: Record<string, TreatmentExtra> = {
  default: {
    tagline: 'Advanced skin treatment for visible, lasting results that transform your complexion',
    duration: '45–60 minutes',
    sessions: '3–6 sessions recommended',
    downtime: 'Minimal to none',
    idealFor: 'All skin types and tones',
    howItWorks:
      'Our certified dermatologists at The Golden Gem use clinically proven protocols and FDA-cleared technology to deliver safe, effective results tailored to your unique skin concerns. Each treatment is personalised after a thorough skin analysis to ensure optimal results and safety.',
    benefits_detailed: [
      'Clinically proven improvement in skin texture and tone',
      'Long-lasting results with proper maintenance',
      'Safe for all skin types including sensitive skin',
      'Minimal discomfort during treatment',
      'Quick recovery time fits busy lifestyles',
      'Natural-looking enhancement',
    ],
    steps: [
      {
        title: 'Comprehensive Skin Consultation',
        desc: 'Our expert dermatologist thoroughly analyses your skin type, specific concerns, medical history and aesthetic goals to design a completely personalised treatment plan tailored just for you.',
      },
      {
        title: 'Professional Preparation',
        desc: 'The treatment area is carefully cleansed and prepped with professional-grade medical products. We ensure your skin is optimally prepared to maximize treatment effectiveness and safety.',
      },
      {
        title: 'Precision Treatment Application',
        desc: 'The procedure is performed with meticulous precision using state-of-the-art, FDA-approved equipment by our highly trained and certified skin specialists.',
      },
      {
        title: 'Post-Treatment Care & Guidance',
        desc: 'Soothing serums, moisturizers and broad-spectrum SPF protection are applied. You receive detailed aftercare instructions and follow-up support for optimal healing.',
      },
    ],
    faqs: [
      {
        q: 'Is this treatment safe for Indian and darker skin tones?',
        a: 'Yes, absolutely. All our treatments are specifically calibrated and extensively tested for diverse Indian skin tones. Our dermatologists have specialized experience working with South Asian skin types and understand the unique needs and sensitivities.',
      },
      {
        q: 'How many treatment sessions will I need to see results?',
        a: 'The number of sessions depends on your individual skin concern, severity and aesthetic goals. Most clients see optimal, long-lasting results within 3–6 sessions, typically spaced 2–4 weeks apart for best outcomes.',
      },
      {
        q: 'Is there any downtime after the treatment?',
        a: 'Downtime is minimal for most of our treatments. Some may cause mild temporary redness or sensitivity for 24–48 hours, which subsides quickly. Most clients return to normal activities immediately.',
      },
      {
        q: 'When will I start seeing visible results?',
        a: 'Many clients notice improvements in skin texture and radiance after the very first session. However, optimal, long-lasting results typically develop progressively over 4–6 weeks as your skin naturally regenerates collagen.',
      },
      {
        q: 'Can I combine this with other skin treatments?',
        a: 'Yes, we often recommend complementary treatments for enhanced, comprehensive results. Our dermatologists will advise the best combination approach during your personalized consultation.',
      },
    ],
    aftercare: [
      'Avoid direct sun exposure for at least 48 hours post-treatment',
      'Apply broad-spectrum SPF 50+ sunscreen daily without fail',
      'Keep skin well hydrated with a gentle, fragrance-free moisturiser',
      'Avoid harsh chemical exfoliants and scrubs for 5–7 days',
      'Do not pick, scratch or touch treated areas',
      'Follow your personalized aftercare plan provided by our team',
    ],
  },
  'vampire-facial': {
    tagline: "Harness your body's own natural healing power for radiant, youthful skin",
    duration: '60–75 minutes',
    sessions: '3–4 sessions recommended',
    downtime: '24–48 hours mild redness',
    idealFor: 'Fine lines, dull skin, acne scars, uneven texture',
    howItWorks:
      "The Vampire Facial (PRP – Platelet Rich Plasma) uses your own blood's natural growth factors to stimulate collagen production and accelerate skin renewal. A small blood sample is drawn, spun in a centrifuge to concentrate the platelet-rich plasma, and then precisely micro-needled into the skin. The growth factors trigger deep tissue regeneration for visibly firmer, smoother, more radiant skin.",
    benefits_detailed: [
      'Uses your own blood - 100% natural and biocompatible',
      'Stimulates natural collagen and elastin production',
      'Improves skin texture, tone and overall radiance',
      'Reduces fine lines, wrinkles and acne scars',
      'Long-lasting rejuvenation (12-18 months)',
      'Safe with zero risk of allergic reaction',
    ],
    steps: [
      {
        title: 'Blood Sample Collection',
        desc: 'A small amount of your blood is collected using a standard medical procedure — exactly like a routine blood test. Quick and comfortable.',
      },
      {
        title: 'PRP Extraction & Concentration',
        desc: 'The sample is placed in a medical-grade centrifuge to separate and concentrate the platelet-rich plasma (PRP), isolating the powerful growth factors.',
      },
      {
        title: 'Micro-Needling Application',
        desc: 'After applying topical numbing cream, the concentrated PRP is applied while micro-needling creates controlled micro-channels for deep penetration into the dermis.',
      },
      {
        title: 'Soothing Serum & Recovery',
        desc: 'Calming, hydrating serums are applied post-treatment. Mild redness typically fades within 24–48 hours, revealing glowing, rejuvenated skin.',
      },
    ],
    faqs: [
      {
        q: 'Does the Vampire Facial hurt or cause discomfort?',
        a: 'A topical numbing cream is applied 20-30 minutes before the procedure, making it very comfortable. Most clients report feeling only a mild tingling sensation during treatment.',
      },
      {
        q: 'How long do Vampire Facial results last?',
        a: 'Results typically last 12–18 months with proper skincare. Maintenance sessions every 6–12 months help sustain and enhance the rejuvenating benefits.',
      },
      {
        q: 'Is PRP treatment safe? Are there any risks?',
        a: 'Absolutely safe. Since PRP uses your own blood, there is zero risk of allergic reaction, rejection or adverse effects. It is one of the safest regenerative aesthetic treatments available today.',
      },
      {
        q: 'When will I see visible results from PRP treatment?',
        a: 'Initial improvements in skin texture and radiance appear within 2–3 weeks as collagen synthesis begins. Full, optimal results develop progressively over 2–3 months.',
      },
      {
        q: 'Can I wear makeup after the Vampire Facial?',
        a: 'We recommend avoiding makeup for 24 hours post-treatment to allow your skin to breathe and heal properly. After 24 hours, you can resume your normal makeup routine.',
      },
    ],
    aftercare: [
      'Avoid washing your face for 4–6 hours immediately after treatment',
      'Apply broad-spectrum SPF 50+ starting the next morning',
      'Stay well hydrated — drink plenty of water daily',
      'Avoid saunas, steam rooms and intense exercise for 48 hours',
      'Do not apply active ingredients (retinol, AHAs, BHAs) for 5 days',
      'Use only the prescribed gentle moisturiser during recovery',
    ],
  },
  hydrafacial: {
    tagline: 'Deep hydration infusion for an instant, radiant glow that lasts',
    duration: '45–60 minutes',
    sessions: 'Monthly maintenance recommended',
    downtime: 'None - immediate results',
    idealFor: 'All skin types, especially dehydrated & dull skin',
    howItWorks:
      'HydraFacial uses patented Vortex-Fusion technology that simultaneously cleanses, extracts and infuses the skin with intensive hydrating serums. Unlike traditional facials, it delivers continuous moisture and nutrients deep into the dermis while gently removing impurities and dead skin — leaving skin visibly plump, clear, smooth and luminous immediately after treatment.',
    benefits_detailed: [
      'Instant visible glow and hydration',
      'Deep cleansing and pore refinement',
      'Improves skin texture and tone',
      'Reduces fine lines and wrinkles',
      'Suitable for all skin types including sensitive',
      'Zero downtime - perfect before events',
    ],
    steps: [
      {
        title: 'Cleanse & Gentle Peel',
        desc: 'Dead skin cells are gently removed using a carefully formulated blend of glycolic and salicylic acids, revealing fresh, healthy skin beneath.',
      },
      {
        title: 'Painless Extraction',
        desc: 'Automated, painless suction technology removes blackheads, whiteheads and congestion from pores without discomfort or irritation.',
      },
      {
        title: 'Deep Hydration Infusion',
        desc: 'Powerful antioxidants, peptides and hyaluronic acid are infused deep into freshly cleansed pores for maximum nourishment and hydration.',
      },
      {
        title: 'Protection & Glow',
        desc: 'Moisturizing serums and SPF are applied to lock in hydration. Your skin looks instantly radiant, plump and refreshed.',
      },
    ],
    faqs: [
      {
        q: 'Is HydraFacial suitable for sensitive or acne-prone skin?',
        a: 'Yes! HydraFacial is one of the most gentle, non-irritating treatments available. It is suitable for all skin types, including sensitive, rosacea-prone and acne-prone skin.',
      },
      {
        q: 'How often should I get a HydraFacial treatment?',
        a: 'Monthly treatments are ideal for maintaining optimal skin health and radiance. For specific skin concerns, more frequent sessions may be recommended initially by your dermatologist.',
      },
      {
        q: 'Will I see immediate results after HydraFacial?',
        a: 'Yes — most clients notice an immediate visible glow, improved hydration, smoother texture and refined pores right after their first session. Results continue to improve over the following days.',
      },
      {
        q: 'Can I get a HydraFacial before an important event?',
        a: 'Absolutely! With zero downtime and instant results, HydraFacial is perfect to schedule the day before weddings, parties or any special occasion for a radiant skin boost.',
      },
      {
        q: 'What is the difference between Basic and Advanced HydraFacial?',
        a: 'The Advanced version includes additional targeted boosters (brightening, anti-aging, clarifying) and LED light therapy tailored to your specific skin concerns like pigmentation or acne.',
      },
    ],
    aftercare: [
      'Apply broad-spectrum SPF 50+ sunscreen daily',
      'Avoid direct heat sources (sauna, steam) for 24 hours',
      'Use a gentle, fragrance-free moisturiser',
      'Do not use retinol or chemical exfoliants for 48 hours',
      'Stay well hydrated to prolong the plumping effect',
      'Schedule monthly maintenance sessions for best long-term results',
    ],
  },
};

const getExtra = (slug: string): TreatmentExtra =>
  treatmentExtras[slug] ?? treatmentExtras['default'];

const FaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`stp-faq${open ? ' open' : ''}`}>
      <button className="stp-faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        {open ? <ChevronUp size={20} color="#d4607a" /> : <ChevronDown size={20} color="#d4607a" />}
      </button>
      {open && <div className="stp-faq-a">{a}</div>}
    </div>
  );
};

const SkinTreatmentPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [modalOpen, setModalOpen] = useState(false);

  const treatment = skinTreatments.find((t) => t.slug === slug);

  const image = treatment ? treatmentImages[treatment.slug] : null;

  const concernExtra = skinConcernExtras[slug];
  const diagnosisExtra = skinDiagnosisExtras[slug];

  const pageName =
    treatment?.name ||
    concernExtra?.name ||
    diagnosisExtra?.name ||
    'Skin Care';

  let extra: any;

  // priority: treatment → concern → diagnosis
  if (treatment) {
    extra = getExtra(treatment.slug);
  } else if (concernExtra) {
    extra = concernExtra;
  } else if (diagnosisExtra) {
    extra = diagnosisExtra;
  } else {
    extra = getExtra('default');
  }

  // ✅ unified safe data (THIS IS THE KEY FIX)
  const safeExtra = {
    benefits:
      treatment?.benefits ||
      diagnosisExtra?.benefits ||
      concernExtra?.solutions ||
      [],

    steps:
      treatment?.steps ||
      diagnosisExtra?.process ||
      [],

    aftercare:
      treatment?.aftercare || [],

    faqs:
      extra?.faqs || [],
  };
  if (!treatment && !concernExtra && !diagnosisExtra) {
    return (
      <div className="stp-wrap min-h-screen bg-background flex flex-col">
        <style>{STYLE}</style>
        <main className="flex-grow flex items-center justify-center p-10">
          <div style={{ textAlign: 'center' }}>
            <h1 className="stp-display" style={{
              fontSize: '2.5rem',
              color: 'var(--ink)',
              marginBottom: 20,
            }}>
              Treatment Not Found
            </h1>
            <p className="stp-body" style={{
              color: 'var(--text-muted)',
              marginBottom: 32,
              fontSize: '1.1rem',
            }}>
              The treatment you are looking for does not exist.
            </p>
            <Link to="/skin-clinic" className="stp-btn-rose">
              <ArrowLeft size={16} /> Back to Skin Clinic
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const iconName =
    treatment?.icon ||
    concernExtra?.icon ||
    diagnosisExtra?.icon ||
    'Sparkles';

  const IconComponent = getIcon(iconName);
  const relatedTreatments = treatment
    ? skinTreatments
      .filter((t) => t.slug !== treatment.slug)
      .slice(0, 3)
    : [];

  return (
    <div className="stp-wrap min-h-screen bg-background flex flex-col">
      <style>{STYLE}</style>

      <SEO
        title={`${pageName} | Golden Gem Skin Clinic Chennai`}
        description={treatment?.description || extra?.overview || ''}
        canonical={`https://thegoldengemhairclinic.com/skin/${slug}`}
      />

      <EnquiryForm
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={() => setModalOpen(false)}
        treatment={pageName}
      />

      <main className="flex-grow">
        {/* HERO */}
        <section style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse 70% 80% at 70% 40%, rgba(212,96,122,0.16) 0%, transparent 65%), linear-gradient(155deg, #fff9fb 0%, #fde8ef 55%, #f5d0db 100%)',
        }}>
          {/* Decorative elements */}
          {[600, 460, 340].map((size, i) => (
            <div key={size} style={{
              position: 'absolute',
              right: i === 0 ? '-10%' : i === 1 ? '-4%' : '2%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: size,
              height: size,
              borderRadius: '50%',
              border: `1px solid rgba(212,96,122,${i === 2 ? '0.16' : '0.08'})`,
              pointerEvents: 'none',
            }} />
          ))}

          <div className="stp-float" style={{
            position: 'absolute',
            right: '12%',
            top: '20%',
            opacity: 0.12,
          }}>
            <IconComponent style={{ width: 100, height: 100, color: '#d4607a' }} />
          </div>

          <div style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '140px 48px 90px',
            width: '100%',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: 60,
              alignItems: 'center',
            }}>
              {/* Left content */}
              <div>
                <nav className="stp-body" style={{
                  display: 'flex',
                  gap: 10,
                  marginBottom: 32,
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  flexWrap: 'wrap',
                }}>
                  <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
                  <span>/</span>
                  <Link to="/skin-clinic" style={{ color: 'var(--text-muted)' }}>Skin Clinic</Link>
                  <span>/</span>
                  <span style={{ color: 'var(--rose)', fontWeight: 600 }}>{pageName}</span>
                </nav>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 28,
                  padding: '8px 20px',
                  border: '1px solid var(--rose-bdr)',
                  borderRadius: 100,
                  background: 'var(--rose-pale)',
                }}>
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'var(--rose)',
                    animation: 'stp-pulse 2s infinite',
                  }} />
                  <span className="stp-section-label" style={{ fontSize: '0.75rem' }}>
                    Advanced Skin Treatment
                  </span>
                </div>

                <h1 className="stp-display" style={{
                  fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                  lineHeight: 1.1,
                  marginBottom: 24,
                  fontWeight: 700,
                  color: 'var(--ink)',
                }}>
                  {pageName}
                </h1>

                <p className="stp-body" style={{
                  fontSize: '1.2rem',
                  lineHeight: 1.8,
                  marginBottom: 40,
                  color: 'var(--text-body)',
                  fontWeight: 400,
                }}>
                  {extra?.tagline}
                </p>

                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <button onClick={() => setModalOpen(true)} className="stp-btn-rose">
                    <Calendar size={18} /> Book This Treatment
                  </button>
                  <Link to="/skin-clinic" className="stp-btn-outline">
                    <ArrowLeft size={16} /> All Treatments
                  </Link>
                </div>
              </div>

              {/* Right image */}
              {image && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={image}
                    alt={pageName}
                    style={{
                      width: '100%',
                      maxWidth: 460,
                      borderRadius: 24,
                      objectFit: 'cover',
                      boxShadow: '0 30px 70px rgba(212,96,122,0.28)',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Quick info bar */}
        <section style={{
          background: 'var(--white)',
          borderTop: '1px solid var(--rose-bdr)',
          borderBottom: '1px solid var(--rose-bdr)',
          padding: '40px 48px',
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 32,
            }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: 'var(--rose-pale)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Clock size={24} color="#d4607a" />
                </div>
                <div>
                  <div className="stp-body" style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    marginBottom: 4,
                  }}>
                    Duration
                  </div>
                  <div className="stp-body" style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                  }}>
                    {extra?.duration}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: 'var(--rose-pale)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Target size={24} color="#d4607a" />
                </div>
                <div>
                  <div className="stp-body" style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    marginBottom: 4,
                  }}>
                    Sessions
                  </div>
                  <div className="stp-body" style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                  }}>
                    {extra?.sessions}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: 'var(--rose-pale)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Shield size={24} color="#d4607a" />
                </div>
                <div>
                  <div className="stp-body" style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    marginBottom: 4,
                  }}>
                    Downtime
                  </div>
                  <div className="stp-body" style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                  }}>
                    {extra?.downtime}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: 'var(--rose-pale)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Users size={24} color="#d4607a" />
                </div>
                <div>
                  <div className="stp-body" style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    marginBottom: 4,
                  }}>
                    Ideal For
                  </div>
                  <div className="stp-body" style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                  }}>
                    {extra?.idealFor}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section style={{ padding: '100px 48px', background: 'var(--cream)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 380px',
              gap: 60,
              alignItems: 'start',
            }}>

              {/* LEFT */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>

                {/* Overview */}
                <div>
                  <span className="stp-section-label" style={{ marginBottom: 20, display: 'block' }}>
                    Overview
                  </span>

                  <h2 className="stp-display" style={{
                    fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                    marginBottom: 24,
                    fontWeight: 600,
                  }}>
                    About <em style={{ color: 'var(--rose)' }}>{pageName}</em>
                  </h2>

                  <div style={{
                    width: 70,
                    height: 3,
                    background: 'linear-gradient(90deg, var(--rose), var(--rose-deep))',
                    marginBottom: 28,
                  }} />

                  <p className="stp-body" style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.9,
                    color: 'var(--text-body)',
                  }}>
                    {extra?.overview || ''}
                  </p>
                </div>


                {/* Benefits */}
                <div>
                  <span className="stp-section-label">What You Gain</span>

                  <h2 className="stp-display" style={{ marginBottom: 32 }}>
                    Key <em style={{ color: 'var(--rose)' }}>Benefits</em>
                  </h2>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 18,
                  }}>
                    {safeExtra.benefits.map((benefit, i) => (
                      <div key={i} className="stp-benefit-card">
                        <CheckCircle size={22} color="#d4607a" />
                        <span className="stp-body">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>


                {/* Steps (ONLY IF EXISTS) */}
                {safeExtra.steps.length > 0 && (
                  <div>
                    <span className="stp-section-label">The Process</span>

                    <h2 className="stp-display" style={{ marginBottom: 32 }}>
                      Step-by-Step <em style={{ color: 'var(--rose)' }}>Journey</em>
                    </h2>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: 24,
                    }}>
                      {safeExtra.steps.map((step, i) => (
                        <div key={i} className="stp-step-card">
                          <div style={{
                            width: 48,
                            height: 48,
                            borderRadius: 12,
                            background: 'linear-gradient(135deg, var(--rose), var(--rose-deep))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 20,
                          }}>
                            <span style={{ color: '#fff', fontWeight: 700 }}>
                              {i + 1}
                            </span>
                          </div>

                          <h3>{step.title}</h3>
                          <p>{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}


                {/* Aftercare (ONLY FOR TREATMENTS) */}
                {safeExtra.aftercare.length > 0 && (
                  <div style={{
                    background: 'var(--white)',
                    border: '2px solid var(--rose-bdr)',
                    borderRadius: 20,
                    padding: 40,
                  }}>
                    <h3>
                      Post-Treatment <em style={{ color: 'var(--rose)' }}>Aftercare</em>
                    </h3>

                    <div style={{ display: 'grid', gap: 16 }}>
                      {safeExtra.aftercare.map((tip, i) => (
                        <div key={i} style={{ display: 'flex', gap: 12 }}>
                          <CheckCircle size={20} color="#d4607a" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}


                {/* FAQs */}
                {safeExtra.faqs.length > 0 && (
                  <div>
                    <span className="stp-section-label">Have Questions?</span>

                    <h2 className="stp-display" style={{ marginBottom: 32 }}>
                      Frequently Asked <em style={{ color: 'var(--rose)' }}>Questions</em>
                    </h2>

                    {safeExtra.faqs.map((faq, i) => (
                      <FaqItem key={i} {...faq} />
                    ))}
                  </div>
                )}

              </div>


              <div className="stp-info-box" style={{
                background: 'linear-gradient(180deg, #fff, #fff5f7)',
                border: '1px solid var(--rose-bdr)',
                borderRadius: 20,
                padding: 28,
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                position: 'sticky',
                top: 150,
              }}>

                {/* Title */}
                <h3 className="stp-display" style={{
                  textAlign: 'center',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  marginBottom: 12,
                  color: 'var(--ink)'
                }}>
                  Ready to Begin?
                </h3>

                {/* Subtitle */}
                <p className="stp-body" style={{
                  textAlign: 'center',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--text-body)',
                  marginBottom: 22
                }}>
                  Book your free consultation and start your skin transformation journey today.
                </p>

                {/* CTA BUTTON */}
                <button
                  onClick={() => setModalOpen(true)}
                  className="stp-btn-rose"
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: 10,
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    marginBottom: 12
                  }}
                >
                  <Calendar size={16} style={{ marginRight: 6 }} />
                  Book Free Consultation
                </button>

                {/* CALL BUTTON */}
                <a
                  href="tel:+918122229557"
                  className="stp-btn-outline"
                  style={{
                    width: '100%',
                    padding: '13px',
                    borderRadius: 10,
                    fontSize: '0.9rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 6,
                    marginBottom: 24
                  }}
                >
                  <Phone size={16} />
                  Call Now
                </a>

                {/* Divider */}
                <div style={{
                  height: 1,
                  background: 'linear-gradient(90deg, transparent, var(--rose-bdr), transparent)',
                  marginBottom: 20
                }} />

                {/* TRUST POINTS */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { icon: ShieldCheck, text: 'FDA Approved Treatments' },
                    { icon: Award, text: 'Certified Dermatologists' },
                    { icon: Star, text: '10,000+ Happy Clients' },
                    { icon: Heart, text: '98% Satisfaction Rate' }
                  ].map((item) => (
                    <div key={item.text} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10
                    }}>
                      <div style={{
                        width: 34,
                        height: 34,
                        borderRadius: 10,
                        background: 'var(--rose-pale)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <item.icon size={16} color="#d4607a" />
                      </div>

                      <span className="stp-body" style={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: 'var(--ink)'
                      }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Related treatments */}
        {relatedTreatments.length > 0 && (
          <section style={{
            padding: '100px 48px',
            background: 'linear-gradient(170deg, var(--blush) 0%, var(--blush-2) 100%)',
          }}>
            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <span className="stp-section-label" style={{ marginBottom: 20, display: 'block' }}>
                  Explore More
                </span>
                <h2 className="stp-display" style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                  fontWeight: 600,
                  marginBottom: 20,
                }}>
                  Related <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Treatments</em>
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 28,
              }}>
                {relatedTreatments.map((t) => {
                  const RelIcon = getIcon(t.icon);
                  return (
                    <Link key={t.slug} to={`/skin/${t.slug}`} className="stp-related-card">
                      <div style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background: 'var(--rose-pale)',
                        border: '1px solid rgba(212,96,122,0.18)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <RelIcon size={26} color="#d4607a" />
                      </div>

                      <h3 className="stp-display" style={{
                        fontSize: '1.35rem',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        lineHeight: 1.3,
                      }}>
                        {t.name}
                      </h3>

                      <p className="stp-body" style={{
                        fontSize: '1.05rem',
                        color: 'var(--text-body)',
                        lineHeight: 1.75,
                        flex: 1,
                      }}>
                        {t.description}
                      </p>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        marginTop: 8,
                      }}>
                        <span className="stp-body" style={{
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: 'var(--rose)',
                        }}>
                          Learn More
                        </span>
                        <ArrowRight size={16} color="#d4607a" />
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div style={{ textAlign: 'center', marginTop: 50 }}>
                <Link to="/skin-clinic" className="stp-btn-outline">
                  <ArrowLeft size={16} /> View All Treatments
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ padding: '100px 48px', background: 'var(--cream)' }}>
          <div style={{ maxWidth: 920, margin: '0 auto' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(212,96,122,0.12) 0%, rgba(212,96,122,0.04) 100%)',
              border: '2px solid var(--rose-bdr)',
              borderRadius: 28,
              padding: '70px 50px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,96,122,0.08) 0%, transparent 70%)',
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="stp-section-label" style={{ marginBottom: 24, display: 'block' }}>
                  Ready to Transform?
                </span>

                <h2 className="stp-display" style={{
                  fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                  fontWeight: 600,
                  marginBottom: 28,
                }}>
                  Start Your Skin<br />
                  <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Transformation Today</em>
                </h2>

                <p className="stp-body" style={{
                  fontSize: '1.15rem',
                  color: 'var(--text-body)',
                  maxWidth: 580,
                  margin: '0 auto 40px',
                  lineHeight: 1.8,
                }}>
                  Book a complimentary consultation with our expert dermatologists and discover
                  the personalized treatment plan designed specifically for you.
                </p>

                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={() => setModalOpen(true)} className="stp-btn-rose" style={{
                    padding: '20px 42px',
                    fontSize: '1rem',
                  }}>
                    <Calendar size={20} /> Book Free Consultation
                  </button>
                  <a href="tel:+918122229557" className="stp-btn-outline" style={{
                    padding: '18px 40px',
                    fontSize: '1rem',
                  }}>
                    <Phone size={20} /> Call Us Now
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

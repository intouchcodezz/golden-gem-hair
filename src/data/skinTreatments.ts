// ✅ IMPORT IMAGES FIRST
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

// ✅ TYPE
export interface SkinTreatment {
  slug: string;
  name: string;
  description: string;
  benefits: string[];
  icon: string;
}

// ✅ IMAGE MAP (THIS IS IMPORTANT)
export const treatmentImages: Record<string, string> = {
  "vampire-facial": vampire,
  "pumpkin-facial": pumpkin,
  "miracle-facial": miracle,
  "mda-microdermabrasion": MDA,
  "mda-organic-peel": organicpeel,
  "mda-rejuvenating-therapy": rejuvenation,
  "botox": botox,
  "dermal-fillers": dermafillers,
  "thread-lift": threadlift,
  "hifu": HIFU,
  "exo-glo-therapy": exoglo,
  "fco2-laser": fco2,
  "q-switch-laser": qswitch,
  "photofacial": photofacial,
  "laser-hair-reduction": laserhairreduction,
  "chemical-peel": chemicalpeel,
  "melanobreak-therapy": melanobreak,
  "microblading": microblading,
  "anti-acne-therapy": antiacne,
  "hydrafacial": hydra,
};

// ✅ TREATMENTS DATA
export const skinTreatments: SkinTreatment[] = [
  {
    slug: "vampire-facial",
    name: "Vampire Facial",
    description: "Advanced PRP facial that rejuvenates skin and stimulates collagen production.",
    benefits: [
      "Stimulates natural collagen production",
      "Reduces fine lines and wrinkles",
      "Improves skin texture and tone",
      "Minimally invasive with natural results",
    ],
    icon: "Droplets",
  },
  {
    slug: "mda-microdermabrasion",
    name: "MDA (Microdermabrasion)",
    description: "A gentle exfoliation treatment that removes dead skin cells and improves skin texture.",
    benefits: [
      "Deep exfoliation of dead skin cells",
      "Improved skin clarity and brightness",
      "Reduced appearance of fine lines",
      "Enhanced absorption of skincare products",
    ],
    icon: "Sparkles",
  },
  {
    slug: "exo-glo-therapy",
    name: "EXO Glo Therapy",
    description: "Exosome-based skin regeneration therapy for brighter and youthful skin.",
    benefits: [
      "Advanced cellular regeneration",
      "Brighter and more radiant complexion",
      "Reduces signs of aging",
      "Improves skin elasticity",
    ],
    icon: "Zap",
  },
  {
    slug: "fco2-laser",
    name: "FCO2 Laser",
    description: "Fractional CO2 laser used for acne scars, pigmentation and skin resurfacing.",
    benefits: [
      "Effective acne scar reduction",
      "Pigmentation correction",
      "Skin resurfacing and smoothing",
      "Long-lasting results",
    ],
    icon: "Crosshair",
  },
  {
    slug: "q-switch-laser",
    name: "Q Switch Laser",
    description: "Laser treatment used to reduce pigmentation, melasma and tattoos.",
    benefits: [
      "Precise pigmentation targeting",
      "Melasma reduction",
      "Safe for all skin types",
      "Minimal downtime",
    ],
    icon: "Sun",
  },
  {
    slug: "hifu",
    name: "HIFU (High Intensity Focused Ultrasound)",
    description: "Non-surgical face lifting treatment that tightens sagging skin.",
    benefits: [
      "Non-surgical face lifting",
      "Tightens sagging skin naturally",
      "Stimulates collagen synthesis",
      "No downtime required",
    ],
    icon: "Waves",
  },
  {
    slug: "photofacial",
    name: "Photofacial",
    description: "Light-based therapy to treat pigmentation, sun damage and redness.",
    benefits: [
      "Treats sun damage and age spots",
      "Reduces facial redness",
      "Improves overall skin tone",
      "Gentle and effective",
    ],
    icon: "Lightbulb",
  },
  {
    slug: "laser-hair-reduction",
    name: "Laser Hair Reduction",
    description: "Advanced laser technology to permanently reduce unwanted hair.",
    benefits: [
      "Permanent hair reduction",
      "Suitable for all skin types",
      "Fast and comfortable sessions",
      "Smooth, hair-free skin",
    ],
    icon: "Zap",
  },
  {
    slug: "thread-lift",
    name: "Thread Lift",
    description: "Non-surgical facelift using dissolvable threads for skin tightening.",
    benefits: [
      "Immediate skin lifting effect",
      "Stimulates collagen production",
      "No surgery required",
      "Natural-looking results",
    ],
    icon: "Layers",
  },
  {
    slug: "microblading",
    name: "Microblading",
    description: "Semi-permanent eyebrow enhancement technique.",
    benefits: [
      "Natural-looking eyebrow definition",
      "Semi-permanent results lasting 1-2 years",
      "Customized to facial features",
      "Minimal maintenance required",
    ],
    icon: "Pen",
  },
  {
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    description: "Facial contouring treatment that restores lost volume and smooths wrinkles.",
    benefits: [
      "Restores facial volume",
      "Smooths deep wrinkles",
      "Enhances facial contours",
      "Immediate visible results",
    ],
    icon: "Circle",
  },
  {
    slug: "botox",
    name: "Botox",
    description: "Anti-aging injectable that relaxes facial muscles to reduce wrinkles.",
    benefits: [
      "Smooths dynamic wrinkles",
      "Prevents new wrinkle formation",
      "Quick 15-minute treatment",
      "Results last 3–6 months",
    ],
    icon: "Shield",
  },
  {
    slug: "melanobreak-therapy",
    name: "Melanobreak Therapy",
    description: "Advanced treatment for pigmentation and melasma reduction.",
    benefits: [
      "Targeted melanin reduction",
      "Treats stubborn melasma",
      "Even skin tone improvement",
      "Clinically proven formula",
    ],
    icon: "SunMedium",
  },
  {
    slug: "chemical-peel",
    name: "Chemical Peel",
    description: "Medical grade exfoliation treatment for glowing skin.",
    benefits: [
      "Medical-grade skin exfoliation",
      "Brightens dull complexion",
      "Reduces acne and blemishes",
      "Improves overall skin health",
    ],
    icon: "FlaskConical",
  },
  {
    slug: "mda-organic-peel",
    name: "MDA + Organic Peel",
    description: "Combination therapy for deep exfoliation and skin rejuvenation.",
    benefits: [
      "Dual action deep exfoliation",
      "Organic ingredients for sensitive skin",
      "Immediate glow and radiance",
      "No harsh chemicals",
    ],
    icon: "Leaf",
  },
  {
    slug: "hydrafacial",
    name: "Hydrafacial (Basic & Advanced)",
    description: "Hydration-based facial that cleanses, exfoliates and nourishes the skin.",
    benefits: [
      "Deep hydration infusion",
      "Cleanses and unclogs pores",
      "Suitable for all skin types",
      "Instant visible results",
    ],
    icon: "Droplets",
  },
];
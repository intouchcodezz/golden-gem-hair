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
  steps?: { title: string; desc: string }[];
  aftercare?: string[];
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

export interface SkinSolution {
  slug: string;
  name: string;
  description: string;
  causes: string[];
  treatments: string[];
  icon: string;
}

export const skinSolutions: SkinSolution[] = [
  {
    slug: "acne-scar",
    name: "Acne Scars",
    description:
      "Acne scars are permanent marks left after severe acne. They can appear as pits, dark spots, or uneven skin texture.",
    causes: [
      "Severe acne inflammation",
      "Delayed treatment of acne",
      "Picking or squeezing pimples",
      "Excess oil production"
    ],
    treatments: [
      "FCO2 Laser",
      "Microneedling (MDA)",
      "PRP (Vampire Facial)",
      "Chemical Peels"
    ],
    icon: "Zap"
  },

  {
    slug: "pigmentation",
    name: "Pigmentation",
    description:
      "Uneven skin tone or dark patches caused by excess melanin production.",
    causes: [
      "Sun exposure",
      "Hormonal imbalance",
      "Melasma",
      "Post-acne marks"
    ],
    treatments: [
      "Q Switch Laser",
      "Melanobreak Therapy",
      "Chemical Peels",
      "Photofacial"
    ],
    icon: "Sun"
  },

  {
    slug: "dark-circles",
    name: "Dark Circles",
    description:
      "Darkening under the eyes caused by lifestyle, genetics, or aging.",
    causes: [
      "Lack of sleep",
      "Genetics",
      "Screen exposure",
      "Thin under-eye skin"
    ],
    treatments: [
      "Under-eye fillers",
      "PRP therapy",
      "Chemical Peels",
      "Hydrafacial"
    ],
    icon: "Eye"
  },

  {
    slug: "open-pores",
    name: "Open Pores",
    description:
      "Visible enlarged pores that make skin look uneven and rough.",
    causes: [
      "Excess oil production",
      "Aging skin",
      "Sun damage",
      "Genetics"
    ],
    treatments: [
      "Laser treatments",
      "Chemical Peels",
      "Hydrafacial",
      "Microneedling"
    ],
    icon: "Circle"
  },

  {
    slug: "ageing-issues",
    name: "Ageing Issues",
    description:
      "Wrinkles, sagging, and fine lines due to collagen loss over time.",
    causes: [
      "Natural aging",
      "Sun exposure",
      "Lifestyle factors",
      "Loss of collagen"
    ],
    treatments: [
      "Botox",
      "Dermal Fillers",
      "HIFU",
      "Thread Lift"
    ],
    icon: "Clock"
  },

  {
    slug: "tanned-skin",
    name: "Tanned Skin",
    description:
      "Skin darkening caused by prolonged sun exposure.",
    causes: [
      "UV exposure",
      "Lack of sunscreen",
      "Outdoor lifestyle",
      "Heat damage"
    ],
    treatments: [
      "De-tan facials",
      "Chemical Peels",
      "Photofacial",
      "Hydrafacial"
    ],
    icon: "SunDim"
  }
];

export interface SkinDiagnosis {
  slug: string;
  name: string;
  description: string;
  purpose: string[];
  process: string[];
  idealFor: string[];
  icon: string;
}

export const skinDiagnosis: SkinDiagnosis[] = [
  {
    slug: "skin-analysis",
    name: "Skin Analysis",
    description:
      "A comprehensive evaluation of your skin condition using advanced tools to understand your skin type, concerns, and underlying issues.",
    purpose: [
      "Identify skin type (oily, dry, combination)",
      "Detect hidden skin damage",
      "Analyse pores, hydration & pigmentation",
      "Recommend personalized treatments"
    ],
    process: [
      "Initial consultation with dermatologist",
      "Digital skin scanning",
      "Assessment of skin layers",
      "Customized treatment plan creation"
    ],
    idealFor: [
      "First-time clients",
      "People unsure about their skin type",
      "Chronic skin issues",
      "Before starting any treatment"
    ],
    icon: "Scan"
  },

  {
    slug: "dermoscopy",
    name: "Dermoscopy",
    description:
      "A non-invasive diagnostic technique using a dermatoscope to examine skin lesions, pigmentation, and hair conditions in detail.",
    purpose: [
      "Examine skin lesions",
      "Diagnose pigmentation issues",
      "Hair & scalp analysis",
      "Detect early skin conditions"
    ],
    process: [
      "Magnified skin examination",
      "High-resolution imaging",
      "Dermatologist evaluation",
      "Detailed diagnosis report"
    ],
    idealFor: [
      "Pigmentation problems",
      "Hair fall issues",
      "Suspicious skin spots",
      "Detailed skin examination"
    ],
    icon: "Search"
  },

  {
    slug: "patch-test",
    name: "Patch Test",
    description:
      "A test performed to identify allergic reactions or sensitivities to skincare products or treatments.",
    purpose: [
      "Detect allergic reactions",
      "Ensure treatment safety",
      "Identify skin sensitivities",
      "Prevent adverse reactions"
    ],
    process: [
      "Application of small product sample",
      "Observation period (24–48 hrs)",
      "Monitoring for irritation",
      "Final evaluation by dermatologist"
    ],
    idealFor: [
      "Sensitive skin",
      "Before chemical peels",
      "Before laser treatments",
      "New skincare routines"
    ],
    icon: "Shield"
  }
];


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
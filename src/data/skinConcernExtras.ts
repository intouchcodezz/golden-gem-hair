export interface SkinConcernExtra {
    name: string;
    tagline: string;
    overview: string;
    causes: string[];
    solutions: string[];
    faqs: { q: string; a: string }[];
    icon: string; // ✅ ADD THIS
}

export const skinConcernExtras: Record<string, SkinConcernExtra> = {
    "acne-scar": {
        name: "Acne Scars",
        tagline: "Smooth, refine and restore your skin texture with advanced scar treatments",

        overview:
            "Acne scars develop when deep breakouts damage the underlying skin tissue. These scars can appear as depressions, pits, or uneven texture that affect skin smoothness and confidence. At The Golden Gem, we combine advanced dermatological technologies with personalized care to stimulate collagen, resurface damaged layers, and restore clear, refined skin.",

        causes: [
            "Severe inflammatory acne damaging deeper skin layers",
            "Picking, squeezing, or popping pimples",
            "Delayed or improper acne treatment",
            "Loss of collagen during healing process",
            "Genetic skin healing patterns"
        ],

        solutions: [
            "FCO2 Laser Resurfacing for deep scar remodeling",
            "Microneedling (MDA) to stimulate collagen regeneration",
            "PRP Vampire Facial for natural skin healing",
            "Medical-grade Chemical Peels for surface correction"
        ],

        faqs: [
            {
                q: "Can acne scars be completely removed?",
                a: "While deep scars may not be completely removed, advanced treatments can significantly reduce their appearance and improve overall skin texture."
            },
            {
                q: "How many sessions are required?",
                a: "Typically 3–6 sessions are recommended depending on the severity of scars and skin response."
            },
            {
                q: "Is the treatment painful?",
                a: "Most procedures involve minimal discomfort and are performed with numbing agents to ensure comfort."
            },
            {
                q: "How long does recovery take?",
                a: "Recovery varies by treatment, but most clients resume normal activities within a few days."
            }
        ],

        icon: "Zap"
    },

    pigmentation: {
        name: "Pigmentation",
        tagline: "Achieve brighter, even-toned skin with targeted pigmentation correction",

        overview:
            "Pigmentation issues occur due to excess melanin production, leading to dark patches, uneven tone, and dullness. Factors such as sun exposure, hormonal imbalance, and post-inflammatory marks can worsen the condition. Our treatments focus on reducing melanin buildup and restoring a radiant, uniform complexion.",

        causes: [
            "Excessive sun exposure without protection",
            "Hormonal changes (melasma)",
            "Post-acne marks and inflammation",
            "Aging and environmental damage",
            "Improper skincare routines"
        ],

        solutions: [
            "Q Switch Laser for targeted pigment breakdown",
            "Melanobreak Therapy for stubborn pigmentation",
            "Advanced Chemical Peels for skin renewal",
            "Photofacial (IPL) for tone correction"
        ],

        faqs: [
            {
                q: "Is pigmentation permanent?",
                a: "No, pigmentation can be effectively treated and controlled with proper care and maintenance."
            },
            {
                q: "Will pigmentation return after treatment?",
                a: "It can recur if sun protection is not maintained. Regular sunscreen use is essential."
            },
            {
                q: "How soon will I see results?",
                a: "Visible improvement can be seen within a few sessions, depending on severity."
            },
            {
                q: "Are these treatments safe for all skin types?",
                a: "Yes, treatments are customized based on your skin type and condition."
            }
        ],

        icon: "Sun"
    },

    "dark-circles": {
        name: "Dark Circles",
        tagline: "Rejuvenate and brighten your under-eye area for a youthful appearance",

        overview:
            "Dark circles can make you look tired, stressed, and older than you are. They are caused by a combination of lifestyle, genetics, and skin structure. At The Golden Gem, we offer advanced under-eye treatments to restore brightness, improve skin thickness, and enhance overall appearance.",

        causes: [
            "Lack of sleep and fatigue",
            "Genetic predisposition",
            "Thin under-eye skin showing blood vessels",
            "Dehydration and poor nutrition",
            "Excess screen exposure"
        ],

        solutions: [
            "Under-eye fillers for volume restoration",
            "PRP therapy for natural rejuvenation",
            "Hydrafacial for hydration and glow",
            "Mild chemical peels for pigmentation reduction"
        ],

        faqs: [
            {
                q: "Are under-eye fillers safe?",
                a: "Yes, when performed by experienced dermatologists, fillers are safe and highly effective."
            },
            {
                q: "How long do results last?",
                a: "Results can last between 6–12 months depending on the treatment."
            },
            {
                q: "Can dark circles be completely removed?",
                a: "They can be significantly reduced, improving brightness and overall appearance."
            },
            {
                q: "Is there downtime after treatment?",
                a: "Most treatments have minimal to no downtime."
            }
        ],

        icon: "Moon"
    }
};
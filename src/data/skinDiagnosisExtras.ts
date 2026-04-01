export interface SkinDiagnosisExtra {
    name: string;
    tagline: string;
    overview: string;
    benefits: string[];
    process: { title: string; desc: string }[];
    faqs: { q: string; a: string }[];
    icon: string; // ✅ ADD THIS
}

export const skinDiagnosisExtras: Record<string, SkinDiagnosisExtra> = {
    "skin-analysis": {
        name: "Skin Analysis",
        tagline: "Understand your skin at a deeper level before choosing treatments",

        overview:
            "Skin analysis is the foundation of effective skincare. Using advanced diagnostic tools and expert evaluation, we assess your skin type, hydration levels, pigmentation, pore condition, and underlying concerns. This allows us to create a fully personalized treatment plan that delivers safe, targeted, and long-lasting results.",

        benefits: [
            "Precise identification of your skin type and condition",
            "Early detection of hidden skin concerns",
            "Personalized treatment recommendations",
            "Improved effectiveness of all future treatments",
            "Avoidance of incorrect or harmful skincare routines"
        ],

        process: [
            {
                title: "Consultation",
                desc: "Discuss your skin concerns, lifestyle habits, and medical history with our dermatologist"
            },
            {
                title: "Advanced Skin Scanning",
                desc: "Digital imaging analyzes pores, hydration, pigmentation, and skin texture"
            },
            {
                title: "Detailed Diagnosis",
                desc: "Comprehensive evaluation of your skin’s current condition and future risks"
            },
            {
                title: "Personalized Treatment Plan",
                desc: "Customized skincare and treatment roadmap tailored to your goals"
            }
        ],

        faqs: [
            {
                q: "Is skin analysis necessary before treatment?",
                a: "Yes, it ensures treatments are tailored to your skin type, making them safer and more effective."
            },
            {
                q: "How long does the analysis take?",
                a: "Typically 15–30 minutes depending on the level of assessment required."
            },
            {
                q: "Is it suitable for all skin types?",
                a: "Yes, skin analysis is safe and recommended for all skin types and ages."
            },
            {
                q: "Will I get a treatment plan immediately?",
                a: "Yes, our dermatologist provides a customized plan right after the analysis."
            }
        ],

        icon: "Search"
    },

    dermoscopy: {
        name: "Dermoscopy",
        tagline: "High-precision skin and scalp analysis for accurate diagnosis",

        overview:
            "Dermoscopy is an advanced, non-invasive diagnostic technique that uses magnification and specialized lighting to examine skin and scalp conditions in detail. It helps dermatologists detect underlying issues that are not visible to the naked eye, enabling early diagnosis and accurate treatment planning.",

        benefits: [
            "Early detection of skin and scalp conditions",
            "Accurate and detailed diagnosis",
            "Completely non-invasive and painless procedure",
            "Helps differentiate between similar skin conditions",
            "Supports better treatment decisions and outcomes"
        ],

        process: [
            {
                title: "Initial Consultation",
                desc: "Discussion of symptoms and affected areas with the dermatologist"
            },
            {
                title: "Magnified Examination",
                desc: "Use of dermoscope to closely examine skin or scalp structures"
            },
            {
                title: "Image Capture",
                desc: "High-resolution images are recorded for detailed analysis"
            },
            {
                title: "Expert Evaluation",
                desc: "Dermatologist interprets findings and identifies underlying conditions"
            },
            {
                title: "Treatment Guidance",
                desc: "Based on diagnosis, a targeted treatment plan is recommended"
            }
        ],

        faqs: [
            {
                q: "Is dermoscopy painful?",
                a: "No, it is completely painless and non-invasive."
            },
            {
                q: "Do I need any preparation before the procedure?",
                a: "No special preparation is required. You can walk in for the procedure."
            },
            {
                q: "Can dermoscopy detect serious skin conditions?",
                a: "Yes, it helps in early detection of various skin issues, including complex conditions."
            },
            {
                q: "Is it safe for sensitive skin?",
                a: "Yes, dermoscopy is safe for all skin types, including sensitive skin."
            }
        ],

        icon: "Search"
    }
};
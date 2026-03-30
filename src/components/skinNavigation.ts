import vampire from '../assets/newlogo.jpg';
import botox from '../assets/newlogo.jpg';
import hydra from '../assets/newlogo.jpg';
import peel from '../assets/newlogo.jpg';
import laser from '../assets/newlogo.jpg';

export const skinNavigation = {
    treatments: {
        title: "Treatments",
        hasDropdown: true,
        subMenus: {
            facials: {
                name: "Facial Treatments",
                items: [
                    {
                        title: "Vampire Facial",
                        href: "/skin/vampire-facial",
                        image: vampire,
                        desc: "PRP based skin rejuvenation"
                    },
                    {
                        title: "Hydrafacial",
                        href: "/skin/hydrafacial",
                        image: hydra,
                        desc: "Deep cleansing hydration facial"
                    },
                    {
                        title: "Pumpkin Facial",
                        href: "/skin/pumpkin-facial",
                        image: hydra,
                        desc: "Vitamin rich glow facial"
                    }
                ]
            },

            antiAging: {
                name: "Anti Aging",
                items: [
                    {
                        title: "Botox",
                        href: "/skin/botox",
                        image: botox,
                        desc: "Wrinkle reduction treatment"
                    },
                    {
                        title: "Dermal Fillers",
                        href: "/skin/dermal-fillers",
                        image: botox,
                        desc: "Facial volume restoration"
                    },
                    {
                        title: "Thread Lift",
                        href: "/skin/thread-lift",
                        image: botox,
                        desc: "Non surgical facelift"
                    }
                ]
            },

            lasers: {
                name: "Laser Treatments",
                items: [
                    {
                        title: "FCO2 Laser",
                        href: "/skin/fco2-laser",
                        image: laser,
                        desc: "Acne scar resurfacing"
                    },
                    {
                        title: "Q Switch Laser",
                        href: "/skin/q-switch-laser",
                        image: laser,
                        desc: "Pigmentation removal"
                    },
                    {
                        title: "Laser Hair Reduction",
                        href: "/skin/laser-hair-reduction",
                        image: laser,
                        desc: "Permanent hair reduction"
                    }
                ]
            },

            skinCare: {
                name: "Skin Care",
                items: [
                    {
                        title: "Chemical Peel",
                        href: "/skin/chemical-peel",
                        image: peel,
                        desc: "Medical exfoliation"
                    },
                    {
                        title: "Melanobreak Therapy",
                        href: "/skin/melanobreak-therapy",
                        image: peel,
                        desc: "Melasma treatment"
                    },
                    {
                        title: "Anti Acne Therapy",
                        href: "/skin/anti-acne-therapy",
                        image: peel,
                        desc: "Acne treatment solutions"
                    }
                ]
            }
        }
    }
};
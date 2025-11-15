import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Star, Award } from 'lucide-react';
import EnquiryForm from './EnquiryModal';
import { Link } from 'react-router-dom';
import prp from '../assets/prp3.webp';
import ht from '../assets/ht.jpg';
import HairRejuvenation from '../assets/hairrejuvenation.jpg';
import folitreat from '../assets/folitreat.jpg'
import exogro from '../assets/exogro.webp'
import mesotherapy from '../assets/mesotherapy.jpg'
import gfc from '../assets/gfc.webp'
import smp from '../assets/SMP.jpg'
import ivhair from '../assets/ivhair.png'
import cellgraft from '../assets/cellgraft.webp'
import growththearpies from '../assets/growththearpies.jpeg'
import scalp from '../assets/scalp.jpg'

// Combined treatments data
const allTreatments = [
  {
    id: "prp-treatment",
    title: "Platelet Rich Plasma",
    description: "PRP therapy using your own blood platelets to stimulate hair growth naturally.",
    image: prp,
    category: "Hair",
    link: "/prp-treatment",
    rating: 4.8,
    duration: "45 min"
  },
  {
    id: "folitreat-hair-treatment",
    title: "Folitreat Hair Treatment",
    description: "An advanced hair revitalization therapy designed to strengthen roots, reduce hair fall, and promote healthy hair growth using clinically tested ingredients.",
    image: "https://images.pexels.com/photos/7750121/pexels-photo-7750121.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Hair",
    link: "/folitreat-treatment",
    rating: 4.9,
    duration: "60 min"
  },
  {
    id: "hair-transplant",
    title: "Hair Transplantation",
    description: "State-of-the-art follicular transplant for permanent hair restoration solution.",
    image: ht,
    category: "Hair",
    link: "/hair-transplant",
    rating: 4.9,
    duration: "4-6 hours"
  },
  {
    id: "scalp-pigmentation",
    title: "Scalp Micro Pigmentation",
    description: "Precision scalp tattooing technique for the appearance of fuller, thicker hair.",
    image: smp,
    category: "Hair",
    link: "/scalp-pigmentation",
    rating: 4.7,
    duration: "2-3 hours"
  },
  {
    id: "hair-rejuvenation",
    title: "Hair Rejuvenation Therapy",
    description: "Comprehensive therapy combining multiple techniques for optimal hair health.",
    image: HairRejuvenation,
    category: "Hair",
    link: "/hair-rejuvenation",
    rating: 4.8,
    duration: "90 min"
  },
  {
    id: "follitreat",
    title: "Follitreat Therapy",
    description: "Specialized follicular treatment for strengthening hair roots and preventing loss.",
    image: folitreat,
    category: "Hair",
    link: "/follitreat-therapy",
    rating: 4.6,
    duration: "75 min"
  },

  // Additional treatments (missed earlier)
  {
    id: "growth-therapies",
    title: "Growth Therapies",
    description: "Advanced combined protocols to stimulate new growth and strengthen existing follicles.",
    image: growththearpies,
    category: "Hair",
    link: "/hair-treatments/growth-therapies",
    rating: 4.7,
    duration: "60 min"
  },
  {
    id: "scalp-care",
    title: "Scalp Care",
    description: "Targeted scalp health programs to reduce inflammation, dandruff and optimize follicle environment.",
    image: scalp,
    category: "Hair",
    link: "/hair-treatments/scalp-care",
    rating: 4.6,
    duration: "45 min"
  },
  {
    id: "fue-transplant",
    title: "Hair Transplant FUE",
    description: "Minimally invasive follicular unit extraction for natural, permanent hair restoration.",
    image: "https://images.pexels.com/photos/27138344/pexels-photo-27138344.jpeg",
    category: "Hair",
    link: "/fue-transplant",
    rating: 4.9,
    duration: "4-6 hours"
  },
  {
    id: "gfc-treatment",
    title: "GFC (Growth Factor Concentrate)",
    description: "Concentrated growth factors for targeted follicle stimulation and scalp rejuvenation.",
    image:gfc,
    category: "Hair",
    link: "/gfc-treatment",
    rating: 4.6,
    duration: "60 min"
  },
  {
    id: "mesotherapy",
    title: "Mesotherapy",
    description: "Microinjections of vitamins and growth factors to revitalize hair and scalp health.",
    image: mesotherapy,
    category: "Hair",
    link: "/mesotherapy",
    rating: 4.5,
    duration: "45 min"
  },
  {
    id: "exogro",
    title: "Exogro Therapy",
    description: "A specialized topical and micro-infusion protocol to enhance hair quality and density.",
    image: exogro,
    link: "/exogro",
    rating: 4.5,
    duration: "60 min"
  },
  {
    id: "iv-hair-therapy",
    title: "IV Hair Therapy",
    description: "Intravenous nutrient infusions designed to support hair growth and overall scalp health.",
    image: ivhair,
    category: "Hair",
    link: "/iv-hair-therapy",
    rating: 4.6,
    duration: "90 min"
  },
  {
    id: "cell-graft",
    title: "Cell Graft Therapy",
    description: "Autologous cell grafting to restore follicular units and improve scalp regenerative capacity.",
    image: cellgraft,
    category: "Hair",
    link: "/cell-graft",
    rating: 4.7,
    duration: "75 min"
  },

];

const TreatmentsCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();
  const sectionRef = useRef<HTMLDivElement>(null);

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(allTreatments.length / itemsPerSlide);
  const autoplayDelay = 5000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (isAutoplay && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, autoplayDelay);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoplay, isHovered, totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const toggleAutoplay = () => setIsAutoplay(!isAutoplay);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-10 pb-16 overflow-hidden bg-gradient-hero"
      id='treatments' 
    >

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 `}>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-gray-900 mb-4">
            A one-stop solution for all your{' '}
            <span className="golden-gradient-text font-extrabold">
              hair and skin
            </span>
            {' '}problems
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience cutting-edge treatments with guaranteed results from certified specialists.
          </p>
        </div>

        {/* Carousel */}
        <div className={`mb-1`}>
          {/* Carousel Header */}
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <div className="flex justify-between items-center mb-8 flex-wrap">
              <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold flex items-center">
                <Star className="w-6 h-6 text-amber-400 animate-bounce mr-3" />
                <span className="golden-gradient-text mb-2">
                  Our Treatments
                </span>
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                className="w-12 h-12 bg-white/95 backdrop-blur-md border border-amber-400/30 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg text-gray-700 hover:bg-amber-400/90 hover:text-white hover:-translate-y-0.5 hover:scale-105 hover:shadow-amber-400/40 hover:shadow-2xl"
                onClick={toggleAutoplay}
                aria-label={isAutoplay ? 'Pause autoplay' : 'Start autoplay'}
              >
                {isAutoplay ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button
                className="w-12 h-12 bg-white/95 backdrop-blur-md border border-amber-400/30 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg text-gray-700 hover:bg-amber-400/90 hover:text-white hover:-translate-y-0.5 hover:scale-105 hover:shadow-amber-400/40 hover:shadow-2xl"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="w-12 h-12 bg-white/95 backdrop-blur-md border border-amber-400/30 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg text-gray-700 hover:bg-amber-400/90 hover:text-white hover:-translate-y-0.5 hover:scale-105 hover:shadow-amber-400/40 hover:shadow-2xl"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Carousel Wrapper */}
          <div
            className="relative overflow-hidden rounded-2xl bg-transparent"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="flex-shrink-0 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-0">
                    {allTreatments
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((treatment, index) => (
                        <Link
                        to={treatment.link} 
                          key={treatment.id}
                          className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer border border-gray-200 opacity-0 translate-y-5 hover:-translate-y-1 hover:shadow-xl group"
                          style={{
                            animation: 'cardSlideIn 0.6s ease-out forwards',
                            animationDelay: `${index * 0.1}s`
                          }}
                        >
                          {/* Image Container */}
                          <div className="relative h-64 overflow-hidden">
                            <img
                              src={treatment.image}
                              alt={treatment.title}
                              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                              <div className="flex flex-col items-center gap-2 text-white">
                                <Award className="w-6 h-6" />
                                <span className="font-semibold text-sm">Learn More</span>
                              </div>
                            </div>
                            {/* Category Badge */}
                            <div className="absolute top-3 left-3 bg-[#dfbe58] px-2.5 py-1 rounded text-xs font-semibold text-white shadow">
                              {treatment.category}
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-5">
                            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                              {treatment.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
                              {treatment.description}
                            </p>
                            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                              <div className="flex items-center gap-1 text-amber-500">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-sm font-semibold">{treatment.rating}</span>
                              </div>
                              <span className="text-xs text-gray-500 font-medium">
                                {treatment.duration}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full border-0 cursor-pointer transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-amber-400 scale-[1.3] shadow-[0_0_0_3px_rgba(251,191,36,0.3)]'
                    : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TreatmentsCarousel;

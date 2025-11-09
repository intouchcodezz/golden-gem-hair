import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@/assets/banner1.jpg";
import heroImage2 from "@/assets/banner2.jpg";
import heroImage3 from "@/assets/banner3.jpg";
import gsap from "gsap";

interface Slide {
  image: string;
  alt: string;
  title?: string;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const swirlRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const touchStartX = useRef(0);

  const slides: Slide[] = [
    { 
      image: heroImage1, 
      alt: "Featured banner showcasing premium products and services",
      title: "Welcome Banner"
    },
    { 
      image: heroImage2, 
      alt: "Special offers and promotional content highlight",
      title: "Promotional Banner"
    },
    { 
      image: heroImage3, 
      alt: "Latest collection and trending items display",
      title: "Featured Collection"
    }
  ];

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Floating flower particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const particleCount = isMobile ? 20 : 60;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      hue: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      const hue = 45 + Math.random() * 15;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        hue
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradBg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradBg.addColorStop(0, 'hsla(48, 100%, 97%, 1)');
      gradBg.addColorStop(1, 'hsla(55, 100%, 93%, 1)');
      ctx.fillStyle = gradBg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += Math.sin(Date.now() / 1500 + i) * 0.3;
        p.y += p.vy * 0.6;
        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((Date.now() / 2000 + i) % (Math.PI * 2));

        const petalCount = 5;
        const petalLength = p.radius * 5;
        const petalWidth = p.radius * 2;

        for (let j = 0; j < petalCount; j++) {
          const angle = (j * (Math.PI * 2)) / petalCount;
          ctx.save();
          ctx.rotate(angle);
          const grad = ctx.createLinearGradient(0, 0, 0, petalLength);
          grad.addColorStop(0, `rgba(255, 220, 100, 0.5)`);
          grad.addColorStop(1, `rgba(255, 200, 50, 0.15)`);
          ctx.fillStyle = grad;

          ctx.beginPath();
          ctx.ellipse(0, petalLength / 2, petalWidth, petalLength / 2, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        ctx.beginPath();
        ctx.arc(0, 0, p.radius * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 180, 0, 0.5)`;
        ctx.fill();

        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isMobile]);

  // Initial positioning
  useEffect(() => {
    if (isMobile) {
      slidesRef.current.forEach((slide, index) => {
        if (!slide) return;
        gsap.set(slide, {
          x: 0,
          z: 0,
          rotateY: 0,
          scale: 1,
          opacity: index === currentSlide ? 1 : 0,
          filter: "blur(0px)",
          zIndex: index === currentSlide ? 10 : 1,
        });
      });
    } else {
      slidesRef.current.forEach((slide, index) => {
        if (!slide) return;

        const offset = index - currentSlide;
        const absOffset = Math.abs(offset);

        gsap.set(slide, {
          x: offset * 45 + "%",
          z: -absOffset * 400,
          rotateY: offset * 25,
          scale: 1 - absOffset * 0.15,
          opacity: absOffset > 1 ? 0 : 1 - absOffset * 0.3,
          filter: `blur(${absOffset * 2}px)`,
          zIndex: 10 - absOffset
        });
      });
    }
  }, [currentSlide, isMobile]);

  const animateSwirl = (direction: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const newSlide = direction > 0
      ? (currentSlide + 1) % slides.length
      : (currentSlide - 1 + slides.length) % slides.length;

    const timeline = gsap.timeline({
      onComplete: () => {
        setCurrentSlide(newSlide);
        setIsAnimating(false);
      }
    });

    if (isMobile) {
      // Simple fade animation for mobile
      timeline.to(slidesRef.current[currentSlide], {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, 0);

      timeline.fromTo(slidesRef.current[newSlide], {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut"
      }, 0);
    } else {
      // Original 3D animation for desktop
    if (swirlRef.current) {
      timeline.fromTo(swirlRef.current,
        { scale: 0, rotation: 0, opacity: 0 },
        {
          scale: 80,
          rotation: direction * 1080,
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut"
        },
        0.2
      );

      timeline.to(swirlRef.current,
        { opacity: 0, duration: 0.3 },
        1.1
      );

      timeline.set(swirlRef.current, { scale: 0, rotation: 0 });
    }

    slidesRef.current.forEach((slide, index) => {
      if (!slide) return;

      const newOffset = index - newSlide;
      const absNewOffset = Math.abs(newOffset);

      timeline.to(slide, {
        x: newOffset * 45 + "%",
        z: -absNewOffset * 400,
        rotateY: newOffset * 25,
        scale: 1 - absNewOffset * 0.15,
        opacity: absNewOffset > 1 ? 0 : 1 - absNewOffset * 0.3,
        filter: `blur(${absNewOffset * 2}px)`,
        zIndex: 10 - absNewOffset,
        rotation: direction * 15,
        duration: 0.8,
        ease: "power2.inOut"
      }, 0.2);

      timeline.to(slide, {
        rotation: 0,
        duration: 0.4,
        ease: "power2.out"
      }, 1.2);
    });
  }
  };

  const nextSlide = () => animateSwirl(1);
  const prevSlide = () => animateSwirl(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  // Swipe handler
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isAnimating) return;
    const touchEndX = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section
      className="relative w-full h-[60vh] sm:h-[80vh] md:h-[90vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero carousel showcasing featured content"
      role="region"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {/* 3D Carousel Container */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{
          perspective: isMobile ? "none" : "2000px",
          perspectiveOrigin: "50% 50%"
        }}
        role="group"
        aria-roledescription="carousel"
        aria-label="Featured content carousel"
      >
        {/* Swirl Vortex Effect (hidden on mobile) */}
        {!isMobile && (
          <div
            ref={swirlRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none z-50"
            style={{
              background: "radial-gradient(circle, rgba(255,245,200,0.9) 0%, rgba(255,230,150,0.6) 30%, rgba(255,215,100,0.2) 60%, transparent 100%)",
              boxShadow: "0 0 120px 60px rgba(255,230,150,0.4), inset 0 0 60px rgba(255,245,200,0.6)",
              scale: 0
            }}
            aria-hidden="true"
          />
        )}

        {/* Carousel Slides */}
        <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => (slidesRef.current[index] = el)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              w-[90vw] sm:w-[75vw] md:w-[70vw] lg:w-[65vw] xl:w-[60vw] 
              max-w-6xl aspect-[3/2] 
              rounded-xl sm:rounded-2xl overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 25px 100px rgba(0, 0, 0, 0.5), 0 0 60px rgba(255, 150, 50, 0.2)"
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}: ${slide.title || slide.alt}`}
              aria-hidden={index !== currentSlide}
            >
              {/* Image - Full Coverage */}
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                {...(index === 0 && { fetchpriority: "high" as any })}
              />

              {/* Subtle Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-gradient-to-r from-orange-500/80 to-amber-500/80 backdrop-blur-sm text-white hover:from-orange-500 hover:to-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 shadow-2xl"
        style={{
          boxShadow: "0 0 30px rgba(255, 150, 50, 0.4)"
        }}
        aria-controls="hero-carousel"
      >
        <ChevronLeft className="w-6 h-6" aria-hidden="true" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-gradient-to-r from-orange-500/80 to-amber-500/80 backdrop-blur-sm text-white hover:from-orange-500 hover:to-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 shadow-2xl"
        style={{
          boxShadow: "0 0 30px rgba(255, 150, 50, 0.4)"
        }}
        aria-controls="hero-carousel"
      >
        <ChevronRight className="w-6 h-6" aria-hidden="true" />
      </button>

      {/* Slide Indicators */}
      <nav 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3"
        aria-label="Carousel pagination"
        role="tablist"
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating && index !== currentSlide) {
                animateSwirl(index > currentSlide ? 1 : -1);
              }
            }}
            disabled={isAnimating}
            aria-label={`Go to slide ${index + 1}: ${slide.title || slide.alt}`}
            aria-current={index === currentSlide ? "true" : "false"}
            role="tab"
            aria-selected={index === currentSlide}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gradient-to-r from-orange-500 to-amber-500 w-10 shadow-lg"
                : "bg-white/50 hover:bg-white/70 w-2.5"
            }`}
            style={{
              boxShadow: index === currentSlide ? "0 0 20px rgba(255, 150, 50, 0.6)" : "none"
            }}
          />
        ))}
      </nav>

      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
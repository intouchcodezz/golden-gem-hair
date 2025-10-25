import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Video } from "lucide-react";
import heroImage1 from "@/assets/clinic.png";
import heroImage2 from "@/assets/clinic.png";
import heroImage3 from "@/assets/clinic.png";
import EnquiryForm from "./EnquiryModal";

const words = ["Skin", "Confidence", "Glow", "Radiance", "Self-care"];

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);


 const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleEnquirySubmit = (data: any) => {
  console.log("Enquiry submitted:", data);
  // You can send this data to your backend here
  // Close the modal after submission
  setIsModalOpen(false);
};

  useEffect(() => {
    const ctx = gsap.context(() => {
      let index = 0;
      const el = wordRef.current;

      const animateWord = () => {
        if (!el) return;

        // Slide up and fade out
        gsap.to(el, {
          y: -50,
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
          onComplete: () => {
            // Change text after slide out
            index = (index + 1) % words.length;
            el.textContent = words[index];
            
            // Slide in from below
            gsap.fromTo(
              el,
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
            );
          },
        });
      };

      // Start the animation cycle
      const interval = setInterval(animateWord, 2500);
      
      // Initial animations
      gsap.set('.hero-heading', { y: 60, opacity: 0 });
      gsap.set('.hero-subtext', { y: 40, opacity: 0 });
      gsap.set('.hero-buttons', { y: 50, opacity: 0 });
      gsap.set('.hero-image', { scale: 0.9, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.3 });
      
      tl.to('.hero-heading', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out'
      })
      .to('.hero-subtext', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4')
      .to('.hero-buttons', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'back.out(1.4)'
      }, '-=0.3')
      .to('.hero-image', {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.2)'
      }, '-=0.5');

      // Button hover animations
      const buttons = document.querySelectorAll('.hero-button');
      buttons.forEach((button) => {
        const btnElement = button as HTMLElement;
        
        btnElement.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            y: -2,
            duration: 0.3,
            ease: 'back.out(1.7)'
          });
        });

        btnElement.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
      

      return () => clearInterval(interval);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden
bg-[linear-gradient(135deg,rgb(254,247,224)_0%,rgb(253,234,167)_30%,rgb(247,233,142)_100%)]
"
    >
      <EnquiryForm
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleEnquirySubmit}
      />
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-16 px-6 lg:px-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 lg:space-y-12">
            <div className="space-y-6">
              <h1 className="hero-heading text-[clamp(3rem,8vw,8rem)] font-bold font-serif leading-[0.9] text-gray-900">
                <span ref={wordRef} className="text-red-500 font-bold block text-[clamp(3rem,8vw,8rem)]">{words[0]}</span>
                made simple.
              </h1>


              <div className="hero-subtext space-y-4 text-gray-600 text-[clamp(1.25rem,3vw,2rem)] font-medium">
                <p>Enhancing your beauty. Personalized care.</p>
                <p>Radiant results.</p>
              </div>
            </div>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <button onClick={openModal} className="hero-button px-8 py-4 rounded-full text-lg font-semibold bg-yellow-200 text-gray-900 shadow-md hover:shadow-lg transition-shadow">
                <span className="btn-inner flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-800/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gray-800" />
                  </div>
                  Book a Free Demo
                </span>
              </button>

              <button className="hero-button px-8 py-4 rounded-full text-lg font-semibold border border-gray-900 bg-white hover:bg-gray-50 transition-colors flex items-center gap-3">
                <span className="btn-inner flex items-center gap-3">
                  <Video className="w-5 h-5" />
                  Watch Demo
                </span>
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg h-[500px]">
              <div className="hero-image rounded-xl overflow-hidden shadow-lg">
                <img
                  src={heroImage1}
                  alt="skin care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hero-image rounded-xl overflow-hidden shadow-lg">
                <img
                  src={heroImage2}
                  alt="skin care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hero-image col-span-2 h-[240px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={heroImage3}
                  alt="skin care"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
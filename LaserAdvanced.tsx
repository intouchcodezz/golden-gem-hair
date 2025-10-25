import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star,
  Shield,
  Users,
  Award,
  Microscope,
  Heart,
  Zap,
  ChevronRight,
  Sparkles,
  Target,
  Eye,
  Flame
} from 'lucide-react';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

// Register GSAP Draggable plugin
gsap.registerPlugin(Draggable);

const faqs = [
  {
    q: "How many sessions are required for optimal laser treatment results?",
    a: "The number of sessions varies by treatment type. Laser hair reduction typically requires 6-8 sessions spaced 4-6 weeks apart. Photofacials need 3-5 sessions monthly. CO2 laser resurfacing usually requires 1-2 sessions with dramatic results. HIFU shows results after just 1 session with continued improvement over 3-6 months. During consultation, we create a personalized treatment plan."
  },
  {
    q: "Is there any downtime after laser treatments?",
    a: "Downtime varies by treatment intensity. Q-Switch laser and photofacials have virtually no downtime - you can return to work immediately. Laser hair reduction may cause slight redness for 2-4 hours. CO2 laser resurfacing requires 5-7 days of healing. HIFU treatments have no downtime with possible mild swelling for 24-48 hours."
  },
  {
    q: "Are laser treatments safe for all skin types?",
    a: "Our advanced laser systems are safe for all skin types when performed by certified professionals. We use different laser wavelengths and parameters customized for each skin type. Before treatment, we conduct a thorough skin analysis and patch test to ensure optimal safety and results for your specific skin tone and condition."
  },
  {
    q: "What makes your laser technology superior to others?",
    a: "We use the latest FDA-approved laser systems including fractional CO2, advanced Q-Switch technology, and medical-grade HIFU devices. Our equipment features precision targeting, adjustable parameters, and built-in cooling systems for maximum comfort. Combined with our experienced technicians, this ensures superior results with minimal side effects."
  },
  {
    q: "Can multiple laser treatments be combined?",
    a: "Yes, we often recommend combination treatments for enhanced results. For example, Q-Switch laser can be combined with photofacials for comprehensive pigmentation treatment. CO2 resurfacing can be followed by HIFU for skin tightening. We create customized treatment protocols spacing procedures appropriately for optimal healing and results."
  },
  {
    q: "How long do laser treatment results last?",
    a: "Results longevity depends on the treatment. Laser hair reduction provides permanent hair reduction of 80-90% after completing the full series. HIFU results last 12-18 months with gradual improvement. CO2 laser resurfacing results can last 3-5 years with proper skincare. Photofacial results typically last 6-12 months, with maintenance sessions recommended."
  }
];

const treatmentResults = [
  {
    before: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=400",
    treatment: "CO2 Laser Resurfacing",
    sessions: "2 sessions",
    timeline: "3 months post-treatment"
  },
  {
    before: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=400",
    treatment: "Q-Switch Laser",
    sessions: "4 sessions",
    timeline: "6 months post-treatment"
  },
  {
    before: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=400",
    treatment: "HIFU Face Lift",
    sessions: "1 session",
    timeline: "4 months post-treatment"
  },
  {
    before: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400",
    after: "https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=400",
    treatment: "Laser Hair Reduction",
    sessions: "6 sessions",
    timeline: "8 months post-treatment"
  }
];

const Laser = () => {
  // Refs for multiple success story sliders
  const beforeAfterWrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const afterImgWrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const draggerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const draggableInstances = useRef<GSAPDraggable[]>([]); // Store Draggable instances

  // Initialize GSAP Draggable for each success story
  useEffect(() => {
    beforeAfterWrapRefs.current.forEach((wrap, index) => {
      const afterImgWrap = afterImgWrapRefs.current[index];
      const dragger = draggerRefs.current[index];

      if (wrap && afterImgWrap && dragger) {
        const beforeImg = wrap.querySelector<HTMLImageElement>('.is-before img');
        const afterImg = afterImgWrap.querySelector<HTMLImageElement>('img');

        if (beforeImg && afterImg) {
          Promise.all([
            beforeImg.complete ? Promise.resolve() : new Promise(resolve => beforeImg.onload = resolve),
            afterImg.complete ? Promise.resolve() : new Promise(resolve => afterImg.onload = resolve)
          ]).then(() => {
            gsap.set(afterImgWrap, { clipPath: "inset(0 50% 0 0)" });

            const draggable = Draggable.create(dragger, {
              type: "x",
              bounds: wrap,
              onDrag: function () {
                const xValue = Number(gsap.getProperty(this.target, "x")) || 0;
                const x = wrap.offsetWidth / 2 - xValue;
                afterImgWrap.style.clipPath = `inset(0px ${x}px 0px 0px)`;
              },
              onPress: function () {
                this.update(); // Update Draggable position on press
              }
            })[0];

            draggableInstances.current[index] = draggable;
          });
        }
      }
    });

    return () => {
      draggableInstances.current.forEach(draggable => {
        if (draggable) draggable.kill();
      });
      draggableInstances.current = [];
    };
  }, []);

  // Type definition for GSAP Draggable
  type GSAPDraggable = {
    kill: () => void;
    update: () => void;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-700 rounded-b-[80px] overflow-hidden shadow-[0_25px_80px_rgba(217,119,6,0.2)] min-h-screen flex items-center">
        <div className="relative z-10 w-full px-5 py-20 max-w-[1200px] mx-auto">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="text-[#78350f]">
              <div className="mb-8">
                <p className="text-white/90 font-semibold tracking-widest uppercase text-sm mb-4">
                  Advanced Laser Technology
                </p>
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-6 leading-tight text-white">
                  Laser & Advanced <br />
                  <span className="text-white/95">Therapies</span>
                </h1>
              </div>
              <p className="text-[clamp(1.1rem,2.2vw,1.4rem)] text-orange-700 font-medium mb-10 leading-relaxed">
                Experience cutting-edge laser treatments for skin rejuvenation, hair removal, 
                and advanced therapeutic solutions with FDA-approved technology and visible results.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center bg-white/80 rounded-xl backdrop-blur-md border border-yellow-200 p-6">
                  <div className="text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold text-yellow-500 mb-2">98%</div>
                  <div className="text-sm font-semibold text-[#78350f]">Success Rate</div>
                </div>
                <div className="text-center bg-white/80 rounded-xl backdrop-blur-md border border-yellow-200 p-6">
                  <div className="text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold text-yellow-500 mb-2">0</div>
                  <div className="text-sm font-semibold text-[#78350f]">Days Downtime</div>
                </div>
                <div className="text-center bg-white/80 rounded-xl backdrop-blur-md border border-yellow-200 p-6">
                  <div className="text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold text-yellow-500 mb-2">8000+</div>
                  <div className="text-sm font-semibold text-[#78350f]">Treatments Done</div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <button className="flex items-center gap-2 bg-gradient-to-br from-orange-500 to-orange-600 text-white py-4 px-8 rounded-full font-semibold shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <Phone size={20} />
                  Free Consultation
                </button>
                <button className="flex items-center gap-2 bg-white/90 text-[#78350f] border-2 border-orange-300/50 py-3 px-7 rounded-full font-semibold backdrop-blur-md transition-all duration-300 hover:bg-orange-400 hover:text-white hover:-translate-y-1">
                  <Eye size={20} />
                  View Treatments
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center relative">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Laser Treatment Results"
                  className="rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.2)] w-full max-w-[400px] object-cover"
                />
                <div className="absolute -bottom-5 -left-5 bg-white/95 p-5 rounded-lg shadow-lg backdrop-blur-md border border-yellow-200">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-[2px]">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <div>
                      <div className="font-bold text-[#78350f] text-sm">4.9/5 Rating</div>
                      <div className="text-xs text-orange-700">From 2,500+ Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laser Treatments Overview */}
      <section className="py-24 px-5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-[#78350f] mb-4">
              Our Advanced Laser Treatments
            </h2>
            <p className="text-base text-orange-700 max-w-[700px] mx-auto leading-relaxed">
              State-of-the-art laser technology for comprehensive skin care, hair removal, 
              and therapeutic solutions with proven results and minimal downtime.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "CO2 Laser Resurfacing",
                description: "Advanced fractional CO2 laser for skin rejuvenation, wrinkle reduction, and scar treatment",
                benefits: ["Reduces wrinkles & fine lines", "Improves skin texture", "Treats acne scars", "Skin tightening"],
                sessions: "1-2 sessions",
                downtime: "5-7 days",
                results: "Visible in 2-4 weeks",
                icon: <Flame className="w-10 h-10 text-yellow-500" />
              },
              {
                image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Q-Switch Laser",
                description: "Precision laser for pigmentation removal, tattoo removal, and skin brightening",
                benefits: ["Removes pigmentation", "Tattoo removal", "Skin brightening", "Melasma treatment"],
                sessions: "4-6 sessions",
                downtime: "Minimal",
                results: "Gradual improvement",
                icon: <Target className="w-10 h-10 text-green-500" />
              },
              {
                image: "https://images.pexels.com/photos/3985162/pexels-photo-3985162.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "HIFU Face Lift",
                description: "High-Intensity Focused Ultrasound for non-surgical face lifting and skin tightening",
                benefits: ["Non-surgical face lift", "Skin tightening", "Jawline definition", "Neck lifting"],
                sessions: "1 session",
                downtime: "None",
                results: "3-6 months",
                icon: <Sparkles className="w-10 h-10 text-purple-500" />
              },
              {
                image: "https://images.pexels.com/photos/3985321/pexels-photo-3985321.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Photofacial (IPL)",
                description: "Intense Pulsed Light therapy for overall skin rejuvenation and photo-aging",
                benefits: ["Reduces sun damage", "Improves skin tone", "Reduces redness", "Minimizes pores"],
                sessions: "3-5 sessions",
                downtime: "None",
                results: "After each session",
                icon: <Eye className="w-10 h-10 text-orange-500" />
              },
              {
                image: "https://images.pexels.com/photos/3997343/pexels-photo-3997343.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Laser Hair Reduction",
                description: "Permanent hair reduction with advanced diode laser technology for all skin types",
                benefits: ["Permanent hair reduction", "Suitable for all areas", "Safe for all skin types", "Smooth skin"],
                sessions: "6-8 sessions",
                downtime: "Minimal",
                results: "Progressive reduction",
                icon: <Zap className="w-10 h-10 text-red-600" />
              }
            ].map((treatment, idx) => (
              <div 
                key={idx} 
                className="bg-white/95 rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(217,119,6,0.12)] border border-yellow-200 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(217,119,6,0.18)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-lg backdrop-blur-md">
                    {treatment.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#78350f] mb-4">{treatment.title}</h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">{treatment.description}</p>
                  <div className="mb-6">
                    <h4 className="text-[#78350f] font-semibold mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {treatment.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-gray-500 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs border-t border-yellow-200 pt-4">
                    <div className="text-center">
                      <div className="font-semibold text-[#78350f] mb-1">Sessions</div>
                      <div className="text-yellow-500">{treatment.sessions}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-[#78350f] mb-1">Downtime</div>
                      <div className="text-green-500">{treatment.downtime}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-[#78350f] mb-1">Results</div>
                      <div className="text-purple-500">{treatment.results}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Laser Treatments */}
      <section className="py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-[#78350f] mb-4">
              Why Choose Our Laser Technology?
            </h2>
            <p className="text-base text-orange-700 max-w-[700px] mx-auto leading-relaxed">
              Advanced FDA-approved laser systems, experienced technicians, and personalized 
              treatment protocols ensure optimal results with maximum safety.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Shield className="w-12 h-12 text-yellow-500" />,
                title: "FDA-Approved Technology",
                description: "Latest generation laser systems with proven safety and efficacy records"
              },
              {
                icon: <Award className="w-12 h-12 text-green-500" />,
                title: "Expert Technicians",
                description: "Certified laser specialists with over 10 years of experience and training"
              },
              {
                icon: <Target className="w-12 h-12 text-purple-500" />,
                title: "Precision Treatment",
                description: "Customizable parameters for optimal results based on individual skin type"
              },
              {
                icon: <Heart className="w-12 h-12 text-orange-500" />,
                title: "Minimal Discomfort",
                description: "Advanced cooling systems and pain management for comfortable treatments"
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white/95 rounded-2xl p-8 text-center shadow-[0_15px_50px_rgba(217,119,6,0.12)] 
                          transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(217,119,6,0.18)]"
              >
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#78350f] mb-4">{feature.title}</h3>
                <p className="text-orange-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Comparison Table */}
      <section className="py-24 px-5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-[#78350f] mb-4">
              Laser Treatment Comparison Guide
            </h2>
            <p className="text-base text-orange-700 max-w-[700px] mx-auto leading-relaxed">
              Compare our laser treatments to find the perfect solution for your specific skin concerns and goals.
            </p>
          </div>
          <div className="overflow-x-auto mb-10">
            <table className="w-full min-w-[700px] border-collapse">
              <thead className="bg-yellow-100">
                <tr>
                  <th className="py-6 px-6 text-left font-bold text-sm text-[#78350f]">Treatment Type</th>
                  <th className="py-6 px-6 text-center font-bold text-sm">Best For</th>
                  <th className="py-6 px-6 text-center font-bold text-sm text-yellow-500">Sessions Needed</th>
                  <th className="py-6 px-6 text-center font-bold text-sm text-green-500">Downtime</th>
                  <th className="py-6 px-6 text-center font-bold text-sm text-purple-600">Results Timeline</th>
                  <th className="py-6 px-6 text-center font-bold text-sm">Pain Level</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    treatment: "CO2 Laser Resurfacing",
                    bestFor: "Deep wrinkles, acne scars, skin tightening",
                    sessions: "1-2 sessions",
                    downtime: "5-7 days",
                    results: "2-4 weeks",
                    pain: "Moderate (with anesthesia)"
                  },
                  {
                    treatment: "Q-Switch Laser",
                    bestFor: "Pigmentation, melasma, tattoo removal",
                    sessions: "4-6 sessions",
                    downtime: "Minimal (2-3 days)",
                    results: "Gradual over 3-6 months",
                    pain: "Mild to moderate"
                  },
                  {
                    treatment: "HIFU Face Lift",
                    bestFor: "Skin sagging, face lifting, neck tightening",
                    sessions: "1 session",
                    downtime: "None",
                    results: "3-6 months progressive",
                    pain: "Mild discomfort"
                  },
                  {
                    treatment: "Photofacial (IPL)",
                    bestFor: "Sun damage, redness, overall rejuvenation",
                    sessions: "3-5 sessions",
                    downtime: "None",
                    results: "After each session",
                    pain: "Minimal"
                  },
                  {
                    treatment: "Laser Hair Reduction",
                    bestFor: "Unwanted hair removal",
                    sessions: "6-8 sessions",
                    downtime: "None (slight redness)",
                    results: "Progressive over 8-12 months",
                    pain: "Mild (cooling system)"
                  }
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-yellow-50" : "bg-white/80"}
                  >
                    <td className="py-5 px-6 font-semibold text-[#78350f] border-r border-yellow-200">{row.treatment}</td>
                    <td className="py-5 px-6 text-center text-gray-500 text-sm">{row.bestFor}</td>
                    <td className="py-5 px-6 text-center text-yellow-500 font-semibold text-sm">{row.sessions}</td>
                    <td className="py-5 px-6 text-center text-green-500 font-semibold text-sm">{row.downtime}</td>
                    <td className="py-5 px-6 text-center text-purple-600 font-semibold text-sm">{row.results}</td>
                    <td className="py-5 px-6 text-center text-gray-500 text-sm">{row.pain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Before & After Results */}
      <section className="py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-[#78350f] mb-4">
              Real Treatment Results
            </h2>
            <p className="text-base text-orange-700 max-w-[700px] mx-auto leading-relaxed">
              See the transformative results of our patients who chose various laser treatments. 
              These are authentic, unedited results from our clinic.
            </p>
          </div>
          <style>{`
            .success-stories * {
              padding: 0;
              margin: 0;
              box-sizing: border-box;
            }
            .success-stories img {
              max-width: 100%;
              vertical-align: middle;
              display: inline-block;
              width: 100%;
              height: 100%;
              user-select: none;
              pointer-events: none;
            }
            .success-stories .before-after-outer {
              justify-content: center;
              align-items: center;
              display: flex;
            }
            .success-stories .before-after-wrap {
              width: 100%;
              position: relative;
            }
            .success-stories .dragger {
              z-index: 2;
              width: 2px;
              height: 100%;
              background-color: #ffffff;
              border-radius: 15px;
              justify-content: space-around;
              align-items: center;
              display: flex;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 50%;
              right: auto;
            }
            .success-stories .dragger-inner {
              width: 1rem;
              height: 5rem;
              background-color: #ffffff;
              border-radius: 15px;
              justify-content: center;
              align-items: center;
              display: flex;
              position: absolute;
              box-shadow: inset 0px 10px 15px -3px rgba(0, 0, 0, 0.3);
              border: 2px solid #fff;
            }
            .success-stories .img-wrap {
              position: relative;
              overflow: hidden;
            }
            .success-stories .img-wrap.is-before {
              aspect-ratio: 4 / 3;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
            }
            .success-stories .img-wrap.is-after {
              aspect-ratio: 4 / 3;
              clip-path: inset(0 50% 0 0);
              flex-flow: column;
              justify-content: center;
              align-items: flex-end;
              display: flex;
            }
            .success-stories .img.is-before-after {
              object-fit: cover;
              object-position: 50% 40%;
              position: absolute;
              width: 100%;
              height: 100%;
            }
          `}</style>
          <div className="grid gap-10 md:grid-cols-2 success-stories">
            {treatmentResults.map((result, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(217,119,6,0.12)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(217,119,6,0.18)]"
              >
                <div className="before-after-outer">
                  <div 
                    className="before-after-wrap" 
                    ref={(el) => (beforeAfterWrapRefs.current[idx] = el)}
                  >
                    <div className="dragger" ref={(el) => (draggerRefs.current[idx] = el)}>
                      <div className="dragger-inner"></div>
                    </div>
                    <div className="img-wrap is-before">
                      <img
                        src={result.before}
                        alt="Before treatment"
                        className="img is-before-after"
                        loading="lazy"
                      />
                    </div>
                    <div 
                      className="img-wrap is-after" 
                      ref={(el) => (afterImgWrapRefs.current[idx] = el)}
                    >
                      <img
                        src={result.after}
                        alt={`After ${result.timeline}`}
                        className="img is-before-after"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-[#78350f] mb-4">{result.treatment}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-[#78350f] font-semibold mb-1">Sessions</div>
                      <div className="text-yellow-500 font-semibold">{result.sessions}</div>
                    </div>
                    <div>
                      <div className="text-[#78350f] font-semibold mb-1">Timeline</div>
                      <div className="text-green-500 font-semibold">{result.timeline}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-[#1e40af] mb-4">
              Treatment Care Instructions
            </h2>
            <p className="text-base text-orange-700 max-w-[700px] mx-auto leading-relaxed">
              Comprehensive guidelines to maximize your treatment results and ensure safe, comfortable healing.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-800 p-4 rounded-xl mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Pre-Treatment Preparation</h3>
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-4">2 Weeks Before Treatment:</h4>
                <ul className="mb-8 space-y-3">
                  {[
                    "Avoid sun exposure and tanning (natural or artificial)",
                    "Stop using retinoids, AHA/BHA, and vitamin C serums",
                    "Do not wax, pluck, or bleach hair in treatment areas (for laser hair removal)",
                    "Inform about any medications or supplements you're taking"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-base">
                      <ChevronRight className="w-4 h-4 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <h4 className="text-lg font-bold text-blue-900 mb-4">Day of Treatment:</h4>
                <ul className="space-y-3">
                  {[
                    "Arrive with clean, makeup-free skin",
                    "Wear comfortable, loose-fitting clothing",
                    "Avoid caffeine if you're sensitive to stimulants",
                    "Bring sunglasses and a wide-brimmed hat"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-base">
                      <ChevronRight className="w-4 h-4 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-green-500 to-green-700 p-4 rounded-xl mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-900">Post-Treatment Care</h3>
              </div>
              <div>
                <h4 className="text-lg font-bold text-green-900 mb-4">First 48 Hours:</h4>
                <ul className="mb-8 space-y-3">
                  {[
                    "Apply ice packs for 10-15 minutes to reduce swelling",
                    "Use gentle, fragrance-free moisturizer as recommended",
                    "Avoid hot showers, saunas, and vigorous exercise",
                    "Do not pick, scratch, or rub treated areas"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-base">
                      <ChevronRight className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <h4 className="text-lg font-bold text-green-900 mb-4">Long-term Care (2+ weeks):</h4>
                <ul className="space-y-3">
                  {[
                    "Use broad-spectrum SPF 30+ sunscreen daily",
                    "Attend all scheduled follow-up appointments",
                    "Maintain gentle skincare routine as advised",
                    "Stay hydrated and maintain healthy diet"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-base">
                      <ChevronRight className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-[#78350f] mb-4">Frequently Asked Questions</h2>
            <p className="text-base text-orange-700 max-w-[700px] mx-auto leading-relaxed">
              Get comprehensive answers about our laser treatments, safety protocols, and expected results.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#78350f] mb-4 flex items-start">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                    Q
                  </div>
                  {faq.q}
                </h3>
                <p className="ml-12 text-gray-500 text-base leading-relaxed pt-3 border-t border-yellow-200">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(2.2rem,4vw,3rem)] font-bold text-[#78350f]">
              Why Choose The Golden Gem for Laser Treatments
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-4 text-center">
            {[
              { icon: Users, number: "8000+", label: "Laser Treatments", color: "#3b82f6" },
              { icon: Award, number: "12+", label: "Laser Specialists", color: "#10b981" },
              { icon: Star, number: "4.9/5", label: "Treatment Rating", color: "#8b5cf6" },
              { icon: Shield, number: "98%", label: "Success Rate", color: "#f59e0b" }
            ].map(({ icon: Icon, number, label, color }, idx) => (
              <div key={idx}>
                <div
                  className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6"
                  style={{
                    background: `${color}15`,
                    border: `2px solid ${color}30`,
                  }}
                >
                  <Icon className="w-10 h-10" style={{ color }} />
                </div>
                <div className="text-4xl font-extrabold text-[#78350f] mb-2">{number}</div>
                <div className="text-[#a16207] font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-yellow-400 py-24 px-5">
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold text-white mb-6">
            Transform Your Skin Today
          </h2>
          <p className="text-lg text-white/90 mb-12 leading-relaxed">
            Experience the power of advanced laser technology with personalized treatment plans. 
            Book your consultation and discover the perfect laser solution for your skin concerns.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {[
              { step: "Step 1", title: "Skin Analysis" },
              { step: "Step 2", title: "Custom Treatment" },
              { step: "Step 3", title: "Visible Results" }
            ].map(({ step, title }, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-white/80 mb-2">{step}</div>
                <div className="text-lg font-semibold text-white">{title}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <button
              className="bg-white text-[#78350f] px-10 py-5 rounded-full text-lg font-bold flex items-center gap-3 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <Phone size={20} />
              Call Now: +91 8122733730
            </button>
            <button
              className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold flex items-center gap-3 hover:bg-white hover:text-[#78350f] hover:-translate-y-1 transition-all"
            >
              <Mail size={20} />
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Laser;
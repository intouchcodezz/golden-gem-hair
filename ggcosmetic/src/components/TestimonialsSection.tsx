import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  Star,
  Quote,
  Award,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import EnquiryForm from "./EnquiryModal";

const testimonials = [
  {
    name: "Sudha Rani",
    age: "32",
    location: "Chennai",
    text: "The Golden Gem treatment exceeded all my expectations. The therapists were incredibly caring and professional throughout my journey. My hair has never looked better.",
    rating: 5,
    treatment: "Hair Transplant",
    months: "6 months ago",
  },
  {
    name: "K. Rajeshwari",
    age: "28",
    location: "Bangalore",
    text: "I was skeptical at first, but The Golden Gem completely changed my perspective. The hair fall stopped completely and I've seen remarkable improvement in growth.",
    rating: 5,
    treatment: "Hair Rejuvenation",
    months: "8 months ago",
  },
  {
    name: "Abishek Reddy",
    age: "35",
    location: "Hyderabad",
    text: "My confidence was at an all-time low due to hair loss. The Golden Gem team gave me hope. After sessions, my hair growth improved dramatically.",
    rating: 5,
    treatment: "PRP Combo",
    months: "1 year ago",
  },
  {
    name: "Priya Sharma",
    age: "29",
    location: "Mumbai",
    text: "Professional service with genuine care. The PRP sessions were comfortable and the results are incredible. My hair density has improved significantly.",
    rating: 5,
    treatment: "PRP Treatment",
    months: "4 months ago",
  },
  {
    name: "Rahul Kumar",
    age: "41",
    location: "Delhi",
    text: "The hair transplant was executed flawlessly and the natural hairline looks absolutely amazing. Outstanding care throughout the entire process.",
    rating: 5,
    treatment: "Hair Transplantation",
    months: "10 months ago",
  },
  {
    name: "Meera Patel",
    age: "26",
    location: "Pune",
    text: "The scalp micro pigmentation results are phenomenal. The consultation was thorough, and the procedure comfortable. Worth every penny!",
    rating: 5,
    treatment: "Scalp Micro Pigmentation",
    months: "3 months ago",
  },
];

const TestimonialsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative py-24 bg-gradient-hero overflow-hidden">
      <EnquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          console.log("Form submitted:", data);
          setIsModalOpen(false);
        }}
        treatment="General Consultation"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center bg-amber-100 text-amber-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4 mr-2" />
            Real Patient Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A]  mb-4">
            Transforming Lives, One Patient at a Time
          </h2>
          <p className="text-lg text-[#1A1A1A]  max-w-2xl mx-auto leading-relaxed">
            Real stories from real people who found their confidence again at{" "}
            <span className="text-[#1A1A1A]  font-semibold">The Golden Gem</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* --- Running Slider --- */}
          <div className="lg:col-span-2 overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: [0, -100 * testimonials.length] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 min-w-[250px] max-w-[300px] bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl"
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <Quote className="w-8 h-8 text-amber-500 opacity-50" />
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-3 text-sm min-h-[90px]">
                      “{testimonial.text}”
                    </p>

                    <div className="mb-4">
                      <span className="inline-flex items-center bg-amber-50 text-amber-700 px-2 py-1 rounded-lg text-xs font-medium">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {testimonial.treatment}
                      </span>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-sm truncate">{testimonial.name}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> {testimonial.location}
                            </span>
                            <span>•</span>
                            <span>Age {testimonial.age}</span>
                          </div>
                          <p className="text-[11px] text-gray-400 mt-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {testimonial.months}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          {/* --- Consultation Card (unchanged) --- */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 text-black shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.1),transparent_60%)]"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-3 leading-tight">
                  Why Waiting ?
                </h3>
                <p className="text-black/90 mb-8 text-sm leading-relaxed">
                  Give a transition today with our trusted experts.
                </p>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full group bg-[#f4a00c] text-white font-bold py-4 px-6 rounded-xl hover:bg-gray-50 hover:text-black transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

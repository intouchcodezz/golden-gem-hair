import React from "react";
import {
  Heart,
  Award,
  Users,
  Star,
  CheckCircle,
  Shield,
  Sparkles,
  Target,
  BookOpen
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import akshara from "../assets/cabin-room.png";

import beforeafter1 from "@/assets/beforeafter1.jpg";
import beforeafter2 from "@/assets/beforeafter2.jpg";
import beforeafter3 from "@/assets/beforeafter3.jpg";
import beforeafter4 from "@/assets/beforeafter4.jpg";
import beforeafter5 from "@/assets/beforeafter5.jpg";
import beforeafter6 from "@/assets/beforeafter6.jpg";
import beforeafter7 from "@/assets/beforeafter7.jpg";
import beforeafter8 from "@/assets/beforeafter8.jpg";
import beforeafter9 from "@/assets/beforeafter9.jpg";
import befoeafter10 from "@/assets/beforeafter10.jpg";
import beforeafter12 from "@/assets/beforeafter12.jpg";
import beforeafter15 from "@/assets/beforeafter15.jpg";
import beforeafter20 from "@/assets/beforeafter20.jpg";
import ht2 from "@/assets/ht2.jpg"
import gfc2 from "@/assets/gfc2.jpg"
import gfc3 from "@/assets/gfc3.jpg"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { title } from "process";

const About = () => {
  // ONLY Before & After images
  const beforeAfterItems = [
    { image: beforeafter1, title: "Hair Rejuvenation Therapy - Male Pattern Hair Loss" },
    { image: beforeafter2, title: "Hair Rejuvenation Therapy - Female Hair Thinning" },
    { image: beforeafter3, title: "Hair Rejuvenation Therapy - Scalp Condition" },
    { image: beforeafter4, title: "Hair Rejuvenation Therapy - Case 4" },
    { image: beforeafter5, title: "Hair Rejuvenation Therapy - Case 5" },
    { image: beforeafter6, title: "Hair Rejuvenation Therapy - Case 6" },
    { image: beforeafter7, title: "Hair Rejuvenation Therapy - Case 7" },
    { image: beforeafter8, title: "Hair Rejuvenation Therapy - Case 8" },
    { image: beforeafter9, title: "Hair Rejuvenation Therapy - Case 9" },
    { image: befoeafter10, title: "Hair Rejuvenation Therapy - Case 10" },
    { image: beforeafter12, title: "Hair Rejuvenation Therapy - Case 12" },
    { image: beforeafter15, title: "Hair Rejuvenation Therapy - Case 15" },
    { image: beforeafter20, title: "Hair Rejuvenation Therapy - Case 20" },
    { image: ht2, title: "Hair Transplant - Case 11" },
    { image: gfc2, title: "GFC - Case 14" },
    { image: gfc3, titles: "GFC - Case 16" },
  ];

  const testimonials = [
    {
      name: "Mrs. Anita Sharma",
      age: "38",
      treatment: "Hair Restoration",
      review:
        "After years of hair loss, Dr. Akshara’s clinic gave me back my confidence. The results are natural and life-changing!",
      rating: 5,
    },
    {
      name: "Mr. Rajesh Kumar",
      age: "42",
      treatment: "Laser Skin Rejuvenation",
      review:
        "My skin looks 10 years younger. The team is professional, and the results exceeded my expectations.",
      rating: 5,
    },
    {
      name: "Ms. Priya Malhotra",
      age: "29",
      treatment: "Botox & Fillers",
      review:
        "Subtle, natural enhancement. I feel refreshed and confident. Highly recommend Dr. Akshara!",
      rating: 5,
    },
    {
      name: "Mr. Vikram Singh",
      age: "45",
      treatment: "PRP Therapy",
      review:
        "PRP for hair regrowth worked wonders. Visible density in just 3 months. Excellent care!",
      rating: 5,
    },
    {
      name: "Ms. Neha Gupta",
      age: "35",
      treatment: "Thread Lift",
      review:
        "Non-surgical facelift with zero downtime. The results are stunning and natural. Thank you!",
      rating: 5,
    },
  ];

  return (
    <div className="bg-[#FAFBFC] min-h-screen font-sans overflow-x-hidden">
      <Header />

      {/* HERO BANNER */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        <img
          src={akshara}
          alt="Dr. Akshara’s Clinic"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </section>

      {/* ABOUT TEXT */}
      <section className="bg-white py-16 -mt-1">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            About <span className="text-yellow-500">Dr. Akshara’s</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-yellow-600 mb-6">
            Cosmetology & Aesthetics Clinic
          </h2>
          <div className="w-28 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            India’s Most Trusted Cosmetic & Aesthetic Clinic with Advanced Treatment Procedures
          </p>
        </div>
      </section>

      {/* STORY, MISSION, STATS, DOCTOR */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-5">Our Story & Mission</h2>
                <div className="w-16 h-1 bg-yellow-400 mb-8 rounded-full" />
                <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                  <p>Dr. Akshara’s Cosmetology & Aesthetics stands as a pioneer in advanced cosmetic medicine and aesthetic treatments in India.</p>
                  <p>Founded on a vision of world-class care with the highest medical standards, we prioritize patient safety and exceptional results.</p>
                  <p>At Dr. Akshara’s, every individual receives a personalized treatment plan tailored to their unique needs and goals.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl shadow border-l-4 border-yellow-400">
                  <div className="flex items-center mb-3">
                    <Target className="w-7 h-7 text-yellow-500 mr-3" />
                    <span className="text-xl font-semibold text-gray-900">Our Mission</span>
                  </div>
                  <p className="text-gray-600">
                    To provide exceptional cosmetic and aesthetic treatments that enhance natural beauty, prioritizing patient safety and satisfaction.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl shadow border-l-4 border-yellow-400">
                  <div className="flex items-center mb-3">
                    <Sparkles className="w-7 h-7 text-yellow-500 mr-3" />
                    <span className="text-xl font-semibold text-gray-900">Our Vision</span>
                  </div>
                  <p className="text-gray-600">
                    To be India's leading destination for aesthetic medicine—renowned for innovation, care, and results.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "8+", label: "Years of Excellence" },
                  { number: "5000+", label: "Happy Patients" },
                  { number: "25+", label: "Advanced Treatments" },
                  { number: "98%", label: "Success Rate" },
                ].map((stat, i) => (
                  <div key={i} className="bg-yellow-50 p-5 rounded-xl shadow-sm border border-yellow-200 text-center hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-yellow-700 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FFFBF6] rounded-2xl p-10 shadow-xl border border-yellow-100 h-full flex flex-col justify-center">
              <img src={akshara} alt="Dr. Akshara" className="w-full max-w-sm h-[400px] object-cover rounded-2xl shadow-lg mx-auto mb-7" />
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Akshara</h3>
                <p className="text-yellow-700 font-medium">Chief Cosmetic Surgeon & Aesthetician</p>
                <div className="w-14 h-1 bg-yellow-400 mx-auto mt-3 rounded-full" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Qualifications & Expertise</h4>
                {[
                  "MD in Dermatology & Cosmetology",
                  "Fellowship in Aesthetic Medicine",
                  "8+ Years Clinical Experience",
                  "International Training in Advanced Procedures",
                  "Member of Indian Association of Dermatologists",
                ].map((q, i) => (
                  <div key={i} className="flex items-start mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Patients Choose Us</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Award, title: "Advanced Technology", desc: "Latest FDA-approved equipment and cutting-edge techniques.", color: "text-yellow-600" },
              { icon: Shield, title: "Safety First", desc: "Highest safety standards with sterile environment and approved protocols.", color: "text-green-600" },
              { icon: Heart, title: "Patient-Centered Care", desc: "Personalized treatment plans for unique needs.", color: "text-pink-500" },
              { icon: CheckCircle, title: "Proven Results", desc: "Extensive portfolio with high satisfaction rates.", color: "text-purple-600" },
              { icon: Users, title: "Expert Team", desc: "Highly qualified doctors and support staff.", color: "text-blue-700" },
              { icon: BookOpen, title: "Transparent Approach", desc: "Clear procedures, costs, and outcomes.", color: "text-teal-600" },
            ].map((f, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg border border-gray-100 transition-shadow">
                <div className={`w-14 h-14 rounded-full bg-white shadow-sm mx-auto mb-4 flex items-center justify-center border`}>
                  <f.icon className={`w-7 h-7 ${f.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER SECTION – NO TABS, ONLY RESULTS */}
      <section className="py-20 bg-gradient-to-t from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-5">Before & After Transformations</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real patient results that speak for themselves
            </p>
          </div>

          {/* Direct grid – no tabs, no filters */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterItems.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 bg-white transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS – Fixed equal height */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-5">Patient Success Stories</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600">Real experiences from our satisfied patients</p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            className="pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 
                                 h-full flex flex-col border border-yellow-100 min-h-[360px]">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                    <p className="text-sm text-yellow-700">Age {t.age} • {t.treatment}</p>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed flex-1">
                    "{t.review}"
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
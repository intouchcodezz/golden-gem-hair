import React, { useState } from "react";
import {
  Heart,
  Award,
  Users,
  Star,
  CheckCircle,
  Calendar,
  Shield,
  Sparkles,
  Play,
  User,
  Stethoscope,
  BookOpen,
  Target
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import akshara from "../assets/cabin-room.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "facility", label: "Our Facility" },
    { id: "equipment", label: "Advanced Equipment" },
    { id: "results", label: "Before & After" },
    { id: "team", label: "Our Team" }
  ];

  const galleryItems = [
    // ... (same as original, omitted for brevity)
  ];

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <div className="bg-[#FAFBFC] min-h-screen font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-yellow-50 py-20 mt-1 shadow-inner">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              About <span className="text-yellow-500">Dr. Akshara’s</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-light text-yellow-600 mb-8">
              Cosmetology & Aesthetics Clinic
            </h2>
            <div className="w-28 h-1 bg-yellow-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              India’s Most Trusted Cosmetic & Aesthetic Clinic with Advanced Treatment Procedures
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-yellow-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { number: "15+", label: "Years of Excellence" },
              { number: "5000+", label: "Happy Patients" },
              { number: "25+", label: "Advanced Treatments" },
              { number: "98%", label: "Success Rate" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-yellow-700 bg-white/70 p-6 rounded-xl shadow-md border border-yellow-200"
              >
                <div className="text-4xl font-bold mb-1">{stat.number}</div>
                <div className="text-gray-700 tracking-wide text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">Our Story & Mission</h2>
              <div className="w-16 h-1 bg-yellow-400 mb-8 rounded-full"></div>
              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  Dr. Akshara’s Cosmetology & Aesthetics stands as a pioneer in advanced cosmetic medicine and aesthetic treatments in India.
                </p>
                <p>
                  Founded on a vision of world-class care with the highest medical standards, we prioritize patient safety and exceptional results.
                </p>
                <p>
                  At Dr. Akshara’s, every individual receives a personalized treatment plan tailored to their unique needs and goals.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="bg-gray-50 p-6 rounded-2xl shadow border-l-4 border-yellow-400">
                  <div className="flex items-center mb-3">
                    <Target className="w-7 h-7 text-yellow-500 mr-3" />
                    <span className="text-xl font-semibold text-gray-900">Our Mission</span>
                  </div>
                  <p className="text-gray-600 text-md">
                    To provide exceptional cosmetic and aesthetic treatments that enhance natural beauty, prioritizing patient safety and satisfaction.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl shadow border-l-4 border-yellow-400">
                  <div className="flex items-center mb-3">
                    <Sparkles className="w-7 h-7 text-yellow-500 mr-3" />
                    <span className="text-xl font-semibold text-gray-900">Our Vision</span>
                  </div>
                  <p className="text-gray-600 text-md">
                    To be India's leading destination for aesthetic medicine—renowned for innovation, care, and results.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Doctor Profile */}
            <div className="bg-[#FFFBF6] rounded-2xl p-10 shadow-xl border border-yellow-100">
              <img
                src={akshara}
                alt="Dr. Akshara"
                className="w-full max-w-sm h-[400px] object-cover rounded-2xl shadow-lg mx-auto mb-7"
              />
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Akshara</h3>
                <p className="text-yellow-700 font-medium">Chief Cosmetic Surgeon & Aesthetician</p>
                <div className="w-14 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Qualifications & Expertise</h4>
                {[
                  "MD in Dermatology & Cosmetology",
                  "Fellowship in Aesthetic Medicine",
                  "15+ Years Clinical Experience",
                  "International Training in Advanced Procedures",
                  "Member of Indian Association of Dermatologists"
                ].map((qualification, index) => (
                  <div key={index} className="flex items-start mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Treatment Categories</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Comprehensive range of advanced cosmetic and aesthetic treatments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: Sparkles,
                title: "Skin Care & Rejuvenation",
                treatments: [
                  "Chemical Peels",
                  "Anti-Aging Facials",
                  "Laser Therapy",
                  "Microdermabrasion"
                ],
                color: "bg-gradient-to-br from-yellow-50 to-white border-yellow-100"
              },
              {
                icon: Stethoscope,
                title: "Cosmetic Procedures",
                treatments: [
                  "Botox & Fillers",
                  "Thread Lifts",
                  "PRP Therapy",
                  "Fat Reduction"
                ],
                color: "bg-gradient-to-br from-green-50 to-white border-green-100"
              },
              {
                icon: Heart,
                title: "Hair Restoration",
                treatments: [
                  "Hair Transplant",
                  "Scalp Treatment",
                  "Growth Therapy",
                  "PRP for Hair"
                ],
                color: "bg-gradient-to-br from-purple-50 to-white border-purple-100"
              },
              {
                icon: Shield,
                title: "Laser Treatments",
                treatments: [
                  "Hair Removal",
                  "Pigmentation",
                  "Scar Reduction",
                  "Tattoo Removal"
                ],
                color: "bg-gradient-to-br from-orange-50 to-white border-orange-100"
              }
            ].map((category, index) => (
              <div
                key={index}
                className={`${category.color} border rounded-2xl p-8 shadow hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="text-center mb-5">
                  <div className="w-14 h-14 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm border">
                    <category.icon className="w-7 h-7 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-1">
                  {category.treatments.map((treatment, idx) => (
                    <li
                      key={idx}
                      className="text-base text-gray-700 flex items-center"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {treatment}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Patients Choose Us</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Award,
                title: "Advanced Technology",
                description:
                  "Latest FDA-approved equipment and cutting-edge treatment techniques for optimal results.",
                color: "text-yellow-600"
              },
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "Highest safety standards with sterile environment and internationally approved protocols.",
                color: "text-green-600"
              },
              {
                icon: Heart,
                title: "Patient-Centered Care",
                description:
                  "Personalized treatment plans designed specifically for each patient's unique needs.",
                color: "text-pink-500"
              },
              {
                icon: CheckCircle,
                title: "Proven Results",
                description:
                  "Extensive portfolio of successful treatments with high patient satisfaction rates.",
                color: "text-purple-600"
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Highly qualified and experienced doctors, surgeons, and support staff.",
                color: "text-blue-700"
              },
              {
                icon: BookOpen,
                title: "Transparent Approach",
                description:
                  "Complete transparency in treatment procedures, costs, and expected outcomes.",
                color: "text-teal-600"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg border border-gray-100 transition-shadow duration-300"
              >
                <div className={`w-14 h-14 rounded-full bg-white shadow-sm mx-auto mb-4 flex items-center justify-center border`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-20 bg-gradient-to-t from-white to-yellow-50"> */}
        <div className="max-w-7xl mx-auto px-4">
          {/* <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-5">Our Gallery</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a look at our state-of-the-art facility, technology, and patient transformations.
            </p>
          </div> */}
          {/* Gallery Tabs */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeTab === tab.id
                    ? "bg-yellow-400 text-white border-yellow-400 shadow"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-yellow-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div> */}
          {/* Gallery Grid */}
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl border border-gray-100 bg-white transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-yellow-900/60 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity rounded-b-2xl">
                  <div className="text-sm uppercase tracking-wider text-yellow-200 mb-1">{item.category}</div>
                  <div className="text-lg font-semibold text-white drop-shadow">{item.title}</div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      {/* </section> */}

      {/* Patient Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-5">Patient Success Stories</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Real experiences from our satisfied patients
            </p>
          </div>
          {/* Featured Testimonial */}
          <div className="bg-yellow-50 rounded-2xl p-12 mb-12 shadow-xl border border-yellow-100 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="w-20 h-20 bg-yellow-100 rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center border">
                  <User className="w-10 h-10 text-yellow-400" />
                </div>
                <div className="font-bold text-xl text-gray-900">Mrs. Anita Sharma</div>
                <div className="text-yellow-600 font-medium">
                  Age 38 • Hair Restoration
                </div>
                <div className="flex justify-center md:justify-start mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  &quot;After struggling with hair loss for years, I finally found hope at Dr. Akshara's clinic. The hair restoration treatment not only gave me back my hair but also restored my confidence. The entire team was professional, caring, and made me feel comfortable throughout the process. I can't thank them enough for the incredible transformation!&quot;
                </blockquote>
              </div>
            </div>
          </div>
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 mb-12">
            {/* map other testimonials as in previous code, keeping the rounded-2xl, padding, shadow, border, clean space */}
          </div>
          {/* Video Testimonials, Testimonial Stats ... (same structure, apply rounded-2xl, consistent spacing, color, hover where appropriate) */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;

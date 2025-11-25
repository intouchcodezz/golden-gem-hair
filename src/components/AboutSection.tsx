import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Award, Users, Clock, Star, CheckCircle, Shield, Heart, Microscope, PackageCheck } from "lucide-react";
import doctor from "@/assets/doctor.jpg"
import EnquiryForm from "./EnquiryModal";

const About = () => {

  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: "Happy Patients", value: "10,000+", color: "text-emerald-600" },
    { icon: Award, label: "Years of Excellence", value: "8+", color: "text-blue-600" },
    { icon: Clock, label: "Successful Procedures", value: "25,000+", color: "text-purple-600" },
    { icon: Star, label: "Success Rate", value: "98%", color: "text-amber-600" }
  ];

  const services = [
    { icon: Heart, text: "Comprehensive skin and hair care treatments" },
    { icon: Microscope, text: "Advanced hair transplantation procedures" },
    { icon: Shield, text: "FDA-certified equipment and safety protocols" },
    { icon: Award, text: "Certified specialists and medical professionals" },
    { icon: Users, text: "Personalized treatment plans and consultations" },
    { icon: CheckCircle, text: "Research-backed treatment methodologies" }
  ];

  const specializations = [
    "PRP Hair Treatment",
    "Hair Transplant", 
    "Scalp Micro-pigmentation",
    "Hair Rejuvenation Therapy",
    "Advanced Skin Treatments"
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <EnquiryForm
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onSubmit={(data) => {
    console.log("Form submitted:", data);
    setIsModalOpen(false);
  }}
  treatment="General Consultation"
/>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-l from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-t from-amber-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Section */}
        {/* <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-4xl font-bold mb-6 golden-gradient-text leading-tight">
            Expert Care & Proven Results
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The Golden Gem has been a trusted name in beauty and cosmetics since 2004, 
            consistently delivering cutting-edge treatments with proven results.
          </p>
        </div> */}

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-500 border border-white/50"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-2">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold flex items-center">
              <Shield className="w-6 h-6 text-amber-400 animate-bounce mr-3" />
              <span className="golden-gradient-text mb-2">
                Trust Only The Best
              </span>
              </h2>
              <p className="text-sm text-[#1A1A1A] leading-relaxed">
                Our comprehensive approach encompasses advanced skin care treatments, hair care 
                solutions, hair transplantation, health & wellness education, research & development, 
                and state-of-the-art diagnostics using only FDA-certified equipment.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((service, index) => (
                <div key={index} className="group flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h- text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-small text-base sm:text-sm leading-relaxed group-hover:text-blue-700 transition-colors">
                    {service.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 py-20">
              <button onClick={() => navigate("/about")} className="bg-[#f4a00c] text-[#fff]  hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-4 rounded-xl text-base font-semibold group flex items-center justify-center">
                Learn About Our Story
                <Award className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <button onClick={() => setIsModalOpen(true)} className="bg-[#f4a00c] text-[#fff]  hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 px-8 py-4 rounded-xl text-base font-semibold group flex items-center justify-center">
                Schedule Consultation
                <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Image & Badges */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={doctor}
                alt="The Golden Gem Medical Facility"
                className="w-full h-[750px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Success Rate Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-white/50 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-3xl font-bold golden-gradient-text mb-2">98%</div>
                <div className="text-sm text-slate-600 font-medium mb-3">Success Rate</div>
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-6 -right-6 bg-[#fff] text-black rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">8+</div>
                <div className="text-xs font-medium opacity-90">Years of<br/>Excellence</div>
              </div>
            </div>

            {/* FDA Badge */}
            <div className="absolute top-1/2 -left-6 bg-white rounded-xl p-4 shadow-xl border border-white/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-emerald-600" />
                <div>
                  <div className="text-sm font-bold text-slate-900">FDA</div>
                  <div className="text-xs text-slate-600">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promise Section */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl mt-12 p-8 lg:p-12 border border-white/50 shadow-xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100/50 to-emerald-100/50 rounded-full -translate-y-20 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-100/50 to-pink-100/50 rounded-full translate-y-16 -translate-x-16"></div>

        <div className="relative z-10">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-2xl font-bold mb-4 golden-gradient-text">
              We Deliver on Our Promise
            </h3>
            <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Your concerns are our priority. Experience consultations with highly experienced specialists 
              and treatments at our ultra-modern facility with cutting-edge, FDA-certified equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-200/30">
                <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <Shield className="w-5 h-5 text-blue-600 mr-3" />
                  Our Commitment to You
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  At The Golden Gem, we provide guaranteed natural hair growth and healthy lifestyle 
                  solutions through our comprehensive approach including nutritional supplements for 
                  deficiencies and disorders.
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-semibold text-slate-900 flex items-center text-base">
                  <Microscope className="w-5 h-5 text-emerald-600 mr-3" />
                  Advanced Treatment Range
                </h5>

                <div className="grid grid-cols-2 gap-3">
                  {specializations.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 group p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700 group-hover:text-blue-700 transition-colors text-sm font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-200/30">
                <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Heart className="w-5 h-5 text-emerald-600 mr-3" />
                  Why Choose Us?
                </h4>

                <div className="space-y-3">
                  {[
                    "FDA-certified equipment ensuring complete safety",
                    "Guaranteed natural hair growth results",
                    "Comprehensive health and wellness approach",
                    "Certified industry specialists and experts",
                    "State-of-the-art facility with modern technology",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 mt-3 flex-shrink-0"></div>
                      <p className="text-slate-700 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/#treatments"
                className="w-full bg-[#f4a00c] text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 py-3 rounded-xl text-base font-semibold flex items-center justify-center group"
              >
                Explore All Treatments
                <CheckCircle className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
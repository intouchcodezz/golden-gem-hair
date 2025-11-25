import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Star,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";
import EnquiryForm from "./EnquiryModal";

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { value: "10,000+", label: "Happy Patients", icon: Heart, color: "from-red-500 to-rose-600" },
    { value: "4.9/5", label: "Average Rating", icon: Star, color: "from-amber-500 to-yellow-600" },
    { value: "98%", label: "Success Rate", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
    { value: "8+", label: "Years Experience", icon: Award, color: "from-blue-500 to-indigo-600" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 8122229557",
      description: "Book Free Consultation and Pay Only for Test",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "thegoldengemskinhairlaserclini@gmail.com",
      description: "Get detailed information about treatments",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Multiple Locations",
      description: "Clinics across Tamil Nadu, Karnataka, Andhra Pradesh & more",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sun: 10 AM - 8 PM",
      description: "We're available 7 days a week",
    },
  ];

  return (
    <section className="py-16 bg-gradient-hero">
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

        {/* --- Stats (1 column mobile, 2 tablet, 4 desktop) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* --- FULL STACK ON MOBILE, 2-column on lg --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* --- Contact Cards (full width on mobile) --- */}
          <div className="space-y-5">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2">
                We're Here to Help
              </h2>
              <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed">
                Reach out to us through any of these channels and we'll respond promptly.
              </p>
            </div>

            {contactInfo.map((info, idx) => (
              <Card
                key={idx}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-[#1A1A1A]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-sm text-gray-900 font-medium break-all">{info.value}</p>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* --- Consultation Card (moves under on mobile) --- */}
          <div className="py-4">
            <Card className="bg-white border border-gray-200 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Fill out the form to get in touch with our certified experts.
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#f4a00c] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#e0940a] transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  Book Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                  <div className="flex items-center gap-3 text-xs md:text-sm text-gray-600">
                    <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span>Response within 24 hours</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs md:text-sm text-gray-600">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                      <Award className="w-4 h-4 text-blue-600" />
                    </div>
                    <span>FDA Certified Treatments</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs md:text-sm text-gray-600">
                    <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
                      <Heart className="w-4 h-4 text-amber-600" />
                    </div>
                    <span>10,000+ satisfied patients</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
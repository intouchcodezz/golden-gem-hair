import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Phone, Mail, MapPin, Clock, Heart, Star, TrendingUp, Award, ArrowRight } from "lucide-react";
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
    <section className="py-20 bg-gradient-hero">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center">
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-3">
                We're Here to Help
              </h2>
              <p className="text-lg FFF8F0 text-[#1A1A1A] ">
                Reach out to us through any of these channels and we'll respond promptly
              </p>
            </div>

            {contactInfo.map((info, idx) => (
              <Card key={idx} className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br bg-[#fff] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-7 h-7 text-[#1A1A1A]  " />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-900 font-medium mb-2">{info.value}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="py-12">
            <Card className="bg-white border border-gray-200 shadow-xl">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fill out the form to get in touch with our certified experts and receive your personalized treatment plan
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full group bg-[#f4a00c] text-white font-bold py-4 px-6 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Book Your Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-blue-600" />
                    </div>
                    <span>FDA Certified Treatments</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
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
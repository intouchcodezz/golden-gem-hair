import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import EnquiryForm from "../components/EnquiryModal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      <Header />

      {/* HERO */}
      <section className="w-full py-20 border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help you with appointments, enquiries, and clinic directions.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">

        {/* CONTACT GRID */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Phone className="w-6 h-6 text-gray-700" />,
              title: "Phone",
              details: ["+91 8122229557"],
            },
            {
              icon: <Mail className="w-6 h-6 text-gray-700" />,
              title: "Email",
              details: ["thegoldengemskinhairlaserclini@gmail.com"],
            },
            {
              icon: <MapPin className="w-6 h-6 text-gray-700" />,
              title: "Location",
              details: [
                "No: 325/255, MKN Rd",
                "Near Old Sukkubhai Hotel",
                "Ramapuram, Chennai - 600016",
              ],
            },
            {
              icon: <Clock className="w-6 h-6 text-gray-700" />,
              title: "Hours",
              details: ["Mon–Sat: 9 AM – 7 PM", "Sun: 10 AM – 4 PM"],
            },
          ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            {item.icon}
            <h3 className="mt-4 font-semibold text-xl">{item.title}</h3>

            {/* FIX: Prevent long text from overflowing */}
            <div className="mt-2 text-gray-600 text-sm space-y-1 break-words">
              {item.details.map((d, idx) => (
                <p key={idx}>{d}</p>
              ))}
            </div>
          </div>
          ))}
        </section>

{/* CTA + BRANCHES GRID */}
<section className="grid md:grid-cols-2 gap-10">
  
  {/* LEFT — BOOK APPOINTMENT */}
  <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-sm text-center">
    <h2 className="text-3xl font-semibold">Book an Appointment</h2>
    <p className="text-gray-600 mt-2 max-w-lg mx-auto">
      Schedule your consultation with our specialists. We respond within 24 hours.
    </p>

    <button
      onClick={() => setFormOpen(true)}
      className="mt-6 px-8 py-4 bg-black text-white rounded-xl text-lg font-medium 
                 hover:bg-gray-900 transition-all"
    >
      Open Booking Form
    </button>
  </div>

  {/* RIGHT — ADDRESS / BRANCH */}
  <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">
    <h2 className="text-2xl font-semibold mb-6">Our Branch</h2>

    <div className="space-y-4 pl-4 border-l-2 border-black/20">
      <div>
        <h3 className="font-medium text-xl">Chennai</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          No: 325/255, MKN Rd, Near Old Sukkubhai Hotel,<br />
          Ramapuram, Chennai - 600016
        </p>
        <p className="text-gray-800 font-medium mt-2">+91 8122733730</p>
        <p className="text-xs text-gray-500">Manager: Dr. Priya Sharma</p>
      </div>
    </div>
  </div>

</section>


        {/* MAP */}
        <section>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
            <h2 className="text-xl font-semibold px-2">Find Us</h2>
            <div className="mt-4 rounded-xl overflow-hidden h-[350px] border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.857615953522!2d80.1991982!3d12.998470299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b9f851b17d%3A0x313027a186a53301!2sThe%20Golden%20Gem%20Cosmetic%20Clinic!5e0!3m2!1sen!2sin!4v1732020000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EnquiryForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
};

export default Contact;

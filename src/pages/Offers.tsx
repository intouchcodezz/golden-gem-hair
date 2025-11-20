'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryForm from "@/components/EnquiryModal";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion, Variants, easeOut } from "framer-motion";
import { useState } from "react";

import prpoffer from "@/assets/prp-offer.jpg"
import biocelloffer from "@/assets/biocell-offer.jpg"
import laserhair from "@/assets/laserhair.jpg"
import hairfallcontrol from "@/assets/haifallcontrol.jpg"
import ScalpDetox from "@/assets/ScalpDetox.jpg"
import HairThickening from "@/assets/HairThickening.jpg"
import dandruff from "@/assets/dandruff.jpg"
import beardtransplant from "@/assets/beardtransplant.jpg"
import femalehairloss from "@/assets/femalehairloss.jpg"
import eyebrow from "@/assets/eyebrow.jpg"
import htkit from "@/assets/htkit.jpg"

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const Offers = () => {
  // Fixed: State declared only once inside component
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our expert will call you in 5 minutes for FREE hair analysis.");
    setFormData({ name: "", phone: "" });
  };

// Replace your hairOffers array with this one (rest of the code stays exactly the same)

const hairOffers = [
  {
    title: "Hair Transplant",
    discount: "UP TO 50% OFF",
    desc: "Latest FUE technique • Natural hairline • Lifetime results",
    img: "https://images.pexels.com/photos/27138343/pexels-photo-27138343.jpeg"
  },
  {
    title: "PRP Hair Regrowth Therapy",
    discount: "UP TO 55% OFF",
    desc: "Your own platelets • Stops hair fall in 21 days • Thickens hair fast",
    img: prpoffer
  },
  {
    title: "Biocell Stem Cell Therapy",
    discount: "UP TO 40% OFF",
    desc: "Plant-based stem cells • Activates dormant follicles • Visible growth in 30 days",
    img: biocelloffer
  },
  {
    title: "Laser Hair Regrowth",
    discount: "UP TO 60% OFF",
    desc: "FDA-approved LLLT • Non-invasive • Clinically proven results",
    img: laserhair
  },
  {
    title: "Hair Fall Control Package",
    discount: "UP TO 50% OFF",
    desc: "Shampoo + Serum + Supplements • Complete anti-hairfall system",
    img: hairfallcontrol
  },
  {
    title: "Scalp Detox + Rejuvenation",
    discount: "UP TO 45% OFF",
    desc: "Deep cleansing • Removes DHT buildup • Promotes healthy growth",
    img: ScalpDetox
  },
  {
    title: "Dandruff Control Therapy",
    discount: "UP TO 55% OFF",
    desc: "Medicated treatment • Clears scalp • Prevents recurrence",
    img: dandruff
  },
  {
    title: "Hair Thickening Treatment",
    discount: "UP TO 40% OFF",
    desc: "Instant volume + density • Long-lasting results",
    img: HairThickening
  },
  {
    title: "Beard & Moustache Transplant",
    discount: "UP TO 60% OFF",
    desc: "Natural density • Perfect shape • Permanent results",
    img: beardtransplant
  },
  {
    title: "Female Hair Loss Program",
    discount: "UP TO 50% OFF",
    desc: "Customized for women • Hormonal balance + regrowth",
    img: femalehairloss
  },
  {
    title: "Eyebrow Restoration",
    discount: "UP TO 55% OFF",
    desc: "Natural-looking brows • Micro FUE technique",
    img: eyebrow
  },
  {
    title: "Post-Transplant Care Kit",
    discount: "UP TO 40% OFF",
    desc: "Shampoo + spray + vitamins • Ensures maximum graft survival",
    img: htkit
  },
];

  const testimonials = [
    { name: "Priya Malhotra", city: "Mumbai", review: "Stopped my hair fall in just 21 days with PRP. Best decision ever!" },
    { name: "Rohan Kapoor", city: "Delhi", review: "Got my full hairline back with FUE 2.0. Looks 100% natural!" },
    { name: "Ananya Sharma", city: "Bangalore", review: "Laser therapy made my hair so thick. I finally love my hair again!" },
    { name: "Vikram Singh", city: "Chennai", review: "Professional team, transparent process. Results exceeded expectations!" },
    { name: "Neha Gupta", city: "Pune", review: "The care and attention I received was unmatched. Confidence restored!" },
    { name: "Aarav Mehta", city: "Hyderabad", review: "From bald patches to full coverage in 6 months. Truly life-changing!" },
    { name: "Sonia Reddy", city: "Ahmedabad", review: "Best clinic in India! My confidence is back after Biocell therapy." },
    { name: "Karan Malhotra", city: "Jaipur", review: "No more dandruff or itching. Scalp feels brand new!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      {/* Enquiry Modal – NOW WORKS 100% */}
      <EnquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          console.log("Enquiry Submitted:", data);
          alert(`Thank you ${data.name}! We'll call you at ${data.phone} shortly.`);
          setIsModalOpen(false);
        }}
        treatment="Limited Time Offer Consultation"
      />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700">
        <div className="absolute inset-0 bg-black/30" />
        <img
          src="https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg"
          alt="Hair Restoration"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            Limited Time Offers
          </h1>
          <p className="text-2xl md:text-4xl text-white/95 mb-10 font-light drop-shadow-lg">
            Save Up to <span className="text-yellow-300 font-bold">70%</span> on Advanced Hair Treatments
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-14 py-8 rounded-full shadow-2xl"
          >
            Claim Offer Now
          </Button>
        </motion.div>
      </section>

      {/* Offers Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Exclusive Limited-Time Offers
            </h2>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairOffers.map((offer, i) => (
              <motion.article
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={offer.img}
                    alt={offer.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-lg py-2 px-6 shadow-lg font-bold z-10">
                    {offer.discount}
                  </Badge>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">{offer.desc}</p>
                </CardContent>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">Real reviews from real transformations across India</p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              prevEl: ".testi-prev",
              nextEl: ".testi-next",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="pb-14 relative"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="p-4"
                >
                  <Card className="h-full bg-white/95 backdrop-blur-lg border border-emerald-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8 text-center flex flex-col justify-between h-full">
                      <div>
                        <div className="flex justify-center gap-1 mb-5">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic text-lg leading-relaxed mb-6 min-h-32">
                          "{t.review}"
                        </p>
                      </div>
                      <div className="mt-auto">
                        <h4 className="font-bold text-xl text-gray-900">{t.name}</h4>
                        <p className="text-emerald-600 font-medium text-lg">{t.city}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offers;
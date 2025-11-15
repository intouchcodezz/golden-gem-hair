import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import EnquiryForm from "@/components/EnquiryModal";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
import ht4 from "@/assets/ht4.jpg"
import ht2 from "@/assets/ht2.jpg"
import gfc2 from "@/assets/gfc2.jpg"
import gfc3 from "@/assets/gfc3.jpg"

const Results = () => {
  const beforeAfterImages = [
    { before: beforeafter1, alt: "Hair Rejuvenation Therapy - Male Pattern Hair Loss" },
    { before: beforeafter2, alt: "Hair Rejuvenation Therapy - Female Hair Thinning" },
    { before: beforeafter3, alt: "Hair Rejuvenation Therapy - Scalp Condition" },
    { before: beforeafter4, alt: "Hair Rejuvenation Therapy - Case 4" },
    { before: beforeafter5, alt: "Hair Rejuvenation Therapy - Case 5" },
    { before: beforeafter6, alt: "Hair Rejuvenation Therapy - Case 6" },
    { before: beforeafter7, alt: "Hair Rejuvenation Therapy - Case 7" },
    { before: beforeafter8, alt: "Hair Rejuvenation Therapy - Case 8" },
    { before: beforeafter9, alt: "Hair Rejuvenation Therapy - Case 9" },
    { before: befoeafter10, alt: "Hair Rejuvenation Therapy - Case 10" },
    { before: beforeafter12, alt: "Hair Rejuvenation Therapy - Case 12" },
    { before: beforeafter15, alt: "Hair Rejuvenation Therapy - Case 15" },
    { before: beforeafter20, alt: "Hair Rejuvenation Therapy - Case 20" },
    { before: ht2, alt: "Hair Transplant - Case 11" },
    { before: ht4, alt: "Hair Transplant - Case 13" },
    { before: gfc2, alt: "GFC - Case 14" },
    { before: gfc3, alt: "GFC - Case 16" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Enquiry Modal */}
      <EnquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          console.log("Form submitted:", data);
          setIsModalOpen(false);
        }}
        treatment="General Consultation"
      />

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4 font-heading">
              Before & After Results
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the transformative power of our hair rejuvenation therapies through real patient results.
            </p>
          </div>

          {/* Desktop Grid */}
          <section className="mb-12 hidden md:block">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beforeAfterImages.map((image, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="p-2">
                      <button
                        onClick={() =>
                          (window as any).__openImageLightbox?.(image.before, image.alt)
                        }
                        className="block w-full"
                      >
                        <img
                          src={image.before}
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-lg"
                          style={{ aspectRatio: "1/1" }}
                          loading="lazy"
                        />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Mobile Carousel */}
          <section className="mb-12 md:hidden relative">
            <Carousel className="w-full relative">
              <CarouselContent>
                {beforeAfterImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-none shadow-md overflow-hidden">
                      <CardContent className="p-0">
                        <div className="p-2">
                          <button
                            onClick={() =>
                              (window as any).__openImageLightbox?.(image.before, image.alt)
                            }
                            className="block w-full"
                          >
                            <img
                              src={image.before}
                              alt={image.alt}
                              className="w-full h-full object-cover rounded-lg"
                              style={{ aspectRatio: "1/1" }}
                              loading="lazy"
                            />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Carousel Navigation */}
              <CarouselPrevious
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 text-gray-700 shadow-md hover:bg-white hover:scale-105 transition-all duration-300"
              />
              <CarouselNext
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 text-gray-700 shadow-md hover:bg-white hover:scale-105 transition-all duration-300"
              />
            </Carousel>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4 font-heading">
              Get In Touch With Us
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              One-Click Away For A Personalized Consultation With Our Team Of Highly Qualified Trichologist, Cosmetologists & Surgeons.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              Book an Appointment
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;

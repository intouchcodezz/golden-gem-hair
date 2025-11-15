import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import EnquiryForm from "@/components/EnquiryModal";

const Testimonials = () => {
  // Testimonial data from document
  const testimonials = [
    {
      name: "Saritha",
      quote: "A lot of change has been observed after treatment. I have feeling of satisfaction. Good service by the staff especially by Sushma who is very caring and very responsible in addressing at sessions. She is very good at work.",
      type: "Female",
    },
    {
      name: "Vidhyalakshmi",
      quote: "The service in Golden Gem was very good. I was given treatment for my hair and skin whitening. My face has glowed within the treatment period of 15 days. I’m delighted very much when people asked me about my awesome look. Therapist Salomi gave me a good and caring treatment. I love Golden Gem and their service.",
      type: "Female",
    },
    {
      name: "Mohammed Naveed",
      quote: "I have undergone GFC Treatment. The overall treatment is satisfactory. Therapist Sunitha did an outstanding job by doing treatment and as well as explaining the pros & cons. I really impressed with her work a lot. After this GFC treatment, I will continue taking supplements as suggested by Doctor and will think about going for maintenance treatment suggested by Doctor. I was satisfied completely with the treatment. Thank you!",
      type: "Male",
    },
    {
      name: "Priya K",
      quote: "I love this place. Golden Gem is very welcoming and the people there are so kind-hearted. They're all so calm and the atmosphere is just so peaceful. They are very knowledgeable. It was excellent customer service. I’m incredibly pleased with the results!",
      type: "Female",
    },
  ];

  // Client feedback images (dummy placeholders)
  const clientFeedback = [
    { title: "Boldness Treatment", image: "https://picsum.photos/300/300?random=201" },
    { title: "Ultra Whitening Therapy", image: "https://picsum.photos/300/300?random=202" },
    { title: "HRT Treatment", image: "https://picsum.photos/300/300?random=203" },
    { title: "Clinical Hair Rejuvenation Therapy", image: "https://picsum.photos/300/300?random=204" },
    { title: "Pigmentation and Unwanted Marks", image: "https://picsum.photos/300/300?random=205" },
    { title: "Hairfall and Baldness Treatment", image: "https://picsum.photos/300/300?random=206" },
    { title: "Hairfall Treatment Feedback 1", image: "https://picsum.photos/300/300?random=207" },
    { title: "Hairfall Treatment Feedback 2", image: "https://picsum.photos/300/300?random=208" },
  ];
const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
           <EnquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          console.log("Form submitted:", data);
          setIsModalOpen(false);
        }}
        treatment="General Consultation"
      />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4 font-heading">
              Testimonials
            </h1>
            <p className="text-lg text-muted-foreground">
              Testimonials and our client reviews - Golden Gem Cosmetic
            </p>
          </div>

          {/* Testimonials Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 font-heading">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.type} Client
                    </p>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-muted-foreground italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Client Feedback Section */}
          {/* <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 font-heading">
              Client Feedback
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientFeedback.map((feedback, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="p-4">
                    <img
                      src={feedback.image}
                      alt={feedback.title}
                      className="w-full h-auto rounded-lg object-cover"
                      style={{ aspectRatio: "1/1" }}
                      loading="lazy"
                    />
                    <p className="text-center text-sm font-medium mt-2">
                      {feedback.title}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section> */}

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4 font-heading">
              Get In Touch With Us
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              One-Click Away For A Personalized Consultation With Our Team Of Highly
              Qualified Trichologist, Cosmetologists & Surgeons.
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
    </div>
  );
};

export default Testimonials;
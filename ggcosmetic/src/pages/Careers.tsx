import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import hiring from "@/assets/new.png"

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Trichologist",
      department: "Medical",
      type: "Full-time",
      experience: "5+ years",
      location: "Mumbai",
      description:
        "Lead trichologist position for advanced hair and scalp treatments.",
    },
    {
      title: "Associate Trichologist",
      department: "Medical",
      type: "Full-time",
      experience: "2-4 years",
      location: "Delhi",
      description:
        "Support senior trichologists in patient care and treatments.",
    },
    {
      title: "Hair Transplant Technician",
      department: "Surgical",
      type: "Full-time",
      experience: "3+ years",
      location: "Bangalore",
      description:
        "Assist in hair transplant procedures and patient care.",
    },
    {
      title: "Patient Coordinator",
      department: "Administration",
      type: "Full-time",
      experience: "1-2 years",
      location: "Pune",
      description:
        "Manage patient appointments and treatment coordination.",
    },
  ];

  const benefits = [
    {
      icon: "🏥",
      title: "Health Insurance",
      description:
        "Comprehensive medical coverage for you and your family.",
    },
    {
      icon: "📚",
      title: "Professional Development",
      description:
        "Continuous learning opportunities and certification support.",
    },
    {
      icon: "⚖️",
      title: "Work-Life Balance",
      description:
        "Flexible working hours and wellness programs.",
    },
    {
      icon: "💰",
      title: "Competitive Compensation",
      description:
        "Attractive salary packages with performance incentives.",
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description:
        "Clear advancement paths and leadership opportunities.",
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description:
        "Work with leading experts in trichology and dermatology.",
    },
  ];

  const steps = [
    { step: 1, title: "Apply Online", desc: "Submit your application through our website" },
    { step: 2, title: "Initial Screening", desc: "Our HR team reviews your application" },
    { step: 3, title: "Interview Process", desc: "Technical and cultural fit assessment" },
    { step: 4, title: "Welcome Aboard", desc: "Onboarding and training program" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="flex flex-col">
        {/* Hero Banner */}
        <section className="relative h-[300px] md:h-[400px] w-full">
          <img
            src={hiring}
            alt="We Are Hiring"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">We Are Hiring</h1>
            <p className="mt-2 text-lg">
              Build your career with India's leading trichology experts
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="container mx-auto px-4 py-12 max-w-6xl">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Why Choose Golden Gem as Your Career Partner?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center shadow hover:shadow-lg transition"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white text-2xl">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Current Openings */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Current Openings
          </h2>
          <Accordion type="single" collapsible>
            {openPositions.map((position, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {position.title} - {position.location}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">{position.description}</p>
                  <div className="grid md:grid-cols-4 gap-4 text-sm mb-4">
                    <div>
                      <span className="font-semibold">Department:</span>
                      <div className="text-muted-foreground">
                        {position.department}
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold">Type:</span>
                      <div className="text-muted-foreground">
                        {position.type}
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold">Experience:</span>
                      <div className="text-muted-foreground">
                        {position.experience}
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold">Location:</span>
                      <div className="text-muted-foreground">
                        {position.location}
                      </div>
                    </div>
                  </div>
                  <Button className="btn-golden">Apply Now</Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Application Process */}
        <section className="container mx-auto px-4 py-12 max-w-6xl">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Application Process
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 text-center relative">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>

              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="bg-white border rounded-lg p-8 text-center shadow">
            <h3 className="text-2xl font-semibold mb-2">
              Didn't Find the Right Position?
            </h3>
            <p className="mb-6">
              We're always looking for talented individuals to join our growing
              team. Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-golden">
                Submit General Application
              </Button>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
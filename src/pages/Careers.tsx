import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import hiring from "@/assets/new.png";

// ✅ Define types
interface FormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  experience?: string;
  message?: string;
}

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const openPositions = [
    {
      title: "Senior Trichologist",
      department: "Medical",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Lead trichologist position for advanced hair and scalp treatments.",
    },
    {
      title: "Associate Trichologist",
      department: "Medical",
      type: "Full-time",
      experience: "2–4 years",
      description:
        "Support senior trichologists in patient care and treatments.",
    },
    {
      title: "Hair Transplant Technician",
      department: "Surgical",
      type: "Full-time",
      experience: "3+ years",
      description: "Assist in hair transplant procedures and patient care.",
    },
    {
      title: "Patient Coordinator",
      department: "Administration",
      type: "Full-time",
      experience: "1–2 years",
      description:
        "Manage patient appointments and treatment coordination.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone" && /[^0-9]/.test(value)) return;
    if (name === "name" && /[^a-zA-Z\s]/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsDialogOpen(true);
  };

  const validateForm = (): FormErrors => {
    let newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(formData.name.trim()))
      newErrors.name = "Only letters and spaces allowed";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit number";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const submissionData = { ...formData, jobTitle: selectedJob };

    try {
      const res = await fetch(
        "https://api.thegoldengemhairclinic.com/career_apply.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        }
      );

      if (res.ok) {
        alert(`✅ Application submitted for ${selectedJob}!`);
        setIsDialogOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          experience: "",
          message: "",
        });
        setErrors({});
      } else {
        alert("⚠️ Error submitting form. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="flex flex-col">
        {/* Hero */}
        <section className="relative h-[300px] md:h-[400px] w-full">
          <img
            src={hiring}
            alt="We Are Hiring"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">We’re Hiring!</h1>
            <p className="mt-2 text-lg max-w-2xl">
              Join India’s Leading Experts in Trichology & Hair Restoration.
            </p>
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
                  {position.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">{position.description}</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm mb-4">
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
                  </div>
                  <Button
                    onClick={() => handleApply(position.title)}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold"
                  >
                    Apply Now
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      {/* Application Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-amber-700">
              Apply for {selectedJob}
            </DialogTitle>
            <DialogDescription>
              Please fill out all required fields accurately.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Name */}
            <div>
              <Input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number (10 digits)"
                maxLength={10} // fixed TypeScript error (must be number)
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Experience */}
            <Input
              name="experience"
              placeholder="Years of Experience"
              value={formData.experience}
              onChange={handleInputChange}
            />

            {/* Message */}
            <div>
              <Textarea
                name="message"
                placeholder="Tell us about yourself (min 10 chars)"
                value={formData.message}
                onChange={handleInputChange}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <DialogFooter>
              <Button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold"
              >
                Submit Application
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Careers;
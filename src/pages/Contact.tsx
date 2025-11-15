import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 8122733730", "+91 9876543211"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@thegoldengem.com", "appointments@thegoldengem.com"],
      description: "Send us your queries anytime"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["123 Medical Plaza", "Mumbai, Maharashtra 400001"],
      description: "Visit our state-of-the-art clinic"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Emergency",
      details: ["+91 9876543200", "24/7 Support Available"],
      description: "For urgent hair and scalp concerns"
    }
  ];

  const operatingHours = [
    { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
    { day: "Saturday", time: "9:00 AM - 5:00 PM" },
    { day: "Sunday", time: "10:00 AM - 4:00 PM" },
    { day: "Public Holidays", time: "Emergency Only" }
  ];

  const branches = [
    {
      city: "Mumbai",
      address: "123 Medical Plaza, Bandra West",
      phone: "+91 8122733730",
      manager: "Dr. Priya Sharma"
    },
    {
      city: "Delhi",
      address: "456 Healthcare Center, Connaught Place",
      phone: "+91 9876543211",
      manager: "Dr. Rajesh Kumar"
    },
    {
      city: "Bangalore",
      address: "789 Wellness Hub, Koramangala",
      phone: "+91 9876543212",
      manager: "Dr. Anita Reddy"
    },
    {
      city: "Pune",
      address: "321 Medical Square, Camp Area",
      phone: "+91 9876543213",
      manager: "Dr. Sunil Patil"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with our hair and scalp specialists
            </p>
          </div>

          {/* Contact Methods */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="card-treatment text-center">
                  <CardHeader>
                    <div className="text-primary mx-auto mb-3">{method.icon}</div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {method.details.map((detail, idx) => (
                        <div key={idx} className="font-medium text-sm">{detail}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <section>
              <Card className="card-treatment">
                <CardHeader>
                  <CardTitle className="text-2xl">Book Appointment</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Full Name</label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Phone Number</label>
                      <Input placeholder="Enter your phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email Address</label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Preferred Location</label>
                    <select className="w-full p-2 border border-border rounded-md bg-background">
                      <option>Select a branch</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bangalore</option>
                      <option>Pune</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Service Needed</label>
                    <select className="w-full p-2 border border-border rounded-md bg-background">
                      <option>Select a service</option>
                      <option>Diagnostic Consultation</option>
                      <option>Hair Loss Treatment</option>
                      <option>PRP Therapy</option>
                      <option>Hair Transplant Consultation</option>
                      <option>Scalp Treatment</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Message</label>
                    <Textarea placeholder="Describe your concerns or questions..." rows={4} />
                  </div>
                  <Button className="w-full btn-golden">
                    Submit Appointment Request
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Your information is kept confidential.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Operating Hours & Branches */}
            <section className="space-y-6">
              {/* Operating Hours */}
              <Card className="card-treatment">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {operatingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Branches */}
              <Card className="card-treatment">
                <CardHeader>
                  <CardTitle>Our Branches</CardTitle>
                  <CardDescription>Visit any of our convenient locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {branches.map((branch, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <div className="font-semibold text-lg">{branch.city}</div>
                        <div className="text-sm text-muted-foreground">{branch.address}</div>
                        <div className="text-sm">{branch.phone}</div>
                        <div className="text-xs text-primary">Manager: {branch.manager}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Map Section */}
          <section className="mb-12">
            <Card className="card-treatment">
              <CardHeader>
                <CardTitle>Find Us</CardTitle>
                <CardDescription>Our main clinic location in Mumbai</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive map would be embedded here</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Quick Contact */}
          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Need Immediate Assistance?</h3>
            <p className="mb-6">Our expert team is ready to help with your hair and scalp concerns</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Call Now: +91 8122733730
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
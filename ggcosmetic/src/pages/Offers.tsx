import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const Offers = () => {
  const currentOffers = [
    {
      title: "First-Time Patient Special",
      discount: "30% OFF",
      description: "Complete diagnostic consultation including trichoscopy and scalp analysis",
      originalPrice: "₹5,000",
      offerPrice: "₹3,500",
      validity: "Valid till Dec 31, 2024",
      conditions: ["New patients only", "One-time offer per patient", "Valid at all branches"],
      popular: true
    },
    {
      title: "PRP Treatment Package",
      discount: "25% OFF",
      description: "Complete course of 6 PRP sessions with follow-up consultations",
      originalPrice: "₹60,000",
      offerPrice: "₹45,000",
      validity: "Limited time offer",
      conditions: ["Package must be paid upfront", "Valid for 12 months", "Includes aftercare"],
      popular: false
    },
    {
      title: "Hair Transplant Consultation",
      discount: "FREE",
      description: "Comprehensive evaluation with detailed treatment plan and cost estimate",
      originalPrice: "₹2,000",
      offerPrice: "FREE",
      validity: "Ongoing offer",
      conditions: ["Consultation fee waived", "Detailed assessment included", "No hidden charges"],
      popular: false
    }
  ];

  const seasonalOffers = [
    {
      title: "Winter Hair Care Package",
      discount: "20% OFF",
      description: "Complete winter hair care regimen with specialized treatments",
      price: "Starting from ₹8,000",
      duration: "3-month program",
      includes: ["Scalp moisturizing treatment", "Anti-dandruff therapy", "Hair strengthening protocol"]
    },
    {
      title: "Monsoon Scalp Protection",
      discount: "15% OFF",
      description: "Protect your scalp from monsoon-related hair problems",
      price: "Starting from ₹6,000",
      duration: "2-month program",
      includes: ["Fungal prevention treatment", "Scalp hygiene protocol", "Humidity protection care"]
    }
  ];

  const membershipPlans = [
    {
      title: "Gold Membership",
      price: "₹12,000/year",
      originalPrice: "₹15,000",
      benefits: [
        "20% off all treatments",
        "Free monthly consultations",
        "Priority appointment booking",
        "Complimentary hair products",
        "Free annual trichoscopy"
      ],
      popular: true
    },
    {
      title: "Silver Membership",
      price: "₹8,000/year",
      originalPrice: "₹10,000",
      benefits: [
        "15% off all treatments",
        "Quarterly consultations",
        "Online appointment booking",
        "Seasonal hair care tips",
        "Member-only workshops"
      ],
      popular: false
    }
  ];

  const referralProgram = {
    title: "Refer & Earn",
    description: "Refer friends and family and both of you get rewarded!",
    benefits: [
      "₹1,000 credit for each successful referral",
      "Your friend gets 20% off their first treatment",
      "No limit on referrals",
      "Credits never expire",
      "Can be used for any treatment"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Special Offers & Packages</h1>
            <p className="text-lg text-muted-foreground">
              Exclusive deals and packages for your hair and scalp treatments
            </p>
          </div>

          {/* Current Promotions */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Current Promotions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {currentOffers.map((offer, index) => (
                <Card key={index} className={`card-treatment relative ${offer.popular ? 'border-primary' : ''}`}>
                  {offer.popular && (
                    <Badge className="absolute -top-2 left-4 bg-primary">Most Popular</Badge>
                  )}
                  <CardHeader>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{offer.discount}</div>
                      <CardTitle className="text-xl">{offer.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{offer.description}</CardDescription>
                    
                    <div className="text-center mb-4">
                      <div className="text-sm text-muted-foreground line-through">{offer.originalPrice}</div>
                      <div className="text-2xl font-bold text-primary">{offer.offerPrice}</div>
                      <div className="text-xs text-muted-foreground mt-1">{offer.validity}</div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="text-sm font-semibold">Terms & Conditions:</div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {offer.conditions.map((condition, idx) => (
                          <li key={idx}>• {condition}</li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full btn-golden">
                      Claim Offer
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Seasonal Packages */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Seasonal Hair Care Packages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {seasonalOffers.map((offer, index) => (
                <Card key={index} className="card-treatment">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{offer.title}</CardTitle>
                        <Badge variant="secondary" className="mt-2">{offer.discount}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{offer.price}</div>
                        <div className="text-sm text-muted-foreground">{offer.duration}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{offer.description}</CardDescription>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold">Package Includes:</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {offer.includes.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Membership Plans */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Membership Plans</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {membershipPlans.map((plan, index) => (
                <Card key={index} className={`card-treatment ${plan.popular ? 'border-primary' : ''} relative`}>
                  {plan.popular && (
                    <Badge className="absolute -top-2 left-4 bg-primary">Recommended</Badge>
                  )}
                  <CardHeader>
                    <div className="text-center">
                      <CardTitle className="text-2xl">{plan.title}</CardTitle>
                      <div className="mt-4">
                        <div className="text-sm text-muted-foreground line-through">{plan.originalPrice}</div>
                        <div className="text-3xl font-bold text-primary">{plan.price}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm font-semibold">Membership Benefits:</div>
                      <ul className="space-y-2">
                        {plan.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full mt-6 btn-golden">
                      Join Membership
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Referral Program */}
          <section className="mb-12">
            <Card className="card-treatment">
              <CardHeader>
                <CardTitle className="text-2xl text-center">{referralProgram.title}</CardTitle>
                <CardDescription className="text-center">{referralProgram.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">How It Works:</h4>
                    <ul className="space-y-2">
                      {referralProgram.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎁</div>
                    <Button size="lg" className="btn-golden">
                      Start Referring
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Don't Miss Out!</h3>
            <p className="mb-6">These exclusive offers are available for a limited time. Book your appointment today to take advantage of these amazing deals.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Appointment Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Call for More Info
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
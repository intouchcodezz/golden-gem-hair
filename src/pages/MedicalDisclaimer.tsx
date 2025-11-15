import React from "react";

const MedicalDisclaimer = () => {
  return (
    <section className="min-h-screen bg-background text-foreground px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Medical Disclaimer
        </h1>

        <p className="text-base text-foreground/80 leading-relaxed">
          The information provided on <span className="text-primary">www.thegoldengemhairclinic.com</span> is for
          general educational purposes only and should not be considered a substitute
          for professional medical advice, diagnosis, or treatment.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="font-semibold text-lg text-primary">1. Professional Consultation</h2>
            <p className="text-foreground/80 leading-relaxed">
              Always seek the advice of a qualified trichologist or healthcare provider
              regarding any medical condition. Never disregard professional advice or delay
              seeking it because of information you read on this site.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-primary">2. Accuracy of Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              While we strive to ensure all information is accurate and up to date, The Golden Gem
              does not warrant that the content is complete, reliable, or error-free.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-primary">3. No Doctor-Patient Relationship</h2>
            <p className="text-foreground/80 leading-relaxed">
              The use of this website does not establish a doctor-patient relationship
              between you and The Golden Gem Hair & Trichology Clinic.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-primary">4. External Links</h2>
            <p className="text-foreground/80 leading-relaxed">
              This site may contain links to external websites. We are not responsible for
              the content or privacy practices of those third-party sites.
            </p>
          </div>
        </div>

        <p className="text-sm text-foreground/60 mt-10">
          © {new Date().getFullYear()} The Golden Gem. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default MedicalDisclaimer;

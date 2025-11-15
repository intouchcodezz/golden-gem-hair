import React from "react";

const TermsOfService = () => {
  return (
    <section className="min-h-screen bg-background text-foreground px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Terms & Conditions
        </h1>

        <p className="text-base text-foreground/80 leading-relaxed">
          Welcome to <strong>The Golden Gem Hair & Trichology Clinic</strong>.
          By accessing or using our website (<span className="text-primary">www.thegoldengem.in</span>),
          you agree to comply with and be bound by the following Terms and
          Conditions.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="font-semibold text-lg text-primary">1. Acceptance of Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              By using this website, you acknowledge that you have read,
              understood, and agree to be bound by these Terms. If you do not
              agree, please discontinue using our website immediately.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-primary">2. Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              The Golden Gem provides information about hair, scalp, and trichology
              treatments. All content is for informational purposes only and
              subject to change without notice.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-primary">3. Medical Disclaimer</h2>
            <p className="text-foreground/80 leading-relaxed">
              Content on this site, including text and images, is for educational
              purposes only. It is not a substitute for medical consultation.
              Please consult our experts before making any health decisions.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-primary">4. Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed">
              The Golden Gem shall not be held liable for any direct or indirect
              damages arising from the use or misuse of the information on this
              website.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-primary">5. Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed">
              These Terms shall be governed by the laws of India and subject to
              the jurisdiction of the courts in Chennai, Tamil Nadu.
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

export default TermsOfService;

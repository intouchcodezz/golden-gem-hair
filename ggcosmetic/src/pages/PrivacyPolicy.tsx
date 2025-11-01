import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-background text-foreground px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <p className="text-base text-foreground/80 leading-relaxed">
          At <strong>The Golden Gem Hair & Trichology Clinic</strong>, we respect
          your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard the
          details you share with us through our website{" "}
          <span className="text-primary">www.thegoldengemhairclinic.com</span>.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="font-semibold text-lg text-primary">1. Information We Collect</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may collect personal details such as your name, email, phone number,
              and message through enquiry forms or appointment requests. We do not
              store or share sensitive medical data online.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-primary">2. How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              Your information is used solely for communication, appointment scheduling,
              and service follow-ups. We will never sell or rent your data to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-primary">3. Cookies</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our website may use cookies to improve user experience. You can choose
              to disable cookies in your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-primary">4. Data Security</h2>
            <p className="text-foreground/80 leading-relaxed">
              We implement standard security measures to protect your data from unauthorized
              access or disclosure. However, no online system can be guaranteed to be 100% secure.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-primary">5. Updates to this Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update this Privacy Policy periodically. Changes will be reflected
              on this page with the updated date.
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

export default PrivacyPolicy;

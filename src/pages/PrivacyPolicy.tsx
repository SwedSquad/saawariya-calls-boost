import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-white/80 mt-2">Saawariya Packers and Movers</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white rounded-lg shadow-soft p-8">
            <p className="text-muted-foreground mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Saawariya Packers and Movers ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our moving and packing services or visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Name and contact information (phone number, email address, mailing address)</li>
                <li>Moving details (origin and destination addresses, moving date)</li>
                <li>Inventory information for accurate service provision</li>
                <li>Payment information for billing purposes</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Usage Information</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Website usage data and analytics</li>
                <li>Service preferences and feedback</li>
                <li>Communication records for quality assurance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To provide and manage our moving and packing services</li>
                <li>To communicate with you about your move and service updates</li>
                <li>To process payments and billing</li>
                <li>To improve our services and customer experience</li>
                <li>To comply with legal obligations</li>
                <li>To send promotional materials (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In case of business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission 
                is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability (where applicable)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-section rounded-lg p-6">
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Saawariya Packers and Movers</strong></p>
                  <p>Phone: <a href="tel:+919990903875" className="text-primary hover:underline">+91 9990903875</a></p>
                  <p>Email: <a href="mailto:info@saawariyapackers.com" className="text-primary hover:underline">info@saawariyapackers.com</a></p>
                  <p>Address: Delhi, India</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new Privacy Policy on our website with an updated "Last updated" date.
              </p>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <div className="bg-primary text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Need Moving Services?</h3>
            <p className="mb-6 opacity-90">Contact us today for professional and reliable moving solutions</p>
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.location.href = "tel:+919990903875"}
              className="bg-secondary hover:bg-secondary-light"
            >
              <Phone className="w-5 h-5" />
              Call +91 9990903875
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
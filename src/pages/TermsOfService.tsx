import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";

const TermsOfService = () => {
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
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-white/80 mt-2">Saawariya Packers and Movers</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-soft p-8">
            <p className="text-muted-foreground mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By engaging Saawariya Packers and Movers for moving services, you agree to be bound by these Terms of Service. 
                These terms constitute a legally binding agreement between you and Saawariya Packers and Movers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Description</h2>
              <p className="text-muted-foreground mb-4">
                Saawariya Packers and Movers provides professional moving and packing services including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Domestic and commercial relocation services</li>
                <li>Professional packing and unpacking</li>
                <li>Vehicle transportation</li>
                <li>Warehousing and storage solutions</li>
                <li>Loading and unloading services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Booking and Payment</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">Booking Process</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>All bookings must be confirmed in advance</li>
                <li>Accurate inventory information must be provided</li>
                <li>Moving dates are subject to availability</li>
                <li>Written confirmation will be provided upon booking</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Payment Terms</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Advance payment may be required for booking confirmation</li>
                <li>Final payment due upon completion of services</li>
                <li>Additional charges may apply for services beyond the agreed scope</li>
                <li>All prices are quoted in Indian Rupees (INR)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Customer Responsibilities</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete inventory information</li>
                <li>Declare valuable and fragile items</li>
                <li>Ensure proper access at both origin and destination</li>
                <li>Be present during packing, loading, and delivery</li>
                <li>Check and report any damage immediately upon delivery</li>
                <li>Provide necessary documentation for interstate moves</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Liability and Insurance</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Liability</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>We maintain comprehensive insurance for goods in transit</li>
                <li>Liability is limited to the actual value of damaged items</li>
                <li>Damage claims must be reported within 24 hours of delivery</li>
                <li>We are not liable for damage due to natural disasters or force majeure</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Excluded Items</h3>
              <p className="text-muted-foreground mb-2">We do not transport:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Hazardous materials and flammable substances</li>
                <li>Live animals and plants</li>
                <li>Illegal items and contraband</li>
                <li>Perishable food items</li>
                <li>Personal documents (unless explicitly agreed)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cancellation and Rescheduling</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Cancellations must be made at least 24 hours in advance</li>
                <li>Cancellation fees may apply depending on timing</li>
                <li>Rescheduling is subject to availability</li>
                <li>Weather-related delays will be rescheduled without penalty</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Dispute Resolution</h2>
              <p className="text-muted-foreground">
                Any disputes arising from these terms will be resolved through negotiation. 
                If resolution cannot be reached, disputes will be subject to the jurisdiction 
                of courts in Delhi, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <div className="bg-section rounded-lg p-6">
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Saawariya Packers and Movers</strong></p>
                  <p>Phone: <a href="tel:+919990903875" className="text-primary hover:underline">+91 9990903875</a></p>
                  <p>Email: <a href="mailto:info@saawariyapackers.com" className="text-primary hover:underline">info@saawariyapackers.com</a></p>
                  <p>Service Area: Delhi & Across India</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Modifications</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Updated terms will be 
                posted on our website with the revision date. Continued use of our services 
                constitutes acceptance of modified terms.
              </p>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <div className="bg-primary text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Book Your Move?</h3>
            <p className="mb-6 opacity-90">Contact us today for professional moving services with transparent terms</p>
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

export default TermsOfService;
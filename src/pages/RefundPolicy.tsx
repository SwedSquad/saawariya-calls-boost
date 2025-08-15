import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";

const RefundPolicy = () => {
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
          <h1 className="text-4xl font-bold">Refund Policy</h1>
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground">
                At Saawariya Packers and Movers, we strive to provide excellent service and customer satisfaction. 
                This Refund Policy outlines the conditions under which refunds may be issued for our moving and packing services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Refund Eligibility</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">Full Refund Conditions</h3>
              <p className="text-muted-foreground mb-2">You may be eligible for a full refund if:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>We cancel the service due to our inability to provide the service</li>
                <li>Services are not delivered due to our fault or negligence</li>
                <li>You cancel the booking at least 48 hours before the scheduled service date</li>
                <li>Fundamental breach of service agreement by our company</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Partial Refund Conditions</h3>
              <p className="text-muted-foreground mb-2">Partial refunds may be issued for:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Incomplete service delivery (refund for undelivered portions)</li>
                <li>Damage to goods due to our negligence (compensation as per insurance terms)</li>
                <li>Significant delays in service delivery beyond agreed timeframe</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Non-Refundable Situations</h2>
              <p className="text-muted-foreground mb-2">Refunds will not be issued in the following cases:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Cancellation with less than 24 hours notice</li>
                <li>Customer unavailability on scheduled service date</li>
                <li>Delays due to weather conditions, natural disasters, or government restrictions</li>
                <li>Damage due to normal wear and tear during transportation</li>
                <li>Damage to items not declared as fragile or valuable</li>
                <li>Services already completed successfully</li>
                <li>Changes in customer requirements after service commencement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cancellation Charges</h2>
              <div className="bg-section rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Cancellation Timeline</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>48+ hours before service</span>
                    <span className="font-semibold">No charge</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>24-48 hours before service</span>
                    <span className="font-semibold">25% of total amount</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span>12-24 hours before service</span>
                    <span className="font-semibold">50% of total amount</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Less than 12 hours</span>
                    <span className="font-semibold">100% of advance payment</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Refund Process</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">How to Request a Refund</h3>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
                <li>Contact our customer service team within 7 days of service completion</li>
                <li>Provide booking details and reason for refund request</li>
                <li>Submit any supporting documentation (photos, receipts, etc.)</li>
                <li>Our team will review your request within 3-5 business days</li>
                <li>If approved, refund will be processed within 7-10 business days</li>
              </ol>

              <h3 className="text-xl font-semibold text-foreground mb-3">Refund Method</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Refunds will be processed through the original payment method</li>
                <li>Bank transfers may take 5-7 business days to reflect</li>
                <li>Credit card refunds may take 7-14 business days</li>
                <li>Cash payments will be refunded in cash or bank transfer</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Damage Claims</h2>
              <p className="text-muted-foreground mb-4">
                For damaged goods, compensation will be provided as per our insurance policy terms:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Report damage within 24 hours of delivery</li>
                <li>Provide photographic evidence of damage</li>
                <li>Submit original purchase receipts for valuable items</li>
                <li>Compensation limited to actual depreciated value</li>
                <li>Maximum liability as per service agreement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact for Refunds</h2>
              <div className="bg-section rounded-lg p-6">
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Saawariya Packers and Movers - Refund Department</strong></p>
                  <p>Phone: <a href="tel:+919990903875" className="text-primary hover:underline">+91 9990903875</a></p>
                  <p>Email: <a href="mailto:info@saawariyapackers.com" className="text-primary hover:underline">info@saawariyapackers.com</a></p>
                  <p>Subject Line: "Refund Request - [Your Booking ID]"</p>
                  <p>Business Hours: Monday to Sunday, 9:00 AM to 8:00 PM</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
              <p className="text-muted-foreground">
                This refund policy may be updated from time to time. Any changes will be posted on our website 
                with the updated date. Existing bookings will be governed by the policy in effect at the time of booking.
              </p>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <div className="bg-primary text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Have Questions About Our Refund Policy?</h3>
            <p className="mb-6 opacity-90">Contact our customer service team for clarification</p>
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

export default RefundPolicy;
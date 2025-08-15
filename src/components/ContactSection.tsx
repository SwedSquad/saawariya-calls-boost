import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+919990903875";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@saawariyapackers.com";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919990903875", "_blank");
  };

  return (
    <section className="py-20 bg-primary text-white" id="quote">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Quote Today
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Contact Saawariya Packers and Movers now for a personalized quote and 
              experience stress-free relocation services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Call Us Now</h4>
                      <a 
                        href="tel:+919990903875" 
                        className="text-secondary text-lg font-bold hover:underline"
                      >
                        +91 9990903875
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <a 
                        href="mailto:info@saawariyapackers.com" 
                        className="text-secondary hover:underline"
                      >
                        info@saawariyapackers.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Service Areas</h4>
                      <p className="opacity-90">Delhi & Across India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Working Hours</h4>
                      <p className="opacity-90">24/7 Customer Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Why Customers Choose Us</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">10+</div>
                    <div className="text-sm opacity-80">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">10K+</div>
                    <div className="text-sm opacity-80">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">100%</div>
                    <div className="text-sm opacity-80">Safe Moving</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">24/7</div>
                    <div className="text-sm opacity-80">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Ready to Move? Let's Talk!
              </h3>
              
              <p className="mb-8 opacity-90">
                Get an instant quote by calling us or send us your requirements. 
                Our expert team is ready to assist you with all your moving needs.
              </p>

              <div className="space-y-4">
                <Button 
                  variant="callNow" 
                  size="xl"
                  onClick={handleCallNow}
                  className="w-full bg-success hover:bg-success/90"
                >
                  <Phone className="w-6 h-6" />
                  Call Now: +91 9990903875
                </Button>
                
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={handleWhatsApp}
                  className="w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleEmailClick}
                  className="w-full border-white/30 text-white hover:bg-white/10"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
              </div>

              <div className="mt-8 p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-center opacity-80">
                  <strong>Free Consultation Available</strong><br />
                  No hidden charges • Professional packing • Insured transportation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+919990903875";
  };

  return (
    <section className="relative bg-hero-gradient text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">Trusted by 10,000+ Customers</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional
            <span className="block text-secondary"> Packers & Movers</span>
            in Delhi
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Saawariya Packers and Movers - Your trusted partner for safe, reliable, 
            and hassle-free relocation services across India
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="callNow" 
              size="xl"
              onClick={handleCallNow}
              className="w-full sm:w-auto"
            >
              <Phone className="w-6 h-6" />
              Call Now: +91 9990903875
            </Button>
            
            <Button 
              variant="cta" 
              size="xl"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">10+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">10,000+</div>
              <div className="text-sm opacity-80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-sm opacity-80">Customer Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@saawariyapackers.site</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Delhi & Across India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+919990903875";
  };

  const services = [
    "Domestic Relocation",
    "Office Moving",
    "Car Transportation",
    "Warehousing Solutions",
    "Packing Services",
    "Loading & Unloading"
  ];

  const serviceAreas = [
    "Delhi NCR",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad"
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Saawariya Packers</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Trusted name in the relocation industry, providing professional packing 
              and moving services across India with years of experience and dedication.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:+919990903875" className="text-white/80 hover:text-white transition-smooth">
                  +91 9990903875
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:info@saawariyapackers.com" className="text-white/80 hover:text-white transition-smooth">
                  info@saawariyapackers.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-white/80">Delhi & Across India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/#services" 
                    className="text-white/80 hover:text-white transition-smooth"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <span className="text-white/80">{area}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Working Hours</h5>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-4 h-4" />
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Legal */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-white/80 hover:text-white transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-white/80 hover:text-white transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#quote" className="text-white/80 hover:text-white transition-smooth">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white/80 hover:text-white transition-smooth">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-white/80 hover:text-white transition-smooth">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-white/80 hover:text-white transition-smooth">
                  Refund Policy
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-smooth">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-smooth">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-smooth">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-smooth">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h4 className="text-xl font-bold mb-2">Ready to Move? Get Your Free Quote!</h4>
            <p className="text-white/80 mb-4">Call us now for professional moving services</p>
            <Button 
              variant="cta" 
              size="lg"
              onClick={handleCallNow}
              className="bg-secondary hover:bg-secondary-light"
            >
              <Phone className="w-5 h-5" />
              Call +91 9990903875
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; 2024 Saawariya Packers and Movers. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Professional Moving Services | Delhi & Across India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Truck, Home, Building2, Warehouse, Shield, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Domestic Relocation",
      description: "Safe and secure household shifting services with professional packing and unpacking.",
      features: ["Professional Packing", "Safe Transportation", "Unpacking Service"]
    },
    {
      icon: Building2,
      title: "Office Moving",
      description: "Minimize business downtime with our efficient corporate relocation solutions.",
      features: ["IT Equipment Care", "Minimal Downtime", "Setup Assistance"]
    },
    {
      icon: Truck,
      title: "Car Transportation",
      description: "Door-to-door vehicle transportation with complete insurance coverage.",
      features: ["Damage-Free Transit", "Full Insurance", "Real-time Tracking"]
    },
    {
      icon: Warehouse,
      title: "Warehousing Solutions",
      description: "Secure storage facilities for your belongings with 24/7 surveillance.",
      features: ["Climate Controlled", "24/7 Security", "Flexible Duration"]
    }
  ];

  const handleCallNow = () => {
    window.location.href = "tel:+919990903875";
  };

  return (
    <section className="py-20 bg-section" id="services">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Moving Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive relocation solutions tailored to meet your specific needs 
            with professional expertise and reliable service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-soft hover:shadow-medium transition-smooth">
              <div className="bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Saawariya Packers?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-success/10 rounded-lg p-2 mt-1">
                    <Shield className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">100% Safe & Secure</h4>
                    <p className="text-muted-foreground">Professional handling with comprehensive insurance coverage for all your belongings.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-2 mt-1">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">On-Time Delivery</h4>
                    <p className="text-muted-foreground">Committed to delivering your goods safely within the promised timeframe.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 rounded-lg p-2 mt-1">
                    <Truck className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Professional Team</h4>
                    <p className="text-muted-foreground">Trained and experienced professionals dedicated to providing excellent service.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="bg-primary/5 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Move?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Get instant quote and professional assistance for your relocation needs.
                </p>
                <Button 
                  variant="callNow" 
                  size="lg"
                  onClick={handleCallNow}
                  className="w-full"
                >
                  <Phone className="w-5 h-5" />
                  Call +91 9990903875
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
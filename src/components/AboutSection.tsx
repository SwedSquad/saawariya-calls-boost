import { Shield, Users, Clock, Star, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Premium packing materials including bubble wrap, corrugated sheets, and sturdy containers"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated crew of educated specialists ensuring professional handling"
    },
    {
      icon: Clock,
      title: "Punctual Service",
      description: "Commitment to timely delivery with real-time tracking"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Transparent pricing with no hidden charges and 24/7 support"
    }
  ];

  const services = [
    "Disassembling and reassembling furniture",
    "Careful loading and transportation",
    "Fragile items handling with precision",
    "Real-time tracking and updates",
    "24/7 customer service support",
    "Secure warehousing facilities"
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Saawariya Packers and Movers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A trusted name in the relocation industry, providing top-notch packing and 
              moving services in Delhi and across India.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Recognized for Professionalism & Consumer-Centric Approach
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Saawariya Packers and Movers is a reliable name within the relocation industry, 
                providing top-notch packing and transferring services in Delhi and across India. 
                Recognized for their professionalism and consumer-centric approach, we focus on 
                domestic relocation, workplace moving, car transportation, and warehousing solutions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                With years of experience and a dedicated crew of educated specialists, we ensure 
                a trouble-free moving experience for individuals, households, and businesses alike. 
                Our commitment to safety and punctuality sets us apart in the industry.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                We use premium packing materials including bubble wrap, corrugated sheets, 
                stretch film, and sturdy containers to protect valuable belongings during transit. 
                Our team handles everything from disassembling furniture to careful loading, 
                transportation, and reassembling at the new destination.
              </p>
            </div>

            <div className="bg-section rounded-xl p-8">
              <h4 className="text-xl font-bold text-foreground mb-6">Our Key Strengths</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">{feature.title}</h5>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Detail */}
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-soft mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Customer Satisfaction is Our Priority
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We provide personalized relocation plans tailored to each client's specific 
                  needs and budget. Our transparent pricing policy, without hidden expenses, 
                  builds trust with clients and sets us apart from many other service providers.
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether it's fragile crockery or bulky furniture, each item is treated with 
                  care and precision. Real-time monitoring and 24/7 customer service ensure 
                  that clients are always informed and comfortable during the shifting process.
                </p>

                <div className="bg-primary/5 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-4">What Sets Us Apart:</h4>
                  <ul className="space-y-2">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-section rounded-lg p-6">
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Vehicle Transportation Services
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    In addition to residential and commercial moves, we provide reliable 
                    vehicle and motorbike transportation services. Using specifically designed 
                    carriers, we ensure safe and damage-free delivery of vehicles across cities and states.
                  </p>
                </div>

                <div className="bg-section rounded-lg p-6">
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Secure Warehousing Facilities
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Our warehousing and storage facilities are secure, clean, and equipped with 
                    surveillance systems, making them ideal for customers who require temporary 
                    storage during the moving process.
                  </p>
                </div>

                <div className="bg-primary text-white rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4">Why Choose Us?</h4>
                  <p className="opacity-90">
                    Located in Delhi, we serve a wide customer base across NCR and beyond. 
                    Our local expertise, efficient logistics, and focus on client care make us 
                    a preferred choice for hundreds of satisfied clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-hero-gradient text-white rounded-xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Choose Reliability, Efficiency, and Care
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Our growing reputation is backed by positive reviews and repeat clients who trust us 
              with their valuable assets. From a small apartment move within Delhi to a large-scale 
              office relocation across India, we deliver consistency, quality, and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = "tel:+919990903875"}
                className="bg-success hover:bg-success/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-smooth shadow-medium"
              >
                Call +91 9990903875
              </button>
              <button 
                onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-smooth"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
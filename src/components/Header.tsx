import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+919990903875";
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-soft z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Saawariya Packers
            </h1>
          </div>

          {/* Contact Info - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>info@saawariyapackers.com</span>
            </div>
            
            <Button 
              variant="callNow" 
              size="sm"
              onClick={handleCallNow}
            >
              <Phone className="w-4 h-4" />
              +91 9990903875
            </Button>
          </div>

          {/* Mobile Call Button */}
          <div className="md:hidden">
            <Button 
              variant="callNow" 
              size="sm"
              onClick={handleCallNow}
            >
              <Phone className="w-4 h-4" />
              Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
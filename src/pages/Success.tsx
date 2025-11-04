import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Wifi } from "lucide-react";
import successBg from "@/assets/success_bg.png";

const Success = () => {
  useEffect(() => {
    // Confetti effect or celebration animation could go here
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${successBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />

      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-graffiti-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-graffiti-cyan/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 space-y-8 max-w-2xl">
        <div className="space-y-6">
          <div className="relative inline-block">
            <CheckCircle className="w-32 h-32 mx-auto text-graffiti-cyan drop-shadow-glow-cyan animate-scale-in" />
            <Wifi className="w-16 h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-graffiti-orange animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-graffiti bg-clip-text text-transparent animate-fade-in">
            Connected!
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90">
            You're now online at ANTIEQ Wisma Kost
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-sm text-muted-foreground">Network</p>
              <p className="text-lg font-semibold text-foreground">ANTIEQ WiFi</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Speed</p>
              <p className="text-lg font-semibold text-graffiti-cyan">Fast</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <p className="text-lg font-semibold text-graffiti-orange">Active</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="text-lg font-semibold text-foreground">Unlimited</p>
            </div>
          </div>
        </div>

        <Button
          onClick={() => window.location.href = "/"}
          className="bg-gradient-graffiti hover:opacity-90 text-primary-foreground font-bold text-lg px-8 py-6 shadow-glow-orange transition-all duration-300 hover:shadow-glow-cyan"
        >
          Start Browsing
        </Button>

        <p className="text-sm text-muted-foreground">
          Enjoy your high-speed internet connection!
        </p>
      </div>
    </div>
  );
};

export default Success;

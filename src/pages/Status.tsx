import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import statusBg from "@/assets/status_bg.png";
import { Loader2 } from "lucide-react";

const Status = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate connection process
    const timer = setTimeout(() => {
      navigate("/success");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm"
        style={{ backgroundImage: `url(${statusBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 space-y-8">
        <div className="space-y-4">
          <Loader2 className="w-24 h-24 mx-auto animate-spin text-graffiti-orange" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-graffiti bg-clip-text text-transparent">
            Connecting...
          </h1>
          <p className="text-xl text-foreground/80">
            Establishing secure connection
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-graffiti animate-progress"></div>
          </div>
          <p className="text-sm text-muted-foreground">Please wait...</p>
        </div>
      </div>
    </div>
  );
};

export default Status;

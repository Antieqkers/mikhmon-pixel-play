import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      toast.success("Connecting to WiFi...");
      navigate("/status");
    }, 1000);
  };

  return (
    <form onSubmit={handleLogin} className="w-full max-w-md space-y-6 px-6">
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="h-14 bg-card/50 border-border text-foreground placeholder:text-muted-foreground text-lg backdrop-blur-sm"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-14 bg-card/50 border-border text-foreground placeholder:text-muted-foreground text-lg backdrop-blur-sm"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-14 bg-gradient-graffiti hover:opacity-90 text-primary-foreground font-bold text-lg shadow-glow-orange transition-all duration-300 hover:shadow-glow-cyan"
      >
        {isLoading ? "Connecting..." : "Connect to WiFi"}
      </Button>

      <div className="text-center text-muted-foreground text-sm">
        <p>Free WiFi Access</p>
        <p className="text-xs mt-1">Powered by ANTIEQ Wisma Kost</p>
      </div>
    </form>
  );
};

import { LoginForm } from "@/components/LoginForm";
import logo from "@/assets/logo.png";
import roket from "@/assets/roket.png";

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-graffiti-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-graffiti-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        {/* Logo Section */}
        <div className="mb-8 flex flex-col items-center animate-fade-in">
          <img 
            src={logo} 
            alt="ANTIEQ Wisma Kost" 
            className="w-full max-w-2xl h-auto mb-6 drop-shadow-2xl"
          />
          <div className="flex items-center justify-center gap-4 mb-2">
            <img 
              src={roket} 
              alt="Rocket" 
              className="w-20 h-20 animate-bounce"
            />
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full flex justify-center">
          <LoginForm />
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-center text-muted-foreground text-xs">
        <p>© 2025 ANTIEQ Wisma Kost. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;

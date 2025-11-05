import { LoginForm } from "@/components/LoginForm";
import loginBg from "@/assets/login-bg.png";
import roket from "@/assets/roket.png";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Fullscreen Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        {/* Rocket Section */}
        <div className="mb-8 flex flex-col items-center animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-2">
            <img 
              src={roket} 
              alt="Rocket" 
              className="w-20 h-20 md:w-24 md:h-24 animate-bounce drop-shadow-2xl"
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

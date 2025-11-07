import { useState } from "react";

const LoginPreview = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(true);
    setTimeout(() => setShowError(false), 3000);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/mikrotik-hotspot/login-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-pink-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Glass Card */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 animate-[fadeIn_0.6s_ease-out]">
            
            {/* Logo */}
            <div className="flex justify-center mb-6 animate-[scaleIn_0.6s_ease-out_0.2s_both]">
              <img 
                src="/mikrotik-hotspot/logo.png" 
                alt="ANTIEQ Wisma Kost Logo" 
                className="h-20 w-20 drop-shadow-2xl"
              />
            </div>

            {/* Title Section */}
            <div className="text-center mb-8 animate-[fadeIn_0.6s_ease-out_0.4s_both]">
              <h1 className="text-2xl font-light text-white mb-2">Welcome to</h1>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                ANTIEQ Wisma Kost
              </h2>
              <p className="text-white/80 text-sm">Connect to free high-speed WiFi</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4 animate-[fadeIn_0.6s_ease-out_0.6s_both]">
              
              {/* Error Message */}
              {showError && (
                <div className="bg-red-500/20 border border-red-500/50 text-white px-4 py-3 rounded-xl text-sm animate-[shake_0.5s_ease-in-out]">
                  Ini hanya preview. Upload ke MikroTik untuk login sesungguhnya.
                </div>
              )}

              {/* Username Input */}
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent backdrop-blur-sm transition-all"
                />
              </div>

              {/* Password Input */}
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent backdrop-blur-sm transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Connect to WiFi
              </button>
            </form>

            {/* Footer */}
            <div className="text-center mt-6 animate-[fadeIn_0.6s_ease-out_0.8s_both]">
              <p className="text-white/90 text-sm font-medium">Free WiFi Access</p>
              <p className="text-white/60 text-xs mt-1">Powered by ANTIEQ Wisma Kost</p>
            </div>

            {/* Rocket Animation */}
            <div className="absolute -bottom-10 -right-10 animate-[float_3s_ease-in-out_infinite]">
              <img 
                src="/mikrotik-hotspot/roket.png" 
                alt="Rocket" 
                className="h-32 w-32 opacity-50 rotate-45"
              />
            </div>
          </div>

          {/* Info Banner */}
          <div className="mt-4 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/50 text-yellow-100 px-4 py-3 rounded-xl text-center text-sm">
            ⚠️ Ini hanya PREVIEW. File asli ada di folder <strong>mikrotik-hotspot/</strong>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
};

export default LoginPreview;

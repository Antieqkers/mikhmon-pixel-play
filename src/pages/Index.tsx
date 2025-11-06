const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary/20 to-background">
      <div className="max-w-2xl w-full bg-card rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-foreground">
          MikroTik Hotspot Template
        </h1>
        
        <div className="space-y-4 text-muted-foreground">
          <p className="text-lg text-center">
            Template ini siap untuk diupload ke MikroTik RouterOS RB450Gx4
          </p>
          
          <div className="bg-muted/50 rounded-lg p-6 space-y-3">
            <h2 className="text-xl font-semibold text-foreground">📁 File yang Tersedia:</h2>
            <ul className="space-y-2 text-sm">
              <li>✅ <strong>login.html</strong> - Halaman login WiFi</li>
              <li>✅ <strong>alogin.html</strong> - Halaman sukses login</li>
              <li>✅ <strong>status.html</strong> - Halaman proses koneksi</li>
              <li>✅ <strong>error.html</strong> - Halaman error</li>
              <li>✅ <strong>styles.css</strong> - File styling</li>
              <li>✅ <strong>Images</strong> - Logo, background, dan icon</li>
            </ul>
          </div>
          
          <div className="bg-primary/10 rounded-lg p-6 space-y-3">
            <h2 className="text-xl font-semibold text-foreground">🚀 Cara Install:</h2>
            <ol className="space-y-2 text-sm list-decimal list-inside">
              <li>Download semua file dari folder <code className="bg-muted px-2 py-1 rounded">mikrotik-hotspot/</code></li>
              <li>Login ke MikroTik via Winbox atau WebFig</li>
              <li>Buka menu Files dan upload semua file</li>
              <li>Pindahkan ke folder <code className="bg-muted px-2 py-1 rounded">hotspot/</code></li>
              <li>Restart Hotspot Service</li>
            </ol>
          </div>
          
          <p className="text-center text-sm italic">
            Lihat README.txt untuk panduan lengkap
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

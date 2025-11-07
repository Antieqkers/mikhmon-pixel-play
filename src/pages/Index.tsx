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
            <h2 className="text-xl font-semibold text-foreground">🚀 Cara Install ke RB450Gx4:</h2>
            <ol className="space-y-2 text-sm list-decimal list-inside">
              <li>Download semua file dari folder <code className="bg-muted px-2 py-1 rounded">mikrotik-hotspot/</code></li>
              <li>Backup dulu: <code className="bg-muted px-2 py-1 rounded">/system backup save</code></li>
              <li>Upload semua file via Winbox ke root directory</li>
              <li>Pindahkan ke folder <code className="bg-muted px-2 py-1 rounded">hotspot/</code></li>
              <li>Set HTML Directory: <code className="bg-muted px-2 py-1 rounded">/ip hotspot profile set hsprof1 html-directory=hotspot</code></li>
              <li>Restart service atau reboot router</li>
            </ol>
          </div>
          
          <div className="bg-destructive/10 rounded-lg p-6 space-y-3 border border-destructive/20">
            <h2 className="text-xl font-semibold text-foreground">⚠️ Troubleshooting: Tersambung tapi tidak ada internet</h2>
            <ul className="space-y-2 text-sm">
              <li><strong>1. Cek HTML Directory:</strong> <code className="bg-muted px-2 py-1 rounded">/ip hotspot profile print</code></li>
              <li><strong>2. Pastikan file di folder hotspot:</strong> <code className="bg-muted px-2 py-1 rounded">/file print</code></li>
              <li><strong>3. Clear browser cache</strong> atau gunakan mode incognito</li>
              <li><strong>4. Cek DNS:</strong> <code className="bg-muted px-2 py-1 rounded">/ip dns set servers=8.8.8.8</code></li>
              <li><strong>5. Restart hotspot service</strong> atau reboot router</li>
            </ul>
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

import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary/20 to-background">
      <div className="max-w-2xl w-full bg-card rounded-lg shadow-lg p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-foreground">
            MikroTik Hotspot Template
          </h1>
          <Link 
            to="/preview"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            👁️ Lihat Preview
          </Link>
        </div>
        
        <div className="space-y-4 text-muted-foreground">
          <p className="text-lg text-center">
            Template ini siap untuk diupload ke MikroTik RouterOS RB450Gx4
          </p>
          
          <div className="bg-muted/50 rounded-lg p-6 space-y-3">
            <h2 className="text-xl font-semibold text-foreground">📁 File yang Tersedia:</h2>
            <ul className="space-y-2 text-sm">
              <li>✅ <strong className="text-primary">alogin.html</strong> - HALAMAN LOGIN UTAMA (yang dipakai MikroTik!)</li>
              <li>✅ <strong>status.html</strong> - Halaman proses koneksi</li>
              <li>✅ <strong>error.html</strong> - Halaman error</li>
              <li>✅ <strong>styles.css</strong> - File styling</li>
              <li>✅ <strong>Images</strong> - Logo, background, dan icon</li>
              <li className="text-muted-foreground text-xs mt-2">ℹ️ File login.html hanya untuk preview, tidak perlu diupload ke MikroTik</li>
            </ul>
          </div>
          
          <div className="bg-primary/10 rounded-lg p-6 space-y-3">
            <h2 className="text-xl font-semibold text-foreground">🚀 Cara Install ke RB450Gx4:</h2>
            <ol className="space-y-2 text-sm list-decimal list-inside">
              <li>Download semua file dari folder <code className="bg-muted px-2 py-1 rounded">mikrotik-hotspot/</code> <span className="text-destructive font-semibold">(KECUALI login.html)</span></li>
              <li>Backup dulu: <code className="bg-muted px-2 py-1 rounded">/system backup save</code></li>
              <li>Upload file via Winbox → Files → folder <code className="bg-muted px-2 py-1 rounded">hotspot/</code></li>
              <li className="font-semibold text-primary">PENTING: Pastikan <code className="bg-muted px-2 py-1 rounded">alogin.html</code> ada di folder hotspot!</li>
              <li>Set HTML Directory: <code className="bg-muted px-2 py-1 rounded">/ip hotspot profile set hsprof1 html-directory=hotspot</code></li>
              <li>Restart service atau reboot router</li>
            </ol>
          </div>
          
          <div className="bg-destructive/10 rounded-lg p-6 space-y-3 border border-destructive/20">
            <h2 className="text-xl font-semibold text-foreground">⚠️ Troubleshooting</h2>
            
            <div className="space-y-3">
              <div className="bg-destructive/20 p-3 rounded">
                <p className="font-semibold text-sm mb-2">Muncul parameter $(error), $(username), dll:</p>
                <ul className="space-y-1 text-xs ml-4">
                  <li>❌ File yang diupload adalah <strong>login.html</strong></li>
                  <li>✅ <strong>SOLUSI:</strong> Upload file <strong>alogin.html</strong> (bukan login.html!)</li>
                  <li>✅ Hapus file login.html dari folder hotspot</li>
                  <li>✅ Clear browser cache (Ctrl+Shift+Delete)</li>
                </ul>
              </div>
              
              <p className="font-semibold text-sm">Tersambung tapi tidak ada internet:</p>
              <ul className="space-y-1 text-xs ml-4">
                <li><strong>1.</strong> Cek HTML Directory: <code className="bg-muted px-1 py-0.5 rounded text-[10px]">/ip hotspot profile print</code></li>
                <li><strong>2.</strong> Pastikan <code className="bg-muted px-1 py-0.5 rounded text-[10px]">alogin.html</code> ada: <code className="bg-muted px-1 py-0.5 rounded text-[10px]">/file print</code></li>
                <li><strong>3.</strong> Clear browser cache atau gunakan mode incognito</li>
                <li><strong>4.</strong> Cek DNS: <code className="bg-muted px-1 py-0.5 rounded text-[10px]">/ip dns set servers=8.8.8.8</code></li>
                <li><strong>5.</strong> Restart hotspot service atau reboot router</li>
              </ul>
            </div>
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

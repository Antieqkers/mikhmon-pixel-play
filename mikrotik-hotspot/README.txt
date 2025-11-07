═══════════════════════════════════════════════════════════════════════════════
  ANTIEQ WISMA KOST - MIKROTIK HOTSPOT LOGIN PAGE
  Panduan Upload & Instalasi untuk MikroTik RB450Gx4
═══════════════════════════════════════════════════════════════════════════════

📦 FILE YANG HARUS DIUPLOAD KE MIKROTIK:
─────────────────────────────────────────
✓ alogin.html      ← HALAMAN LOGIN UTAMA (WAJIB!)
✓ status.html      ← Halaman status koneksi
✓ error.html       ← Halaman error
✓ styles.css       ← File CSS untuk styling
✓ logo.png         ← Logo ANTIEQ Wisma Kost
✓ roket.png        ← Gambar roket animasi
✓ login-bg.png     ← Background login
✓ status_bg.png    ← Background status
✓ success_bg.png   ← Background success

PENTING: File login.html TIDAK PERLU diupload! Yang dipakai MikroTik adalah alogin.html


═══════════════════════════════════════════════════════════════════════════════
  LANGKAH-LANGKAH UPLOAD KE MIKROTIK RB450Gx4
═══════════════════════════════════════════════════════════════════════════════

METODE 1: VIA WINBOX (PALING MUDAH)
────────────────────────────────────
1. Buka Winbox dan login ke MikroTik RB450Gx4
2. Klik menu "Files" di sidebar kiri
3. Buka folder "hotspot" (double-click)
4. Drag & drop SEMUA file dari folder mikrotik-hotspot/ ke jendela Files
5. Tunggu sampai upload selesai (cek progress bar)

METODE 2: VIA FTP
─────────────────
1. Pastikan FTP service aktif di MikroTik:
   /ip service enable ftp

2. Gunakan FileZilla atau FTP client lain:
   Host: [IP MikroTik]
   Username: admin
   Password: [password admin]
   Port: 21

3. Masuk ke folder /hotspot/
4. Upload semua file ke folder tersebut

METODE 3: VIA WEB (WebFig)
───────────────────────────
1. Buka browser, akses http://[IP-MikroTik]
2. Login dengan username & password admin
3. Klik menu "Files"
4. Klik folder "hotspot"
5. Klik tombol "Upload", pilih file satu per satu
6. Ulangi untuk semua file


═══════════════════════════════════════════════════════════════════════════════
  KONFIGURASI HOTSPOT PROFILE
═══════════════════════════════════════════════════════════════════════════════

Setelah upload file, set HTML directory di Hotspot Profile:

VIA TERMINAL/COMMAND:
────────────────────
/ip hotspot profile set [nama-profile] html-directory=hotspot

CONTOH jika profile bernama "hsprof1":
/ip hotspot profile set hsprof1 html-directory=hotspot

VIA WINBOX:
───────────
1. Buka menu IP → Hotspot → Server Profiles
2. Double-click profile yang digunakan
3. Tab "Login", set HTML Directory = hotspot
4. Klik Apply → OK


═══════════════════════════════════════════════════════════════════════════════
  TROUBLESHOOTING: HALAMAN LOGIN TIDAK MUNCUL / TERSAMBUNG TANPA INTERNET
═══════════════════════════════════════════════════════════════════════════════

MASALAH 1: Halaman login tidak muncul, langsung internet
─────────────────────────────────────────────────────────
✓ Cek Hotspot Profile:
  /ip hotspot profile print
  /ip hotspot profile set [nama-profile] html-directory=hotspot

✓ Pastikan file alogin.html ada di folder hotspot:
  /file print where name~"hotspot/alogin.html"

✓ Restart Hotspot service:
  /ip hotspot remove [hotspot-name]
  [Setup ulang hotspot atau restore backup]


MASALAH 2: Muncul parameter $(error), $(username), dll
───────────────────────────────────────────────────────
PENYEBAB: File yang diupload adalah login.html, bukan alogin.html!

SOLUSI:
1. Pastikan file bernama "alogin.html" (bukan login.html)
2. Re-upload file alogin.html yang sudah diperbaiki
3. Hapus file login.html jika ada di folder hotspot
4. Clear browser cache (Ctrl+Shift+Delete)


MASALAH 3: Tersambung tapi tidak ada internet
──────────────────────────────────────────────
✓ Cek NAT Masquerade:
  /ip firewall nat print
  /ip firewall nat add chain=srcnat action=masquerade out-interface=[interface-internet]

✓ Cek DNS Server:
  /ip dns print
  /ip dns set servers=8.8.8.8,8.8.4.4 allow-remote-requests=yes

✓ Cek Routing:
  /ip route print
  Pastikan ada default route: 0.0.0.0/0 gateway=[gateway-internet]

✓ Cek IP Address di interface:
  /ip address print
  Pastikan interface internet punya IP yang benar


MASALAH 4: Halaman login muncul tapi tidak bisa login
──────────────────────────────────────────────────────
✓ Cek User HotSpot:
  /ip hotspot user print
  /ip hotspot user add name=test password=test

✓ Test login dengan user tersebut

✓ Cek log untuk error:
  /log print where topics~"hotspot"


MASALAH 5: Gambar tidak muncul (logo, background)
──────────────────────────────────────────────────
✓ Pastikan SEMUA file gambar sudah diupload:
  /file print where name~"hotspot/"
  
  Harus ada:
  - hotspot/logo.png
  - hotspot/roket.png
  - hotspot/login-bg.png
  - hotspot/status_bg.png
  - hotspot/success_bg.png

✓ Re-upload file gambar jika ada yang kurang

✓ Clear browser cache


═══════════════════════════════════════════════════════════════════════════════
  TIPS TAMBAHAN UNTUK RB450Gx4
═══════════════════════════════════════════════════════════════════════════════

✓ Backup konfigurasi sebelum mengubah apapun:
  /system backup save name=backup-sebelum-custom-login

✓ Jika sudah ada hotspot berjalan, cukup upload file dan ubah html-directory

✓ Untuk performa optimal, gunakan RouterOS versi 7.x

✓ Jika ada masalah, restore backup:
  /system backup load name=backup-sebelum-custom-login

✓ Clear cache browser jika halaman tidak update:
  - Chrome: Ctrl+Shift+Delete → Clear browsing data
  - Pilih "Cached images and files"
  - Time range: All time

✓ Test dari device berbeda (HP, laptop) untuk memastikan


═══════════════════════════════════════════════════════════════════════════════
  CHECKLIST VERIFIKASI
═══════════════════════════════════════════════════════════════════════════════

[ ] File alogin.html sudah diupload (BUKAN login.html!)
[ ] File styles.css sudah diupload
[ ] Semua file gambar (logo.png, roket.png, dll) sudah diupload
[ ] HTML directory di profile sudah diset ke "hotspot"
[ ] Hotspot service sudah running
[ ] NAT masquerade sudah dikonfigurasi
[ ] DNS server sudah diset
[ ] Test login berhasil dengan user yang ada
[ ] Halaman login muncul dengan benar (tanpa parameter $)
[ ] Gambar/logo tampil dengan sempurna
[ ] Clear cache browser sudah dilakukan


═══════════════════════════════════════════════════════════════════════════════
  KONTAK SUPPORT
═══════════════════════════════════════════════════════════════════════════════

Jika masih ada masalah setelah mengikuti panduan ini:
1. Screenshot halaman error
2. Copy hasil command: /ip hotspot profile print
3. Copy hasil command: /file print where name~"hotspot/"
4. Hubungi tim support dengan informasi tersebut


═══════════════════════════════════════════════════════════════════════════════
Terima kasih menggunakan ANTIEQ Wisma Kost WiFi System!
═══════════════════════════════════════════════════════════════════════════════
========================================
MIKROTIK HOTSPOT TEMPLATE - ANTIEQ WISMA KOST
========================================

CARA INSTALL KE MIKROTIK:
-------------------------

1. Login ke MikroTik via WinBox atau WebFig

2. Masuk ke menu Files, upload semua file:
   - login.html
   - status.html
   - alogin.html
   - styles.css
   - logo.png
   - roket.png
   - status_bg.png
   - success_bg.png

3. Pindahkan file ke folder hotspot:
   - Buka menu: Files
   - Drag semua file ke folder: hotspot/
   
   ATAU via Terminal:
   /file move [find name="login.html"] destination=hotspot/
   /file move [find name="status.html"] destination=hotspot/
   /file move [find name="alogin.html"] destination=hotspot/
   /file move [find name="styles.css"] destination=hotspot/
   /file move [find name="logo.png"] destination=hotspot/
   /file move [find name="roket.png"] destination=hotspot/
   /file move [find name="status_bg.png"] destination=hotspot/
   /file move [find name="success_bg.png"] destination=hotspot/

4. Restart Hotspot Server:
   Menu: IP > Hotspot > Server > klik server > Disable lalu Enable

5. Test dengan connect ke WiFi hotspot


STRUKTUR FILE:
--------------
login.html      - Halaman login utama
status.html     - Halaman proses koneksi (redirect otomatis)
alogin.html     - Halaman sukses koneksi dengan info user
styles.css      - File CSS untuk semua styling
logo.png        - Logo ANTIEQ Wisma Kost
roket.png       - Ilustrasi rocket
status_bg.png   - Background untuk halaman status (opsional)
success_bg.png  - Background untuk halaman success (opsional)


FITUR:
------
✓ Responsive design (mobile & desktop)
✓ Animasi modern dan smooth
✓ Graffiti-style dengan warna orange & cyan
✓ Support untuk username/password authentication
✓ Support CHAP authentication
✓ Error handling
✓ Auto-redirect setelah login
✓ Info koneksi lengkap (IP, MAC, uptime)
✓ Tombol logout


VARIABEL MIKROTIK YANG DIGUNAKAN:
----------------------------------
$(link-login-only)  - URL untuk proses login
$(link-logout)      - URL untuk logout
$(link-orig)        - URL tujuan awal user
$(username)         - Username yang login
$(ip)               - IP address user
$(mac)              - MAC address user
$(uptime)           - Durasi koneksi
$(error)            - Pesan error (jika ada)
$(chap-id)          - CHAP ID untuk authentication
$(chap-challenge)   - CHAP challenge untuk authentication


TROUBLESHOOTING:
----------------
1. Jika halaman tidak muncul:
   - Pastikan semua file sudah ada di folder hotspot/
   - Restart hotspot server
   - Clear cache browser

2. Jika CSS tidak load:
   - Pastikan styles.css ada di folder yang sama dengan login.html
   - Check permission file

3. Jika gambar tidak muncul:
   - Pastikan file PNG sudah diupload
   - Check nama file (case sensitive)

4. Jika login tidak berfungsi:
   - Check konfigurasi Hotspot Server
   - Pastikan user sudah dibuat di IP > Hotspot > Users


SUPPORT:
--------
Untuk pertanyaan atau masalah, hubungi administrator sistem.

Template ini dibuat khusus untuk ANTIEQ Wisma Kost.
Free WiFi for all residents and guests.

========================================
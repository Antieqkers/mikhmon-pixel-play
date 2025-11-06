========================================
MIKROTIK HOTSPOT TEMPLATE
ANTIEQ WISMA KOST
Kompatibel dengan RB450Gx4 dan semua RouterOS v6+
========================================

FILE YANG DIPERLUKAN:
--------------------
1. login.html     - Halaman login utama
2. alogin.html    - Halaman setelah berhasil login
3. status.html    - Halaman proses koneksi
4. error.html     - Halaman error (opsional)
5. styles.css     - File styling
6. logo.png       - Logo ANTIEQ
7. roket.png      - Gambar roket
8. login-bg.png   - Background image

CARA INSTALL KE MIKROTIK:
------------------------
1. Masuk ke Winbox atau WebFig
2. Buka menu Files
3. Upload semua file di atas ke router
4. Pindahkan ke folder hotspot:
   - Drag & drop semua file ke folder "hotspot"
   - Atau via FTP ke direktori /hotspot/
5. Restart Hotspot Service:
   - Terminal: /ip hotspot profile set [nama-profile] html-directory=hotspot
   - Atau: System > Reboot

TROUBLESHOOTING:
--------------
1. Halaman tidak muncul:
   - Cek apakah file ada di folder /hotspot/
   - Restart browser dan clear cache
   - Cek hotspot profile: /ip hotspot profile print

2. CSS tidak load:
   - Pastikan styles.css ada di folder yang sama
   - Restart hotspot service

3. Gambar tidak muncul:
   - Pastikan semua file .png sudah diupload
   - Cek nama file harus sama persis (case sensitive)

4. Login gagal:
   - Cek user hotspot di /ip hotspot user print
   - Pastikan username dan password benar
   - Cek IP binding jika ada

FITUR:
------
- Responsive design (mobile & desktop)
- Animasi modern dan smooth
- Support CHAP authentication
- Auto-redirect setelah login
- Error handling
- Info koneksi (IP, MAC, uptime)
- Tombol logout

SUPPORT:
--------
Compatible dengan:
- MikroTik RB450Gx4
- RouterOS v6.x dan v7.x
- Semua model MikroTik dengan Hotspot

VARIABEL MIKROTIK YANG DIGUNAKAN:
--------------------------------
$(link-login-only)   - URL form login
$(link-orig)         - URL tujuan awal
$(username)          - Username user
$(ip)               - IP address user
$(mac)              - MAC address user
$(uptime)           - Waktu koneksi
$(error)            - Pesan error
$(chap-id)          - CHAP authentication ID
$(chap-challenge)   - CHAP challenge string
$(link-logout)      - URL untuk logout

========================================
© 2025 ANTIEQ Wisma Kost
========================================

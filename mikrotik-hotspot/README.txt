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

CARA INSTALL KE MIKROTIK RB450Gx4:
----------------------------------
PENTING! Ikuti langkah ini dengan URUT:

1. BACKUP dulu konfigurasi Mikrotik Anda:
   Terminal: /system backup save name=backup-before-hotspot

2. Upload semua file via Winbox:
   - Buka Winbox > Files
   - Drag & drop SEMUA file (html, css, png) ke root directory
   - Tunggu sampai semua file selesai upload (cek kolom "Size")

3. Pindahkan file ke folder hotspot:
   a. Jika folder "hotspot" belum ada, buat dulu:
      Terminal: /file print
      Jika tidak ada folder hotspot, buat dengan:
      - Upload file apapun
      - Rename jadi "hotspot/test.txt" 
      - Delete file test.txt
   
   b. Pindahkan semua file ke folder hotspot:
      - Drag & drop semua file ke dalam folder "hotspot"
      - Atau rename setiap file dengan prefix "hotspot/"
      - Contoh: login.html -> hotspot/login.html

4. Set HTML Directory di Hotspot Profile:
   Terminal (WAJIB):
   /ip hotspot profile print
   (Lihat nama profile yang aktif, biasanya "hsprof1")
   
   /ip hotspot profile set hsprof1 html-directory=hotspot
   
   ATAU via Winbox:
   IP > Hotspot > Server Profiles > [double click profile] > 
   Tab "Login" > HTML Directory: ketik "hotspot"

5. Restart Hotspot Service (PILIH SALAH SATU):
   Cara A - Restart Service (REKOMENDASI):
   /ip hotspot remove [nama-hotspot]
   Lalu setup ulang hotspot dengan wizard
   
   Cara B - Reboot Router:
   /system reboot
   
6. Test Koneksi:
   - Connect ke WiFi hotspot
   - Buka browser, akses sembarang website
   - Halaman login harus muncul otomatis

TROUBLESHOOTING (SOLUSI LENGKAP):
=================================

⚠️ MASALAH UMUM: TERSAMBUNG WIFI TAPI TIDAK ADA INTERNET
--------------------------------------------------------
GEJALA: Device tersambung ke WiFi tapi tidak bisa browsing, 
        halaman login tidak muncul.

PENYEBAB & SOLUSI:

1. HTML Directory tidak di-set atau salah:
   CEK: /ip hotspot profile print
   LIHAT: kolom "html-directory" 
   
   SOLUSI:
   /ip hotspot profile set [nama-profile] html-directory=hotspot
   
   Contoh:
   /ip hotspot profile set hsprof1 html-directory=hotspot

2. File tidak ada di folder hotspot:
   CEK: /file print
   PASTIKAN semua file ada di dalam folder "hotspot/"
   
   CONTOH yang BENAR:
   hotspot/login.html
   hotspot/alogin.html
   hotspot/styles.css
   hotspot/logo.png
   
   BUKAN:
   login.html (di root)
   
   SOLUSI: Pindahkan semua file ke folder hotspot

3. Hotspot service belum restart setelah konfigurasi:
   SOLUSI:
   /ip hotspot remove [nama-hotspot]
   Lalu jalankan setup wizard lagi: /ip hotspot setup
   
   ATAU reboot router:
   /system reboot

4. Browser cache masih menyimpan halaman lama:
   SOLUSI di device user:
   - Clear browser cache
   - Buka browser mode incognito/private
   - Atau ketik manual: 192.168.88.1 (sesuaikan dengan IP gateway)

5. DNS tidak terconfig dengan benar:
   CEK: /ip dns print
   SOLUSI:
   /ip dns set servers=8.8.8.8,8.8.4.4
   /ip dns set allow-remote-requests=yes

6. Firewall NAT rules bermasalah:
   CEK: /ip firewall nat print
   PASTIKAN ada rule untuk hotspot:
   chain=srcnat action=masquerade out-interface=[wan-interface]

------------------------------------------
TROUBLESHOOTING LAINNYA:
------------------------------------------

A. CSS atau Gambar tidak muncul:
   - Pastikan semua file di folder hotspot SAMA
   - Cek nama file (case sensitive): logo.png bukan Logo.png
   - Restart hotspot service

B. Error "invalid username or password":
   - Cek user list: /ip hotspot user print
   - Tambah user test: /ip hotspot user add name=admin password=admin
   - Test login dengan user tersebut

C. Redirect tidak jalan setelah login:
   - Cek hotspot profile HTTP PAP: enabled
   - Cek HTTP CHAP: enabled
   - Test dengan disable firewall sementara

D. Halaman login muncul tapi tidak bisa submit:
   - Cek apakah form action benar (gunakan file original)
   - Pastikan method="post" di form login

COMMAND DIAGNOSIS LENGKAP:
-------------------------
/ip hotspot print
/ip hotspot profile print detail
/ip hotspot user print
/file print where name~"hotspot"
/ip dns print
/ip firewall nat print where chain=srcnat

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

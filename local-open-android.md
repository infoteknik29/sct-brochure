# Buka Website di Android (Tanpa Port 3000 Bermasalah)

Panduan ini untuk kasus `ERR_CONNECTION_REFUSED` dari Android saat akses `http://192.168.55.2:3000/...`.

## Solusi 1: Pakai XAMPP (Apache)

### A. Pindahkan folder project
1. Copy seluruh folder project `SCT-brochure` ke:
   - `C:\xampp\htdocs\SCT-brochure`

### B. Jalankan Apache
1. Buka XAMPP Control Panel
2. Start **Apache**

### C. Buka dari Android
Pastikan HP dan laptop satu WiFi.
1. Di Android, buka:
   - `http://192.168.55.2/SCT-brochure/`
2. Contoh halaman:
   - `http://192.168.55.2/SCT-brochure/dashboard.html`
   - `http://192.168.55.2/SCT-brochure/index.html`

## Solusi 2: Pakai VSCode Live Server tapi port yang pasti (cek port dulu)
Jika kamu tetap ingin Live Server:
1. Jalankan Live Server dari VSCode.
2. Lihat URL yang diberikan VSCode, misalnya:
   - `http://127.0.0.1:5500/`
   - atau `http://localhost:5500/`
3. Di Android, ubah menjadi pakai IP laptop dan port itu:
   - `http://192.168.55.2:5500/dashboard.html`

## Jika tetap tidak bisa
- Pastikan Apache/Live Server benar-benar berjalan.
- Matikan firewall sementara untuk uji coba (atau izinkan port pada firewall).
- Cek IP laptop: pastikan benar `192.168.55.2`.


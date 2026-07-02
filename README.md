# SCT Brochure — Starindo Cleaning Technologies

Brochure digital interaktif untuk Starindo Cleaning Technologies. Menampilkan produk, brand lineup, gallery proyek, dan tim sales & service.

## 🌐 Live Demo

Brochure ini dapat diakses publik tanpa login.

## 📁 Struktur File

```
SCT-brochure/
├── index.html              # Entry point (auto-redirect ke dashboard)
├── dashboard.html          # Halaman utama dengan carousel & poster
├── brand-lineup.html       # Daftar brand principal
├── product-lineup-fixed.html # Katalog produk per kategori
├── support-service.html    # Tim Sales & Service
├── gallery.html            # Gallery proyek & instalasi
├── fixed-script.js         # JS utama (modal, carousel, demo form, e-catalogue)
├── style.css               # Stylesheet utama
├── project-colors.css      # Variabel warna
├── data/                   # Data produk & tim
│   ├── products.js
│   ├── products-complete.js
│   └── team-members.js
└── [folders gambar]/       # Asset gambar produk, poster, gallery, dll.
```

## 🚀 Cara Deploy

### Opsi 1: Netlify (Paling Mudah & Direkomendasikan)

1. **Zip seluruh folder** `SCT-brochure/` menjadi `sct-brochure.zip`
2. Buka [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag & drop file zip ke halaman tersebut
4. Netlify akan otomatis deploy dan memberikan URL (contoh: `https://sct-brochure-abc123.netlify.app`)
5. URL tersebut bisa langsung dishare ke klien via WhatsApp, email, atau QR code

**Keuntungan Netlify:**
- Gratis
- HTTPS otomatis
- CDN global (cepat diakses dari mana saja)
- Custom domain tersedia (opsional)

### Opsi 2: GitHub Pages

1. Buat repository baru di GitHub
2. Upload seluruh isi folder `SCT-brochure/` ke repository
3. Buka **Settings → Pages**
4. Pilih branch `main`, folder `/ (root)`
5. Klik **Save**
6. Brochure akan live di `https://username.github.io/nama-repo/`

### Opsi 3: Cloudflare Pages

1. Buka [https://pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect ke GitHub repository atau upload folder langsung
3. Deploy otomatis

### Opsi 4: Hosting Berbayar (cPanel, dll.)

1. Upload seluruh isi folder `SCT-brochure/` ke folder `public_html/` via FTP/File Manager
2. Pastikan `index.html` berada di root
3. Akses via domain Anda

## 🔒 Keamanan

Versi publik ini telah dihapuskan:
- ❌ Sistem login & password hardcoded
- ❌ PHP syntax yang tidak kompatibel dengan static hosting
- ❌ Admin panel dengan akses tak terbatas
- ✅ Semua halaman dapat diakses publik
- ✅ Form demo request menggunakan `mailto:` (aman, tidak menyimpan data)

## 📱 Fitur

- **Responsive Design** — Bisa dibuka di desktop, tablet, maupun mobile
- **Image Modal** — Klik gambar produk untuk view fullscreen
- **Auto Carousel** — Sweeper lineup dengan auto-slide
- **Request Demo Form** — Form interaktif yang mengirim ke email sales
- **E-Catalogue** — Link ke katalog digital produk
- **Social Media Links** — Direct link ke semua sosial media SCT

## 📝 Cara Update Konten

Karena ini static site, update dilakukan dengan mengedit file HTML/JS langsung:

1. **Tambah produk baru:** Edit `product-lineup-fixed.html` dan `data/products-complete.js`
2. **Update tim:** Edit `support-service.html`
3. **Tambah gallery:** Edit `gallery.html`
4. **Update poster:** Ganti file di folder `Poster/`

Setelah edit, upload ulang ke hosting.

## 📧 Kontak

**Starindo Cleaning Technologies**
- Website: [https://starindocleaning.com](https://starindocleaning.com)
- Email: sales@starindocleaning.com
- Telepon: +62-21-2246-1047
- Lokasi: Jakarta, Indonesia


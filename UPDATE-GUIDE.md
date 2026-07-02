# Panduan Update SCT Brochure (Static Site)

Karena ini adalah **website statis (HTML/CSS/JS)**, update dilakukan dengan **mengedit file langsung**, lalu **upload ulang ke hosting**.

---

## 🔄 Workflow Update (Berlaku untuk Semua Perubahan)

```
1. Edit file HTML/JS/CSS di VSCode
2. Buka di browser (double-click index.html) untuk cek hasil
3. Jika sudah oke → Zip folder → Upload ulang ke Netlify
```

> **Catatan:** Netlify (drag-drop) akan **overwrite** deploy sebelumnya secara otomatis. Tidak perlu hapus yang lama.

---

## 📍 Cara Menambahkan Maps / Lokasi

### Opsi A — Google Maps Embed (Paling Mudah)

1. Buka [Google Maps](https://maps.google.com), cari lokasi kantor SCT
2. Klik **Share → Embed a map → Copy HTML**
3. Buka `dashboard.html`
4. Tambahkan section baru sebelum footer:

```html
<section id="location" style="padding: 4rem 2rem; text-align: center;">
    <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">📍 Our Location</h2>
    <div style="max-width: 800px; margin: 0 auto; border-radius: 15px; overflow: hidden;">
        <!-- GANTI DENGAN KODE EMBED GOOGLE MAPS ANDA -->
        <iframe 
            src="https://www.google.com/maps/embed?pb=..." 
            width="100%" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
</section>
```

5. Tambahkan link di navbar:
```html
<a href="#location">Location</a>
```

### Opsi B — Link ke Google Maps (Lebih Simpel)

Di footer atau halaman manapun, tambahkan:
```html
<a href="https://maps.google.com/?q=Starindo+Cleaning+Technologies+Jakarta" target="_blank">
    🗺️ Lihat di Google Maps
</a>
```

---

## 🖼️ Cara Menambahkan Gambar

### Ke Gallery (`gallery.html`)

1. Copy gambar baru ke folder `Galery/`
2. Buka `gallery.html`, cari `<section class="featured">`
3. Tambahkan div baru (contoh):

```html
<div class="product-img-container">
    <img src="./Galery/nama-gambar-baru.jpg" alt="Deskripsi" class="product-img" 
         onclick="openModal('./Galery/nama-gambar-baru.jpg', 'Deskripsi')">
    <div class="product-name">Nama Gambar</div>
</div>
```

### Ke Product Lineup (`product-lineup-fixed.html`)

1. Copy gambar produk ke folder yang sesuai (misal: `Industrial Vacuum/nama-produk.png`)
2. Buka `product-lineup-fixed.html`, cari bagian `categories`
3. Tambahkan path gambar ke array yang sesuai:

```javascript
'Industrial Vacuum': [
    './Industrial Vacuum/Coral Aircompact.png',
    './Industrial Vacuum/Produk Baru.png',  // <-- TAMBAHKAN INI
    // ... gambar lain
]
```

### Ke Poster (`dashboard.html`)

1. Copy file poster ke folder `Poster/`
2. Buka `dashboard.html`, cari bagian `<!-- Depureco Full Screen Poster-->`
3. Copy-paste section poster yang sudah ada, ganti nama & path:

```html
<section class="Poster-fullscreen">
    <div class="Poster-namabrand">
        <div class="container">
            <div><img src="./Poster/Nama Poster.png" alt="Nama Poster"></div>
        </div>
    </div>
</section>
```

---

## 👥 Cara Update Data Tim Sales & Service

Buka `support-service.html`, cari bagian `const teamData = [`.

Tambahkan objek baru atau edit yang sudah ada:

```javascript
{
    name: 'Nama Karyawan Baru',
    role: 'Jabatan Baru',
    img: 'Support & Service/After Sales Service/Nama.png',
    bio: 'Deskripsi singkat.',
    email: 'nama@sct-indonesia.com',
    phone: '+62 8xx-xxxx-xxxx',
    linkedin: 'https://linkedin.com/in/nama',
    instagram: 'https://instagram.com/nama',
    whatsapp: 'https://wa.me/628xxxxxxxxxx'
}
```

Jangan lupa tambahkan card HTML di bagian `<div class="team-grid">`:

```html
<div class="team-card" onclick="showProfile(12)">
    <img src="Support & Service/After Sales Service/Nama.png" class="team-img" alt="Nama">
    <div class="team-info">
        <div class="team-name">Nama Karyawan Baru</div>
        <div class="team-role">Jabatan Baru</div>
    </div>
</div>
```

> **Nomor di `showProfile(12)`** harus urut (mulai dari 1 sesuai urutan di `teamData`).

---

## 🛒 Cara Update Produk & E-Catalogue

Buka `data/products-complete.js`, tambahkan entry baru:

```javascript
'Industrial Vacuum/Produk Baru.png': {
    name: 'Produk Baru',
    eCatalogUrl: 'https://www.link-catalog-produk.com/',
    specs: [
        'Power: 3.0 kW',
        'Voltage: 220V',
        'Capacity: 50L'
    ],
    description: 'Deskripsi produk.'
}
```

---

## 🚀 Re-Deploy ke Netlify

Setelah semua edit selesai:

1. **Zip seluruh folder** `SCT-brochure/` (sama persis seperti pertama kali)
2. Buka [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. **Drag & drop file zip** yang baru
4. URL yang sama akan otomatis update dengan konten terbaru

> **URL tidak berubah** setiap kali re-deploy ke Netlify drop.

---

## 📌 Tips Penting

| Hal | Cara |
|-----|------|
| **Backup** | Simpan copy folder sebelum edit besar |
| **Test dulu** | Buka `index.html` di browser sebelum deploy |
| **Nama file** | Hindari spasi & karakter special di nama file gambar |
| **Ukuran gambar** | Kompres gambar di [tinypng.com](https://tinypng.com) agar loading cepat |
| **Update cepat** | Edit file di VSCode → Save → Refresh browser (Ctrl+R) |

---

**Butuh bantuan update?** Simpan file UPDATE-GUIDE.md ini dan rujuk kapan saja.


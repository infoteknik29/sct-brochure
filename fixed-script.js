// SCT Brochure - Public Version (No Login/Auth)
// Features: Image Modal, Carousel, Request Demo, E-Catalogue

// ========== IMAGE MODAL ==========
window.openModal = (imgSrc, alt) => {
    let modal = document.getElementById('imageModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                <img id="modalImg" alt="">
                <div id="caption"></div>
            </div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    }
    const modalImg = document.getElementById('modalImg');
    modalImg.src = imgSrc;
    modalImg.style.width = 'auto';
    modalImg.style.height = 'auto';
    modalImg.style.maxWidth = '100%';
    modalImg.style.maxHeight = '100vh';
    document.getElementById('caption').textContent = alt;
    modal.style.display = 'flex';
};

window.closeModal = () => {
    const modal = document.getElementById('imageModal');
    if (modal) modal.style.display = 'none';
};

// Close modal on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ========== REQUEST DEMO FORM ==========
window.requestDemo = () => {
    let modal = document.getElementById('demoModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'demoModal';
        modal.style.cssText = 'display:flex;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:3000;align-items:center;justify-content:center;padding:2rem';
        modal.innerHTML = `
            <div style="background:white;color:#333;padding:2rem;border-radius:15px;max-width:90%;max-height:90%;overflow:auto;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
                    <h2 style="color:#2c3e50;margin:0">📋 Request Demo</h2>
                    <button onclick="closeDemoModal()" style="background:none;border:none;font-size:28px;cursor:pointer;color:#999;font-weight:bold">×</button>
                </div>
                <form id="salesForm" style="display:flex;flex-direction:column;gap:1rem">
                    <div><label>* Nama Lengkap</label><input id="fullName" required style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px"></div>
                    <div><label>* Perusahaan</label><input id="company" required style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px"></div>
                    <div><label>* Jabatan</label><input id="jobTitle" required style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px"></div>
                    <div><label>* Email</label><input id="email" type="email" required style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px"></div>
                    <div><label>* WA/Phone</label><input id="phone" type="tel" required style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px"></div>
                    <div><label>Produk Pilihan</label>
                        <label><input type="checkbox" name="products" value="Road Sweeper"> Road Sweeper</label>
                        <label><input type="checkbox" name="products" value="Industrial Vacuum"> Industrial Vacuum</label>
                        <label><input type="checkbox" name="products" value="Commercial Vacuum"> Commercial Vacuum</label>
                        <label><input type="checkbox" name="products" value="Dust Suppression"> Dust Suppression</label>
                        <label><input type="checkbox" name="products" value="High Pressure Cleaner"> High Pressure Cleaner</label>
                        <label><input type="checkbox" name="products" value="Others"> Lainnya</label>
                    </div>
                    <div><label>Demo Type</label><select id="demoType" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px">
                        <option>Online (Zoom/Meet)</option><option>Offline (Onsite)</option><option>Keduanya OK</option>
                    </select></div>
                    <div><label>* Lokasi</label><input id="location" required style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px"></div>
                    <div><label>Keterangan</label><textarea id="notes" rows="3" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px"></textarea></div>
                    <div style="margin-bottom:1rem"><label><input type="checkbox" id="consent" required> Izinkan sales hubungi saya</label></div>
                    <button type="submit" style="width:100%;padding:15px;background:#27ae60;color:white;border:none;border-radius:8px;font-size:1.1rem;font-weight:bold;cursor:pointer">📤 Kirim ke Sales</button>
                </form>
            </div>`;
        document.body.appendChild(modal);
        document.getElementById('salesForm').onsubmit = submitDemoForm;
    }
    modal.style.display = 'flex';
};

window.closeDemoModal = () => {
    const modal = document.getElementById('demoModal');
    if (modal) modal.style.display = 'none';
};

function submitDemoForm(e) {
    e.preventDefault();
    const data = {
        Nama: document.getElementById('fullName').value,
        Perusahaan: document.getElementById('company').value,
        Jabatan: document.getElementById('jobTitle').value,
        Email: document.getElementById('email').value,
        Phone: document.getElementById('phone').value,
        Produk: Array.from(document.querySelectorAll('input[name="products"]:checked')).map(cb => cb.value).join(', ') || 'Umum',
        Demo: document.getElementById('demoType').value,
        Lokasi: document.getElementById('location').value,
        Keterangan: document.getElementById('notes').value || 'Tidak ada',
        Consent: 'Ya'
    };
    const subject = `Demo Request SCT - ${data.Nama}`;
    const body = Object.entries(data).map(([k, v]) => `${k}:\n${v}`).join('\n\n');
    window.location.href = `mailto:sales@starindocleaning.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    closeDemoModal();
    alert('✅ Form demo berhasil dikirim! Email client Anda akan terbuka.');
}

// ========== CAROUSEL ==========
window.initializeDashboardCarousel = () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    let current = 0;
    let interval;

    if (!slides.length) return;

    function showSlide(n) {
        slides.forEach((s, i) => {
            s.style.display = i === n ? 'block' : 'none';
            s.classList.toggle('active', i === n);
        });
        indicators.forEach((ind, i) => ind.classList.toggle('active', i === n));
        current = n;
    }

    function next() {
        showSlide((current + 1) % slides.length);
    }

    function start() {
        stop();
        interval = setInterval(next, 4000);
    }

    function stop() {
        if (interval) clearInterval(interval);
    }

    indicators.forEach((ind, i) => {
        ind.onclick = () => {
            showSlide(i);
            start();
        };
    });

    const carousel = document.querySelector('.carousel');
    carousel?.addEventListener('mouseenter', stop);
    carousel?.addEventListener('mouseleave', start);

    showSlide(0);
    start();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initializeDashboardCarousel);
} else {
    window.initializeDashboardCarousel();
}

// ========== E-CATALOGUE ==========
window.openECatalogue = (imgPath) => {
    let normalizedPath = imgPath.replace(/^\.\//, '');
    let product = window.productSpecs ? window.productSpecs[normalizedPath] : null;

    if (!product) {
        const lcPath = normalizedPath.toLowerCase();
        for (let key in window.productSpecs) {
            if (key.toLowerCase() === lcPath) {
                product = window.productSpecs[key];
                break;
            }
        }
    }

    if (product && product.eCatalogUrl) {
        window.open(product.eCatalogUrl, '_blank', 'noopener,noreferrer');
        return;
    }

    // Brand fallback
    const brandUrls = {
        'fimap': 'https://www.fimap.com/en/',
        'dulevo': 'https://www.dulevo.com/en/',
        'spitwater': 'https://spitwater.com.au/',
        'spraystream': 'https://www.spraystream.com/en/',
        'hidromak': 'https://www.hidromak.com/',
        'coral': 'https://www.coral.eu/',
        'depureco': 'https://www.depureco.com/en/',
        'univac': 'https://www.univacaspiratori.com/en/',
        'ronking': 'https://www.ronkingsweeper.com/'
    };

    const brandMatch = Object.keys(brandUrls).find(b => normalizedPath.toLowerCase().includes(b));
    if (brandMatch) {
        window.open(brandUrls[brandMatch], '_blank');
        return;
    }

    alert(`E-Catalogue untuk produk ini belum tersedia.`);
};

// Load product data
if (typeof window.productSpecs === 'undefined') {
    const script = document.createElement('script');
    script.src = 'data/products-complete.js';
    document.head.appendChild(script);
}


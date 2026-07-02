(function () {
  const STORAGE_KEYS = {
    hero: 'sct_dashboard_hero',
    carousel: 'sct_dashboard_carousel',
    posters: 'sct_dashboard_posters',
    brands: 'sct_brands',
    products: 'sct_products',
    gallery: 'sct_gallery',
    teamMembers: 'teamMembers'
  };

  const defaultData = {
    hero: {
      title: 'Starindo Cleaning Technologies',
      subtitle: 'Municipality, Industrial & Commercial Cleaning Solution.',
      buttonText: 'Learn More',
      buttonUrl: 'https://starindocleaning.com/?lang=id'
    },
    carousel: [
      { src: './Road Sweeper/75.png', alt: 'Dulevo 75' },
      { src: './Road Sweeper/90.png', alt: 'Dulevo 90' },
      { src: './Road Sweeper/120.png', alt: 'Dulevo 120' },
      { src: './Road Sweeper/850 mini.png', alt: 'Dulevo 850 Mini' },
      { src: './Road Sweeper/1000 Spark.png', alt: 'Dulevo 1000 Spark' },
      { src: './Road Sweeper/1100.png', alt: 'Dulevo 1100' },
      { src: './Road Sweeper/d-zero2s3.png', alt: 'Dulevo D-Zero2s3' },
      { src: './Road Sweeper/d3.png', alt: 'Dulevo D3' },
      { src: './Road Sweeper/dulevo 6000.png', alt: 'Dulevo 6000' },
      { src: './Road Sweeper/Ronking.png', alt: 'Ronking Road Sweeper' }
    ],
    posters: [
      { src: './Poster/Depureco Poster.png', alt: 'Depureco Poster' },
      { src: './Poster/Dulevo 6000 Poster.png', alt: 'Dulevo Poster' },
      { src: './Poster/Fimap Poster.png', alt: 'Fimap Poster' },
      { src: './Poster/Hidromak Poster.png', alt: 'Hidromak Poster' },
      { src: './Poster/Ronking Poster.png', alt: 'Ronking Poster' },
      { src: './Poster/Spitwater Poster.png', alt: 'Spitwater Poster' },
      { src: './Poster/Spraystream Poster.png', alt: 'Spraystream Poster' },
      { src: './Poster/Univac Poster.png', alt: 'Univac Poster' }
    ],
    brands: [
      { name: 'Coral', img: 'Brand Lineup/Coral.png', url: 'https://www.coral.eu/' },
      { name: 'Dulevo', img: 'Brand Lineup/DULEVO.png', url: 'https://www.dulevo.com/' },
      { name: 'AVA', img: 'Brand Lineup/ava.png', url: 'https://avaofnorway.com/' },
      { name: 'Fimap', img: 'Brand Lineup/fimap.png', url: 'https://www.fimap.com/en/' },
      { name: 'Depureco', img: 'Brand Lineup/depureco.png', url: 'https://www.depureco.com/en/' },
      { name: 'Spitwater', img: 'Brand Lineup/spitwater.png', url: 'https://spitwater.com.au/' },
      { name: 'Ronking', img: 'Brand Lineup/ronking.png', url: 'https://www.ronkingsweeper.com/' },
      { name: 'Univac', img: 'Brand Lineup/univac.png', url: 'https://www.univacaspiratori.com/en/' },
      { name: 'Spraystream', img: 'Brand Lineup/spraystream.png', url: 'https://www.spraystream.com/en/' },
      { name: 'Hidromak', img: 'Brand Lineup/hidromak.png', url: 'https://www.hidromak.com/en' },
      { name: 'ESE', img: 'Brand Lineup/ese.png', url: 'https://www.ese.com/' },
      { name: 'Kent', img: 'Brand Lineup/kent.png', url: 'https://www.kent.co.in/' },
      { name: 'Barin', img: 'Brand Lineup/barin.png', url: 'https://www.barin.it/en/' },
      { name: 'Pacvac', img: 'Brand Lineup/pacvac.png', url: 'https://pacvac.com.au/' },
      { name: 'Autobren', img: 'Brand Lineup/Logo Autobren.png', url: 'https://www.autobren.it/en/' },
      { name: 'Nurmak', img: 'Brand Lineup/nurmak.png', url: 'https://www.nurmak.com.tr/' },
      { name: 'Solmax GSE', img: 'Brand Lineup/solmax gse.png', url: 'https://solmaxgse.com/' }
    ],
    products: [
      { category: 'Commercial Vacuum', name: 'Fimap FB45', img: './Commercial Vacuum/Fimap FB45.png', eCatalogUrl: '' },
      { category: 'High Pressure', name: 'Spitwater 10-120C', img: './High Pressure Water Cleaner/Spitwater 10-120C.png', eCatalogUrl: '' },
      { category: 'Road Sweeper', name: 'Dulevo 6000', img: './Road Sweeper/dulevo 6000.png', eCatalogUrl: '' }
    ],
    gallery: [
      { src: './Galery/galery  1.jpeg', alt: 'Gallery Image 1', caption: 'on Site Demo' },
      { src: './Galery/Galery 2.jpeg', alt: 'Gallery Image 2', caption: 'Gallery Kontrak Service' },
      { src: './Galery/Galery 3.jpeg', alt: 'Gallery Image 3', caption: 'Gallery Kontrak Service' },
      { src: './Galery/Galery 4.jpeg', alt: 'Gallery Image 4', caption: 'Gallery Kontrak Service' },
      { src: './Galery/Galery 5.jpeg', alt: 'Gallery Image 5', caption: 'Gallery Kontrak Service' },
      { src: './Galery/Galery 6.jpeg', alt: 'Gallery Image 6', caption: 'Gallery Kontrak Service' },
      { src: './Galery/Galery 7.jpeg', alt: 'Gallery Image 7', caption: 'Gallery Kontrak Service' },
      { src: './Galery/Galery 8.jpeg', alt: 'Gallery Image 8', caption: 'Gallery Kontrak Service' },
      { src: './Galery/Galery 9.jpeg', alt: 'Gallery Image 9', caption: 'Kilas Minerba' },
      { src: './Galery/Galery 10.jpeg', alt: 'Gallery Image 10', caption: 'Kilas Minerba' },
      { src: './Galery/Galery 11.jpeg', alt: 'Gallery Image 11', caption: 'Kilas Minerba' },
      { src: './Galery/Galery 12.jpeg', alt: 'Gallery Image 12', caption: 'Kilas Minerba' },
      { src: './Galery/Galery 13.jpeg', alt: 'Gallery Image 13', caption: 'Kabupaten Magelang' },
      { src: './Galery/Galery 14.jpeg', alt: 'Gallery Image 14', caption: 'DKI Jakarta' },
      { src: './Galery/Galery 15.jpeg', alt: 'Gallery Image 15', caption: 'UPST Bantar Gebang' }
    ]
  };

  function mergeArrayContent(parsed, fallback) {
    if (!Array.isArray(parsed) || !Array.isArray(fallback)) return fallback;

    const merged = fallback.map(item => ({ ...item }));
    parsed.forEach(item => {
      const exists = merged.some(existing => {
        const keys = Object.keys(item || {});
        if (!keys.length) return false;
        return keys.some(key => {
          const existingValue = existing[key];
          const newValue = item[key];
          return existingValue !== undefined && newValue !== undefined && String(existingValue) === String(newValue);
        });
      });
      if (!exists) merged.push(item);
    });

    return merged;
  }

  function readStorage(key, fallback) {
    try {
      if (typeof localStorage === 'undefined') return fallback;
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && Array.isArray(fallback)) {
        if ((key === STORAGE_KEYS.carousel || key === STORAGE_KEYS.posters) && parsed.length < fallback.length) {
          return fallback.map(item => ({ ...item }));
        }
        return mergeArrayContent(parsed, fallback);
      }
      return parsed;
    } catch (error) {
      console.warn('SCT content load failed:', error);
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      if (typeof localStorage === 'undefined') return value;
      localStorage.setItem(key, JSON.stringify(value));
      if (key === STORAGE_KEYS.teamMembers) {
        window.teamMembers = value;
      }
      return value;
    } catch (error) {
      console.warn('SCT content save failed:', error);
      return value;
    }
  }

  function getContent(key) {
    const fallback = defaultData[key] || [];
    if (key === 'teamMembers') {
      return readStorage(STORAGE_KEYS.teamMembers, window.teamMembers || fallback);
    }
    return readStorage(STORAGE_KEYS[key], fallback);
  }

  function setContent(key, value) {
    if (key === 'teamMembers') {
      return writeStorage(STORAGE_KEYS.teamMembers, value);
    }
    return writeStorage(STORAGE_KEYS[key], value);
  }

  function resetContent(key) {
    const fallback = defaultData[key] || [];
    setContent(key, fallback);
    return fallback;
  }

  window.SCTContent = {
    STORAGE_KEYS,
    defaultData,
    get: getContent,
    set: setContent,
    reset: resetContent,
    read: readStorage,
    write: writeStorage
  };
})();

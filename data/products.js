// Load complete specs from products-complete.js automatically
(function() {
  if (typeof window.productSpecs !== 'undefined') {
    console.log('productSpecs already loaded');
    return;
  }
  
  const script = document.createElement('script');
  script.src = 'data/products-complete.js';
  script.onload = () => {
    console.log('✅ Complete product specs + eCatalogUrls loaded:', Object.keys(window.productSpecs).length, 'products');
  };
  script.onerror = () => console.error('Failed to load products-complete.js');
  document.head.appendChild(script);
})();

console.log('data/products.js loaded - auto-loading complete specs...');


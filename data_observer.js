// Clincoo Docs — kategori Observer (7 Oktober 2026, 18:00 WIB — 1 artikel)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["observer"] = {
 "names": { "id": "Observer", "en": "Observer" },
 "articles": [
{
 "id": "observer-muat-gambar-saat-masuk-viewport",
 "langs": {
  "id": {
   "title": "Cara Muat Gambar Saat Masuk Viewport dengan Intersection Observer",
   "desc": "Tata cara menunda src gambar non-kritis sampai elemen masuk viewport di halaman Clincoo.",
   "content": "<p class=\"mb-4\">Intersection Observer memberitahu saat elemen memotong viewport, tanpa memasang listener scroll. Itu cocok untuk gambar di bawah lipatan yang belum boleh membebani LCP.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan URL di data-src</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis <code><img data-src=\"hero-lanjutan.webp\" alt=\"...\" width=\"800\" height=\"450\"></code>. Saat <code>isIntersecting</code>, salin ke <code>src</code> lalu <code>unobserve</code>. Gambar LCP tetap pakai <code>src</code> biasa.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri rootMargin dan fallback</h2><p class=\"mb-4\">Pakai <code>rootMargin: \"200px\"</code> agar unduhan mulai sebelum gambar terlihat. Jika API tidak ada, set <code>src</code> langsung. Cek di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Intersection Observer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
   "sourceSnippet": "The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor or the viewport.",
   "source2": "web.dev — Lazy loading images",
   "source2Url": "https://web.dev/articles/browser-level-image-lazy-loading",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Load an Image When It Enters the Viewport",
   "desc": "How to delay a non-critical image src until the element enters the viewport on a Clincoo page.",
   "content": "<p class=\"mb-4\">Intersection Observer reports when an element intersects the viewport without a scroll listener. That fits below-the-fold images that must not compete with LCP.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the URL in data-src</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write <code><img data-src=\"next-hero.webp\" alt=\"...\" width=\"800\" height=\"450\"></code>. When <code>isIntersecting</code>, copy it to <code>src</code> and <code>unobserve</code>. The LCP image keeps a normal <code>src</code>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add rootMargin and a fallback</h2><p class=\"mb-4\">Use <code>rootMargin: \"200px\"</code> so the download starts before the image is visible. If the API is missing, set <code>src</code> immediately. Check the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview and record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Intersection Observer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
   "sourceSnippet": "The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor or the viewport.",
   "source2": "web.dev — Lazy loading images",
   "source2Url": "https://web.dev/articles/browser-level-image-lazy-loading",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};

// Clincoo Docs — kategori Observer (10 Oktober 2026, 23:00 WIB — tambah 1 artikel)
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
},
{
 "id": "observer-resize-observer-untuk-layout",
 "langs": {
  "id": {
   "title": "Cara Pakai Resize Observer untuk Perubahan Layout",
   "desc": "Tata cara mendeteksi perubahan ukuran elemen Clincoo tanpa listener window resize yang boros.",
   "content": "<p class=\"mb-4\">Listener window resize berjalan terus dan sering memicu layout thrashing. Resize Observer hanya memberitahu saat elemen yang diamati berubah ukuran.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Amati container, bukan window</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat ResizeObserver yang mengamati container kartu atau sidebar. Di dalam callback baca contentRect dan sesuaikan layout atau gambar. Hindari membaca offsetWidth di luar frame.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bersihkan observer saat komponen hilang</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> panggil disconnect saat panel ditutup atau elemen dihapus. Catat pola di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya tidak ada observer yang tertinggal.</p>",
   "source": "MDN — Resize Observer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API",
   "sourceSnippet": "The Resize Observer API provides a way to observe changes to an element's size.",
   "source2": "web.dev — Avoid layout thrashing",
   "source2Url": "https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Resize Observer for Layout Changes",
   "desc": "How to detect size changes of a Clincoo element without a wasteful window resize listener.",
   "content": "<p class=\"mb-4\">A window resize listener runs continuously and often causes layout thrashing. Resize Observer only reports when the observed element changes size.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Observe the container, not the window</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create a ResizeObserver that watches the card or sidebar container. Inside the callback read contentRect and adjust the layout or image. Avoid reading offsetWidth outside a frame.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Clean up the observer when the component is gone</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> call disconnect when the panel closes or the element is removed. Record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so no observer is left behind.</p>",
   "source": "MDN — Resize Observer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API",
   "sourceSnippet": "The Resize Observer API provides a way to observe changes to an element's size.",
   "source2": "web.dev — Avoid layout thrashing",
   "source2Url": "https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "observer-bersihkan-mutation-observer",
 "langs": {
  "id": {
   "title": "Cara Bersihkan Mutation Observer saat Elemen Hilang",
   "desc": "Tata cara melepaskan Mutation Observer di Clincoo agar tidak terus memantau DOM yang sudah tidak ada.",
   "content": "<p class=\"mb-4\">Mutation Observer yang tidak di-disconnect terus berjalan dan bisa memperlambat halaman atau menulis state pada elemen yang sudah dihapus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan referensi observer</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan instance observer di variabel yang bisa diakses saat komponen di-unmount. Panggil disconnect sebelum menghapus node yang diamati.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan menambah dan menghapus panel</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka panel yang memakai observer, tutup, lalu buka lagi. Pastikan tidak ada callback ganda. Catat langkah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Mutation Observer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",
   "sourceSnippet": "disconnect stops the MutationObserver instance from receiving further notifications.",
   "source2": "MDN — MutationObserver.disconnect",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/disconnect",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Clean Up a Mutation Observer When the Element Is Gone",
   "desc": "How to release a Mutation Observer in Clincoo so it does not keep watching a DOM that no longer exists.",
   "content": "<p class=\"mb-4\">A Mutation Observer that is not disconnected keeps running and can slow the page or write state on an element that has already been removed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep a reference to the observer</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store the observer instance in a variable that is reachable when the component unmounts. Call disconnect before removing the observed node.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test by adding and removing the panel</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open a panel that uses the observer, close it, then open it again. Confirm there are no duplicate callbacks. Record the steps on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Mutation Observer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",
   "sourceSnippet": "disconnect stops the MutationObserver instance from receiving further notifications.",
   "source2": "MDN — MutationObserver.disconnect",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/disconnect",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "observer-deteksi-perubahan-dom-dengan-mutation",
 "langs": {
  "id": {
   "title": "Cara Deteksi Perubahan DOM dengan Mutation Observer",
   "desc": "Tata cara memantau penambahan atau perubahan atribut elemen di Clincoo menggunakan Mutation Observer.",
   "content": "<p class=\"mb-4\">Mutation Observer memberitahu saat node ditambahkan, dihapus, atau atributnya berubah, tanpa polling.",
   "source": "MDN — Mutation Observer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",
   "sourceSnippet": "MutationObserver provides a way to react to changes in the DOM.",
   "source2": "MDN — MutationObserver.observe",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Detect DOM Changes with Mutation Observer",
   "desc": "How to watch for added nodes or attribute changes on Clincoo elements using Mutation Observer.",
   "content": "<p class=\"mb-4\">Mutation Observer reports when nodes are added, removed, or their attributes change, without polling.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Observe the container</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create a MutationObserver and call observe on the parent container with childList and attributes. Inside the callback handle the mutations array.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Disconnect when done</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> call disconnect when the feature is no longer needed. Record the pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Mutation Observer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",
   "sourceSnippet": "MutationObserver provides a way to react to changes in the DOM.",
   "source2": "MDN — MutationObserver.observe",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};

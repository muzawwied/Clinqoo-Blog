// Clincoo Docs — tambah 3 artikel DebugCSS (11 Oktober 2026, 06:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["debugcss"]) {
    window.countryDataFiles["debugcss"] = { "names": { "id": "Debug CSS", "en": "Debug CSS" }, "articles": [] };
  }
  var list = window.countryDataFiles["debugcss"].articles;
  var extra = [
{
 "id": "debugcss-media-queries-devtools",
 "langs": {
  "id": {
   "title": "Cara Debug Media Queries di DevTools",
   "desc": "Tata cara memakai panel Media Queries di Chrome DevTools untuk menguji breakpoint Clincoo.",
   "content": "<p class=\"mb-4\">Media query yang salah membuat layout Clincoo pecah di ukuran tertentu tanpa error jelas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka panel Media Queries</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, tab Elements, lalu klik ikon media queries di sudut. Atau gunakan Toggle Device Toolbar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji breakpoint</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> geser lebar dan lihat aturan yang aktif. Catat breakpoint yang bermasalah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Device mode",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/device-mode",
   "sourceSnippet": "Use device mode to test responsive layouts and media queries.",
   "source2": "MDN — Media queries",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug Media Queries in DevTools",
   "desc": "How to use the Media Queries panel in Chrome DevTools to test Clincoo breakpoints.",
   "content": "<p class=\"mb-4\">A wrong media query breaks Clincoo layout at certain widths without a clear error.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open the Media Queries panel</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, the Elements tab, then click the media queries icon. Or use Toggle Device Toolbar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test breakpoints</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> drag the width and see which rules are active. Record problem breakpoints on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Device mode",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/device-mode",
   "sourceSnippet": "Use device mode to test responsive layouts and media queries.",
   "source2": "MDN — Media queries",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "debugcss-toggle-device-toolbar",
 "langs": {
  "id": {
   "title": "Cara Pakai Toggle Device Toolbar untuk Uji Responsif",
   "desc": "Tata cara memakai device mode di DevTools untuk melihat layout Clincoo di berbagai ukuran layar.",
   "content": "<p class=\"mb-4\">Layout yang bagus di desktop bisa rusak di ponsel. Device toolbar membantu menguji tanpa perangkat fisik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aktifkan device mode</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tekan Ctrl+Shift+M atau klik ikon ponsel di DevTools. Pilih preset atau set dimensi kustom.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Periksa overflow dan touch</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> geser dan cek apakah ada scroll horizontal. Catat temuan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Device mode",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/device-mode",
   "sourceSnippet": "Device mode lets you simulate mobile viewports and touch events.",
   "source2": "MDN — Responsive design",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use the Toggle Device Toolbar for Responsive Testing",
   "desc": "How to use device mode in DevTools to view Clincoo layout at different screen sizes.",
   "content": "<p class=\"mb-4\">A layout that looks good on desktop can break on phone. The device toolbar helps test without a physical device.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable device mode</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> press Ctrl+Shift+M or click the phone icon in DevTools. Choose a preset or set custom dimensions.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check overflow and touch</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll and check for horizontal overflow. Record findings on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Device mode",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/device-mode",
   "sourceSnippet": "Device mode lets you simulate mobile viewports and touch events.",
   "source2": "MDN — Responsive design",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "debugcss-coverage-unused-css",
 "langs": {
  "id": {
   "title": "Cara Temukan Unused CSS dengan Coverage di DevTools",
   "desc": "Tata cara memakai tab Coverage untuk melihat CSS yang tidak terpakai di halaman Clincoo.",
   "content": "<p class=\"mb-4\">CSS yang tidak terpakai memperlambat muat halaman Clincoo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka Coverage</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, Command Menu (Ctrl+Shift+P), ketik Coverage, lalu rekam muat ulang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hapus yang merah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> lihat persentase unused. Hapus aturan yang tidak kena. Catat penghematan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Coverage",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/coverage",
   "sourceSnippet": "The Coverage tab shows which CSS and JS is unused on the page.",
   "source2": "web.dev — Unused CSS",
   "source2Url": "https://web.dev/articles/unused-css",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Find Unused CSS with Coverage in DevTools",
   "desc": "How to use the Coverage tab to see unused CSS on a Clincoo page.",
   "content": "<p class=\"mb-4\">Unused CSS slows down Clincoo page loads.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open Coverage</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, Command Menu (Ctrl+Shift+P), type Coverage, then record a reload.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove the red</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> see the unused percentage. Remove rules that never match. Record the savings on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome DevTools — Coverage",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/coverage",
   "sourceSnippet": "The Coverage tab shows which CSS and JS is unused on the page.",
   "source2": "web.dev — Unused CSS",
   "source2Url": "https://web.dev/articles/unused-css",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();

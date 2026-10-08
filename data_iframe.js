// Clincoo Docs — kategori Iframe (8 Oktober 2026, 12:00 WIB) — 4 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["iframe"] = {
 "names": { "id": "Iframe", "en": "Iframe" },
 "articles": [
{
 "id": "iframe-wajib-title-aksesibel",
 "langs": {
  "id": {
   "title": "Cara Beri Judul pada Iframe agar Pembaca Layar Mengenalinya",
   "desc": "Tata cara mengisi atribut title pada iframe supaya teknologi bantu tidak hanya menyebut frame kosong.",
   "content": "<p class=\"mb-4\">Iframe tanpa title dibaca sebagai bingkai tanpa nama. Pengguna pembaca layar tidak tahu apakah isinya peta, pembayaran, atau video.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Isi title yang menyebut isi, bukan tag</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis <iframe title=\"Pratinjau peta toko\" ...>. Judul harus unik jika ada lebih dari satu iframe di halaman yang sama. Jangan memakai title=\"iframe\" atau mengulang judul halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan pohon aksesibilitas</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka panel aksesibilitas dan pastikan nama frame sama dengan title. Tautan alternatif ke konten yang sama tetap berguna jika iframe gagal dimuat. Catatan ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — iframe title",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#accessibility",
   "sourceSnippet": "Each iframe should have a title attribute to label its content for assistive technology.",
   "source2": "W3C WAI — Frames",
   "source2Url": "https://www.w3.org/WAI/tutorials/page-structure/frames/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Title an Iframe So Screen Readers Can Name It",
   "desc": "How to set the iframe title attribute so assistive tech does not announce an unnamed frame.",
   "content": "<p class=\"mb-4\">An iframe without a title is announced as a nameless frame. Screen-reader users cannot tell whether it is a map, a payment form, or a video.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write a title that names the content</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write <iframe title=\"Store map preview\" ...>. The title must be unique when more than one iframe is on the page. Do not use title=\"iframe\" or repeat the page title.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the accessibility tree</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the accessibility pane and confirm the frame name matches the title. A text alternative link to the same content still helps if the iframe fails to load. Notes live on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — iframe title",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#accessibility",
   "sourceSnippet": "Each iframe should have a title attribute to label its content for assistive technology.",
   "source2": "W3C WAI — Frames",
   "source2Url": "https://www.w3.org/WAI/tutorials/page-structure/frames/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "iframe-sandbox-batas-izin",
 "langs": {
  "id": {
   "title": "Cara Batasi Izin Iframe dengan Atribut Sandbox",
   "desc": "Tata cara memakai sandbox pada iframe pihak ketiga supaya skrip dan formulir tidak bebas berjalan.",
   "content": "<p class=\"mb-4\">Menempelkan widget pihak ketiga tanpa batas membuat skrip di dalam frame bisa membuka popup, mengirim form, atau navigasi halaman induk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mulai dari sandbox kosong, lalu buka yang perlu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan sandbox pada iframe. Tanpa token, skrip dan form mati. Jika widget wajib berjalan, tambahkan allow-scripts. Tambahkan allow-same-origin hanya jika benar-benar perlu, dan hindari menggabungkannya dengan allow-scripts pada konten yang tidak dipercaya. Jangan salin allow-top-navigation kecuali alur pembayaran memang pindah halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cocokkan dengan allow untuk fitur perangkat</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pratinjau widget. Kamera, mikrofon, dan geolokasi tetap mati sampai atribut allow menyebutnya. Jika widget pecah setelah sandbox, catat token yang kurang, jangan menghapus sandbox seluruhnya. Pola aman ini ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — iframe sandbox",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox",
   "sourceSnippet": "The sandbox attribute applies extra restrictions to the content in the frame.",
   "source2": "HTML spec — sandbox",
   "source2Url": "https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-sandbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit Iframe Permissions with the Sandbox Attribute",
   "desc": "How to use sandbox on a third-party iframe so scripts and forms cannot run freely.",
   "content": "<p class=\"mb-4\">Embedding a third-party widget with no limits lets scripts inside the frame open popups, submit forms, or navigate the parent page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Start with an empty sandbox, then allow only what you need</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add sandbox to the iframe. With no tokens, scripts and forms are disabled. If the widget must run, add allow-scripts. Add allow-same-origin only when required, and avoid combining it with allow-scripts on untrusted content. Do not copy allow-top-navigation unless checkout really navigates the top window.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pair it with allow for device features</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview the widget. Camera, microphone, and geolocation stay off until the allow attribute names them. If the widget breaks after sandboxing, note the missing token instead of removing sandbox entirely. This safer pattern is on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — iframe sandbox",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox",
   "sourceSnippet": "The sandbox attribute applies extra restrictions to the content in the frame.",
   "source2": "HTML spec — sandbox",
   "source2Url": "https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-sandbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "iframe-rasio-aspect-ratio",
 "langs": {
  "id": {
   "title": "Cara Jaga Rasio Iframe agar Tidak Melonjak Tinggi",
   "desc": "Tata cara membungkus iframe dengan aspect-ratio supaya video atau peta tidak mendorong layout.",
   "content": "<p class=\"mb-4\">Iframe dengan width 100% dan height tetap sering meninggalkan ruang kosong di layar lebar, atau terpotong di layar sempit, lalu menggeser konten di bawahnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kunci rasio pada pembungkus</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> bungkus iframe dengan div.rasio-16-9 { aspect-ratio: 16 / 9; } dan set iframe { width: 100%; height: 100%; border: 0; }. Hapus atribut height piksel yang bentrok. Untuk peta, rasio 4 / 3 sering lebih nyaman daripada 16 / 9.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur lompatan layout</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat ulang halaman dan perhatikan konten di bawah frame. Tinggi harus sudah terpesan sebelum iframe selesai. Jika masih melonjak, cek apakah skrip belakangan mengubah height inline. Contoh ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "The aspect-ratio CSS property sets a preferred aspect ratio for the box.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Keep an Iframe Ratio So It Does Not Jump",
   "desc": "How to wrap an iframe with aspect-ratio so a video or map does not push the layout.",
   "content": "<p class=\"mb-4\">An iframe with width 100% and a fixed height often leaves empty space on wide screens, or gets cropped on narrow ones, then shifts the content below.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lock the ratio on the wrapper</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> wrap the iframe in div.rasio-16-9 { aspect-ratio: 16 / 9; } and set iframe { width: 100%; height: 100%; border: 0; }. Remove a conflicting pixel height attribute. For maps, a 4 / 3 ratio is often more comfortable than 16 / 9.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure the layout jump</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reload the page and watch the content under the frame. The height should be reserved before the iframe finishes loading. If it still jumps, check whether a later script sets an inline height. An example is on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "The aspect-ratio CSS property sets a preferred aspect ratio for the box.",
   "source2": "web.dev — Optimize CLS",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "iframe-loading-lazy",
 "langs": {
  "id": {
   "title": "Cara Tunda Muat Iframe di Bawah Layar",
   "desc": "Tata cara memakai loading=lazy pada iframe yang tidak langsung terlihat agar halaman awal lebih ringan.",
   "content": "<p class=\"mb-4\">Peta, video, dan widget yang ada di bawah lipatan tetap mengunduh skrip saat halaman dibuka. Itu memperlambat interaksi pertama tanpa manfaat bagi pengunjung yang belum menggulir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lazy hanya untuk frame di luar layar awal</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan loading=\"lazy\" pada iframe yang posisinya di bawah lipatan. Jangan lazy-load iframe yang menjadi isi utama di atas, seperti pemutar yang langsung ditonton. Tetap isi width dan height atau aspect-ratio supaya ruang tidak melonjak saat frame masuk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lihat kapan permintaan berangkat</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka panel jaringan, muat ulang, dan gulir ke widget. Permintaan dokumen iframe harus muncul setelah frame mendekati viewport, bukan bersama HTML awal. Jika widget kritis, biarkan loading=\"eager\". Catatan ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — loading attribute",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#loading",
   "sourceSnippet": "The loading attribute specifies whether a browser should load an iframe immediately or defer it.",
   "source2": "web.dev — Browser-level lazy loading",
   "source2Url": "https://web.dev/articles/browser-level-image-lazy-loading",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Defer an Iframe Below the Fold",
   "desc": "How to use loading=lazy on an iframe that is not immediately visible so the first view stays lighter.",
   "content": "<p class=\"mb-4\">Maps, videos, and widgets below the fold still download scripts when the page opens. That slows the first interaction for visitors who have not scrolled.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lazy-load only frames outside the first screen</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add loading=\"lazy\" to iframes that sit below the fold. Do not lazy-load an iframe that is the main content above the fold, such as a player meant to start immediately. Keep width and height or aspect-ratio so space does not jump when the frame arrives.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Watch when the request leaves</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the network panel, reload, and scroll to the widget. The iframe document request should appear as the frame nears the viewport, not with the initial HTML. If the widget is critical, leave loading=\"eager\". Notes are on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — loading attribute",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#loading",
   "sourceSnippet": "The loading attribute specifies whether a browser should load an iframe immediately or defer it.",
   "source2": "web.dev — Browser-level lazy loading",
   "source2Url": "https://web.dev/articles/browser-level-image-lazy-loading",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};

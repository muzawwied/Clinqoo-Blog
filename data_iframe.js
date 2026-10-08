// Clincoo Docs — tambah 5 artikel Iframe (8 Oktober 2026, 14:00 WIB)
// Clincoo Docs — kategori Iframe (8 Oktober 2026, 12:00 WIB) — 4 artikel
// Clincoo Docs — tambah 5 artikel Iframe (8 Oktober 2026, 13:00 WIB)
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
},
{
 "id": "iframe-allow-hanya-izin-yang-perlu",
 "langs": {
  "id": {
   "title": "Cara Batasi Izin Iframe lewat Atribut allow",
   "desc": "Tata cara mengisi allow hanya untuk izin yang benar-benar dipakai, bukan menyalakan kamera atau pembayaran untuk semua frame.",
   "content": "<p class=\"mb-4\">Atribut allow pada iframe adalah daftar izin, bukan dekorasi. Nilai kosong atau bintang memberi widget akses yang tidak diminta pengunjung.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis izin per fitur</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> isi allow hanya untuk fitur yang dipakai. Pemutar video cukup fullscreen. Peta tidak perlu microphone. Pembayaran hanya payment jika tombol bayar memang ada di dalam frame. Jangan salin allow=\"camera; microphone; geolocation\" dari contoh lama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka halaman, picu fitur di dalam frame, lalu cek apakah prompt izin muncul hanya saat aksi itu. Jika prompt muncul saat halaman dibuka, allow terlalu longgar. Catatan ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Permissions-Policy / allow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#allow",
   "sourceSnippet": "The allow attribute defines a Permissions Policy for the iframe.",
   "source2": "MDN — Permissions Policy",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit Iframe Permissions with the allow Attribute",
   "desc": "How to set allow only for permissions the frame actually uses, instead of enabling camera or payment on every embed.",
   "content": "<p class=\"mb-4\">The iframe allow attribute is a permission list, not decoration. An empty or wildcard value gives a widget access the visitor did not ask for.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name permissions per feature</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set allow only for the feature in use. A video player needs fullscreen. A map does not need microphone. A checkout needs payment only if the pay button lives inside the frame. Do not copy allow=\"camera; microphone; geolocation\" from an old example.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check it in preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the page, trigger the feature inside the frame, and confirm the permission prompt appears only for that action. If the prompt appears on load, allow is too wide. Notes are on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Permissions-Policy / allow",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#allow",
   "sourceSnippet": "The allow attribute defines a Permissions Policy for the iframe.",
   "source2": "MDN — Permissions Policy",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "iframe-referrerpolicy-jangan-bocorkan-path",
 "langs": {
  "id": {
   "title": "Cara Set Referrer Policy pada Iframe",
   "desc": "Tata cara memakai referrerpolicy agar URL halaman Clincoo tidak ikut terbawa saat iframe memuat pihak ketiga.",
   "content": "<p class=\"mb-4\">Tanpa referrerpolicy, dokumen iframe bisa menerima URL lengkap halaman induk, termasuk path draf atau slug yang belum dipublikasikan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih strict-origin-when-cross-origin</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan referrerpolicy=\"strict-origin-when-cross-origin\" pada iframe pihak ketiga. Origin tetap terkirim agar layanan mengenal situs, path tidak. Untuk widget yang tidak butuh origin sama sekali, pakai no-referrer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek header permintaan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka panel jaringan, pilih dokumen iframe, dan lihat header Referer. Path halaman tidak boleh ada. Jika widget rusak setelah no-referrer, longgarkan hanya pada frame itu, bukan pada semua iframe. Catatan ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — referrerpolicy attribute",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#referrerpolicy",
   "sourceSnippet": "The referrerpolicy attribute indicates which referrer to send when fetching the frame.",
   "source2": "MDN — Referrer-Policy",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set an Iframe Referrer Policy",
   "desc": "How to use referrerpolicy so the Clincoo page URL is not forwarded when an iframe loads a third party.",
   "content": "<p class=\"mb-4\">Without referrerpolicy, the iframe document can receive the full parent URL, including a draft path or an unpublished slug.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Prefer strict-origin-when-cross-origin</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add referrerpolicy=\"strict-origin-when-cross-origin\" on third-party iframes. The origin still goes out so the service can recognize the site; the path does not. For a widget that needs no origin at all, use no-referrer.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Inspect the request header</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the network panel, select the iframe document, and read the Referer header. The page path should be absent. If a widget breaks after no-referrer, loosen the policy only on that frame, not on every iframe. Notes are on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — referrerpolicy attribute",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#referrerpolicy",
   "sourceSnippet": "The referrerpolicy attribute indicates which referrer to send when fetching the frame.",
   "source2": "MDN — Referrer-Policy",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "iframe-tinggi-lewat-postmessage",
 "langs": {
  "id": {
   "title": "Cara Atur Tinggi Iframe lewat postMessage",
   "desc": "Tata cara mengukur tinggi isi di dalam iframe dan mengirimnya ke halaman induk supaya tidak ada scroll ganda.",
   "content": "<p class=\"mb-4\">Iframe dengan tinggi tetap memotong isi panjang atau menyisakan ruang kosong. Scroll di dalam frame di atas scroll halaman membingungkan di ponsel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kirim tinggi, cek origin</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> dari dokumen di dalam frame kirim postMessage berisi tinggi scrollHeight hanya ke origin halaman induk. Di induk, dengarkan message, abaikan event yang origin-nya bukan domain frame, lalu set style.height. Jangan percaya angka dari origin lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji setelah isi berubah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau, tambah paragraf di dalam frame, dan pastikan tinggi mengikuti tanpa scrollbar dalam. Jika frame pihak ketiga tidak mengirim pesan, kembali ke aspect-ratio tetap. Catatan ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — window.postMessage",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",
   "sourceSnippet": "postMessage safely enables cross-origin communication between Window objects.",
   "source2": "MDN — iframe element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Size an Iframe Height with postMessage",
   "desc": "How to measure content inside an iframe and send the height to the parent page so nested scrolling does not appear.",
   "content": "<p class=\"mb-4\">A fixed iframe height clips long content or leaves empty space. A scrollbar inside the frame on top of the page scroll is confusing on a phone.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Send the height and check origin</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> have the inner document postMessage its scrollHeight only to the parent origin. On the parent, listen for message, ignore events whose origin is not the frame domain, then set style.height. Do not trust a number from another origin.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Retest after content changes</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open preview, add a paragraph inside the frame, and confirm the height follows without an inner scrollbar. If a third-party frame never sends a message, fall back to a fixed aspect-ratio. Notes are on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — window.postMessage",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",
   "sourceSnippet": "postMessage safely enables cross-origin communication between Window objects.",
   "source2": "MDN — iframe element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "iframe-srcdoc-cuplikan-tanpa-url",
 "langs": {
  "id": {
   "title": "Cara Pakai srcdoc untuk Cuplikan Tanpa URL Luar",
   "desc": "Tata cara menaruh cuplikan HTML di srcdoc supaya pratinjau tidak bergantung pada berkas eksternal.",
   "content": "<p class=\"mb-4\">Cuplikan kecil yang di-iframe lewat src tetap butuh URL, CORS, dan berkas terpisah. srcdoc menyimpan HTML langsung di atribut, cocok untuk contoh di dokumentasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis HTML ringkas dan sandbox</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> isi srcdoc dengan dokumen mini, tetap beri title, dan pasang sandbox tanpa allow-scripts kecuali contoh memang butuh skrip. Escape tanda kutip. Jangan taruh rahasia atau token di srcdoc karena atribut terlihat di sumber halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan dengan src</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pratinjau harus menampilkan cuplikan tanpa permintaan jaringan tambahan. Jika contoh besar atau sering berubah, pindah ke src berkas sendiri. Catatan ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — srcdoc attribute",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#srcdoc",
   "sourceSnippet": "srcdoc specifies the HTML content of the page to show in the inline frame.",
   "source2": "MDN — iframe sandbox",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use srcdoc for a Snippet Without an External URL",
   "desc": "How to place a small HTML snippet in srcdoc so a preview does not depend on an external file.",
   "content": "<p class=\"mb-4\">A small snippet iframed with src still needs a URL, CORS, and a separate file. srcdoc stores the HTML in the attribute, which fits a documentation example.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the HTML short and sandboxed</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set srcdoc to a mini document, keep a title, and add sandbox without allow-scripts unless the example truly needs script. Escape quotes. Do not put secrets or tokens in srcdoc; the attribute is visible in page source.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare it with src</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> the preview should show the snippet with no extra network request. If the example is large or changes often, move it to its own src file. Notes are on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — srcdoc attribute",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#srcdoc",
   "sourceSnippet": "srcdoc specifies the HTML content of the page to show in the inline frame.",
   "source2": "MDN — iframe sandbox",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "iframe-allowfullscreen-hanya-pemutar",
 "langs": {
  "id": {
   "title": "Cara Izinkan Layar Penuh Hanya pada Pemutar",
   "desc": "Tata cara memasang allowfullscreen hanya pada iframe video, bukan pada setiap widget.",
   "content": "<p class=\"mb-4\">Tombol layar penuh di dalam iframe diabaikan browser jika halaman induk tidak mengizinkannya. Sebaliknya, mengizinkan semua frame membuka overlay yang menutup navigasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang hanya pada pemutar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan allowfullscreen dan allow=\"fullscreen\" hanya pada iframe video. Peta, formulir, dan chat tidak perlu. Tetap beri title yang menyebut nama pemutar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Coba tombolnya</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau, tekan layar penuh, lalu Esc. Halaman induk harus kembali utuh, fokus tidak hilang ke body. Jika widget non-video juga bisa layar penuh, cabut atributnya. Catatan ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — allowfullscreen attribute",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#allowfullscreen",
   "sourceSnippet": "allowfullscreen lets the iframe activate fullscreen mode.",
   "source2": "MDN — Fullscreen API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Allow Fullscreen Only on a Player Iframe",
   "desc": "How to set allowfullscreen only on a video iframe, not on every widget.",
   "content": "<p class=\"mb-4\">A fullscreen button inside an iframe is ignored unless the parent page allows it. Allowing every frame instead lets overlays cover navigation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add it only on the player</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add allowfullscreen and allow=\"fullscreen\" only on the video iframe. Maps, forms, and chat do not need it. Keep a title that names the player.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Press the control</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open preview, enter fullscreen, then press Esc. The parent page should return intact and focus should not drop to the body. If a non-video widget can also go fullscreen, remove the attribute. Notes are on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — allowfullscreen attribute",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#allowfullscreen",
   "sourceSnippet": "allowfullscreen lets the iframe activate fullscreen mode.",
   "source2": "MDN — Fullscreen API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "iframe-debug-refused-to-connect",
 "langs": {
  "id": {
   "title": "Cara Debug Iframe yang Menolak Terhubung",
   "desc": "Tata cara membaca pesan refused to connect: cek X-Frame-Options, CSP frame-ancestors, dan URL yang diblokir.",
   "content": "<p class=\"mb-4\">Bingkai kosong bertuliskan refused to connect hampir selalu berarti situs tujuan melarang dirinya disematkan, bukan karena tag iframe-nya salah ketik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca header yang menolak frame</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka pratinjau, lalu panel jaringan pada dokumen iframe. Jika status gagal, lihat header X-Frame-Options (DENY atau SAMEORIGIN) atau Content-Security-Policy frame-ancestors. SAMEORIGIN hanya mengizinkan halaman satu origin. Situs lain tidak bisa Anda ubah dari Clincoo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti sumber, jangan paksa</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ganti src ke URL embed resmi (bukan URL halaman biasa), atau tautkan keluar jika pemilik tidak menyediakan embed. Catatan ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — X-Frame-Options",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options",
   "sourceSnippet": "X-Frame-Options controls whether a browser may render a page inside a frame.",
   "source2": "MDN — CSP frame-ancestors",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Debug an Iframe That Refuses to Connect",
   "desc": "How to read a refused to connect message: check X-Frame-Options, CSP frame-ancestors, and the blocked URL.",
   "content": "<p class=\"mb-4\">A blank frame that says refused to connect almost always means the target site forbids being embedded, not that the iframe tag is mistyped.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the header that blocks the frame</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the preview, then the network panel for the iframe document. If the request fails, check X-Frame-Options (DENY or SAMEORIGIN) or Content-Security-Policy frame-ancestors. SAMEORIGIN only allows a page on the same origin. You cannot change another site from Clincoo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Switch the source, do not force it</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> replace src with an official embed URL (not the normal page URL), or link out if the owner does not provide an embed. Notes live on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — X-Frame-Options",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options",
   "sourceSnippet": "X-Frame-Options controls whether a browser may render a page inside a frame.",
   "source2": "MDN — CSP frame-ancestors",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "iframe-youtube-nocookie",
 "langs": {
  "id": {
   "title": "Cara Sematkan YouTube Tanpa Cookie Pihak Ketiga",
   "desc": "Tata cara memakai domain youtube-nocookie dan judul iframe supaya video tidak memasang cookie sebelum diputar.",
   "content": "<p class=\"mb-4\">URL youtube.com/embed memasang cookie pihak ketiga begitu frame dimuat. Pengunjung yang hanya membaca teks ikut terkena pelacakan itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai domain nocookie</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set src ke https://www.youtube-nocookie.com/embed/ID_VIDEO. Tambahkan title yang menyebut judul video, loading=\"lazy\" jika pemutar di bawah lipatan, dan referrerpolicy=\"strict-origin-when-cross-origin\". Jangan salin URL tontonan biasa ke src.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek cookie di panel aplikasi</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat ulang pratinjau tanpa memutar video, lalu buka penyimpanan. Cookie YouTube tidak boleh muncul sebelum interaksi putar. Detail ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "YouTube — Embed videos and playlists",
   "sourceUrl": "https://developers.google.com/youtube/player_parameters",
   "sourceSnippet": "The youtube-nocookie.com domain serves the player without setting cookies until playback.",
   "source2": "MDN — iframe element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Embed YouTube Without Third-Party Cookies",
   "desc": "How to use the youtube-nocookie domain and an iframe title so a video does not set cookies before playback.",
   "content": "<p class=\"mb-4\">A youtube.com/embed URL sets third-party cookies as soon as the frame loads. Visitors who only read the text still get that tracking.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use the nocookie domain</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set src to https://www.youtube-nocookie.com/embed/VIDEO_ID. Add a title that names the video, loading=\"lazy\" if the player is below the fold, and referrerpolicy=\"strict-origin-when-cross-origin\". Do not paste a normal watch URL into src.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check cookies in the application panel</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reload the preview without playing the video, then open storage. YouTube cookies should not appear before a play interaction. Details are on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "YouTube — Embed videos and playlists",
   "sourceUrl": "https://developers.google.com/youtube/player_parameters",
   "sourceSnippet": "The youtube-nocookie.com domain serves the player without setting cookies until playback.",
   "source2": "MDN — iframe element",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "iframe-sandbox-jangan-gabung-scripts",
 "langs": {
  "id": {
   "title": "Cara Hindari sandbox allow-scripts dan allow-same-origin Bersamaan",
   "desc": "Tata cara menjaga iframe sandbox: jangan gabungkan allow-scripts dan allow-same-origin pada dokumen yang tidak tepercaya.",
   "content": "<p class=\"mb-4\">Atribut sandbox tanpa token memblokir skrip. Menambah allow-scripts dan allow-same-origin sekaligus membuat dokumen bisa melepas sandbox-nya sendiri jika origin-nya sama dengan halaman induk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih satu jalur izin</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> untuk cuplikan pihak ketiga pakai sandbox=\"allow-scripts\" tanpa allow-same-origin, atau srcdoc kosong dari skrip. Untuk widget yang memang harus satu origin dan tepercaya, jangan andalkan sandbox sebagai pagar utama. Jangan salin daftar allow lengkap dari contoh lama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji apakah frame bisa menyentuh induk</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka konsol pada dokumen frame dan coba baca parent.location. Akses itu harus gagal untuk konten yang tidak tepercaya. Catatan ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — iframe sandbox",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox",
   "sourceSnippet": "Allowing both scripts and same-origin can let the framed page remove the sandbox.",
   "source2": "HTML spec — sandbox attribute",
   "source2Url": "https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-sandbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid sandbox allow-scripts with allow-same-origin",
   "desc": "How to keep a sandboxed iframe safe: do not combine allow-scripts and allow-same-origin on an untrusted document.",
   "content": "<p class=\"mb-4\">A sandbox attribute with no tokens blocks scripts. Adding allow-scripts and allow-same-origin together lets the document remove its own sandbox if it shares the parent origin.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pick one permission path</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use sandbox=\"allow-scripts\" without allow-same-origin for a third-party snippet, or a script-free srcdoc. For a widget that must share your origin and is trusted, do not treat sandbox as the main fence. Do not copy a full allow list from an old example.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test whether the frame can touch the parent</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the console in the frame document and try to read parent.location. That access should fail for untrusted content. Notes are on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — iframe sandbox",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox",
   "sourceSnippet": "Allowing both scripts and same-origin can let the framed page remove the sandbox.",
   "source2": "HTML spec — sandbox attribute",
   "source2Url": "https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-sandbox",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "iframe-tinggi-cadangan-cegah-lonjakan",
 "langs": {
  "id": {
   "title": "Cara Siapkan Tinggi Cadangan agar Iframe Tidak Melonjak",
   "desc": "Tata cara mengunci lebar dan tinggi iframe sebelum dokumen pihak ketiga selesai agar layout tidak bergeser.",
   "content": "<p class=\"mb-4\">Iframe tanpa ukuran intrinsik mulai setinggi beberapa piksel, lalu melonjak setelah widget selesai. Teks di bawahnya terdorong dan Cumulative Layout Shift naik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kunci kotak sebelum src dimuat</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri width dan height pada iframe, atau bungkus dengan div yang aspect-ratio-nya sama dengan pemutar (misalnya 16/9). Set display block dan width 100% pada frame, max-width 100%, dan jangan biarkan tinggi mengikuti konten lintas-origin yang tidak Anda kendalikan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur lonjakan di panel performa</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> rekam muat ulang dan lihat layout shift. Kotak iframe harus sudah stabil sebelum dokumen pihak ketiga selesai. Catatan ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "aspect-ratio reserves a box before replaced content such as an iframe finishes loading.",
   "source2": "web.dev — Optimize Cumulative Layout Shift",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Reserve Height so an Iframe Does Not Jump",
   "desc": "How to lock an iframe width and height before the third-party document finishes so layout does not shift.",
   "content": "<p class=\"mb-4\">An iframe with no intrinsic size starts a few pixels tall, then jumps after the widget finishes. Text below it is pushed down and Cumulative Layout Shift rises.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lock the box before src loads</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set width and height on the iframe, or wrap it in a div whose aspect-ratio matches the player (for example 16/9). Set the frame to display block and width 100%, max-width 100%, and do not let height follow cross-origin content you do not control.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure the jump in the performance panel</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> record a reload and look for layout shift. The iframe box should already be stable before the third-party document finishes. Notes are on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — aspect-ratio",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
   "sourceSnippet": "aspect-ratio reserves a box before replaced content such as an iframe finishes loading.",
   "source2": "web.dev — Optimize Cumulative Layout Shift",
   "source2Url": "https://web.dev/articles/optimize-cls",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "iframe-permissions-policy-kamera",
 "langs": {
  "id": {
   "title": "Cara Batasi Kamera dan Mikrofon di Iframe",
   "desc": "Tata cara memakai atribut allow dan Permissions-Policy supaya iframe tidak meminta kamera atau mikrofon.",
   "content": "<p class=\"mb-4\">Widget rapat atau peta kadang meminta kamera begitu frame dimuat. Tanpa batas, prompt itu muncul di situs Anda atas nama dokumen lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kosongkan izin yang tidak perlu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan tulis allow=\"camera; microphone\" kecuali pemutar memang butuh. Untuk peta atau formulir, sisakan allow kosong atau hanya geolocation jika benar-benar dipakai. Di header halaman induk, Permissions-Policy camera=() dan microphone=() menutup delegasi ke frame.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pastikan prompt tidak muncul</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat pratinjau dan buka sensor di DevTools. Izin kamera pada frame harus denied sebelum pengguna mengetuk apa pun. Detail ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Permissions-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy",
   "sourceSnippet": "Permissions-Policy can disable camera and microphone for the page and its frames.",
   "source2": "MDN — iframe allow attribute",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#allow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Restrict Camera and Microphone in an Iframe",
   "desc": "How to use the allow attribute and Permissions-Policy so an iframe cannot request the camera or microphone.",
   "content": "<p class=\"mb-4\">A meeting widget or map sometimes asks for the camera as soon as the frame loads. Without a limit, that prompt appears on your site on behalf of another document.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Leave out permissions you do not need</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not write allow=\"camera; microphone\" unless the player really needs them. For a map or form, leave allow empty or keep only geolocation if it is actually used. On the parent page header, Permissions-Policy camera=() and microphone=() close delegation to the frame.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Confirm the prompt does not appear</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> load the preview and open sensors in DevTools. Camera permission on the frame should be denied before the user taps anything. Details are on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Permissions-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy",
   "sourceSnippet": "Permissions-Policy can disable camera and microphone for the page and its frames.",
   "source2": "MDN — iframe allow attribute",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#allow",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};

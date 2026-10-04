// Clincoo Docs — kategori Prefetch (Oktober 2026)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["prefetch"] = {
 "names": {
  "id": "Prefetch",
  "en": "Prefetch"
 },
 "articles": [
{
 "id": "prefetch-bedakan-preload-dan-prefetch",
 "langs": {
  "id": {
   "title": "Cara Bedakan Preload dan Prefetch sebelum Menambah Hint",
   "desc": "Tata cara memilih preload untuk aset halaman ini dan prefetch untuk halaman berikutnya di proyek Clincoo, bukan memasang keduanya pada berkas yang sama.",
   "content": "<p class=\"mb-4\">Hint yang salah membuat browser mengunduh berkas yang belum dibutuhkan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka head halaman, lalu cek setiap link rel sebelum menyimpan pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Preload untuk aset yang halaman ini pasti pakai</h2><p class=\"mb-4\">rel=preload cocok untuk CSS, font, atau gambar hero yang langsung dirender. Tambahkan as=style, as=font, atau as=image. Tanpa atribut as, browser bisa mengabaikan hint atau mengunduh dua kali.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Prefetch untuk navigasi berikutnya</h2><p class=\"mb-4\">rel=prefetch adalah prioritas rendah untuk halaman atau skrip yang mungkin dibuka setelah ini. Jangan prefetch berkas yang sudah di-preload di halaman yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di panel Network</h2><p class=\"mb-4\">Muat ulang, filter ke Doc dan Other, lalu lihat prioritas. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> hint mana yang memicu unduhan sebelum elemen memakainya. Hapus hint yang tidak mengubah urutan muat.</p>",
   "source": "MDN — rel=preload",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload",
   "sourceSnippet": "preload tells the browser to fetch a resource that the current page will need soon, using the as attribute to set the destination.",
   "source2": "MDN — rel=prefetch",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/prefetch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Tell Preload from Prefetch Before Adding a Hint",
   "desc": "How to use preload for this page's asset and prefetch for the next page in a Clincoo project, instead of putting both hints on the same file.",
   "content": "<p class=\"mb-4\">The wrong hint makes the browser download a file it does not need yet. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the page head and check every link rel before you save the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Preload for an asset this page will use</h2><p class=\"mb-4\">rel=preload fits CSS, a font, or a hero image that renders immediately. Add as=style, as=font, or as=image. Without as, the browser may ignore the hint or download twice.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Prefetch for the next navigation</h2><p class=\"mb-4\">rel=prefetch is a low-priority fetch for a page or script the visitor might open next. Do not prefetch a file that is already preloaded on the same page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the Network panel</h2><p class=\"mb-4\">Reload, filter to Doc and Other, and read the priority. Note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> which hint starts a download before the element needs it. Remove a hint that does not change load order.</p>",
   "source": "MDN — rel=preload",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload",
   "sourceSnippet": "preload tells the browser to fetch a resource that the current page will need soon, using the as attribute to set the destination.",
   "source2": "MDN — rel=prefetch",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/prefetch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "prefetch-preconnect-asal-kritis",
 "langs": {
  "id": {
   "title": "Cara Batasi Preconnect ke Asal yang Benar-benar Kritis",
   "desc": "Tata cara memasang preconnect hanya untuk host yang halaman Clincoo hubungi di awal, bukan untuk setiap domain CDN yang disebut di kode.",
   "content": "<p class=\"mb-4\">Preconnect membuka koneksi TLS sebelum request pertama. Terlalu banyak hint malah memakan soket. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> daftar host yang benar-benar dipanggil pada muat pertama pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu atau dua asal, bukan daftar panjang</h2><p class=\"mb-4\">Pasang rel=preconnect hanya untuk API atau font yang memblokir tampilan awal. Host gambar di bawah lipatan tidak perlu koneksi lebih awal. crossorigin wajib jika font atau fetch memakai mode CORS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">dns-prefetch bukan pengganti preconnect</h2><p class=\"mb-4\">dns-prefetch hanya menyelesaikan nama. Pakai itu untuk host yang mungkin terpakai. Preconnect untuk host yang pasti terpakai dalam detik pertama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buktikan di timing</h2><p class=\"mb-4\">Di panel Network baca stalled dan initial connection pada request pertama ke host itu. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> apakah preconnect memperpendek koneksi. Hapus hint yang tidak mengubah angka.</p>",
   "source": "MDN — rel=preconnect",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preconnect",
   "sourceSnippet": "preconnect tells the browser to open a connection early to an origin the page will need, including DNS, TCP, and TLS.",
   "source2": "web.dev — Establish network connections early",
   "source2Url": "https://web.dev/articles/preconnect-and-dns-prefetch",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit Preconnect to Origins That Are Actually Critical",
   "desc": "How to add preconnect only for hosts a Clincoo page contacts early, not for every CDN domain mentioned in the code.",
   "content": "<p class=\"mb-4\">Preconnect opens a TLS connection before the first request. Too many hints waste sockets. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> list the hosts the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview actually calls on first load.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One or two origins, not a long list</h2><p class=\"mb-4\">Use rel=preconnect only for an API or font that blocks the first paint. An image host below the fold does not need an early connection. crossorigin is required when a font or fetch uses CORS mode.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">dns-prefetch is not a substitute for preconnect</h2><p class=\"mb-4\">dns-prefetch only resolves the name. Use it for a host that might be used. Preconnect is for a host that will be used in the first second.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Prove it in the timing</h2><p class=\"mb-4\">In the Network panel read stalled and initial connection on the first request to that host. Note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> whether preconnect shortened the connection. Remove a hint that does not change the numbers.</p>",
   "source": "MDN — rel=preconnect",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preconnect",
   "sourceSnippet": "preconnect tells the browser to open a connection early to an origin the page will need, including DNS, TCP, and TLS.",
   "source2": "web.dev — Establish network connections early",
   "source2Url": "https://web.dev/articles/preconnect-and-dns-prefetch",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "prefetch-modulepreload-modul-es",
 "langs": {
  "id": {
   "title": "Cara Pakai modulepreload untuk Modul ES yang Pasti Dipakai",
   "desc": "Tata cara memuat awal modul ES di proyek Clincoo dengan modulepreload, bukan preload biasa yang tidak mem-parse grafik impor.",
   "content": "<p class=\"mb-4\">Modul type=module sering terlambat karena browser harus mengambil impornya satu per satu. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan link rel=modulepreload hanya untuk modul yang halaman ini impor saat muat, lalu cek pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">modulepreload mem-parse, preload biasa tidak</h2><p class=\"mb-4\">rel=preload as=script mengunduh berkas, tetapi tidak menyusun grafik impor modul. rel=modulepreload mengunduh dan mengompilasi modul beserta impor statisnya. Jangan memasang keduanya untuk URL yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan preload rute yang jarang dibuka</h2><p class=\"mb-4\">Modul dialog atau halaman admin yang hanya dibuka setelah klik tidak perlu modulepreload di beranda. Hint itu bersaing dengan CSS dan font hero.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek waterfall sebelum menambah hint kedua</h2><p class=\"mb-4\">Lihat apakah modul utama dan impornya mulai bersamaan. Tulis di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> URL modul dan apakah ada request ganda. Satu modulepreload yang tepat lebih berguna daripada daftar hint yang menyalin setiap file JS.</p>",
   "source": "MDN — rel=modulepreload",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/modulepreload",
   "sourceSnippet": "modulepreload fetches and compiles a module script and its static imports before they are needed.",
   "source2": "HTML spec — Link type modulepreload",
   "source2Url": "https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use modulepreload for an ES Module the Page Will Use",
   "desc": "How to preload an ES module in a Clincoo project with modulepreload, not a plain preload that does not parse the import graph.",
   "content": "<p class=\"mb-4\">A type=module script is often late because the browser fetches its imports one by one. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add link rel=modulepreload only for a module this page imports on load, then check the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">modulepreload parses, a plain preload does not</h2><p class=\"mb-4\">rel=preload as=script downloads the file but does not build the module import graph. rel=modulepreload downloads and compiles the module and its static imports. Do not set both for the same URL.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not preload a rarely opened route</h2><p class=\"mb-4\">A dialog module or an admin page that opens only after a click does not need modulepreload on the home page. That hint competes with CSS and the hero font.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the waterfall before adding a second hint</h2><p class=\"mb-4\">See whether the main module and its imports start together. Write on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> the module URL and whether there is a duplicate request. One correct modulepreload is more useful than a hint list that copies every JS file.</p>",
   "source": "MDN — rel=modulepreload",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/modulepreload",
   "sourceSnippet": "modulepreload fetches and compiles a module script and its static imports before they are needed.",
   "source2": "HTML spec — Link type modulepreload",
   "source2Url": "https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ,
{
 "id": "prefetch-dns-prefetch-host-pihak-ketiga",
 "langs": {
  "id": {
   "title": "Cara Pasang dns-prefetch hanya untuk Host Pihak Ketiga",
   "desc": "Tata cara menambah dns-prefetch untuk domain pihak ketiga yang benar-benar dipanggil di proyek Clincoo, bukan untuk setiap host yang tertulis di komentar.",
   "content": "<p class=\"mb-4\">dns-prefetch hanya menyelesaikan nama domain. Ia tidak membuka koneksi dan tidak mengunduh berkas. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> catat host pihak ketiga yang halaman ini panggil, lalu pasang hint sebelum menyimpan pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kapan dns-prefetch cukup</h2><p class=\"mb-4\">Pakai rel=dns-prefetch untuk analitik, font, atau API yang mungkin dipakai, tetapi belum pasti di awal muat. Jangan pakai untuk host yang sudah di-preconnect: preconnect sudah mencakup pencarian DNS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satu host, satu link</h2><p class=\"mb-4\">Tulis href dengan skema, misalnya https://cdn.example.com. Tanpa skema, browser bisa mengabaikan hint. Jangan salin daftar domain dari template lama jika halaman ini tidak memanggilnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di panel Network</h2><p class=\"mb-4\">Muat ulang, buka Timing pada permintaan pertama ke host itu, lalu lihat apakah DNS lookup lebih singkat. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> host yang tidak pernah muncul. Hapus hint yang tidak punya permintaan terkait.</p>",
   "source": "MDN — rel=dns-prefetch",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/dns-prefetch",
   "sourceSnippet": "dns-prefetch asks the browser to resolve the domain name of an origin the page may contact soon.",
   "source2": "HTML spec — Link type dns-prefetch",
   "source2Url": "https://html.spec.whatwg.org/multipage/links.html#link-type-dns-prefetch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Add dns-prefetch Only for a Third-Party Host",
   "desc": "How to add dns-prefetch for a third-party domain a Clincoo project actually calls, not for every host mentioned in a comment.",
   "content": "<p class=\"mb-4\">dns-prefetch only resolves a domain name. It does not open a connection and it does not download a file. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> list the third-party hosts this page calls, then add the hint before you save the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">When dns-prefetch is enough</h2><p class=\"mb-4\">Use rel=dns-prefetch for analytics, a font, or an API that might be used but is not certain at first paint. Do not use it for a host that already has preconnect: preconnect already includes the DNS lookup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">One host, one link</h2><p class=\"mb-4\">Write href with a scheme, for example https://cdn.example.com. Without a scheme the browser may ignore the hint. Do not copy a domain list from an old template if this page never calls those hosts.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the Network panel</h2><p class=\"mb-4\">Reload, open Timing on the first request to that host, and see whether the DNS lookup is shorter. Note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> any host that never appears. Remove a hint that has no matching request.</p>",
   "source": "MDN — rel=dns-prefetch",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/dns-prefetch",
   "sourceSnippet": "dns-prefetch asks the browser to resolve the domain name of an origin the page may contact soon.",
   "source2": "HTML spec — Link type dns-prefetch",
   "source2Url": "https://html.spec.whatwg.org/multipage/links.html#link-type-dns-prefetch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "prefetch-speculation-rules-prerender",
 "langs": {
  "id": {
   "title": "Cara Pakai Speculation Rules untuk Prerender Tautan Berikutnya",
   "desc": "Tata cara menulis speculation rules untuk prefetch atau prerender satu tautan berikutnya di proyek Clincoo, bukan mempratinjau seluruh situs.",
   "content": "<p class=\"mb-4\">Speculation Rules adalah JSON di script type=speculationrules. Ia bisa prefetch atau prerender dokumen yang kemungkinan diklik. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> mulai dari satu URL, lalu cek pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sebelum menambah daftar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih prefetch atau prerender</h2><p class=\"mb-4\">prefetch mengunduh respons tanpa menjalankan halaman. prerender menyiapkan halaman di latar belakang dan lebih berat. Pakai prerender hanya untuk tautan yang hampir selalu diklik, misalnya langkah berikutnya di alur yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi eagerness dan URL</h2><p class=\"mb-4\">Isi urls dengan path relatif yang sama-asal. Jangan pakai where selector yang cocok dengan semua tautan. eagerness moderate atau conservative lebih aman daripada immediate pada daftar panjang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji tanpa menghitung ulang analitik</h2><p class=\"mb-4\">Buka DevTools, panel Application atau Speculation, lalu lihat kandidat yang benar-benar dipicu. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> jika prerender memicu permintaan yang tidak boleh jalan dua kali. Turunkan ke prefetch jika efek sampingnya mengganggu.</p>",
   "source": "MDN — Speculation Rules API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API",
   "sourceSnippet": "The Speculation Rules API lets a page suggest URLs the browser may prefetch or prerender.",
   "source2": "Chrome Developers — Speculation Rules",
   "source2Url": "https://developer.chrome.com/docs/web-platform/prerender-pages",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Speculation Rules to Prerender the Next Link",
   "desc": "How to write speculation rules that prefetch or prerender one next link in a Clincoo project, instead of prerendering the whole site.",
   "content": "<p class=\"mb-4\">Speculation Rules is JSON in a script type=speculationrules. It can prefetch or prerender a document the visitor is likely to open. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> start with one URL, then check the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview before you grow the list.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Choose prefetch or prerender</h2><p class=\"mb-4\">prefetch downloads the response without running the page. prerender prepares the page in the background and costs more. Use prerender only for a link that is almost always clicked, such as the next step in the same flow.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit eagerness and URLs</h2><p class=\"mb-4\">Put a same-origin relative path in urls. Do not use a where selector that matches every link. moderate or conservative eagerness is safer than immediate on a long list.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test without double-counting analytics</h2><p class=\"mb-4\">Open DevTools, the Application or Speculation panel, and read which candidates actually fire. Note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> if prerender triggers a request that must not run twice. Drop back to prefetch if the side effect gets in the way.</p>",
   "source": "MDN — Speculation Rules API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API",
   "sourceSnippet": "The Speculation Rules API lets a page suggest URLs the browser may prefetch or prerender.",
   "source2": "Chrome Developers — Speculation Rules",
   "source2Url": "https://developer.chrome.com/docs/web-platform/prerender-pages",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "prefetch-as-dan-type-pada-preload",
 "langs": {
  "id": {
   "title": "Cara Isi Atribut as dan type pada Preload",
   "desc": "Tata cara mengisi as dan type pada rel=preload di proyek Clincoo supaya browser memakai unduhan itu, bukan mengabaikannya atau mengunduh ulang.",
   "content": "<p class=\"mb-4\">rel=preload tanpa as sering diabaikan. Destinasi unduhan harus sama dengan cara aset dipakai. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cek setiap preload di head sebelum menyimpan pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasangkan as dengan pemakaian</h2><p class=\"mb-4\">CSS memakai as=style. Gambar hero memakai as=image. Skrip klasik memakai as=script. Modul ES lebih tepat modulepreload, bukan preload as=script. Font memakai as=font dan membutuhkan crossorigin.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambahkan type bila formatnya spesifik</h2><p class=\"mb-4\">type=font/woff2 atau type=image/avif membuat browser melewati hint jika format tidak didukung. Itu mencegah unduhan yang tidak akan dipakai. Jangan isi type yang tidak cocok dengan berkasnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cari unduhan ganda</h2><p class=\"mb-4\">Di panel Network, URL yang sama tidak boleh muncul dua kali dengan prioritas berbeda. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> preload yang tetap memicu permintaan kedua. Perbaiki as, atau hapus hint jika elemen sudah memuat aset itu lebih awal.</p>",
   "source": "MDN — rel=preload",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload",
   "sourceSnippet": "The as attribute is required for preload so the browser can set the correct request destination.",
   "source2": "HTML spec — Link type preload",
   "source2Url": "https://html.spec.whatwg.org/multipage/links.html#link-type-preload",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set the as and type Attributes on Preload",
   "desc": "How to set as and type on rel=preload in a Clincoo project so the browser uses that download instead of ignoring it or fetching again.",
   "content": "<p class=\"mb-4\">rel=preload without as is often ignored. The download destination must match how the asset is used. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> check every preload in the head before you save the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match as to the use</h2><p class=\"mb-4\">CSS uses as=style. A hero image uses as=image. A classic script uses as=script. An ES module is better as modulepreload, not preload as=script. A font uses as=font and needs crossorigin.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add type when the format is specific</h2><p class=\"mb-4\">type=font/woff2 or type=image/avif lets the browser skip the hint when the format is unsupported. That avoids a download the page will not use. Do not set a type that does not match the file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Look for a double download</h2><p class=\"mb-4\">In the Network panel the same URL should not appear twice with different priorities. Note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> a preload that still triggers a second request. Fix as, or remove the hint if the element already loads that asset earlier.</p>",
   "source": "MDN — rel=preload",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload",
   "sourceSnippet": "The as attribute is required for preload so the browser can set the correct request destination.",
   "source2": "HTML spec — Link type preload",
   "source2Url": "https://html.spec.whatwg.org/multipage/links.html#link-type-preload",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "prefetch-crossorigin-saat-preload-font",
 "langs": {
  "id": {
   "title": "Cara Tambah crossorigin saat Preload Font",
   "desc": "Tata cara menambahkan crossorigin pada preload font di proyek Clincoo agar berkas font tidak diunduh dua kali.",
   "content": "<p class=\"mb-4\">Font hampir selalu diminta dalam mode CORS, meski berkasnya satu asal. Preload tanpa crossorigin tidak cocok dengan permintaan CSS, jadi browser mengunduh font lagi. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> samakan kedua permintaan sebelum pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Atribut yang harus ada</h2><p class=\"mb-4\">Gunakan rel=preload, as=font, type=font/woff2, dan crossorigin. Nilai anonymous sudah cukup untuk font. Href harus persis sama dengan url() di @font-face, termasuk query string.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan preload seluruh keluarga</h2><p class=\"mb-4\">Preload hanya potongan yang dipakai di atas lipatan, biasanya satu berat dan satu gaya. Berat lain boleh tetap di CSS. Preload empat berkas font memperlambat aset yang benar-benar kritis.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca kolom Initiator</h2><p class=\"mb-4\">Di panel Network filter Font. Satu URL harus satu baris. Jika ada dua, bandingkan mode CORS-nya. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> href yang tidak sama persis, lalu perbaiki sebelum publish.</p>",
   "source": "MDN — rel=preload",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload",
   "sourceSnippet": "Font preloads need crossorigin so the request matches the CORS mode used by @font-face.",
   "source2": "web.dev — Preload critical assets",
   "source2Url": "https://web.dev/articles/preload-critical-assets",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Add crossorigin When Preloading a Font",
   "desc": "How to add crossorigin on a font preload in a Clincoo project so the font file is not downloaded twice.",
   "content": "<p class=\"mb-4\">A font is almost always requested in CORS mode, even when the file is same-origin. A preload without crossorigin does not match the CSS request, so the browser downloads the font again. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> make both requests match before the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Attributes that must be present</h2><p class=\"mb-4\">Use rel=preload, as=font, type=font/woff2, and crossorigin. anonymous is enough for a font. The href must be exactly the url() in @font-face, including the query string.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not preload the whole family</h2><p class=\"mb-4\">Preload only the cut used above the fold, usually one weight and one style. Other weights can stay in CSS. Preloading four font files slows the assets that are actually critical.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the Initiator column</h2><p class=\"mb-4\">In the Network panel filter to Font. One URL should be one row. If there are two, compare the CORS mode. Note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> an href that is not an exact match, then fix it before publish.</p>",
   "source": "MDN — rel=preload",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload",
   "sourceSnippet": "Font preloads need crossorigin so the request matches the CORS mode used by @font-face.",
   "source2": "web.dev — Preload critical assets",
   "source2Url": "https://web.dev/articles/preload-critical-assets",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "prefetch-jangan-hint-semua-rute",
 "langs": {
  "id": {
   "title": "Cara Batasi Prefetch agar Tidak Menarik Semua Rute",
   "desc": "Tata cara membatasi prefetch ke satu atau dua rute berikutnya di proyek Clincoo, bukan memasang hint untuk setiap tautan di navigasi.",
   "content": "<p class=\"mb-4\">Prefetch prioritasnya rendah, tetapi daftar yang panjang tetap berebut bandwidth dengan gambar dan skrip halaman ini. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih rute yang pengunjung hampir pasti buka, lalu cek pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> di koneksi lambat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih dari alur, bukan dari menu</h2><p class=\"mb-4\">Prefetch langkah berikutnya di wizard, atau satu artikel terkait. Jangan loop semua href di header. Rute yang jarang diklik lebih baik dimuat saat diklik daripada diprefetch untuk semua orang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hormati data saver dan viewport</h2><p class=\"mb-4\">Jika navigator.connection.saveData benar, jangan sisipkan prefetch. Untuk daftar, prefetch hanya tautan yang terlihat, bukan yang di bawah lipatan. Batasi juga ukuran: jangan prefetch bundel yang lebih besar dari halaman saat ini.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur sebelum menambah</h2><p class=\"mb-4\">Throttling Slow 3G, lalu hitung permintaan yang selesai sebelum klik. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> rute yang diunduh tetapi tidak dibuka. Hapus hint itu. Satu prefetch yang tepat lebih berguna daripada menu yang diprefetch seluruhnya.</p>",
   "source": "MDN — rel=prefetch",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/prefetch",
   "sourceSnippet": "prefetch is a low-priority hint for a resource the user might need on the next navigation.",
   "source2": "web.dev — Prefetch resources",
   "source2Url": "https://web.dev/articles/link-prefetch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit Prefetch So It Does Not Pull Every Route",
   "desc": "How to limit prefetch to one or two next routes in a Clincoo project, instead of hinting every link in the navigation.",
   "content": "<p class=\"mb-4\">Prefetch is low priority, but a long list still competes with this page's images and scripts. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pick the route a visitor is very likely to open, then check the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview on a slow connection.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pick from the flow, not the menu</h2><p class=\"mb-4\">Prefetch the next step in a wizard, or one related article. Do not loop every href in the header. A rarely clicked route is better loaded on click than prefetched for everyone.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Respect data saver and the viewport</h2><p class=\"mb-4\">If navigator.connection.saveData is true, do not inject prefetch. For a list, prefetch only a link that is visible, not one below the fold. Also cap size: do not prefetch a bundle larger than the current page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure before you add more</h2><p class=\"mb-4\">Throttle to Slow 3G, then count requests that finish before a click. Note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> a route that was downloaded but never opened. Remove that hint. One accurate prefetch is more useful than prefetching the whole menu.</p>",
   "source": "MDN — rel=prefetch",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/prefetch",
   "sourceSnippet": "prefetch is a low-priority hint for a resource the user might need on the next navigation.",
   "source2": "web.dev — Prefetch resources",
   "source2Url": "https://web.dev/articles/link-prefetch",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};
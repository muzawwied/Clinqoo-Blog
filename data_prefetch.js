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
 ]
};

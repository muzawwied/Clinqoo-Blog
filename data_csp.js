// Clincoo Docs — kategori CSP (Oktober 2026)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["csp"] = {
 "names": {
  "id": "CSP",
  "en": "CSP"
 },
 "articles": [
{
 "id": "csp-pilih-header-bukan-hanya-meta",
 "langs": {
  "id": {
   "title": "Cara Pasang CSP lewat Header, bukan Hanya Meta",
   "desc": "Tata cara menaruh Content-Security-Policy di header respons situs Clincoo supaya kebijakan berlaku sebelum HTML diurai.",
   "content": "<p class=\"mb-4\">Tag meta CSP baru dibaca setelah parser sampai ke head. Header respons berlaku lebih awal dan bisa memblokir skrip yang disisipkan sebelum meta. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan kebijakan di konfigurasi deploy, lalu cek header di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mulai dari Report-Only</h2><p class=\"mb-4\">Pakai Content-Security-Policy-Report-Only dulu. Pelanggaran tercatat tanpa mematahkan halaman yang sedang dipakai pengunjung.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan meta untuk frame-ancestors</h2><p class=\"mb-4\">Beberapa arahan, termasuk frame-ancestors, diabaikan di meta. Kalau tujuanmu mencegah situs disematkan, header wajib.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat kebijakan di dokumentasi</h2><p class=\"mb-4\">Salin kebijakan yang lolos uji ke <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya anggota tim tidak menimpa header saat deploy berikutnya.</p>",
   "source": "MDN — Content-Security-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
   "sourceSnippet": "CSP is designed to be fully backward compatible. Browsers that don't support it still work with servers that implement it, and vice versa.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set CSP with a Response Header, Not Only a Meta Tag",
   "desc": "How to put Content-Security-Policy on the Clincoo site response header so the policy applies before HTML is parsed.",
   "content": "<p class=\"mb-4\">A CSP meta tag is read only after the parser reaches the head. A response header applies earlier and can block a script injected before the meta tag. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store the policy in the deploy config, then check the header in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Start with Report-Only</h2><p class=\"mb-4\">Use Content-Security-Policy-Report-Only first. Violations are recorded without breaking a page visitors already use.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on meta for frame-ancestors</h2><p class=\"mb-4\">Some directives, including frame-ancestors, are ignored in a meta tag. If the goal is to stop the site from being embedded, the header is required.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write the policy in the docs</h2><p class=\"mb-4\">Copy the policy that passed testing to <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so teammates do not overwrite the header on the next deploy.</p>",
   "source": "MDN — Content-Security-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
   "sourceSnippet": "CSP is designed to be fully backward compatible. Browsers that don't support it still work with servers that implement it, and vice versa.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "csp-script-src-tanpa-unsafe-inline",
 "langs": {
  "id": {
   "title": "Cara Tulis script-src tanpa unsafe-inline",
   "desc": "Tata cara mengizinkan skrip situs Clincoo lewat nonce atau hash, bukan unsafe-inline yang membuka celah injeksi.",
   "content": "<p class=\"mb-4\">unsafe-inline membuat kebijakan hampir tidak memblokir skrip yang disisipkan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pindahkan skrip inline ke berkas eksternal, atau beri nonce acak per respons.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nonce harus baru tiap respons</h2><p class=\"mb-4\">Nonce yang sama di semua halaman bisa ditebak. Hasilkan nilai acak di server, lalu pasang di header dan atribut nonce skrip yang sah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hash untuk cuplikan yang tetap</h2><p class=\"mb-4\">Kalau skrip tidak berubah, hash SHA-256 cuplikan boleh masuk script-src. Ubah satu spasi, hash harus dihitung ulang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di konsol pratinjau</h2><p class=\"mb-4\">Buka <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, picu aksi yang memakai skrip, lalu baca pelanggaran CSP di konsol. Contoh kebijakan yang aman dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — script-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src",
   "sourceSnippet": "The script-src directive specifies valid sources for JavaScript. This includes not only URLs loaded directly into script elements, but also things like inline script event handlers and XSLT stylesheets.",
   "source2": "web.dev — Content Security Policy",
   "source2Url": "https://web.dev/articles/csp",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Write script-src without unsafe-inline",
   "desc": "How to allow Clincoo site scripts with a nonce or hash instead of unsafe-inline, which leaves an injection gap.",
   "content": "<p class=\"mb-4\">unsafe-inline makes the policy almost unable to block injected scripts. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> move inline scripts to an external file, or give a random nonce per response.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">The nonce must be new on each response</h2><p class=\"mb-4\">A nonce reused on every page can be guessed. Generate a random value on the server, then put it in the header and on the nonce attribute of allowed scripts.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A hash for a snippet that stays fixed</h2><p class=\"mb-4\">If a script never changes, a SHA-256 hash of the snippet may go in script-src. Change one space and the hash must be recalculated.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in the preview console</h2><p class=\"mb-4\">Open <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, trigger an action that uses a script, then read CSP violations in the console. A safer sample policy is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — script-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src",
   "sourceSnippet": "The script-src directive specifies valid sources for JavaScript. This includes not only URLs loaded directly into script elements, but also things like inline script event handlers and XSLT stylesheets.",
   "source2": "web.dev — Content Security Policy",
   "source2Url": "https://web.dev/articles/csp",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "csp-img-src-batasi-asal-gambar",
 "langs": {
  "id": {
   "title": "Cara Batasi img-src ke Asal Gambar yang Dipakai",
   "desc": "Tata cara mengizinkan gambar Clincoo hanya dari domain sendiri dan CDN yang memang dipakai, bukan bintang untuk semua host.",
   "content": "<p class=\"mb-4\">img-src * mengizinkan pelacak memuat piksel dari host mana pun. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> daftar host gambar yang benar: diri sendiri, CDN, dan avatar yang dipakai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sertakan data hanya jika perlu</h2><p class=\"mb-4\">Gambar SVG inline atau placeholder base64 butuh skema data:. Jangan menambahkannya kalau semua gambar sudah berkas biasa.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek gambar rusak setelah kebijakan ketat</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir halaman yang memuat logo, og image, dan ikon. Gambar yang hilang biasanya host yang belum masuk img-src.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan dengan daftar unggah</h2><p class=\"mb-4\">Kalau pengguna mengunggah ke bucket lain, host bucket harus masuk kebijakan sebelum fitur itu tayang. Catatan host ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — img-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src",
   "sourceSnippet": "The img-src directive specifies valid sources of images and favicons.",
   "source2": "MDN — CSP source lists",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit img-src to Origins You Actually Use",
   "desc": "How to allow Clincoo images only from your own domain and the CDN you really use, not a star for every host.",
   "content": "<p class=\"mb-4\">img-src * lets a tracker load a pixel from any host. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> list the real image hosts: yourself, the CDN, and the avatar host you use.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include data only if you need it</h2><p class=\"mb-4\">An inline SVG or a base64 placeholder needs the data: scheme. Do not add it if every image is already a normal file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check broken images after a strict policy</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll a page that loads the logo, the og image, and icons. A missing image is usually a host not yet in img-src.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the upload list</h2><p class=\"mb-4\">If users upload to another bucket, that bucket host must be in the policy before the feature ships. The host list lives on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — img-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src",
   "sourceSnippet": "The img-src directive specifies valid sources of images and favicons.",
   "source2": "MDN — CSP source lists",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "csp-frame-ancestors-cegah-clickjacking",
 "langs": {
  "id": {
   "title": "Cara Pakai frame-ancestors untuk Cegah Clickjacking",
   "desc": "Tata cara membatasi siapa yang boleh menyematkan halaman Clincoo di iframe supaya klik tidak dibajak lapisan transparan.",
   "content": "<p class=\"mb-4\">Halaman login yang bisa disematkan di situs lain rentan clickjacking. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set frame-ancestors 'none' untuk halaman akun, atau 'self' kalau pratinjau internal memang membingkainya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan campur dengan X-Frame-Options yang bertentangan</h2><p class=\"mb-4\">Browser modern mengutamakan frame-ancestors. Header lama DENY boleh tetap sebagai cadangan, asal artinya sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji sematan dari origin lain</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buat halaman uji yang membingkai URL produksi. Bingkai harus kosong dan konsol menyebut pelanggaran frame-ancestors.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kecualikan hanya host yang sah</h2><p class=\"mb-4\">Kalau widget Clincoo memang disematkan mitra, tulis host mitra secara eksplisit. Jangan pakai bintang. Pola ini dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — frame-ancestors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors",
   "sourceSnippet": "The frame-ancestors directive specifies valid parents that may embed a page using frame, iframe, object, or embed.",
   "source2": "OWASP — Clickjacking",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use frame-ancestors to Prevent Clickjacking",
   "desc": "How to limit who may embed a Clincoo page in an iframe so clicks are not hijacked by a transparent layer.",
   "content": "<p class=\"mb-4\">A login page that can be embedded on another site is open to clickjacking. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set frame-ancestors 'none' for account pages, or 'self' if an internal preview really frames them.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not mix in a conflicting X-Frame-Options</h2><p class=\"mb-4\">Modern browsers prefer frame-ancestors. An old DENY header may stay as a fallback if it means the same thing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test an embed from another origin</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> build a test page that frames the production URL. The frame should be empty and the console should name a frame-ancestors violation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Except only a real host</h2><p class=\"mb-4\">If a Clincoo widget is meant to be embedded by a partner, write that partner host explicitly. Do not use a star. This pattern is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — frame-ancestors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors",
   "sourceSnippet": "The frame-ancestors directive specifies valid parents that may embed a page using frame, iframe, object, or embed.",
   "source2": "OWASP — Clickjacking",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "csp-report-to-untuk-pelanggaran",
 "langs": {
  "id": {
   "title": "Cara Kirim Laporan Pelanggaran CSP dengan report-to",
   "desc": "Tata cara memasang report-to di kebijakan Clincoo supaya pelanggaran skrip dan gambar masuk laporan, bukan hilang di konsol pengunjung.",
   "content": "<p class=\"mb-4\">Tanpa laporan, kebijakan ketat hanya kelihatan saat kamu sendiri membuka konsol. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan report-to dan endpoint yang menerima JSON pelanggaran.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan laporan dari pemblokiran</h2><p class=\"mb-4\">Saat kebijakan masih diuji, pakai Report-Only plus report-to. Setelah daftar pelanggaran sepi, pindahkan arahan yang sama ke header yang memblokir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan catat data sensitif di URL</h2><p class=\"mb-4\">Laporan memuat URL dokumen dan sumber yang diblokir. Jangan taruh token di query string halaman yang dilindungi CSP.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tinjau laporan sebelum rilis</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> picu alur login, unggah, dan pratinjau. Bandingkan laporan dengan catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya host yang sah tidak ikut terblokir.</p>",
   "source": "MDN — Content-Security-Policy-Report-Only",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only",
   "sourceSnippet": "The HTTP Content-Security-Policy-Report-Only response header allows web developers to experiment with policies by monitoring (but not enforcing) their effects.",
   "source2": "MDN — report-to",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Send CSP Violation Reports with report-to",
   "desc": "How to add report-to on a Clincoo policy so script and image violations land in a report instead of vanishing in a visitor console.",
   "content": "<p class=\"mb-4\">Without reports, a strict policy only shows up when you open the console yourself. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add report-to and an endpoint that accepts violation JSON.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate reporting from blocking</h2><p class=\"mb-4\">While the policy is still under test, use Report-Only plus report-to. After the violation list goes quiet, move the same directives to the blocking header.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not put secrets in the URL</h2><p class=\"mb-4\">A report includes the document URL and the blocked source. Do not put a token in the query string of a page protected by CSP.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Review reports before release</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> trigger login, upload, and preview. Compare reports with the notes on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so a legitimate host is not blocked too.</p>",
   "source": "MDN — Content-Security-Policy-Report-Only",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only",
   "sourceSnippet": "The HTTP Content-Security-Policy-Report-Only response header allows web developers to experiment with policies by monitoring (but not enforcing) their effects.",
   "source2": "MDN — report-to",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "csp-style-src-tanpa-unsafe-inline",
 "langs": {
  "id": {
   "title": "Cara Tulis style-src tanpa unsafe-inline",
   "desc": "Tata cara mengizinkan CSS situs Clincoo lewat nonce atau hash, bukan unsafe-inline yang ikut mengizinkan style sisipan.",
   "content": "<p class=\"mb-4\">style-src 'unsafe-inline' mengizinkan atribut style dan tag style yang disisipkan. Itu cukup untuk menyembunyikan tombol atau menimpa tata letak. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan stylesheet di berkas terpisah, lalu izinkan hanya nonce atau hash di header deploy. Cek di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pindahkan style inline ke kelas</h2><p class=\"mb-4\">Ganti style=\"...\" pada elemen dengan kelas di berkas CSS. Parser tetap merender tampilan, tetapi kebijakan tidak perlu membuka inline.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nonce untuk style yang memang dinamis</h2><p class=\"mb-4\">Kalau satu blok style harus dibuat per respons, isi atribut nonce yang sama dengan nilai di header. Jangan pakai ulang nonce di respons berikutnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di Report-Only dulu</h2><p class=\"mb-4\">Catat pelanggaran style-src sebelum mengunci kebijakan. Salin arahan yang lolos ke <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya deploy berikutnya tidak mengembalikan unsafe-inline.</p>",
   "source": "MDN — style-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) style-src directive specifies valid sources for stylesheets.",
   "source2": "MDN — Content-Security-Policy",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Write style-src without unsafe-inline",
   "desc": "How to allow Clincoo site CSS with a nonce or hash, not unsafe-inline that also allows injected styles.",
   "content": "<p class=\"mb-4\">style-src 'unsafe-inline' allows injected style attributes and style tags. That is enough to hide a button or override layout. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep stylesheets in separate files, then allow only a nonce or hash in the deploy header. Check the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Move inline styles to classes</h2><p class=\"mb-4\">Replace style=\"...\" on elements with a class in the CSS file. The parser still renders the layout, but the policy does not need to open inline styles.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Nonce for styles that must be dynamic</h2><p class=\"mb-4\">If one style block must be built per response, set a nonce attribute that matches the header value. Do not reuse that nonce on the next response.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in Report-Only first</h2><p class=\"mb-4\">Record style-src violations before locking the policy. Copy the directive that passes to <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next deploy does not put unsafe-inline back.</p>",
   "source": "MDN — style-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) style-src directive specifies valid sources for stylesheets.",
   "source2": "MDN — Content-Security-Policy",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "csp-connect-src-batasi-fetch",
 "langs": {
  "id": {
   "title": "Cara Batasi connect-src untuk fetch dan API",
   "desc": "Tata cara mengizinkan fetch Clincoo hanya ke origin API yang dipakai, supaya skrip sisipan tidak mengirim data ke host lain.",
   "content": "<p class=\"mb-4\">connect-src mengatur tujuan fetch, XHR, WebSocket, dan EventSource. Bintang di sini berarti skrip yang lolos bisa mengirim isi formulir ke mana saja. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> daftarkan origin API yang memang dipanggil, lalu cek permintaan jaringan di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sertakan skema dan port</h2><p class=\"mb-4\">https://api.contoh tidak otomatis mengizinkan ws:// atau port lain. Tulis tiap skema yang benar-benar dipakai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan default-src saja</h2><p class=\"mb-4\">default-src memang menjadi cadangan connect-src, tetapi arahan eksplisit lebih mudah diaudit saat origin baru ditambah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat origin di dokumentasi</h2><p class=\"mb-4\">Simpan daftar origin yang diizinkan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya penambahan endpoint tidak lupa memperbarui header.</p>",
   "source": "MDN — connect-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) connect-src directive restricts the URLs which can be loaded using script interfaces.",
   "source2": "MDN — Content-Security-Policy",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit connect-src for fetch and APIs",
   "desc": "How to allow Clincoo fetch only to the API origins you use, so an injected script cannot send data to another host.",
   "content": "<p class=\"mb-4\">connect-src controls fetch, XHR, WebSocket, and EventSource targets. A wildcard here means a script that gets through can send form contents anywhere. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> list the API origins you actually call, then check network requests in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include scheme and port</h2><p class=\"mb-4\">https://api.example does not automatically allow ws:// or another port. Write each scheme you really use.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on default-src alone</h2><p class=\"mb-4\">default-src is the fallback for connect-src, but an explicit directive is easier to audit when a new origin is added.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record origins in the docs</h2><p class=\"mb-4\">Keep the allowed origin list on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so a new endpoint does not ship without a header update.</p>",
   "source": "MDN — connect-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) connect-src directive restricts the URLs which can be loaded using script interfaces.",
   "source2": "MDN — Content-Security-Policy",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "csp-object-src-none",
 "langs": {
  "id": {
   "title": "Cara Pasang object-src none",
   "desc": "Tata cara mematikan plugin object dan embed di halaman Clincoo supaya sumber lama tidak menjadi celah muat skrip.",
   "content": "<p class=\"mb-4\">Elemen object dan embed bisa memuat konten plugin yang tidak lewat script-src. Kalau halaman Clincoo tidak memakai plugin, object-src 'none' menutup jalur itu. Simpan arahan di konfigurasi deploy <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, lalu buka pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan pastikan tidak ada elemen object yang rusak.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti plugin dengan gambar atau video</h2><p class=\"mb-4\">PDF dan media yang masih di-embed lebih aman dimuat lewat img, video, atau tautan unduh yang sudah dibatasi img-src dan media-src.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan tertukar dengan frame-src</h2><p class=\"mb-4\">iframe diatur frame-src atau frame-ancestors, bukan object-src. Tutup object tidak otomatis menutup iframe.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat pengecualian</h2><p class=\"mb-4\">Kalau satu halaman masih butuh object, tulis alasannya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum membuka origin. Jangan longgarkan seluruh situs.</p>",
   "source": "MDN — object-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/object-src",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) object-src directive specifies valid sources for the <object> and <embed> elements.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set object-src to none",
   "desc": "How to disable object and embed plugins on Clincoo pages so legacy sources cannot become a script-loading gap.",
   "content": "<p class=\"mb-4\">object and embed can load plugin content that does not pass through script-src. If a Clincoo page does not use plugins, object-src 'none' closes that path. Store the directive in the <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> deploy config, then open the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview and confirm no object element breaks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace plugins with images or video</h2><p class=\"mb-4\">PDFs and media still embedded are safer as img, video, or a download link already limited by img-src and media-src.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not confuse it with frame-src</h2><p class=\"mb-4\">iframes are controlled by frame-src or frame-ancestors, not object-src. Closing object does not automatically close iframes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record exceptions</h2><p class=\"mb-4\">If one page still needs object, write the reason on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before opening an origin. Do not loosen the whole site.</p>",
   "source": "MDN — object-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/object-src",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) object-src directive specifies valid sources for the <object> and <embed> elements.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "csp-base-uri-cegah-base-tag",
 "langs": {
  "id": {
   "title": "Cara Pakai base-uri supaya tag base tidak dibajak",
   "desc": "Tata cara membatasi tag base di halaman Clincoo supaya tautan relatif tidak diarahkan ke host lain.",
   "content": "<p class=\"mb-4\">Tag base mengubah tujuan semua URL relatif. Skrip yang menyisipkan base ke host lain bisa mengalihkan formulir dan aset tanpa menyentuh tiap tautan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> setel base-uri 'self' atau 'none' pada header deploy, lalu cek pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih none jika base tidak dipakai</h2><p class=\"mb-4\">Halaman yang tidak punya tag base lebih aman dengan base-uri 'none'. 'self' hanya jika base ke origin sendiri memang diperlukan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ini bukan pengganti script-src</h2><p class=\"mb-4\">base-uri tidak memblokir skrip. Pasangkan dengan script-src yang sudah membatasi nonce atau hash.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Dokumentasikan pilihan</h2><p class=\"mb-4\">Tulis arahan final di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar perubahan template tidak menambah tag base diam-diam.</p>",
   "source": "MDN — base-uri",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/base-uri",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) base-uri directive restricts the URLs which can be used in a document's <base> element.",
   "source2": "MDN — Content-Security-Policy",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use base-uri so a base Tag Cannot Be Hijacked",
   "desc": "How to restrict the base tag on Clincoo pages so relative links cannot be pointed at another host.",
   "content": "<p class=\"mb-4\">A base tag changes the target of every relative URL. A script that injects a base pointing at another host can redirect forms and assets without touching each link. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set base-uri 'self' or 'none' on the deploy header, then check the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Prefer none if base is unused</h2><p class=\"mb-4\">A page with no base tag is safer with base-uri 'none'. Use 'self' only if a base to your own origin is required.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">This does not replace script-src</h2><p class=\"mb-4\">base-uri does not block scripts. Pair it with a script-src that already limits nonces or hashes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Document the choice</h2><p class=\"mb-4\">Write the final directive on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so a template change does not add a base tag unnoticed.</p>",
   "source": "MDN — base-uri",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/base-uri",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) base-uri directive restricts the URLs which can be used in a document's <base> element.",
   "source2": "MDN — Content-Security-Policy",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "csp-form-action-batasi-tujuan-kirim",
 "langs": {
  "id": {
   "title": "Cara Batasi form-action pada tujuan kirim formulir",
   "desc": "Tata cara membatasi action formulir Clincoo supaya isian tidak terkirim ke origin di luar daftar yang disetujui.",
   "content": "<p class=\"mb-4\">form-action mengatur ke mana formulir boleh dikirim. script-src tidak menutup celah ini: halaman yang aman skripnya tetap bisa punya action ke host lain. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> izinkan hanya origin penerima yang dipakai, lalu uji kirim di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sertakan path hanya jika perlu</h2><p class=\"mb-4\">Origin saja biasanya cukup. Path di form-action mudah usang saat rute berubah. Perbarui kebijakan bersama rute, bukan setelah laporan pengguna.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan tertukar dengan navigate-to</h2><p class=\"mb-4\">form-action khusus pengiriman formulir. Navigasi tautan biasa diatur arahan lain. Jangan mengendurkan form-action hanya karena tautan internal gagal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan daftar penerima</h2><p class=\"mb-4\">Catat origin form-action di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya integrasi baru tidak mengirim isian sebelum header diperbarui.</p>",
   "source": "MDN — form-action",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/form-action",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) form-action directive restricts the URLs which can be used as the target of form submissions from a given context.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit form-action to Real Form Targets",
   "desc": "How to restrict Clincoo form actions so submissions cannot go to an origin outside the approved list.",
   "content": "<p class=\"mb-4\">form-action controls where a form may be submitted. script-src does not close this gap: a page with a locked script policy can still have an action pointing at another host. On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> allow only the receiver origins you use, then test a submit in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include a path only if you must</h2><p class=\"mb-4\">An origin is usually enough. A path in form-action goes stale when routes change. Update the policy with the route, not after a user report.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not confuse it with navigate-to</h2><p class=\"mb-4\">form-action is specifically for form submissions. Ordinary link navigation uses other directives. Do not loosen form-action just because an internal link failed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the receiver list</h2><p class=\"mb-4\">Record form-action origins on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so a new integration does not send fields before the header is updated.</p>",
   "source": "MDN — form-action",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/form-action",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) form-action directive restricts the URLs which can be used as the target of form submissions from a given context.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "csp-upgrade-insecure-requests",
 "langs": {
  "id": {
   "title": "Cara Pakai upgrade-insecure-requests",
   "desc": "Tata cara memaksa subresource HTTP di halaman Clincoo naik ke HTTPS supaya campuran protokol tidak memecah pratinjau.",
   "content": "<p class=\"mb-4\">upgrade-insecure-requests meminta browser menulis ulang URL HTTP menjadi HTTPS sebelum dimuat. Ini menutup peringatan mixed content tanpa mengubah setiap tag satu per satu. Simpan arahan di konfigurasi deploy <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, lalu buka pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan pastikan gambar serta skrip tetap tampil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan anggap ini pengganti script-src</h2><p class=\"mb-4\">Arahan ini hanya menaikkan skema. Host yang boleh memuat skrip tetap diatur script-src. Keduanya dipakai bersama, bukan saling mengganti.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Perbaiki sumber yang tidak punya HTTPS</h2><p class=\"mb-4\">Kalau aset pihak ketiga tidak melayani HTTPS, naikkan skema akan gagal memuat. Ganti sumber atau host sendiri, jangan cabut arahan hanya agar aset lama muncul.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat aset yang masih HTTP</h2><p class=\"mb-4\">Daftar sisa URL HTTP di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum deploy, supaya tim tahu mana yang sengaja dinaikkan dan mana yang harus diganti.</p>",
   "source": "MDN — upgrade-insecure-requests",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) upgrade-insecure-requests directive instructs user agents to treat all of a site's insecure URLs as though they have been replaced with secure URLs.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/#upgrade-insecure-requests",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use upgrade-insecure-requests",
   "desc": "How to upgrade HTTP subresources on Clincoo pages to HTTPS so mixed content does not break the preview.",
   "content": "<p class=\"mb-4\">upgrade-insecure-requests asks the browser to rewrite HTTP URLs to HTTPS before they load. That clears mixed-content warnings without editing every tag. Store the directive in the <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> deploy config, then open the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview and confirm images and scripts still appear.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not treat it as a script-src replacement</h2><p class=\"mb-4\">This directive only upgrades the scheme. Hosts allowed to load scripts are still set by script-src. Use both together, not as substitutes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Fix sources that have no HTTPS</h2><p class=\"mb-4\">If a third-party asset does not serve HTTPS, the upgrade fails to load it. Replace the source or host it yourself. Do not drop the directive just so an old asset appears.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record remaining HTTP assets</h2><p class=\"mb-4\">List leftover HTTP URLs on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before deploy so the team knows which ones are upgraded on purpose and which ones must be replaced.</p>",
   "source": "MDN — upgrade-insecure-requests",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) upgrade-insecure-requests directive instructs user agents to treat all of a site's insecure URLs as though they have been replaced with secure URLs.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/#upgrade-insecure-requests",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "csp-worker-src-batasi-service-worker",
 "langs": {
  "id": {
   "title": "Cara Batasi worker-src pada service worker",
   "desc": "Tata cara membatasi asal service worker dan worker Clincoo supaya skrip latar tidak didaftarkan dari host lain.",
   "content": "<p class=\"mb-4\">worker-src mengatur dari mana Worker, SharedWorker, dan service worker boleh dimuat. Tanpa arahan ini, browser bisa jatuh ke script-src atau child-src dan celahnya tidak terlihat. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> izinkan hanya origin sendiri, lalu cek pendaftaran worker di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sertakan blob hanya jika perlu</h2><p class=\"mb-4\">Worker dari string sering butuh blob:. Tambahkan skema itu hanya pada halaman yang benar-benar membuat worker di memori, bukan di seluruh situs.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan andalkan script-src saja</h2><p class=\"mb-4\">script-src tidak selalu menutup navigator.serviceWorker.register. Sebut worker-src secara eksplisit supaya laporan pelanggaran menyebut arahan yang tepat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji ulang setelah ganti path</h2><p class=\"mb-4\">Catat path worker di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Path yang pindah membuat registrasi gagal diam-diam kalau kebijakan masih menunjuk file lama.</p>",
   "source": "MDN — worker-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) worker-src directive specifies valid sources for Worker, SharedWorker, or ServiceWorker scripts.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/#directive-worker-src",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit worker-src for Service Workers",
   "desc": "How to restrict Clincoo service worker and worker origins so background scripts are not registered from another host.",
   "content": "<p class=\"mb-4\">worker-src controls where Worker, SharedWorker, and service worker scripts may load. Without it, the browser may fall back to script-src or child-src and the gap stays invisible. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> allow only your own origin, then check worker registration in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include blob only if needed</h2><p class=\"mb-4\">Workers built from strings often need blob:. Add that scheme only on pages that really create an in-memory worker, not site-wide.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not rely on script-src alone</h2><p class=\"mb-4\">script-src does not always cover navigator.serviceWorker.register. Name worker-src explicitly so violation reports cite the right directive.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Retest after a path change</h2><p class=\"mb-4\">Record the worker path on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. A moved path fails registration quietly if the policy still points at the old file.</p>",
   "source": "MDN — worker-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) worker-src directive specifies valid sources for Worker, SharedWorker, or ServiceWorker scripts.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/#directive-worker-src",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "csp-media-src-batasi-audio-video",
 "langs": {
  "id": {
   "title": "Cara Batasi media-src pada audio dan video",
   "desc": "Tata cara membatasi asal audio dan video Clincoo supaya media tidak ditarik dari host yang tidak disetujui.",
   "content": "<p class=\"mb-4\">media-src membatasi URL yang boleh dipakai elemen audio dan video. img-src tidak menutup media ini. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> daftarkan CDN video yang dipakai, lalu putar sampel di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan dari img-src</h2><p class=\"mb-4\">Gambar poster boleh lebih longgar daripada file video. Jangan menyalin daftar img-src mentah ke media-src kalau host gambar tidak menyajikan media.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sertakan skema blob untuk rekaman</h2><p class=\"mb-4\">Pratinjau rekaman lokal sering memakai blob:. Tambahkan skema itu hanya pada halaman yang memutar hasil MediaRecorder.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat CDN media</h2><p class=\"mb-4\">Simpan host media-src di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya ganti penyedia video tidak memecah pemutaran di produksi.</p>",
   "source": "MDN — media-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/media-src",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) media-src directive specifies valid sources for loading media using the audio and video elements.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/#directive-media-src",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit media-src for Audio and Video",
   "desc": "How to restrict Clincoo audio and video origins so media is not pulled from an unapproved host.",
   "content": "<p class=\"mb-4\">media-src limits URLs allowed on audio and video elements. img-src does not cover this media. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> list the video CDN you use, then play a sample in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep it separate from img-src</h2><p class=\"mb-4\">Poster images can be looser than video files. Do not copy the img-src list into media-src if image hosts do not serve media.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include the blob scheme for recordings</h2><p class=\"mb-4\">Local recording previews often use blob:. Add that scheme only on pages that play a MediaRecorder result.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record the media CDN</h2><p class=\"mb-4\">Save media-src hosts on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so a video-provider change does not break playback in production.</p>",
   "source": "MDN — media-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/media-src",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) media-src directive specifies valid sources for loading media using the audio and video elements.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/#directive-media-src",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "csp-manifest-src-batasi-webmanifest",
 "langs": {
  "id": {
   "title": "Cara Batasi manifest-src pada web app manifest",
   "desc": "Tata cara membatasi asal web app manifest Clincoo supaya nama dan ikon instalasi tidak diambil dari host lain.",
   "content": "<p class=\"mb-4\">manifest-src mengatur file manifest yang boleh dipasang lewat link rel manifest. Manifest asing bisa menimpa nama dan ikon saat halaman diinstal. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> izinkan hanya origin situs, lalu cek link manifest di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan jatuhkan ke default</h2><p class=\"mb-4\">Tanpa manifest-src, browser memakai default-src. Sebut arahan ini eksplisit supaya laporan pelanggaran mudah dibaca.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Samakan dengan file yang di-deploy</h2><p class=\"mb-4\">Path manifest harus sama dengan file yang benar-benar diunggah. Path lama membuat instalasi gagal meski header sudah benar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat ikon yang dirujuk</h2><p class=\"mb-4\">Ikon di dalam manifest masih tunduk pada img-src. Catat kedua arahan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya ikon instalasi tidak pecah.</p>",
   "source": "MDN — manifest-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/manifest-src",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) manifest-src directive specifies which manifest can be applied to the resource.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/#directive-manifest-src",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit manifest-src for the Web App Manifest",
   "desc": "How to restrict the Clincoo web app manifest origin so install name and icons are not taken from another host.",
   "content": "<p class=\"mb-4\">manifest-src controls the manifest file allowed via link rel manifest. A foreign manifest can overwrite the install name and icons. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> allow only the site origin, then check the manifest link in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not leave it to the default</h2><p class=\"mb-4\">Without manifest-src, the browser uses default-src. Name this directive explicitly so violation reports stay readable.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the deployed file</h2><p class=\"mb-4\">The manifest path must match the file that is actually uploaded. An old path makes install fail even when the header is correct.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record referenced icons</h2><p class=\"mb-4\">Icons inside the manifest still follow img-src. Note both directives on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the install icon does not break.</p>",
   "source": "MDN — manifest-src",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/manifest-src",
   "sourceSnippet": "The HTTP Content-Security-Policy (CSP) manifest-src directive specifies which manifest can be applied to the resource.",
   "source2": "W3C — Content Security Policy Level 3",
   "source2Url": "https://www.w3.org/TR/CSP3/#directive-manifest-src",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
 ]
};

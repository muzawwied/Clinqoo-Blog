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
}
 ]
};

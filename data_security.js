// Clincoo Docs — kategori Security (10 Oktober 2026, 19:00 WIB) — 6 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["security"] = {
 "names": { "id": "Security", "en": "Security" },
 "articles": [
{
 "id": "security-hindari-xss-di-input-form",
 "langs": {
  "id": {
   "title": "Cara Hindari XSS di Input Form Clincoo",
   "desc": "Tata cara membersihkan input pengguna sebelum ditampilkan agar tidak mengeksekusi skrip.",
   "content": "<p class=\"mb-4\">Input form yang ditampilkan ulang tanpa sanitasi bisa menjalankan skrip orang lain di halaman Clincoo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Escape sebelum render</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan masukkan nilai form langsung ke innerHTML. Pakai textContent atau library escape. Tolak karakter < > jika tidak perlu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan payload sederhana</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> masukkan <script>alert(1)</script> dan pastikan tampil sebagai teks. Catat hasil di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — XSS",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS",
   "sourceSnippet": "Cross-site scripting (XSS) lets an attacker inject client-side scripts into web pages viewed by other users.",
   "source2": "OWASP — XSS Prevention",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid XSS in a Clincoo Form Input",
   "desc": "How to sanitize user input before display so it cannot execute a script.",
   "content": "<p class=\"mb-4\">Form input that is re-rendered without sanitization can run someone else's script on a Clincoo page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Escape before render</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not put form values straight into innerHTML. Use textContent or an escape helper. Reject < > characters if they are not needed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with a simple payload</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> enter <script>alert(1)</script> and confirm it appears as text. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — XSS",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS",
   "sourceSnippet": "Cross-site scripting (XSS) lets an attacker inject client-side scripts into web pages viewed by other users.",
   "source2": "OWASP — XSS Prevention",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-paksa-https-dan-hsts",
 "langs": {
  "id": {
   "title": "Cara Paksa HTTPS dan Aktifkan HSTS di Clincoo",
   "desc": "Tata cara memastikan semua traffic Clincoo lewat HTTPS dan header HSTS untuk mencegah downgrade.",
   "content": "<p class=\"mb-4\">Traffic HTTP bisa disadap atau diubah. Paksa HTTPS dan tambah HSTS agar browser menolak koneksi tidak aman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Redirect semua HTTP ke HTTPS</h2><p class=\"mb-4\">Di server atau Cloudflare, set redirect 301 dari http ke https. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan mengetik http:// dan pastikan berubah ke https.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambah header Strict-Transport-Security</h2><p class=\"mb-4\">Set header HSTS dengan max-age minimal 31536000 dan includeSubDomains. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> hasil tes di securityheaders.com.</p>",
   "source": "MDN — Strict-Transport-Security",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security",
   "sourceSnippet": "The Strict-Transport-Security response header informs browsers that the site should only be accessed using HTTPS.",
   "source2": "OWASP — HSTS",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Force HTTPS and Enable HSTS in Clincoo",
   "desc": "How to ensure all Clincoo traffic uses HTTPS and add the HSTS header to prevent downgrade attacks.",
   "content": "<p class=\"mb-4\">HTTP traffic can be intercepted or modified. Force HTTPS and add HSTS so browsers refuse insecure connections.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Redirect all HTTP to HTTPS</h2><p class=\"mb-4\">On the server or Cloudflare, set a 301 redirect from http to https. Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> by typing http:// and confirm it changes to https.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add the Strict-Transport-Security header</h2><p class=\"mb-4\">Set the HSTS header with max-age of at least 31536000 and includeSubDomains. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> after testing on securityheaders.com.</p>",
   "source": "MDN — Strict-Transport-Security",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security",
   "sourceSnippet": "The Strict-Transport-Security response header informs browsers that the site should only be accessed using HTTPS.",
   "source2": "OWASP — HSTS",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "security-hindari-eval-di-kode",
 "langs": {
  "id": {
   "title": "Cara Hindari eval dan new Function di Kode Clincoo",
   "desc": "Tata cara mengganti eval dengan cara yang lebih aman agar tidak membuka celah eksekusi kode dinamis.",
   "content": "<p class=\"mb-4\">eval() dan new Function() bisa mengeksekusi string dari pengguna atau sumber luar, yang berbahaya jika tidak dikontrol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti dengan JSON.parse atau fungsi eksplisit</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari semua eval. Untuk data, pakai JSON.parse. Untuk logika, tulis fungsi yang jelas. Hindari string yang dibangun dari input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Linter dan review</h2><p class=\"mb-4\">Pasang ESLint rule no-eval. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jalankan lint sebelum commit. Catat temuan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — eval",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval",
   "sourceSnippet": "The eval() function evaluates JavaScript code represented as a string.",
   "source2": "OWASP — Code Injection",
   "source2Url": "https://owasp.org/www-community/attacks/Code_Injection",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid eval and new Function in Clincoo Code",
   "desc": "How to replace eval with safer approaches so dynamic code execution is not opened.",
   "content": "<p class=\"mb-4\">eval() and new Function() can execute strings from users or external sources, which is dangerous if uncontrolled.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace with JSON.parse or explicit functions</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> search for all eval. For data use JSON.parse. For logic write clear functions. Avoid strings built from input.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Linter and review</h2><p class=\"mb-4\">Add the ESLint no-eval rule. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> run lint before commit. Record findings on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — eval",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval",
   "sourceSnippet": "The eval() function evaluates JavaScript code represented as a string.",
   "source2": "OWASP — Code Injection",
   "source2Url": "https://owasp.org/www-community/attacks/Code_Injection",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-atur-referrer-policy",
 "langs": {
  "id": {
   "title": "Cara Atur Referrer-Policy agar URL Sensitif Tidak Bocor",
   "desc": "Tata cara mengatur header Referrer-Policy di Clincoo untuk membatasi informasi yang dikirim ke situs lain.",
   "content": "<p class=\"mb-4\">Referrer default bisa mengirim path penuh termasuk query token ke domain eksternal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih policy yang ketat</h2><p class=\"mb-4\">Set Referrer-Policy: strict-origin-when-cross-origin atau no-referrer. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan di meta atau header server.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di DevTools</h2><p class=\"mb-4\">Buka Network di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, klik link eksternal, lihat header Referer. Pastikan tidak ada path lengkap. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Referrer-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy",
   "sourceSnippet": "The Referrer-Policy HTTP header controls how much referrer information should be included with requests.",
   "source2": "web.dev — Referrer best practices",
   "source2Url": "https://web.dev/articles/referrer-best-practices",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set Referrer-Policy So Sensitive URLs Do Not Leak",
   "desc": "How to configure the Referrer-Policy header in Clincoo to limit information sent to other sites.",
   "content": "<p class=\"mb-4\">The default referrer can send the full path including query tokens to external domains.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Choose a strict policy</h2><p class=\"mb-4\">Set Referrer-Policy: strict-origin-when-cross-origin or no-referrer. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add it in a meta tag or server header.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in DevTools</h2><p class=\"mb-4\">Open Network in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, click an external link, and inspect the Referer header. Confirm there is no full path. Record on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Referrer-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy",
   "sourceSnippet": "The Referrer-Policy HTTP header controls how much referrer information should be included with requests.",
   "source2": "web.dev — Referrer best practices",
   "source2Url": "https://web.dev/articles/referrer-best-practices",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "security-sanitasi-html-dengan-dompurify",
 "langs": {
  "id": {
   "title": "Cara Sanitasi HTML dengan DOMPurify di Clincoo",
   "desc": "Tata cara membersihkan HTML dari pengguna sebelum ditampilkan agar aman dari XSS.",
   "content": "<p class=\"mb-4\">Jika harus menampilkan HTML kaya dari pengguna, sanitasi wajib. DOMPurify menghapus tag dan atribut berbahaya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Integrasikan DOMPurify</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> import DOMPurify. Sebelum innerHTML, panggil DOMPurify.sanitize(userHtml). Izinkan hanya tag yang dibutuhkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji payload</h2><p class=\"mb-4\">Masukkan <img src=x onerror=alert(1)> di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Pastikan onerror hilang. Catat konfigurasi di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "DOMPurify GitHub",
   "sourceUrl": "https://github.com/cure53/DOMPurify",
   "sourceSnippet": "DOMPurify is a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.",
   "source2": "OWASP — XSS Prevention",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Sanitize HTML with DOMPurify in Clincoo",
   "desc": "How to clean user HTML before display so it is safe from XSS.",
   "content": "<p class=\"mb-4\">If you must display rich HTML from users, sanitization is mandatory. DOMPurify removes dangerous tags and attributes.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Integrate DOMPurify</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> import DOMPurify. Before innerHTML call DOMPurify.sanitize(userHtml). Allow only needed tags.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test payloads</h2><p class=\"mb-4\">Enter <img src=x onerror=alert(1)> in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Confirm onerror is removed. Record the configuration on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "DOMPurify GitHub",
   "sourceUrl": "https://github.com/cure53/DOMPurify",
   "sourceSnippet": "DOMPurify is a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.",
   "source2": "OWASP — XSS Prevention",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-cek-dependensi-rentan",
 "langs": {
  "id": {
   "title": "Cara Cek Dependensi Rentan di Proyek Clincoo",
   "desc": "Tata cara menjalankan audit paket npm atau yarn untuk menemukan dan memperbarui library yang punya celah.",
   "content": "<p class=\"mb-4\">Library pihak ketiga bisa membawa celah yang sudah diketahui. Audit rutin mencegah eksploitasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jalankan npm audit</h2><p class=\"mb-4\">Di terminal proyek <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jalankan npm audit. Perbaiki yang critical dan high dulu dengan npm audit fix atau update manual.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Otomatisasi di CI</h2><p class=\"mb-4\">Tambah langkah audit di pipeline. Jika ada temuan, blokir merge. Catat hasil dan versi aman di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Uji ulang di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p>",
   "source": "npm docs — audit",
   "sourceUrl": "https://docs.npmjs.com/cli/v10/commands/npm-audit",
   "sourceSnippet": "npm audit runs a security audit of the project's dependencies.",
   "source2": "GitHub Advisory Database",
   "source2Url": "https://github.com/advisories",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Check Vulnerable Dependencies in a Clincoo Project",
   "desc": "How to run npm or yarn audit to find and update libraries that have known vulnerabilities.",
   "content": "<p class=\"mb-4\">Third-party libraries can bring known vulnerabilities. Regular audits prevent exploitation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Run npm audit</h2><p class=\"mb-4\">In the project terminal of <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> run npm audit. Fix critical and high issues first with npm audit fix or manual updates.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Automate in CI</h2><p class=\"mb-4\">Add an audit step in the pipeline. Block merge if findings exist. Record results and safe versions on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Retest in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p>",
   "source": "npm docs — audit",
   "sourceUrl": "https://docs.npmjs.com/cli/v10/commands/npm-audit",
   "sourceSnippet": "npm audit runs a security audit of the project's dependencies.",
   "source2": "GitHub Advisory Database",
   "source2Url": "https://github.com/advisories",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};

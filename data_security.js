// Clincoo Docs — kategori Security (10 Oktober 2026, 10:00 WIB) — 7 artikel
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
 "id": "security-validasi-input-client-dan-server",
 "langs": {
  "id": {
   "title": "Cara Validasi Input di Client dan Server",
   "desc": "Tata cara memeriksa data form Clincoo di kedua sisi supaya data buruk tidak masuk.",
   "content": "<p class=\"mb-4\">Validasi hanya di browser mudah dilewati. Server harus menolak data yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aturan yang sama di dua tempat</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis batas panjang, pola email, dan tipe angka di form. Duplikasi aturan itu di endpoint yang menerima data.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tolak di server meski client lolos</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> kirim data yang melewati form tapi rusak (panjang berlebih). Server harus menolak. Catat kode status di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Client-side form validation",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation",
   "sourceSnippet": "Client-side validation improves UX; server-side validation is required for security.",
   "source2": "OWASP — Input Validation",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Validate Input on Client and Server",
   "desc": "How to check Clincoo form data on both sides so bad data cannot enter.",
   "content": "<p class=\"mb-4\">Validation only in the browser is easy to bypass. The server must reject the same data.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Same rules in both places</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write length limits, email pattern, and number type on the form. Duplicate those rules on the endpoint that receives the data.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reject on the server even if the client passed</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> send data that passes the form but is broken (over-length). The server must reject it. Record the status code on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Client-side form validation",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation",
   "sourceSnippet": "Client-side validation improves UX; server-side validation is required for security.",
   "source2": "OWASP — Input Validation",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-csp-blokir-inline-script-tidak-perlu",
 "langs": {
  "id": {
   "title": "Cara Pakai CSP untuk Blokir Inline Script yang Tidak Perlu",
   "desc": "Tata cara mengatur Content-Security-Policy di Clincoo supaya skrip inline tidak dijalankan.",
   "content": "<p class=\"mb-4\">Inline script memudahkan XSS. CSP membatasi sumber skrip yang boleh dijalankan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mulai dengan default-src 'self'</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambah meta CSP atau header dengan default-src 'self'. Jangan tambah 'unsafe-inline' kecuali terpaksa. Gunakan nonce atau hash untuk skrip yang memang perlu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di konsol</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka DevTools dan cek apakah inline script diblokir. Catat pelanggaran di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Content-Security-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
   "sourceSnippet": "Content Security Policy is an added layer of security that helps to detect and mitigate certain types of attacks, including XSS.",
   "source2": "OWASP — CSP Cheat Sheet",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use CSP to Block Unnecessary Inline Scripts",
   "desc": "How to set Content-Security-Policy on Clincoo so inline scripts are not executed.",
   "content": "<p class=\"mb-4\">Inline scripts make XSS easier. CSP limits which script sources may run.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Start with default-src 'self'</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add a CSP meta or header with default-src 'self'. Do not add 'unsafe-inline' unless necessary. Use a nonce or hash for scripts that truly need it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in the console</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open DevTools and check whether inline scripts are blocked. Record violations on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Content-Security-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
   "sourceSnippet": "Content Security Policy is an added layer of security that helps to detect and mitigate certain types of attacks, including XSS.",
   "source2": "OWASP — CSP Cheat Sheet",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-cookie-secure-httponly-samesite",
 "langs": {
  "id": {
   "title": "Cara Atur Cookie Secure, HttpOnly, dan SameSite",
   "desc": "Tata cara menandai cookie Clincoo agar tidak dicuri lewat XSS atau dikirim ke domain lain.",
   "content": "<p class=\"mb-4\">Cookie tanpa flag mudah dicuri atau dikirim ke situs lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tiga flag wajib</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> saat set cookie, tambah Secure (hanya HTTPS), HttpOnly (tidak bisa dibaca JS), dan SameSite=Lax atau Strict. Jangan simpan token sesi di cookie yang bisa dibaca script.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di Application tab</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka DevTools > Application > Cookies. Pastikan flag muncul. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Set-Cookie",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie",
   "sourceSnippet": "The Set-Cookie HTTP response header is used to send a cookie from the server to the user agent.",
   "source2": "OWASP — Cookie Security",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set Cookie Secure, HttpOnly, and SameSite",
   "desc": "How to mark Clincoo cookies so they cannot be stolen via XSS or sent to other domains.",
   "content": "<p class=\"mb-4\">Cookies without flags are easy to steal or send to other sites.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Three required flags</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> when setting a cookie, add Secure (HTTPS only), HttpOnly (not readable by JS), and SameSite=Lax or Strict. Do not store session tokens in cookies that script can read.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check in the Application tab</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open DevTools > Application > Cookies. Confirm the flags appear. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Set-Cookie",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie",
   "sourceSnippet": "The Set-Cookie HTTP response header is used to send a cookie from the server to the user agent.",
   "source2": "OWASP — Cookie Security",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-validasi-upload-file-cegah-eksekusi",
 "langs": {
  "id": {
   "title": "Cara Validasi Upload File untuk Cegah Eksekusi",
   "desc": "Tata cara memeriksa tipe dan ekstensi file upload di Clincoo sebelum disimpan.",
   "content": "<p class=\"mb-4\">File upload yang tidak divalidasi bisa berisi skrip yang dijalankan saat diakses.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek MIME dan ekstensi</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tolak file yang bukan gambar atau dokumen yang diizinkan. Jangan percaya Content-Type dari klien. Simpan di luar web root atau dengan ekstensi yang tidak dieksekusi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan file palsu</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> coba unggah .php yang diubah namanya menjadi .jpg. Server harus menolak. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "OWASP — File Upload",
   "sourceUrl": "https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html",
   "sourceSnippet": "Unrestricted file upload is a high risk vulnerability.",
   "source2": "MDN — File API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/File",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Validate File Uploads to Prevent Execution",
   "desc": "How to check file type and extension on Clincoo uploads before saving.",
   "content": "<p class=\"mb-4\">Unvalidated file uploads can contain scripts that run when accessed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check MIME and extension</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> reject files that are not allowed images or documents. Do not trust the client Content-Type. Store outside the web root or with a non-executable extension.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with a fake file</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> try uploading a .php renamed to .jpg. The server must reject it. Record the result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "OWASP — File Upload",
   "sourceUrl": "https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html",
   "sourceSnippet": "Unrestricted file upload is a high risk vulnerability.",
   "source2": "MDN — File API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/File",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-cegah-clickjacking-frame-ancestors",
 "langs": {
  "id": {
   "title": "Cara Cegah Clickjacking dengan frame-ancestors",
   "desc": "Tata cara membatasi siapa yang boleh embed halaman Clincoo di iframe.",
   "content": "<p class=\"mb-4\">Tanpa perlindungan, situs lain bisa menyembunyikan halaman Clincoo di iframe transparan dan menipu klik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">CSP frame-ancestors</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambah frame-ancestors 'self' atau 'none' di CSP. Alternatif X-Frame-Options: DENY atau SAMEORIGIN.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji embed</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> coba embed halaman di iframe dari domain lain. Browser harus menolak. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — frame-ancestors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors",
   "sourceSnippet": "The frame-ancestors directive specifies valid parents that may embed a page using frame, iframe, etc.",
   "source2": "OWASP — Clickjacking",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Prevent Clickjacking with frame-ancestors",
   "desc": "How to limit who may embed a Clincoo page in an iframe.",
   "content": "<p class=\"mb-4\">Without protection, another site can hide a Clincoo page in a transparent iframe and trick clicks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">CSP frame-ancestors</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add frame-ancestors 'self' or 'none' to the CSP. Alternative: X-Frame-Options DENY or SAMEORIGIN.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the embed</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> try embedding the page in an iframe from another domain. The browser must refuse. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — frame-ancestors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors",
   "sourceSnippet": "The frame-ancestors directive specifies valid parents that may embed a page using frame, iframe, etc.",
   "source2": "OWASP — Clickjacking",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-sanitasi-html-dengan-dompurify",
 "langs": {
  "id": {
   "title": "Cara Sanitasi HTML dengan DOMPurify",
   "desc": "Tata cara membersihkan HTML pengguna di Clincoo sebelum dimasukkan ke halaman.",
   "content": "<p class=\"mb-4\">Jika harus menampilkan HTML dari pengguna, sanitasi dulu agar tag berbahaya hilang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai library yang teruji</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jalankan DOMPurify.sanitize sebelum innerHTML. Izinkan hanya tag yang aman seperti p, strong, a dengan rel. Tolak script, on*, javascript:.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji payload</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> masukkan <img src=x onerror=alert(1)>. Hasil harus bersih. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "DOMPurify",
   "sourceUrl": "https://github.com/cure53/DOMPurify",
   "sourceSnippet": "DOMPurify is a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.",
   "source2": "OWASP — XSS Prevention",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Sanitize HTML with DOMPurify",
   "desc": "How to clean user HTML on Clincoo before inserting it into the page.",
   "content": "<p class=\"mb-4\">If you must display HTML from users, sanitize it first so dangerous tags are removed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use a tested library</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> run DOMPurify.sanitize before innerHTML. Allow only safe tags such as p, strong, a with rel. Reject script, on*, javascript:.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the payload</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> enter <img src=x onerror=alert(1)>. The result must be clean. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "DOMPurify",
   "sourceUrl": "https://github.com/cure53/DOMPurify",
   "sourceSnippet": "DOMPurify is a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.",
   "source2": "OWASP — XSS Prevention",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};

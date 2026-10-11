// Clincoo Docs — tambah 5 artikel Security (11 Oktober 2026, 10:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["security"]) {
    window.countryDataFiles["security"] = { "names": { "id": "Security", "en": "Security" }, "articles": [] };
  }
  var list = window.countryDataFiles["security"].articles;
  var extra = [
{
 "id": "security-set-csp-header",
 "langs": {
  "id": {
   "title": "Cara Set Content-Security-Policy Header di Clincoo",
   "desc": "Tata cara menambahkan header CSP untuk membatasi sumber skrip dan style di Clincoo.",
   "content": "<p class=\"mb-4\">Tanpa CSP, skrip pihak ketiga atau inline bisa berjalan tanpa kontrol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambah header CSP</h2><p class=\"mb-4\">Di server atau Cloudflare untuk <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> set Content-Security-Policy: default-src 'self'; script-src 'self' https://editor.clincoo.buzz; style-src 'self' 'unsafe-inline'.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dan sesuaikan</h2><p class=\"mb-4\">Buka konsol di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a>, perbaiki pelanggaran yang muncul. Catat policy final di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Content-Security-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy",
   "sourceSnippet": "Content-Security-Policy helps prevent XSS by restricting resource loading.",
   "source2": "OWASP — CSP Cheat Sheet",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set the Content-Security-Policy Header in Clincoo",
   "desc": "How to add a CSP header to restrict script and style sources in Clincoo.",
   "content": "<p class=\"mb-4\">Without CSP, third-party or inline scripts can run unchecked.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add the CSP header</h2><p class=\"mb-4\">On the server or Cloudflare for <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> set Content-Security-Policy: default-src 'self'; script-src 'self' https://editor.clincoo.buzz; style-src 'self' 'unsafe-inline'.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test and adjust</h2><p class=\"mb-4\">Open the console in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> and fix any violations. Record the final policy on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Content-Security-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy",
   "sourceSnippet": "Content-Security-Policy helps prevent XSS by restricting resource loading.",
   "source2": "OWASP — CSP Cheat Sheet",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "security-jangan-expose-api-key",
 "langs": {
  "id": {
   "title": "Cara Jangan Expose API Key di Frontend Clincoo",
   "desc": "Tata cara menyimpan kunci API di backend atau environment, bukan di kode JavaScript publik.",
   "content": "<p class=\"mb-4\">API key di kode frontend bisa diambil siapa saja yang membuka sumber halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pindahkan ke server</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan taruh kunci di file JS yang di-deploy. Panggil endpoint backend yang menyimpan kunci di env.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gunakan .env dan gitignore</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan .env tidak di-commit. Catat praktik di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "OWASP — API Security",
   "sourceUrl": "https://owasp.org/www-project-api-security/",
   "sourceSnippet": "Never expose secret keys in client-side code.",
   "source2": "MDN — Environment variables",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Exposing API Keys in Clincoo Frontend",
   "desc": "How to keep API keys on the backend or in environment variables, not in public JavaScript.",
   "content": "<p class=\"mb-4\">An API key in frontend code can be extracted by anyone who views the page source.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Move it to the server</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not put keys in deployed JS files. Call a backend endpoint that holds the key in env.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use .env and gitignore</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm .env is not committed. Record the practice on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "OWASP — API Security",
   "sourceUrl": "https://owasp.org/www-project-api-security/",
   "sourceSnippet": "Never expose secret keys in client-side code.",
   "source2": "MDN — Environment variables",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-csrf-protection-form",
 "langs": {
  "id": {
   "title": "Cara Lindungi Form dari CSRF di Clincoo",
   "desc": "Tata cara menambahkan token CSRF pada form agar permintaan dari situs lain ditolak.",
   "content": "<p class=\"mb-4\">Form tanpa token CSRF bisa dikirim oleh situs jahat atas nama pengguna yang sedang login.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Generate dan validasi token</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat token unik per sesi, taruh di hidden input, dan cek di server sebelum proses.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan form palsu</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> coba kirim tanpa token, harus ditolak. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "OWASP — CSRF",
   "sourceUrl": "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html",
   "sourceSnippet": "Use anti-CSRF tokens to ensure requests come from your site.",
   "source2": "MDN — Forms",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn/Forms",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Protect Forms from CSRF in Clincoo",
   "desc": "How to add a CSRF token to forms so requests from other sites are rejected.",
   "content": "<p class=\"mb-4\">A form without a CSRF token can be submitted by a malicious site on behalf of a logged-in user.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Generate and validate the token</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create a unique token per session, put it in a hidden input, and check it on the server before processing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with a fake form</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> try submitting without the token; it should be rejected. Record it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "OWASP — CSRF",
   "sourceUrl": "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html",
   "sourceSnippet": "Use anti-CSRF tokens to ensure requests come from your site.",
   "source2": "MDN — Forms",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn/Forms",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "security-sri-untuk-cdn",
 "langs": {
  "id": {
   "title": "Cara Pakai Subresource Integrity untuk Skrip CDN",
   "desc": "Tata cara menambahkan integrity hash pada tag script dari CDN di Clincoo.",
   "content": "<p class=\"mb-4\">Skrip dari CDN bisa diganti tanpa diketahui jika tidak ada integrity check.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hitung dan tambah integrity</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> generate hash SHA-384 untuk file CDN, lalu tambahkan integrity=\"sha384-...\" crossorigin=\"anonymous\" pada script.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji load</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan skrip tetap load. Jika hash salah, browser blokir. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Subresource Integrity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity",
   "sourceSnippet": "SRI allows browsers to verify that files fetched from CDNs have not been altered.",
   "source2": "OWASP — SRI",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Subresource Integrity for CDN Scripts",
   "desc": "How to add an integrity hash to script tags loaded from a CDN in Clincoo.",
   "content": "<p class=\"mb-4\">Scripts from a CDN can be swapped without notice if there is no integrity check.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Calculate and add integrity</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> generate a SHA-384 hash for the CDN file, then add integrity=\"sha384-...\" crossorigin=\"anonymous\" on the script.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test the load</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm the script still loads. If the hash is wrong the browser blocks it. Record on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Subresource Integrity",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity",
   "sourceSnippet": "SRI allows browsers to verify that files fetched from CDNs have not been altered.",
   "source2": "OWASP — SRI",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-atur-cors-policy",
 "langs": {
  "id": {
   "title": "Cara Atur CORS Policy dengan Benar di Clincoo",
   "desc": "Tata cara mengatur Access-Control-Allow-Origin agar hanya domain yang diizinkan yang bisa akses API.",
   "content": "<p class=\"mb-4\">CORS yang terlalu longgar memungkinkan situs lain memanggil API Clincoo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set origin spesifik</h2><p class=\"mb-4\">Di server, set Access-Control-Allow-Origin ke https://app.clincoo.buzz atau https://editor.clincoo.buzz, bukan * jika ada credentials.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dari domain lain</h2><p class=\"mb-4\">Dari <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> coba fetch API, harus ditolak jika tidak diizinkan. Catat header di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CORS",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
   "sourceSnippet": "Cross-Origin Resource Sharing allows controlled access to resources from other origins.",
   "source2": "OWASP — CORS",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/CORS_OriginHeaderScrutiny_Cheat_Sheet.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Configure CORS Policy Correctly in Clincoo",
   "desc": "How to set Access-Control-Allow-Origin so only allowed domains can call the API.",
   "content": "<p class=\"mb-4\">Overly permissive CORS lets other sites call Clincoo APIs.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set specific origins</h2><p class=\"mb-4\">On the server set Access-Control-Allow-Origin to https://app.clincoo.buzz or https://editor.clincoo.buzz, not * when credentials are used.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test from another domain</h2><p class=\"mb-4\">From <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> try fetching the API; it should be rejected if not allowed. Record the headers on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CORS",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
   "sourceSnippet": "Cross-Origin Resource Sharing allows controlled access to resources from other origins.",
   "source2": "OWASP — CORS",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/CORS_OriginHeaderScrutiny_Cheat_Sheet.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();

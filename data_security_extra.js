// Clincoo Docs — tambah artikel Security (10 Oktober 2026, 23:00 WIB)
// Clincoo Docs — tambah 1 artikel Security (11 Oktober 2026, 08:00 WIB)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["security"]) {
    window.countryDataFiles["security"] = { "names": { "id": "Security", "en": "Security" }, "articles": [] };
  }
  var list = window.countryDataFiles["security"].articles;
  var extra = [
{
 "id": "security-csp-dasar-untuk-clincoo",
 "langs": {
  "id": {
   "title": "Cara Set Content-Security-Policy Dasar di Clincoo",
   "desc": "Tata cara memasang CSP sederhana agar skrip eksternal tidak bisa dijalankan sembarangan.",
   "content": "<p class=\"mb-4\">Tanpa CSP, halaman Clincoo bisa memuat skrip dari domain yang tidak dikenal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mulai dengan default-src self</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan meta atau header Content-Security-Policy: default-src 'self'; script-src 'self'. Izinkan hanya domain yang memang dipakai, seperti CDN gambar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di konsol</h2><p class=\"mb-4\">Buka <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, lihat tab Console. Jika ada pelanggaran, sesuaikan policy. Catat header final di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Content-Security-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy",
   "sourceSnippet": "Content-Security-Policy is a HTTP response header that controls resources the user agent is allowed to load.",
   "source2": "web.dev — CSP",
   "source2Url": "https://web.dev/articles/csp",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set a Basic Content-Security-Policy in Clincoo",
   "desc": "How to add a simple CSP so external scripts cannot run arbitrarily.",
   "content": "<p class=\"mb-4\">Without CSP, a Clincoo page can load scripts from unknown domains.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Start with default-src self</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add a meta tag or header Content-Security-Policy: default-src 'self'; script-src 'self'. Allow only domains you actually use, such as an image CDN.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in the console</h2><p class=\"mb-4\">Open <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> and check the Console tab. If there are violations, adjust the policy. Record the final header on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Content-Security-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy",
   "sourceSnippet": "Content-Security-Policy is a HTTP response header that controls resources the user agent is allowed to load.",
   "source2": "web.dev — CSP",
   "source2Url": "https://web.dev/articles/csp",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-hindari-mixed-content",
 "langs": {
  "id": {
   "title": "Cara Hindari Mixed Content di Halaman HTTPS Clincoo",
   "desc": "Tata cara memastikan semua sumber daya di halaman Clincoo menggunakan HTTPS agar tidak diblokir browser.",
   "content": "<p class=\"mb-4\">Mixed content terjadi saat halaman HTTPS memuat gambar, skrip, atau stylesheet dari HTTP. Browser modern memblokirnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti semua URL ke HTTPS</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari src atau href yang dimulai dengan http://. Ganti ke https://. Jika server tidak mendukung HTTPS, pindahkan aset ke domain yang aman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di Console</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Console. Jika ada peringatan mixed content, perbaiki. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Mixed content",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content",
   "sourceSnippet": "Mixed content occurs when a secure page loads insecure resources.",
   "source2": "web.dev — Mixed content",
   "source2Url": "https://web.dev/articles/mixed-content",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Mixed Content on an HTTPS Clincoo Page",
   "desc": "How to ensure all resources on a Clincoo page use HTTPS so they are not blocked by the browser.",
   "content": "<p class=\"mb-4\">Mixed content happens when an HTTPS page loads images, scripts, or stylesheets from HTTP. Modern browsers block it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Change all URLs to HTTPS</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> search for src or href that start with http://. Change them to https://. If the server does not support HTTPS, move the asset to a secure domain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the Console</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the Console. If there is a mixed content warning, fix it. Record on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Mixed content",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content",
   "sourceSnippet": "Mixed content occurs when a secure page loads insecure resources.",
   "source2": "web.dev — Mixed content",
   "source2Url": "https://web.dev/articles/mixed-content",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "security-atur-permissions-policy",
 "langs": {
  "id": {
   "title": "Cara Atur Permissions-Policy untuk Batasi Fitur Browser",
   "desc": "Tata cara memasang Permissions-Policy di Clincoo supaya kamera, lokasi, dan fitur lain tidak dipakai tanpa izin.",
   "content": "<p class=\"mb-4\">Tanpa policy, skrip bisa meminta kamera atau geolocation tanpa kontrol. Permissions-Policy membatasi itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set header atau meta</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan Permissions-Policy: camera=(), microphone=(), geolocation=(). Atau meta http-equiv.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> coba akses fitur yang diblokir. Pastikan error jelas. Catat policy di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Permissions-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy",
   "sourceSnippet": "Permissions-Policy allows you to control which features and APIs can be used in the browser.",
   "source2": "web.dev — Permissions Policy",
   "source2Url": "https://web.dev/articles/permissions-policy",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set Permissions-Policy to Limit Browser Features",
   "desc": "How to add Permissions-Policy in Clincoo so camera, location, and other features cannot be used without permission.",
   "content": "<p class=\"mb-4\">Without a policy, scripts can request camera or geolocation without control. Permissions-Policy limits that.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set the header or meta</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add Permissions-Policy: camera=(), microphone=(), geolocation=(). Or a meta http-equiv.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> try to access blocked features. Confirm a clear error. Record the policy on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Permissions-Policy",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy",
   "sourceSnippet": "Permissions-Policy allows you to control which features and APIs can be used in the browser.",
   "source2": "web.dev — Permissions Policy",
   "source2Url": "https://web.dev/articles/permissions-policy",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();

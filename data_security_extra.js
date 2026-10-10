// Clincoo Docs — tambah 5 artikel Security (10 Oktober 2026, 20:00 WIB)
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
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();

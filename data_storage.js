// Clincoo Docs — kategori Storage (7 Oktober 2026, 11:00 WIB) — 2 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["storage"] = {
 "names": { "id": "Storage", "en": "Storage" },
 "articles": [
{
 "id": "storage-cek-kuota-sebelum-simpan",
 "langs": {
  "id": {
   "title": "Cara Cek Kuota localStorage Sebelum Menyimpan JSON",
   "desc": "Tata cara menangkap QuotaExceededError dan memangkas data sebelum simpan di proyek Clincoo.",
   "content": "<p class=\"mb-4\">localStorage punya kuota terbatas per origin. Menyimpan JSON besar tanpa cek sering melempar QuotaExceededError dan menghentikan simpan draf.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bungkus setItem</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> panggil setItem di dalam try/catch. Jika nama error adalah QuotaExceededError, hapus kunci draf lama atau simpan ringkasan, bukan seluruh objek.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan simpan aset</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jangan taruh gambar base64 atau riwayat penuh di localStorage. Catat batas yang dipakai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar draf tetap muat.</p>",
   "source": "MDN — Storage quota",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria",
   "sourceSnippet": "Browsers limit how much data a site can store, and exceeding that quota raises an exception.",
   "source2": "MDN — localStorage",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Check the localStorage Quota Before Saving JSON",
   "desc": "How to catch QuotaExceededError and trim data before saving it in a Clincoo project.",
   "content": "<p class=\"mb-4\">localStorage has a limited quota per origin. Saving a large JSON blob without a check often throws QuotaExceededError and stops the draft save.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Wrap setItem</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> call setItem inside try/catch. If the error name is QuotaExceededError, drop old draft keys or store a summary, not the whole object.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not store assets</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> do not put base64 images or a full history in localStorage. Note the limit you use on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so drafts still fit.</p>",
   "source": "MDN — Storage quota",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria",
   "sourceSnippet": "Browsers limit how much data a site can store, and exceeding that quota raises an exception.",
   "source2": "MDN — localStorage",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "storage-jangan-simpan-token-di-localstorage",
 "langs": {
  "id": {
   "title": "Cara Menghindari Token di localStorage",
   "desc": "Tata cara memisahkan sesi dari localStorage agar skrip di halaman Clincoo tidak membaca token.",
   "content": "<p class=\"mb-4\">localStorage bisa dibaca skrip apa pun di origin yang sama. Token sesi yang ditaruh di sana ikut terbaca jika ada skrip pihak ketiga atau celah XSS.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan draf dan sesi</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan hanya preferensi tampilan atau draf non-rahasia. Token, kunci API, dan cookie sesi jangan ditulis ke localStorage atau sessionStorage.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek kunci yang sudah ada</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Application, lalu Local Storage. Hapus kunci yang berisi token uji. Catat daftar kunci yang boleh ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — localStorage",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
   "sourceSnippet": "localStorage data is available to JavaScript on the same origin and has no built-in expiry.",
   "source2": "OWASP — HTML5 Security Cheat Sheet",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Storing Tokens in localStorage",
   "desc": "How to keep session tokens out of localStorage so a script on a Clincoo page cannot read them.",
   "content": "<p class=\"mb-4\">localStorage can be read by any script on the same origin. A session token stored there is readable if a third-party script or an XSS bug is present.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate drafts from the session</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store only view preferences or non-secret drafts. Do not write tokens, API keys, or session cookies to localStorage or sessionStorage.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Review existing keys</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Application, then Local Storage. Remove keys that hold test tokens. Record the allowed keys on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — localStorage",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
   "sourceSnippet": "localStorage data is available to JavaScript on the same origin and has no built-in expiry.",
   "source2": "OWASP — HTML5 Security Cheat Sheet",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};

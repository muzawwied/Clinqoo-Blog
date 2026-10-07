// Clincoo Docs — kategori Storage (7 Oktober 2026, 12:00 WIB) — 7 artikel
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
},
{
 "id": "storage-pilih-sessionstorage-untuk-sementara",
 "langs": {
  "id": {
   "title": "Cara Pilih sessionStorage untuk Data Sementara",
   "desc": "Tata cara memisahkan draf satu tab dari localStorage agar data hilang saat tab ditutup di proyek Clincoo.",
   "content": "<p class=\"mb-4\">localStorage bertahan setelah tab ditutup. Data yang hanya berlaku untuk satu sesi kerja — langkah wizard, filter sementara, atau draf yang belum dikirim — lebih aman di sessionStorage.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan umurnya</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan preferensi yang boleh tetap (bahasa, lebar panel) di localStorage. Simpan state satu kunjungan di sessionStorage. Kunci diawali nama proyek, misalnya clincoo:wizard.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan menutup tab</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka dua tab, isi draf, lalu tutup satu tab. Tab lain tidak boleh kehilangan preferensi permanen. Catat pilihan kunci di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya tim tidak menaruh token atau data lintas sesi di storage.</p>",
   "source": "MDN — sessionStorage",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage",
   "sourceSnippet": "sessionStorage is cleared when the page session ends, which happens when the tab is closed.",
   "source2": "MDN — localStorage",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Choose sessionStorage for Temporary Data",
   "desc": "How to keep one-tab drafts out of localStorage so they disappear when the tab closes in a Clincoo project.",
   "content": "<p class=\"mb-4\">localStorage survives after the tab closes. Data that only matters for one working session — a wizard step, a temporary filter, or an unsent draft — is safer in sessionStorage.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Split the lifetime</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> store preferences that may persist (language, panel width) in localStorage. Store single-visit state in sessionStorage. Prefix keys with the project name, for example clincoo:wizard.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test by closing the tab</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open two tabs, fill a draft, then close one tab. The other tab must not lose permanent preferences. Note the key choice on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the team does not put tokens or cross-session data in storage.</p>",
   "source": "MDN — sessionStorage",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage",
   "sourceSnippet": "sessionStorage is cleared when the page session ends, which happens when the tab is closed.",
   "source2": "MDN — localStorage",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "storage-bungkus-json-parse-dengan-try",
 "langs": {
  "id": {
   "title": "Cara Bungkus JSON.parse Agar Data Rusak Tidak Menjebol Halaman",
   "desc": "Tata cara menangkap SyntaxError dari storage dan memakai nilai default di proyek Clincoo.",
   "content": "<p class=\"mb-4\">Nilai di storage bisa rusak: string terpotong, kunci lama yang bukan JSON, atau data yang ditulis skrip lain. JSON.parse langsung di awal halaman sering menghentikan seluruh skrip.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bungkus parse</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat fungsi baca yang try/catch. Jika parse gagal, hapus kunci itu dan kembalikan objek default. Jangan teruskan string mentah ke UI.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Versikan skema</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> simpan field version di JSON. Jika versi tidak dikenali, buang data lama. Tuliskan bentuk default di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar debug berikutnya tidak mengira halaman error padahal storage yang rusak.</p>",
   "source": "MDN — JSON.parse",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",
   "sourceSnippet": "JSON.parse throws a SyntaxError if the string to parse is not valid JSON.",
   "source2": "MDN — Storage.getItem",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Wrap JSON.parse So Corrupt Data Does Not Crash the Page",
   "desc": "How to catch SyntaxError from storage and fall back to a default value in a Clincoo project.",
   "content": "<p class=\"mb-4\">A storage value can be corrupt: a truncated string, an old non-JSON key, or data written by another script. Calling JSON.parse at the top of the page often stops the whole script.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Wrap parse</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write a read helper with try/catch. If parse fails, remove that key and return a default object. Do not pass the raw string into the UI.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Version the schema</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> store a version field in the JSON. If the version is unknown, drop the old data. Write the default shape on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next debug does not treat a broken page as an app error when storage is the cause.</p>",
   "source": "MDN — JSON.parse",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",
   "sourceSnippet": "JSON.parse throws a SyntaxError if the string to parse is not valid JSON.",
   "source2": "MDN — Storage.getItem",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "storage-dengar-event-storage-antar-tab",
 "langs": {
  "id": {
   "title": "Cara Dengarkan Event storage Antar Tab",
   "desc": "Tata cara menyamakan draf di tab lain lewat event storage tanpa polling di proyek Clincoo.",
   "content": "<p class=\"mb-4\">event storage hanya terkirim ke tab lain pada origin yang sama, bukan ke tab yang menulis. Itu cara murah untuk menyamakan draf tanpa setInterval.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang listener</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> dengarkan window storage. Cek event.key agar hanya kunci draf yang diproses, lalu baca event.newValue. Abaikan event dari sessionStorage karena event ini hanya untuk localStorage.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan timpa ketikan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jika input sedang fokus, jangan timpa nilainya diam-diam. Tampilkan catatan bahwa tab lain mengubah draf. Contoh alurnya bisa dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Window: storage event",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event",
   "sourceSnippet": "The storage event fires when a storage area is changed in the context of another document.",
   "source2": "MDN — StorageEvent",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Listen for the storage Event Across Tabs",
   "desc": "How to sync a draft in another tab with the storage event instead of polling in a Clincoo project.",
   "content": "<p class=\"mb-4\">The storage event is sent only to other tabs on the same origin, not to the tab that wrote the value. That is a cheap way to sync a draft without setInterval.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Attach a listener</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> listen for window storage. Check event.key so only the draft key is handled, then read event.newValue. Ignore sessionStorage writes because this event is for localStorage only.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not overwrite typing</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> if an input is focused, do not overwrite its value silently. Show a note that another tab changed the draft. The flow can be noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Window: storage event",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event",
   "sourceSnippet": "The storage event fires when a storage area is changed in the context of another document.",
   "source2": "MDN — StorageEvent",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "storage-hapus-kunci-saat-logout",
 "langs": {
  "id": {
   "title": "Cara Hapus Kunci Penyimpanan Saat Logout",
   "desc": "Tata cara menghapus kunci milik proyek saat keluar tanpa menghapus storage origin lain di Clincoo.",
   "content": "<p class=\"mb-4\">clear() menghapus seluruh storage origin, termasuk preferensi yang bukan milik sesi. Logout cukup menghapus kunci yang diawali namespace proyek.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hapus per prefix</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> loop localStorage dan sessionStorage. Jika key dimulai dengan clincoo:, panggil removeItem. Jangan simpan salinan token di situ — sesi tetap di cookie httpOnly.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji setelah keluar</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> logout, lalu muat ulang. Draf akun tadi tidak boleh muncul di akun lain pada browser yang sama. Catat daftar prefix di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Storage.removeItem",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem",
   "sourceSnippet": "removeItem deletes one key from the storage object instead of clearing every key.",
   "source2": "OWASP — HTML5 Security Cheat Sheet",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Clear Storage Keys on Logout",
   "desc": "How to remove project-owned keys on logout without clearing another origin's storage in Clincoo.",
   "content": "<p class=\"mb-4\">clear() wipes the whole origin storage, including preferences that do not belong to the session. Logout only needs to remove keys under the project namespace.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove by prefix</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> loop localStorage and sessionStorage. If a key starts with clincoo:, call removeItem. Do not keep a token copy there — the session stays in an httpOnly cookie.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test after sign-out</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sign out, then reload. The previous account draft must not appear for another account in the same browser. Record the prefix list on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Storage.removeItem",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem",
   "sourceSnippet": "removeItem deletes one key from the storage object instead of clearing every key.",
   "source2": "OWASP — HTML5 Security Cheat Sheet",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "storage-fallback-saat-mode-pribadi",
 "langs": {
  "id": {
   "title": "Cara Beri Fallback Saat Mode Pribadi Memblokir Storage",
   "desc": "Tata cara menangkap SecurityError dan memakai memori sementara bila storage diblokir di proyek Clincoo.",
   "content": "<p class=\"mb-4\">Beberapa browser melempar SecurityError saat setItem di mode pribadi, atau storage berisi null. Halaman yang menganggap storage selalu ada akan gagal sebelum form tampil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Deteksi sekali</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> coba setItem lalu removeItem pada kunci uji di dalam try/catch. Jika gagal, pakai objek Map di memori untuk sisa kunjungan dan beri tahu bahwa draf tidak tersimpan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan blokir UI</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> form tetap bisa dikirim meski draf lokal gagal. Tampilkan pesan singkat, bukan halaman kosong. Pola fallback ini bisa dirujuk dari <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> saat minta bantuan AI: tempel nama error dan baris setItem.</p>",
   "source": "MDN — Storage API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
   "sourceSnippet": "Access to storage can throw a security exception when the browser blocks it.",
   "source2": "MDN — localStorage",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Fall Back When Private Mode Blocks Storage",
   "desc": "How to catch SecurityError and use in-memory state when storage is blocked in a Clincoo project.",
   "content": "<p class=\"mb-4\">Some browsers throw SecurityError on setItem in private mode, or storage is null. A page that assumes storage always exists fails before the form renders.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Detect once</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> try setItem then removeItem on a probe key inside try/catch. If it fails, use an in-memory Map for the rest of the visit and say that the draft will not be saved.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not block the UI</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> the form can still be submitted if the local draft fails. Show a short message, not a blank page. This fallback can be referenced from <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> when asking an AI for help: paste the error name and the setItem line.</p>",
   "source": "MDN — Storage API",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
   "sourceSnippet": "Access to storage can throw a security exception when the browser blocks it.",
   "source2": "MDN — localStorage",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};

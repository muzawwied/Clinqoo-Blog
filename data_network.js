// Clincoo Docs — kategori Network (Oktober 2026)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["network"] = {
 "names": {
  "id": "Network",
  "en": "Network"
 },
 "articles": [
{
 "id": "network-baca-status-blocked-bukan-404",
 "langs": {
  "id": {
   "title": "Cara Bedakan Request Blocked dan 404 di Panel Network",
   "desc": "Tata cara membaca status di panel Network Clincoo supaya kegagalan yang diblokir browser tidak disangka halaman tidak ada.",
   "content": "<p class=\"mb-4\">Status merah di panel Network tidak selalu berarti berkas hilang. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, tab Network, lalu ulangi aksi yang gagal di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cari kolom Status, bukan hanya warna</h2><p class=\"mb-4\">404 punya kode dan body respons. (blocked:csp), (failed) net::ERR_BLOCKED_BY_CLIENT, atau CORS error sering tidak punya body. Jangan mengganti path jika penyebabnya kebijakan atau ekstensi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cocokkan nama berkas</h2><p class=\"mb-4\">Klik baris, baca URL penuh. 404 pada /assets/app.js berarti path salah. Blocked pada domain lain berarti host belum diizinkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat sebelum minta bantuan</h2><p class=\"mb-4\">Salin status, URL, dan inisiator ke catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Satu baris itu lebih berguna daripada tangkapan layar seluruh panel.</p>",
   "source": "Chrome DevTools — Network",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network",
   "sourceSnippet": "Use the Network panel to make sure resources are being downloaded and uploaded as expected.",
   "source2": "MDN — HTTP response status codes",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Tell a Blocked Request from a 404 in the Network Panel",
   "desc": "How to read Network panel status on Clincoo so a browser-blocked failure is not mistaken for a missing page.",
   "content": "<p class=\"mb-4\">A red row in the Network panel does not always mean the file is missing. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, the Network tab, then repeat the failing action in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read the Status column, not only the color</h2><p class=\"mb-4\">A 404 has a code and a response body. (blocked:csp), (failed) net::ERR_BLOCKED_BY_CLIENT, or a CORS error often has no body. Do not change the path if the cause is a policy or an extension.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the file name</h2><p class=\"mb-4\">Click the row and read the full URL. A 404 on /assets/app.js means the path is wrong. Blocked on another domain means that host is not allowed yet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write it down before asking for help</h2><p class=\"mb-4\">Copy the status, URL, and initiator into a note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. That one row is more useful than a screenshot of the whole panel.</p>",
   "source": "Chrome DevTools — Network",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network",
   "sourceSnippet": "Use the Network panel to make sure resources are being downloaded and uploaded as expected.",
   "source2": "MDN — HTTP response status codes",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "network-filter-fetch-xhr",
 "langs": {
  "id": {
   "title": "Cara Filter Fetch/XHR supaya Panggilan API Tidak Tertutup Aset",
   "desc": "Tata cara menyaring panel Network Clincoo ke Fetch dan XHR agar panggilan yang gagal tidak hilang di antara gambar dan CSS.",
   "content": "<p class=\"mb-4\">Muat ulang halaman menarik puluhan baris. Panggilan API yang gagal mudah terlewat. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> saring panel Network sebelum mengulang aksi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Aktifkan Fetch/XHR</h2><p class=\"mb-4\">Klik filter Fetch/XHR. Baris yang tersisa adalah fetch, XHR, dan sebagian beacon. Gambar, font, dan CSS tidak lagi mengisi daftar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Centang Preserve log</h2><p class=\"mb-4\">Jika aksi memuat ulang preview <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, Preserve log menjaga baris sebelumnya. Tanpa itu, error hilang tepat saat navigasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ketik nama endpoint</h2><p class=\"mb-4\">Kotak filter menerima teks, misalnya /api/simpan. Catat filter yang dipakai di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya langkah uji bisa diulang orang lain.</p>",
   "source": "Chrome DevTools — Network filters",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#filter",
   "sourceSnippet": "Use the filter box to filter requests by properties, such as the domain or size of the resources.",
   "source2": "MDN — Fetch API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Filter Fetch/XHR so API Calls Are Not Buried by Assets",
   "desc": "How to filter the Clincoo Network panel to Fetch and XHR so a failing call is not lost among images and CSS.",
   "content": "<p class=\"mb-4\">A reload pulls in dozens of rows. A failing API call is easy to miss. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> filter the Network panel before you repeat the action.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Turn on Fetch/XHR</h2><p class=\"mb-4\">Click the Fetch/XHR filter. The remaining rows are fetch, XHR, and some beacons. Images, fonts, and CSS no longer fill the list.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check Preserve log</h2><p class=\"mb-4\">If the action reloads the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview, Preserve log keeps the previous rows. Without it, the error disappears at the moment of navigation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Type the endpoint name</h2><p class=\"mb-4\">The filter box accepts text, for example /api/simpan. Note the filter you used on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so someone else can repeat the test.</p>",
   "source": "Chrome DevTools — Network filters",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#filter",
   "sourceSnippet": "Use the filter box to filter requests by properties, such as the domain or size of the resources.",
   "source2": "MDN — Fetch API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "network-cek-preflight-options",
 "langs": {
  "id": {
   "title": "Cara Cek Preflight OPTIONS saat POST Gagal",
   "desc": "Tata cara menemukan permintaan OPTIONS di panel Network Clincoo sebelum menyalahkan body POST yang bahkan belum terkirim.",
   "content": "<p class=\"mb-4\">POST ke origin lain sering didahului OPTIONS. Jika preflight gagal, body POST tidak pernah dikirim. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ulang aksi sambil panel Network terbuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Urutkan menurut waktu</h2><p class=\"mb-4\">Baris OPTIONS muncul tepat sebelum POST ke URL yang sama. Buka header respons: Access-Control-Allow-Origin, Allow-Methods, dan Allow-Headers harus mencakup metode dan header yang dikirim.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan ubah body dulu</h2><p class=\"mb-4\">Kalau OPTIONS 404 atau tanpa header CORS, memperbaiki JSON tidak menolong. Cek di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> apakah host API sama dengan yang diizinkan server.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan kedua baris</h2><p class=\"mb-4\">Salin status OPTIONS dan POST ke catatan <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Keduanya perlu, karena POST yang cancelled sering hanya akibat preflight.</p>",
   "source": "MDN — CORS preflight",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request",
   "sourceSnippet": "A CORS preflight request is a CORS request that checks to see if the CORS protocol is understood and a server is aware using specific methods and headers.",
   "source2": "MDN — OPTIONS",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Inspect an OPTIONS Preflight When POST Fails",
   "desc": "How to find the OPTIONS request in the Clincoo Network panel before blaming a POST body that never left the browser.",
   "content": "<p class=\"mb-4\">A POST to another origin is often preceded by OPTIONS. If the preflight fails, the POST body never leaves. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> repeat the action with the Network panel open.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sort by time</h2><p class=\"mb-4\">The OPTIONS row appears just before the POST to the same URL. Open the response headers: Access-Control-Allow-Origin, Allow-Methods, and Allow-Headers must cover the method and headers you send.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not edit the body first</h2><p class=\"mb-4\">If OPTIONS is 404 or has no CORS headers, fixing the JSON will not help. In the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview, check that the API host matches what the server allows.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep both rows</h2><p class=\"mb-4\">Copy the OPTIONS and POST status into a note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. You need both, because a cancelled POST is often only the result of the preflight.</p>",
   "source": "MDN — CORS preflight",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request",
   "sourceSnippet": "A CORS preflight request is a CORS request that checks to see if the CORS protocol is understood and a server is aware using specific methods and headers.",
   "source2": "MDN — OPTIONS",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "network-disable-cache-saat-debug",
 "langs": {
  "id": {
   "title": "Cara Matikan Cache saat Debug Aset yang Usang",
   "desc": "Tata cara memakai Disable cache di panel Network Clincoo supaya CSS atau JS lama tidak menutupi perbaikan yang baru disimpan.",
   "content": "<p class=\"mb-4\">Preview yang masih memakai berkas kemarin membuat perbaikan terasa gagal. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> centang Disable cache hanya saat DevTools terbuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buka Network, lalu centang Disable cache</h2><p class=\"mb-4\">Opsi itu tidak aktif jika panel ditutup. Muat ulang pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan DevTools tetap terbuka, lalu lihat kolom Size. Seharusnya bukan (disk cache) atau (memory cache) untuk berkas yang sedang kamu uji.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan jadikan ini pengaturan pengunjung</h2><p class=\"mb-4\">Disable cache hanya untuk sesi debug. Pengunjung tetap boleh memakai cache. Kalau produksi masih usang, perbaiki nama berkas atau header, bukan mengandalkan centang ini.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan waktu respons</h2><p class=\"mb-4\">Catat waktu berkas di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum dan sesudah simpan. Jika waktu tidak berubah, editor belum mengunggah berkas itu.</p>",
   "source": "Chrome DevTools — Disable cache",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#disable-cache",
   "sourceSnippet": "Disable cache prevents the browser from using the cached version of a resource while DevTools is open.",
   "source2": "MDN — HTTP caching",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Disable Cache While Debugging a Stale Asset",
   "desc": "How to use Disable cache in the Clincoo Network panel so an old CSS or JS file does not hide a fix you just saved.",
   "content": "<p class=\"mb-4\">A preview still using yesterday’s file makes a fix look failed. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> check Disable cache only while DevTools is open.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Open Network, then check Disable cache</h2><p class=\"mb-4\">The option is inactive if the panel is closed. Reload the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview with DevTools still open, then read the Size column. It should not say (disk cache) or (memory cache) for the file you are testing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not treat this as a visitor setting</h2><p class=\"mb-4\">Disable cache is only for the debug session. Visitors may still use the cache. If production stays stale, fix the file name or the headers, not this checkbox.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare the response time</h2><p class=\"mb-4\">Note the file time on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before and after save. If the time does not change, the editor has not uploaded that file.</p>",
   "source": "Chrome DevTools — Disable cache",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#disable-cache",
   "sourceSnippet": "Disable cache prevents the browser from using the cached version of a resource while DevTools is open.",
   "source2": "MDN — HTTP caching",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "network-salin-sebagai-curl",
 "langs": {
  "id": {
   "title": "Cara Salin Request Gagal sebagai cURL sebelum Minta Bantuan",
   "desc": "Tata cara menyalin panggilan Network Clincoo menjadi cURL yang sudah disensor, supaya orang lain bisa mengulang gejala tanpa menebak header.",
   "content": "<p class=\"mb-4\">Cerita “API-nya error” tidak bisa diulang. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> klik kanan baris yang gagal di panel Network, lalu Copy as cURL.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hapus rahasia sebelum menempel</h2><p class=\"mb-4\">Ganti Authorization, cookie, dan token dengan kata SENSOR. Jangan menempel nilai asli ke chat atau ke <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sertakan status dan cuplikan body</h2><p class=\"mb-4\">Di samping cURL, tulis status dan beberapa baris respons. Pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dan produksi bisa beda host; sebutkan yang mana.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji cURL di luar browser</h2><p class=\"mb-4\">Jalankan perintah di terminal. Jika cURL berhasil tetapi browser gagal, curigai CORS atau ekstensi, bukan server.</p>",
   "source": "Chrome DevTools — Copy as cURL",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#copy",
   "sourceSnippet": "Copy as cURL copies the request as a cURL command.",
   "source2": "MDN — HTTP headers",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Copy a Failing Request as cURL Before Asking for Help",
   "desc": "How to copy a Clincoo Network call as cURL with secrets removed, so someone else can repeat the symptom without guessing headers.",
   "content": "<p class=\"mb-4\">“The API errors” cannot be repeated. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> right-click the failing Network row, then Copy as cURL.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove secrets before pasting</h2><p class=\"mb-4\">Replace Authorization, cookies, and tokens with the word REDACTED. Do not paste real values into chat or onto <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include the status and a body snippet</h2><p class=\"mb-4\">Next to the cURL, write the status and a few lines of the response. The <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview and production can use different hosts; say which one it was.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Run the cURL outside the browser</h2><p class=\"mb-4\">Run the command in a terminal. If cURL succeeds and the browser fails, suspect CORS or an extension, not the server.</p>",
   "source": "Chrome DevTools — Copy as cURL",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#copy",
   "sourceSnippet": "Copy as cURL copies the request as a cURL command.",
   "source2": "MDN — HTTP headers",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};

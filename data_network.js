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
},
{
 "id": "network-baca-timing-ttfb",
 "langs": {
  "id": {
   "title": "Cara Baca Timing: TTFB Bukan Sama dengan Unduhan Lambat",
   "desc": "Tata cara membaca batang Timing di panel Network Clincoo supaya waktu tunggu server tidak disalahkan sebagai berkas yang terlalu besar.",
   "content": "<p class=\"mb-4\">Halaman terasa lambat bukan selalu karena gambar berat. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka DevTools, tab Network, klik request yang lambat, lalu buka Timing. Ulangi aksi yang sama di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pisahkan Waiting dan Content Download</h2><p class=\"mb-4\">Waiting (TTFB) adalah waktu sampai byte pertama. Content Download adalah waktu mengirim isi. TTFB panjang menunjuk server, antrean, atau DNS. Download panjang menunjuk ukuran atau jaringan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan optimasi gambar jika batang tunggunya yang panjang</h2><p class=\"mb-4\">Kompresi gambar tidak memendekkan TTFB API. Catat mana yang dominan sebelum mengubah aset. Bandingkan request yang sama di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> kalau kamu menulis ulang langkah uji.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat angka, bukan kesan</h2><p class=\"mb-4\">Salin Waiting dan Content Download dalam milidetik. “Lambat” tanpa angka tidak bisa dibandingkan setelah perbaikan.</p>",
   "source": "Chrome DevTools — Network timing",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#timing",
   "sourceSnippet": "The Timing breakdown shows how time was spent on a request, including waiting for the server.",
   "source2": "MDN — Time to First Byte",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read Timing: TTFB Is Not the Same as a Slow Download",
   "desc": "How to read the Timing bars in the Clincoo Network panel so server wait time is not blamed on a file that is simply large.",
   "content": "<p class=\"mb-4\">A slow page is not always a heavy image. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open DevTools, the Network tab, click the slow request, then open Timing. Repeat the same action in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate Waiting from Content Download</h2><p class=\"mb-4\">Waiting (TTFB) is time until the first byte. Content Download is time spent sending the body. A long TTFB points at the server, a queue, or DNS. A long download points at size or the network.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not optimize images when the wait bar is the long one</h2><p class=\"mb-4\">Image compression does not shorten an API TTFB. Note which bar dominates before changing assets. Compare the same request on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> if you rewrite the test steps.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record numbers, not a feeling</h2><p class=\"mb-4\">Copy Waiting and Content Download in milliseconds. “Slow” without numbers cannot be compared after a fix.</p>",
   "source": "Chrome DevTools — Network timing",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#timing",
   "sourceSnippet": "The Timing breakdown shows how time was spent on a request, including waiting for the server.",
   "source2": "MDN — Time to First Byte",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "network-bedakan-401-dan-403",
 "langs": {
  "id": {
   "title": "Cara Bedakan 401 dan 403 sebelum Ganti Token",
   "desc": "Tata cara membaca status 401 dan 403 di panel Network Clincoo supaya token tidak diganti saat masalahnya sebenarnya izin.",
   "content": "<p class=\"mb-4\">Respons merah di API sering langsung disangka token mati. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka panel Network, filter Fetch/XHR, lalu baca kode status sebelum menyalin header baru ke <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">401 berarti identitas belum diterima</h2><p class=\"mb-4\">401 Unauthorized: kredensial tidak ada, kedaluwarsa, atau formatnya salah. Cek header Authorization dan apakah request ini yang dimaksud, bukan request aset.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">403 berarti identitas dikenali tetapi ditolak</h2><p class=\"mb-4\">403 Forbidden: server tahu siapa kamu, tetapi aksi atau sumber daya tidak diizinkan. Mengganti token yang masih valid tidak mengubah peran. Baca body singkat, jangan hanya warna status.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis kode dan cuplikan body saat minta bantuan</h2><p class=\"mb-4\">Di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> atau chat, sebut 401 atau 403 plus satu kalimat body yang sudah disensor. Jangan tempel token.</p>",
   "source": "MDN — 401 Unauthorized",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401",
   "sourceSnippet": "401 means the request lacks valid authentication credentials for the target resource.",
   "source2": "MDN — 403 Forbidden",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Tell 401 from 403 Before Replacing a Token",
   "desc": "How to read 401 and 403 in the Clincoo Network panel so a token is not replaced when the real problem is permission.",
   "content": "<p class=\"mb-4\">A red API response is often blamed on a dead token. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the Network panel, filter Fetch/XHR, and read the status code before pasting a new header into <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">401 means the identity was not accepted</h2><p class=\"mb-4\">401 Unauthorized: credentials are missing, expired, or malformed. Check the Authorization header and that this is the request you meant, not an asset request.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">403 means the identity is known but refused</h2><p class=\"mb-4\">403 Forbidden: the server knows who you are, but the action or resource is not allowed. Replacing a still-valid token does not change the role. Read a short body, not only the status color.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write the code and a body snippet when asking for help</h2><p class=\"mb-4\">On <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> or in chat, say 401 or 403 plus one redacted sentence from the body. Do not paste the token.</p>",
   "source": "MDN — 401 Unauthorized",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401",
   "sourceSnippet": "401 means the request lacks valid authentication credentials for the target resource.",
   "source2": "MDN — 403 Forbidden",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "network-cek-rantai-redirect",
 "langs": {
  "id": {
   "title": "Cara Ikuti Rantai Redirect 301/302 di Panel Network",
   "desc": "Tata cara menelusuri rantai redirect di panel Network Clincoo supaya halaman akhir yang salah tidak disangka sebagai form yang gagal.",
   "content": "<p class=\"mb-4\">Form “berhasil” tetapi halaman yang terbuka bukan yang diharapkan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> centang Preserve log, kirim ulang form di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, lalu cari status 301, 302, atau 307.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca Location, bukan hanya status</h2><p class=\"mb-4\">Header Location pada baris redirect adalah tujuan berikutnya. Klik baris itu, tab Headers. Rantai panjang berarti lompatan berlebih sebelum dokumen akhir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan samakan 301 dengan 302</h2><p class=\"mb-4\">301 sering di-cache browser sebagai alamat tetap. 302 bersifat sementara. Kalau tujuan salah dan 301, perbaikan server tidak langsung terlihat sampai cache redirect dibersihkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat URL awal dan URL akhir</h2><p class=\"mb-4\">Tulis keduanya saat minta bantuan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Satu tangkapan layar status 200 di halaman akhir menyembunyikan lompatan yang salah.</p>",
   "source": "MDN — Redirections in HTTP",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections",
   "sourceSnippet": "HTTP redirects tell the client to fetch the resource at another URL, using status codes such as 301 and 302.",
   "source2": "Chrome DevTools — Network",
   "source2Url": "https://developer.chrome.com/docs/devtools/network",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Follow a 301/302 Redirect Chain in the Network Panel",
   "desc": "How to follow a redirect chain in the Clincoo Network panel so a wrong final page is not mistaken for a failed form.",
   "content": "<p class=\"mb-4\">The form “succeeds” but the page that opens is not the one you expected. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> check Preserve log, submit again in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview, then look for status 301, 302, or 307.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read Location, not only the status</h2><p class=\"mb-4\">The Location header on the redirect row is the next destination. Click that row, Headers tab. A long chain means extra hops before the final document.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not treat 301 as 302</h2><p class=\"mb-4\">A 301 is often cached by the browser as a permanent address. A 302 is temporary. If the target is wrong and the status is 301, a server fix will not show until the redirect cache is cleared.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record the start URL and the final URL</h2><p class=\"mb-4\">Write both when asking for help on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. A screenshot of status 200 on the final page hides the hop that went wrong.</p>",
   "source": "MDN — Redirections in HTTP",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections",
   "sourceSnippet": "HTTP redirects tell the client to fetch the resource at another URL, using status codes such as 301 and 302.",
   "source2": "Chrome DevTools — Network",
   "source2Url": "https://developer.chrome.com/docs/devtools/network",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "network-baca-kolom-initiator",
 "langs": {
  "id": {
   "title": "Cara Baca Kolom Initiator supaya Tahu Siapa Memanggil Request",
   "desc": "Tata cara memakai kolom Initiator di panel Network Clincoo supaya request gagal ditelusuri ke skrip atau elemen yang memicunya.",
   "content": "<p class=\"mb-4\">Request aneh muncul, tetapi tidak jelas dari berkas mana. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tampilkan kolom Initiator pada panel Network, lalu ulangi aksi di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Klik initiator, jangan tebak nama berkas</h2><p class=\"mb-4\">Initiator bisa parser (tag HTML), skrip, atau redirect. Klik tautan berkas untuk membuka baris yang memanggil fetch. Itu lebih cepat daripada mencari string URL di seluruh proyek.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bedakan tag img dan panggilan fetch</h2><p class=\"mb-4\">Parser pada img atau link artinya markup yang memuat aset. Script artinya JavaScript. Perbaikan CSS tidak menghentikan fetch yang dipanggil skrip.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sertakan nama berkas dan baris saat stuck</h2><p class=\"mb-4\">Saat menulis di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> atau chat, sebut initiator beserta barisnya. Jangan hanya menempel URL yang gagal.</p>",
   "source": "Chrome DevTools — Initiator",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#initiator",
   "sourceSnippet": "The Initiator column shows what caused a resource to be requested.",
   "source2": "MDN — Fetch API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read the Initiator Column to See Who Called the Request",
   "desc": "How to use the Initiator column in the Clincoo Network panel so a failing request is traced to the script or element that triggered it.",
   "content": "<p class=\"mb-4\">A strange request appears, but it is unclear which file started it. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> show the Initiator column on the Network panel, then repeat the action in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Click the initiator, do not guess the filename</h2><p class=\"mb-4\">The initiator can be the parser (an HTML tag), a script, or a redirect. Click the file link to open the line that called fetch. That is faster than searching the URL string across the project.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tell an img tag apart from a fetch call</h2><p class=\"mb-4\">Parser on img or link means markup loaded the asset. Script means JavaScript. A CSS fix will not stop a fetch that a script called.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include the filename and line when stuck</h2><p class=\"mb-4\">When writing on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> or in chat, name the initiator and its line. Do not only paste the failing URL.</p>",
   "source": "Chrome DevTools — Initiator",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#initiator",
   "sourceSnippet": "The Initiator column shows what caused a resource to be requested.",
   "source2": "MDN — Fetch API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "network-throttle-slow-3g",
 "langs": {
  "id": {
   "title": "Cara Pakai Throttling Slow 3G untuk Mengulang Halaman Lambat",
   "desc": "Tata cara mengaktifkan throttling jaringan di panel Network Clincoo supaya kondisi lambat bisa diulang, bukan hanya diceritakan.",
   "content": "<p class=\"mb-4\">“Di laptop saya cepat” tidak membantu. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka panel Network, pilih throttling Slow 3G atau Fast 3G, lalu muat ulang pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Throttle hanya saat DevTools terbuka</h2><p class=\"mb-4\">Pembatasan ini berlaku selama DevTools terbuka. Tutup panel kalau kamu selesai, supaya uji berikutnya tidak palsu. Catat preset yang dipakai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lihat request yang menggantung, bukan hanya skor</h2><p class=\"mb-4\">Pada 3G, request yang saling menunggu terlihat di waterfall. Itu petunjuk urutan muat. Jangan mengubah semua gambar sebelum melihat request mana yang memblokir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sebut preset saat minta bantuan</h2><p class=\"mb-4\">Di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> tulis “Slow 3G, request X menunggu Y”. Tanpa preset, orang lain menguji di jaringan kantor dan tidak melihat gejala yang sama.</p>",
   "source": "Chrome DevTools — Network throttling",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#throttle",
   "sourceSnippet": "Throttle the network to emulate slower connections while DevTools is open.",
   "source2": "MDN — Network Information API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use Slow 3G Throttling to Reproduce a Slow Page",
   "desc": "How to enable network throttling in the Clincoo Network panel so a slow condition can be repeated, not only described.",
   "content": "<p class=\"mb-4\">“It is fast on my laptop” does not help. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the Network panel, choose Slow 3G or Fast 3G throttling, then reload the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Throttling applies only while DevTools is open</h2><p class=\"mb-4\">The limit lasts while DevTools stays open. Close the panel when you are done so the next test is not fake. Note the preset you used.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Look at requests that stall, not only a score</h2><p class=\"mb-4\">On 3G, requests that wait on each other show up in the waterfall. That is a load-order clue. Do not change every image before seeing which request blocks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the preset when asking for help</h2><p class=\"mb-4\">On <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> write “Slow 3G, request X waits on Y”. Without the preset, someone else tests on office wifi and does not see the same symptom.</p>",
   "source": "Chrome DevTools — Network throttling",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#throttle",
   "sourceSnippet": "Throttle the network to emulate slower connections while DevTools is open.",
   "source2": "MDN — Network Information API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "network-preserve-log-saat-navigasi",
 "langs": {
  "id": {
   "title": "Cara Aktifkan Preserve Log saat Halaman Pindah",
   "desc": "Tata cara menahan log panel Network Clincoo supaya request yang terjadi tepat sebelum pindah halaman tidak hilang.",
   "content": "<p class=\"mb-4\">Request yang gagal sering terjadi setengah detik sebelum halaman pindah. Tanpa Preserve log, panel Network di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> kosong tepat saat kamu ingin melihatnya. Ulangi aksi di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>, lalu centang Preserve log sebelum mengklik tautan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Centang sebelum navigasi, bukan sesudah</h2><p class=\"mb-4\">Preserve log menahan baris dari dokumen sebelumnya. Kalau kamu mencentangnya setelah halaman baru termuat, request pemicu sudah terhapus. Aktifkan dulu, baru ulangi langkah yang membuat halaman pindah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bedakan request lama dan baru</h2><p class=\"mb-4\">Baris dari halaman sebelumnya tetap ada. Baca kolom Initiator dan nama dokumen, jangan mengira semua baris milik halaman yang sedang terbuka. Kosongkan log secara manual jika campurannya membingungkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat URL yang hilang</h2><p class=\"mb-4\">Salin status, metode, dan URL ke catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Satu baris itu cukup untuk membedakan redirect yang disengaja dari request yang dibatalkan navigasi.</p>",
   "source": "Chrome Developers — Network panel reference",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference",
   "sourceSnippet": "Preserve log keeps network requests across page loads so you can inspect them after navigation.",
   "source2": "MDN — Navigation and the HTTP cache",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Enable Preserve Log When the Page Navigates",
   "desc": "How to keep the Clincoo Network panel log so requests that fire just before a navigation are not wiped.",
   "content": "<p class=\"mb-4\">A failing request often fires half a second before the page changes. Without Preserve log, the Network panel in <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> is empty by the time you look. Repeat the action in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview, then enable Preserve log before you click the link.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Enable it before navigation, not after</h2><p class=\"mb-4\">Preserve log keeps rows from the previous document. If you enable it after the new page has loaded, the triggering request is already gone. Turn it on first, then repeat the step that navigates.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate old rows from new ones</h2><p class=\"mb-4\">Rows from the previous page stay visible. Read the Initiator column and the document name. Do not assume every row belongs to the page that is open. Clear the log manually if the mix gets confusing.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write down the URL that vanished</h2><p class=\"mb-4\">Copy the status, method, and URL into a note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. That one row is enough to tell an intentional redirect from a request cancelled by navigation.</p>",
   "source": "Chrome Developers — Network panel reference",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference",
   "sourceSnippet": "Preserve log keeps network requests across page loads so you can inspect them after navigation.",
   "source2": "MDN — Navigation and the HTTP cache",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "network-baca-size-dan-transferred",
 "langs": {
  "id": {
   "title": "Cara Baca Size dan Transferred supaya Tahu Kompresi",
   "desc": "Tata cara membandingkan kolom Size dan Transferred di panel Network Clincoo supaya aset yang belum terkompresi ketahuan sebelum deploy.",
   "content": "<p class=\"mb-4\">Angka besar di panel Network belum tentu berarti berkas sebesar itu di jaringan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tampilkan kolom Size dan Transferred, lalu muat ulang pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan cache dimatikan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Size adalah ukuran asli, Transferred adalah yang lewat jaringan</h2><p class=\"mb-4\">Size menunjukkan ukuran hasil decode. Transferred mencakup header dan isi yang benar-benar diunduh. Kalau keduanya hampir sama pada CSS atau JS, kompresi gzip atau Brotli mungkin tidak aktif.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan bandingkan saat dari cache</h2><p class=\"mb-4\">Baris dari disk cache atau memory cache menampilkan Transferred kecil atau (disk cache). Itu bukan bukti kompresi. Matikan cache, muat ulang, lalu bandingkan lagi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat satu aset sebelum minta bantuan</h2><p class=\"mb-4\">Di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> tulis nama berkas, Size, Transferred, dan header content-encoding. Tanpa ketiga angka itu, saran untuk mengompres gambar atau menyalakan Brotli hanya tebakan.</p>",
   "source": "Chrome Developers — Network features reference",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#size",
   "sourceSnippet": "Size is the resource size and Transferred is the bytes sent over the network, including headers.",
   "source2": "MDN — Content-Encoding",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read Size and Transferred to See Compression",
   "desc": "How to compare the Size and Transferred columns in the Clincoo Network panel so an uncompressed asset is caught before deploy.",
   "content": "<p class=\"mb-4\">A large number in the Network panel does not always mean that many bytes crossed the network. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> show the Size and Transferred columns, then reload the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview with cache disabled.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Size is the decoded weight, Transferred is what crossed the network</h2><p class=\"mb-4\">Size is the decoded resource size. Transferred includes headers and the bytes actually downloaded. If the two are almost equal for CSS or JS, gzip or Brotli may be off.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not compare a cached row</h2><p class=\"mb-4\">A disk cache or memory cache row shows a tiny Transferred value or (disk cache). That is not proof of compression. Disable cache, reload, then compare again.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record one asset before asking for help</h2><p class=\"mb-4\">On <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> write the file name, Size, Transferred, and the content-encoding header. Without those three figures, advice to compress an image or enable Brotli is a guess.</p>",
   "source": "Chrome Developers — Network features reference",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference#size",
   "sourceSnippet": "Size is the resource size and Transferred is the bytes sent over the network, including headers.",
   "source2": "MDN — Content-Encoding",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
,
{
 "id": "network-bandingkan-payload-dan-response",
 "langs": {
  "id": {
   "title": "Cara Bandingkan Payload Request dan Body Response",
   "desc": "Tata cara membaca payload dan response di panel Network Clincoo supaya field yang dikirim dan yang kembali tidak tertukar saat form gagal.",
   "content": "<p class=\"mb-4\">Status 400 saja tidak menjelaskan field mana yang ditolak. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka baris fetch, lalu tab Payload dan Response.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cocokkan nama field</h2><p class=\"mb-4\">Bandingkan kunci yang dikirim dengan kunci yang diharapkan server. Salah ketik email menjadi mail sering lolos di klien tetapi ditolak di server.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan simpulkan dari preview</h2><p class=\"mb-4\">Preview halaman bisa menampilkan data lama. Yang sah adalah body response permintaan terakhir. Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan satu field dikosongkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Salin cuplikan, sensor token</h2><p class=\"mb-4\">Saat minta bantuan, salin payload yang sudah disensor. Langkah ini dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome Developers — Network features reference",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference",
   "sourceSnippet": "The Network panel records each request and its response.",
   "source2": "MDN — Fetch API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Compare a Request Payload and Response Body",
   "desc": "How to read the payload and response in the Clincoo Network panel so sent fields and returned fields are not mixed up when a form fails.",
   "content": "<p class=\"mb-4\">A 400 status alone does not say which field was rejected. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the fetch row, then the Payload and Response tabs.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match field names</h2><p class=\"mb-4\">Compare the keys you sent with the keys the server expects. Typing email as mail often passes the client and fails on the server.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not trust the preview alone</h2><p class=\"mb-4\">The page preview can show stale data. The source of truth is the response body of the latest request. Test in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with one field left empty.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Copy a snippet, redact tokens</h2><p class=\"mb-4\">When asking for help, paste a redacted payload. The step is noted on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome Developers — Network features reference",
   "sourceUrl": "https://developer.chrome.com/docs/devtools/network/reference",
   "sourceSnippet": "The Network panel records each request and its response.",
   "source2": "MDN — Fetch API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};

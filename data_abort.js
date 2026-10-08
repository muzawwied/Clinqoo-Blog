// Clincoo Docs — kategori Abort (9 Oktober 2026, 04:00 WIB) — 5 artikel baru
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["abort"] = {
 "names": { "id": "Abort", "en": "Abort" },
 "articles": [
{
 "id": "abort-batalkan-fetch-saat-halaman-ditutup",
 "langs": {
  "id": {
   "title": "Cara Batalkan Fetch Saat Halaman Ditutup",
   "desc": "Tata cara membatalkan permintaan fetch Clincoo yang masih berjalan saat pengguna meninggalkan halaman.",
   "content": "<p class=\"mb-4\">Permintaan yang masih berjalan setelah pengguna pindah halaman bisa menimpa state yang sudah tidak relevan, atau menghabiskan kuota tanpa hasil yang dibaca.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Buat sinyal di awal muat</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat satu AbortController saat skrip halaman dimulai. Teruskan controller.signal ke setiap fetch yang hanya berguna selama halaman itu terbuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batalkan di pagehide</h2><p class=\"mb-4\">Panggil controller.abort() pada pagehide, bukan hanya pada click tombol kembali. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji dengan membuka pratinjau, memicu fetch, lalu menutup tab. Pastikan catch membedakan AbortError dari kegagalan jaringan, lalu jangan tampilkan toast kesalahan untuk pembatalan yang disengaja. Catat pola ini di catatan proyek pada <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — AbortController",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController",
   "sourceSnippet": "AbortController lets you abort one or more Web requests when the associated signal is aborted.",
   "source2": "MDN — pagehide event",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/pagehide_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Abort a Fetch When the Page Closes",
   "desc": "How to cancel an in-flight Clincoo fetch when the user leaves the page.",
   "content": "<p class=\"mb-4\">A request that keeps running after the user leaves can overwrite state that no longer matters, or spend quota on a result nobody reads.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Create the signal on load</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create one AbortController when the page script starts. Pass controller.signal to every fetch that is only useful while that page is open.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Abort on pagehide</h2><p class=\"mb-4\">Call controller.abort() on pagehide, not only on a back-button click. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test by opening the preview, triggering a fetch, then closing the tab. Make sure catch tells AbortError apart from a network failure, and do not show an error toast for an intentional cancel. Note the pattern in the project notes on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — AbortController",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController",
   "sourceSnippet": "AbortController lets you abort one or more Web requests when the associated signal is aborted.",
   "source2": "MDN — pagehide event",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/pagehide_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "abort-timeout-permintaan-dengan-abortsignal",
 "langs": {
  "id": {
   "title": "Cara Batasi Waktu Fetch dengan AbortSignal.timeout",
   "desc": "Tata cara menghentikan fetch Clincoo yang terlalu lama tanpa timer manual yang lupa dibersihkan.",
   "content": "<p class=\"mb-4\">Fetch tanpa batas waktu membuat tombol tetap berputar saat server diam. Batas waktu harus membatalkan permintaan, bukan hanya menyembunyikan spinner.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai sinyal bawaan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> kirim signal: AbortSignal.timeout(8000) pada fetch yang memanggil API Anda. Angka itu adalah milidetik, bukan detik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bedakan timeout dan batal pengguna</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji dengan menunda respons di DevTools. TimeoutError atau AbortError dengan alasan timeout boleh menampilkan pesan coba lagi. Jangan ulangi permintaan otomatis lebih dari satu kali. Simpan ambang waktu di catatan pada <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya tim tidak memakai angka berbeda di setiap halaman.</p>",
   "source": "MDN — AbortSignal.timeout",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static",
   "sourceSnippet": "AbortSignal.timeout() returns a signal that aborts with a TimeoutError after the given milliseconds.",
   "source2": "MDN — Fetch API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Time Out a Fetch with AbortSignal.timeout",
   "desc": "How to stop a Clincoo fetch that runs too long without a timer you forget to clear.",
   "content": "<p class=\"mb-4\">A fetch with no time limit leaves a button spinning while the server stays silent. The limit must cancel the request, not only hide the spinner.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use the built-in signal</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pass signal: AbortSignal.timeout(8000) on fetches that call your API. The number is milliseconds, not seconds.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate timeout from a user cancel</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> test by delaying the response in DevTools. A TimeoutError, or an AbortError whose reason is the timeout, may show a retry message. Do not retry automatically more than once. Keep the threshold in the notes on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the team does not use a different number on every page.</p>",
   "source": "MDN — AbortSignal.timeout",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static",
   "sourceSnippet": "AbortSignal.timeout() returns a signal that aborts with a TimeoutError after the given milliseconds.",
   "source2": "MDN — Fetch API",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "abort-gabungkan-sinyal-timeout-dan-batal",
 "langs": {
  "id": {
   "title": "Cara Gabungkan Sinyal Timeout dan Batal Pengguna",
   "desc": "Tata cara memakai AbortSignal.any agar fetch Clincoo berhenti jika waktu habis atau pengguna membatalkan.",
   "content": "<p class=\"mb-4\">Satu fetch sering perlu dua alasan berhenti: pengguna menekan batal, atau waktu habis. Dua timer terpisah mudah saling menimpa.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Satukan sinyal</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buat AbortController untuk tombol batal, lalu kirim AbortSignal.any([controller.signal, AbortSignal.timeout(8000)]) ke fetch. Jika browser proyek belum mendukung any, batalkan controller saat timeout sebagai cadangan dan catat syarat itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji kedua jalur</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> klik batal sebelum jawaban tiba, lalu ulangi dengan jaringan yang ditunda. Keduanya harus menghentikan spinner. Jangan kirim permintaan kedua hanya karena sinyal mana pun sudah abort. Ringkas keputusan ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — AbortSignal.any",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/any_static",
   "sourceSnippet": "AbortSignal.any() returns a signal that aborts when any of the source signals abort.",
   "source2": "MDN — AbortSignal",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Combine a Timeout Signal and a User Cancel",
   "desc": "How to use AbortSignal.any so a Clincoo fetch stops on timeout or when the user cancels.",
   "content": "<p class=\"mb-4\">One fetch often needs two reasons to stop: the user presses cancel, or the time runs out. Two separate timers are easy to overwrite.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Join the signals</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> create an AbortController for the cancel button, then pass AbortSignal.any([controller.signal, AbortSignal.timeout(8000)]) to fetch. If the project browser does not support any yet, abort the controller on timeout as a fallback and note that requirement.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test both paths</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> click cancel before the answer arrives, then repeat with a delayed network. Both should stop the spinner. Do not send a second request just because either signal already aborted. Summarize the decision on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — AbortSignal.any",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/any_static",
   "sourceSnippet": "AbortSignal.any() returns a signal that aborts when any of the source signals abort.",
   "source2": "MDN — AbortSignal",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal",
   "source3": "Clincoo Docs",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "abort-jangan-tampilkan-error-untuk-aborterror",
 "langs": {
  "id": {
   "title": "Cara Jangan Tampilkan Error untuk AbortError",
   "desc": "Tata cara menyaring AbortError supaya pembatalan fetch Clincoo tidak terlihat seperti kegagalan server.",
   "content": "<p class=\"mb-4\">Pembatalan yang disengaja sering masuk ke catch yang sama dengan status 500. Pengguna lalu melihat pesan gagal padahal mereka sendiri yang menutup pencarian.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Periksa nama error</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> di dalam catch, kembali diam-diam jika error.name adalah AbortError. Untuk TimeoutError, tampilkan pesan waktu habis yang terpisah. Jangan mencatat token atau badan permintaan di console.error.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di konsol</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka konsol, batalkan permintaan, dan pastikan tidak ada banner merah. Kegagalan jaringan sungguhan tetap harus terlihat. Tuliskan aturan ini di checklist halaman pada <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — AbortController.abort",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort",
   "sourceSnippet": "Aborting a fetch rejects with an AbortError DOMException rather than a successful response.",
   "source2": "MDN — DOMException",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/DOMException",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Showing an Error for AbortError",
   "desc": "How to filter AbortError so a cancelled Clincoo fetch does not look like a server failure.",
   "content": "<p class=\"mb-4\">An intentional cancel often lands in the same catch as a status 500. The user then sees a failure message even though they closed the search themselves.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the error name</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> inside catch, return quietly if error.name is AbortError. For TimeoutError, show a separate time-out message. Do not log a token or the request body with console.error.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test in the console</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the console, cancel a request, and confirm there is no red banner. A real network failure should still be visible. Write this rule into the page checklist on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — AbortController.abort",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort",
   "sourceSnippet": "Aborting a fetch rejects with an AbortError DOMException rather than a successful response.",
   "source2": "MDN — DOMException",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/DOMException",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "abort-batalkan-pencarian-saat-ketikan-baru",
 "langs": {
  "id": {
   "title": "Cara Batalkan Pencarian Saat Ada Ketikan Baru",
   "desc": "Tata cara membatalkan fetch pencarian Clincoo yang lama supaya jawaban usang tidak menimpa kata kunci baru.",
   "content": "<p class=\"mb-4\">Pencarian yang menjawab lambat bisa kembali setelah pengguna sudah mengetik kata lain. Hasil usang lalu terlihat seperti bug filter.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti controller tiap permintaan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan controller pencarian di variabel. Sebelum fetch baru, panggil abort pada controller lama, lalu buat controller baru. Gabungkan dengan debounce singkat supaya tidak ada permintaan tiap huruf.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Abaikan jawaban yang bukan milik kata kunci terakhir</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ketik dua kata berurutan dengan cepat. Hanya hasil kata terakhir yang boleh mengisi daftar. Jika sinyal sudah abort, jangan tulis ke DOM. Dokumentasikan urutan ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using AbortController with fetch",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController#implementing_an_abortable_api",
   "sourceSnippet": "Passing an AbortSignal to fetch cancels the request when abort() is called on the controller.",
   "source2": "MDN — Fetch signal option",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/RequestInit#signal",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Abort a Search When the User Types Again",
   "desc": "How to cancel an older Clincoo search fetch so a stale answer does not overwrite the new query.",
   "content": "<p class=\"mb-4\">A slow search can return after the user has already typed another word. The stale result then looks like a filter bug.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace the controller on each request</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep the search controller in a variable. Before a new fetch, abort the old controller, then create a new one. Combine that with a short debounce so there is not a request on every key.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ignore an answer that is not for the latest query</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> type two words quickly. Only the result for the last word may fill the list. If the signal already aborted, do not write to the DOM. Document this order on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Using AbortController with fetch",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController#implementing_an_abortable_api",
   "sourceSnippet": "Passing an AbortSignal to fetch cancels the request when abort() is called on the controller.",
   "source2": "MDN — Fetch signal option",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/RequestInit#signal",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
]
};

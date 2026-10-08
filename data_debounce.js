// Clincoo Docs — kategori Debounce (8 Oktober 2026, 07:00 WIB) — 3 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["debounce"] = {
 "names": { "id": "Debounce", "en": "Debounce" },
 "articles": [
{
  "id": "debounce-cari-setelah-berhenti-ketik",
  "langs": {
   "id": {
    "title": "Cara Debounce Pencarian agar Tidak Fetch Tiap Ketikan",
    "desc": "Tata cara menunda fetch pencarian di Clincoo sampai pengguna berhenti mengetik.",
    "content": "<p class=\"mb-4\">Fetch pada setiap input membanjiri jaringan dan membuat hasil lama menimpa hasil baru. Debounce menunggu jeda sebelum meminta data.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Timer 250–300 ms, lalu batalkan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan id timer pada input pencarian. Setiap ketikan, clearTimeout lalu set timer baru. Fetch hanya saat timer jalan. Abaikan respons yang query-nya sudah bukan isi kotak saat ini.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan debounce tombol submit</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ketik cepat lalu berhenti. Hanya satu permintaan yang boleh berangkat. Tombol cari tetap langsung. Catat jeda yang nyaman di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — setTimeout",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout",
    "sourceSnippet": "clearTimeout membatalkan timer sebelumnya sehingga hanya jeda terakhir yang dijalankan.",
    "source2": "web.dev — Optimize INP",
    "source2Url": "https://web.dev/articles/optimize-inp",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
  },
   "en": {
    "title": "How to Debounce Search So It Does Not Fetch on Every Keystroke",
    "desc": "How to delay a Clincoo search fetch until the user stops typing.",
    "content": "<p class=\"mb-4\">A fetch on every input floods the network and lets an old result overwrite a new one. Debounce waits for a pause before requesting data.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A 250–300 ms timer, then cancel it</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep a timer id on the search input. On each keystroke, clearTimeout and set a new timer. Fetch only when the timer fires. Ignore a response whose query is no longer the current box value.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not debounce the submit button</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> type quickly, then stop. Only one request should leave. The search button stays immediate. Note a comfortable delay on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — setTimeout",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout",
    "sourceSnippet": "clearTimeout cancels the previous timer so only the last pause runs.",
    "source2": "web.dev — Optimize INP",
    "source2Url": "https://web.dev/articles/optimize-inp",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
  "id": "debounce-throttle-scroll-bukan-debounce",
  "langs": {
   "id": {
    "title": "Cara Pakai Throttle pada Scroll, Bukan Debounce",
    "desc": "Tata cara memilih throttle untuk scroll di Clincoo supaya posisi tetap terbarui.",
    "content": "<p class=\"mb-4\">Debounce pada scroll baru jalan setelah pengguna berhenti. Indikator posisi dan header jadi telat. Throttle membatasi ke satu jalan per frame atau per interval.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">requestAnimationFrame untuk baca scroll</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pasang flag ticking. Listener scroll hanya menjadwalkan requestAnimationFrame jika flag kosong. Baca scrollY di dalam frame, lalu kosongkan flag. Jangan baca layout di luar frame.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Debounce untuk simpan, throttle untuk tampil</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir daftar panjang. Posisi harus ikut bergerak, sedangkan simpan offset boleh debounce. Bandingkan rasanya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — requestAnimationFrame",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame",
    "sourceSnippet": "requestAnimationFrame menyelaraskan kerja dengan frame cat berikutnya.",
    "source2": "MDN — Document scroll event",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
  },
   "en": {
    "title": "How to Throttle Scroll Instead of Debouncing It",
    "desc": "How to pick throttle for Clincoo scroll so position stays up to date.",
    "content": "<p class=\"mb-4\">Debounce on scroll runs only after the user stops. Position indicators and headers lag. Throttle limits work to one run per frame or interval.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">requestAnimationFrame to read scroll</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set a ticking flag. The scroll listener schedules requestAnimationFrame only when the flag is clear. Read scrollY inside the frame, then clear the flag. Do not read layout outside the frame.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Debounce to save, throttle to show</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll a long list. Position should follow, while saving the offset can be debounced. Compare the feel on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — requestAnimationFrame",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame",
    "sourceSnippet": "requestAnimationFrame aligns work with the next paint frame.",
    "source2": "MDN — Document scroll event",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
  "id": "debounce-batal-timer-saat-elemen-hilang",
  "langs": {
   "id": {
    "title": "Cara Batalkan Timer Debounce saat Elemen Hilang",
    "desc": "Tata cara membersihkan timer debounce di Clincoo agar tidak fetch setelah panel ditutup.",
    "content": "<p class=\"mb-4\">Timer yang dibiarkan hidup tetap memanggil fetch setelah panel ditutup. Respons telat bisa menulis state yang sudah tidak ada.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">clearTimeout saat tutup dan sebelum pasang ulang</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan id timer di satu tempat. Saat dialog ditutup atau input diganti, clearTimeout dan abaikan flag permintaan yang sedang berjalan. Jangan memasang listener input kedua tanpa melepas yang lama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji tutup panel di tengah ketikan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ketik di pencarian, lalu tutup panel sebelum jeda habis. Jaringan tidak boleh mengirim fetch setelah tutup. Tuliskan langkah uji di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — clearTimeout",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout",
    "sourceSnippet": "clearTimeout menghentikan timer yang belum jalan.",
    "source2": "MDN — setTimeout",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
  },
   "en": {
    "title": "How to Cancel a Debounce Timer When the Element Goes Away",
    "desc": "How to clear a Clincoo debounce timer so it does not fetch after a panel closes.",
    "content": "<p class=\"mb-4\">A timer left running still calls fetch after the panel closes. A late response can write state that no longer exists.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">clearTimeout on close and before attaching again</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep the timer id in one place. When the dialog closes or the input is replaced, clearTimeout and ignore the in-flight request flag. Do not attach a second input listener without removing the old one.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test closing the panel mid-typing</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> type in search, then close the panel before the pause ends. The network should not send a fetch after close. Write the test step on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — clearTimeout",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout",
    "sourceSnippet": "clearTimeout stops a timer that has not fired yet.",
    "source2": "MDN — setTimeout",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};

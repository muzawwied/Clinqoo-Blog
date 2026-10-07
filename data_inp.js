// Clincoo Docs — kategori INP (8 Oktober 2026, 05:00 WIB) — 5 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["inp"] = {
 "names": { "id": "INP", "en": "INP" },
 "articles": [
{
 "id": "inp-ukur-di-devtools-bukan-tebak",
 "langs": {
  "id": {
   "title": "Cara Ukur INP di DevTools, Bukan Menebak Lambatnya Klik",
   "desc": "Tata cara membaca Interaction to Next Paint di pratinjau Clincoo supaya perbaikan kena interaksi yang benar.",
   "content": "<p class=\"mb-4\">INP mengukur jeda dari ketukan, klik, atau tombol keyboard sampai frame berikutnya selesai digambar. Angka buruk di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sering berasal dari satu handler, bukan dari seluruh halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Rekam interaksi, jangan hanya Lighthouse</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka Performance, centang Web Vitals, lalu klik tombol yang terasa lambat. Panel Interactions menandai input delay, processing duration, dan presentation delay. Catat elemen dan event, bukan hanya total milidetik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan dengan perangkat lemah</h2><p class=\"mb-4\">Ulangi di CPU 4x slowdown dan lebar 360px. Target kasar: di bawah 200ms terasa cepat, di atas 500ms perlu dipecah. Simpan cuplikan sebelum mengubah kode agar perbaikan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> bisa dibandingkan.</p>",
   "source": "web.dev — Interaction to Next Paint",
   "sourceUrl": "https://web.dev/articles/inp",
   "sourceSnippet": "INP assesses responsiveness using the latency of all click, tap, and keyboard interactions.",
   "source2": "Chrome DevTools — Analyze runtime performance",
   "source2Url": "https://developer.chrome.com/docs/devtools/performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Measure INP in DevTools Instead of Guessing a Slow Click",
   "desc": "How to read Interaction to Next Paint in a Clincoo preview so the fix hits the real interaction.",
   "content": "<p class=\"mb-4\">INP measures the gap from a tap, click, or key press until the next frame is painted. A poor score in <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> usually comes from one handler, not the whole page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record the interaction, do not rely on Lighthouse alone</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open Performance, enable Web Vitals, then click the button that feels slow. The Interactions track marks input delay, processing duration, and presentation delay. Note the element and event, not only the total milliseconds.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare on a weak device</h2><p class=\"mb-4\">Repeat with 4x CPU slowdown and a 360px width. A rough target: under 200ms feels fast, over 500ms needs splitting. Save the trace before changing code so the fix on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> can be compared.</p>",
   "source": "web.dev — Interaction to Next Paint",
   "sourceUrl": "https://web.dev/articles/inp",
   "sourceSnippet": "INP assesses responsiveness using the latency of all click, tap, and keyboard interactions.",
   "source2": "Chrome DevTools — Analyze runtime performance",
   "source2Url": "https://developer.chrome.com/docs/devtools/performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "inp-pecah-handler-click-berat",
 "langs": {
  "id": {
   "title": "Cara Pecah Handler Klik yang Mengunci Main Thread",
   "desc": "Tata cara menunda kerja berat setelah klik di editor Clincoo supaya INP tidak tertahan satu tugas panjang.",
   "content": "<p class=\"mb-4\">Processing duration membengkak jika handler klik menghitung layout, menyimpan data, dan menggambar ulang dalam satu tugas. Browser tidak bisa mengecat frame berikutnya sebelum tugas itu selesai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri umpan balik dulu, kerja belakangan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ubah status tombol dan tutup menu di handler. Pindahkan serialisasi atau filter besar ke setTimeout 0, requestAnimationFrame, atau scheduler.yield jika tersedia. Jangan menunggu fetch selesai sebelum tombol terlihat tertekan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batas tugas di bawah 50ms</h2><p class=\"mb-4\">Pecah loop panjang jadi kelompok kecil dan beri jeda. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> rekam ulang interaksi yang sama. INP membaik jika presentation delay turun karena frame sempat digambar.</p>",
   "source": "web.dev — Optimize INP",
   "sourceUrl": "https://web.dev/articles/optimize-inp",
   "sourceSnippet": "Break up long tasks so the browser can paint the next frame after an interaction.",
   "source2": "MDN — setTimeout",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Split a Click Handler That Blocks the Main Thread",
   "desc": "How to defer heavy work after a click in the Clincoo editor so INP is not stuck on one long task.",
   "content": "<p class=\"mb-4\">Processing duration balloons when a click handler measures layout, saves data, and repaints in one task. The browser cannot paint the next frame until that task ends.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Paint feedback first, work later</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> update the button state and close the menu in the handler. Move serialization or a large filter to setTimeout 0, requestAnimationFrame, or scheduler.yield when available. Do not wait for fetch before the button looks pressed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep tasks under 50ms</h2><p class=\"mb-4\">Split a long loop into small batches and yield between them. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> record the same interaction again. INP improves when presentation delay drops because a frame can paint.</p>",
   "source": "web.dev — Optimize INP",
   "sourceUrl": "https://web.dev/articles/optimize-inp",
   "sourceSnippet": "Break up long tasks so the browser can paint the next frame after an interaction.",
   "source2": "MDN — setTimeout",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "inp-tunda-kerja-setelah-input",
 "langs": {
  "id": {
   "title": "Cara Tunda Kerja Berat setelah Input Teks",
   "desc": "Tata cara menahan filter dan pratinjau Clincoo saat mengetik supaya INP keyboard tetap rendah.",
   "content": "<p class=\"mb-4\">Setiap keydown bisa menjadi interaksi INP. Jika input langsung memfilter ratusan kartu atau menulis ulang iframe pratinjau, ketukan berikutnya mengantre.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Debounce kerja, jangan debounce umpan balik</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> biarkan nilai input tampil seketika. Tunda filter, highlight, dan simpan draf 150–300ms setelah ketukan terakhir. Batalkan timer lama supaya hanya hasil terakhir yang dihitung.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan paksa layout di dalam input</h2><p class=\"mb-4\">Hindari offsetHeight dan getBoundingClientRect di setiap huruf. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji mengetik cepat di kolom pencarian. INP keyboard harus tetap di bawah ambang baik meski daftarnya panjang.</p>",
   "source": "web.dev — Optimize INP",
   "sourceUrl": "https://web.dev/articles/optimize-inp",
   "sourceSnippet": "Yield to the main thread so input can paint before expensive follow-up work.",
   "source2": "MDN — input event",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Defer Heavy Work After a Text Input",
   "desc": "How to hold Clincoo filters and previews while typing so keyboard INP stays low.",
   "content": "<p class=\"mb-4\">Every keydown can be an INP interaction. If the input immediately filters hundreds of cards or rewrites a preview iframe, the next key waits.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Debounce the work, not the feedback</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> let the input value paint immediately. Delay filter, highlight, and draft save 150–300ms after the last key. Clear the previous timer so only the latest result runs.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not force layout inside input</h2><p class=\"mb-4\">Avoid offsetHeight and getBoundingClientRect on every character. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> type quickly in the search field. Keyboard INP should stay in the good range even when the list is long.</p>",
   "source": "web.dev — Optimize INP",
   "sourceUrl": "https://web.dev/articles/optimize-inp",
   "sourceSnippet": "Yield to the main thread so input can paint before expensive follow-up work.",
   "source2": "MDN — input event",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "inp-hindari-layout-thrash-saat-ketik",
 "langs": {
  "id": {
   "title": "Cara Hentikan Layout Thrash saat Panel Editor Bergerak",
   "desc": "Tata cara memisahkan baca dan tulis layout di Clincoo agar interaksi seret tidak memaksa reflow berulang.",
   "content": "<p class=\"mb-4\">Presentation delay naik jika kode membaca offsetWidth lalu menulis style di loop yang sama. Browser harus menghitung layout di tengah interaksi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca sekali, tulis sekali</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> kumpulkan ukuran di awal pointermove, lalu terapkan transform dalam satu penulisan. Pakai transform, bukan top atau left, untuk panel yang diseret. transform tidak memicu layout di elemen lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Lepaskan listener saat interaksi selesai</h2><p class=\"mb-4\">Pasang pointermove pada pointerdown dan lepas pada pointerup. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pastikan tidak ada listener yatim. Cek di Performance bahwa tidak ada Forced reflow ungu di dalam interaksi.</p>",
   "source": "web.dev — Avoid large, complex layouts and layout thrashing",
   "sourceUrl": "https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing",
   "sourceSnippet": "Interleaving layout reads and writes forces the browser to recalculate style and layout repeatedly.",
   "source2": "MDN — transform",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Stop Layout Thrash When the Editor Panel Moves",
   "desc": "How to separate layout reads and writes in Clincoo so a drag interaction does not force repeated reflow.",
   "content": "<p class=\"mb-4\">Presentation delay rises when code reads offsetWidth and then writes style in the same loop. The browser has to compute layout in the middle of the interaction.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read once, write once</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> collect sizes at the start of pointermove, then apply transform in one write. Use transform, not top or left, for a dragged panel. transform does not force layout on other elements.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove the listener when the gesture ends</h2><p class=\"mb-4\">Attach pointermove on pointerdown and remove it on pointerup. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> confirm there is no orphan listener. In Performance, check that no purple Forced reflow sits inside the interaction.</p>",
   "source": "web.dev — Avoid large, complex layouts and layout thrashing",
   "sourceUrl": "https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing",
   "sourceSnippet": "Interleaving layout reads and writes forces the browser to recalculate style and layout repeatedly.",
   "source2": "MDN — transform",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "inp-target-sentuh-dan-delay-input",
 "langs": {
  "id": {
   "title": "Cara Kecilkan Input Delay pada Target Sentuh yang Rapat",
   "desc": "Tata cara merapikan target sentuh Clincoo supaya ketukan tidak tertahan overlay atau listener di document.",
   "content": "<p class=\"mb-4\">Input delay adalah waktu sebelum handler Anda jalan. Penyebab umum: listener di document, overlay tak terlihat, atau elemen lain yang menangkap pointer lebih dulu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Singkirkan yang menahan ketukan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> jangan pasang pointermove global saat tidak ada gestur. Beri target minimal 24px, ideal 44px, dan jarak antar tombol. Overlay penutup harus pointer-events: none jika hanya hiasan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan sentuhan, bukan hanya tetikus</h2><p class=\"mb-4\">Mode perangkat di DevTools tidak selalu meniru antrian sentuh. Coba di ponsel pada <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Jika INP turun setelah listener global dilepas, delay-nya memang di depan handler.</p>",
   "source": "web.dev — Interaction to Next Paint",
   "sourceUrl": "https://web.dev/articles/inp",
   "sourceSnippet": "Input delay is the time from user interaction until event handlers start running.",
   "source2": "WCAG — Target Size Minimum",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Cut Input Delay on Tight Touch Targets",
   "desc": "How to tidy Clincoo touch targets so a tap is not delayed by an overlay or a document listener.",
   "content": "<p class=\"mb-4\">Input delay is the time before your handler runs. Common causes: a document listener, an invisible overlay, or another element that takes the pointer first.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove what holds the tap</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> do not attach a global pointermove when no gesture is active. Give targets at least 24px, ideally 44px, and space between buttons. A decorative overlay needs pointer-events: none.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with touch, not only a mouse</h2><p class=\"mb-4\">DevTools device mode does not always mimic the touch queue. Try a phone on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. If INP drops after the global listener is removed, the delay really was in front of the handler.</p>",
   "source": "web.dev — Interaction to Next Paint",
   "sourceUrl": "https://web.dev/articles/inp",
   "sourceSnippet": "Input delay is the time from user interaction until event handlers start running.",
   "source2": "WCAG — Target Size Minimum",
   "source2Url": "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
]
};

// Clincoo Docs — tambah 5 artikel INP (8 Oktober 2026, 06:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.inp) return;
  var list = window.countryDataFiles.inp.articles;
  var extra = [
{
 "id": "inp-baca-long-animation-frame",
 "langs": {
  "id": {
   "title": "Cara Baca Long Animation Frame untuk Pelaku INP",
   "desc": "Tata cara memakai Long Animation Frames di Clincoo supaya skrip yang menahan klik ketahuan, bukan hanya total milidetik.",
   "content": "<p class=\"mb-4\">INP hanya bilang interaksi lambat. Long Animation Frame (LoAF) memecah frame itu jadi skrip, style, dan layout yang bersalah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang observer sebelum klik</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> daftarkan PerformanceObserver dengan type long-animation-frame dan buffered true. Klik tombol yang lambat di pratinjau. Catat script name, sourceURL, dan duration pada entri terpanjang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cocokkan dengan interaksi</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan waktu startTime LoAF dengan interaksi di panel Performance. Perbaiki skrip yang blockingDuration-nya paling besar dulu. Simpan cuplikan sebelum dan sesudah di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Long animation frames API",
   "sourceUrl": "https://web.dev/articles/long-animation-frames",
   "sourceSnippet": "Long animation frames attribute main-thread work in a slow frame to specific scripts.",
   "source2": "MDN — PerformanceLongAnimationFrameTiming",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongAnimationFrameTiming",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read Long Animation Frames to Find the INP Culprit",
   "desc": "How to use Long Animation Frames in Clincoo so the script blocking a click is named, not just a total millisecond score.",
   "content": "<p class=\"mb-4\">INP only says an interaction was slow. A Long Animation Frame (LoAF) splits that frame into the script, style, and layout that caused it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Attach an observer before the click</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> register a PerformanceObserver with type long-animation-frame and buffered true. Click the slow button in preview. Note script name, sourceURL, and duration on the longest entry.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match it to the interaction</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare the LoAF startTime with the interaction in the Performance panel. Fix the script with the largest blockingDuration first. Keep before-and-after traces on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Long animation frames API",
   "sourceUrl": "https://web.dev/articles/long-animation-frames",
   "sourceSnippet": "Long animation frames attribute main-thread work in a slow frame to specific scripts.",
   "source2": "MDN — PerformanceLongAnimationFrameTiming",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongAnimationFrameTiming",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "inp-yield-scheduler-di-tengah-filter",
 "langs": {
  "id": {
   "title": "Cara Yield dengan scheduler.yield di Tengah Filter Besar",
   "desc": "Tata cara menyela filter Clincoo dengan scheduler.yield supaya klik berikutnya sempat digambar.",
   "content": "<p class=\"mb-4\">setTimeout 0 mengantri di task berikutnya, tetapi tidak selalu memberi jalan untuk paint. scheduler.yield menghentikan tugas dan mengizinkan frame digambar lebih dulu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Yield setelah umpan balik</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ubah status tombol, lalu await scheduler.yield jika ada. Lanjutkan filter dalam kelompok 50 item. Jika API belum ada, jatuhkan ke setTimeout 0. Jangan yield di dalam loop tanpa batas waktu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur ulang processing duration</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> rekam klik yang sama. Processing duration harus terpecah, dan presentation delay turun karena frame sempat dicat. Bandingkan angka di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Optimize INP",
   "sourceUrl": "https://web.dev/articles/optimize-inp",
   "sourceSnippet": "Yielding to the main thread lets the browser paint feedback before remaining work.",
   "source2": "MDN — scheduler.yield",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Scheduler/yield",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Yield with scheduler.yield in the Middle of a Large Filter",
   "desc": "How to pause a Clincoo filter with scheduler.yield so the next click can paint.",
   "content": "<p class=\"mb-4\">setTimeout 0 queues a later task, but it does not always let a paint happen. scheduler.yield pauses the task and lets a frame paint first.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Yield after feedback</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> update the button state, then await scheduler.yield when it exists. Continue the filter in batches of 50. If the API is missing, fall back to setTimeout 0. Do not yield inside an unbounded loop.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure processing duration again</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> record the same click. Processing duration should split, and presentation delay should drop because a frame can paint. Compare the numbers on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — Optimize INP",
   "sourceUrl": "https://web.dev/articles/optimize-inp",
   "sourceSnippet": "Yielding to the main thread lets the browser paint feedback before remaining work.",
   "source2": "MDN — scheduler.yield",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Scheduler/yield",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "inp-skrip-pihak-ketiga-tahan-klik",
 "langs": {
  "id": {
   "title": "Cara Temukan Skrip Pihak Ketiga yang Menahan Klik",
   "desc": "Tata cara mengisolasi tag pihak ketiga di Clincoo yang memperpanjang INP meski handler Anda sendiri pendek.",
   "content": "<p class=\"mb-4\">Widget analitik, chat, atau tag iklan bisa memasang listener di document dan menjalankan tugas panjang tepat saat pengguna mengklik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan dengan skrip dimatikan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> muat pratinjau dua kali: dengan dan tanpa skrip pihak ketiga. Jika INP jatuh saat skrip dilepas, catat URL skrip dari kolom Bottom-up di Performance. Tunda skrip itu sampai setelah load, atau pasang hanya di halaman yang memang butuh.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan blokir parser di kepala</h2><p class=\"mb-4\">Hindari script tanpa async atau defer di head. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> uji klik menu pada CPU 4x. Catatan perbaikan bisa ditulis di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> beserta nama skrip yang ditunda.</p>",
   "source": "web.dev — Optimize INP",
   "sourceUrl": "https://web.dev/articles/optimize-inp",
   "sourceSnippet": "Third-party scripts can add input delay and long tasks around interactions.",
   "source2": "Chrome DevTools — Performance features reference",
   "source2Url": "https://developer.chrome.com/docs/devtools/performance/reference",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Find a Third-Party Script That Holds a Click",
   "desc": "How to isolate a third-party tag in Clincoo that stretches INP even when your own handler is short.",
   "content": "<p class=\"mb-4\">An analytics widget, chat, or ad tag can attach a document listener and run a long task exactly when the user clicks.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare with scripts disabled</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> load the preview twice: with and without third-party scripts. If INP drops when they are removed, note the script URL in the Performance Bottom-up view. Delay that script until after load, or load it only on pages that need it.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not block the parser in the head</h2><p class=\"mb-4\">Avoid a script without async or defer in the head. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> click the menu at 4x CPU. Write the fix note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> with the name of the delayed script.</p>",
   "source": "web.dev — Optimize INP",
   "sourceUrl": "https://web.dev/articles/optimize-inp",
   "sourceSnippet": "Third-party scripts can add input delay and long tasks around interactions.",
   "source2": "Chrome DevTools — Performance features reference",
   "source2Url": "https://developer.chrome.com/docs/devtools/performance/reference",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
,
{
 "id": "inp-content-visibility-jangan-tahan-klik",
 "langs": {
  "id": {
   "title": "Cara Pakai content-visibility tanpa Menahan Klik Berikutnya",
   "desc": "Tata cara membatasi render Clincoo dengan content-visibility agar penghematan layout tidak menunda interaksi di dekat viewport.",
   "content": "<p class=\"mb-4\">content-visibility: auto melewatkan render di luar layar, tetapi elemen yang baru masuk viewport bisa memicu layout berat tepat saat diklik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri contain-intrinsic-size</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set content-visibility: auto hanya pada kartu di bawah lipatan, plus contain-intrinsic-size agar scrollbar tidak meloncat. Jangan pasang pada toolbar, menu, atau tombol yang sering diklik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji klik saat kartu muncul</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir lalu segera klik kartu yang baru terlihat. Jika presentation delay naik, kecilkan kelompok atau render kartu terdekat lebih awal. Simpan perbandingan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — content-visibility",
   "sourceUrl": "https://web.dev/articles/content-visibility",
   "sourceSnippet": "content-visibility lets the browser skip rendering offscreen content until it is needed.",
   "source2": "MDN — content-visibility",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use content-visibility without Holding the Next Click",
   "desc": "How to limit Clincoo rendering with content-visibility so the layout savings do not delay an interaction near the viewport.",
   "content": "<p class=\"mb-4\">content-visibility: auto skips offscreen rendering, but an element entering the viewport can force a heavy layout right when it is clicked.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set contain-intrinsic-size</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set content-visibility: auto only on cards below the fold, plus contain-intrinsic-size so the scrollbar does not jump. Do not put it on the toolbar, menu, or buttons that are clicked often.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test a click as the card appears</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll, then immediately click a card that just appeared. If presentation delay rises, shrink the batch or render nearby cards earlier. Keep the comparison on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "web.dev — content-visibility",
   "sourceUrl": "https://web.dev/articles/content-visibility",
   "sourceSnippet": "content-visibility lets the browser skip rendering offscreen content until it is needed.",
   "source2": "MDN — content-visibility",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "inp-listener-passive-yang-salah-tempat",
 "langs": {
  "id": {
   "title": "Cara Bedakan Listener Passive agar Tidak Menahan Klik",
   "desc": "Tata cara memakai passive pada scroll Clincoo tanpa memasangnya pada klik yang memang perlu preventDefault.",
   "content": "<p class=\"mb-4\">Listener touchstart atau wheel yang tidak passive memaksa browser menunggu handler sebelum menggulir. Listener yang salah tempat juga menunda interaksi di tombol.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Passive untuk scroll, bukan untuk submit</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan {passive:true} pada listener scroll, touchstart, dan wheel yang tidak memanggil preventDefault. Biarkan click dan submit tanpa passive jika Anda perlu membatalkan aksi. Jangan pasang listener di document untuk semua pointerdown.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek peringatan di konsol</h2><p class=\"mb-4\">Chrome menulis peringatan jika listener memblokir scroll. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> gulir lalu klik tombol di daftar panjang. Input delay harus turun setelah listener global dipindah ke elemen yang tepat. Catat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome Developers — Passive event listeners",
   "sourceUrl": "https://developer.chrome.com/blog/passive-event-listeners",
   "sourceSnippet": "Passive listeners tell the browser the handler will not cancel scrolling, so it need not wait.",
   "source2": "MDN — addEventListener options",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Tell Passive Listeners Apart so They Do Not Hold a Click",
   "desc": "How to use passive on Clincoo scroll without putting it on a click that really needs preventDefault.",
   "content": "<p class=\"mb-4\">A touchstart or wheel listener that is not passive forces the browser to wait for the handler before scrolling. A listener in the wrong place also delays a button interaction.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Passive for scroll, not for submit</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add {passive:true} on scroll, touchstart, and wheel listeners that do not call preventDefault. Leave click and submit non-passive if you must cancel the action. Do not attach a document listener for every pointerdown.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the console warning</h2><p class=\"mb-4\">Chrome logs a warning when a listener blocks scrolling. In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> scroll, then click a button in a long list. Input delay should drop after the global listener moves to the right element. Note it on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "Chrome Developers — Passive event listeners",
   "sourceUrl": "https://developer.chrome.com/blog/passive-event-listeners",
   "sourceSnippet": "Passive listeners tell the browser the handler will not cancel scrolling, so it need not wait.",
   "source2": "MDN — addEventListener options",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (a) { return a.id === item.id; })) list.push(item);
  });
})();

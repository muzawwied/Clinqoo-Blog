// Clincoo Docs — kategori Performa (7 Oktober 2026, 17:00 WIB) — tambah 5 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["performa"] = {
 "names": { "id": "Performa", "en": "Performance" },
 "articles": [
{
 "id": "performa-baca-lcp-di-panel-performance",
 "langs": {
  "id": {
   "title": "Cara Baca LCP di Panel Performance",
   "desc": "Tata cara membaca Largest Contentful Paint di DevTools supaya halaman Clincoo tidak menunggu elemen terbesar.",
   "content": "<p class=\"mb-4\">LCP lambat biasanya elemen terbesar di layar pertama, bukan seluruh halaman.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat elemen LCP</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka pratinjau, rekam panel Performance, lalu lihat entri LCP. Catat tag, ukuran, dan apakah itu gambar, heading, atau blok teks. Jangan optimalkan aset yang tidak muncul di rekaman itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ulangi di lebar mobile</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ulangi rekaman pada lebar ponsel. Jika elemen LCP berganti, catat keduanya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Perbaiki yang paling sering terlihat dulu, lalu ukur ulang sebelum menambah tugas lain.</p>",
   "source": "web.dev — Largest Contentful Paint",
   "sourceUrl": "https://web.dev/articles/lcp",
   "sourceSnippet": "LCP reports the render time of the largest image or text block visible in the viewport.",
   "source2": "MDN — Performance",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Read LCP in the Performance Panel",
   "desc": "How to read Largest Contentful Paint in DevTools so a Clincoo page does not wait on the largest element.",
   "content": "<p class=\"mb-4\">A slow LCP is usually the largest element in the first screen, not the whole page.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record the LCP element</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the preview, record the Performance panel, and read the LCP entry. Note the tag, the size, and whether it is an image, a heading, or a text block. Do not optimize an asset that does not appear in that recording.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Repeat at a mobile width</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> repeat the recording at a phone width. If the LCP element changes, record both on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Fix the one visitors see most often, then measure again before adding another task.</p>",
   "source": "web.dev — Largest Contentful Paint",
   "sourceUrl": "https://web.dev/articles/lcp",
   "sourceSnippet": "LCP reports the render time of the largest image or text block visible in the viewport.",
   "source2": "MDN — Performance",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "performa-tunda-skrip-bukan-kritis",
 "langs": {
  "id": {
   "title": "Cara Tunda Skrip yang Bukan Kritis",
   "desc": "Tata cara menunda skrip pihak ketiga di Clincoo supaya parser tidak berhenti sebelum konten utama tampil.",
   "content": "<p class=\"mb-4\">Skrip di head tanpa defer atau async menahan parser sampai berkas selesai diunduh.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tandai skrip yang boleh menunggu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> daftar skrip yang tidak menggambar layar pertama: analitik, widget chat, dan pemutar. Tambahkan defer pada skrip klasik, atau pindahkan ke akhir body. Jangan defer skrip yang memasang layout di atas lipatan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek urutan di Network</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Network, muat ulang, dan pastikan dokumen serta CSS selesai sebelum skrip tunda. Catat urutan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Jika halaman kosong sampai skrip selesai, kembalikan skrip itu ke jalur kritis.</p>",
   "source": "MDN — script defer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#defer",
   "sourceSnippet": "defer downloads the script during parsing and runs it after the document is parsed.",
   "source2": "web.dev — Optimize long tasks",
   "source2Url": "https://web.dev/articles/optimize-long-tasks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Defer a Non-Critical Script",
   "desc": "How to defer a third-party script in Clincoo so the parser does not stop before the main content paints.",
   "content": "<p class=\"mb-4\">A script in the head without defer or async blocks the parser until the file finishes downloading.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mark scripts that can wait</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> list scripts that do not paint the first screen: analytics, a chat widget, and a player. Add defer on a classic script, or move it to the end of the body. Do not defer a script that sets layout above the fold.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the order in Network</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Network, reload, and confirm the document and CSS finish before the deferred script. Record the order on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. If the page stays blank until that script finishes, put it back on the critical path.</p>",
   "source": "MDN — script defer",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#defer",
   "sourceSnippet": "defer downloads the script during parsing and runs it after the document is parsed.",
   "source2": "web.dev — Optimize long tasks",
   "source2Url": "https://web.dev/articles/optimize-long-tasks",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "performa-pecah-long-task-main-thread",
 "langs": {
  "id": {
   "title": "Cara Pecah Long Task di Main Thread",
   "desc": "Tata cara memecah tugas JavaScript panjang di Clincoo supaya ketukan dan gulir tidak macet.",
   "content": "<p class=\"mb-4\">Long task di main thread membuat klik terasa telat karena peramban tidak bisa menggambar bingkai baru.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Temukan blok di atas 50 ms</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> rekam Performance dan saring tugas lebih dari 50 ms. Catat fungsi pemicu: loop daftar, parse JSON besar, atau hitung layout berulang. Jangan memecah kode yang hanya berjalan sekali saat build.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bagi pekerjaan lalu ukur ulang</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> pecah pekerjaan menjadi kelompok kecil, simpan, lalu rekam lagi. Bandingkan durasi tugas dengan catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Berhenti saat tugas terpanjang sudah di bawah ambang yang kamu catat.</p>",
   "source": "web.dev — Optimize long tasks",
   "sourceUrl": "https://web.dev/articles/optimize-long-tasks",
   "sourceSnippet": "Tasks longer than 50 milliseconds can delay input and the next paint.",
   "source2": "MDN — Long animation frames",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Performance_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Split a Long Task on the Main Thread",
   "desc": "How to split a long JavaScript task in Clincoo so taps and scrolling do not stall.",
   "content": "<p class=\"mb-4\">A long task on the main thread makes a click feel late because the browser cannot paint a new frame.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Find the block over 50 ms</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> record Performance and filter tasks over 50 ms. Note the triggering function: a list loop, a large JSON parse, or repeated layout reads. Do not split code that only runs once at build time.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Split the work, then measure again</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> split the work into small batches, save, and record again. Compare the task duration with the note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Stop when the longest task is under the threshold you recorded.</p>",
   "source": "web.dev — Optimize long tasks",
   "sourceUrl": "https://web.dev/articles/optimize-long-tasks",
   "sourceSnippet": "Tasks longer than 50 milliseconds can delay input and the next paint.",
   "source2": "MDN — Long animation frames",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Performance_API",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "performa-beri-header-cache-aset-statis",
 "langs": {
  "id": {
   "title": "Cara Beri Header Cache pada Aset Statis",
   "desc": "Tata cara menyetel cache aset statis Clincoo supaya kunjungan kedua tidak mengunduh CSS dan gambar yang sama.",
   "content": "<p class=\"mb-4\">Tanpa cache, setiap muat ulang mengunduh CSS, font, dan gambar yang tidak berubah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bedakan aset berversi dan HTML</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> beri nama berkas berversi atau query versi pada CSS dan gambar. Setel HTML agar tidak disimpan lama, dan aset berversi agar boleh disimpan. Jangan men-cache halaman yang memuat data akun.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dari Network</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> muat dua kali, lalu lihat kolom Size di Network. Kunjungan kedua harus memakai cache untuk aset berversi. Catat header yang aktif di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebelum mengubah nama berkas.</p>",
   "source": "MDN — HTTP caching",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
   "sourceSnippet": "Cache headers tell the browser how long a response can be reused.",
   "source2": "web.dev — HTTP caching",
   "source2Url": "https://web.dev/articles/http-cache",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set a Cache Header on Static Assets",
   "desc": "How to set caching for Clincoo static assets so a second visit does not download the same CSS and images.",
   "content": "<p class=\"mb-4\">Without caching, every reload downloads CSS, fonts, and images that did not change.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Separate versioned assets from HTML</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> version file names or add a version query on CSS and images. Keep HTML short-lived, and allow versioned assets to be stored. Do not cache a page that includes account data.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test it in Network</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> load twice, then read the Size column in Network. The second visit should use the cache for versioned assets. Record the active header on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> before renaming files.</p>",
   "source": "MDN — HTTP caching",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
   "sourceSnippet": "Cache headers tell the browser how long a response can be reused.",
   "source2": "web.dev — HTTP caching",
   "source2Url": "https://web.dev/articles/http-cache",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "performa-hindari-layout-thrashing",
 "langs": {
  "id": {
   "title": "Cara Hindari Layout Thrashing Baca-Tulis",
   "desc": "Tata cara memisahkan pembacaan dan penulisan layout di Clincoo supaya loop tidak memaksa reflow berulang.",
   "content": "<p class=\"mb-4\">Membaca offsetHeight lalu mengubah style di dalam loop memaksa peramban menghitung layout berulang kali.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kumpulkan ukuran dulu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> cari loop yang membaca offsetWidth atau getBoundingClientRect lalu langsung menulis style. Pindahkan semua pembacaan ke daftar dulu. Jangan membaca ukuran elemen yang baru saja kamu ubah di baris sebelumnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis perubahan dalam satu giliran</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> rekam Performance dan bandingkan waktu Recalculate Style sebelum dan sesudah. Catat fungsi pemicu di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Jika reflow masih panjang, kurangi jumlah elemen yang diukur, bukan hanya memindahkan baris.</p>",
   "source": "MDN — Forced synchronous layout",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Glossary/Reflow",
   "sourceSnippet": "A reflow happens when the browser must recalculate layout after a style or content change.",
   "source2": "web.dev — Avoid large, complex layouts",
   "source2Url": "https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Avoid Read-Write Layout Thrashing",
   "desc": "How to separate layout reads and writes in Clincoo so a loop does not force repeated reflow.",
   "content": "<p class=\"mb-4\">Reading offsetHeight and then changing style inside a loop forces the browser to calculate layout again and again.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Collect sizes first</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> find a loop that reads offsetWidth or getBoundingClientRect and then writes style immediately. Move every read into a list first. Do not read the size of an element you just changed on the previous line.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write changes in one turn</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> record Performance and compare Recalculate Style time before and after. Note the triggering function on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. If reflow is still long, measure fewer elements, not only move the lines.</p>",
   "source": "MDN — Forced synchronous layout",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Glossary/Reflow",
   "sourceSnippet": "A reflow happens when the browser must recalculate layout after a style or content change.",
   "source2": "web.dev — Avoid large, complex layouts",
   "source2Url": "https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
,
{
 "id": "performa-ukur-inp-interaksi-lambat",
 "langs": {
  "id": {
   "title": "Cara Ukur INP dari Interaksi Lambat",
   "desc": "Tata cara mengukur Interaction to Next Paint di halaman Clincoo supaya klik dan ketukan tidak terasa macet.",
   "content": "<p class=\"mb-4\">INP mencatat penundaan dari klik, ketukan, atau tombol keyboard sampai frame berikutnya tergambar. Satu interaksi lambat sudah cukup membuat skor buruk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kenali interaksi yang diukur</h2><p class=\"mb-4\">INP mencatat penundaan dari klik, ketukan, atau tombol keyboard sampai frame berikutnya tergambar. Satu interaksi lambat sudah cukup membuat skor buruk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Rekam di panel Performance</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> buka pratinjau, mulai rekaman, lalu klik tombol yang terasa lambat. Di jalur Interactions lihat durasi input delay, processing, dan presentation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pecah pekerjaan di handler</h2><p class=\"mb-4\">Jika processing panjang, pindahkan hitungan berat ke setelah paint dengan requestAnimationFrame atau setTimeout 0. Jangan menunggu seluruh daftar selesai sebelum umpan balik visual.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ulangi di perangkat lambat</h2><p class=\"mb-4\">Uji di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengan CPU throttle 4x. Catat interaksi terburuk, bukan rata-rata. Perbaiki yang melewati 200 ms lebih dulu.</p>",
   "source": "web.dev — Interaction to Next Paint",
   "sourceUrl": "https://web.dev/articles/inp",
   "sourceSnippet": "INP assesses responsiveness by observing the latency of all click, tap, and keyboard interactions.",
   "source2": "Chrome DevTools — Performance",
   "source2Url": "https://developer.chrome.com/docs/devtools/performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Measure INP from a Slow Interaction",
   "desc": "How to measure Interaction to Next Paint on a Clincoo page so clicks and taps do not feel stuck.",
   "content": "<p class=\"mb-4\">INP records the delay from a click, tap, or keyboard action until the next frame is painted. One slow interaction is enough to hurt the score.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Know which interaction is measured</h2><p class=\"mb-4\">INP records the delay from a click, tap, or keyboard action until the next frame is painted. One slow interaction is enough to hurt the score.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Record in the Performance panel</h2><p class=\"mb-4\">On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> open the preview, start a recording, then click the button that feels slow. On the Interactions track, read input delay, processing, and presentation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Split work in the handler</h2><p class=\"mb-4\">If processing is long, move heavy work until after paint with requestAnimationFrame or a 0 ms timeout. Do not wait for the whole list before visual feedback.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Repeat on a slow device</h2><p class=\"mb-4\">Test on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> with 4x CPU throttle. Note the worst interaction, not the average. Fix anything over 200 ms first.</p>",
   "source": "web.dev — Interaction to Next Paint",
   "sourceUrl": "https://web.dev/articles/inp",
   "sourceSnippet": "INP assesses responsiveness by observing the latency of all click, tap, and keyboard interactions.",
   "source2": "Chrome DevTools — Performance",
   "source2Url": "https://developer.chrome.com/docs/devtools/performance",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "performa-tunda-iframe-pihak-ketiga",
 "langs": {
  "id": {
   "title": "Cara Tunda Iframe Pihak Ketiga",
   "desc": "Tata cara menunda iframe sematan di Clincoo supaya video atau peta tidak memblokir layar pertama.",
   "content": "<p class=\"mb-4\">Iframe peta, video, atau widget chat sering menarik skrip berat sebelum pengunjung membaca judul. Itu memperlambat LCP dan main thread.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan muat iframe di atas lipatan</h2><p class=\"mb-4\">Iframe peta, video, atau widget chat sering menarik skrip berat sebelum pengunjung membaca judul. Itu memperlambat LCP dan main thread.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti dengan poster dulu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tampilkan gambar poster dan tombol Putar. Pasang iframe hanya setelah klik, atau saat elemen mendekati viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tambahkan loading lazy</h2><p class=\"mb-4\">Untuk sematan di bawah lipatan, beri atribut loading=lazy dan tentukan width serta height agar layout tidak melonjak saat iframe masuk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Catat domain yang ikut termuat</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka Network, filter ke domain pihak ketiga, lalu pastikan tidak ada permintaan sebelum interaksi. Simpan daftar domain di komentar proyek.</p>",
   "source": "web.dev — Third-party embeds",
   "sourceUrl": "https://web.dev/articles/embed-best-practices",
   "sourceSnippet": "Third-party embeds can delay page load; load them on interaction or when they are near the viewport.",
   "source2": "MDN — iframe loading",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Delay a Third-Party Iframe",
   "desc": "How to delay an embed iframe in Clincoo so a video or map does not block the first screen.",
   "content": "<p class=\"mb-4\">A map, video, or chat iframe often pulls heavy scripts before the visitor reads the heading. That slows LCP and the main thread.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not load the iframe above the fold</h2><p class=\"mb-4\">A map, video, or chat iframe often pulls heavy scripts before the visitor reads the heading. That slows LCP and the main thread.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Show a poster first</h2><p class=\"mb-4\">On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> show a poster image and a Play button. Insert the iframe only after the click, or when the element nears the viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Add loading lazy</h2><p class=\"mb-4\">For embeds below the fold, set loading=lazy and give width and height so layout does not jump when the iframe arrives.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Note the domains that load</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open Network, filter third-party domains, and confirm there is no request before the interaction. Keep the domain list in a project comment.</p>",
   "source": "web.dev — Third-party embeds",
   "sourceUrl": "https://web.dev/articles/embed-best-practices",
   "sourceSnippet": "Third-party embeds can delay page load; load them on interaction or when they are near the viewport.",
   "source2": "MDN — iframe loading",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "performa-fetchpriority-gambar-lcp",
 "langs": {
  "id": {
   "title": "Cara Pasang fetchpriority pada Gambar LCP",
   "desc": "Tata cara menaikkan prioritas unduhan gambar LCP di Clincoo tanpa mem-preload semua aset.",
   "content": "<p class=\"mb-4\">fetchpriority=high hanya untuk elemen terbesar di layar pertama. Memakai high di banyak gambar membuat prioritas kembali rata.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih satu gambar saja</h2><p class=\"mb-4\">fetchpriority=high hanya untuk elemen terbesar di layar pertama. Memakai high di banyak gambar membuat prioritas kembali rata.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang di tag gambar</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan fetchpriority=high dan loading=eager pada gambar hero. Jangan gabungkan dengan loading=lazy pada elemen yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hindari preload ganda</h2><p class=\"mb-4\">Jika sudah ada link rel=preload untuk gambar itu, jangan tambah fetchpriority lagi. Dua isyarat bisa membuat browser mengunduh dua kali.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Bandingkan waterfall</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> rekam Network. Gambar LCP harus mulai lebih awal dari ikon dan gambar kartu di bawah. Jika tidak, periksa apakah CSS menyembunyikan elemen itu.</p>",
   "source": "web.dev — fetchpriority",
   "sourceUrl": "https://web.dev/articles/fetch-priority",
   "sourceSnippet": "fetchpriority lets you hint that a resource is more or less important than others of the same type.",
   "source2": "MDN — HTMLImageElement fetchPriority",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Set fetchpriority on the LCP Image",
   "desc": "How to raise the download priority of the Clincoo LCP image without preloading every asset.",
   "content": "<p class=\"mb-4\">fetchpriority=high is for the largest element on the first screen. Using high on many images flattens priority again.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pick only one image</h2><p class=\"mb-4\">fetchpriority=high is for the largest element on the first screen. Using high on many images flattens priority again.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set it on the image tag</h2><p class=\"mb-4\">On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add fetchpriority=high and loading=eager on the hero image. Do not combine it with loading=lazy on the same element.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Avoid a double preload</h2><p class=\"mb-4\">If a link rel=preload already points at that image, do not also add fetchpriority. Two hints can make the browser download it twice.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Compare the waterfall</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> record Network. The LCP image should start earlier than icons and card images below. If not, check whether CSS hides that element.</p>",
   "source": "web.dev — fetchpriority",
   "sourceUrl": "https://web.dev/articles/fetch-priority",
   "sourceSnippet": "fetchpriority lets you hint that a resource is more or less important than others of the same type.",
   "source2": "MDN — HTMLImageElement fetchPriority",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "performa-content-visibility-bawah-lipatan",
 "langs": {
  "id": {
   "title": "Cara Pakai content-visibility di Bawah Lipatan",
   "desc": "Tata cara menunda render bagian bawah halaman Clincoo dengan content-visibility tanpa merusak scrollbar.",
   "content": "<p class=\"mb-4\">content-visibility: auto melewatkan layout bagian yang belum terlihat. Jangan pasang pada header, hero, atau elemen yang langsung di viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Terapkan hanya di section jauh</h2><p class=\"mb-4\">content-visibility: auto melewatkan layout bagian yang belum terlihat. Jangan pasang pada header, hero, atau elemen yang langsung di viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Beri contain-intrinsic-size</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan contain-intrinsic-size perkiraan tinggi section, misalnya 720px. Tanpa itu scrollbar melonjak saat pengguna menggulir.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan sembunyikan konten interaktif</h2><p class=\"mb-4\">Form, dialog, dan tautan skip tetap harus bisa difokus. Jika section berisi input, jangan tunda render sampai fokus hilang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ukur ulang waktu render</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan Rendering di panel Performance sebelum dan sesudah. Waktu style dan layout layar pertama harus turun, bukan hanya total node.</p>",
   "source": "web.dev — content-visibility",
   "sourceUrl": "https://web.dev/articles/content-visibility",
   "sourceSnippet": "content-visibility lets the browser skip rendering work for off-screen content until it is needed.",
   "source2": "MDN — content-visibility",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How to Use content-visibility Below the Fold",
   "desc": "How to defer rendering of below-the-fold Clincoo sections with content-visibility without breaking the scrollbar.",
   "content": "<p class=\"mb-4\">content-visibility: auto skips layout for sections that are not visible yet. Do not put it on the header, hero, or anything already in the viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Apply it only to far sections</h2><p class=\"mb-4\">content-visibility: auto skips layout for sections that are not visible yet. Do not put it on the header, hero, or anything already in the viewport.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Set contain-intrinsic-size</h2><p class=\"mb-4\">On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add a guessed section height, for example 720px, with contain-intrinsic-size. Without it the scrollbar jumps while scrolling.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not hide interactive content</h2><p class=\"mb-4\">Forms, dialogs, and skip links must stay focusable. If a section contains an input, do not defer rendering until focus is lost.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Measure render time again</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare Rendering in the Performance panel before and after. First-screen style and layout time should drop, not only the total node count.</p>",
   "source": "web.dev — content-visibility",
   "sourceUrl": "https://web.dev/articles/content-visibility",
   "sourceSnippet": "content-visibility lets the browser skip rendering work for off-screen content until it is needed.",
   "source2": "MDN — content-visibility",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
},
{
 "id": "performa-preload-font-yang-terpakai",
 "langs": {
  "id": {
   "title": "Cara Preload Font yang Memang Terpakai",
   "desc": "Tata cara preload satu file font kritis di Clincoo supaya teks tidak menunggu keluarga yang tidak tampil.",
   "content": "<p class=\"mb-4\">Setiap weight adalah file terpisah. Preload hanya weight yang dipakai judul layar pertama. Weight lain biarkan font-display swap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Preload satu file, bukan satu keluarga</h2><p class=\"mb-4\">Setiap weight adalah file terpisah. Preload hanya weight yang dipakai judul layar pertama. Weight lain biarkan font-display swap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pasang link di head</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tambahkan link rel=preload as=font type=font/woff2 crossorigin. Tanpa crossorigin browser mengunduh dua kali.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cocokkan nama file</h2><p class=\"mb-4\">URL preload harus sama persis dengan url() di @font-face, termasuk query. Perbedaan kecil membuat preload sia-sia.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di Network</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> filter Font. File preload harus mulai sebelum CSS selesai, dan tidak ada 404. Jika teks tetap kosong, periksa unicode-range.</p>",
   "source": "web.dev — Preload critical assets",
   "sourceUrl": "https://web.dev/articles/preload-critical-assets",
   "sourceSnippet": "Preload a late-discovered critical resource so the browser starts the download earlier.",
   "source2": "MDN — rel=preload",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Preload Only the Font You Use",
   "desc": "How to preload one critical font file in Clincoo so text does not wait on a family that never shows.",
   "content": "<p class=\"mb-4\">Each weight is a separate file. Preload only the weight used by the first-screen heading. Leave other weights on font-display swap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Preload one file, not a family</h2><p class=\"mb-4\">Each weight is a separate file. Preload only the weight used by the first-screen heading. Leave other weights on font-display swap.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Put the link in the head</h2><p class=\"mb-4\">On <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> add link rel=preload as=font type=font/woff2 crossorigin. Without crossorigin the browser downloads the file twice.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the file name</h2><p class=\"mb-4\">The preload URL must match the @font-face url() exactly, including the query. A small difference wastes the preload.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check Network</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> filter Font. The preloaded file should start before CSS finishes, with no 404. If text stays blank, check unicode-range.</p>",
   "source": "web.dev — Preload critical assets",
   "sourceUrl": "https://web.dev/articles/preload-critical-assets",
   "sourceSnippet": "Preload a late-discovered critical resource so the browser starts the download earlier.",
   "source2": "MDN — rel=preload",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};

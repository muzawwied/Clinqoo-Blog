// Clincoo Docs — kategori Performa (7 Oktober 2026, 16:00 WIB) — 5 artikel baru
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
]
};

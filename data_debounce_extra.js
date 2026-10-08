// Clincoo Docs — tambah 5 artikel Debounce (8 Oktober 2026, 08:00 WIB)
(function () {
  if (!window.countryDataFiles || !window.countryDataFiles.debounce) return;
  var list = window.countryDataFiles.debounce.articles;
  var extra = [
 {
  "id": "debounce-validasi-input-saat-berhenti-ketik",
  "langs": {
   "id": {
    "title": "Cara Debounce Validasi Input agar Tidak Mengecek Tiap Huruf",
    "desc": "Tata cara menunda validasi field di Clincoo sampai pengguna berhenti mengetik.",
    "content": "<p class=\"mb-4\">Validasi pada setiap huruf membuat border merah berkedip dan pesan error muncul sebelum pengguna selesai menulis. Debounce menunggu jeda singkat, lalu baru memeriksa nilai.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jeda 300 ms pada input, langsung pada blur</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pasang timer pada event input. Setiap ketikan, clearTimeout lalu set timer 300 ms yang menjalankan cek panjang, format email, atau pola. Event blur tetap memvalidasi langsung supaya pengguna yang pindah field tidak menunggu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan tampilkan error di field kosong yang belum disentuh</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tandai field dirty setelah input pertama. Pesan error hanya muncul jika dirty dan jeda sudah lewat. Submit tetap memeriksa semua field sekaligus. Catat pola ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — Constraint validation",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation",
    "sourceSnippet": "Validasi bawaan form berjalan saat submit atau saat checkValidity dipanggil, bukan wajib pada setiap huruf.",
    "source2": "HTML spec — input event",
    "source2Url": "https://html.spec.whatwg.org/multipage/indices.html#event-input",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Debounce Input Validation So It Does Not Check Every Letter",
    "desc": "How to delay Clincoo field validation until the user stops typing.",
    "content": "<p class=\"mb-4\">Validating on every letter makes the red border flicker and shows an error before the user finishes. Debounce waits a short pause, then checks the value.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">300 ms on input, immediate on blur</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> attach a timer to the input event. On each keystroke, clearTimeout and set a 300 ms timer that checks length, email format, or a pattern. Blur still validates immediately so a user who leaves the field does not wait.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not show an error on an untouched empty field</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> mark the field dirty after the first input. Show the error only if it is dirty and the pause has elapsed. Submit still checks every field at once. Note this pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — Constraint validation",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation",
    "sourceSnippet": "Validasi bawaan form berjalan saat submit atau saat checkValidity dipanggil, bukan wajib pada setiap huruf.",
    "source2": "HTML spec — input event",
    "source2Url": "https://html.spec.whatwg.org/multipage/indices.html#event-input",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "debounce-simpan-draf-otomatis",
  "langs": {
   "id": {
    "title": "Cara Debounce Simpan Draf Otomatis agar Tidak Menulis Tiap Ketikan",
    "desc": "Tata cara menunda simpan draf di Clincoo sampai pengguna berhenti mengubah teks.",
    "content": "<p class=\"mb-4\">Menyimpan draf pada setiap huruf membebani penyimpanan dan bisa menimpa versi yang sedang dikirim. Debounce menyimpan sekali setelah jeda tenang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jeda 800–1200 ms, lalu satu tulis</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> reset timer tiap perubahan editor. Saat timer jalan, tulis draf ke penyimpanan lokal atau antrean simpan. Jika simpan sebelumnya belum selesai, tandai dirty dan ulangi setelah selesai, jangan menumpuk permintaan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Flush saat pindah halaman</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> dengarkan beforeunload dan visibilitychange. Jika timer masih menunggu, simpan segera. Tampilkan status tersimpan setelah tulis berhasil. Pola jedanya dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — setTimeout",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout",
    "sourceSnippet": "setTimeout menjadwalkan kerja setelah jeda; clearTimeout membatalkan jadwal jika pengguna masih mengetik.",
    "source2": "MDN — visibilitychange",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   },
   "en": {
    "title": "How to Debounce Autosave So It Does Not Write on Every Keystroke",
    "desc": "How to delay a Clincoo draft save until the user stops changing the text.",
    "content": "<p class=\"mb-4\">Saving a draft on every letter strains storage and can overwrite a write still in flight. Debounce saves once after a quiet pause.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">800–1200 ms pause, then one write</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> reset the timer on each editor change. When it fires, write the draft to local storage or a save queue. If a previous save is still running, mark dirty and retry after it finishes instead of stacking requests.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Flush when leaving the page</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> listen for beforeunload and visibilitychange. If a timer is still pending, save immediately. Show a saved status only after the write succeeds. Record the pause on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — setTimeout",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout",
    "sourceSnippet": "setTimeout menjadwalkan kerja setelah jeda; clearTimeout membatalkan jadwal jika pengguna masih mengetik.",
    "source2": "MDN — visibilitychange",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   }
  }
 },
 {
  "id": "debounce-resize-jendela-bukan-tiap-piksel",
  "langs": {
   "id": {
    "title": "Cara Debounce Resize Jendela agar Layout Tidak Dihitung Tiap Piksel",
    "desc": "Tata cara menunda hitung ulang layout di Clincoo saat jendela diubah ukurannya.",
    "content": "<p class=\"mb-4\">Event resize bisa puluhan kali saat pengguna menyeret tepi jendela. Mengukur layout pada tiap event membuat halaman tersendat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tunggu jeda, baru ukur</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pasang debounce 150 ms pada resize. Di dalam callback, baca lebar kontainer sekali lalu terapkan kelas atau kolom. Jangan baca offsetWidth berkali-kali di loop yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Utamakan CSS, debounce hanya untuk ukuran JS</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> biarkan grid dan flex menyesuaikan lewat CSS. Debounce hanya jika skrip harus memindah panel atau menghitung tinggi editor. Lepas listener saat halaman ditutup. Catatan ukuran ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — Window resize",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event",
    "sourceSnippet": "Event resize dipicu saat jendela diubah ukurannya dan dapat terjadi berulang selama penyeretan.",
    "source2": "web.dev — Avoid large layout shifts",
    "source2Url": "https://web.dev/articles/optimize-cls",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Debounce Window Resize So Layout Is Not Measured Every Pixel",
    "desc": "How to delay a Clincoo layout recalculation while the window is being resized.",
    "content": "<p class=\"mb-4\">Resize can fire dozens of times while the user drags the window edge. Measuring layout on every event makes the page stutter.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Wait for a pause, then measure</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> debounce resize by 150 ms. Inside the callback, read the container width once, then apply a class or column count. Do not read offsetWidth repeatedly in the same loop.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Prefer CSS; debounce only JS measurements</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> let grid and flex adapt in CSS. Debounce only if script must move a panel or measure editor height. Remove the listener when the page closes. Size notes live on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — Window resize",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event",
    "sourceSnippet": "Event resize dipicu saat jendela diubah ukurannya dan dapat terjadi berulang selama penyeretan.",
    "source2": "web.dev — Avoid large layout shifts",
    "source2Url": "https://web.dev/articles/optimize-cls",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 },
 {
  "id": "debounce-filter-daftar-lokal",
  "langs": {
   "id": {
    "title": "Cara Debounce Filter Daftar Lokal agar UI Tidak Berkedip",
    "desc": "Tata cara menunda penyaringan daftar di Clincoo sampai ketikan pengguna berhenti.",
    "content": "<p class=\"mb-4\">Menyaring ratusan kartu pada setiap huruf memaksa browser menggambar ulang terus-menerus. Debounce memberi jeda lalu menyaring sekali.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Saring setelah 200 ms, jangan sembunyikan satu per satu</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> simpan daftar asli di memori. Saat timer jalan, buat daftar hasil lalu ganti isi kontainer sekali. Hindari mengubah style display tiap item di dalam loop yang memicu reflow berulang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kosongkan query berarti tampilkan semua</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jika kotak dikosongkan, batalkan timer dan tampilkan daftar penuh segera. Samakan huruf kecil dan abaikan spasi tepi. Pola filternya ada di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — DocumentFragment",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment",
    "sourceSnippet": "DocumentFragment menampung node sementara sehingga penyisipan ke dokumen bisa dilakukan sekali.",
    "source2": "web.dev — Optimize INP",
    "source2Url": "https://web.dev/articles/optimize-inp",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   },
   "en": {
    "title": "How to Debounce a Local List Filter So the UI Does Not Flicker",
    "desc": "How to delay a Clincoo list filter until the user stops typing.",
    "content": "<p class=\"mb-4\">Filtering hundreds of cards on every letter forces the browser to repaint constantly. Debounce waits, then filters once.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Filter after 200 ms; do not hide items one by one</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep the original list in memory. When the timer fires, build the result list and replace the container once. Avoid setting display on each item inside a loop that triggers repeated reflow.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">An empty query means show everything</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> if the box is cleared, cancel the timer and show the full list immediately. Compare lowercase and trim edges. The filter pattern is on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — DocumentFragment",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment",
    "sourceSnippet": "DocumentFragment menampung node sementara sehingga penyisipan ke dokumen bisa dilakukan sekali.",
    "source2": "web.dev — Optimize INP",
    "source2Url": "https://web.dev/articles/optimize-inp",
    "source3": "Clincoo App",
    "source3Url": "https://app.clincoo.buzz/"
   }
  }
 },
 {
  "id": "debounce-abaikan-composition-ime",
  "langs": {
   "id": {
    "title": "Cara Jangan Debounce di Tengah Composition IME",
    "desc": "Tata cara menunda aksi ketikan di Clincoo tanpa memotong input bahasa yang sedang disusun.",
    "content": "<p class=\"mb-4\">Input bahasa Jepang, Tionghoa, atau Korea mengirim event input saat suku kata masih disusun. Menjalankan fetch atau validasi di tengah composition memotong teks yang belum jadi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tahan timer selama composing</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set bendera pada compositionstart dan lepas pada compositionend. Jika bendera aktif, jangan jadwalkan debounce. Setelah compositionend, baru mulai timer 250 ms lalu jalankan cari atau validasi.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji dengan keyboard non-Latin</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ketik lewat IME dan pastikan hasil tidak dikirim sebelum kandidat dipilih. Keyboard Latin tetap memakai debounce biasa. Langkah ujinya dicatat di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — compositionstart",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event",
    "sourceSnippet": "compositionstart menandai awal penyusunan teks lewat IME, sebelum karakter final masuk ke field.",
    "source2": "MDN — compositionend",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   },
   "en": {
    "title": "How to Avoid Debouncing in the Middle of an IME Composition",
    "desc": "How to delay a Clincoo keystroke action without cutting off text still being composed.",
    "content": "<p class=\"mb-4\">Japanese, Chinese, or Korean input fires input events while a syllable is still being composed. Running a fetch or validation mid-composition cuts off unfinished text.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hold the timer while composing</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> set a flag on compositionstart and clear it on compositionend. If the flag is on, do not schedule a debounce. After compositionend, start a 250 ms timer, then run search or validation.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test with a non-Latin keyboard</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> type through an IME and confirm the result is not sent before a candidate is chosen. A Latin keyboard still uses a normal debounce. Test steps are on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
    "source": "MDN — compositionstart",
    "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event",
    "sourceSnippet": "compositionstart menandai awal penyusunan teks lewat IME, sebelum karakter final masuk ke field.",
    "source2": "MDN — compositionend",
    "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event",
    "source3": "Clincoo Editor",
    "source3Url": "https://editor.clincoo.buzz/"
   }
  }
 }
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();

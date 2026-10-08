// Clincoo Docs — kategori Komentar (9 Oktober 2026, 02:00 WIB) — 7 artikel
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
window.countryDataFiles["komentar"] = {
 "names": { "id": "Komentar", "en": "Comments" },
 "articles": [
{
 "id": "komentar-tulis-alasan-bukan-mengulang-kode",
 "langs": {
  "id": {
   "title": "Cara Tulis Komentar yang Menjelaskan Alasan, Bukan Mengulang Kode",
   "desc": "Tata cara menulis komentar singkat di Clincoo yang menjelaskan mengapa sebuah baris ada, bukan apa yang sudah tertulis di kode.",
   "content": "<p class=\"mb-4\">Komentar yang mengulang nama fungsi cepat basi. Komentar yang berguna menjelaskan batasan, tiket, atau alasan yang tidak terlihat dari kode.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis kenapa, bukan apa</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> sisakan komentar hanya pada baris yang mengejutkan: timeout yang sengaja 300ms, urutan CSS yang menimpa library, atau cek null karena API lama. Satu kalimat cukup. Hapus komentar yang hanya menyalin nama variabel.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tinjau saat baca ulang</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka file setelah satu hari. Jika komentar tidak membantu Anda mengingat keputusan, hapus. Simpan contoh komentar yang lolos tinjauan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> sebagai patokan tim.</p>",
   "source": "Google — Code Review Comments",
   "sourceUrl": "https://google.github.io/eng-practices/review/reviewer/comments.html",
   "sourceSnippet": "Comments should explain why the code is the way it is, not narrate what the next line already states.",
   "source2": "MDN — JavaScript comments",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Write Comments That Explain Why, Not What the Code Already Says",
   "desc": "How to write a short Clincoo comment that records why a line exists instead of repeating the code.",
   "content": "<p class=\"mb-4\">A comment that repeats a function name goes stale quickly. A useful comment records a constraint, a ticket, or a reason the code does not show.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write why, not what</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> keep a comment only on a surprising line: a timeout intentionally set to 300ms, a CSS order that overrides a library, or a null check for an old API. One sentence is enough. Delete comments that only copy a variable name.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Review on a second read</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> reopen the file a day later. If the comment does not help you remember the decision, delete it. Save a comment that survived review on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> as the team example.</p>",
   "source": "Google — Code Review Comments",
   "sourceUrl": "https://google.github.io/eng-practices/review/reviewer/comments.html",
   "sourceSnippet": "Comments should explain why the code is the way it is, not narrate what the next line already states.",
   "source2": "MDN — JavaScript comments",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "komentar-tandai-todo-supaya-mudah-dicari",
 "langs": {
  "id": {
   "title": "Cara Tandai TODO agar Mudah Dicari sebelum Rilis",
   "desc": "Tata cara menulis TODO dengan pemilik dan alasan supaya pekerjaan tertunda tidak hilang di editor Clincoo.",
   "content": "<p class=\"mb-4\">TODO polos mudah tertinggal sampai produksi. Penanda yang bisa dicari memaksa Anda menyelesaikan atau menunda dengan sadar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pakai format tetap</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis TODO(nama): alasan singkat, misalnya TODO(rifai): ganti warna setelah token gelap siap. Jangan campur FIXME dan XXX untuk hal yang sama. Satu kata kunci cukup untuk pencarian.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cari sebelum deploy</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cari kata TODO di seluruh proyek sebelum rilis. Setiap sisa harus punya tiket atau dihapus. Catat hasil pencarian di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya rilis berikutnya mengulang langkah yang sama.</p>",
   "source": "MDN — JavaScript comments",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments",
   "sourceSnippet": "JavaScript comments are ignored by the engine, so a TODO stays in source until someone searches and removes it.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Mark a TODO So It Is Easy to Find Before Release",
   "desc": "How to write a TODO with an owner and a reason so leftover work does not disappear in the Clincoo editor.",
   "content": "<p class=\"mb-4\">A bare TODO is easy to ship. A searchable marker forces you to finish the work or postpone it on purpose.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use one fixed format</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write TODO(name): short reason, for example TODO(rifai): swap the color after the dark token is ready. Do not mix FIXME and XXX for the same kind of note. One keyword is enough to search.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Search before deploy</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> search the project for TODO before release. Each hit needs a ticket or a deletion. Record the search result on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next release repeats the same step.</p>",
   "source": "MDN — JavaScript comments",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments",
   "sourceSnippet": "JavaScript comments are ignored by the engine, so a TODO stays in source until someone searches and removes it.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "komentar-bedakan-fixme-hack-dan-note",
 "langs": {
  "id": {
   "title": "Cara Bedakan FIXME, HACK, dan NOTE supaya Catatan Tidak Campur",
   "desc": "Tata cara memakai tiga penanda komentar yang berbeda di Clincoo agar utang bug, jalan pintas, dan catatan desain tidak tertukar.",
   "content": "<p class=\"mb-4\">Satu kata TODO untuk semua catatan membuat pencarian tidak berguna. Tiga penanda tetap memisahkan pekerjaan yang harus diperbaiki dari jalan pintas yang disengaja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tetapkan arti masing-masing</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pakai FIXME untuk bug yang diketahui, HACK untuk solusi sementara yang menyimpang dari pola, dan NOTE untuk konteks yang bukan tugas. Contoh: FIXME(rina): fokus hilang setelah dialog ditutup. Jangan tulis FIXME hanya karena Anda ragu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cari per penanda sebelum rilis</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cari FIXME dulu, lalu HACK. NOTE boleh tinggal jika masih benar. Simpan daftar sisa di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya tim memakai arti yang sama.</p>",
   "source": "Google — Code Review Comments",
   "sourceUrl": "https://google.github.io/eng-practices/review/reviewer/comments.html",
   "sourceSnippet": "A review comment should name the problem clearly so the next reader can tell a bug from a deliberate shortcut.",
   "source2": "MDN — JavaScript comments",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Separate FIXME, HACK, and NOTE So Notes Do Not Mix",
   "desc": "How to use three distinct comment markers in Clincoo so bug debt, shortcuts, and design notes stay separate.",
   "content": "<p class=\"mb-4\">One TODO word for every note makes search useless. Three fixed markers separate work that must be fixed from a shortcut you chose on purpose.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Give each marker one meaning</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> use FIXME for a known bug, HACK for a temporary break from the pattern, and NOTE for context that is not a task. Example: FIXME(rina): focus is lost after the dialog closes. Do not write FIXME just because you are unsure.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Search each marker before release</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> search FIXME first, then HACK. A NOTE may stay if it is still true. Keep the leftover list on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the team shares the same meanings.</p>",
   "source": "Google — Code Review Comments",
   "sourceUrl": "https://google.github.io/eng-practices/review/reviewer/comments.html",
   "sourceSnippet": "A review comment should name the problem clearly so the next reader can tell a bug from a deliberate shortcut.",
   "source2": "MDN — JavaScript comments",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "komentar-hapus-kode-yang-dikomentari",
 "langs": {
  "id": {
   "title": "Cara Hapus Kode yang Dikomentari, Bukan Menyimpannya di File",
   "desc": "Tata cara membuang blok kode yang dinonaktifkan dengan komentar agar file Clincoo tidak menyimpan versi mati.",
   "content": "<p class=\"mb-4\">Blok yang dikomentari terlihat seperti cadangan, tetapi biasanya sudah tidak cocok dengan kode di sekitarnya. Riwayat Git adalah tempat menyimpan versi lama, bukan komentar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hapus, jangan nonaktifkan</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> pilih baris yang diawali // atau dibungkus /* */ hanya untuk mematikan kode, lalu hapus. Jika Anda takut kehilangan, salin alasan singkat di komentar NOTE, bukan seluruh fungsi. Jangan tinggalkan CSS lama yang di-comment di stylesheet yang sama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Andalkan riwayat, lalu cek pratinjau</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau setelah penghapusan. Jika halaman rusak, kembalikan dari riwayat, bukan dari blok komentar. Catat kebiasaan ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript comments",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments",
   "sourceSnippet": "Comments are ignored by the engine, so disabled code in a comment is not a running fallback and still has to be maintained by hand.",
   "source2": "Google — Code Review Comments",
   "source2Url": "https://google.github.io/eng-practices/review/reviewer/comments.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Delete Commented-Out Code Instead of Keeping It in the File",
   "desc": "How to remove code disabled by comments so a Clincoo file does not keep a dead version.",
   "content": "<p class=\"mb-4\">Commented-out blocks look like a backup, but they usually no longer match the code around them. Git history is the place for an old version, not a comment.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Delete, do not disable</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> select lines that start with // or sit inside /* */ only to turn code off, then delete them. If you fear losing context, leave a short NOTE, not the whole function. Do not leave old commented CSS in the same stylesheet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Use history, then check preview</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the preview after the deletion. If the page breaks, restore from history, not from a comment block. Record the habit on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript comments",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments",
   "sourceSnippet": "Comments are ignored by the engine, so disabled code in a comment is not a running fallback and still has to be maintained by hand.",
   "source2": "Google — Code Review Comments",
   "source2Url": "https://google.github.io/eng-practices/review/reviewer/comments.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "komentar-jsdoc-singkat-untuk-fungsi-publik",
 "langs": {
  "id": {
   "title": "Cara Tulis JSDoc Singkat untuk Fungsi yang Dipakai File Lain",
   "desc": "Tata cara menambahkan JSDoc ringkas di Clincoo pada fungsi publik: parameter, nilai balik, dan satu batasan.",
   "content": "<p class=\"mb-4\">Fungsi yang dipanggil dari file lain butuh kontrak singkat. JSDoc yang panjang jarang dibaca; tiga baris yang akurat lebih berguna.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis kontrak, bukan tutorial</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> letakkan blok /** */ tepat di atas fungsi yang diekspor. Sebutkan @param dan @returns hanya jika tipenya tidak jelas dari nama. Tambah satu kalimat batasan, misalnya mengembalikan null jika id kosong. Jangan ulangi isi fungsi baris demi baris.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Perbarui saat tanda tangan berubah</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> setelah mengubah parameter, samakan JSDoc sebelum commit. Simpan contoh fungsi dengan JSDoc yang lolos tinjauan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript comments",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments",
   "sourceSnippet": "Block comments can document a function above its declaration because the engine ignores them and tools can still read the text.",
   "source2": "Google — Code Review Comments",
   "source2Url": "https://google.github.io/eng-practices/review/reviewer/comments.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Write a Short JSDoc for a Function Used by Other Files",
   "desc": "How to add a short JSDoc in Clincoo on a public function: parameters, return value, and one constraint.",
   "content": "<p class=\"mb-4\">A function called from another file needs a short contract. A long JSDoc is rarely read; three accurate lines are more useful.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write the contract, not a tutorial</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> place a /** */ block directly above an exported function. Mention @param and @returns only when the type is not clear from the name. Add one constraint sentence, for example returns null when the id is empty. Do not retell the function line by line.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Update it when the signature changes</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> after you change a parameter, match the JSDoc before commit. Save a function whose JSDoc passed review on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript comments",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments",
   "sourceSnippet": "Block comments can document a function above its declaration because the engine ignores them and tools can still read the text.",
   "source2": "Google — Code Review Comments",
   "source2Url": "https://google.github.io/eng-practices/review/reviewer/comments.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "komentar-css-jelaskan-workaround",
 "langs": {
  "id": {
   "title": "Cara Komentari Workaround CSS beserta Browser yang Bermasalah",
   "desc": "Tata cara menulis komentar CSS di Clincoo yang menyebut browser, gejala, dan syarat kapan workaround boleh dihapus.",
   "content": "<p class=\"mb-4\">Workaround CSS tanpa komentar terlihat seperti kesalahan. Pembaca berikutnya akan merapikannya dan bug lama kembali.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sebut gejala dan syarat hapus</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis komentar di atas deklarasi aneh: /* Safari iOS: min-height 100% gagal di flex; hapus jika versi 18 tidak lagi memotong */. Sebut browser dan gejala, bukan hanya kata hack. Jangan komentari setiap margin biasa.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji sebelum menghapus</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau pada lebar yang disebut komentar sebelum menghapus workaround. Catat browser yang masih gagal di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS comments",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_syntax/Comments",
   "sourceSnippet": "CSS comments are removed before the stylesheet is applied, so they can record why a declaration exists without changing layout.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Comment a CSS Workaround and Name the Browser It Fixes",
   "desc": "How to write a Clincoo CSS comment that names the browser, the symptom, and when the workaround may be removed.",
   "content": "<p class=\"mb-4\">A CSS workaround without a comment looks like a mistake. The next reader will tidy it and the old bug returns.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the symptom and the removal rule</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write a comment above the odd declaration: /* Safari iOS: min-height 100% fails in flex; remove if version 18 no longer clips */. Name the browser and the symptom, not only the word hack. Do not comment every ordinary margin.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test before you delete</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open the preview at the width named in the comment before removing the workaround. Record browsers that still fail on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS comments",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_syntax/Comments",
   "sourceSnippet": "CSS comments are removed before the stylesheet is applied, so they can record why a declaration exists without changing layout.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "komentar-perbarui-setelah-refactor",
 "langs": {
  "id": {
   "title": "Cara Perbarui Komentar Usang setelah Refactor",
   "desc": "Tata cara meninjau komentar yang tidak lagi cocok dengan kode setelah Anda mengubah fungsi di Clincoo.",
   "content": "<p class=\"mb-4\">Komentar usang lebih berbahaya daripada tidak ada komentar. Ia meyakinkan pembaca bahwa perilaku lama masih berlaku.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baca komentar di sekitar diff</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> setiap kali Anda mengubah syarat if, timeout, atau nama field, baca komentar di atasnya. Jika angka atau alasan sudah salah, perbarui atau hapus pada commit yang sama. Jangan tinggalkan komentar yang menyebut API yang sudah tidak dipanggil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jadikan bagian tinjauan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> sebelum deploy, cari komentar di file yang baru diubah. Samakan dengan perilaku pratinjau. Tuliskan checklist ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar refactor berikutnya tidak meninggalkan catatan palsu.</p>",
   "source": "Google — Code Review Comments",
   "sourceUrl": "https://google.github.io/eng-practices/review/reviewer/comments.html",
   "sourceSnippet": "Comments that no longer match the code mislead the next reviewer, so update or delete them in the same change.",
   "source2": "MDN — JavaScript comments",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Update a Stale Comment after a Refactor",
   "desc": "How to review comments that no longer match the code after you change a function in Clincoo.",
   "content": "<p class=\"mb-4\">A stale comment is more harmful than no comment. It convinces the reader that the old behavior still applies.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Read comments around the diff</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> whenever you change an if condition, a timeout, or a field name, read the comment above it. If the number or the reason is wrong, update or delete it in the same commit. Do not leave a comment that names an API you no longer call.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Make it part of review</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> before deploy, search comments in files you just changed. Match them to the preview. Write this checklist on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next refactor does not leave a false note.</p>",
   "source": "Google — Code Review Comments",
   "sourceUrl": "https://google.github.io/eng-practices/review/reviewer/comments.html",
   "sourceSnippet": "Comments that no longer match the code mislead the next reviewer, so update or delete them in the same change.",
   "source2": "MDN — JavaScript comments",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};

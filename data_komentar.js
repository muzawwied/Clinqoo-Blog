// Clincoo Docs — kategori Komentar (9 Oktober 2026, 00:00 WIB) — 2 artikel
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
}
]
};

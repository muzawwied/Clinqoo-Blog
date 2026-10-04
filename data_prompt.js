// Clincoo Docs — kategori Minta Bantuan AI (Oktober 2026)
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["prompt"] = {
 "names": {
  "id": "Minta Bantuan AI",
  "en": "Asking AI for Help"
 },
 "articles": [
  {
 "id": "prompt-tempel-pesan-error-utuh",
 "langs": {
  "id": {
   "title": "Cara Tempel Pesan Error Utuh saat Minta Bantuan AI",
   "desc": "Tata cara menempel pesan error konsol utuh ke asisten AI Clincoo, bukan ringkasan, supaya penyebab baris dan stack tidak hilang.",
   "content": "<p class=\"mb-4\">Ringkasan seperti \"CSS rusak\" membuat jawaban menebak. Pesan error utuh menyebut file, baris, dan jenis kesalahan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> salin dari konsol, jangan mengetik ulang dari ingatan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Salin teks, bukan tangkapan layar saja</h2><p class=\"mb-4\">Teks error bisa dicari dan dikutip. Tangkapan layar membantu untuk tata letak, tetapi stack trace yang terpotong tidak bisa dicek ulang. Sertakan baris pertama pesan dan dua frame stack teratas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sebut apa yang baru berubah</h2><p class=\"mb-4\">Tambahkan satu kalimat: yang terakhir diubah, browser, dan apakah error muncul saat muat atau saat klik. Jangan tempel seluruh repo. Potongan yang memicu error sudah cukup.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek jawaban sebelum ditempel balik</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jalankan ulang langkah yang tadi gagal. Jika pesan error berubah, tempel pesan baru, jangan lanjut dari jawaban lama. Simpan pola pertanyaan yang berhasil di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console.error()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/error_static",
   "sourceSnippet": "The console.error() static method outputs an error message to the console.",
   "source2": "MDN — Window: error event",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Paste the Full Error when Asking an AI for Help",
   "desc": "How to paste the full console error into the Clincoo AI assistant, not a summary, so the line and stack are not lost.",
   "content": "<p class=\"mb-4\">A summary such as \"CSS is broken\" makes the answer guess. The full error names the file, line, and kind of failure. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> copy from the console instead of retyping from memory.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Copy text, not only a screenshot</h2><p class=\"mb-4\">Error text can be searched and quoted. A screenshot helps for layout, but a cropped stack trace cannot be rechecked. Include the first line of the message and the top two stack frames.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Say what just changed</h2><p class=\"mb-4\">Add one sentence: the last edit, the browser, and whether the error appears on load or on click. Do not paste the whole repo. The snippet that triggers the error is enough.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the answer before pasting it back</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> repeat the step that failed. If the error text changed, paste the new message instead of continuing from the old answer. Keep question patterns that worked on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console.error()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/error_static",
   "sourceSnippet": "The console.error() static method outputs an error message to the console.",
   "source2": "MDN — Window: error event",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
  {
 "id": "prompt-kirim-cuplikan-minimal-yang-gagal",
 "langs": {
  "id": {
   "title": "Cara Kirim Cuplikan Minimal yang Masih Gagal",
   "desc": "Tata cara memangkas cuplikan HTML, CSS, atau JS Clincoo sampai masih gagal, lalu mengirim itu ke asisten AI supaya jawaban tidak melebar.",
   "content": "<p class=\"mb-4\">Cuplikan sepanjang halaman mengajak jawaban yang ikut panjang. Versi minimal yang masih gagal menunjukkan penyebab. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> duplikat bagian yang rusak, lalu hapus yang tidak mengubah gejala.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hapus sampai gejala hilang, lalu kembalikan satu lapis</h2><p class=\"mb-4\">Buang skrip, kelas, dan elemen yang tidak ikut. Jika setelah dihapus gejala hilang, bagian itu terlibat. Kembalikan seperlunya sampai gagal lagi. Itulah cuplikan yang dikirim.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sertakan hasil yang diharapkan</h2><p class=\"mb-4\">Tulis satu kalimat hasil yang kamu mau: tombol sejajar, form tidak terkirim dua kali, atau gambar tidak melompat. Tanpa hasil yang diharapkan, jawaban hanya merapikan kode.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> tempel jawaban ke salinan, bukan ke halaman produksi. Jika cuplikan minimal sudah beres tetapi halaman asli belum, selisihnya ada di kode yang tadi dibuang. Catat selisih itu di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Debugging CSS",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems",
   "sourceSnippet": "When CSS is not doing what you expect, the browser developer tools are the place to inspect the rules that actually apply.",
   "source2": "MDN — console",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Send a Minimal Snippet that Still Fails",
   "desc": "How to trim a Clincoo HTML, CSS, or JS snippet until it still fails, then send that to the AI assistant so the answer stays narrow.",
   "content": "<p class=\"mb-4\">A page-long snippet invites a page-long answer. A minimal version that still fails shows the cause. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> duplicate the broken part, then remove anything that does not change the symptom.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Remove until the symptom disappears, then add one layer back</h2><p class=\"mb-4\">Drop scripts, classes, and elements that are not involved. If the symptom disappears, that part mattered. Put back only enough to fail again. That is the snippet to send.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include the expected result</h2><p class=\"mb-4\">Write one sentence for the result you want: buttons aligned, a form not submitted twice, or an image that does not jump. Without an expected result, the answer only tidies the code.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> paste the answer into a copy, not the production page. If the minimal snippet is fixed but the real page is not, the difference is in the code you removed. Note that gap on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Debugging CSS",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems",
   "sourceSnippet": "When CSS is not doing what you expect, the browser developer tools are the place to inspect the rules that actually apply.",
   "source2": "MDN — console",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
  {
 "id": "prompt-minta-langkah-uji-bukan-kode-jadi",
 "langs": {
  "id": {
   "title": "Cara Minta Langkah Uji, Bukan Kode Jadi",
   "desc": "Tata cara meminta asisten AI Clincoo menjelaskan langkah cek saat stuck, supaya kamu yang memutuskan perubahan dan tidak menempel kode yang tidak dipahami.",
   "content": "<p class=\"mb-4\">Kode jadi yang langsung ditempel sering memperbaiki gejala dan merusak yang lain. Minta urutan cek dulu. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis apa yang sudah dicoba dan apa yang belum.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Minta hipotesis, lalu cara membantahnya</h2><p class=\"mb-4\">Contoh permintaan: sebut dua penyebab paling mungkin, dan satu cek di DevTools untuk masing-masing. Jangan minta rewrite seluruh file sebelum hipotesis itu lolos.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi wilayah jawaban</h2><p class=\"mb-4\">Sebut file atau blok yang boleh diubah. Jika jawaban menyentuh layout, skrip, dan meta sekaligus, minta dipotong. Perubahan kecil lebih mudah dibatalkan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jalankan cek yang disarankan sebelum menempel kode. Jika cek tidak cocok dengan gejala, kirim hasil cek itu, bukan permintaan ulang yang sama. Ringkas langkah yang terbukti di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Firefox DevTools",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems",
   "sourceSnippet": "Use the browser developer tools to see which CSS rules apply and which are overridden before rewriting the stylesheet.",
   "source2": "MDN — debugger",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Ask for Check Steps, Not a Finished Patch",
   "desc": "How to ask the Clincoo AI assistant for check steps when you are stuck, so you decide the change and do not paste code you do not understand.",
   "content": "<p class=\"mb-4\">A finished patch that you paste immediately often fixes the symptom and breaks something else. Ask for a check order first. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write what you already tried and what you have not.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ask for a hypothesis, then how to disprove it</h2><p class=\"mb-4\">Example request: name the two most likely causes, and one DevTools check for each. Do not ask for a rewrite of the whole file before that hypothesis holds.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit the answer</h2><p class=\"mb-4\">Name the file or block that may change. If the answer touches layout, script, and meta at once, ask for a cut. A small change is easier to undo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> run the suggested check before pasting code. If the check does not match the symptom, send that result instead of repeating the same request. Summarize steps that held on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Firefox DevTools",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems",
   "sourceSnippet": "Use the browser developer tools to see which CSS rules apply and which are overridden before rewriting the stylesheet.",
   "source2": "MDN — debugger",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
 ]
};

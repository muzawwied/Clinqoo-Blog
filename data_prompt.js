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
},
  {
 "id": "prompt-sebutkan-browser-dan-langkah-reproduksi",
 "langs": {
  "id": {
   "title": "Cara Sebutkan Browser dan Langkah Reproduksi",
   "desc": "Tata cara menulis browser, lebar layar, dan langkah klik saat minta bantuan AI Clincoo, supaya jawaban tidak mengira bug yang hanya muncul di satu lingkungan.",
   "content": "<p class=\"mb-4\">Bug yang hanya muncul di satu browser sering dijawab seolah terjadi di semua. Sebut lingkungan dulu. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> catat browser, versi kasar, dan lebar jendela saat gejala terlihat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tulis langkah yang bisa diulang</h2><p class=\"mb-4\">Nomori tiga sampai lima langkah: buka halaman, isi field, klik kirim. Hindari \"kadang rusak\". Jika hanya gagal setelah refresh atau di lebar ponsel, tulis itu di kalimat pertama.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sertakan yang sudah tidak gagal</h2><p class=\"mb-4\">Sebut satu lingkungan yang masih beres, misalnya desktop lebar atau browser lain. Perbedaan itu mempersempit dugaan lebih cepat daripada tempelan CSS panjang.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek ulang di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> ulangi langkah yang sama setelah jawaban diterapkan. Jika langkahnya tidak bisa diulang, jawabannya juga tidak bisa diuji. Simpan pola laporan yang berhasil di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Browser compatibility",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Glossary/Browser_compatibility",
   "sourceSnippet": "Browser compatibility means a website working across different browsers.",
   "source2": "MDN — Responsive design",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Name the Browser and the Reproduction Steps",
   "desc": "How to write the browser, viewport width, and click steps when asking the Clincoo AI for help, so the answer does not assume a bug that only appears in one environment.",
   "content": "<p class=\"mb-4\">A bug that only appears in one browser is often answered as if it happens everywhere. Name the environment first. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> note the browser, a rough version, and the window width when the symptom shows.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Write steps that can be repeated</h2><p class=\"mb-4\">Number three to five steps: open the page, fill the field, click submit. Avoid \"it sometimes breaks\". If it only fails after refresh or at phone width, put that in the first sentence.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include what does not fail</h2><p class=\"mb-4\">Name one environment that still works, such as a wide desktop or another browser. That difference narrows the guess faster than a long CSS paste.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Recheck in preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> repeat the same steps after applying the answer. If the steps cannot be repeated, the answer cannot be tested either. Keep report patterns that worked on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Browser compatibility",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Glossary/Browser_compatibility",
   "sourceSnippet": "Browser compatibility means a website working across different browsers.",
   "source2": "MDN — Responsive design",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
  {
 "id": "prompt-pisahkan-gejala-dari-dugaan",
 "langs": {
  "id": {
   "title": "Cara Pisahkan Gejala dari Dugaan",
   "desc": "Tata cara memisahkan apa yang terlihat di halaman Clincoo dari dugaan penyebab saat minta bantuan AI, supaya jawaban tidak terkunci pada hipotesis yang salah.",
   "content": "<p class=\"mb-4\">Kalimat \"Flexbox-nya rusak\" sudah menyimpulkan. AI lalu memperbaiki flex meskipun penyebabnya gambar tanpa ukuran. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis yang terlihat dulu, dugaan belakangan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Gejala adalah yang bisa ditunjuk</h2><p class=\"mb-4\">Contoh gejala: tombol turun ke baris baru, form terkirim dua kali, atau konsol menyebut identifier yang tidak ada. Dugaan seperti \"cache\" atau \"Grid\" ditandai terpisah, bukan sebagai fakta.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Minta AI menguji dugaan, bukan membelanya</h2><p class=\"mb-4\">Minta satu cek yang bisa menggagalkan dugaanmu. Jika cek tidak cocok, buang dugaan itu. Jawaban yang hanya setuju dengan dugaan awal sering melewatkan penyebab lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan gejala sesudah perubahan dengan kalimat gejala semula. Jika gejalanya berganti, kirim gejala baru, jangan menempel dugaan lama. Catat pemisahan yang membantu di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Debugging CSS",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems",
   "sourceSnippet": "When CSS is not doing what you expect, inspect the rules that actually apply before rewriting the stylesheet.",
   "source2": "MDN — console",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Separate the Symptom from the Guess",
   "desc": "How to separate what you see on a Clincoo page from the suspected cause when asking an AI for help, so the answer is not locked to a wrong hypothesis.",
   "content": "<p class=\"mb-4\">The sentence \"Flexbox is broken\" already concludes. The AI then fixes flex even if the cause is an image without a size. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write what you see first, and the guess later.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A symptom is something you can point at</h2><p class=\"mb-4\">Example symptoms: the button drops to the next row, the form submits twice, or the console names an identifier that does not exist. Guesses such as \"cache\" or \"Grid\" stay marked as guesses, not facts.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ask the AI to test the guess, not defend it</h2><p class=\"mb-4\">Ask for one check that could disprove your guess. If the check does not match, drop the guess. An answer that only agrees with the first guess often misses another cause.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare the symptom after the change with the original symptom sentence. If the symptom changed, send the new symptom instead of pasting the old guess. Note splits that helped on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — Debugging CSS",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems",
   "sourceSnippet": "When CSS is not doing what you expect, inspect the rules that actually apply before rewriting the stylesheet.",
   "source2": "MDN — console",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
  {
 "id": "prompt-minta-satu-perubahan-per-balasan",
 "langs": {
  "id": {
   "title": "Cara Minta Satu Perubahan per Balasan",
   "desc": "Tata cara meminta asisten AI Clincoo mengubah satu hal per balasan, supaya kamu bisa membatalkan dan tahu perubahan mana yang memperbaiki gejala.",
   "content": "<p class=\"mb-4\">Balasan yang mengganti layout, skrip, dan meta sekaligus sulit dibatalkan. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> minta satu perubahan, lalu berhenti untuk uji.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sebut batas file</h2><p class=\"mb-4\">Tulis file atau blok yang boleh disentuh. Jika jawaban keluar dari batas itu, minta dipotong sebelum ditempel. Perubahan di luar batas sering memperbaiki tampilan dan merusak alur lain.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji sebelum permintaan berikut</h2><p class=\"mb-4\">Setelah satu perubahan, cek gejala semula. Jika belum beres, kirim hasil cek itu. Jangan menumpuk permintaan baru di atas kode yang belum terbukti.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> simpan salinan sebelum menempel. Jika gejala memburuk, kembalikan salinan itu, bukan meminta AI \"memperbaiki lagi\" di atas kode yang sudah campur. Ringkas batas yang berguna di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — debugger",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger",
   "sourceSnippet": "The debugger statement invokes any available debugging functionality, such as setting a breakpoint.",
   "source2": "MDN — CSS debugging",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Ask for One Change per Reply",
   "desc": "How to ask the Clincoo AI assistant for one change per reply, so you can undo it and know which change fixed the symptom.",
   "content": "<p class=\"mb-4\">A reply that changes layout, script, and meta at once is hard to undo. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ask for one change, then stop to test.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the file boundary</h2><p class=\"mb-4\">Write the file or block that may be touched. If the answer leaves that boundary, ask for a cut before pasting. A change outside the boundary often fixes the look and breaks another flow.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Test before the next request</h2><p class=\"mb-4\">After one change, check the original symptom. If it is still wrong, send that check result. Do not stack a new request on code that is not proven yet.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> keep a copy before pasting. If the symptom gets worse, restore that copy instead of asking the AI to \"fix it again\" on mixed code. Summarize boundaries that helped on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — debugger",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger",
   "sourceSnippet": "The debugger statement invokes any available debugging functionality, such as setting a breakpoint.",
   "source2": "MDN — CSS debugging",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
  {
 "id": "prompt-lampirkan-hasil-yang-diharapkan",
 "langs": {
  "id": {
   "title": "Cara Lampirkan Hasil yang Diharapkan",
   "desc": "Tata cara menempel cuplikan hasil yang diharapkan, bukan hanya kode yang rusak, saat minta bantuan AI Clincoo supaya jawaban punya sasaran yang jelas.",
   "content": "<p class=\"mb-4\">Kode yang gagal tanpa sasaran membuat jawaban merapikan gaya, bukan menyelesaikan tugas. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis satu kalimat hasil, lalu cuplikan pendek yang mendekati hasil itu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Hasil adalah perilaku, bukan selera</h2><p class=\"mb-4\">Contoh: label tetap terhubung ke input, gambar tidak mendorong tombol saat dimuat, atau error form muncul di sebelah field. Hindari \"buat lebih modern\" tanpa perilaku yang bisa dicek.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tandai bagian yang tidak boleh berubah</h2><p class=\"mb-4\">Sebut teks, URL, atau atribut yang harus tetap. AI sering mengganti nama field atau href saat merapikan markup. Batas itu mencegah perbaikan semu.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> bandingkan halaman dengan kalimat hasil, bukan dengan gaya jawaban. Jika perilaku cocok tetapi ada yang dilarang berubah, kirim selisih itu. Simpan contoh sasaran yang jelas di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML forms",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms",
   "sourceSnippet": "HTML forms let users enter data that is sent to a server or handled on the page.",
   "source2": "MDN — img width and height",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Attach the Result You Expected",
   "desc": "How to paste the result you expected, not only the broken code, when asking the Clincoo AI for help so the answer has a clear target.",
   "content": "<p class=\"mb-4\">Failing code without a target makes the answer tidy the style instead of finishing the task. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write one result sentence, then a short snippet close to that result.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">A result is behavior, not taste</h2><p class=\"mb-4\">Examples: the label stays tied to the input, the image does not push the button when it loads, or the form error appears next to the field. Avoid \"make it more modern\" without behavior you can check.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mark what must not change</h2><p class=\"mb-4\">Name text, URLs, or attributes that must stay. An AI often renames a field or href while tidying markup. That boundary prevents a fake fix.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> compare the page with the result sentence, not with the answer's style. If the behavior matches but something forbidden changed, send that gap. Keep clear targets on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTML forms",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms",
   "sourceSnippet": "HTML forms let users enter data that is sent to a server or handled on the page.",
   "source2": "MDN — img width and height",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
  {
 "id": "prompt-sensor-token-sebelum-menempel",
 "langs": {
  "id": {
   "title": "Cara Sensor Token sebelum Menempel ke AI",
   "desc": "Tata cara menghapus token, kunci, cookie, dan data pengguna dari cuplikan sebelum dikirim ke asisten AI Clincoo, tanpa menghilangkan baris yang menunjukkan error.",
   "content": "<p class=\"mb-4\">Cuplikan debug sering memuat rahasia yang tidak diperlukan untuk diagnosis. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> sensor dulu, baru tempel. Jangan mengandalkan AI untuk \"mengabaikan\" kunci yang sudah terkirim.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti nilai, jangan hapus barisnya</h2><p class=\"mb-4\">Ganti token dengan kata REDACTED dan biarkan nama variabelnya. Baris yang hilang membuat jawaban menebak struktur. Cookie, query berisi email, dan header Authorization ikut disensor.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek cuplikan sekali lagi</h2><p class=\"mb-4\">Cari pola sk_ , key, bearer, dan password sebelum kirim. Jika error menyebut nilai rahasia, kirim jenis error dan panjang nilai, bukan nilainya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek di preview</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> jangan menempel balik jawaban yang mengembalikan token contoh ke kode produksi. Rotasi kunci jika sempat terkirim. Catat daftar yang wajib disensor di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTTP authentication",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication",
   "sourceSnippet": "HTTP provides a framework for access control and authentication.",
   "source2": "OWASP — Secrets Management",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Redact Tokens before Pasting to an AI",
   "desc": "How to remove tokens, keys, cookies, and user data from a snippet before sending it to the Clincoo AI assistant, without dropping the line that shows the error.",
   "content": "<p class=\"mb-4\">A debug snippet often carries secrets that diagnosis does not need. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> redact first, then paste. Do not rely on the AI to \"ignore\" a key that was already sent.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace the value, do not delete the line</h2><p class=\"mb-4\">Replace the token with the word REDACTED and keep the variable name. A missing line makes the answer guess the structure. Cookies, queries that contain email, and Authorization headers get redacted too.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Scan the snippet once more</h2><p class=\"mb-4\">Search for sk_, key, bearer, and password before sending. If the error quotes a secret value, send the error type and the value length, not the value.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview</h2><p class=\"mb-4\">On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> do not paste back an answer that returns an example token into production code. Rotate a key if it was sent. Keep the redact checklist on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — HTTP authentication",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication",
   "sourceSnippet": "HTTP provides a framework for access control and authentication.",
   "source2": "OWASP — Secrets Management",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "prompt-sebutkan-versi-dan-perintah",
 "langs": {
  "id": {
   "title": "Cara Sebutkan Versi dan Perintah saat Minta Bantuan AI",
   "desc": "Tata cara menulis versi dependensi dan perintah yang benar-benar dijalankan saat minta bantuan AI Clincoo, supaya jawaban tidak mengira lingkungan yang berbeda.",
   "content": "<p class=\"mb-4\">Jawaban AI sering meleset karena versi paket dan perintah tidak disebut. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> tulis versi yang terpasang dan perintah utuh sebelum menempel error.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Salin perintah, jangan parafrase</h2><p class=\"mb-4\">Tempel perintah apa adanya, termasuk flag. 'Saya menjalankan build' tidak sama dengan npm run build. Catat folder kerja jika perintah dijalankan di subfolder.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sertakan versi yang relevan</h2><p class=\"mb-4\">Sebut Node, browser, atau paket yang disebut di error. Jangan kirim seluruh lockfile. Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> cukup nama paket dan versinya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tandai yang sudah dicoba</h2><p class=\"mb-4\">Tuliskan satu perintah yang sudah dijalankan ulang dan hasilnya. Simpan pola ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya permintaan berikutnya tidak mengulang konteks yang sama.</p>",
   "source": "MDN — console.error()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/error_static",
   "sourceSnippet": "The console.error() static method outputs an error message to the console.",
   "source2": "npm docs — npm run-script",
   "source2Url": "https://docs.npmjs.com/cli/v10/commands/npm-run-script",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Include the Version and Command when Asking an AI",
   "desc": "How to state the dependency version and the command you actually ran when asking the Clincoo AI, so the answer does not assume a different environment.",
   "content": "<p class=\"mb-4\">AI answers miss when the package version and command are omitted. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> write the installed version and the full command before pasting the error.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Paste the command, do not paraphrase</h2><p class=\"mb-4\">Paste the command as run, including flags. 'I ran the build' is not the same as npm run build. Note the working folder if the command ran in a subfolder.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Include the relevant version</h2><p class=\"mb-4\">Name Node, the browser, or the package named in the error. Do not send the whole lockfile. On <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> the package name and version are enough.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Mark what you already retried</h2><p class=\"mb-4\">Write the one command you reran and its result. Keep this pattern on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next request does not repeat the same context.</p>",
   "source": "MDN — console.error()",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/error_static",
   "sourceSnippet": "The console.error() static method outputs an error message to the console.",
   "source2": "npm docs — npm run-script",
   "source2Url": "https://docs.npmjs.com/cli/v10/commands/npm-run-script",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "prompt-minta-jelaskan-diff-sebelum-terapkan",
 "langs": {
  "id": {
   "title": "Cara Minta Penjelasan Diff sebelum Menerapkan Jawaban AI",
   "desc": "Tata cara meminta asisten AI Clincoo menjelaskan apa yang berubah di diff sebelum kode ditempel, supaya perubahan yang tidak diminta ketahuan lebih dulu.",
   "content": "<p class=\"mb-4\">Kode jadi dari AI sering ikut mengubah baris yang tidak rusak. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> minta penjelasan diff dulu, baru terapkan bagian yang kamu setujui.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Minta daftar baris yang berubah</h2><p class=\"mb-4\">Minta AI menyebut file, baris, dan alasan tiap perubahan. Tolak jawaban yang hanya menempel blok utuh tanpa menyebut apa yang dihapus.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Terapkan satu hunk</h2><p class=\"mb-4\">Salin satu perubahan, simpan, lalu cek preview di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Jika halaman lain ikut bergeser, hentikan dan kirim gejala itu, bukan hunk berikutnya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tolak perubahan di luar permintaan</h2><p class=\"mb-4\">Jika diff mengganti nama kelas atau merapikan file lain, kembalikan. Catat batas ini di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar sesi berikutnya tetap sempit.</p>",
   "source": "MDN — Using the Web Console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Tools/Web_Console",
   "sourceSnippet": "The Web Console logs information associated with a web page.",
   "source2": "Git — git diff",
   "source2Url": "https://git-scm.com/docs/git-diff",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Ask for a Diff Explanation before Applying an AI Answer",
   "desc": "How to ask the Clincoo AI to explain what changed in the diff before you paste the code, so unrequested edits show up first.",
   "content": "<p class=\"mb-4\">Finished AI code often edits lines that were not broken. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ask for a diff explanation first, then apply only the part you accept.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ask for the list of changed lines</h2><p class=\"mb-4\">Ask the AI to name the file, the line, and the reason for each change. Reject an answer that only pastes a full block without saying what was removed.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Apply one hunk</h2><p class=\"mb-4\">Copy one change, save, then check the preview on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. If another page shifts, stop and send that symptom instead of the next hunk.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reject edits outside the request</h2><p class=\"mb-4\">If the diff renames a class or tidies another file, revert it. Keep this boundary on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next session stays narrow.</p>",
   "source": "MDN — Using the Web Console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Tools/Web_Console",
   "sourceSnippet": "The Web Console logs information associated with a web page.",
   "source2": "Git — git diff",
   "source2Url": "https://git-scm.com/docs/git-diff",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "prompt-batasi-file-yang-terkait",
 "langs": {
  "id": {
   "title": "Cara Batasi Konteks ke File yang Terkait",
   "desc": "Tata cara memilih satu atau dua file yang benar-benar terlibat saat minta bantuan AI Clincoo, supaya jawaban tidak merombak bagian proyek yang tidak terkait.",
   "content": "<p class=\"mb-4\">Menempel seluruh proyek membuat AI menebak file yang salah. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> kirim file tempat gejala muncul, plus satu file yang ia panggil.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sebut jalur, bukan nama umum</h2><p class=\"mb-4\">Tulis path seperti src/form.js, bukan 'file form'. Jika ada dua file bernama mirip, sebut keduanya dan tandai yang sedang terbuka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Potong bagian yang tidak ikut jalan</h2><p class=\"mb-4\">Hapus fungsi yang tidak terpanggil dari cuplikan, tetapi jangan menghapus impor yang error sebut. Cek hasilnya di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> setelah satu suntingan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jangan kirim rahasia bersama path</h2><p class=\"mb-4\">Path boleh dikirim. Isi .env tidak. Simpan aturan batas file di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "JavaScript modules let you split code across files and import only what you need.",
   "source2": "OWASP — Secrets Management",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit Context to the Related Files",
   "desc": "How to pick the one or two files that are actually involved when asking the Clincoo AI, so the answer does not rewrite unrelated parts of the project.",
   "content": "<p class=\"mb-4\">Pasting the whole project makes the AI guess the wrong file. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> send the file where the symptom appears, plus one file it calls.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the path, not a generic label</h2><p class=\"mb-4\">Write a path such as src/form.js, not 'the form file'. If two files have similar names, name both and mark the one that is open.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cut the parts that do not run</h2><p class=\"mb-4\">Remove functions the snippet never calls, but do not delete an import the error names. Check the result on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> after one edit.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Do not send secrets with the path</h2><p class=\"mb-4\">Paths can be sent. .env contents cannot. Keep the file-boundary rule on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "JavaScript modules let you split code across files and import only what you need.",
   "source2": "OWASP — Secrets Management",
   "source2Url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "prompt-minta-cek-regresi-setelah-perbaikan",
 "langs": {
  "id": {
   "title": "Cara Minta Cek Regresi setelah Perbaikan AI",
   "desc": "Tata cara meminta asisten AI Clincoo menyebut apa yang harus diuji ulang setelah perbaikan, supaya bug yang hilang tidak merusak alur yang tadi berjalan.",
   "content": "<p class=\"mb-4\">Perbaikan yang hanya menutup error konsol bisa merusak alur lain. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> minta daftar cek regresi sebelum kamu menutup tugas.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Minta tiga jalur, bukan satu</h2><p class=\"mb-4\">Minta jalur yang rusak, jalur tetangga yang memakai fungsi yang sama, dan jalur kosong (tanpa data). Jangan menerima jawaban 'sudah beres' tanpa langkah klik.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di lebar yang disebut</h2><p class=\"mb-4\">Jika bug ada di mobile, uji lagi lebar itu di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Catat satu kalimat hasil: lolos atau masih gagal di langkah ke berapa.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan daftar uji</h2><p class=\"mb-4\">Tempel daftar uji singkat di catatan rilis atau di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. Permintaan AI berikutnya bisa merujuk daftar itu, bukan mengulang dari nol.</p>",
   "source": "MDN — Debugging JavaScript",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong",
   "sourceSnippet": "When JavaScript does not work, the console and a small reproduction are the starting point.",
   "source2": "web.dev — Testing",
   "source2Url": "https://web.dev/articles/testing-overview",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Ask for a Regression Check after an AI Fix",
   "desc": "How to ask the Clincoo AI to name what to retest after a fix, so a bug that disappears does not break a flow that was working.",
   "content": "<p class=\"mb-4\">A fix that only clears the console can break another flow. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ask for a regression checklist before you close the task.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ask for three paths, not one</h2><p class=\"mb-4\">Ask for the broken path, a neighbor path that uses the same function, and an empty path (no data). Do not accept 'it is fixed' without click steps.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Retest the width you named</h2><p class=\"mb-4\">If the bug was on mobile, retest that width on <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>. Record one sentence: passed, or still failing at which step.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the checklist</h2><p class=\"mb-4\">Paste the short checklist into the release note or on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>. The next AI request can point at that list instead of starting over.</p>",
   "source": "MDN — Debugging JavaScript",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong",
   "sourceSnippet": "When JavaScript does not work, the console and a small reproduction are the starting point.",
   "source2": "web.dev — Testing",
   "source2Url": "https://web.dev/articles/testing-overview",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
 ,
{
 "id": "prompt-sebutkan-yang-sudah-dicoba",
 "langs": {
  "id": {
   "title": "Cara Sebutkan yang Sudah Dicoba saat Minta Bantuan AI",
   "desc": "Tata cara menulis percobaan yang sudah gagal saat minta bantuan asisten AI Clincoo, supaya jawaban tidak mengulang langkah yang sama.",
   "content": "<p class=\"mb-4\">Asisten sering menyarankan hard refresh atau cek typo karena konteksnya kosong. Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> mulai pesan dengan gejala, lalu daftar singkat yang sudah dicoba.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tiga baris percobaan cukup</h2><p class=\"mb-4\">Tulis apa yang diubah, apa hasilnya, dan apa yang tidak berubah. Contoh: cache dihapus, error tetap; selector diganti class, tetap tidak kena. Jangan menempel seluruh riwayat obrolan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sebutkan batas yang tidak boleh dilanggar</h2><p class=\"mb-4\">Kalau halaman harus tetap tanpa framework, katakan itu. Minta satu hipotesis berikut, bukan sepuluh tips umum. Lampirkan cuplikan minimal yang masih gagal di pratinjau <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a>.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Simpan jawaban yang dipakai</h2><p class=\"mb-4\">Salin langkah yang benar-benar memperbaiki ke catatan di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> supaya sesi berikutnya tidak mulai dari nol.</p>",
   "source": "MDN — What went wrong? Troubleshooting JavaScript",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong",
   "sourceSnippet": "When you are just learning, finding and fixing errors can be a frustrating experience, but it is a skill that will pay you back.",
   "source2": "Chrome Developers — Debug JavaScript",
   "source2Url": "https://developer.chrome.com/docs/devtools/javascript",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Tell the AI What You Already Tried",
   "desc": "How to list the attempts that already failed when asking the Clincoo AI assistant for help, so the reply does not repeat the same steps.",
   "content": "<p class=\"mb-4\">An assistant often suggests a hard refresh or a typo check because the context is empty. In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> start the message with the symptom, then a short list of what you already tried.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Three attempt lines are enough</h2><p class=\"mb-4\">Write what changed, what the result was, and what stayed the same. Example: cache cleared, error remained; selector switched to a class, still missed. Do not paste the whole chat history.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">State the constraint</h2><p class=\"mb-4\">If the page must stay framework-free, say so. Ask for the next single hypothesis, not ten generic tips. Attach the minimal snippet that still fails in the <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Keep the fix that worked</h2><p class=\"mb-4\">Copy the steps that actually fixed it into a note on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next session does not start from zero.</p>",
   "source": "MDN — What went wrong? Troubleshooting JavaScript",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong",
   "sourceSnippet": "When you are just learning, finding and fixing errors can be a frustrating experience, but it is a skill that will pay you back.",
   "source2": "Chrome Developers — Debug JavaScript",
   "source2Url": "https://developer.chrome.com/docs/devtools/javascript",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
}
]
};

// Clincoo Docs — artikel tambahan Integrasi AI (6 Oktober 2026, 11:00 WIB — tambah 1 artikel)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["integrasi-ai"]) {
    window.countryDataFiles["integrasi-ai"] = { "names": { "id": "Integrasi AI", "en": "AI integration" }, "articles": [] };
  }
  var list = window.countryDataFiles["integrasi-ai"].articles;
  var extra = [
{
 "id": "integrasi-ai-tempel-error-dan-baris",
 "langs": {
  "id": {
   "title": "Cara Tempel Pesan Error dan Nomor Baris ke Integrasi AI",
   "desc": "Tata cara mengirim pesan error lengkap beserta berkas dan baris saat minta bantuan integrasi AI Clincoo.",
   "content": "<p class=\"mb-4\">Permintaan \"ini error\" tanpa teks asli membuat saran AI menebak-nebak. Pesan, nama berkas, dan nomor baris mempersempit penyebab.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Salin error apa adanya</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> salin pesan console lengkap, termasuk stack jika ada. Sebut berkas dan baris, lalu tempel cuplikan 10–20 baris di sekitar error. Jangan kirim token, kunci, atau isi .env.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Minta satu perbaikan, lalu uji</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> terapkan satu usulan, muat ulang, dan cek apakah pesan yang sama hilang. Jika muncul error baru, tempel itu di giliran berikutnya. Simpan prompt yang berhasil di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console.error",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/error_static",
   "sourceSnippet": "console.error writes an error message to the console, which is the text to paste when asking for help.",
   "source2": "MDN — What are browser developer tools",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Paste the Error Message and Line Number to AI Integration",
   "desc": "How to send the full error plus file and line when asking Clincoo AI integration for help.",
   "content": "<p class=\"mb-4\">A request that only says \"this errors\" makes the AI guess. The message, file name, and line number narrow the cause.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Copy the error as-is</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> copy the full console message, including the stack if present. Name the file and line, then paste a 10–20 line snippet around the error. Do not send tokens, keys, or .env contents.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ask for one fix, then test</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> apply one suggestion, reload, and check whether the same message is gone. If a new error appears, paste that on the next turn. Keep prompts that worked on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console.error",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console/error_static",
   "sourceSnippet": "console.error writes an error message to the console, which is the text to paste when asking for help.",
   "source2": "MDN — What are browser developer tools",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "integrasi-ai-satu-perubahan-lalu-pratinjau",
 "langs": {
  "id": {
   "title": "Cara Terapkan Satu Perubahan AI lalu Pratinjau",
   "desc": "Tata cara membatasi integrasi AI Clincoo ke satu perubahan dan mengeceknya di pratinjau sebelum lanjut.",
   "content": "<p class=\"mb-4\">Menerapkan lima saran sekaligus membuat gagal sulit dilacak. Satu perubahan per giliran menjaga diff kecil dan mudah di-undo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Batasi permintaan ke satu berkas</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> minta perubahan pada satu berkas dan satu gejala. Tolak rewrite stylesheet global. Bandingkan diff sebelum menyimpan, lalu jalankan pratinjau.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek pratinjau sebelum permintaan berikut</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> buka pratinjau di lebar desktop dan seluler. Jika layout rusak, undo dulu, baru minta perbaikan. Catat apa yang sudah dicek di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> agar giliran berikutnya tidak mengulang.</p>",
   "source": "MDN — Using the Web Developer Tools",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools",
   "sourceSnippet": "Device mode and the preview pane show whether a single change still works at other viewport widths.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  },
  "en": {
   "title": "How to Apply One AI Change Then Preview",
   "desc": "How to limit Clincoo AI integration to one change and check it in preview before continuing.",
   "content": "<p class=\"mb-4\">Applying five suggestions at once makes failure hard to trace. One change per turn keeps the diff small and easy to undo.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Limit the request to one file</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> ask for a change to one file and one symptom. Refuse a rewrite of the global stylesheet. Compare the diff before saving, then run preview.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check preview before the next request</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> open preview at desktop and mobile widths. If the layout breaks, undo first, then ask for a fix. Note what you already checked on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a> so the next turn does not repeat it.</p>",
   "source": "MDN — Using the Web Developer Tools",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools",
   "sourceSnippet": "Device mode and the preview pane show whether a single change still works at other viewport widths.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
,
{
 "id": "integrasi-ai-batasi-konteks-ke-cuplikan",
 "langs": {
  "id": {
   "title": "Cara Batasi Konteks Integrasi AI ke Cuplikan yang Relevan",
   "desc": "Tata cara mengirim hanya cuplikan berkas yang terkait saat minta bantuan integrasi AI Clincoo, bukan seluruh proyek.",
   "content": "<p class=\"mb-4\">Mengirim seluruh proyek membuat saran AI melebar ke berkas yang tidak rusak. Cuplikan sempit lebih mudah ditinjau dan lebih jarang menimpa bagian yang sudah benar.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Pilih gejala, lalu potong cuplikan</h2><p class=\"mb-4\">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> sebut satu gejala, path berkas, dan 15–40 baris di sekitar baris yang gagal. Jangan tempel folder, build, atau file lock. Jika CSS yang rusak, kirim selector dan aturan terkait saja.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Tolak jawaban di luar cuplikan</h2><p class=\"mb-4\">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> terapkan hanya baris yang menyentuh cuplikan itu. Jika AI mengubah berkas lain, batalkan lalu ulang permintaan dengan batas path. Catat prompt yang berhasil di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "A module keeps its scope local, which is the same idea as sending only the file slice that the AI should edit.",
   "source2": "Chrome Developers — Sources panel",
   "source2Url": "https://developer.chrome.com/docs/devtools/sources",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Limit AI Integration Context to the Relevant Snippet",
   "desc": "How to send only the related file snippet when asking Clincoo AI integration for help, not the whole project.",
   "content": "<p class=\"mb-4\">Sending the whole project makes the AI suggestion spill into files that are not broken. A narrow snippet is easier to review and less likely to overwrite working code.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Name the symptom, then cut the snippet</h2><p class=\"mb-4\">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> name one symptom, the file path, and 15–40 lines around the failing line. Do not paste a folder, a build, or a lockfile. If CSS is broken, send only the selector and the related rule.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Reject an answer outside the snippet</h2><p class=\"mb-4\">In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> apply only lines that touch that snippet. If the AI edits another file, revert and repeat the request with a path limit. Keep the prompt that worked on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "A module keeps its scope local, which is the same idea as sending only the file slice that the AI should edit.",
   "source2": "Chrome Developers — Sources panel",
   "source2Url": "https://developer.chrome.com/docs/devtools/sources",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "integrasi-ai-minta-penyebab-sebelum-kode",
 "langs": {
  "id": {
   "title": "Cara Minta Penyebab ke Integrasi AI Sebelum Minta Kode",
   "desc": "Tata cara meminta integrasi AI Clincoo menjelaskan penyebab dulu, baru usulan kode, supaya perbaikan tidak menebak.",
   "content": "<p class=\"mb-4\">Langsung minta kode sering menghasilkan tambalan yang tidak menjawab error di konsol. Penyebab yang tertulis memudahkan Anda menolak saran yang salah.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Minta hipotesis dalam satu kalimat</h2><p class=\"mb-4\">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> tempel pesan error pertama, bukan error ikutannya. Minta satu kalimat penyebab dan bukti barisnya. Baru setelah itu minta perubahan minimal.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cocokkan hipotesis dengan konsol</h2><p class=\"mb-4\">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> ulangi langkah yang gagal. Jika hipotesis tidak cocok dengan file:baris di konsol, jangan terapkan kode. Simpan gejala yang sudah terbukti di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object is where the first error message lives, and that message should be explained before any code change.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Ask AI Integration for the Cause Before the Code",
   "desc": "How to ask Clincoo AI integration to explain the cause first, then propose code, so the fix is not a guess.",
   "content": "<p class=\"mb-4\">Asking for code immediately often produces a patch that does not answer the console error. A written cause makes it easier to reject a wrong suggestion.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ask for a one-sentence hypothesis</h2><p class=\"mb-4\">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> paste the first error, not the cascade. Ask for one sentence of cause and the line that proves it. Only then ask for a minimal change.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Match the hypothesis to the console</h2><p class=\"mb-4\">In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> repeat the failing step. If the hypothesis does not match the file:line in the console, do not apply the code. Keep the proven symptom on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console object is where the first error message lives, and that message should be explained before any code change.",
   "source2": "Chrome Developers — Console overview",
   "source2Url": "https://developer.chrome.com/docs/devtools/console",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "integrasi-ai-tolak-dependency-baru",
 "langs": {
  "id": {
   "title": "Cara Tolak Saran Integrasi AI yang Menambah Dependency Baru",
   "desc": "Tata cara menolak usulan paket baru dari integrasi AI Clincoo dan meminta perbaikan dengan API yang sudah ada di proyek.",
   "content": "<p class=\"mb-4\">Dependency baru menambah ukuran, risiko pasokan, dan langkah deploy. Sebagian besar bug CSS atau DOM bisa diperbaiki dengan API yang sudah dimuat.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Sebut batas: tanpa paket baru</h2><p class=\"mb-4\">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> tulis batas eksplisit: jangan ubah package.json, jangan tambah CDN, perbaiki dengan CSS atau DOM yang sudah ada. Minta alasan jika AI tetap mengusulkan pustaka.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek lockfile sebelum simpan</h2><p class=\"mb-4\">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> lihat diff sebelum simpan. Jika package.json atau import URL baru muncul, tolak hunk itu. Catat batas prompt di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> agar permintaan berikutnya konsisten.</p>",
   "source": "MDN — Package management",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Package_management",
   "sourceSnippet": "package.json lists project dependencies, so an unsolicited edit there is a signal to reject the suggestion.",
   "source2": "npm Docs — package.json",
   "source2Url": "https://docs.npmjs.com/cli/v10/configuring-npm/package-json",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Reject an AI Integration Suggestion That Adds a Dependency",
   "desc": "How to reject a new package from Clincoo AI integration and ask for a fix with APIs already in the project.",
   "content": "<p class=\"mb-4\">A new dependency adds weight, supply risk, and a deploy step. Most CSS or DOM bugs can be fixed with APIs already loaded.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">State the limit: no new package</h2><p class=\"mb-4\">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> write an explicit limit: do not edit package.json, do not add a CDN, fix it with CSS or DOM already present. Ask for a reason if the AI still proposes a library.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the lockfile before saving</h2><p class=\"mb-4\">In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> read the diff before save. If package.json or a new import URL appears, reject that hunk. Note the prompt limit on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a> so the next request stays consistent.</p>",
   "source": "MDN — Package management",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Package_management",
   "sourceSnippet": "package.json lists project dependencies, so an unsolicited edit there is a signal to reject the suggestion.",
   "source2": "npm Docs — package.json",
   "source2Url": "https://docs.npmjs.com/cli/v10/configuring-npm/package-json",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "integrasi-ai-uji-saran-di-console-dulu",
 "langs": {
  "id": {
   "title": "Cara Uji Saran Integrasi AI di Konsol Sebelum Menulis Berkas",
   "desc": "Tata cara mencoba cuplikan dari integrasi AI Clincoo di konsol browser dulu, supaya berkas tidak berubah sebelum saran terbukti.",
   "content": "<p class=\"mb-4\">Menulis saran AI langsung ke berkas menyulitkan rollback jika ekspresi salah. Konsol adalah tempat aman untuk satu ekspresi yang tidak menyentuh deploy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Jalankan satu ekspresi, bukan seluruh patch</h2><p class=\"mb-4\">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> minta versi yang bisa ditempel di konsol: satu pemanggilan, input contoh, dan hasil yang diharapkan. Jangan jalankan kode yang menulis storage atau mengirim jaringan.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Baru salin jika hasil cocok</h2><p class=\"mb-4\">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> bandingkan keluaran konsol dengan hasil yang diharapkan. Jika cocok, salin ke berkas dan muat ulang pratinjau. Jika tidak, kembalikan pesan konsol ke AI. Simpan kasus uji di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console evaluates expressions in the page context, which is enough to test a suggestion before editing the file.",
   "source2": "Chrome Developers — Console utilities",
   "source2Url": "https://developer.chrome.com/docs/devtools/console/utilities",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Test an AI Integration Suggestion in the Console Before Writing the File",
   "desc": "How to try a Clincoo AI integration snippet in the browser console first, so the file does not change before the suggestion is proven.",
   "content": "<p class=\"mb-4\">Writing an AI suggestion straight into a file makes rollback harder when the expression is wrong. The console is a safe place for one expression that does not touch deploy.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Run one expression, not the whole patch</h2><p class=\"mb-4\">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> ask for a console-pasteable version: one call, a sample input, and the expected result. Do not run code that writes storage or sends a network request.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Copy it only if the result matches</h2><p class=\"mb-4\">In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> compare the console output with the expected result. If it matches, copy it into the file and reload the preview. If not, send the console message back to the AI. Keep the test case on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — console",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
   "sourceSnippet": "The console evaluates expressions in the page context, which is enough to test a suggestion before editing the file.",
   "source2": "Chrome Developers — Console utilities",
   "source2Url": "https://developer.chrome.com/docs/devtools/console/utilities",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
},
{
 "id": "integrasi-ai-perbaiki-satu-selector-css",
 "langs": {
  "id": {
   "title": "Cara Minta Integrasi AI Memperbaiki Satu Selector CSS",
   "desc": "Tata cara meminta integrasi AI Clincoo mengubah satu selector yang gagal, bukan menulis ulang seluruh stylesheet.",
   "content": "<p class=\"mb-4\">Stylesheet yang ditulis ulang sering mengubah layout yang tidak terkait. Satu selector yang salah biasanya cukup diperbaiki spesifikasinya atau urutan aturannya.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Kirim selector, aturan, dan gejala</h2><p class=\"mb-4\">Di <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> tempel selector, blok aturan, dan apa yang terlihat di pratinjau. Minta penyebab kalah spesifisitas atau urutan, lalu diff satu aturan. Larang penghapusan reset global.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Uji di pratinjau lebar lain</h2><p class=\"mb-4\">Di <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> simpan, lalu cek elemen yang sama di lebar mobile dan desktop. Jika elemen lain bergeser, kembalikan hunk. Catat selector yang benar di <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS selectors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",
   "sourceSnippet": "Selectors target elements, so a fix should name the exact selector instead of replacing the stylesheet.",
   "source2": "MDN — Specificity",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Ask AI Integration to Fix One CSS Selector",
   "desc": "How to ask Clincoo AI integration to change one failing selector, not rewrite the whole stylesheet.",
   "content": "<p class=\"mb-4\">A rewritten stylesheet often changes layout that was unrelated. One wrong selector is usually fixed by its specificity or rule order.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Send the selector, the rule, and the symptom</h2><p class=\"mb-4\">In <a href="https://editor.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">editor.clincoo.buzz</a> paste the selector, the rule block, and what the preview shows. Ask for the specificity or order cause, then a one-rule diff. Forbid deleting the global reset.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the preview at another width</h2><p class=\"mb-4\">In <a href="https://app.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">app.clincoo.buzz</a> save, then check the same element at mobile and desktop widths. If another element shifts, revert the hunk. Note the correct selector on <a href="https://blog.clincoo.buzz/" target="_blank" rel="noopener" class="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900">blog.clincoo.buzz</a>.</p>",
   "source": "MDN — CSS selectors",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",
   "sourceSnippet": "Selectors target elements, so a fix should name the exact selector instead of replacing the stylesheet.",
   "source2": "MDN — Specificity",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",
   "source3": "Clincoo App",
   "source3Url": "https://app.clincoo.buzz/"
  }
 }
}
,
{
 "id": "integrasi-ai-jangan-tempel-rahasia-ke-chat",
 "langs": {
  "id": {
   "title": "Cara Jangan Tempel Rahasia ke Chat Integrasi AI",
   "desc": "Tata cara menyembunyikan kunci API, token, dan kata sandi sebelum menempel cuplikan ke integrasi AI Clincoo.",
   "content": "<p class=\"mb-4\">Cuplikan yang menolong debugging sering ikut membawa rahasia. Chat bukan tempat menyimpan kunci, meskipun pertanyaan hanya soal error.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Ganti rahasia dengan placeholder</h2><p class=\"mb-4\">Di <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> salin pesan error dan baris yang gagal. Ganti nilai kunci dengan NAMA_KUNCI sebelum menempel ke integrasi AI. Jangan mengirim berkas .env utuh.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Cek jawaban sebelum diterapkan</h2><p class=\"mb-4\">Di <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> terapkan saran hanya jika tidak menulis rahasia baru ke kode klien. Kalau kunci sempat tertempel, putar kunci itu lalu catat batasnya di <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "OWASP — Secrets Management",
   "sourceUrl": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
   "sourceSnippet": "Secrets should not be placed in source code, chat logs, or other shared context where they can be copied.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  },
  "en": {
   "title": "How Not to Paste Secrets into the AI Integration Chat",
   "desc": "How to hide API keys, tokens, and passwords before pasting a snippet into the Clincoo AI integration.",
   "content": "<p class=\"mb-4\">A snippet that helps debugging often carries a secret with it. The chat is not a place to store keys, even when the question is only about an error.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Replace secrets with placeholders</h2><p class=\"mb-4\">In <a href=\"https://editor.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">editor.clincoo.buzz</a> copy the error message and the failing line. Replace key values with KEY_NAME before pasting into the AI integration. Do not send a whole .env file.</p><h2 class=\"text-lg font-bold text-gray-900 mt-8 mb-2\">Check the answer before applying it</h2><p class=\"mb-4\">In <a href=\"https://app.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">app.clincoo.buzz</a> apply a suggestion only if it does not write a new secret into client code. If a key was pasted, rotate that key and note the boundary on <a href=\"https://blog.clincoo.buzz/\" target=\"_blank\" rel=\"noopener\" class=\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\">blog.clincoo.buzz</a>.</p>",
   "source": "OWASP — Secrets Management",
   "sourceUrl": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
   "sourceSnippet": "Secrets should not be placed in source code, chat logs, or other shared context where they can be copied.",
   "source2": "Clincoo Editor",
   "source2Url": "https://editor.clincoo.buzz/",
   "source3": "Clincoo Blog",
   "source3Url": "https://blog.clincoo.buzz/"
  }
 }
}
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();

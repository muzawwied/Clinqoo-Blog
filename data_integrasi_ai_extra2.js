// Clincoo Docs — artikel tambahan Integrasi AI (6 Oktober 2026, 07:00 WIB — tambah 2 artikel)
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
];
  extra.forEach(function (item) {
    if (!list.some(function (x) { return x.id === item.id; })) list.push(item);
  });
})();

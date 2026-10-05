// Clincoo Docs — artikel tambahan Integrasi AI (6 Oktober 2026, 04:00 WIB — tambah 2 artikel)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["integrasi-ai"]) {
    window.countryDataFiles["integrasi-ai"] = { "names": { "id": "Integrasi AI", "en": "AI integration" }, "articles": [] };
  }
  var list = window.countryDataFiles["integrasi-ai"].articles;
  var extra = [
{
 "id": "integrasi-ai-minta-diff-bukan-file-utuh",
 "langs": {
  "id": {
   "title": "Cara Minta Diff ke Integrasi AI, Bukan File Utuh",
   "desc": "Tata cara meminta integrasi AI Clincoo mengembalikan diff kecil, bukan menulis ulang seluruh berkas.",
   "content": "<p class=\\\"mb-4\\\">Meminta integrasi AI menulis ulang file utuh sering menghapus bagian yang masih benar dan sulit ditinjau.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Batasi ke satu berkas dan minta diff</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> sebut path file, gejala, dan hasil yang diharapkan. Minta perubahan dalam bentuk diff atau daftar baris, bukan file lengkap. Tolak jawaban yang mengganti stylesheet global atau menyalin ulang template.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Terapkan lalu cocokkan pratinjau</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> tempel hanya hunk yang relevan, simpan, lalu buka pratinjau. Bandingkan dengan catatan di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>. Jika ada baris di luar permintaan, kembalikan sebelum lanjut.</p>",
   "source": "MDN — Using the Web Developer Tools",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools",
   "sourceSnippet": "DevTools helps you inspect a change before you keep a larger rewrite.",
   "source2": "Clincoo Docs — integrasi AI",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/integrasi-ai-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Ask the AI Integration for a Diff, Not a Full File",
   "desc": "How to ask the Clincoo AI integration for a small diff instead of a full file rewrite.",
   "content": "<p class=\\\"mb-4\\\">Asking the AI integration to rewrite a whole file often deletes parts that were still correct and are hard to review.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Limit it to one file and ask for a diff</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> name the file path, the symptom, and the expected result. Ask for a diff or a line list, not a full file. Reject an answer that replaces the global stylesheet or recopies the template.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Apply it, then match the preview</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> paste only the relevant hunk, save, and open the preview. Compare it with the note on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>. If a line is outside the request, revert before continuing.</p>",
   "source": "MDN — Using the Web Developer Tools",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools",
   "sourceSnippet": "DevTools helps you inspect a change before you keep a larger rewrite.",
   "source2": "Clincoo Docs — integrasi AI",
   "source2Url": "https://docs.clincoo.buzz/dokumentasi/integrasi-ai-clincoo/",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  }
 }
},
{
 "id": "integrasi-ai-simpan-prompt-per-proyek",
 "langs": {
  "id": {
   "title": "Cara Simpan Prompt Integrasi AI per Proyek",
   "desc": "Tata cara menyimpan prompt yang berhasil di catatan proyek Clincoo agar sesi berikutnya tidak mulai dari nol.",
   "content": "<p class=\\\"mb-4\\\">Prompt yang hanya tinggal di obrolan hilang saat sesi ditutup, lalu permintaan yang sama ditulis ulang dengan batas yang berbeda.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Catat batas dan hasil</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> salin prompt yang berhasil: path file, larangan, dan hasil yang diharapkan. Simpan di catatan proyek, bukan di chat umum. Jangan sertakan token atau URL rahasia.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Pakai ulang di sesi baru</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> mulai sesi baru, tempel prompt yang sama, lalu bandingkan pratinjau dengan catatan di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>. Jika hasilnya menyimpang, perbaiki prompt sebelum menambah tugas kedua.</p>",
   "source": "Clincoo Docs — integrasi AI",
   "sourceUrl": "https://docs.clincoo.buzz/dokumentasi/integrasi-ai-clincoo/",
   "sourceSnippet": "The Clincoo AI integration is an assistant inside the editor; keep successful prompts with the project.",
   "source2": "MDN — Using the Web Developer Tools",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Save an AI Integration Prompt per Project",
   "desc": "How to store a working Clincoo AI prompt in the project note so the next session does not start from zero.",
   "content": "<p class=\\\"mb-4\\\">A prompt that only lives in chat disappears when the session closes, then the same request is rewritten with different limits.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Record the limit and the result</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> copy the prompt that worked: file path, refusals, and expected result. Store it in the project note, not a general chat. Do not include a token or a secret URL.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Reuse it in a new session</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> start a new session, paste the same prompt, and compare the preview with the note on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>. If the result drifts, fix the prompt before adding a second task.</p>",
   "source": "Clincoo Docs — integrasi AI",
   "sourceUrl": "https://docs.clincoo.buzz/dokumentasi/integrasi-ai-clincoo/",
   "sourceSnippet": "The Clincoo AI integration is an assistant inside the editor; keep successful prompts with the project.",
   "source2": "MDN — Using the Web Developer Tools",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools",
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

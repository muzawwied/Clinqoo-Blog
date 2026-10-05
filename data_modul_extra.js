// Clincoo Docs — artikel tambahan Modul (6 Oktober 2026, 04:00 WIB — tambah 1 artikel)
(function () {
  if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
  if (!window.countryDataFiles["modul"]) {
    window.countryDataFiles["modul"] = { "names": { "id": "Modul", "en": "Modules" }, "articles": [] };
  }
  var list = window.countryDataFiles["modul"].articles;
  var extra = [
{
 "id": "modul-nomodule-fallback-browser-lama",
 "langs": {
  "id": {
   "title": "Cara Beri Fallback nomodule untuk Browser Lama",
   "desc": "Tata cara memasangkan skrip type=module dengan skrip nomodule di Clincoo supaya browser lama tetap punya jalur klasik.",
   "content": "<p class=\\\"mb-4\\\">Berkas type=module diabaikan oleh browser lama. Tanpa jalur kedua, tombol yang bergantung pada skrip itu diam.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Dua skrip, satu tugas</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> pasang skrip modern dengan type=module dan skrip klasik dengan nomodule. Jangan menaruh logika yang sama di keduanya tanpa penjaga, supaya browser baru tidak menjalankan dua kali.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Uji di pratinjau</h2><p class=\\\"mb-4\\\">Di <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> buka konsol dan pastikan hanya satu jalur yang jalan. Catat nama berkas di <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>. Jika nomodule ikut termuat di browser baru, hapus duplikat sebelum deploy.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Older browsers ignore type=module; a nomodule script is the classic fallback.",
   "source2": "MDN — nomodule",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script#nomodule",
   "source3": "Clincoo Editor",
   "source3Url": "https://editor.clincoo.buzz/"
  },
  "en": {
   "title": "How to Add a nomodule Fallback for Older Browsers",
   "desc": "How to pair a type=module script with a nomodule script in Clincoo so an older browser still has a classic path.",
   "content": "<p class=\\\"mb-4\\\">A type=module file is ignored by older browsers. Without a second path, a button that depends on that script stays silent.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Two scripts, one job</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://editor.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">editor.clincoo.buzz</a> add the modern script with type=module and the classic script with nomodule. Do not put the same logic in both without a guard, or a new browser runs it twice.</p><h2 class=\\\"text-lg font-bold text-gray-900 mt-8 mb-2\\\">Test in preview</h2><p class=\\\"mb-4\\\">In <a href=\\\"https://app.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">app.clincoo.buzz</a> open the console and confirm only one path runs. Record the file names on <a href=\\\"https://blog.clincoo.buzz/\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\" class=\\\"underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 text-gray-900\\\">blog.clincoo.buzz</a>. If nomodule also loads in a new browser, remove the duplicate before deploy.</p>",
   "source": "MDN — JavaScript modules",
   "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
   "sourceSnippet": "Older browsers ignore type=module; a nomodule script is the classic fallback.",
   "source2": "MDN — nomodule",
   "source2Url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script#nomodule",
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

// Clincoo Blog — artikel cerita tambahan 2026-10-03
(function(){
  var extra = [
  {
    "id": "cerita-satu-error-konsol-satu-pertanyaan",
    "langs": {
      "id": {
        "title": "Satu Error Konsol, Satu Pertanyaan ke AI",
        "desc": "Menempel sepuluh stack sekaligus membuat jawaban AI melebar. Satu pesan error plus langkah reproduksi cukup untuk membuka simpul.",
        "content": "<p class=\"mb-4\">Suatu malam draf di editor.clincoo.buzz berhenti di TypeError. Alih-alih menempel seluruh log, saya salin satu baris merah dan file yang disebut.</p><p class=\"mb-4\">Pertanyaan berikutnya hanya: apa arti pesan ini, dan perubahan terkecil apa yang mengujinya. Bukan minta tulis ulang halaman.</p><p class=\"mb-4\">Saya catat langkah reproduksi: buka pratinjau, klik tombol simpan, lihat konsol. AI yang dapat konteks itu menunjuk variabel yang belum ada, bukan framework.</p><p class=\"mb-4\">Kalau jawaban menyentuh file lain, saya minta berhenti dan jelaskan satu baris. Itu lebih cepat daripada menerima patch besar.</p><p class=\"mb-4\">Pola yang sama saya tulis di blog.clincoo.buzz supaya sesi macet di app.clincoo.buzz tidak berubah jadi obrolan tanpa ujung.</p>",
        "source": "MDN: console",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
        "sourceSnippet": "developer.mozilla.org",
        "source2": "MDN: Console API",
        "source3": "web.dev: debug JavaScript"
      },
      "en": {
        "title": "One Console Error, One Question to AI",
        "desc": "Pasting ten stacks makes the AI answer sprawl. One error line plus a repro is enough to untie the knot.",
        "content": "<p class=\"mb-4\">One night a draft on editor.clincoo.buzz stopped on a TypeError. Instead of pasting the whole log, I copied the single red line and the file it named.</p><p class=\"mb-4\">The next question was only: what does this message mean, and what is the smallest change that tests it. Not a request to rewrite the page.</p><p class=\"mb-4\">I wrote the repro: open preview, click save, watch the console. With that context the AI pointed at a missing variable, not the framework.</p><p class=\"mb-4\">If the answer touched another file, I asked it to stop and explain one line. That was faster than accepting a large patch.</p><p class=\"mb-4\">I kept the same pattern on blog.clincoo.buzz so a stuck session on app.clincoo.buzz does not become an endless chat.</p>",
        "source": "MDN: console",
        "sourceUrl": "https://developer.mozilla.org/en-US/docs/Web/API/console",
        "sourceSnippet": "developer.mozilla.org",
        "source2": "MDN: Console API",
        "source3": "web.dev: debug JavaScript"
      }
    }
  }
];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["cerita"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["cerita"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();

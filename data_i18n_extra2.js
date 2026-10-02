// Clincoo Blog — artikel i18n tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "i18n-jangan-terjemahkan-kode-error",
    "langs": {
      "id": {
        "title": "Jangan Terjemahkan Kode Error dan Nama Merek di Salinan i18n Clincoo",
        "desc": "Kode error, nama kelas, dan merek Clincoo harus sama di ID dan EN supaya log bisa dicari.",
        "content": "<p class=\"mb-4\">Di berkas salinan Clincoo, biarkan kode seperti E_TIMEOUT, nama kelas CSS, dan kata Clincoo tidak diterjemahkan.</p><p class=\"mb-4\">Terjemahkan kalimat di sekitarnya. Contoh: Gagal menyimpan (E_TIMEOUT), bukan kode yang diubah menjadi bahasa lain.</p><p class=\"mb-4\">Jika kode diterjemahkan, pencarian di konsol dan tiket komunitas tidak ketemu. Uji kedua bahasa di app.clincoo.buzz.</p><p class=\"mb-4\">Nama tombol boleh diterjemahkan. Identifier di atribut data dan pesan log tidak.</p><p class=\"mb-4\">Minta AI menandai string yang harus tetap harfiah. Tempel satu objek salinan, bukan seluruh proyek.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Do Not Translate Error Codes and Brand Names in Clincoo i18n Copy",
        "desc": "Error codes, class names, and the Clincoo brand must stay identical in ID and EN so logs stay searchable.",
        "content": "<p class=\"mb-4\">In Clincoo copy files, leave codes such as E_TIMEOUT, CSS class names, and the word Clincoo untranslated.</p><p class=\"mb-4\">Translate the sentence around them. Example: Save failed (E_TIMEOUT), not a code rewritten into another language.</p><p class=\"mb-4\">If the code is translated, console search and community tickets will not match. Test both languages on app.clincoo.buzz.</p><p class=\"mb-4\">Button labels may be translated. Identifiers in data attributes and log messages must not.</p><p class=\"mb-4\">Ask AI to mark strings that must stay literal. Paste one copy object, not the whole project.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo editor",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
];
  var b=window.countryDataFiles&&window.countryDataFiles["i18n"];
  if(b&&b.articles)b.articles=b.articles.concat(extra);
})();

// Clincoo Blog — artikel i18n tambahan 2026-09-29
(function(){
  var extra = [{"id": "i18n-kunci-pendek-bukan-kalimat", "langs": {"id": {"title": "Pakai Kunci i18n Pendek, Bukan Kalimat Utuh sebagai Kunci", "desc": "Kunci berupa kalimat pecah saat copy diubah. Gunakan id stabil seperti save_draft.", "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, jangan jadikan teks tombol sebagai kunci terjemahan. Jika copy berubah, semua locale rusak.</p><p class=\"mb-4\">Pakai kunci pendek: save_draft, error_network. Nilai ID dan EN hidup di berkas locale terpisah.</p><p class=\"mb-4\">Saat minta bantuan AI, kirim tabel kunci plus dua bahasa. Jangan minta AI menulis ulang seluruh UI.</p><p class=\"mb-4\">Jangan gabungkan string dengan + jika urutan kata beda antar bahasa. Pakai placeholder {name}.</p><p class=\"mb-4\">Pola ini dipakai di app.clincoo.buzz dan artikel bilingual blog.clincoo.buzz.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"}, "en": {"title": "Use Short i18n Keys, Not Full Sentences as Keys", "desc": "Sentence keys break when copy changes. Use stable ids such as save_draft.", "content": "<p class=\"mb-4\">On editor.clincoo.buzz do not use the button label as the translation key. If copy changes, every locale breaks.</p><p class=\"mb-4\">Use short keys: save_draft, error_network. ID and EN values live in separate locale files.</p><p class=\"mb-4\">When asking AI for help, send the key table plus both languages. Do not ask AI to rewrite the whole UI.</p><p class=\"mb-4\">Do not concatenate strings with + if word order differs by language. Use {name} placeholders.</p><p class=\"mb-4\">This pattern is used on app.clincoo.buzz and on bilingual posts on blog.clincoo.buzz.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"}}}];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["i18n"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["i18n"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();

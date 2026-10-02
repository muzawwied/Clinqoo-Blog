// Clincoo Blog — artikel komunitas tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "komunitas-jangan-tempel-rahasia-di-chat",
    "langs": {
      "id": {
        "title": "Jangan Tempel Token atau Kunci di Chat Komunitas Clincoo",
        "desc": "Cuplikan bantuan sering ikut terarsip. Hapus token, cookie, dan URL bertanda tangan sebelum kirim.",
        "content": "<p class=\"mb-4\">Sebelum bertanya di komunitas Clincoo, hapus Authorization, cookie, dan query token dari cuplikan Network.</p><p class=\"mb-4\">Ganti nilai rahasia dengan placeholder seperti TOKEN. Biarkan kode status, pesan error, dan jalur URL tetap ada.</p><p class=\"mb-4\">Jangan kirim berkas .env. Cukup sebut nama variabel yang kosong, bukan isinya.</p><p class=\"mb-4\">Jika kunci sudah terkirim, putar rahasia itu di app.clincoo.buzz lalu anggap nilai lama bocor.</p><p class=\"mb-4\">Minta AI menyensor cuplikan sebelum dikirim. Tempel log, minta versi yang aman, lalu kirim yang sudah disensor.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Do Not Paste Tokens or Keys in the Clincoo Community Chat",
        "desc": "Help snippets are often archived. Remove tokens, cookies, and signed URLs before you send them.",
        "content": "<p class=\"mb-4\">Before asking in the Clincoo community, remove Authorization, cookies, and query tokens from Network snippets.</p><p class=\"mb-4\">Replace secret values with a placeholder such as TOKEN. Keep the status code, error message, and URL path.</p><p class=\"mb-4\">Do not send a .env file. Name the empty variable, not its value.</p><p class=\"mb-4\">If a key was already sent, rotate that secret in app.clincoo.buzz and treat the old value as leaked.</p><p class=\"mb-4\">Ask AI to redact the snippet before you send it. Paste the log, request a safe version, then send the redacted one.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo editor",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
,
  {"id":"komunitas-sebut-orang-bukan-semua","langs":{"id":{"title":"Sebut Orang yang Diminta, Jangan Tag Semua di Chat Clincoo","desc":"Tag semua orang membuat pertanyaan tenggelam. Sebut satu pemilik dan satu pertanyaan.","content":"<p class=\"mb-4\">Di komunitas Clincoo, pesan yang men-tag semua orang sering dibalas lambat karena tidak ada pemilik yang jelas.</p><p class=\"mb-4\">Sebut satu nama, satu URL pratinjau dari editor.clincoo.buzz, dan satu pertanyaan. Jangan menumpuk tiga bug dalam satu chat.</p><p class=\"mb-4\">Jika belum tahu pemiliknya, tanyakan di kanal proyek, bukan di umum. Lampirkan screenshot gejala, bukan seluruh repositori.</p><p class=\"mb-4\">Minta AI merangkas pertanyaan jadi tiga baris: gejala, yang sudah dicoba, dan bantuan yang diminta. Jangan kirim log mentah yang berisi token.</p><p class=\"mb-4\">Setelah beres, tandai pesan sebagai terjawab di app.clincoo.buzz. Simpan pola pertanyaan ini di blog.clincoo.buzz agar anggota baru tidak mengulang tag massal.</p>","source":"MDN","sourceUrl":"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills","sourceSnippet":"Pertanyaan yang spesifik lebih mudah dijawab daripada permintaan umum.","source2":"Clincoo App","source3":"Clincoo Blog"},"en":{"title":"Mention the Person You Need, Do Not Tag Everyone in Clincoo Chat","desc":"Tagging everyone buries the question. Name one owner and ask one question.","content":"<p class=\"mb-4\">In the Clincoo community, messages that tag everyone are often answered late because no owner is clear.</p><p class=\"mb-4\">Name one person, one preview URL from editor.clincoo.buzz, and one question. Do not stack three bugs in a single chat.</p><p class=\"mb-4\">If you do not know the owner, ask in the project channel, not the general one. Attach a screenshot of the symptom, not the whole repository.</p><p class=\"mb-4\">Ask AI to compress the question into three lines: symptom, what you tried, and the help you need. Do not send a raw log that contains a token.</p><p class=\"mb-4\">When it is done, mark the message answered on app.clincoo.buzz. Keep this question pattern on blog.clincoo.buzz so new members do not repeat mass tags.</p>","source":"MDN","sourceUrl":"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills","sourceSnippet":"A specific question is easier to answer than a general request.","source2":"Clincoo App","source3":"Clincoo Blog"}}}
];
  var b=window.countryDataFiles&&window.countryDataFiles["komunitas"];
  if(b&&b.articles)b.articles=b.articles.concat(extra);
})();

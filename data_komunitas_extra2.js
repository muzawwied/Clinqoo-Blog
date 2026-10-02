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
];
  var b=window.countryDataFiles&&window.countryDataFiles["komunitas"];
  if(b&&b.articles)b.articles=b.articles.concat(extra);
})();

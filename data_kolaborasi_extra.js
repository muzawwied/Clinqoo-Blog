// Clincoo Blog — artikel kolaborasi tambahan 2026-09-30
(function(){
  var extra = [{"id": "kolaborasi-komentar-baris-bukan-obrolan", "langs": {"id": {"title": "Komentar di Baris Kode Clincoo, Bukan Obrolan Panjang", "desc": "Masukan rekan lebih mudah ditindak jika menempel pada baris, bukan di grup chat terpisah.", "content": "<p class=\"mb-4\">Tim yang menempel screenshot editor.clincoo.buzz ke chat kehilangan konteks baris. Perbaikan jadi tebak-tebakan.</p><p class=\"mb-4\">Tulis komentar di file atau di PR: path, nomor baris, dan hasil yang diharapkan. Satu masalah per komentar.</p><p class=\"mb-4\">Jangan campur usulan merek dengan perbaikan bug. Pisahkan tugas di app.clincoo.buzz.</p><p class=\"mb-4\">Jika minta AI merangkum ulasan, kirim diff plus komentar, bukan seluruh riwayat chat.</p><p class=\"mb-4\">Pola yang sama dijaga di blog.clincoo.buzz: tautkan bukti ke lokasi yang tepat.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"}, "en": {"title": "Comment on the Clincoo Code Line, Not in a Long Chat", "desc": "Teammate feedback is easier to act on when it sticks to a line, not a separate group chat.", "content": "<p class=\"mb-4\">Teams that paste editor.clincoo.buzz screenshots into chat lose line context. The fix becomes a guess.</p><p class=\"mb-4\">Write the comment in the file or PR: path, line number, and expected result. One issue per comment.</p><p class=\"mb-4\">Do not mix brand suggestions with bug fixes. Split the work on app.clincoo.buzz.</p><p class=\"mb-4\">If you ask AI to summarize a review, send the diff plus comments, not the whole chat history.</p><p class=\"mb-4\">blog.clincoo.buzz keeps the same pattern: link evidence to the exact place.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"}}}];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["kolaborasi"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["kolaborasi"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();

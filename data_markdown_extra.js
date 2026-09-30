// Clincoo Blog — artikel markdown tambahan 2026-09-30
(function(){
  var extra = [{"id": "markdown-pratinjau-html-sebelum-publish", "langs": {"id": {"title": "Pratinjau HTML Markdown Clincoo sebelum Publish", "desc": "Markdown yang terlihat rapi di editor bisa pecah di halaman hidup. Render dulu, baru unggah.", "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, daftar dan tautan Markdown sering terlihat benar sampai dipindah ke index.html statis.</p><p class=\"mb-4\">Render ke HTML di pratinjau. Cek heading berurutan, tautan relatif, dan gambar alt. Jangan andalkan preview sumber saja.</p><p class=\"mb-4\">Jika tabel pecah, sederhanakan kolom. Minta AI memperbaiki satu blok, bukan seluruh berkas.</p><p class=\"mb-4\">Uji halaman di app.clincoo.buzz dengan zoom 200%. Catat pola yang lolos di blog.clincoo.buzz.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"}, "en": {"title": "Preview Clincoo Markdown HTML before You Publish", "desc": "Markdown that looks clean in the editor can break on the live page. Render first, then upload.", "content": "<p class=\"mb-4\">On editor.clincoo.buzz, Markdown lists and links often look fine until they land in a static index.html.</p><p class=\"mb-4\">Render to HTML in preview. Check heading order, relative links, and image alt text. Do not trust source preview alone.</p><p class=\"mb-4\">If a table breaks, simplify the columns. Ask AI to fix one block, not the whole file.</p><p class=\"mb-4\">Test the page on app.clincoo.buzz at 200% zoom. Record patterns that pass on blog.clincoo.buzz.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"}}}];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["markdown"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["markdown"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();

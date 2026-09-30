// Clincoo Blog — artikel editor tambahan 2026-09-30
(function(){
  var extra = [{"id": "editor-cari-simbol-bukan-scroll-manual", "langs": {"id": {"title": "Cari Simbol di Editor, Jangan Scroll Manual", "desc": "Scroll panjang di file Clincoo membuat Anda salah ubah fungsi yang mirip.", "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, file halaman bisa ratusan baris. Scroll mencari handleSubmit sering mendarat di fungsi lain.</p><p class=\"mb-4\">Pakai pencarian simbol atau Find in file dengan kata utuh, bukan potongan huruf.</p><p class=\"mb-4\">Loncat ke definisi, ubah satu tempat, lalu pratinjau. Jangan ganti semua kemunculan sekaligus.</p><p class=\"mb-4\">Jika hasil pencarian terlalu banyak, rename dulu nama fungsi agar unik.</p><p class=\"mb-4\">Clincoo di blog.clincoo.buzz lebih aman diedit bila Anda menuju simbol, bukan menggeser halaman.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"}, "en": {"title": "Search for Symbols in the Editor, Do Not Scroll by Hand", "desc": "Long scrolling in a Clincoo file makes you edit the wrong similar function.", "content": "<p class=\"mb-4\">On editor.clincoo.buzz, a page file can be hundreds of lines. Scrolling for handleSubmit often lands on another function.</p><p class=\"mb-4\">Use symbol search or Find in file with a whole word, not a letter fragment.</p><p class=\"mb-4\">Jump to the definition, change one place, then preview. Do not replace every occurrence at once.</p><p class=\"mb-4\">If search returns too many hits, rename the function first so the name is unique.</p><p class=\"mb-4\">Clincoo on blog.clincoo.buzz is safer to edit when you jump to a symbol instead of dragging the page.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"}}}];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["editor"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["editor"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();

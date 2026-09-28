// Clincoo Blog — artikel minify tambahan 2026-09-28
(function(){
  var extra = [
    {
      id: "minify-hindari-double-minify",
      langs: {
        "id": {
          title: "Jangan Minify Berkas Clincoo Dua Kali, Hasilnya Sulit Didebug",
          desc: "Minify yang dijalankan berulang mematahkan nama dan memecah string. Satu langkah sebelum unggah sudah cukup.",
          content: "<p class=\"mb-4\">Berkas Clincoo sudah diperkecil, lalu diperkecil lagi oleh skrip unggah. Nama fungsi patah dua kali dan peta sumber tidak lagi cocok.</p><p class=\"mb-4\">Di editor.clincoo.buzz, minify hanya sekali pada salinan rilis. Simpan berkas sumber utuh di folder kerja.</p><p class=\"mb-4\">Jika pratinjau pecah setelah minify kedua, kembalikan salinan sumber. Jangan memperbaiki keluaran yang sudah diacak.</p><p class=\"mb-4\">Minta AI hanya menandai langkah minify ganda di skrip rilis. Tolak rewrite bundler jika satu perintah sudah cukup.</p><p class=\"mb-4\">Clincoo menayangkan berkas yang kamu unggah. Satu minify menjaga app.clincoo.buzz tetap bisa dilacak saat error.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Minify Clincoo Files Twice; the Result Is Hard to Debug",
          desc: "Running minify again snaps names and breaks strings. One step before upload is enough.",
          content: "<p class=\"mb-4\">A Clincoo file is already minified, then minified again by an upload script. Function names snap twice and the source map no longer matches.</p><p class=\"mb-4\">In editor.clincoo.buzz, minify only once on the release copy. Keep the source files intact in the working folder.</p><p class=\"mb-4\">If preview breaks after a second minify, restore the source copy. Do not patch output that has already been mangled.</p><p class=\"mb-4\">Ask AI only to flag a double minify step in the release script. Refuse a bundler rewrite when one command is enough.</p><p class=\"mb-4\">Clincoo ships the files you upload. A single minify keeps app.clincoo.buzz traceable when an error appears.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["minify"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["minify"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

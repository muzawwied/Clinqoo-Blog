// Clincoo Blog — artikel export tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "export-cek-tautan-relatif-sebelum-zip",
    "langs": {
      "id": {
        "title": "Cek Tautan Relatif sebelum Zip Ekspor Clincoo",
        "desc": "Tautan ke editor.clincoo.buzz rusak di zip offline. Ubah yang internal menjadi path relatif.",
        "content": "<p class=\"mb-4\">Unduhan zip dari editor.clincoo.buzz sering dibuka sebagai berkas lokal. Tautan absolut ke pratinjau tidak ikut terbawa.</p><p class=\"mb-4\">Sebelum ekspor, daftar href dan src. Tautan antarhalaman proyek harus relatif, misalnya ./tentang/.</p><p class=\"mb-4\">Biarkan tautan eksternal utuh, termasuk blog.clincoo.buzz, dan tandai target blank hanya untuk yang di luar zip.</p><p class=\"mb-4\">Buka index.html dari zip di browser, klik setiap menu, dan catat 404. Jangan kirim zip yang belum diuji.</p><p class=\"mb-4\">Ulangi cek yang sama setelah salin template di app.clincoo.buzz agar aset gambar tidak menunjuk URL sementara.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Ekspor zip Clincoo",
        "source2": "MDN: URL paths",
        "source3": "Clincoo Editor"
      },
      "en": {
        "title": "Check Relative Links before a Clincoo Export Zip",
        "desc": "Links to editor.clincoo.buzz break in an offline zip. Turn internal ones into relative paths.",
        "content": "<p class=\"mb-4\">A zip from editor.clincoo.buzz is often opened as local files. Absolute preview links are not included.</p><p class=\"mb-4\">Before export, list href and src values. Links between project pages should be relative, for example ./tentang/.</p><p class=\"mb-4\">Leave external links intact, including blog.clincoo.buzz, and use target blank only for pages outside the zip.</p><p class=\"mb-4\">Open index.html from the zip in a browser, click each menu, and note 404s. Do not send an untested zip.</p><p class=\"mb-4\">Repeat the same check after copying a template on app.clincoo.buzz so images do not point at a temporary URL.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Clincoo zip export",
        "source2": "MDN: URL paths",
        "source3": "Clincoo Editor"
      }
    }
  }
];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles['export']) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles['export'].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();

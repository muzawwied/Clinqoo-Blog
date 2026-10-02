// Clincoo Blog — artikel export tambahan 2026-10-03 WIB
(function(){
  var extra = [
{
  "id": "export-uji-unzip-di-folder-kosong",
  "langs": {
    "id": {
      "title": "Uji Unzip Ekspor Clincoo di Folder Kosong",
      "desc": "Zip yang lolos unduh masih bisa rusak saat diekstrak. Buka di folder kosong sebelum unggah ke host.",
      "content": "<p class=\"mb-4\">Unduhan dari editor.clincoo.buzz belum tentu utuh. Koneksi yang putus di tengah sering menyisakan zip yang tetap bisa dibuka, tetapi file di dalamnya terpotong.</p><p class=\"mb-4\">Buat folder kosong, ekstrak zip ke sana, lalu cek index.html, aset CSS, dan gambar. Jangan ekstrak menimpa folder proyek yang sedang Anda edit.</p><p class=\"mb-4\">Jika ada peringatan path absolut atau file di luar folder, batalkan unggah. Zip seperti itu berbahaya di host baru.</p><p class=\"mb-4\">Minta AI menyusun daftar file yang wajib ada dari struktur proyek Clincoo. Bandingkan dengan hasil ekstrak, bukan dengan nama zip.</p><p class=\"mb-4\">Catat hasil uji di catatan rilis blog.clincoo.buzz. Tim berikutnya tidak perlu mengulang dugaan yang sama.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Editor resmi Clincoo",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    },
    "en": {
      "title": "Test a Clincoo Export Unzip in an Empty Folder",
      "desc": "A zip that finishes downloading can still be corrupt when extracted. Open it in an empty folder before uploading to a host.",
      "content": "<p class=\"mb-4\">A download from editor.clincoo.buzz is not automatically intact. A dropped connection often leaves a zip that still opens, while files inside are truncated.</p><p class=\"mb-4\">Create an empty folder, extract the zip there, then check index.html, CSS assets, and images. Do not extract over the project folder you are editing.</p><p class=\"mb-4\">If you see absolute paths or files outside the folder, cancel the upload. That kind of zip is dangerous on a new host.</p><p class=\"mb-4\">Ask AI to list files that must exist from the Clincoo project structure. Compare that list with the extract, not with the zip name.</p><p class=\"mb-4\">Record the test on a blog.clincoo.buzz release note. The next person should not repeat the same guess.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Official Clincoo editor",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    }
  }
},
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

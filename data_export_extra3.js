// Clincoo Blog — artikel export tambahan 2026-09-25 run3
(function(){
  var extra = [
    {
      id: "export-cek-izin-file-setelah-unzip",
      langs: {
        "id": {
          title: "Cek Izin File setelah Unzip Ekspor Clincoo",
          desc: "Zip yang diekstrak kadang mengunci HTML atau aset sehingga host menolak dibaca pengunjung.",
          content: "<p class=\"mb-4\">Setelah unzip proyek Clincoo, beberapa file HTML atau gambar tidak bisa dibuka di host karena izin terlalu ketat.</p><p class=\"mb-4\">Di komputer, pastikan file biasa bisa dibaca (bukan hanya pemilik). Folder aset harus bisa dilalui. Jangan biarkan berkas jadi executable tanpa alasan.</p><p class=\"mb-4\">Unggah ulang dari alur editor.clincoo.buzz setelah izin dirapikan. Uji satu halaman dan satu gambar publik.</p><p class=\"mb-4\">Minta AI merangkum perintah cek izin yang aman untuk sistem operasimu. Tempel daftar file hasil unzip.</p><p class=\"mb-4\">Clincoo mengekspor isi halaman, bukan kebijakan host. Izin file yang benar menjaga app.clincoo.buzz dan salinanmu tetap bisa dibaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check File Permissions after Unzipping a Clincoo Export",
          desc: "Extracted zips sometimes lock HTML or assets so the host cannot serve them to visitors.",
          content: "<p class=\"mb-4\">After unzipping a Clincoo project, some HTML or image files fail on the host because permissions are too strict.</p><p class=\"mb-4\">On your computer, make ordinary files readable (not owner-only). Asset folders must be traversable. Do not leave files executable without a reason.</p><p class=\"mb-4\">Upload again from your editor.clincoo.buzz flow after permissions are cleaned up. Test one public page and one image.</p><p class=\"mb-4\">Ask AI to summarize safe permission-check commands for your OS. Paste the unzipped file list.</p><p class=\"mb-4\">Clincoo exports page contents, not host policy. Correct file permissions keep app.clincoo.buzz and your copy readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["export"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["export"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

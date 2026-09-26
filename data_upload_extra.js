// Clincoo Blog — artikel upload tambahan 2026-09-26 WIB
(function(){
  var extra = [
    {
      id: "upload-chunk-file-besar",
      langs: {
        "id": {
          title: "Pecah File Besar jadi Potongan saat Unggah Clincoo",
          desc: "Satu request 80 MB mudah timeout. Potongan kecil plus indeks membuat unggahan bisa dilanjutkan.",
          content: "<p class=\"mb-4\">Form Clincoo yang mengirim video utuh lewat satu FormData sering putus di menit kedua. Server menerima body tidak lengkap.</p><p class=\"mb-4\">Di editor.clincoo.buzz, potong file dengan slice() misalnya 2 MB per bagian. Kirim nomor potongan dan total. Gabungkan di server sebelum menandai selesai.</p><p class=\"mb-4\">Jangan mengirim semua potongan sekaligus. Batasi paralel, simpan indeks potongan yang sukses, dan lanjutkan dari yang gagal.</p><p class=\"mb-4\">Minta AI hanya menambah helper slice plus antrean. Tempel handler unggah yang sekarang mengirim file utuh.</p><p class=\"mb-4\">Clincoo tidak memotong berkas otomatis. Chunk menjaga unggahan besar sampai ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Split a Large File into Chunks during a Clincoo Upload",
          desc: "A single 80 MB request times out easily. Small chunks plus an index let the upload resume.",
          content: "<p class=\"mb-4\">A Clincoo form that posts a whole video in one FormData often drops in the second minute. The server gets an incomplete body.</p><p class=\"mb-4\">In editor.clincoo.buzz, slice the file into parts, for example 2 MB each. Send the part index and the total. Join them on the server before marking done.</p><p class=\"mb-4\">Do not fire every chunk at once. Cap parallelism, store which parts succeeded, and resume the ones that failed.</p><p class=\"mb-4\">Ask AI to add only a slice helper plus a queue. Paste the upload handler that now sends the whole file.</p><p class=\"mb-4\">Clincoo does not chunk files for you. Chunks keep a large upload alive through to app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["upload"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["upload"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

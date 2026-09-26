// Clincoo Blog — artikel cache tambahan 2026-09-23 sore
(function(){
  var extra = [
    {
      id: "cache-bypass-query-saat-uji-rilis",
      langs: {
        "id": {
          title: "Tambah Query String saat Menguji Rilis Cache Clincoo",
          desc: "Cache CDN menahan berkas lama. Query unik memaksa unduhan baru tanpa menunggu TTL habis.",
          content: "<p class=\"mb-4\">Setelah publish dari app.clincoo.buzz, pratinjau masih menampilkan CSS kemarin karena CDN mengabaikan isi baru dengan URL sama.</p><p class=\"mb-4\">Tambahkan ?v=tanggal atau hash pendek pada tautan stylesheet dan skrip hanya saat uji. Jangan biarkan query itu di produksi tanpa strategi versi.</p><p class=\"mb-4\">Cara lebih bersih: ubah nama file berhash di editor.clincoo.buzz agar cache lama tidak pernah dipakai lagi.</p><p class=\"mb-4\">Bandingkan Network DevTools sebelum dan sesudah query. Status 200 dari jaringan, bukan 304 dari cache, menandai uji berhasil.</p><p class=\"mb-4\">Clincoo tidak menambahkan query otomatis. Bypass sadar membantu memastikan rilis benar sebelum pengunjung umum datang.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Query String when Testing a Clincoo Cache Release",
          desc: "A CDN cache holds the old file. A unique query forces a fresh download without waiting for TTL.",
          content: "<p class=\"mb-4\">After a publish from app.clincoo.buzz, preview still shows yesterday’s CSS because the CDN ignores new bytes at the same URL.</p><p class=\"mb-4\">Add ?v=date or a short hash to stylesheet and script links only while testing. Do not leave that query in production without a version plan.</p><p class=\"mb-4\">A cleaner way: change hashed filenames in editor.clincoo.buzz so the old cache is never reused.</p><p class=\"mb-4\">Compare Network in DevTools before and after the query. A network 200, not a cached 304, marks a successful test.</p><p class=\"mb-4\">Clincoo does not append queries for you. A deliberate bypass confirms the release before the public sees it.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["cache"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["cache"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

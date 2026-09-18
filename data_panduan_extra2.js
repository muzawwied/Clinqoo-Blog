// Clinqoo Blog — artikel panduan tambahan 2026-09-18
(function(){
  var extra = [
    {
      id: "cek-menu-di-setiap-halaman",
      langs: {
        "id": {
          title: "Cek Menu di Setiap Halaman Clinqoo sebelum Membagikan Situs",
          desc: "Menu yang lengkap di beranda sering hilang di halaman dalam. Cek semua file HTML.",
          content: "<p class=\"mb-4\">Banyak situs pemula punya menu utuh hanya di index.html. Halaman tentang atau kontak kehilangan tautan pulang.</p><p class=\"mb-4\">Di Clinqoo, buka setiap HTML dan bandingkan blok nav. Samakan urutan dan path relatif. Pratinjau tiap halaman, bukan hanya beranda.</p><p class=\"mb-4\">Halaman yang tidak masuk menu juga perlu tautan kembali ke beranda di dalam isi, minimal satu.</p><p class=\"mb-4\">Menu yang konsisten membuat situs terasa satu produk, bukan tumpukan file terpisah.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Ruang kerja Clinqoo",
          source2: "Clinqoo Editor", sourceUrl2: "https://clinqoo.pages.dev/editor/", sourceSnippet2: "Berkas proyek"
        },
        "en": {
          title: "Check the Menu on Every Clinqoo Page before You Share the Site",
          desc: "A complete home menu often vanishes on inner pages. Check every HTML file.",
          content: "<p class=\"mb-4\">Many beginner sites have a full menu only on index.html. About or contact pages lose the way home.</p><p class=\"mb-4\">In Clinqoo, open each HTML file and compare the nav block. Match the order and relative paths. Preview every page, not only home.</p><p class=\"mb-4\">A page that is not in the menu still needs one in-body link back to home.</p><p class=\"mb-4\">A consistent menu makes the site feel like one product, not a pile of separate files.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Ruang kerja Clinqoo",
          source2: "Clinqoo Editor", sourceUrl2: "https://clinqoo.pages.dev/editor/", sourceSnippet2: "Berkas proyek"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["panduan"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["panduan"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

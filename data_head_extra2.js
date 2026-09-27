// Clincoo Blog — artikel head tambahan 2026-09-28
(function(){
  var extra = [
    {
      id: "head-theme-color-selaras-merek",
      langs: {
        "id": {
          title: "Samakan theme-color di Head dengan Merek Clincoo",
          desc: "theme-color default browser tidak cocok dengan toolbar. Satu meta menjaga chrome selaras merek.",
          content: "<p class=\"mb-4\">PWA atau tab Clincoo di Android memakai hijau sistem, bukan warna merek. Pengunjung merasa membuka aplikasi lain.</p><p class=\"mb-4\">Tambah <meta name=\"theme-color\" content=\"#0f172a\"> di editor.clincoo.buzz. Samakan dengan header situs, bukan warna acak dari template.</p><p class=\"mb-4\">Jika ada mode gelap, sediakan media prefers-color-scheme pada meta kedua. Jangan campur dua warna tanpa media.</p><p class=\"mb-4\">Minta AI hanya menambah theme-color. Tempel head, bukan mengganti seluruh CSS tema.</p><p class=\"mb-4\">Clincoo menayangkan meta yang kamu simpan. theme-color yang selaras menjaga chrome di app.clincoo.buzz terasa satu merek.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Align theme-color in the Head with the Clincoo Brand",
          desc: "The default browser theme-color clashes with the toolbar. One meta keeps chrome on brand.",
          content: "<p class=\"mb-4\">A Clincoo PWA or Android tab uses the system green, not the brand color. Visitors feel they opened another app.</p><p class=\"mb-4\">Add <meta name=\"theme-color\" content=\"#0f172a\"> in editor.clincoo.buzz. Match the site header, not a random template swatch.</p><p class=\"mb-4\">If you have a dark mode, add a second meta with prefers-color-scheme. Do not mix two colors without media.</p><p class=\"mb-4\">Ask AI to add theme-color only. Paste the head, do not replace the whole theme CSS.</p><p class=\"mb-4\">Clincoo ships the meta you save. An aligned theme-color keeps chrome on app.clincoo.buzz on brand.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "head-apple-touch-icon-ukuran",
      langs: {
        "id": {
          title: "Pasang apple-touch-icon Berukuran Cukup di Head Clincoo",
          desc: "Favicon 16px pecah saat ditambah ke layar utama. Ikon sentuh butuh berkas lebih besar.",
          content: "<p class=\"mb-4\">Pengunjung menambah situs Clincoo ke layar iOS. Ikon muncul blur karena hanya favicon kecil yang ada di head.</p><p class=\"mb-4\">Tambah <link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\"> di editor.clincoo.buzz. Pakai PNG 180x180 tanpa transparansi berlebih.</p><p class=\"mb-4\">Jangan arahkan apple-touch-icon ke favicon.ico. Format dan ukuran berbeda.</p><p class=\"mb-4\">Minta AI hanya menambah satu tautan apple-touch-icon. Tempel head, pastikan file ada di repo.</p><p class=\"mb-4\">Clincoo tidak membuat ikon layar utama. Berkas yang cukup besar menjaga pintasan di app.clincoo.buzz tetap tajam.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Put a Large Enough apple-touch-icon in the Clincoo Head",
          desc: "A 16px favicon breaks when added to the home screen. Touch icons need a larger file.",
          content: "<p class=\"mb-4\">A visitor adds a Clincoo site to the iOS home screen. The icon looks blurry because the head only has a tiny favicon.</p><p class=\"mb-4\">Add <link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\"> in editor.clincoo.buzz. Use a 180x180 PNG without heavy transparency.</p><p class=\"mb-4\">Do not point apple-touch-icon at favicon.ico. The format and size differ.</p><p class=\"mb-4\">Ask AI to add one apple-touch-icon link only. Paste the head and confirm the file exists in the repo.</p><p class=\"mb-4\">Clincoo does not invent a home-screen icon. A large enough file keeps the shortcut on app.clincoo.buzz sharp.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["head"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["head"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

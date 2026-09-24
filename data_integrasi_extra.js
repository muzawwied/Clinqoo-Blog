// Clincoo Blog — artikel integrasi tambahan 2026-09-24
(function(){
  var extra = [
    {
      id: "integrasi-pixel-iklan-tertunda",
      langs: {
        "id": {
          title: "Pasang Pixel Iklan di Clincoo tanpa Menahan First Paint",
          desc: "Pixel Meta atau Google Ads di head menahan render. Tunda sampai idle dan hormati persetujuan.",
          content: "<p class=\"mb-4\">Pixel iklan yang ditempel mentah di head halaman Clincoo sering menahan First Paint. Pengunjung melihat layar kosong sementara skrip pihak ketiga selesai diunduh.</p><p class=\"mb-4\">Muat pixel setelah idle atau setelah pengunjung setuju cookie. Pakai async atau requestIdleCallback. Jangan pasang dua pixel untuk akun yang sama.</p><p class=\"mb-4\">Jangan taruh ID pixel di lima file. Satu cuplikan di layout cukup. Simpan ID di catatan privat, bukan di komentar HTML publik jika tidak perlu.</p><p class=\"mb-4\">Uji di pratinjau editor.clincoo.buzz dengan jaringan lambat. Minta AI hanya menambah satu skrip tertunda, bukan mengganti seluruh head.</p><p class=\"mb-4\">Clincoo tidak memasang iklan otomatis. Pixel yang ditunda menjaga halaman tetap terasa milikmu, bukan milik jaringan iklan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add an Ad Pixel on Clincoo without Holding First Paint",
          desc: "A Meta or Google Ads pixel in the head holds render. Defer until idle and honor consent.",
          content: "<p class=\"mb-4\">An ad pixel pasted raw into a Clincoo page head often holds First Paint. Visitors stare at a blank screen while a third-party script finishes downloading.</p><p class=\"mb-4\">Load the pixel after idle or after the visitor consents to cookies. Use async or requestIdleCallback. Do not install two pixels for the same account.</p><p class=\"mb-4\">Do not drop the pixel ID into five files. One snippet in the layout is enough. Keep IDs in a private note, not in public HTML comments if they are not needed there.</p><p class=\"mb-4\">Test in the editor.clincoo.buzz preview on a slow network. Ask AI only to add one deferred script, not to replace the whole head.</p><p class=\"mb-4\">Clincoo does not install ads for you. A deferred pixel keeps the page feeling like yours, not like an ad network.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "integrasi-embed-audio-podcast",
      langs: {
        "id": {
          title: "Sisipkan Pemutar Audio di Clincoo tanpa Merusak Kartu",
          desc: "Embed podcast sering lebih tinggi dari kolom. Kunci tinggi, lazy-load, dan beri tautan unduh.",
          content: "<p class=\"mb-4\">Halaman Clincoo yang memuat podcast atau cuplikan audio lewat iframe vendor sering mendorong kartu tetangga. Tinggi pemutar berubah setelah skrip vendor siap.</p><p class=\"mb-4\">Bungkus embed dalam wadah dengan tinggi minimum. Set loading lazy. Sediakan tautan unduh atau buka di tab baru jika iframe diblokir.</p><p class=\"mb-4\">Jangan autoplay. Pengunjung di ruang publik atau dengan kuota terbatas tidak meminta musik mendadak.</p><p class=\"mb-4\">Cek pratinjau editor.clincoo.buzz pada layar sempit. Minta AI hanya membungkus satu pemutar, bukan menyalin tema vendor.</p><p class=\"mb-4\">Clincoo merender HTML yang kamu simpan. Embed audio yang terbungkus menjaga grid dan akses tetap utuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Embed an Audio Player in Clincoo without Breaking Cards",
          desc: "Podcast embeds are often taller than the column. Lock height, lazy-load, and offer a download link.",
          content: "<p class=\"mb-4\">A Clincoo page that loads a podcast or audio clip through a vendor iframe often shoves neighboring cards. Player height changes after the vendor script is ready.</p><p class=\"mb-4\">Wrap the embed in a box with a minimum height. Set loading lazy. Offer a download or open-in-new-tab link if the iframe is blocked.</p><p class=\"mb-4\">Do not autoplay. Visitors in public spaces or on limited data did not ask for sudden audio.</p><p class=\"mb-4\">Check the editor.clincoo.buzz preview on a narrow screen. Ask AI only to wrap one player, not to copy the vendor theme.</p><p class=\"mb-4\">Clincoo renders the HTML you save. A wrapped audio embed keeps the grid and access intact.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["integrasi"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["integrasi"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

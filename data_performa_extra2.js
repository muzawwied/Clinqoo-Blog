// Clincoo Blog — artikel performa tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "performa-lazy-load-gambar-bawah",
      langs: {
        "id": {
          title: "Lazy-load Gambar di Bawah Lipatan Halaman Clincoo",
          desc: "Foto galeri yang jauh dari hero tidak perlu diunduh di detik pertama. Atribut loading lazy sudah ada di HTML.",
          content: "<p class=\"mb-4\">Halaman layanan Clincoo sering memuat sepuluh foto sekaligus. Pengunjung di jaringan lambat menunggu galeri yang belum mereka lihat.</p><p class=\"mb-4\">Pasang loading=\"lazy\" pada img di bawah lipatan. Biarkan hero dan logo tanpa lazy agar LCP tidak tertahan placeholder.</p><p class=\"mb-4\">Jangan lazy-load gambar yang langsung terlihat di viewport pertama. Itu menunda cat terbesar tanpa alasan.</p><p class=\"mb-4\">Minta AI menandai atribut loading hanya di file halaman yang kamu sebut. Tolak pustaka lazy custom jika browser sudah mendukungnya.</p><p class=\"mb-4\">Clincoo mengirim file apa adanya. Byte yang tidak diunduh di awal membuat situs terasa lebih ringan.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Lazy-load Images below the Fold on a Clincoo Page",
          desc: "Gallery photos far from the hero do not need to download in the first second. HTML already has loading=lazy.",
          content: "<p class=\"mb-4\">Clincoo service pages often fetch ten photos at once. Visitors on a slow network wait for a gallery they have not seen yet.</p><p class=\"mb-4\">Set loading=\"lazy\" on img tags below the fold. Leave the hero and logo eager so LCP is not stuck on a placeholder.</p><p class=\"mb-4\">Do not lazy-load an image that is already in the first viewport. That delays the largest paint for no reason.</p><p class=\"mb-4\">Ask the AI to add the loading attribute only on the page file you name. Refuse a custom lazy library when the browser already supports it.</p><p class=\"mb-4\">Clincoo ships files as they are. Bytes not downloaded at the start make the site feel lighter.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["performa"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["performa"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

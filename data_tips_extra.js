// Clinqoo Blog — artikel tips tambahan 2026-09-18 (merge ke data_tips)
(function(){
  var extra = [
    {
      id: "satu-font-satu-ukuran-tubuh",
      langs: {
        "id": {
          title: "Pakai Satu Font dan Satu Ukuran Tubuh di Seluruh Situs",
          desc: "Campuran tipografi membuat halaman Clinqoo terasa belum selesai. Samakan dulu, baru tonjolkan judul.",
          content: "<p class=\"mb-4\">Template sering membawa tiga keluarga huruf. Pengunjung membaca lebih tenang jika tubuh halaman memakai satu font dan satu ukuran dasar.</p><p class=\"mb-4\">Di style.css proyek Clinqoo, tetapkan font tubuh di elemen body. Heading boleh lebih besar, tetapi jangan ganti keluarga huruf di setiap seksi.</p><p class=\"mb-4\">Pratinjau HP: baris yang terlalu rapat atau huruf yang meloncat-loncat adalah tanda campuran belum dirapikan. Simpan, cek lagi.</p><p class=\"mb-4\">Konsistensi tipografi terasa profesional lebih cepat daripada dekorasi baru. Satu suara lebih mudah dirawat saat situs bertambah halaman.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        },
        "en": {
          title: "Use One Body Font and One Body Size across the Site",
          desc: "Mixed type makes a Clinqoo page feel unfinished. Unify first, then emphasize headings.",
          content: "<p class=\"mb-4\">Templates often ship three type families. Visitors read more calmly when the page body uses one font and one base size.</p><p class=\"mb-4\">In your Clinqoo style.css, set the body font on the body element. Headings may be larger, but do not switch families in every section.</p><p class=\"mb-4\">Preview on a phone: cramped lines or leaping letters usually mean the mix is still messy. Save and check again.</p><p class=\"mb-4\">Consistent type looks professional sooner than new decoration. One voice is easier to maintain as pages grow.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["tips"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["tips"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

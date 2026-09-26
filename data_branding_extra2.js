// Clincoo Blog — artikel branding tambahan 2026-09-26 WIB
(function(){
  var extra = [
    {
      id: "branding-kontraskalimat-meta",
      langs: {
        "id": {
          title: "Samakan Janji Meta Title dengan Hero Clincoo",
          desc: "Title tab yang beda dari headline hero membuat merek terasa dua suara. Satu janji di kedua tempat.",
          content: "<p class=\"mb-4\">Halaman Clincoo memakai meta title \"Platform modern\" sementara hero berkata \"Editor HTML visual\". Pengunjung dari mesin cari merasa salah situs.</p><p class=\"mb-4\">Tulis janji produk sekali di editor.clincoo.buzz. Salin inti kalimat itu ke title, og:title, dan h1.</p><p class=\"mb-4\">Jangan biarkan AI menulis title \"lebih SEO\" yang mengubah makna. Kata kunci mengikuti janji, bukan sebaliknya.</p><p class=\"mb-4\">Minta AI hanya menyesuaikan title dengan hero. Tempel keduanya dalam satu pesan.</p><p class=\"mb-4\">Clincoo menampilkan meta yang kamu ketik. Janji yang sama menjaga merek utuh di app.clincoo.buzz dan blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep the Meta Title Promise Aligned with the Clincoo Hero",
          desc: "A tab title that differs from the hero headline makes the brand speak in two voices. One promise in both places.",
          content: "<p class=\"mb-4\">A Clincoo page uses the meta title \"Modern platform\" while the hero says \"Visual HTML editor\". Search visitors feel they landed on the wrong site.</p><p class=\"mb-4\">Write the product promise once in editor.clincoo.buzz. Copy the core sentence into title, og:title, and h1.</p><p class=\"mb-4\">Do not let AI write a \"more SEO\" title that changes the meaning. Keywords follow the promise, not the other way around.</p><p class=\"mb-4\">Ask AI to align the title with the hero only. Paste both in one message.</p><p class=\"mb-4\">Clincoo shows the meta you type. The same promise keeps the brand whole on app.clincoo.buzz and blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["branding"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["branding"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

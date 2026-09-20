// Clincoo Blog — artikel html tambahan 2026-09-21 WIB
(function(){
  var extra = [
    {
      id: "html-heading-berurutan",
      langs: {
        "id": {
          title: "Susun Heading Clincoo Berurutan: h1 lalu h2, Bukan Loncat ke h4",
          desc: "Loncat heading membingungkan pembaca dan alat bantu. Tangga yang rapi cukup.",
          content: "<p class=\"mb-4\">Template Clincoo sering memakai h4 untuk kartu karena ukuran visual, padahal h2 atau h3 yang benar secara struktur.</p><p class=\"mb-4\">Satu h1 di puncak. Bagian memakai h2. Subbagian memakai h3. Ubah ukuran dengan CSS, bukan dengan level heading yang salah.</p><p class=\"mb-4\">Cek outline halaman di pratinjau atau ekstensi heading. Jika h1 langsung ke h4, naikkan levelnya.</p><p class=\"mb-4\">Minta AI merapikan heading di satu berkas. Tolak redesign kartu hanya demi font.</p><p class=\"mb-4\">Clincoo menampilkan markup yang kamu simpan. Heading adalah kerangka, bukan knob tipografi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Order Clincoo Headings in Sequence: h1 then h2, Do Not Jump to h4",
          desc: "Skipped headings confuse readers and assistive tools. A clean ladder is enough.",
          content: "<p class=\"mb-4\">Clincoo templates often use h4 on cards for visual size, even though h2 or h3 is the correct structure.</p><p class=\"mb-4\">One h1 at the top. Sections use h2. Subsections use h3. Change size with CSS, not with the wrong heading level.</p><p class=\"mb-4\">Check the page outline in preview or a heading extension. If h1 jumps to h4, raise the level.</p><p class=\"mb-4\">Ask the AI to tidy headings in one file. Refuse a card redesign just to tweak type.</p><p class=\"mb-4\">Clincoo ships the markup you save. Headings are a skeleton, not a typography knob.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["html"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["html"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

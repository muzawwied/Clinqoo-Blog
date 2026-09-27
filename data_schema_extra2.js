// Clincoo Blog — artikel schema tambahan 2026-09-27 WIB
(function(){
  var extra = [
    {
      id: "schema-howto-hanya-langkah-nyata",
      langs: {
        "id": {
          title: "Pakai HowTo Schema Clincoo hanya untuk Langkah yang Terlihat",
          desc: "HowTo JSON-LD tanpa daftar langkah di halaman menyesatkan. Tulis langkah dulu, baru markup.",
          content: "<p class=\"mb-4\">Template Clincoo kadang mendapat blok HowTo dari AI padahal halaman hanya paragraf biasa. Mesin telusur menolak markup yang tidak cocok dengan teks.</p><p class=\"mb-4\">Di editor.clincoo.buzz, tulis ol/ul langkah yang benar-benar ditampilkan. Baru isi HowTo name, step, dan text yang sama persis.</p><p class=\"mb-4\">Jangan isi totalTime atau tool jika tidak ada di UI. Satu langkah palsu merusak seluruh script.</p><p class=\"mb-4\">Minta AI menyusun HowTo dari daftar langkah yang kamu tempel. Tolak jika ia menambah langkah yang tidak kamu tulis.</p><p class=\"mb-4\">Clincoo tidak menambahkan schema otomatis. HowTo jujur menjaga cuplikan cara kerja tetap aman di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Clincoo HowTo Schema only for Steps Visitors Can See",
          desc: "HowTo JSON-LD without a visible step list misleads crawlers. Write the steps first, then the markup.",
          content: "<p class=\"mb-4\">A Clincoo template sometimes gets a HowTo block from AI while the page is only paragraphs. Search engines reject markup that does not match the text.</p><p class=\"mb-4\">In editor.clincoo.buzz, write a real ol or ul of steps. Then fill HowTo name, step, and text that match exactly.</p><p class=\"mb-4\">Do not invent totalTime or tool if they are not on the page. One fake step breaks the whole script.</p><p class=\"mb-4\">Ask AI to build HowTo from the step list you paste. Reject extra steps it invents.</p><p class=\"mb-4\">Clincoo does not add schema for you. Honest HowTo keeps the how-to snippet safe on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "schema-sameas-profil-resmi",
      langs: {
        "id": {
          title: "Isi sameAs Schema Clincoo hanya dengan Profil Resmi",
          desc: "sameAs yang menunjuk akun orang lain atau URL mati merusak identitas merek.",
          content: "<p class=\"mb-4\">Blok Organization Clincoo sering memuat sameAs ke media sosial contoh dari template. Pengunjung dan mesin telusur lalu mengaitkan merek ke akun yang salah.</p><p class=\"mb-4\">Di editor.clincoo.buzz, daftar hanya URL profil yang kamu kendalikan: GitHub, situs, atau halaman bisnis resmi.</p><p class=\"mb-4\">Hapus tautan placeholder. Jangan isi sameAs dengan hasil telusur yang tidak kamu miliki.</p><p class=\"mb-4\">Minta AI memeriksa daftar sameAs terhadap tautan footer. Tolak jika ia menambah profil fiktif.</p><p class=\"mb-4\">Clincoo menayangkan JSON yang kamu simpan. sameAs jujur menjaga identitas di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Fill Clincoo sameAs Schema with Official Profiles only",
          desc: "sameAs that points at someone else's account or a dead URL breaks brand identity.",
          content: "<p class=\"mb-4\">A Clincoo Organization block often keeps sample social sameAs from the template. Visitors and crawlers then tie the brand to the wrong account.</p><p class=\"mb-4\">In editor.clincoo.buzz, list only profile URLs you control: GitHub, the site, or an official business page.</p><p class=\"mb-4\">Remove placeholder links. Do not fill sameAs from a search result you do not own.</p><p class=\"mb-4\">Ask AI to check the sameAs list against footer links. Reject invented profiles.</p><p class=\"mb-4\">Clincoo ships the JSON you save. Honest sameAs keeps identity clear on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["schema"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["schema"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

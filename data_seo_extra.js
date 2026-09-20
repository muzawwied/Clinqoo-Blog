// Clincoo Blog — artikel seo tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "seo-robots-txt-sederhana",
      langs: {
        "id": {
          title: "Tulis robots.txt Sederhana setelah Deploy Clincoo",
          desc: "File robots.txt di akar situs menandai apa yang boleh dirayapi. Satu file teks sudah cukup.",
          content: "<p class=\"mb-4\">Setelah subdomain Clincoo hidup, mesin telusur mencari /robots.txt. Jika tidak ada, perayap tetap jalan, tetapi kamu kehilangan tempat menunjuk peta situs atau menolak folder uji.</p><p class=\"mb-4\">Buat file teks di akar proyek: User-agent: * lalu Allow: /. Tambahkan Disallow hanya untuk folder pratinjau internal atau halaman terima kasih yang tidak perlu diindeks.</p><p class=\"mb-4\">Jangan menyalin robots.txt dari situs besar yang memblokir hampir semua path. Template yang meniru toko internasional sering menolak halaman yang justru ingin kamu tampilkan.</p><p class=\"mb-4\">Minta AI menulis satu file robots.txt, bukan menyisipkan meta robots ke setiap halaman. Satu file, satu permintaan, lalu cek di URL deploy.</p><p class=\"mb-4\">Clincoo men-deploy file statis apa adanya. robots.txt yang kamu simpan di akar adalah robots.txt yang dilihat perayap.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Write a Simple robots.txt after You Deploy from Clincoo",
          desc: "A robots.txt at the site root tells crawlers what they may fetch. One text file is enough.",
          content: "<p class=\"mb-4\">Once a Clincoo subdomain is live, crawlers look for /robots.txt. If it is missing they still crawl, but you lose a place to point at a sitemap or to block a test folder.</p><p class=\"mb-4\">Create a text file at the project root: User-agent: * then Allow: /. Add Disallow only for internal preview folders or thank-you pages you do not want indexed.</p><p class=\"mb-4\">Do not copy a robots.txt from a huge site that blocks almost every path. Templates that mimic international shops often disallow pages you actually want shown.</p><p class=\"mb-4\">Ask the AI to write one robots.txt file, not to sprinkle meta robots on every page. One file, one request, then check the deploy URL.</p><p class=\"mb-4\">Clincoo deploys static files as saved. The robots.txt you keep at the root is the one crawlers see.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["seo"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["seo"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

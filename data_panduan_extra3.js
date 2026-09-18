// Clinqoo Blog — artikel panduan tambahan (extra3)
(function(){
  var extra = [
    {
      id: "atur-halaman-tentang-di-clinqoo",
      langs: {
        "id": {
          title: "Atur Halaman Tentang di Clinqoo agar Terasa Manusia",
          desc: "Halaman Tentang bukan tempat menumpuk jargon. Tulis siapa kamu, siapa yang dilayani, dan cara dihubungi.",
          content: "<p class=\"mb-4\">Banyak template Clinqoo punya halaman Tentang yang masih berisi teks contoh. Ganti lebih dulu daripada merapikan animasi.</p><p class=\"mb-4\">Tiga blok cukup: siapa yang mengerjakan situs ini, masalah apa yang kamu bantu, dan satu cara kontak yang benar-benar dibaca.</p><p class=\"mb-4\">Hindari daftar prestasi panjang tanpa bukti di halaman lain. Satu proyek nyata di portofolio lebih meyakinkan daripada sepuluh kata sifat.</p><p class=\"mb-4\">Setelah teks diganti, buka pratinjau HP. Pastikan tombol kontak tidak tertutup menu. Baru deploy dan bagikan.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
        },
        "en": {
          title: "Set Up an About Page in Clinqoo that Sounds Human",
          desc: "The About page is not a jargon pile. Say who you are, who you serve, and how to reach you.",
          content: "<p class=\"mb-4\">Many Clinqoo templates ship an About page still filled with sample copy. Replace that before you polish animations.</p><p class=\"mb-4\">Three blocks are enough: who runs the site, what problem you help with, and one contact path you actually read.</p><p class=\"mb-4\">Skip a long trophy list with no proof elsewhere. One real project in a portfolio beats ten adjectives.</p><p class=\"mb-4\">After the copy changes, open the phone preview. Make sure the contact button is not covered by the menu. Then deploy and share.</p>",
          source: "Clinqoo", sourceUrl: "https://clinqoo.pages.dev/", sourceSnippet: "Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "web.dev",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "MDN Web Docs"
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

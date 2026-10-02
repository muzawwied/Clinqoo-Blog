// Clincoo Blog — artikel ux tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "ux-status-jangan-warna-saja",
    "langs": {
      "id": {
        "title": "Jangan Andalkan Warna Saja untuk Status di Clincoo",
        "desc": "Tombol hijau atau merah tidak cukup. Tambah teks status agar makna tetap terbaca tanpa warna.",
        "content": "<p class=\"mb-4\">Form di editor.clincoo.buzz sering menandai error hanya dengan border merah. Pengguna buta warna atau layar terang tidak melihat bedanya.</p><p class=\"mb-4\">Tulis pesan di elemen yang terlihat, misalnya Nama wajib diisi. Warna boleh membantu, teks yang menyampaikan keputusan.</p><p class=\"mb-4\">Untuk sukses, jangan hanya mengubah tombol jadi hijau. Tampilkan Tersimpan di samping tombol, lalu pertahankan fokus di situ.</p><p class=\"mb-4\">Ikon tanpa teks butuh aria-label. Jika ikon hanya hiasan, sembunyikan dari pembaca layar.</p><p class=\"mb-4\">Uji dengan filter grayscale di DevTools. Jika status hilang, tambah kata. Catat pasangan warna dan teks di blog.clincoo.buzz.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Do Not Rely on Color Alone for Status in Clincoo",
        "desc": "A green or red button is not enough. Add status text so the meaning stays readable without color.",
        "content": "<p class=\"mb-4\">A form on editor.clincoo.buzz often marks an error with a red border only. Color-blind users or a bright screen will not see the difference.</p><p class=\"mb-4\">Write the message in a visible element, for example Name is required. Color may help; text carries the decision.</p><p class=\"mb-4\">For success, do not only turn the button green. Show Saved beside the button, then keep focus there.</p><p class=\"mb-4\">An icon without text needs an aria-label. If the icon is decoration, hide it from screen readers.</p><p class=\"mb-4\">Test with the grayscale filter in DevTools. If status disappears, add words. Record the color and text pair on blog.clincoo.buzz.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo editor",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
];
  var b = window.countryDataFiles && window.countryDataFiles["ux"];
  if (b && b.articles) b.articles = b.articles.concat(extra);
})();

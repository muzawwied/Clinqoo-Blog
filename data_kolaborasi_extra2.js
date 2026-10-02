// Clincoo Blog — artikel kolaborasi tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "kolaborasi-sebutkan-viewport-di-review",
    "langs": {
      "id": {
        "title": "Sebutkan Viewport dan Browser di Komentar Review Clincoo",
        "desc": "Review tanpa ukuran layar membuat bug layout tidak bisa diulang. Tulis viewport dan browser di komentar.",
        "content": "<p class=\"mb-4\">Saat mereview halaman di editor.clincoo.buzz, tulis lebar viewport, browser, dan langkah klik di komentar baris.</p><p class=\"mb-4\">Contoh: 390px, Chrome Android, tombol simpan tertutup keyboard. Jangan hanya menulis tampilannya aneh.</p><p class=\"mb-4\">Lampirkan satu tangkapan layar area yang bermasalah, bukan seluruh desktop. Sebutkan mode terang atau gelap.</p><p class=\"mb-4\">Pemisah komentar per bug. Satu utas untuk satu gejala supaya penulis tidak menebak yang mana.</p><p class=\"mb-4\">Minta AI merapikan catatan review menjadi langkah repro. Jangan minta AI mengubah kode sebelum gejala jelas.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Name the Viewport and Browser in Clincoo Review Comments",
        "desc": "A review without a screen size makes layout bugs impossible to repeat. Write the viewport and browser in the comment.",
        "content": "<p class=\"mb-4\">When reviewing a page on editor.clincoo.buzz, write the viewport width, browser, and click steps in the line comment.</p><p class=\"mb-4\">Example: 390px, Chrome Android, save button covered by the keyboard. Do not only write that it looks weird.</p><p class=\"mb-4\">Attach one screenshot of the broken area, not the whole desktop. Say whether light or dark mode was on.</p><p class=\"mb-4\">Split comments per bug. One thread per symptom so the author does not guess which one you mean.</p><p class=\"mb-4\">Ask AI to turn review notes into repro steps. Do not ask AI to change code before the symptom is clear.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo editor",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
];
  var b=window.countryDataFiles&&window.countryDataFiles["kolaborasi"];
  if(b&&b.articles)b.articles=b.articles.concat(extra);
})();

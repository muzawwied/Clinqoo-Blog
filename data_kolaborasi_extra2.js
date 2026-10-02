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
,
  {"id":"kolaborasi-pisahkan-komentar-blokir-dan-saran","langs":{"id":{"title":"Pisahkan Komentar Blokir dan Saran di Review Clincoo","desc":"Tandai komentar yang menahan rilis dan komentar yang hanya saran, supaya review tidak macet.","content":"<p class=\"mb-4\">Di editor.clincoo.buzz, review sering macet karena semua catatan terlihat sama pentingnya. Penulis tidak tahu mana yang harus selesai sebelum publish.</p><p class=\"mb-4\">Awali komentar blokir dengan kata Blokir, lalu satu kalimat gejala. Awali saran dengan kata Saran, dan jangan tahan rilis hanya karena selera wording.</p><p class=\"mb-4\">Batasi blokir pada bug yang terlihat di pratinjau, tautan rusak, atau teks yang menyesatkan. Saran visual boleh masuk iterasi berikutnya.</p><p class=\"mb-4\">Minta AI mengelompokkan catatan review menjadi blokir dan saran. Tempel daftar komentar, jangan minta AI mengubah file sebelum kelompoknya jelas.</p><p class=\"mb-4\">Uji alur ini di app.clincoo.buzz dengan satu halaman bersama. Catat kesepakatan di blog.clincoo.buzz agar review berikutnya memakai label yang sama.</p>","source":"MDN","sourceUrl":"https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems","sourceSnippet":"Pecah masalah jadi gejala yang bisa diulang sebelum mengubah kode.","source2":"Clincoo App","source3":"Clincoo Blog"},"en":{"title":"Separate Blocking Comments from Suggestions in a Clincoo Review","desc":"Mark comments that block release and comments that are only suggestions so review does not stall.","content":"<p class=\"mb-4\">On editor.clincoo.buzz, review often stalls because every note looks equally important. The author cannot tell what must finish before publish.</p><p class=\"mb-4\">Start a blocking comment with Blocker, then one sentence of the symptom. Start a suggestion with Suggestion, and do not hold release for wording taste.</p><p class=\"mb-4\">Limit blockers to bugs visible in preview, broken links, or misleading text. Visual suggestions can wait for the next pass.</p><p class=\"mb-4\">Ask AI to group review notes into blockers and suggestions. Paste the comment list. Do not ask AI to edit files before the groups are clear.</p><p class=\"mb-4\">Test this flow on app.clincoo.buzz with one shared page. Record the agreement on blog.clincoo.buzz so the next review uses the same labels.</p>","source":"MDN","sourceUrl":"https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems","sourceSnippet":"Split the problem into a repeatable symptom before changing code.","source2":"Clincoo App","source3":"Clincoo Blog"}}}
];
  var b=window.countryDataFiles&&window.countryDataFiles["kolaborasi"];
  if(b&&b.articles)b.articles=b.articles.concat(extra);
})();

// Clincoo Blog audit extra 2026-10-01
(function(){
  var extra = [{"id": "audit-cek-label-input-tanpa-for", "langs": {"id": {"title": "Audit Input Tanpa Label for di Proyek Clincoo", "desc": "Sebelum rilis, cari input yang tidak terhubung ke label. Klik label harus memfokuskan field di pratinjau Clincoo.", "content": "<p class=\"mb-4\">Di editor.clincoo.buzz buka setiap form. Untuk tiap input, textarea, dan select, pastikan ada label dengan atribut for yang sama dengan id field.</p><p class=\"mb-4\">Jika id kosong, beri id pendek yang unik di halaman itu. Jangan mengandalkan placeholder sebagai pengganti label.</p><p class=\"mb-4\">Klik teks label di pratinjau app.clincoo.buzz. Kursor harus masuk ke field. Jika tidak, for dan id tidak cocok.</p><p class=\"mb-4\">Catat field yang gagal dalam daftar singkat, lalu minta AI memperbaiki hanya pasangan for/id itu. Jangan minta rewrite seluruh form.</p><p class=\"mb-4\">Ulangi audit setelah generate. Satu halaman, satu daftar. Simpan hasilnya di catatan rilis Clincoo.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"}, "en": {"title": "Audit Inputs Missing a Label for in a Clincoo Project", "desc": "Before release, find inputs that are not tied to a label. Clicking the label should focus the field in the Clincoo preview.", "content": "<p class=\"mb-4\">In editor.clincoo.buzz open each form. For every input, textarea, and select, confirm a label whose for matches the field id.</p><p class=\"mb-4\">If id is empty, add a short id that is unique on that page. Do not treat placeholder as a label.</p><p class=\"mb-4\">Click the label text in the app.clincoo.buzz preview. Focus should enter the field. If it does not, for and id do not match.</p><p class=\"mb-4\">Write the failing fields in a short list, then ask AI to fix only those for/id pairs. Do not ask for a full form rewrite.</p><p class=\"mb-4\">Repeat the audit after generation. One page, one list. Keep the result in the Clincoo release note.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"}}},
{
  "id": "audit-gambar-tanpa-alt-sebelum-publish",
  "langs": {
    "id": {
      "title": "Audit Gambar Tanpa Alt sebelum Publish Clincoo",
      "desc": "Gambar tanpa alt lolos pratinjau visual. Cek img dan role img sebelum situs dibagikan.",
      "content": "<p class=\"mb-4\">Pratinjau di editor.clincoo.buzz tidak memperingatkan gambar kosong bagi pembaca layar. Halaman terlihat utuh, tetapi nama file jadi satu-satunya teks.</p><p class=\"mb-4\">Di konsol, jalankan pencarian sederhana: setiap img harus punya alt. Alt kosong hanya untuk gambar dekoratif. Gambar bermakna butuh kalimat singkat.</p><p class=\"mb-4\">Periksa juga SVG dan elemen dengan role img. Ikon tombol butuh aria-label atau teks terlihat, bukan alt pada dekorasi di dalamnya.</p><p class=\"mb-4\">Jangan memakai nama file sebagai alt. Tulis apa yang gambar itu sampaikan di halaman. Logo boleh alt nama merek.</p><p class=\"mb-4\">Simpan daftar temuan di blog.clincoo.buzz dan perbaiki sebelum publish ke app.clincoo.buzz. Ulangi audit setelah mengganti hero.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Official Clincoo editor",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    },
    "en": {
      "title": "Audit Images Missing Alt before You Publish Clincoo",
      "desc": "Images without alt pass a visual preview. Check img and role img before the site is shared.",
      "content": "<p class=\"mb-4\">Preview on editor.clincoo.buzz does not warn about images that are empty for a screen reader. The page looks complete, but the file name becomes the only text.</p><p class=\"mb-4\">In the console, run a simple check: every img needs alt. An empty alt is only for decorative images. A meaningful image needs a short sentence.</p><p class=\"mb-4\">Also check SVG and elements with role img. A button icon needs an aria-label or visible text, not alt on decoration inside it.</p><p class=\"mb-4\">Do not use the file name as alt. Write what the image says on the page. A logo may use the brand name as alt.</p><p class=\"mb-4\">Keep the findings on blog.clincoo.buzz and fix them before publishing to app.clincoo.buzz. Repeat the audit after you swap the hero.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Official Clincoo editor",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    }
  }
}
];
  var b=window.countryDataFiles&&window.countryDataFiles["audit"];
  if(b&&b.articles)b.articles=b.articles.concat(extra);
})();

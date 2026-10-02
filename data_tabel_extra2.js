// Clincoo Blog — artikel tabel tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "tabel-scope-kolom-dan-baris",
    "langs": {
      "id": {
        "title": "Beri scope pada th Tabel Clincoo agar Header Terikat",
        "desc": "Tanpa scope, pembaca layar tidak tahu sel milik kolom mana. Tandai th kolom dan baris sebelum publish.",
        "content": "<p class=\"mb-4\">Tabel harga di editor.clincoo.buzz sering hanya memakai th tanpa scope. Pembaca layar lalu membacakan angka tanpa nama kolom.</p><p class=\"mb-4\">Untuk header kolom, tulis th scope=&quot;col&quot; di dalam thead. Untuk label baris, tulis th scope=&quot;row&quot; di sel pertama tbody.</p><p class=\"mb-4\">Jangan mengganti th dengan td yang ditebalkan. Berat visual tidak sama dengan hubungan header di aksesibilitas.</p><p class=\"mb-4\">Jika tabel punya header bertingkat, tambahkan id pada th dan headers pada td. Jangan mulai dari colspan sebelum scope dasar benar.</p><p class=\"mb-4\">Uji dengan pembaca layar atau pohon aksesibilitas di DevTools. Catat pasangan header di blog.clincoo.buzz agar template berikutnya tidak telanjang.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Set scope on Clincoo Table Headers so Cells Stay Tied",
        "desc": "Without scope, a screen reader cannot tell which column a cell belongs to. Mark column and row headers before publish.",
        "content": "<p class=\"mb-4\">A price table on editor.clincoo.buzz often uses th without scope. A screen reader then announces numbers with no column name.</p><p class=\"mb-4\">For column headers, write th scope=&quot;col&quot; inside thead. For row labels, write th scope=&quot;row&quot; in the first tbody cell.</p><p class=\"mb-4\">Do not replace th with a bold td. Visual weight is not the same as a header relationship for accessibility.</p><p class=\"mb-4\">If the table has stacked headers, add id on th and headers on td. Do not start with colspan before basic scope is correct.</p><p class=\"mb-4\">Test with a screen reader or the accessibility tree in DevTools. Note the header pairs on blog.clincoo.buzz so the next template is not bare.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo editor",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
];
  var b = window.countryDataFiles && window.countryDataFiles["tabel"];
  if (b && b.articles) b.articles = b.articles.concat(extra);
})();

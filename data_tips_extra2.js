// Clincoo Blog — artikel tips tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "tips-isolasi-repro-minimal-sebelum-ai",
    "langs": {
      "id": {
        "title": "Isolasi Repro Minimal Clincoo sebelum Bertanya ke AI",
        "desc": "AI menjawab lebih tepat jika bug dipotong jadi satu halaman kecil. Buang bagian yang tidak memicu error.",
        "content": "<p class=\"mb-4\">Proyek di editor.clincoo.buzz yang macet jarang butuh seluruh situs dikirim ke AI. Duplikasi halaman, lalu hapus bagian yang tidak memicu bug.</p><p class=\"mb-4\">Sisakan HTML, satu berkas CSS, dan satu skrip. Jika error hilang setelah sebuah blok dihapus, blok itu bukan penyebab.</p><p class=\"mb-4\">Tulis tiga langkah: buka halaman, klik tombol, lihat pesan konsol. Tanpa langkah itu AI hanya menebak.</p><p class=\"mb-4\">Tempel cuplikan yang tersisa, bukan zip proyek. Sebut browser dan apakah bug juga muncul di pratinjau app.clincoo.buzz.</p><p class=\"mb-4\">Simpan repro di folder terpisah. Nanti blog.clincoo.buzz bisa merujuk pola yang sama tanpa membuka proyek penuh.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Isolate a Minimal Clincoo Repro before Asking AI",
        "desc": "AI answers more precisely when the bug is cut down to one small page. Remove parts that do not trigger the error.",
        "content": "<p class=\"mb-4\">A stuck project on editor.clincoo.buzz rarely needs the whole site sent to AI. Duplicate the page, then delete parts that do not trigger the bug.</p><p class=\"mb-4\">Keep HTML, one CSS file, and one script. If the error disappears after a block is removed, that block is not the cause.</p><p class=\"mb-4\">Write three steps: open the page, click the button, read the console message. Without steps, AI only guesses.</p><p class=\"mb-4\">Paste the remaining snippet, not a project zip. Name the browser and whether the bug also appears in the app.clincoo.buzz preview.</p><p class=\"mb-4\">Store the repro in a separate folder. Later blog.clincoo.buzz can point at the same pattern without opening the full project.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo editor",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
];
  var b = window.countryDataFiles && window.countryDataFiles["tips"];
  if (b && b.articles) b.articles = b.articles.concat(extra);
})();

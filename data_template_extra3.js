// Clincoo Blog — artikel template tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "template-cek-path-aset-setelah-duplikat",
    "langs": {
      "id": {
        "title": "Cek Path Aset setelah Menduplikasi Template Clincoo",
        "desc": "Halaman salinan sering memuat gambar dan CSS dengan path lama. Buka Network dan perbaiki 404 sebelum publish.",
        "content": "<p class=\"mb-4\">Saat template dipindah ke folder baru di editor.clincoo.buzz, src relatif seperti ../assets/hero.jpg bisa menunjuk folder yang tidak ada.</p><p class=\"mb-4\">Buka DevTools, tab Network, saring Img dan CSS. Baris merah 404 adalah path yang putus, bukan masalah hosting.</p><p class=\"mb-4\">Samakan kedalaman folder. Jika halaman pindah satu tingkat, tambah atau kurangi ../ sesuai lokasi berkas.</p><p class=\"mb-4\">Jangan minta AI menulis ulang seluruh template. Kirim daftar URL 404 saja, lalu tempel path yang sudah dicek.</p><p class=\"mb-4\">Pratinjau di app.clincoo.buzz setelah simpan. Catat path yang benar di blog.clincoo.buzz agar salinan berikutnya tidak mengulang 404.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Check Asset Paths after Duplicating a Clincoo Template",
        "desc": "A copied page often loads images and CSS from the old path. Open Network and fix 404s before publish.",
        "content": "<p class=\"mb-4\">When a template moves to a new folder on editor.clincoo.buzz, a relative src such as ../assets/hero.jpg can point at a folder that does not exist.</p><p class=\"mb-4\">Open DevTools, Network tab, and filter Img and CSS. A red 404 is a broken path, not a hosting failure.</p><p class=\"mb-4\">Match folder depth. If the page moved one level, add or remove ../ to match the file location.</p><p class=\"mb-4\">Do not ask AI to rewrite the whole template. Send the 404 URL list only, then paste paths you already checked.</p><p class=\"mb-4\">Preview on app.clincoo.buzz after save. Record the correct paths on blog.clincoo.buzz so the next copy does not repeat the 404.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo editor",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
,
  {
    "id": "template-cek-lang-html-setelah-salin",
    "langs": {
      "id": {"title": "Cek atribut lang pada html setelah Menyalin Template Clincoo", "desc": "Template bahasa Inggris yang disalin apa adanya membuat pembaca layar salah mengucapkan teks Indonesia.", "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, template demo sering membawa html lang=en. Teks Indonesia tetap tertinggal di atribut itu.</p><p class=\"mb-4\">Ganti lang ke id pada halaman Indonesia, dan en pada halaman English. Jangan andalkan terjemahan visual saja.</p><p class=\"mb-4\">Minta AI mencari lang= di seluruh salinan. Minta daftar berkas, bukan rewrite massal.</p><p class=\"mb-4\">Uji pratinjau di app.clincoo.buzz dengan pembaca layar. Catat pasangan bahasa di blog.clincoo.buzz.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"},
      "en": {"title": "Check the html lang attribute after copying a Clincoo template", "desc": "An English template copied as-is makes screen readers mispronounce Indonesian text.", "content": "<p class=\"mb-4\">On editor.clincoo.buzz, demo templates often ship with html lang=en. Indonesian text is left under that attribute.</p><p class=\"mb-4\">Set lang to id on Indonesian pages and en on English pages. Do not rely on visual translation alone.</p><p class=\"mb-4\">Ask AI to find lang= across the copy. Ask for a file list, not a mass rewrite.</p><p class=\"mb-4\">Test the preview on app.clincoo.buzz with a screen reader. Note the language pair on blog.clincoo.buzz.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"}
    }
  }
];
  var b = window.countryDataFiles && window.countryDataFiles["template"];
  if (b && b.articles) b.articles = b.articles.concat(extra);
})();

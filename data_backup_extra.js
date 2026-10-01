// Clincoo Blog backup extra 2026-10-01
(function(){
  var extra = [{"id": "backup-cabang-git-sebelum-refactor", "langs": {"id": {"title": "Buat Cabang Git sebelum Refactor Besar di Clincoo", "desc": "Sebelum merapikan struktur folder atau CSS, simpan titik balik di cabang baru supaya pratinjau Clincoo bisa dibandingkan.", "content": "<p class=\"mb-4\">Di salinan proyek Clincoo, jalankan git status. Commit dulu pekerjaan yang sudah beres. Jangan mulai refactor di pohon kerja yang kotor.</p><p class=\"mb-4\">Buat cabang bernama jelas, misalnya refactor/layout-header. Cabang utama tetap menjadi cadangan yang bisa di-preview.</p><p class=\"mb-4\">Salin juga zip dari editor.clincoo.buzz sebelum mengubah banyak file. Git menjaga teks; zip menjaga aset yang belum terlacak.</p><p class=\"mb-4\">Setelah tiap langkah kecil, buka app.clincoo.buzz dan bandingkan dengan cabang utama. Jika layout pecah, kembali ke commit terakhir, bukan mengulang dari nol.</p><p class=\"mb-4\">Minta AI bekerja di cabang itu saja. Sebut nama berkas yang boleh diubah supaya patch tidak menyebar.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"}, "en": {"title": "Create a Git Branch before a Large Clincoo Refactor", "desc": "Before reshaping folders or CSS, save a restore point on a new branch so the Clincoo preview can be compared.", "content": "<p class=\"mb-4\">In the Clincoo project copy, run git status. Commit finished work first. Do not start a refactor on a dirty tree.</p><p class=\"mb-4\">Create a clearly named branch, for example refactor/layout-header. The main branch stays the backup you can still preview.</p><p class=\"mb-4\">Also download a zip from editor.clincoo.buzz before touching many files. Git keeps text; the zip keeps untracked assets.</p><p class=\"mb-4\">After each small step, open app.clincoo.buzz and compare with main. If layout breaks, return to the last commit instead of starting over.</p><p class=\"mb-4\">Ask AI to work only on that branch. Name the files it may change so the patch does not spread.</p>", "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"}}},
{
  "id": "backup-unduh-zip-sebelum-hapus-halaman",
  "langs": {
    "id": {
      "title": "Unduh ZIP Proyek Clincoo sebelum Menghapus Halaman",
      "desc": "Hapus halaman tanpa salinan membuat isi tidak bisa kembali. Unduh ZIP dulu, baru hapus.",
      "content": "<p class=\"mb-4\">Menghapus halaman di editor.clincoo.buzz terasa kecil, tetapi teks, gambar, dan pengaturan ikut hilang. Undo editor tidak selalu menyimpan salinan kemarin.</p><p class=\"mb-4\">Sebelum hapus, unduh ZIP proyek atau salin HTML halaman ke berkas lokal. Beri nama dengan tanggal WIB supaya salinan tidak tertukar.</p><p class=\"mb-4\">Commit Git jika proyek sudah terhubung. Cabang terpisah tidak menggantikan ZIP bila hapusnya terjadi di editor, bukan di repo.</p><p class=\"mb-4\">Setelah unduh, buka ZIP dan pastikan berkas halaman ada. Baru kemudian hapus di editor. Jangan hapus dulu lalu mencari cadangan.</p><p class=\"mb-4\">Simpan lokasi ZIP di catatan blog.clincoo.buzz. Pulihkan ke app.clincoo.buzz hanya dari salinan yang sudah dicek, bukan dari ingatan.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Official Clincoo editor",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    },
    "en": {
      "title": "Download a Clincoo Project ZIP before Deleting a Page",
      "desc": "Deleting a page without a copy makes the content unrecoverable. Download a ZIP first, then delete.",
      "content": "<p class=\"mb-4\">Deleting a page in editor.clincoo.buzz feels small, but the text, images, and settings go with it. Editor undo does not always keep yesterday copy.</p><p class=\"mb-4\">Before you delete, download the project ZIP or copy the page HTML to a local file. Name it with the WIB date so copies do not get mixed up.</p><p class=\"mb-4\">Commit in Git if the project is already connected. A separate branch does not replace a ZIP when the delete happens in the editor, not in the repo.</p><p class=\"mb-4\">After download, open the ZIP and confirm the page file is there. Only then delete in the editor. Do not delete first and hunt for a backup later.</p><p class=\"mb-4\">Record the ZIP location on blog.clincoo.buzz. Restore to app.clincoo.buzz only from a copy you already checked, not from memory.</p>",
      "source": "Clincoo",
      "sourceUrl": "https://editor.clincoo.buzz/",
      "sourceSnippet": "Official Clincoo editor",
      "source2": "Clincoo App",
      "source3": "Clincoo Blog"
    }
  }
}
];
  var b=window.countryDataFiles&&window.countryDataFiles["backup"];
  if(b&&b.articles)b.articles=b.articles.concat(extra);
})();

// Clincoo Blog — artikel upload tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "upload-validasi-mime-dan-ukuran",
    "langs": {
      "id": {
        "title": "Validasi MIME dan Ukuran Unggahan Clincoo, Bukan Ekstensi Saja",
        "desc": "Nama file .png bisa berisi skrip. Cek type, ukuran, dan tolak sebelum FormData dikirim.",
        "content": "<p class=\"mb-4\">Input file di editor.clincoo.buzz hanya menyaring atribut accept. Pengguna tetap bisa memilih berkas lain, lalu mengganti ekstensi.</p><p class=\"mb-4\">Pada event change, baca file.type dan file.size. Izinkan image/jpeg, image/png, atau image/webp, dan batasi misalnya 1 MB.</p><p class=\"mb-4\">Jika type kosong atau tidak cocok, jangan masukkan file ke FormData. Tampilkan pesan di samping input, bukan alert.</p><p class=\"mb-4\">accept tetap berguna sebagai petunjuk, bukan sebagai pagar. Pagar ada di pengecekan sebelum kirim.</p><p class=\"mb-4\">Uji dengan file teks yang dinamai .png. Dokumentasikan batas di blog.clincoo.buzz agar form berikutnya memakai angka yang sama.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Editor resmi Clincoo",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Validate Clincoo Upload MIME and Size, Not the Extension Alone",
        "desc": "A .png filename can hide a script. Check type and size, and reject the file before FormData is sent.",
        "content": "<p class=\"mb-4\">A file input on editor.clincoo.buzz only filters the accept attribute. A user can still pick another file, then rename the extension.</p><p class=\"mb-4\">On the change event, read file.type and file.size. Allow image/jpeg, image/png, or image/webp, and cap size at about 1 MB.</p><p class=\"mb-4\">If type is empty or does not match, do not append the file to FormData. Show a message beside the input, not an alert.</p><p class=\"mb-4\">accept is still useful as a hint, not as a gate. The gate is the check before send.</p><p class=\"mb-4\">Test with a text file renamed to .png. Document the limit on blog.clincoo.buzz so the next form uses the same number.</p>",
        "source": "Clincoo",
        "sourceUrl": "https://editor.clincoo.buzz/",
        "sourceSnippet": "Official Clincoo editor",
        "source2": "Clincoo App",
        "source3": "Clincoo Blog"
      }
    }
  }
];
  var b = window.countryDataFiles && window.countryDataFiles["upload"];
  if (b && b.articles) b.articles = b.articles.concat(extra);
})();

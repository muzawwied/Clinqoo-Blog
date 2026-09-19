// Clincoo Blog — artikel editor tambahan extra4 2026-09-19
(function(){
  var extra = [
    {
      id: "nonaktifkan-css-dengan-komentar-sementara",
      langs: {
        "id": {
          title: "Nonaktifkan Aturan CSS dengan Komentar Sementara",
          desc: "Jangan hapus aturan yang masih ragu. Di editor Clincoo, bungkus dulu dengan komentar lalu cek pratinjau.",
          content: "<p class=\"mb-4\">Menghapus blok CSS karena halaman terasa sempit sering berakhir menyesal. Aturan itu ternyata menahan footer. Di editor Clincoo, nonaktifkan dulu, jangan buang.</p><p class=\"mb-4\">Bungkus aturan dengan /* ... */ di berkas stylesheet. Simpan, buka pratinjau desktop dan HP. Kalau halaman tetap rapi tanpa aturan itu, baru hapus setelah satu sesi kerja.</p><p class=\"mb-4\">Tandai komentar dengan alasan singkat, misalnya /* coba nonaktif 19 Sep: jarak kartu */. Alasan membuat kamu tidak menebak seminggu kemudian.</p><p class=\"mb-4\">Komentar sementara adalah jaring pengaman. Satu blok yang bisa dikembalikan lebih aman daripada menulis ulang gaya dari ingatan.</p>",
          source: "Clincoo Editor", sourceUrl: "https://editor.clincoo.buzz/", sourceSnippet: "Editor kode Clincoo",
          source2: "Clincoo Blog", sourceUrl2: "https://blog.clincoo.buzz/", sourceSnippet2: "Clincoo Blog"
        },
        "en": {
          title: "Disable CSS Rules with a Temporary Comment",
          desc: "Do not delete a rule you still doubt. In the Clincoo editor, wrap it in a comment first, then check preview.",
          content: "<p class=\"mb-4\">Deleting a CSS block because a page feels tight often ends in regret. That rule was holding the footer. In the Clincoo editor, disable first; do not throw it away.</p><p class=\"mb-4\">Wrap the rule with /* ... */ in the stylesheet. Save, then open desktop and phone preview. If the page stays clean without it, delete only after one work session.</p><p class=\"mb-4\">Mark the comment with a short reason, for example /* try off 19 Sep: card gap */. The reason stops you guessing a week later.</p><p class=\"mb-4\">A temporary comment is a safety net. One block you can restore is safer than rewriting styles from memory.</p>",
          source: "Clincoo Editor", sourceUrl: "https://editor.clincoo.buzz/", sourceSnippet: "Clincoo code editor",
          source2: "Clincoo Blog", sourceUrl2: "https://blog.clincoo.buzz/", sourceSnippet2: "Clincoo Blog"
        }
      }
    },
    {
      id: "cek-pratinjau-setelah-ubah-font",
      langs: {
        "id": {
          title: "Cek Pratinjau Setiap Kali Mengganti Font di Editor",
          desc: "Font baru sering merusak jarak judul dan tombol. Simpan, lalu lihat desktop dan HP sebelum lanjut.",
          content: "<p class=\"mb-4\">Mengganti font-family di Clincoo terasa kecil. Satu baris di CSS. Pratinjau lalu menunjukkan judul yang menabrak logo dan tombol yang pecah dua baris di HP.</p><p class=\"mb-4\">Setelah mengubah font, simpan stylesheet. Buka pratinjau, gulir halaman utama, tentang, dan kontak. Perhatikan tinggi baris, lebar tombol, dan menu.</p><p class=\"mb-4\">Kalau font web belum dimuat, jangan anggap pratinjau selesai. Tunggu huruf benar-benar berganti sebelum menilai jarak.</p><p class=\"mb-4\">Font adalah keputusan tampilan, bukan hiasan. Satu pemeriksaan pratinjau menghemat perbaikan darurat setelah situs sudah dibagikan.</p>",
          source: "Clincoo Editor", sourceUrl: "https://editor.clincoo.buzz/", sourceSnippet: "Editor kode Clincoo",
          source2: "Clincoo Blog", sourceUrl2: "https://blog.clincoo.buzz/", sourceSnippet2: "Clincoo Blog"
        },
        "en": {
          title: "Check Preview Every Time You Change a Font",
          desc: "A new font often breaks heading space and buttons. Save, then look at desktop and phone before you continue.",
          content: "<p class=\"mb-4\">Changing font-family in Clincoo feels small. One line in CSS. Preview then shows a heading hitting the logo and a button wrapping on a phone.</p><p class=\"mb-4\">After you change the font, save the stylesheet. Open preview, scroll the home, about, and contact pages. Watch line height, button width, and the menu.</p><p class=\"mb-4\">If the web font has not loaded yet, do not treat preview as done. Wait until the type actually swaps before you judge spacing.</p><p class=\"mb-4\">Type is a layout decision, not decoration. One preview check saves an emergency fix after the site is already shared.</p>",
          source: "Clincoo Editor", sourceUrl: "https://editor.clincoo.buzz/", sourceSnippet: "Clincoo code editor",
          source2: "Clincoo Blog", sourceUrl2: "https://blog.clincoo.buzz/", sourceSnippet2: "Clincoo Blog"
        }
      }
    },
    {
      id: "rapikan-atribut-html-sebelum-simpan",
      langs: {
        "id": {
          title: "Rapikan Atribut HTML Sebelum Menyimpan di Editor",
          desc: "Atribut acak membuat file sulit dibaca. Susun class, id, lalu src atau href dalam urutan tetap.",
          content: "<p class=\"mb-4\">Tag yang ditambah AI atau disalin dari template sering menumpuk atribut tanpa urutan. Mencari class tombol lalu menjadi membaca satu baris panjang.</p><p class=\"mb-4\">Di editor Clincoo, sebelum menyimpan, susun atribut dengan pola tetap: id, class, lalu src atau href, lalu atribut lain. Satu pola di seluruh proyek cukup.</p><p class=\"mb-4\">Hapus atribut kosong dan sisa data-* yang tidak dipakai. Simpan, buka pratinjau, pastikan tautan dan gambar masih jalan.</p><p class=\"mb-4\">Kerapian atribut bukan soal estetika kode semata. File yang teratur membuat perubahan berikutnya lebih cepat dan lebih aman.</p>",
          source: "Clincoo Editor", sourceUrl: "https://editor.clincoo.buzz/", sourceSnippet: "Editor kode Clincoo",
          source2: "Clincoo Blog", sourceUrl2: "https://blog.clincoo.buzz/", sourceSnippet2: "Clincoo Blog"
        },
        "en": {
          title: "Tidy HTML Attributes Before You Save",
          desc: "Scattered attributes make a file hard to read. Keep class, id, then src or href in a fixed order.",
          content: "<p class=\"mb-4\">Tags added by AI or copied from a template often stack attributes with no order. Finding a button class then means reading one long line.</p><p class=\"mb-4\">In the Clincoo editor, before you save, order attributes with a fixed pattern: id, class, then src or href, then the rest. One pattern across the project is enough.</p><p class=\"mb-4\">Remove empty attributes and leftover data-* hooks you do not use. Save, open preview, and confirm links and images still work.</p><p class=\"mb-4\">Tidy attributes are not only about pretty code. An orderly file makes the next change faster and safer.</p>",
          source: "Clincoo Editor", sourceUrl: "https://editor.clincoo.buzz/", sourceSnippet: "Clincoo code editor",
          source2: "Clincoo Blog", sourceUrl2: "https://blog.clincoo.buzz/", sourceSnippet2: "Clincoo Blog"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["editor"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["editor"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

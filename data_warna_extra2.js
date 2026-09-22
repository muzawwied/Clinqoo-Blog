// Clincoo Blog — Extra2 warna
(function(){
  var extra = [
  {
    id: "warna-satu-hex-merek-di-token",
    langs: {
      "id": {
        title: "Simpan Satu Hex Merek di Token, Jangan Tempel di Setiap File Clincoo",
        desc: "Hex yang disalin dari chat AI ke tombol, tautan, dan ikon akan pecah saat merek berganti.",
        content: "<p class=\"mb-4\">Developer sering menempel #2563EB dari jawaban AI ke tiga file berbeda. Satu permintaan rebrand lalu meninggalkan tombol lama.</p><p class=\"mb-4\">Taruh hex hanya di :root sebagai --warna-merek. Kelas tombol, tautan, dan ikon memakai var(--warna-merek).</p><p class=\"mb-4\">Jika AI menulis hex baru saat memperbaiki hover, tolak. Minta turunan dari token yang sama dengan color-mix atau opacity.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz: ubah satu token, pastikan hero dan CTA ikut. Hex liar terlihat sebagai warna yang tidak bergerak.</p><p class=\"mb-4\">Clincoo men-deploy CSS tersimpan. Satu sumber hex membuat ganti merek aman.</p>",
        source: "Clincoo",
        sourceUrl: "https://editor.clincoo.buzz/",
        sourceSnippet: "Editor resmi Clincoo"
      },
      "en": {
        title: "Keep One Brand Hex in a Token, Do Not Paste It into Every Clincoo File",
        desc: "A hex copied from an AI chat into buttons, links, and icons breaks when the brand changes.",
        content: "<p class=\"mb-4\">Developers often paste #2563EB from an AI reply into three different files. One rebrand request then leaves old buttons behind.</p><p class=\"mb-4\">Put the hex only on :root as --warna-merek. Button, link, and icon classes should use var(--warna-merek).</p><p class=\"mb-4\">If the AI writes a new hex while fixing hover, refuse it. Ask for a derivative of the same token with color-mix or opacity.</p><p class=\"mb-4\">Test in editor.clincoo.buzz: change one token and confirm the hero and CTA follow. A stray hex shows up as a color that does not move.</p><p class=\"mb-4\">Clincoo deploys the saved CSS. One hex source keeps a brand swap safe.</p>",
        source: "Clincoo",
        sourceUrl: "https://editor.clincoo.buzz/",
        sourceSnippet: "Official Clincoo editor"
      }
    }
  },
  {
    id: "warna-overlay-gambar-pakai-scrim",
    langs: {
      "id": {
        title: "Pakai Scrim Gelap di Atas Foto, Bukan Teks Putih Telanjang",
        desc: "Judul putih di foto terang gagal dibaca. Tambah lapisan gelap tipis sebelum deploy Clincoo.",
        content: "<p class=\"mb-4\">Hero dengan foto pantai dan judul putih terlihat bagus di dummy AI, lalu hilang di foto klien yang lebih terang.</p><p class=\"mb-4\">Tambah overlay linear-gradient atau elemen .scrim dengan hitam 40–60 persen di bawah teks. Jangan andalkan text-shadow saja.</p><p class=\"mb-4\">Ukur kontras teks terhadap warna rata-rata foto, bukan terhadap overlay yang kamu ingat. Ganti foto uji di pratinjau.</p><p class=\"mb-4\">Jika AI menghapus scrim agar \"lebih bersih\", kembalikan. Kebersihan visual tidak menolong jika judul tidak terbaca.</p><p class=\"mb-4\">Clincoo mengirim markup hero apa adanya. Scrim adalah bagian akses, bukan dekorasi opsional.</p>",
        source: "Clincoo",
        sourceUrl: "https://editor.clincoo.buzz/",
        sourceSnippet: "Editor resmi Clincoo"
      },
      "en": {
        title: "Use a Dark Scrim over Photos, Not Bare White Text",
        desc: "White titles on a bright photo fail. Add a thin dark layer before you deploy Clincoo.",
        content: "<p class=\"mb-4\">A beach-photo hero with a white title looks fine on the AI dummy, then vanishes on a brighter client photo.</p><p class=\"mb-4\">Add a linear-gradient overlay or a .scrim element with 40–60 percent black under the text. Do not rely on text-shadow alone.</p><p class=\"mb-4\">Measure contrast against the average photo color, not against the overlay you remember. Swap the test photo in preview.</p><p class=\"mb-4\">If the AI deletes the scrim to look \"cleaner\", put it back. Visual cleanliness does not help when the title cannot be read.</p><p class=\"mb-4\">Clincoo ships the hero markup as saved. A scrim is access work, not optional decoration.</p>",
        source: "Clincoo",
        sourceUrl: "https://editor.clincoo.buzz/",
        sourceSnippet: "Official Clincoo editor"
      }
    }
  },
  {
    id: "warna-tombol-disabled-tetap-kontras",
    langs: {
      "id": {
        title: "Buat Tombol Disabled Tetap Kontras, Jangan Hanya Abu Samar",
        desc: "opacity 0.3 pada tombol mati membuat label hilang. Turunkan saturasi, jaga rasio baca.",
        content: "<p class=\"mb-4\">Reset UI sering menulis button:disabled { opacity: 0.3 }. Di layar hemat, label tombol hampir tidak ada.</p><p class=\"mb-4\">Pakai token --warna-mati: teks tetap di atas 3:1 terhadap latar tombol. Tambah atribut disabled dan aria-disabled yang selaras.</p><p class=\"mb-4\">Jangan andalkan warna saja untuk menyatakan nonaktif. Kursor not-allowed dan teks bantuan di dekat form menjelaskan kenapa tombol terkunci.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz dengan form kosong: tombol kirim harus terbaca sebagai nonaktif, bukan sebagai bug CSS.</p><p class=\"mb-4\">Clincoo menayangkan state form yang kamu simpan. Disabled yang terbaca mengurangi tiket \"tombol tidak jalan\".</p>",
        source: "Clincoo",
        sourceUrl: "https://editor.clincoo.buzz/",
        sourceSnippet: "Editor resmi Clincoo"
      },
      "en": {
        title: "Keep Disabled Buttons Contrasted, Not Just Faint Gray",
        desc: "opacity 0.3 on a dead button hides the label. Drop saturation, keep a readable ratio.",
        content: "<p class=\"mb-4\">UI resets often ship button:disabled { opacity: 0.3 }. On budget screens the label nearly disappears.</p><p class=\"mb-4\">Use a --warna-mati token: text stays above 3:1 against the button background. Keep disabled and aria-disabled in sync.</p><p class=\"mb-4\">Do not rely on color alone to mark inactive. A not-allowed cursor and helper text near the form explain why the button is locked.</p><p class=\"mb-4\">Test in editor.clincoo.buzz with an empty form: submit should read as disabled, not as a CSS bug.</p><p class=\"mb-4\">Clincoo ships the form state you save. A readable disabled state cuts \"the button is broken\" tickets.</p>",
        source: "Clincoo",
        sourceUrl: "https://editor.clincoo.buzz/",
        sourceSnippet: "Official Clincoo editor"
      }
    }
  },
  {
    id: "warna-cetak-hitam-bukan-abu-layar",
    langs: {
      "id": {
        title: "Siapkan Warna Cetak Hitam, Jangan Kirim Abu Layar ke Printer",
        desc: "Latar gelap dan teks abu membuang tinta. Pakai media print dengan hitam pada kertas putih.",
        content: "<p class=\"mb-4\">Pengunjung mencetak halaman harga Clincoo lalu mendapat blok gelap penuh. Token layar tidak sama dengan kertas.</p><p class=\"mb-4\">Tambah @media print: latar putih, teks #111, tautan tetap terbaca tanpa andalan warna biru saja. Sembunyikan navigasi dan CTA iklan.</p><p class=\"mb-4\">Jangan biarkan AI menyalin seluruh palet gelap ke print. Minta aturan minimal: body, heading, tabel.</p><p class=\"mb-4\">Pratinjau Print di DevTools sebelum deploy dari editor.clincoo.buzz. Cek halaman yang punya tabel harga.</p><p class=\"mb-4\">Clincoo mengirim CSS termasuk blok print jika kamu menyimpannya. Satu aturan hemat tinta dan menjaga merek di kertas.</p>",
        source: "Clincoo",
        sourceUrl: "https://editor.clincoo.buzz/",
        sourceSnippet: "Editor resmi Clincoo"
      },
      "en": {
        title: "Prepare Print Colors as Black, Do Not Send Screen Gray to the Printer",
        desc: "Dark backgrounds and gray text waste ink. Use print media with black on white paper.",
        content: "<p class=\"mb-4\">Visitors print a Clincoo pricing page and get a full dark block. Screen tokens are not paper tokens.</p><p class=\"mb-4\">Add @media print: white background, #111 text, links still readable without relying on blue alone. Hide navigation and ad CTAs.</p><p class=\"mb-4\">Do not let the AI copy the whole dark palette into print. Ask for minimal rules: body, headings, tables.</p><p class=\"mb-4\">Use DevTools Print preview before you deploy from editor.clincoo.buzz. Check pages that hold a price table.</p><p class=\"mb-4\">Clincoo ships CSS including the print block if you saved it. One rule saves ink and keeps the brand on paper.</p>",
        source: "Clincoo",
        sourceUrl: "https://editor.clincoo.buzz/",
        sourceSnippet: "Official Clincoo editor"
      }
    }
  }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["warna"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["warna"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

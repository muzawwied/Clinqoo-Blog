// Clincoo Blog — artikel html tambahan 2026-09-21 WIB
(function(){
  var extra = [
    {
      id: "html-button-bukan-div-klik",
      langs: {
        "id": {
          title: "Pakai button untuk Aksi Clincoo, Bukan div yang Bisa Diklik",
          desc: "div dengan onclick tidak masuk urutan Tab. Elemen button sudah punya peran dan keyboard.",
          content: "<p class=\"mb-4\">Template Clincoo sering memakai div class=\"btn\" plus onclick. Pengunjung keyboard tidak bisa memicu aksi itu tanpa tabIndex tambahan.</p><p class=\"mb-4\">Ganti wrapper jadi button type=\"button\" untuk aksi di halaman, atau a href untuk pindah URL. Jangan campur keduanya.</p><p class=\"mb-4\">Jika harus tetap div, tambahkan role, tabindex=0, dan handler Enter serta Space. Itu lebih rawan daripada tag asli.</p><p class=\"mb-4\">Minta AI mengganti satu CTA dulu. Tolak rewrite seluruh hero.</p><p class=\"mb-4\">Clincoo menayangkan HTML yang kamu simpan. Tombol semantik adalah akses, bukan gaya.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use a button for Clincoo Actions, Not a Clickable div",
          desc: "A div with onclick is missing from the Tab order. A button already has a role and keyboard support.",
          content: "<p class=\"mb-4\">Clincoo templates often use div class=\"btn\" plus onclick. Keyboard visitors cannot fire that action without extra tabIndex.</p><p class=\"mb-4\">Swap the wrapper to button type=\"button\" for in-page actions, or a href to change URL. Do not mix both.</p><p class=\"mb-4\">If you must keep a div, add a role, tabindex=0, and Enter plus Space handlers. That is more fragile than the real tag.</p><p class=\"mb-4\">Ask the AI to change one CTA first. Refuse a full hero rewrite.</p><p class=\"mb-4\">Clincoo ships the HTML you save. A semantic button is access, not style.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "html-daftar-ul-ol-bukan-div",
      langs: {
        "id": {
          title: "Tulis Daftar Clincoo dengan ul atau ol, Bukan Tumpukan div",
          desc: "Fitur berurutan butuh list. Screen reader mengumumkan jumlah item.",
          content: "<p class=\"mb-4\">Halaman paket Clincoo sering menumpuk div class=\"item\" untuk tiga keunggulan. Pembaca layar tidak mendengar bahwa itu daftar.</p><p class=\"mb-4\">Pakai ul untuk poin tanpa urutan, ol untuk langkah. Satu li per item. Jangan taruh heading di dalam li jika item hanya satu kalimat.</p><p class=\"mb-4\">CSS list-style: none boleh, asal markup tetap list. Jangan ganti jadi span agar mudah di-flex.</p><p class=\"mb-4\">Minta AI membungkus satu blok fitur. Tolak generate kartu baru.</p><p class=\"mb-4\">Clincoo merender markup apa adanya. List adalah struktur, bukan bullet dekoratif.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Write Clincoo Lists with ul or ol, Not Stacked divs",
          desc: "Ordered features need a list. Screen readers announce the item count.",
          content: "<p class=\"mb-4\">Clincoo pricing pages often stack div class=\"item\" for three benefits. Screen readers never hear that it is a list.</p><p class=\"mb-4\">Use ul for unordered points, ol for steps. One li per item. Do not put a heading inside li if the item is a single sentence.</p><p class=\"mb-4\">CSS list-style: none is fine if the markup stays a list. Do not switch to span just to make flex easier.</p><p class=\"mb-4\">Ask the AI to wrap one feature block. Refuse a brand-new card set.</p><p class=\"mb-4\">Clincoo renders markup as stored. A list is structure, not decorative bullets.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "html-alt-gambar-bermakna",
      langs: {
        "id": {
          title: "Isi alt Gambar Clincoo yang Bermakna, atau Kosongkan yang Dekoratif",
          desc: "alt=gambar1 tidak membantu. Deskripsikan fungsi, bukan nama file.",
          content: "<p class=\"mb-4\">Banyak aset Clincoo memakai alt=\"img\" atau nama file. Pembaca layar mendengar sampah, mesin pencari kehilangan konteks.</p><p class=\"mb-4\">Untuk foto produk, tulis apa yang terlihat dan mengapa ada. Untuk ikon di samping teks yang sama, alt kosong alt=\"\".</p><p class=\"mb-4\">Jangan isi alt dengan keyword panjang. Satu frasa cukup. Logo di header boleh alt nama merek jika tidak ada teks di dekatnya.</p><p class=\"mb-4\">Minta AI mengisi alt pada satu berkas. Tolak rewrite semua gambar.</p><p class=\"mb-4\">Clincoo menayangkan atribut yang kamu simpan. alt adalah teks cadangan, bukan SEO stuffing.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write Meaningful Clincoo Image alt, or Empty Decorative Ones",
          desc: "alt=image1 does not help. Describe the job, not the file name.",
          content: "<p class=\"mb-4\">Many Clincoo assets use alt=\"img\" atau the file name. Screen readers hear noise; search engines lose context.</p><p class=\"mb-4\">For a product photo, write what is visible and why it is there. For an icon next to the same text, use empty alt=\"\".</p><p class=\"mb-4\">Do not stuff alt with a long keyword string. One phrase is enough. A header logo may use the brand name if no nearby text names it.</p><p class=\"mb-4\">Ask the AI to fill alt in one file. Refuse a rewrite of every image.</p><p class=\"mb-4\">Clincoo ships the attributes you save. alt is fallback text, not SEO stuffing.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "html-skip-link-ke-konten",
      langs: {
        "id": {
          title: "Tambah Skip Link Clincoo ke main sebelum Menu Panjang",
          desc: "Pengguna keyboard lelah menekan Tab melewati 12 tautan nav. Beri jalan pintas.",
          content: "<p class=\"mb-4\">Header Clincoo dengan banyak tautan memaksa Tab berulang sebelum isi. Skip link adalah tautan pertama di body menuju id pada main.</p><p class=\"mb-4\">Tulis a href=\"#konten\" lalu id=\"konten\" pada main. Sembunyikan tautan sampai fokus, jangan display none permanen.</p><p class=\"mb-4\">Uji di pratinjau editor.clincoo.buzz: Tab sekali, Enter, fokus pindah ke isi. Jangan arahkan ke wrapper yang tidak bisa fokus.</p><p class=\"mb-4\">Minta AI satu tautan dan satu id. Tolak generate navigasi baru.</p><p class=\"mb-4\">Clincoo menayangkan HTML yang kamu simpan. Skip link menghormati keyboard.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Clincoo Skip Link to main before a Long Menu",
          desc: "Keyboard users tire of Tab through 12 nav links. Give a shortcut.",
          content: "<p class=\"mb-4\">A Clincoo header with many links forces repeated Tab before content. A skip link is the first body link pointing at an id on main.</p><p class=\"mb-4\">Write a href=\"#content\" then id=\"content\" on main. Hide the link until focus; do not use permanent display none.</p><p class=\"mb-4\">Test in the editor.clincoo.buzz preview: Tab once, Enter, focus moves to the content. Do not point at a wrapper that cannot take focus.</p><p class=\"mb-4\">Ask the AI for one link and one id. Refuse a new navigation system.</p><p class=\"mb-4\">Clincoo ships the HTML you save. A skip link respects the keyboard.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "html-tabel-untuk-data",
      langs: {
        "id": {
          title: "Pakai table Clincoo untuk Data, Bukan Grid CSS Palsu",
          desc: "Perbandingan harga punya baris dan kolom. table plus th menjelaskan hubungan.",
          content: "<p class=\"mb-4\">Halaman harga Clincoo kadang memakai tiga kolom div yang terlihat seperti tabel. Tanpa th, hubungan paket dan fitur hilang bagi pembaca layar.</p><p class=\"mb-4\">Bungkus angka dan ya/tidak dalam table, thead, th scope=col atau scope=row. Caption singkat menamai tabel.</p><p class=\"mb-4\">Jangan pakai table untuk layout hero. Grid CSS untuk tata letak; table untuk data tabular.</p><p class=\"mb-4\">Minta AI mengubah satu blok perbandingan. Tolak generate halaman harga baru.</p><p class=\"mb-4\">Clincoo merender markup apa adanya. Tabel adalah data, bukan kerangka visual.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Use a Clincoo table for Data, Not a Fake CSS Grid",
          desc: "Price comparisons have rows and columns. table plus th explains the relation.",
          content: "<p class=\"mb-4\">Clincoo pricing pages sometimes use three div columns that look like a table. Without th, the link between plan and feature is lost for screen readers.</p><p class=\"mb-4\">Wrap numbers and yes/no cells in table, thead, and th with scope=col or scope=row. A short caption names the table.</p><p class=\"mb-4\">Do not use table for a hero layout. CSS Grid is for layout; table is for tabular data.</p><p class=\"mb-4\">Ask the AI to convert one comparison block. Refuse a brand-new pricing page.</p><p class=\"mb-4\">Clincoo renders markup as stored. A table is data, not a visual frame.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles[\"html\"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles[\"html\"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

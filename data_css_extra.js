// Clincoo Blog — artikel css tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "css-debug-flexbox-anak-tidak-sejajar",
      langs: {
        "id": {
          title: "Debug Flexbox Saat Anak Tidak Sejajar di Clincoo",
          desc: "Item flex yang miring hampir selalu karena align, wrap, atau min-width tersembunyi. Isolasi satu baris dulu.",
          content: "<p class=\"mb-4\">Kartu di header Clincoo sering terlihat tidak satu garis. Penyebabnya jarang Flexbox rusak, melainkan min-width gambar atau padding tidak sama.</p><p class=\"mb-4\">Buka DevTools, pilih container, cek display:flex, flex-wrap, align-items, dan gap. Matikan satu properti per uji.</p><p class=\"mb-4\">Set min-width:0 pada anak yang berisi teks panjang. Tanpa itu, flex item menolak menyusut dan mendorong saudara.</p><p class=\"mb-4\">Minta AI hanya merapikan satu baris flex. Tolak rewrite seluruh layout jadi framework grid.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Flex yang rapi lahir dari inspeksi, bukan tebak-tebakan !important.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Debug Flexbox When Children Do Not Align in Clincoo",
          desc: "Crooked flex items almost always come from align, wrap, or a hidden min-width. Isolate one row first.",
          content: "<p class=\"mb-4\">Cards in a Clincoo header often sit off the line. Flexbox is rarely broken; image min-width or uneven padding is.</p><p class=\"mb-4\">Open DevTools, select the container, check display:flex, flex-wrap, align-items, and gap. Toggle one property per test.</p><p class=\"mb-4\">Set min-width:0 on children with long text. Without it a flex item refuses to shrink and shoves its siblings.</p><p class=\"mb-4\">Ask the AI to tidy one flex row only. Refuse rewriting the whole layout into a grid framework.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Clean flex comes from inspection, not guessed !important rules.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "css-grid-dua-kolom-tanpa-tumpuk",
      langs: {
        "id": {
          title: "Bangun Grid Dua Kolom yang Tidak Tumpuk di Clincoo",
          desc: "Grid pecah menjadi tumpukan karena track minmax salah atau gap terlalu besar di layar sempit.",
          content: "<p class=\"mb-4\">Template Clincoo sering memakai grid 1fr 1fr. Di ponsel kedua kolom tetap berdampingan lalu teks terpotong.</p><p class=\"mb-4\">Pakai grid-template-columns: 1fr pada lebar sempit, lalu minmax(0, 1fr) minmax(0, 1fr) mulai breakpoint yang kamu pilih.</p><p class=\"mb-4\">Cek overflow: minmax tanpa 0 membuat track tidak boleh lebih kecil dari konten. Gambar lebar memaksa kolom keluar layar.</p><p class=\"mb-4\">Minta AI menyesuaikan satu section grid. Tolak mengubah seluruh halaman menjadi masonry.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Grid dua kolom aman jika track boleh menyusut.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Build a Two-Column Grid That Does Not Overflow in Clincoo",
          desc: "A grid collapses into a squash because minmax tracks are wrong or gap is too large on a narrow screen.",
          content: "<p class=\"mb-4\">A Clincoo template often uses 1fr 1fr. On a phone both columns stay side by side and text clips.</p><p class=\"mb-4\">Use grid-template-columns: 1fr on a narrow width, then minmax(0, 1fr) minmax(0, 1fr) from the breakpoint you pick.</p><p class=\"mb-4\">Watch overflow: minmax without 0 keeps a track from shrinking below content. A wide image pushes the column off-screen.</p><p class=\"mb-4\">Ask the AI to adjust one grid section. Refuse turning the whole page into masonry.</p><p class=\"mb-4\">Clincoo ships the CSS you save. A two-column grid is safe when tracks may shrink.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "css-hindari-important-kecuali-darurat",
      langs: {
        "id": {
          title: "Hindari !important di CSS Clincoo Kecuali Darurat",
          desc: "Satu !important memaksa spiral spesifisitas. Naikkan selektor, jangan perang tanda seru.",
          content: "<p class=\"mb-4\">AI sering menambal layout Clincoo dengan !important. Setelah tiga aturan, tidak ada yang bisa ditebak lagi.</p><p class=\"mb-4\">Cek computed style. Jika kelas template mengalahkan kelasmu, perpanjang selektor: .hero .btn, bukan !important di .btn.</p><p class=\"mb-4\">Hapus !important yang kamu tambah sendiri sebelum menambah yang baru. Sisakan hanya override pihak ketiga yang tidak bisa disentuh.</p><p class=\"mb-4\">Minta AI menjelaskan spesifisitas satu aturan. Tolak menambal seluruh berkas dengan !important.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Spesifisitas yang jujur lebih mudah di-debug daripada perang tanda seru.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Avoid !important in Clincoo CSS Except as a Last Resort",
          desc: "One !important starts a specificity spiral. Raise the selector instead of fighting with bangs.",
          content: "<p class=\"mb-4\">AI often patches a Clincoo layout with !important. After three rules nothing is predictable.</p><p class=\"mb-4\">Check computed style. If a template class beats yours, lengthen the selector: .hero .btn, not !important on .btn.</p><p class=\"mb-4\">Remove !important you added yourself before adding a new one. Keep only overrides for third-party CSS you cannot touch.</p><p class=\"mb-4\">Ask the AI to explain specificity for one rule. Refuse patching the whole file with !important.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Honest specificity is easier to debug than a bang war.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "css-object-fit-gambar-hero",
      langs: {
        "id": {
          title: "Pakai object-fit agar Gambar Hero Clincoo Tidak gepeng",
          desc: "Gambar hero yang dipaksa lebar-tinggi tetap akan meregang. object-fit:cover menjaga rasio.",
          content: "<p class=\"mb-4\">Hero Clincoo sering memakai img dengan width 100% dan height tetap. Foto orang jadi gepeng di layar lebar.</p><p class=\"mb-4\">Tetapkan tinggi container, lalu img { width:100%; height:100%; object-fit:cover; object-position:center; }.</p><p class=\"mb-4\">Jangan crop dengan overflow sembunyi tanpa object-fit. Bagian penting wajah bisa hilang di tepi.</p><p class=\"mb-4\">Minta AI menerapkan object-fit pada satu hero. Tolak mengganti img dengan background-image tanpa alasan akses.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. object-fit menjaga rasio tanpa file gambar baru.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use object-fit so Clincoo Hero Images Do Not Stretch",
          desc: "A hero image forced to a fixed width and height will squash. object-fit:cover keeps the ratio.",
          content: "<p class=\"mb-4\">A Clincoo hero often sets img to width 100% and a fixed height. Faces stretch on a wide screen.</p><p class=\"mb-4\">Give the container a height, then img { width:100%; height:100%; object-fit:cover; object-position:center; }.</p><p class=\"mb-4\">Do not crop with overflow hidden and no object-fit. The important part of a face can vanish at the edge.</p><p class=\"mb-4\">Ask the AI to apply object-fit on one hero. Refuse swapping img for background-image without an access reason.</p><p class=\"mb-4\">Clincoo ships the markup you save. object-fit keeps the ratio without a new image file.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "css-variabel-warna-satu-sumber",
      langs: {
        "id": {
          title: "Simpan Palet Warna Clincoo di Custom Property",
          desc: "Hex tersebar di puluhan kelas sulit diganti. Satu :root membuat rebrand aman.",
          content: "<p class=\"mb-4\">Template Clincoo mudah memuat #3b82f6 di tombol, tautan, dan border secara terpisah. Ganti merek berarti cari-ganti berisiko.</p><p class=\"mb-4\">Tulis --warna-utama, --warna-teks, --warna-latar di :root. Pakai var() di kelas komponen.</p><p class=\"mb-4\">Jangan buat variabel untuk setiap bayangan. Tiga sampai enam token warna sudah cukup untuk situs kecil.</p><p class=\"mb-4\">Minta AI mengekstrak palet dari satu berkas. Tolak generate sistem desain lengkap.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Custom property adalah cara termurah menjaga warna konsisten.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Store the Clincoo Color Palette in Custom Properties",
          desc: "Hex values scattered across dozens of classes are hard to change. One :root makes a rebrand safe.",
          content: "<p class=\"mb-4\">A Clincoo template easily repeats #3b82f6 on buttons, links, and borders. A brand change becomes a risky find-and-replace.</p><p class=\"mb-4\">Write --color-primary, --color-text, --color-bg on :root. Use var() in component classes.</p><p class=\"mb-4\">Do not invent a variable for every shadow. Three to six color tokens are enough for a small site.</p><p class=\"mb-4\">Ask the AI to extract a palette from one file. Refuse generating a full design system.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Custom properties are the cheapest way to keep color consistent.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["css"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["css"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

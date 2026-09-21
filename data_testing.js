// Clincoo Blog — Data kategori: testing
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["testing"] = {
  names: { "id": "Pengujian", "en": "Testing" },
  flag: "🧪",
  articles: [
    {
      id: "testing-cek-form-kosong-sebelum-rilis",
      langs: {
        "id": {
          title: "Uji Form Clincoo dalam Keadaan Kosong sebelum Rilis",
          desc: "Kirim form tanpa isi di pratinjau. Pesan error harus muncul, halaman tidak boleh blank.",
          content: '<p class="mb-4">Banyak situs Clincoo lolos pratinjau karena form tidak pernah diklik. Saat pengunjung menekan Kirim dengan field kosong, halaman lompat atau JS error.</p><p class="mb-4">Buka halaman Kontak di editor.clincoo.buzz. Tekan Kirim tanpa mengetik. Catat apakah required HTML jalan dan apakah ada alert palsu.</p><p class="mb-4">Isi satu field saja, kirim lagi. Pastikan sisa field masih ditandai. Jangan andalkan validasi yang hanya ada di komentar kode.</p><p class="mb-4">Minta AI menambah atribut required dan satu pesan singkat. Tolak pustaka validasi yang memuat file besar.</p><p class="mb-4">Clincoo adalah HTML statis. Tes form kosong adalah tes rilis, bukan pekerjaan cadangan.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test an Empty Clincoo Form before You Publish",
          desc: "Submit the form with empty fields in preview. An error should show; the page must not go blank.",
          content: '<p class="mb-4">Many Clincoo sites pass preview because nobody clicks the form. When a visitor hits Send with empty fields, the page jumps or JS throws.</p><p class="mb-4">Open Contact in editor.clincoo.buzz. Press Send without typing. Note whether HTML required works and whether a fake alert appears.</p><p class="mb-4">Fill only one field and send again. The other fields should still be marked. Do not rely on validation that exists only in a code comment.</p><p class="mb-4">Ask the AI to add required attributes and one short message. Refuse a validation library that loads a large file.</p><p class="mb-4">Clincoo is static HTML. An empty-form test is a release test, not a backup chore.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "testing-pratinjau-tiga-lebar-layar",
      langs: {
        "id": {
          title: "Pratinjau Situs Clincoo di Tiga Lebar Layar",
          desc: "Cek 360px, 768px, dan 1280px sebelum deploy. Layout yang pecah di satu lebar adalah bug rilis.",
          content: '<p class="mb-4">Desain Clincoo yang rapi di desktop sering meruntuhkan kartu harga pada 360px. Satu lebar bukan tes.</p><p class="mb-4">Di editor.clincoo.buzz sempitkan pratinjau ke 360, 768, lalu 1280. Catat overflow horizontal, menu yang menutup hero, dan teks yang terpotong.</p><p class="mb-4">Perbaiki satu file CSS per temuan. Jangan minta AI menulis media query untuk setiap piksel.</p><p class="mb-4">Ulangi tiga lebar setelah setiap perbaikan besar. Tes satu kali di awal tidak melindungi deploy malam.</p><p class="mb-4">Clincoo menayangkan CSS yang kamu simpan. Tiga lebar adalah jaring pengaman, bukan kemewahan.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Preview a Clincoo Site at Three Viewport Widths",
          desc: "Check 360px, 768px, and 1280px before you deploy. A layout that breaks at one width is a release bug.",
          content: '<p class="mb-4">A Clincoo design that looks fine on desktop often collapses pricing cards at 360px. One width is not a test.</p><p class="mb-4">In editor.clincoo.buzz shrink the preview to 360, 768, then 1280. Note horizontal overflow, a menu covering the hero, and clipped text.</p><p class="mb-4">Fix one CSS file per finding. Do not ask the AI for a media query at every pixel.</p><p class="mb-4">Repeat the three widths after every large change. A single test at the start does not protect a late deploy.</p><p class="mb-4">Clincoo serves the CSS you save. Three widths are a safety net, not a luxury.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "testing-tautan-eksternal-rel-noopener",
      langs: {
        "id": {
          title: "Cek Tautan Eksternal Clincoo Pakai rel noopener",
          desc: "Tautan target blank tanpa rel noopener membuka risiko tab. Tambah atribut sebelum rilis.",
          content: '<p class="mb-4">Footer Clincoo sering menaut Instagram atau WhatsApp dengan target _blank tanpa rel. Tab baru bisa mengakses window.opener.</p><p class="mb-4">Cari target="_blank" di seluruh HTML workspace. Setiap temuan wajib rel="noopener noreferrer".</p><p class="mb-4">Uji di editor.clincoo.buzz: tautan terbuka di tab baru, situs Anda tetap di tab lama. Jangan hapus target jika memang butuh tab baru.</p><p class="mb-4">Minta AI menambah atribut di file yang sama. Tolak skrip yang menambal semua tautan saat runtime.</p><p class="mb-4">Situs Clincoo statis merawat atribut di markup. Tes tautan eksternal adalah bagian rilis.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check Clincoo External Links for rel noopener",
          desc: "A target blank link without rel noopener risks the tab. Add the attribute before you publish.",
          content: '<p class="mb-4">Clincoo footers often point at Instagram or WhatsApp with target _blank and no rel. The new tab can reach window.opener.</p><p class="mb-4">Search for target="_blank" across the workspace HTML. Every hit needs rel="noopener noreferrer".</p><p class="mb-4">Test in editor.clincoo.buzz: the link opens in a new tab, your site stays in the old one. Do not drop target if you truly need a new tab.</p><p class="mb-4">Ask the AI to add the attribute in the same file. Refuse a runtime script that patches every link.</p><p class="mb-4">A static Clincoo site keeps attributes in markup. External-link checks belong in the release pass.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "testing-halaman-404-punya-jalan-pulang",
      langs: {
        "id": {
          title: "Uji Halaman 404 Clincoo Punya Jalan Pulang",
          desc: "URL yang salah harus menampilkan tautan ke Beranda. Jangan biarkan pengunjung tersesat.",
          content: '<p class="mb-4">Pengunjung yang mengetik path lama setelah Anda ganti nama halaman mendarat di 404 kosong. Mereka menutup tab.</p><p class="mb-4">Buka path acak di pratinjau atau di domain deploy. Pastikan ada judul jelas, satu kalimat, dan tautan ke Beranda plus Kontak.</p><p class="mb-4">Samakan header 404 dengan halaman lain agar orang tahu ini masih situs Anda. Jangan tampilkan stack atau path server.</p><p class="mb-4">Minta AI menulis satu file 404.html sederhana. Tolak halaman error dari framework yang tidak Anda pakai.</p><p class="mb-4">Clincoo di GitHub Pages mendukung 404.html di akar. Tes path rusak sebelum membagikan URL.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test that a Clincoo 404 Page Has a Way Home",
          desc: "A wrong URL should show a link back to Home. Do not leave visitors stranded.",
          content: '<p class="mb-4">Visitors who type an old path after you rename a page land on an empty 404. They close the tab.</p><p class="mb-4">Open a random path in preview or on the deploy domain. There should be a clear title, one sentence, and links to Home and Contact.</p><p class="mb-4">Match the 404 header to other pages so people know they are still on your site. Do not print a stack or a server path.</p><p class="mb-4">Ask the AI to write one simple 404.html file. Refuse an error page from a framework you do not use.</p><p class="mb-4">Clincoo on GitHub Pages supports 404.html at the root. Test a broken path before you share the URL.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};

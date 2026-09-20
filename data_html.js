// Clincoo Blog — Data kategori: html
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["html"] = {
  names: { "id": "HTML", "en": "HTML" },
  flag: "📄",
  articles: [
    {
      id: "html-satu-h1-per-halaman",
      langs: {
        "id": {
          title: "Satu h1 per Halaman Clincoo, Bukan di Setiap Kartu",
          desc: "Banyak h1 membingungkan outline dokumen. Sisakan satu judul halaman.",
          content: "<p class=\"mb-4\">Template Clincoo kadang memakai h1 pada logo, hero, dan setiap kartu layanan. Outline dokumen menjadi datar dan SEO on-page lemah.</p><p class=\"mb-4\">Pilih satu h1 yang menamai halaman. Kartu dan widget memakai h2 atau h3 sesuai tingkat.</p><p class=\"mb-4\">Cek di pratinjau: heading harus merangkai cerita dari umum ke rinci. Minta AI mengganti tag, bukan menulis ulang teks.</p><p class=\"mb-4\">Jangan sembunyikan h1 dengan CSS display none hanya agar lolos audit.</p><p class=\"mb-4\">Clincoo menayangkan HTML yang kamu simpan. Satu h1 adalah peta, bukan dekorasi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "One h1 per Clincoo Page, Not on Every Card",
          desc: "Many h1s flatten the document outline. Keep one page title.",
          content: "<p class=\"mb-4\">A Clincoo template sometimes uses h1 on the logo, the hero, and every service card. The document outline goes flat and on-page SEO weakens.</p><p class=\"mb-4\">Pick one h1 that names the page. Cards and widgets use h2 or h3 by level.</p><p class=\"mb-4\">Check preview: headings should tell a story from general to detail. Ask the AI to change tags, not rewrite the copy.</p><p class=\"mb-4\">Do not hide the h1 with display none just to pass an audit.</p><p class=\"mb-4\">Clincoo ships the HTML you save. One h1 is a map, not decoration.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "html-landmark-header-main-footer",
      langs: {
        "id": {
          title: "Bungkus Halaman Clincoo dengan header, main, dan footer",
          desc: "div bertumpuk tanpa landmark menyulitkan pembaca layar. Pakai elemen semantik.",
          content: "<p class=\"mb-4\">Banyak template Clincoo membungkus semua blok dengan div class=\"section\". Screen reader kehilangan peta landmark.</p><p class=\"mb-4\">Pindahkan navigasi ke header, isi unik ke main, kredit ke footer. nav hanya untuk menu, bukan untuk kartu produk.</p><p class=\"mb-4\">Jangan sarangkan main di dalam main. Satu main per halaman cukup.</p><p class=\"mb-4\">Minta AI mengganti wrapper pada satu berkas. Tolak generate layout baru.</p><p class=\"mb-4\">Clincoo merender markup apa adanya. Landmark semantik adalah akses, bukan gaya.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Wrap a Clincoo Page with header, main, and footer",
          desc: "Stacked divs without landmarks hide the page map from screen readers. Use semantic elements.",
          content: "<p class=\"mb-4\">Many Clincoo templates wrap every block in div class=\"section\". Screen readers lose the landmark map.</p><p class=\"mb-4\">Move navigation into header, unique content into main, credits into footer. Use nav only for menus, not product cards.</p><p class=\"mb-4\">Do not nest main inside main. One main per page is enough.</p><p class=\"mb-4\">Ask the AI to swap wrappers in one file. Refuse a brand-new layout.</p><p class=\"mb-4\">Clincoo renders markup as stored. Semantic landmarks are access, not style.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "html-lebar-tinggi-pada-img",
      langs: {
        "id": {
          title: "Isi width dan height pada img Clincoo sebelum CSS",
          desc: "Tanpa atribut ukuran, layout bergeser saat gambar termuat. Tulis angka asli file.",
          content: "<p class=\"mb-4\">Hero Clincoo yang meloncat setelah load biasanya img tanpa width dan height. Browser belum tahu kotak cadangan.</p><p class=\"mb-4\">Tulis width dan height sesuai piksel file, lalu atur tampilan dengan CSS max-width: 100% dan height: auto.</p><p class=\"mb-4\">Jangan isi 0 atau 1 hanya untuk lolos validasi. Angka palsu merusak aspect-ratio cadangan.</p><p class=\"mb-4\">Minta AI menambah atribut pada satu tag img. Tolak kompresi massal jika tugasnya hanya atribut.</p><p class=\"mb-4\">Clincoo menayangkan gambar sesuai path. Ukuran intrinsik menahan layout shift.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set width and height on Clincoo img Tags before CSS",
          desc: "Without size attributes the layout jumps when images load. Write the real file numbers.",
          content: "<p class=\"mb-4\">A Clincoo hero that jumps after load usually has an img without width and height. The browser has no reserved box.</p><p class=\"mb-4\">Write width and height to match the file pixels, then control display with CSS max-width: 100% and height: auto.</p><p class=\"mb-4\">Do not put 0 or 1 just to pass validation. Fake numbers break the reserved aspect-ratio.</p><p class=\"mb-4\">Ask the AI to add attributes on one img tag. Refuse a mass compression pass if the task is only attributes.</p><p class=\"mb-4\">Clincoo serves images by path. Intrinsic size holds layout shift down.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "html-tautan-teks-deskriptif",
      langs: {
        "id": {
          title: "Tulis Teks Tautan Clincoo yang Bermakna, Bukan Klik di Sini",
          desc: "Klik di sini tidak menjelaskan tujuan. Frasa tautan harus berdiri sendiri.",
          content: "<p class=\"mb-4\">Halaman Clincoo sering mengulang \"klik di sini\" pada setiap CTA. Pembaca layar mendengar daftar tautan yang identik.</p><p class=\"mb-4\">Ganti dengan tujuan: \"Lihat paket harga\" atau \"Buka editor Clincoo\". URL tetap di href, teks menjelaskan aksi.</p><p class=\"mb-4\">Jangan mengandalkan warna saja untuk menandai tautan. Garis bawah atau bobot tetap membantu.</p><p class=\"mb-4\">Minta AI merapikan teks tautan di satu bagian. Tolak rewrite seluruh copy halaman.</p><p class=\"mb-4\">Clincoo menayangkan HTML yang kamu simpan. Teks tautan adalah navigasi, bukan hiasan tombol.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Write Meaningful Clincoo Link Text, Not Click Here",
          desc: "Click here does not name the destination. Link phrases should stand alone.",
          content: "<p class=\"mb-4\">Clincoo pages often repeat \"click here\" on every CTA. Screen readers hear a list of identical links.</p><p class=\"mb-4\">Replace it with the destination: \"View pricing plans\" or \"Open the Clincoo editor\". Keep the URL in href; let the text name the action.</p><p class=\"mb-4\">Do not rely on color alone to mark links. An underline or weight still helps.</p><p class=\"mb-4\">Ask the AI to tidy link text in one section. Refuse a full page copy rewrite.</p><p class=\"mb-4\">Clincoo ships the HTML you save. Link text is navigation, not button decoration.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ]
};

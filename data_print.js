// Clincoo Blog — Data kategori: print
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["print"] = {
  names: { "id": "Cetak", "en": "Print" },
  flag: "🖨",
  articles: [
    {
      id: "print-sembunyikan-nav-saat-cetak",
      langs: {
        "id": {
          title: "Sembunyikan Navbar saat Halaman Clincoo Dicetak",
          desc: "Menu, chat, dan tombol share tidak berguna di kertas. Sembunyikan lewat media print.",
          content: "<p class=\"mb-4\">Pengunjung kadang mencetak artikel atau invoice dari situs Clincoo. Navbar, cookie banner, dan tombol mengambang memakan kertas.</p><p class=\"mb-4\">Tambah @media print yang men-display none pada nav, footer sosial, dan elemen dekoratif. Biarkan judul, isi, dan tabel tetap ada.</p><p class=\"mb-4\">Jangan andalkan user-select atau screenshot. CSS print lebih rapi dan hemat tinta.</p><p class=\"mb-4\">Pratinjau cetak dari browser setelah simpan di editor.clincoo.buzz. Minta AI hanya menambah blok print, bukan merombak layout layar.</p><p class=\"mb-4\">Clincoo tidak menambah stylesheet cetak otomatis. Kamu yang memutuskan apa yang layak ke kertas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Hide the Navbar when a Clincoo Page is Printed",
          desc: "Menus, chat, and share buttons waste paper. Hide them with a print media query.",
          content: "<p class=\"mb-4\">Visitors sometimes print an article or invoice from a Clincoo site. The navbar, cookie banner, and floating buttons eat paper.</p><p class=\"mb-4\">Add an @media print rule that sets display none on nav, social footer, and decoration. Keep the title, body, and tables.</p><p class=\"mb-4\">Do not rely on screenshots. Print CSS is cleaner and uses less ink.</p><p class=\"mb-4\">Open the browser print preview after saving in editor.clincoo.buzz. Ask AI only to add the print block, not to rebuild the screen layout.</p><p class=\"mb-4\">Clincoo does not inject a print stylesheet. You decide what belongs on paper.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "print-tampilkan-url-tautan",
      langs: {
        "id": {
          title: "Tampilkan URL Tautan pada Versi Cetak Clincoo",
          desc: "Tautan biru tanpa alamat tidak berguna di kertas. Cetak href setelah teks tautan.",
          content: "<p class=\"mb-4\">Artikel Clincoo yang dicetak kehilangan tujuan tautan. Pembaca kertas tidak bisa mengeklik Lihat detail.</p><p class=\"mb-4\">Pada @media print, tampilkan attr(href) setelah tautan isi. Batasi ke tautan http agar tautan internal singkat tidak berantakan.</p><p class=\"mb-4\">Jangan cetak URL tombol navbar yang sudah disembunyikan. Fokus pada tautan di konten.</p><p class=\"mb-4\">Uji pratinjau cetak di editor.clincoo.buzz. Minta AI menambah satu aturan a::after, bukan menyalin seluruh CSS.</p><p class=\"mb-4\">Clincoo merender CSS yang kamu tulis. URL terlihat membuat versi kertas tetap bisa ditindaklanjuti.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Show Link URLs on the Clincoo Print Version",
          desc: "A blue link with no address is useless on paper. Print the href after the link text.",
          content: "<p class=\"mb-4\">A printed Clincoo article loses where links go. Paper readers cannot click See details.</p><p class=\"mb-4\">In @media print, show attr(href) after content links. Limit it to http links so short internal paths stay tidy.</p><p class=\"mb-4\">Do not print URLs for navbar buttons you already hide. Focus on links in the body.</p><p class=\"mb-4\">Check print preview from editor.clincoo.buzz. Ask AI to add one a::after rule, not to copy the whole stylesheet.</p><p class=\"mb-4\">Clincoo renders the CSS you write. Visible URLs keep the paper version actionable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "print-page-break-judul-bagian",
      langs: {
        "id": {
          title: "Atur Page Break agar Judul Clincoo Tidak Terpisah",
          desc: "Judul di kaki halaman dan isi di halaman berikutnya sulit dibaca. Pakai break-inside dan break-after.",
          content: "<p class=\"mb-4\">Saat mencetak panduan panjang dari proyek Clincoo, heading sering tertinggal sendirian di bawah halaman.</p><p class=\"mb-4\">Tambah page-break-after: avoid atau break-after: avoid pada h2 dan h3. Untuk kartu atau tabel, pakai break-inside: avoid.</p><p class=\"mb-4\">Jangan memaksa page-break-before pada setiap bagian. Itu memboroskan kertas kosong.</p><p class=\"mb-4\">Lihat pratinjau cetak setelah sunting di editor.clincoo.buzz. Minta AI menyentuh selector heading saja.</p><p class=\"mb-4\">Clincoo tidak mengatur pecahan halaman. CSS print yang hemat menjaga dokumen tetap rapi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Control Page Breaks so Clincoo Headings Stay with Body Text",
          desc: "A heading at the bottom of a page is hard to read. Use break-inside and break-after.",
          content: "<p class=\"mb-4\">When printing a long guide from a Clincoo project, headings often sit alone at the bottom of a page.</p><p class=\"mb-4\">Add page-break-after: avoid or break-after: avoid on h2 and h3. For cards or tables, use break-inside: avoid.</p><p class=\"mb-4\">Do not force page-break-before on every section. That wastes blank paper.</p><p class=\"mb-4\">Check print preview after editing in editor.clincoo.buzz. Ask AI to touch heading selectors only.</p><p class=\"mb-4\">Clincoo does not manage page breaks. Lean print CSS keeps the document tidy.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};

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
    },
    {
      id: "print-margin-halaman-dan-ukuran-kertas",
      langs: {
        "id": {
          title: "Atur Margin dan Ukuran Kertas Cetak Clincoo",
          desc: "Margin layar tidak sama dengan margin printer. Pakai @page size dan margin.",
          content: "<p class=\"mb-4\">Halaman Clincoo yang rapi di layar bisa terpotong di tepi kertas A4. Padding body 16px tidak cukup untuk printer.</p><p class=\"mb-4\">Tambah @page { size: A4; margin: 16mm; } di blok @media print. Untuk invoice lebar, uji juga size: A4 landscape.</p><p class=\"mb-4\">Jangan menumpuk margin body dan @page sekaligus terlalu besar. Konten jadi sempit dan tabel pecah.</p><p class=\"mb-4\">Simpan CSS di editor.clincoo.buzz lalu buka pratinjau cetak. Minta AI hanya menambah aturan @page, bukan mengubah grid layar.</p><p class=\"mb-4\">Clincoo tidak memilih kertas untukmu. Satu blok @page membuat hasil cetak bisa diprediksi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set Print Margins and Paper Size on Clincoo",
          desc: "Screen padding is not printer margin. Use @page size and margin.",
          content: "<p class=\"mb-4\">A Clincoo page that looks fine on screen can clip at the A4 edge. Body padding of 16px is not enough for a printer.</p><p class=\"mb-4\">Add @page { size: A4; margin: 16mm; } inside @media print. For wide invoices, also try size: A4 landscape.</p><p class=\"mb-4\">Do not stack a huge body margin on top of @page. Content gets narrow and tables break.</p><p class=\"mb-4\">Save the CSS in editor.clincoo.buzz and open print preview. Ask AI to add the @page rule only, not to change the screen grid.</p><p class=\"mb-4\">Clincoo does not pick paper for you. One @page block makes print output predictable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "print-warna-latar-hemat-tinta",
      langs: {
        "id": {
          title: "Matikan Warna Latar agar Cetakan Clincoo Hemat Tinta",
          desc: "Hero gelap dan kartu berwarna menghabiskan toner. Rapikan warna khusus print.",
          content: "<p class=\"mb-4\">Bagian hero Clincoo dengan latar gelap terlihat bagus di layar, tetapi printer mengisi hampir selembar kertas dengan tinta.</p><p class=\"mb-4\">Pada @media print, set background menjadi transparan atau putih dan color menjadi hitam pada body, kartu, dan tombol. Pakai print-color-adjust: exact hanya jika logo harus tetap berwarna.</p><p class=\"mb-4\">Jangan mengandalkan opsi Hemat tinta di dialog printer saja. CSS yang jelas lebih konsisten antar perangkat.</p><p class=\"mb-4\">Uji pratinjau setelah sunting di editor.clincoo.buzz. Minta AI memisahkan aturan warna print dari tema layar.</p><p class=\"mb-4\">Clincoo merender warna yang kamu tulis. Versi kertas yang terang lebih mudah dibaca dan lebih murah dicetak.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Drop Background Colors so Clincoo Prints Use Less Ink",
          desc: "Dark heroes and tinted cards waste toner. Set print-only colors.",
          content: "<p class=\"mb-4\">A dark Clincoo hero looks fine on screen, but a printer fills almost a full sheet with ink.</p><p class=\"mb-4\">In @media print, set background to transparent or white and color to black on the body, cards, and buttons. Use print-color-adjust: exact only if a logo must stay in color.</p><p class=\"mb-4\">Do not rely on the printer dialog ink-saver alone. Explicit CSS is more consistent across devices.</p><p class=\"mb-4\">Check preview after editing in editor.clincoo.buzz. Ask AI to keep print color rules separate from the screen theme.</p><p class=\"mb-4\">Clincoo renders the colors you write. A light paper version is easier to read and cheaper to print.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "print-gambar-lebar-penuh-kertas",
      langs: {
        "id": {
          title: "Batasi Lebar Gambar agar Tidak Meluber saat Dicetak",
          desc: "Gambar hero 1600px memotong tepi kertas. Pakai max-width 100% di media print.",
          content: "<p class=\"mb-4\">Screenshot dari editor Clincoo sering lebih lebar dari area cetak. Printer memotong sisi kanan tanpa peringatan.</p><p class=\"mb-4\">Di @media print, set img, svg, dan video { max-width: 100%; height: auto; }. Sembunyikan gambar dekoratif yang tidak menambah arti.</p><p class=\"mb-4\">Jangan memaksa lebar tetap dalam piksel. Ukuran kertas dan skala pratinjau berbeda-beda.</p><p class=\"mb-4\">Simpan di editor.clincoo.buzz lalu cetak halaman uji. Minta AI hanya menyentuh selector media, bukan mengompres file gambar.</p><p class=\"mb-4\">Clincoo tidak meresize aset saat print. CSS max-width menjaga screenshot tetap utuh di kertas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Limit Image Width so Clincoo Prints Do Not Overflow",
          desc: "A 1600px hero gets clipped on paper. Use max-width 100% in print CSS.",
          content: "<p class=\"mb-4\">Screenshots from the Clincoo editor are often wider than the printable area. The printer clips the right edge with no warning.</p><p class=\"mb-4\">In @media print, set img, svg, and video { max-width: 100%; height: auto; }. Hide decorative images that add no meaning.</p><p class=\"mb-4\">Do not force a fixed pixel width. Paper size and preview scale vary.</p><p class=\"mb-4\">Save in editor.clincoo.buzz and print a test page. Ask AI to touch media selectors only, not to recompress image files.</p><p class=\"mb-4\">Clincoo does not resize assets for print. max-width CSS keeps screenshots intact on paper.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "print-footer-nomor-halaman",
      langs: {
        "id": {
          title: "Tambah Identitas dan Nomor Halaman pada Cetakan Clincoo",
          desc: "Dokumen panjang tanpa nomor halaman mudah tertukar. Pakai running footer sederhana.",
          content: "<p class=\"mb-4\">Proposal atau SOP yang diekspor dari situs Clincoo sering terdiri dari beberapa lembar. Tanpa nomor, urutan kertas mudah kacau.</p><p class=\"mb-4\">Gunakan @page { @bottom-center { content: counter(page); } } di browser yang mendukung, atau sisipkan footer statis berisi nama situs dan tanggal di akhir artikel.</p><p class=\"mb-4\">Jangan menaruh nomor halaman di dalam konten mengalir. Itu akan ikut bergeser saat teks bertambah.</p><p class=\"mb-4\">Pratinjau di editor.clincoo.buzz. Minta AI menjelaskan dukungan @page margin boxes, bukan menjanjikan hasil sama di semua browser.</p><p class=\"mb-4\">Clincoo tidak menambah footer printer otomatis. Identitas singkat membuat tumpukan kertas tetap bisa disusun.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add Identity and Page Numbers to Clincoo Printouts",
          desc: "Long documents without page numbers get shuffled. Use a simple running footer.",
          content: "<p class=\"mb-4\">A proposal or SOP exported from a Clincoo site often spans several sheets. Without numbers, the stack is easy to mix up.</p><p class=\"mb-4\">Use @page { @bottom-center { content: counter(page); } } in browsers that support it, or insert a static footer with the site name and date at the end of the article.</p><p class=\"mb-4\">Do not put page numbers inside flowing content. They drift when the text grows.</p><p class=\"mb-4\">Preview from editor.clincoo.buzz. Ask AI to explain @page margin-box support, not to promise identical results in every browser.</p><p class=\"mb-4\">Clincoo does not inject a printer footer. A short identity line keeps the paper stack sortable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "print-tipografi-serif-ukuran-baca",
      langs: {
        "id": {
          title: "Pilih Tipografi Cetak yang Nyaman Dibaca di Clincoo",
          desc: "Font UI kecil dan rapat melelahkan di kertas. Naikkan ukuran dan jarak baris khusus print.",
          content: "<p class=\"mb-4\">Tema Clincoo memakai font sans 16px yang pas di layar. Di kertas, teks itu terasa padat dan cepat melelahkan.</p><p class=\"mb-4\">Pada @media print, naikkan body ke 12pt atau 13pt, line-height 1.5, dan pertimbangkan font-family serif untuk paragraf panjang. Judul tetap bisa sans.</p><p class=\"mb-4\">Jangan memakai ukuran px murni untuk cetak jika kamu sudah set @page. Satuan pt lebih dekat ke kertas.</p><p class=\"mb-4\">Uji dua halaman sampel dari editor.clincoo.buzz. Minta AI memisahkan tipografi print dari variabel tema layar.</p><p class=\"mb-4\">Clincoo tidak mengganti font saat pengguna menekan Ctrl+P. Aturan print yang sadar kertas membuat dokumen nyaman dibaca.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Choose Print Typography that is Comfortable to Read on Clincoo",
          desc: "Tight UI fonts tire the eyes on paper. Raise size and line-height for print only.",
          content: "<p class=\"mb-4\">A Clincoo theme often uses 16px sans that fits the screen. On paper that text feels dense and tiring.</p><p class=\"mb-4\">In @media print, raise body to 12pt or 13pt, line-height 1.5, and consider a serif family for long paragraphs. Headings can stay sans.</p><p class=\"mb-4\">Do not use raw px sizes for print if you already set @page. pt units map closer to paper.</p><p class=\"mb-4\">Test two sample pages from editor.clincoo.buzz. Ask AI to keep print typography separate from screen theme variables.</p><p class=\"mb-4\">Clincoo does not swap fonts when someone presses Ctrl+P. Paper-aware print rules keep documents readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};

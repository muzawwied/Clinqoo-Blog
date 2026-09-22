// Clincoo Blog — Data kategori: typography
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["typography"] = {
  names: { "id": "typography", "en": "typography" },
  flag: "🔤",
  articles: [
    {
      id: "typography-pakai-rem-bukan-px-kunci",
      langs: {
        "id": {
          title: "Pakai rem untuk Teks Clincoo, Jangan Kunci semuanya di px",
          desc: "px mematikan zoom teks. rem mengikuti ukuran dasar pembaca.",
          content: "<p class=\"mb-4\">Banyak template Clincoo menulis font-size: 14px di hampir semua kelas. Pembaca yang memperbesar teks di browser tidak merasakan perubahan.</p><p class=\"mb-4\">Setel ukuran dasar di html, lalu pakai rem pada judul, paragraf, dan tombol. Cadangkan px hanya untuk garis, ikon, dan jarak yang memang tetap.</p><p class=\"mb-4\">Cek pratinjau di editor.clincoo.buzz sambil menaikkan font browser. Kartu dan CTA tidak boleh pecah atau saling timpa.</p><p class=\"mb-4\">Minta AI mengubah satu file CSS saja. Tolak generate yang mengembalikan seluruh hierarki ke px.</p><p class=\"mb-4\">Clincoo menayangkan CSS apa adanya. rem yang jujur menjaga akses tanpa merombak layout.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use rem for Clincoo Text Instead of Locking Everything in px",
          desc: "px kills text zoom. rem follows the reader's base size.",
          content: "<p class=\"mb-4\">Many Clincoo templates set font-size: 14px on almost every class. Readers who enlarge text in the browser feel no change.</p><p class=\"mb-4\">Set a base size on html, then use rem for headings, paragraphs, and buttons. Keep px for borders, icons, and truly fixed gaps.</p><p class=\"mb-4\">Preview in editor.clincoo.buzz while raising the browser font. Cards and CTAs must not wrap or overlap.</p><p class=\"mb-4\">Ask the AI to change one CSS file only. Reject a generate that snaps the whole hierarchy back to px.</p><p class=\"mb-4\">Clincoo ships the CSS as saved. Honest rem keeps access without a layout rewrite.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "typography-line-height-dan-panjang-baris",
      langs: {
        "id": {
          title: "Atur line-height dan Panjang Baris agar Paragraf Clincoo Nyaman Dibaca",
          desc: "Baris terlalu rapat atau terlalu lebar membuat teks terasa berat.",
          content: "<p class=\"mb-4\">AI sering memakai line-height 1.1 pada body dan max-width 1400px untuk artikel. Mata cepat lelah.</p><p class=\"mb-4\">Untuk paragraf, target line-height 1.5–1.7 dan lebar kolom sekitar 60–75 karakter. Judul boleh lebih rapat.</p><p class=\"mb-4\">Uji di pratinjau desktop dan ponsel. Jangan biarkan teks menempel tepi kartu tanpa padding.</p><p class=\"mb-4\">Minta AI hanya mengubah kelas konten, bukan seluruh grid. Satu nilai line-height global jarang cocok untuk tombol dan badge.</p><p class=\"mb-4\">Clincoo tidak merapikan ritme baca. Kamu yang menentukan jarak antar baris.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Aplikasi Clincoo"
        },
        "en": {
          title: "Set line-height and Line Length so Clincoo Paragraphs Stay Readable",
          desc: "Lines that are too tight or too wide make text feel heavy.",
          content: "<p class=\"mb-4\">AI often uses line-height 1.1 on body and a 1400px max-width for articles. Eyes tire fast.</p><p class=\"mb-4\">For paragraphs, aim for line-height 1.5–1.7 and a column near 60–75 characters. Headings can sit tighter.</p><p class=\"mb-4\">Test desktop and phone preview. Do not let text hug the card edge without padding.</p><p class=\"mb-4\">Ask the AI to change content classes only, not the whole grid. One global line-height rarely fits buttons and badges.</p><p class=\"mb-4\">Clincoo does not fix reading rhythm. You set the space between lines.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Clincoo app"
        }
      }
    },
    {
      id: "typography-font-display-swap",
      langs: {
        "id": {
          title: "Tambah font-display: swap pada @font-face Proyek Clincoo",
          desc: "Font kustom tanpa swap menahan teks kosong saat jaringan lambat.",
          content: "<p class=\"mb-4\">Banyak situs Clincoo mengimpor Google Fonts tanpa font-display. Pengunjung melihat halaman kosong beberapa detik.</p><p class=\"mb-4\">Pada @font-face atau URL Google Fonts, setel display=swap. Teks sistem tampil dulu, lalu font merek menyusul.</p><p class=\"mb-4\">Jangan unggah lima familia sekaligus. Satu heading dan satu body sudah cukup untuk landing sederhana.</p><p class=\"mb-4\">Cek Network di pratinjau. File font di atas 200KB per wajah biasanya berlebihan untuk blog.clincoo.buzz.</p><p class=\"mb-4\">Clincoo tidak menyisipkan swap otomatis. Satu baris di CSS mencegah FOIT.</p>",
          source: "Clincoo",
          sourceUrl: "https://blog.clincoo.buzz/",
          sourceSnippet: "Clincoo Blog"
        },
        "en": {
          title: "Add font-display: swap to @font-face in a Clincoo Project",
          desc: "Custom fonts without swap hold a blank text flash on a slow network.",
          content: "<p class=\"mb-4\">Many Clincoo sites import Google Fonts without font-display. Visitors stare at empty copy for seconds.</p><p class=\"mb-4\">On @font-face or the Google Fonts URL, set display=swap. System text shows first; the brand face follows.</p><p class=\"mb-4\">Do not load five families at once. One heading face and one body face are enough for a simple landing.</p><p class=\"mb-4\">Check Network in preview. Font files over 200KB per face are usually too much for blog.clincoo.buzz.</p><p class=\"mb-4\">Clincoo does not inject swap for you. One CSS line prevents FOIT.</p>",
          source: "Clincoo",
          sourceUrl: "https://blog.clincoo.buzz/",
          sourceSnippet: "Clincoo Blog"
        }
      }
    },
    {
      id: "typography-batasi-jumlah-font",
      langs: {
        "id": {
          title: "Batasi Jumlah Familia Font di Situs Clincoo",
          desc: "Tiga atau empat font membuat halaman lambat dan tidak koheren.",
          content: "<p class=\"mb-4\">AI suka menambahkan font judul, font body, font angka, dan font tombol sekaligus. Request naik, identitas pecah.</p><p class=\"mb-4\">Pilih paling banyak dua familia. Variasikan dengan weight 400 dan 700, bukan familia baru.</p><p class=\"mb-4\">Hapus tautan fonts.googleapis.com yang tidak terpakai setelah ganti template. Sisakan hanya yang benar-benar dipakai di CSS.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz. Jika judul dan tombol terlihat sama tanpa font ketiga, buang saja.</p><p class=\"mb-4\">Clincoo mengirim setiap request yang kamu tulis. Sedikit font lebih cepat dan lebih bermerek.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Limit How Many Font Families a Clincoo Site Loads",
          desc: "Three or four families make the page slow and incoherent.",
          content: "<p class=\"mb-4\">AI likes to add a heading font, a body font, a numeral font, and a button font at once. Requests rise and identity splits.</p><p class=\"mb-4\">Pick two families at most. Vary them with weight 400 and 700, not a new family.</p><p class=\"mb-4\">Remove unused fonts.googleapis.com links after a template swap. Keep only what CSS actually calls.</p><p class=\"mb-4\">Preview in editor.clincoo.buzz. If headings and buttons look fine without a third face, drop it.</p><p class=\"mb-4\">Clincoo sends every request you wrote. Fewer fonts are faster and more on-brand.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "typography-hierarki-ukuran-judul",
      langs: {
        "id": {
          title: "Susun Hierarki Ukuran Judul h1 sampai h3 di Halaman Clincoo",
          desc: "Semua judul berukuran sama membuat sketsa halaman datar.",
          content: "<p class=\"mb-4\">Template hasil generate sering memakai h1, h2, dan h3 dengan font-size yang hampir identik. Pembaca tidak tahu mana yang utama.</p><p class=\"mb-4\">Tetapkan tangga jelas, misalnya h1 2rem, h2 1.5rem, h3 1.25rem. Satu h1 per halaman.</p><p class=\"mb-4\">Jangan stylize span menjadi judul palsu. Mesin telusur dan pembaca layar mengikuti tag heading.</p><p class=\"mb-4\">Cek outline di pratinjau. Jika dua h1 muncul karena AI menyalin hero, hapus yang cadangan.</p><p class=\"mb-4\">Clincoo tidak merapikan outline. Hierarki yang kamu simpan adalah yang ditayangkan.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Aplikasi Clincoo"
        },
        "en": {
          title: "Build a Clear h1–h3 Size Ladder on a Clincoo Page",
          desc: "Headings that share one size make the page feel flat.",
          content: "<p class=\"mb-4\">Generated templates often give h1, h2, and h3 nearly the same font-size. Readers cannot tell what is primary.</p><p class=\"mb-4\">Set a clear ladder, for example h1 2rem, h2 1.5rem, h3 1.25rem. One h1 per page.</p><p class=\"mb-4\">Do not style a span as a fake heading. Search engines and screen readers follow heading tags.</p><p class=\"mb-4\">Check the outline in preview. If two h1 tags appear because AI copied the hero, drop the spare.</p><p class=\"mb-4\">Clincoo does not tidy the outline. The hierarchy you save is the one that ships.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Clincoo app"
        }
      }
    },
    {
      id: "typography-letter-spacing-judul",
      langs: {
        "id": {
          title: "Atur letter-spacing Judul Clincoo, Jangan Longgarkan Body",
          desc: "Tracking lebar pada paragraf membuat kata terasa terpisah.",
          content: "<p class=\"mb-4\">AI sering menaikkan letter-spacing pada body agar tampil 'mewah'. Paragraf jadi sulit dipindai.</p><p class=\"mb-4\">Longgarkan tracking hanya pada judul pendek atau label kecil. Body tetap normal atau sedikit negatif.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz. Jika kata terlihat seperti deretan huruf, turunkan nilainya.</p><p class=\"mb-4\">Minta AI mengubah satu kelas heading. Tolak generate yang menempel letter-spacing ke *.</p><p class=\"mb-4\">Clincoo menayangkan CSS apa adanya. Ritme huruf yang kamu simpan adalah yang dibaca pengunjung.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Tighten Heading letter-spacing on Clincoo; Leave Body Alone",
          desc: "Wide tracking on paragraphs makes words feel split.",
          content: "<p class=\"mb-4\">AI often raises letter-spacing on body to look 'premium'. Paragraphs become hard to scan.</p><p class=\"mb-4\">Open tracking only on short headings or tiny labels. Keep body normal or slightly negative.</p><p class=\"mb-4\">Preview in editor.clincoo.buzz. If words look like letter rows, lower the value.</p><p class=\"mb-4\">Ask the AI to change one heading class. Reject a generate that stamps letter-spacing on *.</p><p class=\"mb-4\">Clincoo ships the CSS as saved. The letter rhythm you keep is what visitors read.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "typography-weight-empat-ratus-tujuh-ratus",
      langs: {
        "id": {
          title: "Pakai font-weight 400 dan 700 Saja di Proyek Clincoo",
          desc: "Banyak weight membuat file font membengkak tanpa hierarki yang lebih jelas.",
          content: "<p class=\"mb-4\">Template hasil generate sering memuat 300, 400, 500, 600, dan 700 sekaligus. Request naik, perbedaan visual kecil.</p><p class=\"mb-4\">Cukup regular dan bold. Bedakan judul dengan ukuran, bukan dengan lima tangga ketebalan.</p><p class=\"mb-4\">Hapus tautan Google Fonts yang meminta wght@200..900 jika hanya dua weight terpakai.</p><p class=\"mb-4\">Cek Network di pratinjau editor.clincoo.buzz. File yang tidak pernah dipakai tetap diunduh.</p><p class=\"mb-4\">Clincoo tidak memangkas weight otomatis. Dua ketebalan yang konsisten sudah cukup untuk landing.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Aplikasi Clincoo"
        },
        "en": {
          title: "Use Only font-weight 400 and 700 in a Clincoo Project",
          desc: "Many weights bloat font files without a clearer hierarchy.",
          content: "<p class=\"mb-4\">Generated templates often load 300, 400, 500, 600, and 700 at once. Requests rise; visual difference stays small.</p><p class=\"mb-4\">Regular and bold are enough. Separate headings by size, not five thickness steps.</p><p class=\"mb-4\">Drop Google Fonts links that request wght@200..900 if only two weights are used.</p><p class=\"mb-4\">Check Network in editor.clincoo.buzz preview. Unused files still download.</p><p class=\"mb-4\">Clincoo does not trim weights for you. Two consistent thicknesses cover a landing page.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Clincoo app"
        }
      }
    },
    {
      id: "typography-kontras-teks-latar",
      langs: {
        "id": {
          title: "Cek Kontras Teks Clincoo terhadap Latar sebelum Deploy",
          desc: "Abu di atas abu lolos di layar gelap editor, gagal di bawah sinar matahari.",
          content: "<p class=\"mb-4\">AI suka teks #888 di kartu #f4f4f4. Terlihat halus di mockup, hilang di ponsel siang hari.</p><p class=\"mb-4\">Target rasio kontras minimal 4.5:1 untuk body dan 3:1 untuk teks besar. Ukur dengan pemilih warna browser.</p><p class=\"mb-4\">Jangan andalkan overlay gelap tipis di atas foto hero. Tambah scrim atau pindahkan teks ke area polos.</p><p class=\"mb-4\">Uji pratinjau di editor.clincoo.buzz dengan kecerahan layar diturunkan. Jika harus menyipit, ganti warna.</p><p class=\"mb-4\">Clincoo tidak menaikkan kontras otomatis. Warna yang kamu simpan adalah yang ditayangkan.</p>",
          source: "Clincoo",
          sourceUrl: "https://blog.clincoo.buzz/",
          sourceSnippet: "Clincoo Blog"
        },
        "en": {
          title: "Check Clincoo Text Contrast Against the Background before Deploy",
          desc: "Gray on gray passes in a dark editor and fails in sunlight.",
          content: "<p class=\"mb-4\">AI likes #888 text on #f4f4f4 cards. It looks soft in a mockup and vanishes on a sunny phone.</p><p class=\"mb-4\">Aim for at least 4.5:1 on body and 3:1 on large type. Measure with the browser color picker.</p><p class=\"mb-4\">Do not rely on a thin dark overlay over a hero photo. Add a real scrim or move the copy to a flat area.</p><p class=\"mb-4\">Preview in editor.clincoo.buzz with screen brightness down. If you squint, change the color.</p><p class=\"mb-4\">Clincoo does not raise contrast for you. The colors you save are the colors that ship.</p>",
          source: "Clincoo",
          sourceUrl: "https://blog.clincoo.buzz/",
          sourceSnippet: "Clincoo Blog"
        }
      }
    },
    {
      id: "typography-overflow-wrap-kata-panjang",
      langs: {
        "id": {
          title: "Tambah overflow-wrap agar URL dan Kata Panjang Tidak Pecahkan Kartu Clincoo",
          desc: "Satu string tanpa spasi mendorong lebar kolom dan merusak grid.",
          content: "<p class=\"mb-4\">Form, kode, dan tautan app.clincoo.buzz sering tanpa spasi. Kartu melebar, grid pecah di ponsel.</p><p class=\"mb-4\">Setel overflow-wrap: anywhere atau break-word pada paragraf, pre, dan sel tabel. Jaga min-width: 0 pada flex item.</p><p class=\"mb-4\">Jangan andalkan white-space: nowrap pada teks yang bisa diisi pengguna.</p><p class=\"mb-4\">Uji di editor.clincoo.buzz dengan menempel URL panjang di kartu harga. Layout harus tetap dalam viewport.</p><p class=\"mb-4\">Clincoo tidak memotong string otomatis. Satu properti CSS mencegah overflow horizontal.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add overflow-wrap so Long URLs and Words Do Not Break Clincoo Cards",
          desc: "One string without spaces pushes column width and wrecks the grid.",
          content: "<p class=\"mb-4\">Forms, code, and app.clincoo.buzz links often have no spaces. Cards widen and the phone grid breaks.</p><p class=\"mb-4\">Set overflow-wrap: anywhere or break-word on paragraphs, pre, and table cells. Keep min-width: 0 on flex items.</p><p class=\"mb-4\">Do not rely on white-space: nowrap for user-supplied text.</p><p class=\"mb-4\">Preview in editor.clincoo.buzz by pasting a long URL into a price card. The layout must stay in the viewport.</p><p class=\"mb-4\">Clincoo does not clip strings for you. One CSS property stops horizontal overflow.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "typography-font-stack-cadangan-sistem",
      langs: {
        "id": {
          title: "Tulis Font Stack Cadangan Sistem di CSS Clincoo",
          desc: "Nama font merek tanpa fallback membuat teks loncat saat berkas gagal dimuat.",
          content: "<p class=\"mb-4\">Banyak file CSS hanya menulis font-family: 'Inter'. Jika CDN gagal, browser memilih Times.</p><p class=\"mb-4\">Susun stack: merek, kemudian system-ui, Segoe UI, Roboto, sans-serif. Samakan metrik kasar agar layout tidak loncat jauh.</p><p class=\"mb-4\">Jangan biarkan AI menghapus fallback saat mengganti familia. Satu baris stack lebih aman daripada nama tunggal.</p><p class=\"mb-4\">Matikan jaringan di pratinjau editor.clincoo.buzz. Judul dan tombol harus tetap terbaca.</p><p class=\"mb-4\">Clincoo mengirim stack yang kamu tulis. Cadangan sistem menjaga halaman tetap utuh saat font kustom terlambat.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Aplikasi Clincoo"
        },
        "en": {
          title: "Write a System Font Fallback Stack in Clincoo CSS",
          desc: "A brand font with no fallback makes text jump when the file fails to load.",
          content: "<p class=\"mb-4\">Many CSS files only set font-family: 'Inter'. If the CDN fails, the browser picks Times.</p><p class=\"mb-4\">Build a stack: brand face, then system-ui, Segoe UI, Roboto, sans-serif. Keep rough metrics close so layout does not jump far.</p><p class=\"mb-4\">Do not let the AI drop fallbacks when it swaps a family. One stack line is safer than a single name.</p><p class=\"mb-4\">Turn the network off in editor.clincoo.buzz preview. Headings and buttons must stay readable.</p><p class=\"mb-4\">Clincoo ships the stack you wrote. System fallbacks keep the page intact when a custom font is late.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Clincoo app"
        }
      }
    }
  ]
};

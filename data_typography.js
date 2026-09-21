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
    }
  ]
};

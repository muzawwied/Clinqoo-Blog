// Clincoo Blog — Data kategori: aksesibilitas
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["aksesibilitas"] = {
  names: { "id": "Aksesibilitas", "en": "Accessibility" },
  flag: "♿",
  articles: [
    {
      id: "a11y-label-tombol-ikon",
      langs: {
        "id": {
          title: "Beri Label pada Tombol Ikon di Proyek Clincoo",
          desc: "Tombol hanya ikon tanpa nama membingungkan pembaca layar. Tambah aria-label atau teks tersembunyi.",
          content: "<p class=\"mb-4\">Banyak template Clincoo memakai tombol hamburger atau silang tanpa teks. Pengguna keyboard dan pembaca layar hanya mendengar \u201cbutton\u201d.</p><p class=\"mb-4\">Tambah aria-label yang menjelaskan aksi: \u201cBuka menu\u201d, \u201cTutup dialog\u201d, \u201cKirim formulir\u201d. Jangan ulang kata \u201ctombol\u201d.</p><p class=\"mb-4\">Jika desain mengizinkan, tampilkan teks singkat di samping ikon. Visual dan nama aksesibel tetap selaras.</p><p class=\"mb-4\">Uji dengan Tab lalu pembaca layar di pratinjau editor.clincoo.buzz. Minta AI hanya menambah label, bukan mengganti seluruh navbar.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. Nama tombol yang jelas membantu lebih banyak pengunjung menyelesaikan tugas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Label Icon-Only Buttons on a Clincoo Project",
          desc: "Icon-only buttons confuse screen readers. Add an aria-label or visually hidden text.",
          content: "<p class=\"mb-4\">Many Clincoo templates ship hamburger or close buttons with no text. Keyboard and screen-reader users only hear \u201cbutton\u201d.</p><p class=\"mb-4\">Add an aria-label that names the action: \u201cOpen menu\u201d, \u201cClose dialog\u201d, \u201cSubmit form\u201d. Do not repeat the word \u201cbutton\u201d.</p><p class=\"mb-4\">If the design allows it, show a short visible label next to the icon. Sighted and assistive names stay aligned.</p><p class=\"mb-4\">Tab through the preview on editor.clincoo.buzz and listen with a screen reader. Ask AI only to add labels, not to rewrite the navbar.</p><p class=\"mb-4\">Clincoo ships the markup you save. Clear button names help more visitors finish the task.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "a11y-fokus-terlihat-outline",
      langs: {
        "id": {
          title: "Jangan Hapus Outline Fokus di Situs Clincoo",
          desc: "outline: none tanpa pengganti membuat navigasi keyboard hilang. Ganti dengan cincin fokus yang kontras.",
          content: "<p class=\"mb-4\">Reset CSS di template Clincoo sering memuat *:focus { outline: none }. Pengguna Tab tidak tahu elemen mana yang aktif.</p><p class=\"mb-4\">Kalau desain menolak outline default, ganti dengan outline atau box-shadow yang kontras pada :focus-visible.</p><p class=\"mb-4\">Jangan andalkan hover saja. Sentuhan dan keyboard tidak punya hover yang sama.</p><p class=\"mb-4\">Cek setiap tautan, input, dan tombol dengan Tab di editor.clincoo.buzz. Minta AI memperbaiki satu selector, bukan seluruh reset.</p><p class=\"mb-4\">Clincoo tidak menambah cincin fokus otomatis. Kamu yang menjaga agar keyboard tetap terlihat.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Remove Focus Outlines on a Clincoo Site",
          desc: "outline: none with no replacement hides keyboard navigation. Use a contrasting focus ring.",
          content: "<p class=\"mb-4\">Clincoo template resets often include *:focus { outline: none }. Tab users cannot see the active control.</p><p class=\"mb-4\">If the design rejects the default outline, replace it with a contrasting outline or box-shadow on :focus-visible.</p><p class=\"mb-4\">Do not rely on hover alone. Touch and keyboard do not share the same hover state.</p><p class=\"mb-4\">Tab through every link, input, and button in editor.clincoo.buzz. Ask AI to fix one selector, not the whole reset.</p><p class=\"mb-4\">Clincoo does not inject a focus ring for you. You keep keyboard paths visible.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "a11y-alt-teks-bermakna",
      langs: {
        "id": {
          title: "Tulis Alt Gambar yang Bermakna di Clincoo",
          desc: "alt kosong atau gambar1 tidak membantu. Jelaskan fungsi gambar dalam satu kalimat pendek.",
          content: "<p class=\"mb-4\">Unggahan di editor Clincoo sering tersisa alt=\"image\" atau nama berkas. Pembaca layar membacanya mentah.</p><p class=\"mb-4\">Untuk gambar isi, tulis apa yang perlu diketahui pembaca jika gambar hilang. Untuk dekorasi murni, pakai alt=\"\".</p><p class=\"mb-4\">Jangan mulai dengan Gambar dari. Langsung ke subjek dan konteks halaman.</p><p class=\"mb-4\">Audit lima gambar hero dan kartu di pratinjau. Minta AI mengusulkan alt per berkas, lalu sunting sendiri.</p><p class=\"mb-4\">Clincoo menyimpan atribut yang kamu tulis. Alt yang tepat juga menolong SEO on-page.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write Meaningful Image Alt Text in Clincoo",
          desc: "Empty or image1 alt text does not help. Describe the image job in one short sentence.",
          content: "<p class=\"mb-4\">Uploads in the Clincoo editor often keep alt=\"image\" or the filename. Screen readers speak that raw string.</p><p class=\"mb-4\">For content images, write what a reader needs if the file is missing. For pure decoration, use alt=\"\".</p><p class=\"mb-4\">Do not start with Image of. Lead with the subject and page context.</p><p class=\"mb-4\">Audit five hero and card images in preview. Ask AI for per-file alt drafts, then edit them yourself.</p><p class=\"mb-4\">Clincoo stores the attributes you write. Good alt text also supports on-page SEO.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "a11y-heading-satu-h1",
      langs: {
        "id": {
          title: "Pakai Satu H1 dan Urutan Heading di Halaman Clincoo",
          desc: "Beberapa H1 atau lompat dari H2 ke H4 membingungkan kerangka halaman. Rapikan hierarki dulu.",
          content: "<p class=\"mb-4\">Template Clincoo kadang memakai H1 pada logo dan lagi pada judul artikel. Kerangka dokumen jadi ganda.</p><p class=\"mb-4\">Sisakan satu H1 untuk judul halaman. Lanjut H2 untuk bagian, H3 untuk subbagian. Jangan loncat level.</p><p class=\"mb-4\">Jangan naikkan ukuran visual dengan mengganti heading. Pakai kelas CSS untuk gaya, heading untuk struktur.</p><p class=\"mb-4\">Lihat outline di DevTools atau ekstensi headings. Minta AI merapikan satu halaman, bukan seluruh situs.</p><p class=\"mb-4\">Clincoo merender heading apa adanya. Urutan yang benar membantu pembaca layar dan mesin telusur.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use One H1 and Ordered Headings on a Clincoo Page",
          desc: "Several H1s or a jump from H2 to H4 scramble the page outline. Fix the hierarchy first.",
          content: "<p class=\"mb-4\">Clincoo templates sometimes put an H1 on the logo and another on the article title. The document outline splits.</p><p class=\"mb-4\">Keep one H1 for the page title. Use H2 for sections and H3 for subsections. Do not skip levels.</p><p class=\"mb-4\">Do not raise visual size by changing the heading tag. Use CSS classes for style and headings for structure.</p><p class=\"mb-4\">Check the outline in DevTools or a headings extension. Ask AI to tidy one page, not the whole site.</p><p class=\"mb-4\">Clincoo renders headings as saved. A clean order helps screen readers and search engines.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "a11y-kontras-teks-latar",
      langs: {
        "id": {
          title: "Cek Kontras Teks dan Latar sebelum Rilis Clincoo",
          desc: "Abu muda di putih gagal WCAG. Ukur rasio kontras pada teks isi dan tautan.",
          content: "<p class=\"mb-4\">Palet AI di Clincoo sering memilih abu #999 di latar #fff. Terlihat lembut di monitor cerah, gagal di siang hari.</p><p class=\"mb-4\">Target minimal 4.5:1 untuk teks biasa dan 3:1 untuk teks besar. Ukur dengan pemilih warna DevTools.</p><p class=\"mb-4\">Periksa juga tautan di footer dan placeholder form. Placeholder bukan pengganti label.</p><p class=\"mb-4\">Perbaiki token warna di satu berkas CSS. Jangan minta AI percantik palet tanpa angka kontras.</p><p class=\"mb-4\">Clincoo tidak menolak warna pucat. Kamu yang menguji sebelum deploy ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Check Text and Background Contrast before a Clincoo Release",
          desc: "Light gray on white fails WCAG. Measure contrast on body text and links.",
          content: "<p class=\"mb-4\">AI palettes in Clincoo often pick #999 gray on #fff. It looks soft on a bright monitor and fails in daylight.</p><p class=\"mb-4\">Aim for at least 4.5:1 on body text and 3:1 on large text. Measure with the DevTools color picker.</p><p class=\"mb-4\">Also check footer links and form placeholders. A placeholder is not a label.</p><p class=\"mb-4\">Fix color tokens in one CSS file. Do not ask AI to beautify the palette without contrast numbers.</p><p class=\"mb-4\">Clincoo will not reject a washed-out color. You test before deploy on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};

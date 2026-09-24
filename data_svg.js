// Clincoo Blog — Data kategori: svg
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["svg"] = {
  names: { "id": "SVG", "en": "SVG" },
  flag: "\u25a1",
  articles: [
    {
      id: "svg-ikon-inline-bukan-berkas",
      langs: {
        "id": {
          title: "Tempel SVG Ikon Inline di Clincoo, Jangan Hanya Berkas Terpisah",
          desc: "Ikon sebagai file img sulit diwarnai lewat CSS dan sering flicker saat dimuat.",
          content: "<p class=\"mb-4\">Tombol Clincoo memakai <img src=\"ikon.svg\">. Warna ikon tidak mengikuti teks dan muncul telat setelah HTML.</p><p class=\"mb-4\">Tempel markup SVG langsung di tombol di editor.clincoo.buzz. Set currentColor pada fill agar ikon ikut warna teks.</p><p class=\"mb-4\">Beri title atau aria-hidden sesuai makna. Ikon dekoratif disembunyikan dari pembaca layar.</p><p class=\"mb-4\">Minta AI hanya mengganti satu ikon jadi inline. Tempel berkas SVG asli.</p><p class=\"mb-4\">Clincoo merender SVG yang kamu tempel. Ikon inline mengikuti tema di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Paste Icon SVG Inline in Clincoo, Not Only as Separate Files",
          desc: "Icons as img files are hard to recolor with CSS and often flicker on load.",
          content: "<p class=\"mb-4\">Clincoo buttons use <img src=\"icon.svg\">. The icon color does not follow the text and appears late after the HTML.</p><p class=\"mb-4\">Paste the SVG markup into the button in editor.clincoo.buzz. Set currentColor on fill so the icon matches text color.</p><p class=\"mb-4\">Add a title or aria-hidden to match meaning. Hide decorative icons from screen readers.</p><p class=\"mb-4\">Ask AI to convert one icon to inline only. Paste the original SVG file.</p><p class=\"mb-4\">Clincoo renders the SVG you paste. Inline icons follow the theme on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "svg-pertahankan-viewbox",
      langs: {
        "id": {
          title: "Jangan Hapus viewBox saat Menyusutkan SVG di Clincoo",
          desc: "Tanpa viewBox, ikon pecah saat lebar berubah. viewBox menjaga rasio tetap.",
          content: "<p class=\"mb-4\">AI kadang menghapus viewBox agar \"lebih ringkas\". Ikon lalu merentang aneh di tombol sempit Clincoo.</p><p class=\"mb-4\">Simpan viewBox=\"0 0 lebar tinggi\" dan atur width/height lewat CSS di editor.clincoo.buzz. Biarkan SVG menskalakan diri.</p><p class=\"mb-4\">Jangan set width dan height tetap di atribut jika kamu sudah mengatur ukuran di CSS.</p><p class=\"mb-4\">Minta AI hanya mengembalikan viewBox yang hilang. Tempel SVG sebelum dan sesudah.</p><p class=\"mb-4\">Clincoo tidak memperbaiki rasio sendiri. viewBox yang utuh menjaga ikon rapi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Drop viewBox When Shrinking SVG in Clincoo",
          desc: "Without viewBox, an icon breaks when width changes. viewBox keeps the ratio.",
          content: "<p class=\"mb-4\">AI sometimes removes viewBox to look \"leaner\". The icon then stretches oddly on a narrow Clincoo button.</p><p class=\"mb-4\">Keep viewBox=\"0 0 width height\" and size width/height with CSS in editor.clincoo.buzz. Let the SVG scale itself.</p><p class=\"mb-4\">Do not set fixed width and height attributes if you already size the icon in CSS.</p><p class=\"mb-4\">Ask AI to restore the missing viewBox only. Paste the SVG before and after.</p><p class=\"mb-4\">Clincoo does not fix the ratio for you. An intact viewBox keeps icons tidy on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "svg-pakai-currentcolor",
      langs: {
        "id": {
          title: "Pakai currentColor pada Fill SVG di Clincoo",
          desc: "Fill hex tetap tidak mengikuti tema. currentColor membuat ikon ikut warna teks.",
          content: "<p class=\"mb-4\">Ikon Clincoo memakai fill=\"#111111\". Saat tema gelap, ikon tetap hitam dan hilang di latar gelap.</p><p class=\"mb-4\">Ganti fill dan stroke jadi currentColor di editor.clincoo.buzz. Warna ikon mengikuti color CSS induk.</p><p class=\"mb-4\">Jangan campur currentColor dengan fill hex di path yang sama. Satu aturan warna cukup.</p><p class=\"mb-4\">Minta AI hanya mengganti atribut fill/stroke jadi currentColor. Tempel SVG asli.</p><p class=\"mb-4\">Clincoo merender warna dari CSS. Ikon currentColor tetap jelas di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use currentColor on SVG Fill in Clincoo",
          desc: "A hard-coded hex fill ignores theme. currentColor makes the icon follow text color.",
          content: "<p class=\"mb-4\">Clincoo icons use fill=\"#111111\". In a dark theme the icon stays black and vanishes on a dark background.</p><p class=\"mb-4\">Change fill and stroke to currentColor in editor.clincoo.buzz. The icon color then follows the parent CSS color.</p><p class=\"mb-4\">Do not mix currentColor with a hex fill on the same path. One color rule is enough.</p><p class=\"mb-4\">Ask AI to change only fill/stroke attributes to currentColor. Paste the original SVG.</p><p class=\"mb-4\">Clincoo renders color from CSS. currentColor icons stay visible on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "svg-hapus-width-height-atribut",
      langs: {
        "id": {
          title: "Hapus Width Height Atribut SVG jika Sudah Diatur CSS",
          desc: "Atribut width/height tetap mengunci ukuran. CSS tidak bisa menyesuaikan ikon.",
          content: "<p class=\"mb-4\">SVG ikon Clincoo punya width=\"64\" height=\"64\". Di tombol kecil, ikon memaksa tinggi baris.</p><p class=\"mb-4\">Hapus atribut width dan height. Simpan viewBox. Atur ukuran lewat CSS di editor.clincoo.buzz.</p><p class=\"mb-4\">Jika butuh cadangan, set width dan height 100% bukan piksel tetap.</p><p class=\"mb-4\">Minta AI hanya menghapus width/height atribut. Jangan ubah path.</p><p class=\"mb-4\">Clincoo menampilkan ikon sesuai CSS. Ukuran fleksibel menjaga layout rapi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Drop SVG Width Height Attributes When CSS Already Sizes Them",
          desc: "Fixed width/height attributes lock size. CSS cannot adapt the icon.",
          content: "<p class=\"mb-4\">Clincoo icon SVGs have width=\"64\" height=\"64\". On a small button the icon forces the row height.</p><p class=\"mb-4\">Remove the width and height attributes. Keep viewBox. Size the icon with CSS in editor.clincoo.buzz.</p><p class=\"mb-4\">If you need a fallback, set width and height to 100% instead of fixed pixels.</p><p class=\"mb-4\">Ask AI to remove only the width/height attributes. Do not change the paths.</p><p class=\"mb-4\">Clincoo shows the icon from CSS. Flexible size keeps the layout tidy on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "svg-title-aria-ikon",
      langs: {
        "id": {
          title: "Beri Title atau aria-hidden pada Ikon SVG Clincoo",
          desc: "Ikon tanpa nama membingungkan pembaca layar. Tandai makna atau sembunyikan.",
          content: "<p class=\"mb-4\">Tombol hanya berisi SVG tanpa teks. Pembaca layar mengumumkan \"gambar\" tanpa makna.</p><p class=\"mb-4\">Jika ikon satu-satunya label, tambah title di dalam SVG atau aria-label di tombol di editor.clincoo.buzz.</p><p class=\"mb-4\">Jika ada teks di samping ikon, set aria-hidden=\"true\" pada SVG agar tidak diulang.</p><p class=\"mb-4\">Minta AI menambah title atau aria-hidden saja. Jangan ubah bentuk ikon.</p><p class=\"mb-4\">Clincoo tidak menambah label otomatis. Nama yang jelas membantu akses di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Add a Title or aria-hidden on Clincoo SVG Icons",
          desc: "An unnamed icon confuses screen readers. Mark meaning or hide the graphic.",
          content: "<p class=\"mb-4\">A button holds only an SVG with no text. Screen readers announce \"image\" with no meaning.</p><p class=\"mb-4\">If the icon is the only label, add a title inside the SVG or aria-label on the button in editor.clincoo.buzz.</p><p class=\"mb-4\">If text sits beside the icon, set aria-hidden=\"true\" on the SVG so it is not repeated.</p><p class=\"mb-4\">Ask AI to add only title or aria-hidden. Do not change the icon shape.</p><p class=\"mb-4\">Clincoo does not add labels by itself. A clear name helps access on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "svg-hindari-embed-base64",
      langs: {
        "id": {
          title: "Jangan Sematkan SVG sebagai Data URI Base64 Panjang",
          desc: "Data URI membesarkan HTML dan sulit diedit. Tempel markup SVG langsung.",
          content: "<p class=\"mb-4\">AI menempel img src=\"data:image/svg+xml;base64,...\" sepanjang layar. Warna dan path tidak bisa diubah.</p><p class=\"mb-4\">Decode atau buka berkas SVG asli. Tempel markup inline di editor.clincoo.buzz.</p><p class=\"mb-4\">Jika harus file terpisah, pakai berkas .svg biasa, bukan string base64 di HTML.</p><p class=\"mb-4\">Minta AI mengubah data URI jadi markup SVG. Tempel cuplikan yang membengkak.</p><p class=\"mb-4\">Clincoo merender markup yang kamu tempel. SVG teks lebih mudah dirawat di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Embed SVG as a Long Base64 Data URI",
          desc: "A data URI bloats HTML and is hard to edit. Paste SVG markup instead.",
          content: "<p class=\"mb-4\">AI pastes img src=\"data:image/svg+xml;base64,...\" across the screen. Color and paths cannot be edited.</p><p class=\"mb-4\">Decode or open the original SVG file. Paste inline markup in editor.clincoo.buzz.</p><p class=\"mb-4\">If you need a separate file, use a normal .svg file, not a base64 string in HTML.</p><p class=\"mb-4\">Ask AI to turn the data URI into SVG markup. Paste the bloated snippet.</p><p class=\"mb-4\">Clincoo renders the markup you paste. Text SVG is easier to maintain on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "svg-bersihkan-metadata-editor",
      langs: {
        "id": {
          title: "Bersihkan Metadata Editor dari SVG sebelum Tempel",
          desc: "Ekspor Figma atau Inkscape membawa id acak dan komentar. Rapikan dulu.",
          content: "<p class=\"mb-4\">SVG dari editor desain berisi sodipodi, inkscape, atau id seperti Vector_12. Berkas jadi berat.</p><p class=\"mb-4\">Hapus namespace yang tidak dipakai, metadata, dan id acak di editor.clincoo.buzz. Simpan path dan viewBox.</p><p class=\"mb-4\">Jangan hapus id yang dipakai CSS atau clipPath. Cek dulu di pratinjau.</p><p class=\"mb-4\">Minta AI hanya membersihkan metadata. Tempel SVG ekspor mentah.</p><p class=\"mb-4\">Clincoo tidak menghapus metadata sendiri. SVG bersih lebih cepat di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Clean Editor Metadata from SVG Before You Paste",
          desc: "Figma or Inkscape exports carry random ids and comments. Clean them first.",
          content: "<p class=\"mb-4\">SVG from a design editor includes sodipodi, inkscape, or ids like Vector_12. The file gets heavy.</p><p class=\"mb-4\">Remove unused namespaces, metadata, and random ids in editor.clincoo.buzz. Keep paths and viewBox.</p><p class=\"mb-4\">Do not drop ids used by CSS or clipPath. Check the preview first.</p><p class=\"mb-4\">Ask AI to clean metadata only. Paste the raw exported SVG.</p><p class=\"mb-4\">Clincoo does not strip metadata for you. A clean SVG loads faster on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};

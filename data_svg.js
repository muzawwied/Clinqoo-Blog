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
    },
    {
      id: "svg-stroke-lebar-konsisten",
      langs: {
        "id": {
          title: "Samakan stroke-width Ikon SVG di Satu Set Clincoo",
          desc: "Stroke berbeda membuat set ikon terlihat tidak seragam di toolbar.",
          content: "<p class=\"mb-4\">Satu ikon Clincoo memakai stroke 1.5, ikon sebelahnya 2.5. Di toolbar kecil perbedaannya mencolok.</p><p class=\"mb-4\">Samakan stroke-width di seluruh set di editor.clincoo.buzz. Pakai satuan yang sama, biasanya 1.5 atau 2.</p><p class=\"mb-4\">Jangan campur ikon filled dan outlined tanpa aturan. Satu gaya per toolbar cukup.</p><p class=\"mb-4\">Minta AI hanya menormalkan stroke-width. Tempel dua ikon yang tidak cocok.</p><p class=\"mb-4\">Clincoo merender path apa adanya. Stroke seragam menjaga toolbar rapi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Keep SVG Icon stroke-width Consistent in One Clincoo Set",
          desc: "Uneven strokes make an icon set look messy in the toolbar.",
          content: "<p class=\"mb-4\">One Clincoo icon uses stroke 1.5, the next uses 2.5. On a small toolbar the mismatch is obvious.</p><p class=\"mb-4\">Normalize stroke-width across the set in editor.clincoo.buzz. Use one unit, usually 1.5 or 2.</p><p class=\"mb-4\">Do not mix filled and outlined icons without a rule. One style per toolbar is enough.</p><p class=\"mb-4\">Ask AI to normalize stroke-width only. Paste the two mismatched icons.</p><p class=\"mb-4\">Clincoo renders paths as-is. Even strokes keep the toolbar tidy on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "svg-fokus-outline-tombol-ikon",
      langs: {
        "id": {
          title: "Jangan Hilangkan Outline Fokus pada Tombol Ikon SVG",
          desc: "outline:none tanpa pengganti membuat keyboard tidak punya petunjuk fokus.",
          content: "<p class=\"mb-4\">Tombol ikon Clincoo memakai outline:none. Pengguna keyboard tidak tahu tombol mana yang aktif.</p><p class=\"mb-4\">Ganti outline:none dengan :focus-visible di editor.clincoo.buzz. Pakai ring 2px yang kontras.</p><p class=\"mb-4\">Jangan andalkan hover saja. Sentuh dan keyboard tidak punya hover yang sama.</p><p class=\"mb-4\">Minta AI hanya menambah :focus-visible. Tempel CSS tombol yang menghapus outline.</p><p class=\"mb-4\">Clincoo tidak menambah ring fokus sendiri. Petunjuk fokus jelas membantu navigasi di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Do Not Drop Focus Outline on SVG Icon Buttons",
          desc: "outline:none with no replacement leaves keyboard users without a focus cue.",
          content: "<p class=\"mb-4\">Clincoo icon buttons use outline:none. Keyboard users cannot tell which button is active.</p><p class=\"mb-4\">Replace outline:none with :focus-visible in editor.clincoo.buzz. Use a 2px high-contrast ring.</p><p class=\"mb-4\">Do not rely on hover alone. Touch and keyboard do not share the same hover.</p><p class=\"mb-4\">Ask AI to add :focus-visible only. Paste the button CSS that removes outline.</p><p class=\"mb-4\">Clincoo does not add a focus ring for you. A clear cue helps navigation on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "svg-symbol-sprite-satu-berkas",
      langs: {
        "id": {
          title: "Pakai symbol dan use untuk Sprite SVG di Clincoo",
          desc: "Menyalin path yang sama ke banyak tombol membesarkan HTML dan sulit diubah.",
          content: "<p class=\"mb-4\">Setiap tombol Clincoo menyalin markup SVG penuh. Mengganti satu path berarti menyentuh sepuluh tempat.</p><p class=\"mb-4\">Simpan ikon sekali sebagai symbol di sprite, lalu rujuk dengan use href di editor.clincoo.buzz.</p><p class=\"mb-4\">Beri id unik per symbol. Jangan bentrok dengan id CSS lain di halaman.</p><p class=\"mb-4\">Minta AI mengubah salinan berulang jadi satu sprite plus use. Tempel tiga tombol yang sama.</p><p class=\"mb-4\">Clincoo merender use seperti SVG biasa. Sprite menjaga HTML ringkas di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use symbol and use for an SVG Sprite in Clincoo",
          desc: "Copying the same path into many buttons bloats HTML and is hard to change.",
          content: "<p class=\"mb-4\">Each Clincoo button copies full SVG markup. Changing one path means touching ten places.</p><p class=\"mb-4\">Store the icon once as a symbol in a sprite, then point to it with use href in editor.clincoo.buzz.</p><p class=\"mb-4\">Give each symbol a unique id. Do not clash with other CSS ids on the page.</p><p class=\"mb-4\">Ask AI to turn repeated copies into one sprite plus use. Paste three identical buttons.</p><p class=\"mb-4\">Clincoo renders use like regular SVG. A sprite keeps HTML lean on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "svg-hindari-filter-berat",
      langs: {
        "id": {
          title: "Hindari Filter SVG Berat pada Ikon Kecil Clincoo",
          desc: "feGaussianBlur dan drop-shadow kompleks memperlambat scroll di halaman padat.",
          content: "<p class=\"mb-4\">Ikon Clincoo memakai filter blur dan bayangan berlapis. Di daftar panjang, scroll terasa berat.</p><p class=\"mb-4\">Ganti filter SVG dengan box-shadow CSS sederhana di editor.clincoo.buzz jika efek hanya dekorasi.</p><p class=\"mb-4\">Jika filter wajib, terapkan pada satu elemen besar, bukan setiap ikon 16px.</p><p class=\"mb-4\">Minta AI menghapus filter SVG dan mengganti dengan CSS. Tempel markup yang mengandung filter.</p><p class=\"mb-4\">Clincoo merender filter apa adanya. Ikon tanpa filter berat tetap ringan di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Avoid Heavy SVG Filters on Small Clincoo Icons",
          desc: "feGaussianBlur and complex drop-shadows slow scroll on dense pages.",
          content: "<p class=\"mb-4\">Clincoo icons use stacked blur and shadow filters. On a long list, scroll feels heavy.</p><p class=\"mb-4\">Replace SVG filters with a simple CSS box-shadow in editor.clincoo.buzz when the effect is only decoration.</p><p class=\"mb-4\">If a filter is required, apply it to one large element, not every 16px icon.</p><p class=\"mb-4\">Ask AI to drop SVG filters and switch to CSS. Paste the markup that contains the filter.</p><p class=\"mb-4\">Clincoo renders filters as-is. Icons without heavy filters stay light on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "svg-preserveaspectratio-tengah",
      langs: {
        "id": {
          title: "Set preserveAspectRatio agar SVG Tidak gepencet di Clincoo",
          desc: "Tanpa preserveAspectRatio yang tepat, logo merentang saat wadah berubah rasio.",
          content: "<p class=\"mb-4\">Logo Clincoo merentang lebar di banner tinggi. viewBox ada, tetapi rasio wadah berbeda.</p><p class=\"mb-4\">Tambah preserveAspectRatio=\"xMidYMid meet\" di editor.clincoo.buzz agar SVG tetap di tengah dan tidak terpotong kasar.</p><p class=\"mb-4\">Pakai slice hanya jika kamu sengaja ingin mengisi wadah dan menerima potongan.</p><p class=\"mb-4\">Minta AI menambah preserveAspectRatio saja. Tempel SVG logo dan CSS wadah.</p><p class=\"mb-4\">Clincoo tidak menebak rasio tampilan. preserveAspectRatio menjaga logo utuh di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set preserveAspectRatio so SVG Does Not Stretch in Clincoo",
          desc: "Without the right preserveAspectRatio, a logo stretches when the box ratio changes.",
          content: "<p class=\"mb-4\">A Clincoo logo stretches wide in a tall banner. viewBox exists, but the box ratio differs.</p><p class=\"mb-4\">Add preserveAspectRatio=\"xMidYMid meet\" in editor.clincoo.buzz so the SVG stays centered and is not cropped harshly.</p><p class=\"mb-4\">Use slice only when you mean to fill the box and accept cropping.</p><p class=\"mb-4\">Ask AI to add preserveAspectRatio only. Paste the logo SVG and the box CSS.</p><p class=\"mb-4\">Clincoo does not guess display ratio. preserveAspectRatio keeps the logo intact on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};

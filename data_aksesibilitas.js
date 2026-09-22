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
          content: "<p class=\"mb-4\">Banyak template Clincoo memakai tombol hamburger atau silang tanpa teks. Pengguna keyboard dan pembaca layar hanya mendengar button.</p><p class=\"mb-4\">Tambah aria-label yang menjelaskan aksi: Buka menu, Tutup dialog, Kirim formulir. Jangan ulang kata tombol.</p><p class=\"mb-4\">Jika desain mengizinkan, tampilkan teks singkat di samping ikon. Visual dan nama aksesibel tetap selaras.</p><p class=\"mb-4\">Uji dengan Tab lalu pembaca layar di pratinjau editor.clincoo.buzz. Minta AI hanya menambah label, bukan mengganti seluruh navbar.</p><p class=\"mb-4\">Clincoo menayangkan markup yang kamu simpan. Nama tombol yang jelas membantu lebih banyak pengunjung menyelesaikan tugas.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Label Icon-Only Buttons on a Clincoo Project",
          desc: "Icon-only buttons confuse screen readers. Add an aria-label or visually hidden text.",
          content: "<p class=\"mb-4\">Many Clincoo templates ship hamburger or close buttons with no text. Keyboard and screen-reader users only hear button.</p><p class=\"mb-4\">Add an aria-label that names the action: Open menu, Close dialog, Submit form. Do not repeat the word button.</p><p class=\"mb-4\">If the design allows it, show a short visible label next to the icon. Sighted and assistive names stay aligned.</p><p class=\"mb-4\">Tab through the preview on editor.clincoo.buzz and listen with a screen reader. Ask AI only to add labels, not to rewrite the navbar.</p><p class=\"mb-4\">Clincoo ships the markup you save. Clear button names help more visitors finish the task.</p>",
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
          content: "<p class=\"mb-4\">Unggahan di editor Clincoo sering tersisa alt=image atau nama berkas. Pembaca layar membacanya mentah.</p><p class=\"mb-4\">Untuk gambar isi, tulis apa yang perlu diketahui pembaca jika gambar hilang. Untuk dekorasi murni, pakai alt kosong.</p><p class=\"mb-4\">Jangan mulai dengan Gambar dari. Langsung ke subjek dan konteks halaman.</p><p class=\"mb-4\">Audit lima gambar hero dan kartu di pratinjau. Minta AI mengusulkan alt per berkas, lalu sunting sendiri.</p><p class=\"mb-4\">Clincoo menyimpan atribut yang kamu tulis. Alt yang tepat juga menolong SEO on-page.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write Meaningful Image Alt Text in Clincoo",
          desc: "Empty or image1 alt text does not help. Describe the image job in one short sentence.",
          content: "<p class=\"mb-4\">Uploads in the Clincoo editor often keep alt=image or the filename. Screen readers speak that raw string.</p><p class=\"mb-4\">For content images, write what a reader needs if the file is missing. For pure decoration, use empty alt.</p><p class=\"mb-4\">Do not start with Image of. Lead with the subject and page context.</p><p class=\"mb-4\">Audit five hero and card images in preview. Ask AI for per-file alt drafts, then edit them yourself.</p><p class=\"mb-4\">Clincoo stores the attributes you write. Good alt text also supports on-page SEO.</p>",
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
    },
    {
      id: "a11y-tabindex-jangan-positif",
      langs: {
        "id": {
          title: "Hindari tabindex Positif di Halaman Clincoo",
          desc: "tabindex 1 merusak urutan Tab alami. Pakai urutan DOM atau tabindex 0 hanya jika perlu.",
          content: "<p class=\"mb-4\">AI sering menaruh tabindex positif pada CTA Clincoo supaya langsung fokus. Hasilnya pengguna keyboard meloncat melewati menu dan tautan lewati.</p><p class=\"mb-4\">Biarkan urutan Tab mengikuti markup. Rapikan HTML dulu, baru pikirkan fokus. tabindex 0 hanya untuk elemen kustom yang memang bisa diklik.</p><p class=\"mb-4\">tabindex -1 berguna untuk memindahkan fokus secara skrip ke judul dialog, bukan untuk menghias tombol.</p><p class=\"mb-4\">Uji dengan Tab dari logo sampai footer di editor.clincoo.buzz. Minta AI menghapus semua tabindex positif, bukan menulis ulang halaman.</p><p class=\"mb-4\">Clincoo merender atribut apa adanya. Urutan fokus yang jujur lebih aman daripada angka ajaib.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Avoid Positive tabindex on a Clincoo Page",
          desc: "Positive tabindex breaks natural Tab order. Follow the DOM or use tabindex 0 only when needed.",
          content: "<p class=\"mb-4\">AI often drops a positive tabindex on a Clincoo CTA so it is focused first. Keyboard users then skip the menu and skip link.</p><p class=\"mb-4\">Let Tab order follow the markup. Clean the HTML first, then think about focus. Use tabindex 0 only on a custom control that must be clickable.</p><p class=\"mb-4\">tabindex -1 is for scripted focus on a dialog title, not for decorating a button.</p><p class=\"mb-4\">Tab from the logo to the footer in editor.clincoo.buzz. Ask AI to remove every positive tabindex, not to rewrite the page.</p><p class=\"mb-4\">Clincoo renders attributes as saved. Honest focus order is safer than magic numbers.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "a11y-dialog-kelola-fokus",
      langs: {
        "id": {
          title: "Kelola Fokus saat Dialog Clincoo Dibuka",
          desc: "Modal tanpa perangkap fokus menyesatkan keyboard. Pindahkan fokus ke dialog dan kembalikan saat ditutup.",
          content: "<p class=\"mb-4\">Banyak overlay template Clincoo hanya menambah kelas CSS. Fokus tetap di belakang modal, Tab menyentuh tautan yang tidak terlihat.</p><p class=\"mb-4\">Saat dialog terbuka, pindahkan fokus ke judul atau tombol tutup. Tahan Tab di dalam dialog sampai pengguna menutupnya.</p><p class=\"mb-4\">Saat ditutup, kembalikan fokus ke tombol pemicu. Jangan biarkan kursor keyboard hilang di tengah halaman.</p><p class=\"mb-4\">Uji buka-tutup di pratinjau editor.clincoo.buzz dengan keyboard saja. Minta AI menambah skrip fokus kecil, bukan pustaka modal baru.</p><p class=\"mb-4\">Clincoo tidak memasang perangkap fokus otomatis. Kamu yang menjaga dialog tetap bisa dipakai.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Manage Focus when a Clincoo Dialog Opens",
          desc: "A modal without a focus trap misleads the keyboard. Move focus into the dialog and restore it on close.",
          content: "<p class=\"mb-4\">Many Clincoo template overlays only toggle a CSS class. Focus stays behind the modal and Tab hits hidden links.</p><p class=\"mb-4\">When the dialog opens, move focus to the title or close button. Keep Tab inside the dialog until the user closes it.</p><p class=\"mb-4\">On close, return focus to the trigger button. Do not leave the keyboard caret lost in the page.</p><p class=\"mb-4\">Open and close the preview on editor.clincoo.buzz with the keyboard only. Ask AI for a small focus script, not a new modal library.</p><p class=\"mb-4\">Clincoo does not install a focus trap for you. You keep the dialog usable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "a11y-target-sentuh-cukup-besar",
      langs: {
        "id": {
          title: "Perbesar Target Sentuh Tombol di Clincoo",
          desc: "Ikon 24px sulit diketuk di ponsel. Beri area sentuh minimal sekitar 44 piksel.",
          content: "<p class=\"mb-4\">Navbar Clincoo sering memuat ikon kecil berjarak rapat. Pengguna ibu jari salah ketuk tautan tetangga.</p><p class=\"mb-4\">Berikan padding pada tautan dan tombol sampai area aktif mendekati 44x44 CSS piksel. Jarak antar target juga penting.</p><p class=\"mb-4\">Jangan andalkan hover untuk memperbesar target. Sentuhan tidak punya hover yang sama.</p><p class=\"mb-4\">Uji di lebar ponsel pada editor.clincoo.buzz. Minta AI menambah padding, bukan mengganti seluruh header.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Target sentuh yang longgar mengurangi salah ketuk sebelum rilis ke app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Enlarge Touch Targets on Clincoo Buttons",
          desc: "A 24px icon is hard to tap on a phone. Give controls about 44 pixels of hit area.",
          content: "<p class=\"mb-4\">Clincoo navbars often pack tiny icons tightly. A thumb then hits the neighboring link.</p><p class=\"mb-4\">Add padding until the active area is near 44x44 CSS pixels. Space between targets matters too.</p><p class=\"mb-4\">Do not rely on hover to grow the target. Touch has no matching hover.</p><p class=\"mb-4\">Test a phone width in editor.clincoo.buzz. Ask AI to add padding, not to replace the header.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Generous touch targets cut mistaps before you publish on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "a11y-pesan-status-aria-live",
      langs: {
        "id": {
          title: "Umumkan Status Form dengan aria-live di Clincoo",
          desc: "Pesan sukses yang hanya muncul visual tidak terdengar. Pakai wilayah live yang sopan.",
          content: "<p class=\"mb-4\">Setelah kirim form di situs Clincoo, teks Terkirim sering muncul tanpa pindah fokus. Pembaca layar diam.</p><p class=\"mb-4\">Tambah wadah dengan aria-live polite dan isi pesan di situ. Hindari assertive kecuali error yang harus segera diketahui.</p><p class=\"mb-4\">Jangan ganti seluruh form dengan alert JavaScript. Pengguna kehilangan konteks bidang yang salah.</p><p class=\"mb-4\">Uji dengan pembaca layar di pratinjau editor.clincoo.buzz. Minta AI menambah wilayah status, bukan menulis ulang form.</p><p class=\"mb-4\">Clincoo tidak mengumumkan status otomatis. Satu wilayah live membuat umpan balik bisa didengar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Announce Form Status with aria-live on Clincoo",
          desc: "A success line that only appears visually is silent. Use a polite live region.",
          content: "<p class=\"mb-4\">After a Clincoo form submit, Sent often appears without moving focus. Screen readers stay quiet.</p><p class=\"mb-4\">Add a container with aria-live polite and write the message there. Avoid assertive unless the error must interrupt.</p><p class=\"mb-4\">Do not replace the whole form with a JavaScript alert. Users lose the context of the invalid field.</p><p class=\"mb-4\">Test with a screen reader in the editor.clincoo.buzz preview. Ask AI to add a status region, not to rewrite the form.</p><p class=\"mb-4\">Clincoo does not announce status for you. One live region makes feedback audible.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "a11y-tabel-pakai-th",
      langs: {
        "id": {
          title: "Pakai th pada Tabel Data Clincoo",
          desc: "Tabel harga dari div atau td polos kehilangan makna. Tandai header dengan th dan scope.",
          content: "<p class=\"mb-4\">Template Clincoo kadang menggambar tabel harga dengan grid CSS. Pembaca layar mendengar tumpukan teks tanpa kolom.</p><p class=\"mb-4\">Jika datanya tabular, pakai table, thead, dan th. Tambah scope col atau scope row agar sel terkait jelas.</p><p class=\"mb-4\">Jangan pakai tabel untuk layout navbar. Landmark dan flex sudah cukup untuk susunan visual.</p><p class=\"mb-4\">Cek tabel di pratinjau editor.clincoo.buzz dengan pembaca layar. Minta AI mengubah satu blok harga, bukan seluruh halaman.</p><p class=\"mb-4\">Clincoo merender markup apa adanya. Header tabel yang benar membantu banding harga dan jadwal.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use th on Clincoo Data Tables",
          desc: "A price grid made of divs or plain td cells loses meaning. Mark headers with th and scope.",
          content: "<p class=\"mb-4\">Clincoo templates sometimes draw a price table with CSS grid. Screen readers hear a pile of text with no columns.</p><p class=\"mb-4\">If the data is tabular, use table, thead, and th. Add scope col or scope row so cells stay related.</p><p class=\"mb-4\">Do not use a table to lay out the navbar. Landmarks and flex already handle visual rows.</p><p class=\"mb-4\">Check the table in the editor.clincoo.buzz preview with a screen reader. Ask AI to convert one pricing block, not the whole page.</p><p class=\"mb-4\">Clincoo renders markup as saved. Real table headers help people compare prices and schedules.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};

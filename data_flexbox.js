// Clincoo Blog — Data kategori: flexbox
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};

window.countryDataFiles["flexbox"] = {
  names: { "id": "Flexbox", "en": "Flexbox" },
  flag: "\ud83e\uddf1",
  articles: [
    {
      id: "flexbox-pakai-gap-bukan-margin",
      langs: {
        "id": {
          title: "Pakai Gap Flexbox, Bukan Margin Antar Anak, di Clincoo",
          desc: "Margin pada anak flex membuat jarak dobel di tepi dan sulit diratakan saat wrap.",
          content: "<p class=\"mb-4\">Banyak layout Clincoo memakai margin-right pada setiap kartu flex. Baris terakhir atau item yang wrap punya jarak yang tidak konsisten.</p><p class=\"mb-4\">Ganti margin antar anak dengan gap pada wadah flex di editor.clincoo.buzz. Gap tidak menambah ruang di tepi luar.</p><p class=\"mb-4\">Jika butuh jarak ke tepi wadah, pakai padding pada induk, bukan margin pada anak pertama dan terakhir.</p><p class=\"mb-4\">Minta AI hanya mengubah satu wadah flex. Tempel aturan display:flex yang ada sebagai konteks.</p><p class=\"mb-4\">Clincoo merender CSS modern yang kamu simpan. Gap membuat pratinjau dan app.clincoo.buzz terlihat sama saat item wrap.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use Flexbox Gap, Not Child Margins, in Clincoo",
          desc: "Margins on flex children double the edge gap and look uneven when items wrap.",
          content: "<p class=\"mb-4\">Many Clincoo layouts put margin-right on every flex card. The last row or wrapped items get uneven gaps.</p><p class=\"mb-4\">Replace child margins with gap on the flex container in editor.clincoo.buzz. Gap does not add space on the outer edge.</p><p class=\"mb-4\">If you need space to the container edge, use padding on the parent, not margins on the first and last child.</p><p class=\"mb-4\">Ask AI to change only one flex container. Paste the existing display:flex rule as context.</p><p class=\"mb-4\">Clincoo renders the modern CSS you save. Gap keeps preview and app.clincoo.buzz consistent when items wrap.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "flexbox-wrap-kartu-responsif",
      langs: {
        "id": {
          title: "Aktifkan Flex Wrap agar Kartu Clincoo Tidak Meluber",
          desc: "Baris flex tanpa wrap memaksa kartu menyusut atau keluar layar di HP.",
          content: "<p class=\"mb-4\">Navbar dan deretan kartu Clincoo sering display:flex tanpa flex-wrap. Di layar sempit item dipaksa satu baris lalu teks pecah.</p><p class=\"mb-4\">Tambah flex-wrap: wrap pada wadah di editor.clincoo.buzz. Beri flex-basis yang masuk akal, misalnya 240px, agar kartu pindah baris utuh.</p><p class=\"mb-4\">Jangan mengandalkan overflow:hidden untuk menyembunyikan item yang terpotong. Pengunjung HP kehilangan tautan.</p><p class=\"mb-4\">Minta AI hanya menyentuh satu wadah. Tempel aturan flex yang ada dan sebut lebar pratinjau yang pecah.</p><p class=\"mb-4\">Clincoo menayangkan CSS apa adanya. Wrap yang disengaja menjaga kartu tetap bisa diketuk di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Turn On Flex Wrap so Clincoo Cards Do Not Overflow",
          desc: "A flex row without wrap shrinks cards or pushes them off a phone screen.",
          content: "<p class=\"mb-4\">Clincoo navbars and card rows often use display:flex with no flex-wrap. On a narrow screen items stay on one line and text breaks.</p><p class=\"mb-4\">Add flex-wrap: wrap on the container in editor.clincoo.buzz. Give a sensible flex-basis such as 240px so cards wrap whole.</p><p class=\"mb-4\">Do not hide clipped items with overflow:hidden. Phone visitors then lose links.</p><p class=\"mb-4\">Ask AI to touch one container only. Paste the existing flex rule and name the preview width that breaks.</p><p class=\"mb-4\">Clincoo ships the CSS as saved. Intentional wrap keeps cards tappable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "flexbox-min-width-nol-overflow",
      langs: {
        "id": {
          title: "Setel min-width 0 agar Item Flex Clincoo Bisa Menyusut",
          desc: "Anak flex default tidak mau lebih kecil dari konten. Teks panjang lalu mendorong layout.",
          content: "<p class=\"mb-4\">Kolom samping Clincoo dengan judul panjang atau URL sering mendorong kolom utama keluar viewport.</p><p class=\"mb-4\">Anak flex punya min-width:auto. Tambah min-width:0 dan overflow-wrap pada kolom yang boleh menyusut di editor.clincoo.buzz.</p><p class=\"mb-4\">Jangan memotong dengan overflow:hidden jika teks harus tetap terbaca. Pakai wrap atau truncate yang disengaja plus title.</p><p class=\"mb-4\">Minta AI hanya menambah min-width pada selector kolom yang pecah. Tempel HTML dua kolom sebagai konteks.</p><p class=\"mb-4\">Clincoo tidak memperbaiki overflow flex otomatis. min-width:0 adalah perbaikan kecil yang sering hilang dari template.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set min-width 0 so Clincoo Flex Items Can Shrink",
          desc: "Flex children default to not shrinking below their content. Long text then shoves the layout.",
          content: "<p class=\"mb-4\">A Clincoo sidebar with a long title or URL often pushes the main column off the viewport.</p><p class=\"mb-4\">Flex children use min-width:auto. Add min-width:0 and overflow-wrap on the column that should shrink in editor.clincoo.buzz.</p><p class=\"mb-4\">Do not clip with overflow:hidden if the text must stay readable. Use wrap or an intentional truncate plus a title attribute.</p><p class=\"mb-4\">Ask AI only to add min-width on the broken column selector. Paste the two-column HTML as context.</p><p class=\"mb-4\">Clincoo does not fix flex overflow for you. min-width:0 is a small fix templates often omit.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "flexbox-align-items-bukan-margin-vertikal",
      langs: {
        "id": {
          title: "Pakai align-items, Bukan Margin Vertikal Tebak-tebakan",
          desc: "Ikon dan teks di tombol Clincoo sering tidak satu garis karena margin manual.",
          content: "<p class=\"mb-4\">Tombol dengan ikon SVG dan label di proyek Clincoo sering terlihat oleng. Penyebabnya margin-top tebakan pada ikon.</p><p class=\"mb-4\">Jadikan tombol display:flex; align-items:center; gap kecil di editor.clincoo.buzz. Ikon dan teks lalu berbagi garis tengah.</p><p class=\"mb-4\">Untuk kartu tinggi berbeda dalam satu baris, putuskan align-items:stretch atau flex-start. Jangan campur keduanya diam-diam.</p><p class=\"mb-4\">Minta AI hanya merapikan satu komponen tombol atau baris kartu. Tempel markup yang oleng.</p><p class=\"mb-4\">Clincoo merender alignment yang kamu tulis. align-items lebih stabil daripada margin yang dihitung per ikon.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use align-items, Not Guessed Vertical Margins",
          desc: "Icons and labels on Clincoo buttons often miss the same line because of manual margins.",
          content: "<p class=\"mb-4\">Buttons with an SVG icon and a label in a Clincoo project often look crooked. The cause is a guessed margin-top on the icon.</p><p class=\"mb-4\">Make the button display:flex; align-items:center; with a small gap in editor.clincoo.buzz. Icon and text then share a midline.</p><p class=\"mb-4\">For cards of mixed height in one row, choose align-items:stretch or flex-start. Do not mix both quietly.</p><p class=\"mb-4\">Ask AI to tidy one button component or one card row only. Paste the crooked markup.</p><p class=\"mb-4\">Clincoo renders the alignment you write. align-items is more stable than a per-icon margin.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "flexbox-flex-shrink-gambar-hero",
      langs: {
        "id": {
          title: "Kunci flex-shrink Gambar Hero agar Tidak Gepeng",
          desc: "Gambar di baris flex menyusut lebih dulu daripada teks. Kunci ukuran visualnya.",
          content: "<p class=\"mb-4\">Hero Clincoo dengan foto di kiri dan teks di kanan sering meremas gambar jadi sempit saat kolom menyusut.</p><p class=\"mb-4\">Set flex-shrink:0 pada wadah gambar dan beri lebar atau max-width tetap di editor.clincoo.buzz. Biarkan blok teks yang menyusut.</p><p class=\"mb-4\">Tetap pakai img { max-width:100%; height:auto; } di dalam wadah agar tidak meluber saat wrap.</p><p class=\"mb-4\">Minta AI hanya mengubah wadah gambar. Jangan biarkan ia menulis ulang seluruh hero.</p><p class=\"mb-4\">Clincoo tidak menjaga rasio gambar di flex secara ajaib. shrink yang sadar menjaga foto tetap bisa dikenali di app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Lock flex-shrink on Hero Images so They Do Not Squash",
          desc: "Images in a flex row shrink before text. Lock their visual size.",
          content: "<p class=\"mb-4\">A Clincoo hero with a photo on the left and text on the right often squeezes the image when the column shrinks.</p><p class=\"mb-4\">Set flex-shrink:0 on the image wrapper and give a fixed width or max-width in editor.clincoo.buzz. Let the text block shrink instead.</p><p class=\"mb-4\">Still use img { max-width:100%; height:auto; } inside the wrapper so it does not overflow when the row wraps.</p><p class=\"mb-4\">Ask AI to change the image wrapper only. Do not let it rewrite the whole hero.</p><p class=\"mb-4\">Clincoo does not magically preserve image ratio in flex. Conscious shrink keeps the photo recognizable on app.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "flexbox-hindari-order-acak",
      langs: {
        "id": {
          title: "Hindari order Flexbox untuk Mengubah Urutan Baca Clincoo",
          desc: "order CSS memisahkan urutan visual dari urutan DOM dan keyboard.",
          content: "<p class=\"mb-4\">Template Clincoo kadang memakai order:-1 agar logo atau CTA pindah ke kiri di desktop. Di HP dan saat Tab, fokus meloncat.</p><p class=\"mb-4\">Ubah urutan di HTML jika semua breakpoint butuh urutan baru. Jika hanya satu lebar, pertimbangkan flex-direction:column-reverse dengan sadar.</p><p class=\"mb-4\">Uji Tab di pratinjau editor.clincoo.buzz setelah setiap order. Fokus harus mengikuti arti, bukan angka order.</p><p class=\"mb-4\">Minta AI menghapus order dan menata ulang markup satu file, bukan menambah order baru.</p><p class=\"mb-4\">Clincoo merender DOM apa adanya. Urutan sumber yang jujur lebih aman untuk akses dan SEO di blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Avoid Flexbox order to Shuffle Reading Order on Clincoo",
          desc: "CSS order splits what you see from DOM and keyboard order.",
          content: "<p class=\"mb-4\">Clincoo templates sometimes use order:-1 to move a logo or CTA left on desktop. On a phone and when tabbing, focus jumps.</p><p class=\"mb-4\">Change the HTML order if every breakpoint needs the new sequence. If only one width needs it, consider flex-direction:column-reverse on purpose.</p><p class=\"mb-4\">Test Tab in the editor.clincoo.buzz preview after every order change. Focus should follow meaning, not the order number.</p><p class=\"mb-4\">Ask AI to remove order and rearrange markup in one file, not to add more order rules.</p><p class=\"mb-4\">Clincoo renders the DOM as saved. Honest source order is safer for access and SEO on blog.clincoo.buzz.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ]
};

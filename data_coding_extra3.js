// Clinqoo Blog — artikel coding tambahan 2026-09-18 sore (merge ke data_coding)
(function(){
  var extra = [
    {
      id: "css-variabel-warna-di-satu-tempat",
      langs: {
        "id": {
          title: "Variabel CSS: Simpan Warna di Satu Tempat supaya Gampang Diganti",
          desc: "Jangan salin hex berkali-kali. Di Clinqoo, definisikan warna di :root lalu pakai var() di seluruh halaman.",
          content: "<p class=\"mb-4\">Mengganti warna merek jadi menyakitkan kalau hex yang sama tersebar di dua puluh baris. Variabel CSS menyelesaikan itu: satu nama di :root, pemakaian lewat var() di mana saja.</p><p class=\"mb-4\">Di style.css proyek Clinqoo, tulis --warna-teks, --warna-latar, dan --warna-aksen. Pakai ketiga nama itu di body, tautan, dan tombol. Ubah nilainya sekali, pratinjau langsung mengikuti.</p><p class=\"mb-4\">Jangan buat dua puluh variabel di hari pertama. Tiga sampai lima cukup. Nama yang menjelaskan fungsi lebih aman daripada nama yang menjelaskan hex.</p><p class=\"mb-4\">Kalau AI mengusulkan palet baru, minta ia hanya mengubah blok :root. File lain tetap tenang. Kebiasaan ini membuat proyek latihan terlihat rapi lebih cepat daripada mengejar kerangka CSS besar.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clinqoo Editor", sourceUrl3: "https://clinqoo.pages.dev/editor/", sourceSnippet3: "Editor kode Clinqoo"
        },
        "en": {
          title: "CSS Variables: Keep Colors in One Place so Swaps Stay Easy",
          desc: "Do not copy the same hex twenty times. In Clinqoo, define colors on :root and use var() across the page.",
          content: "<p class=\"mb-4\">Changing a brand color hurts when the same hex is scattered across twenty lines. CSS variables fix that: one name on :root, used with var() everywhere else.</p><p class=\"mb-4\">In your Clinqoo style.css, declare --warna-teks, --warna-latar, and --warna-aksen. Use those three names on the body, links, and buttons. Change the values once and preview follows.</p><p class=\"mb-4\">Do not invent twenty variables on day one. Three to five is enough. Names that describe a role beat names that describe a hex.</p><p class=\"mb-4\">If the AI suggests a new palette, ask it to edit only the :root block. The rest of the file stays calm. This habit makes a practice project look tidy faster than chasing a huge CSS framework.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clinqoo Editor", sourceUrl3: "https://clinqoo.pages.dev/editor/", sourceSnippet3: "Clinqoo code editor"
        }
      }
    },
    {
      id: "javascript-console-log-yang-terarah",
      langs: {
        "id": {
          title: "console.log yang Terarah: Jejak Nilai, Bukan Tumpukan Tebakan",
          desc: "Di Clinqoo, pasang log di titik persimpangan supaya kamu melihat data yang benar-benar mengalir.",
          content: "<p class=\"mb-4\">Menaruh console.log di setiap baris membuat konsol berisik dan tidak ada yang terbaca. Log berguna hanya kalau ia menandai titik persimpangan: setelah input dibaca, sebelum daftar diubah, sesudah fungsi selesai.</p><p class=\"mb-4\">Di editor Clinqoo, beri label pada log — misalnya 'setelah klik' — plus nilai yang kamu curigai. Buka pratinjau, ulangi aksi, baca urutan di konsol. Satu jejak yang jelas mengalahkan sepuluh log tanpa nama.</p><p class=\"mb-4\">Hapus log begitu masalah ketemu. Log yang tertinggal bisa menampilkan data yang tidak perlu saat situs sudah dideploy. Kalau masih perlu catatan, pindahkan ke komentar singkat.</p><p class=\"mb-4\">Kalau error tetap gelap, tempel output konsol lengkap ke AI bersama fungsi terkait. Jangan hanya bilang 'tidak jalan'. Jejak yang kamu tulis sendiri mempercepat bantuan.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clinqoo Editor", sourceUrl3: "https://clinqoo.pages.dev/editor/", sourceSnippet3: "Editor kode Clinqoo"
        },
        "en": {
          title: "Focused console.log: Trace Values, Not a Pile of Guesses",
          desc: "In Clinqoo, place logs at junctions so you see the data that actually flows.",
          content: "<p class=\"mb-4\">Dropping console.log on every line makes the console noisy and unreadable. A log helps only at junctions: after input is read, before a list changes, after a function finishes.</p><p class=\"mb-4\">In the Clinqoo editor, label each log — 'after click', for example — plus the value you suspect. Open preview, repeat the action, read the order in the console. One clear trail beats ten unnamed dumps.</p><p class=\"mb-4\">Remove logs once the bug is found. Leftover logs can leak needless data after deploy. If you still need a note, turn it into a short comment.</p><p class=\"mb-4\">If the error stays dark, paste the full console output to the AI with the related function. Do not just say 'it does not work'. The trail you wrote speeds up the help.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clinqoo Editor", sourceUrl3: "https://clinqoo.pages.dev/editor/", sourceSnippet3: "Clinqoo code editor"
        }
      }
    },
    {
      id: "html-gambar-lebar-dan-tinggi",
      langs: {
        "id": {
          title: "Gambar HTML: Tulis Lebar, Tinggi, dan Alt sebelum Percantik",
          desc: "Di Clinqoo, atur atribut img supaya halaman tidak melonjak saat foto selesai dimuat.",
          content: "<p class=\"mb-4\">Halaman yang melonjak saat gambar muncul membuat pengunjung kehilangan posisi gulir. Penyebabnya sering sederhana: tag img tanpa lebar dan tinggi.</p><p class=\"mb-4\">Di editor Clinqoo, setiap foto butuh src, alt, width, dan height. Alt menjelaskan isi, bukan 'gambar1'. Lebar dan tinggi menahan ruang meski berkas masih dimuat.</p><p class=\"mb-4\">Kompres file sebelum unggah. Foto kamera mentah terlalu berat untuk latihan landing page. Pratinjau di HP: gambar tidak boleh mendorong tombol keluar dari layar.</p><p class=\"mb-4\">Minta AI meninjau markup img saja, bukan seluruh CSS. Satu gambar yang stabil lebih berharga daripada galeri yang belum kamu kuasai alurnya.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clinqoo Editor", sourceUrl3: "https://clinqoo.pages.dev/editor/", sourceSnippet3: "Editor kode Clinqoo"
        },
        "en": {
          title: "HTML Images: Set Width, Height, and Alt before You Decorate",
          desc: "In Clinqoo, set img attributes so the page does not jump when a photo finishes loading.",
          content: "<p class=\"mb-4\">A page that jumps when images arrive makes visitors lose their scroll place. The cause is often simple: an img tag with no width or height.</p><p class=\"mb-4\">In the Clinqoo editor, every photo needs src, alt, width, and height. Alt describes the content, not 'gambar1'. Width and height reserve space while the file still loads.</p><p class=\"mb-4\">Compress the file before you upload. Raw camera photos are too heavy for a practice landing page. Preview on a phone: the image must not shove buttons off the screen.</p><p class=\"mb-4\">Ask the AI to review only the img markup, not the whole stylesheet. One stable image beats a gallery whose flow you do not yet own.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clinqoo Editor", sourceUrl3: "https://clinqoo.pages.dev/editor/", sourceSnippet3: "Clinqoo code editor"
        }
      }
    },
    {
      id: "css-media-query-lebar-hp",
      langs: {
        "id": {
          title: "Media Query Pertama: Ubah Tata Letak saat Lebar HP",
          desc: "Satu breakpoint di Clinqoo cukup untuk latihan: susun ulang kolom agar nyaman di layar sempit.",
          content: "<p class=\"mb-4\">Desain dua kolom yang rapi di laptop sering patah di HP. Media query adalah cara sopan meminta CSS berlaku hanya di bawah lebar tertentu.</p><p class=\"mb-4\">Di style.css Clinqoo, tulis satu @media untuk max-width sekitar 640px. Di dalamnya, ubah flex-direction menjadi column dan perkecil padding. Jangan menumpuk lima breakpoint di proyek pertama.</p><p class=\"mb-4\">Buka pratinjau, sempitkan jendela atau pilih mode HP. Cek judul, tombol, dan form. Yang harus hidup: ketukan mudah dan teks tidak terpotong.</p><p class=\"mb-4\">Kalau AI memberi salinan framework responsif utuh, tolak. Minta satu aturan untuk satu masalah. Breakpoint yang kamu uji sendiri lebih dipercaya daripada tema yang tidak kamu baca.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clinqoo Editor", sourceUrl3: "https://clinqoo.pages.dev/editor/", sourceSnippet3: "Editor kode Clinqoo"
        },
        "en": {
          title: "Your First Media Query: Change Layout at Phone Width",
          desc: "One breakpoint in Clinqoo is enough to practice: restack columns so a narrow screen stays comfortable.",
          content: "<p class=\"mb-4\">A two-column layout that looks fine on a laptop often breaks on a phone. A media query is a polite way to apply CSS only under a given width.</p><p class=\"mb-4\">In Clinqoo style.css, write one @media for a max-width around 640px. Inside it, set flex-direction to column and shrink padding. Do not stack five breakpoints on the first project.</p><p class=\"mb-4\">Open preview, narrow the window or pick phone mode. Check the title, buttons, and form. What must survive: easy taps and text that is not clipped.</p><p class=\"mb-4\">If the AI dumps a whole responsive framework, refuse. Ask for one rule for one problem. A breakpoint you tested yourself is more trustworthy than a theme you never read.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clinqoo Editor", sourceUrl3: "https://clinqoo.pages.dev/editor/", sourceSnippet3: "Clinqoo code editor"
        }
      }
    },
    {
      id: "javascript-classlist-toggle-menu",
      langs: {
        "id": {
          title: "classList.toggle: Buka Tutup Menu tanpa Menyentuh innerHTML",
          desc: "Latihan interaktif di Clinqoo: satu kelas CSS, satu klik, menu muncul atau hilang.",
          content: "<p class=\"mb-4\">Mengganti seluruh HTML menu setiap kali tombol diklik mudah merusak markup. Pola yang lebih aman: siapkan menu di HTML, sembunyikan dengan kelas, lalu nyalakan kelas itu lewat JavaScript.</p><p class=\"mb-4\">Di Clinqoo, buat tombol dan nav. CSS mengatur .terbuka agar nav terlihat. Di skrip, classList.toggle('terbuka') pada nav saat tombol diklik. Tidak perlu innerHTML.</p><p class=\"mb-4\">Uji di pratinjau HP. Pastikan tombol tetap bisa diketuk dan menu tidak menutupi isi penting. Kalau gagal, cek nama kelas yang typo — biang paling sering.</p><p class=\"mb-4\">Pola toggle ini dipakai lagi untuk accordion atau pemberitahuan. Kuasai sekali, lalu ulangi. Deploy latihan kecil itu sebagai bukti bahwa interaktivitas tidak butuh kerangka besar.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "Referensi HTML, CSS, JavaScript",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Latihan coding untuk pemula",
          source3: "Clinqoo Editor", sourceUrl3: "https://clinqoo.pages.dev/editor/", sourceSnippet3: "Editor kode Clinqoo"
        },
        "en": {
          title: "classList.toggle: Open and Close a Menu without Touching innerHTML",
          desc: "An interactivity drill in Clinqoo: one CSS class, one click, the menu appears or hides.",
          content: "<p class=\"mb-4\">Rewriting the whole menu HTML on every click is a fast way to break markup. Safer: keep the menu in HTML, hide it with a class, then flip that class with JavaScript.</p><p class=\"mb-4\">In Clinqoo, make a button and a nav. CSS makes .terbuka show the nav. In the script, classList.toggle('terbuka') on the nav when the button is clicked. No innerHTML required.</p><p class=\"mb-4\">Test in phone preview. The button must stay tappable and the menu must not cover critical content. If it fails, check a mistyped class name — the usual culprit.</p><p class=\"mb-4\">The same toggle pattern returns for an accordion or a notice. Learn it once, then reuse it. Deploy that small drill as proof that interactivity does not need a large framework.</p>",
          source: "MDN Web Docs", sourceUrl: "https://developer.mozilla.org/", sourceSnippet: "HTML, CSS, and JavaScript reference",
          source2: "freeCodeCamp", sourceUrl2: "https://www.freecodecamp.org/", sourceSnippet2: "Beginner coding practice",
          source3: "Clinqoo Editor", sourceUrl3: "https://clinqoo.pages.dev/editor/", sourceSnippet3: "Clinqoo code editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["coding"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["coding"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

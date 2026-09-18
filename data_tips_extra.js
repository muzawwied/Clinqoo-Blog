// Clinqoo Blog — artikel tips tambahan 2026-09-18 (merge ke data_tips)
(function(){
  var extra = [
    {
      id: "satu-font-satu-ukuran-tubuh",
      langs: {
        "id": {
          title: "Pakai Satu Font dan Satu Ukuran Tubuh di Seluruh Situs",
          desc: "Campuran tipografi membuat halaman Clinqoo terasa belum selesai. Samakan dulu, baru tonjolkan judul.",
          content: "<p class=\"mb-4\">Template sering membawa tiga keluarga huruf. Pengunjung membaca lebih tenang jika tubuh halaman memakai satu font dan satu ukuran dasar.</p><p class=\"mb-4\">Di style.css proyek Clinqoo, tetapkan font tubuh di elemen body. Heading boleh lebih besar, tetapi jangan ganti keluarga huruf di setiap seksi.</p><p class=\"mb-4\">Pratinjau HP: baris yang terlalu rapat atau huruf yang meloncat-loncat adalah tanda campuran belum dirapikan. Simpan, cek lagi.</p><p class=\"mb-4\">Konsistensi tipografi terasa profesional lebih cepat daripada dekorasi baru. Satu suara lebih mudah dirawat saat situs bertambah halaman.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        },
        "en": {
          title: "Use One Body Font and One Body Size across the Site",
          desc: "Mixed type makes a Clinqoo page feel unfinished. Unify first, then emphasize headings.",
          content: "<p class=\"mb-4\">Templates often ship three type families. Visitors read more calmly when the page body uses one font and one base size.</p><p class=\"mb-4\">In your Clinqoo style.css, set the body font on the body element. Headings may be larger, but do not switch families in every section.</p><p class=\"mb-4\">Preview on a phone: cramped lines or leaping letters usually mean the mix is still messy. Save and check again.</p><p class=\"mb-4\">Consistent type looks professional sooner than new decoration. One voice is easier to maintain as pages grow.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        }
      }
    },
    {
      id: "batasi-palet-warna-jadi-tiga",
      langs: {
        "id": {
          title: "Batasi Palet Warna Situs Jadi Tiga",
          desc: "Terlalu banyak warna di template Clinqoo membuat halaman terasa ramai. Pilih latar, teks, dan satu aksen.",
          content: "<p class=\"mb-4\">Template sering membawa lima atau enam warna sekaligus. Pengunjung lebih mudah membaca jika kamu membatasi palet: latar, teks tubuh, dan satu warna aksen untuk tombol.</p><p class=\"mb-4\">Di style.css proyek Clinqoo, catat tiga nilai hex di komentar paling atas. Ganti sisa warna dekorasi agar merujuk ke salah satu dari tiga itu.</p><p class=\"mb-4\">Pratinjau HP: jika setiap seksi terasa seperti merek berbeda, palet masih terlalu longgar. Simpan, cek kontras teks, baru deploy.</p><p class=\"mb-4\">Tiga warna yang konsisten terlihat lebih mahal daripada pelangi yang tidak direncanakan. Situs yang tumbuh tetap punya suara yang sama.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        },
        "en": {
          title: "Limit the Site Color Palette to Three",
          desc: "Too many colors in a Clinqoo template make the page noisy. Pick a background, text, and one accent.",
          content: "<p class=\"mb-4\">Templates often ship five or six colors at once. Visitors read more easily if you limit the palette: background, body text, and one accent for buttons.</p><p class=\"mb-4\">In your Clinqoo style.css, jot three hex values in a comment at the top. Point leftover decorative colors at one of those three.</p><p class=\"mb-4\">Preview on a phone: if every section feels like a different brand, the palette is still too loose. Save, check text contrast, then deploy.</p><p class=\"mb-4\">Three consistent colors look more expensive than an unplanned rainbow. As the site grows it still speaks with one voice.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        }
      }
    },
    {
      id: "tulis-alt-gambar-sebelum-unggah",
      langs: {
        "id": {
          title: "Tulis Teks Alt Gambar sebelum Mengunggah",
          desc: "Gambar tanpa alt di proyek Clinqoo sulit dipahami pembaca layar dan mesin pencari. Isi deskripsi singkat dulu.",
          content: "<p class=\"mb-4\">Unggah gambar ke editor Clinqoo sering berhenti di nama file. Tambahkan atribut alt yang menjelaskan isi gambar dalam satu kalimat, bukan kata kunci bertumpuk.</p><p class=\"mb-4\">Jika gambar hanya hiasan, alt kosong yang disengaja lebih jujur daripada teks acak. Jika gambar membawa informasi, tulis apa yang terlihat.</p><p class=\"mb-4\">Pratinjau, matikan gambar di pikiran: apakah halaman masih bisa dipahami dari alt dan heading? Kalau tidak, perbaiki teksnya.</p><p class=\"mb-4\">Alt yang jelas membantu aksesibilitas dan merapikan semantik HTML. Kerjakan saat unggah, jangan menunda sampai setelah deploy.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        },
        "en": {
          title: "Write Image Alt Text before You Upload",
          desc: "Images without alt in a Clinqoo project are hard for screen readers and search engines. Add a short description first.",
          content: "<p class=\"mb-4\">Uploading an image in the Clinqoo editor often stops at the filename. Add an alt attribute that describes the picture in one sentence, not a pile of keywords.</p><p class=\"mb-4\">If the image is only decoration, an intentionally empty alt is more honest than random text. If the image carries information, say what is visible.</p><p class=\"mb-4\">Preview and imagine images off: can the page still be understood from alt and headings? If not, fix the copy.</p><p class=\"mb-4\">Clear alt helps accessibility and tidy HTML semantics. Do it at upload time; do not wait until after deploy.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        }
      }
    },
    {
      id: "jaga-lebar-baris-teks-nyaman",
      langs: {
        "id": {
          title: "Jaga Lebar Baris Teks Agar Tetap Nyaman Dibaca",
          desc: "Paragraf yang merentang penuh layar desktop di Clinqoo melelahkan mata. Batasi lebar kolom tubuh.",
          content: "<p class=\"mb-4\">Teks yang bagus tetap terasa berat jika satu baris berisi terlalu banyak kata. Di CSS proyek Clinqoo, batasi max-width kolom artikel sekitar 60 sampai 75 karakter.</p><p class=\"mb-4\">Jangan biarkan container utama melebar ikut jendela lebar. Pusatkan kolom, beri padding tepi, lalu pratinjau desktop dan HP.</p><p class=\"mb-4\">Kalau judul terasa jauh dari isi, cek margin, bukan menambah ukuran font. Kenyamanan baca lebih dulu daripada dramatis.</p><p class=\"mb-4\">Situs yang nyaman dibaca membuat orang selesai sampai footer. Itu tips kecil yang terasa besar setelah tayang.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        },
        "en": {
          title: "Keep Line Length Comfortable to Read",
          desc: "Paragraphs that stretch across a Clinqoo desktop preview tire the eye. Limit the body column width.",
          content: "<p class=\"mb-4\">Good copy still feels heavy if one line holds too many words. In your Clinqoo project CSS, cap the article column max-width around 60 to 75 characters.</p><p class=\"mb-4\">Do not let the main container grow with a wide window. Center the column, add side padding, then preview desktop and phone.</p><p class=\"mb-4\">If the heading feels far from the body, check margins instead of bumping font size. Comfort beats drama.</p><p class=\"mb-4\">A comfortable site gets people to the footer. That small tip feels large once the page is live.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        }
      }
    },
    {
      id: "cek-halaman-404-sebelum-bagikan",
      langs: {
        "id": {
          title: "Cek Halaman 404 sebelum Membagikan Situs",
          desc: "Tautan rusak di situs Clinqoo sering berakhir di halaman kosong. Siapkan 404 yang ramah dan uji sekali.",
          content: "<p class=\"mb-4\">Sebelum membagikan URL publik, ketik alamat halaman yang memang tidak ada. Pengunjung harus melihat pesan ramah dan tautan pulang, bukan layar kosong.</p><p class=\"mb-4\">Di proyek Clinqoo, pastikan 404.html ada, memakai gaya yang sama, dan menunjuk ke beranda plus satu halaman penting.</p><p class=\"mb-4\">Setelah deploy, uji lagi di URL live. Cache kadang menampilkan versi lama; hard refresh sekali.</p><p class=\"mb-4\">404 yang sopan menjaga kepercayaan saat seseorang salah ketik. Lebih baik lima menit cek daripada pesan 'situsnya rusak'.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        },
        "en": {
          title: "Check the 404 Page before You Share the Site",
          desc: "Broken links on a Clinqoo site often land on a blank page. Prepare a friendly 404 and test it once.",
          content: "<p class=\"mb-4\">Before you share the public URL, type an address that truly does not exist. Visitors should see a kind message and a way home, not a blank screen.</p><p class=\"mb-4\">In the Clinqoo project, make sure 404.html exists, shares the same look, and points to home plus one important page.</p><p class=\"mb-4\">After deploy, test again on the live URL. Cache can show an old version; hard-refresh once.</p><p class=\"mb-4\">A polite 404 keeps trust when someone mistypes. Five minutes of checking beats a message that says the site is broken.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        }
      }
    },
    {
      id: "satu-cta-di-atas-lipatan",
      langs: {
        "id": {
          title: "Pasang Satu Tombol Aksi di Atas Lipatan",
          desc: "Halaman Clinqoo yang ramai di hero membuat orang ragu. Satu CTA jelas di layar pertama cukup.",
          content: "<p class=\"mb-4\">Hero template sering memuat tiga tombol sekaligus. Pilih satu aksi: hubungi, lihat karya, atau mulai proyek. Tombol lain pindah ke bawah atau footer.</p><p class=\"mb-4\">Di editor Clinqoo, pratinjau HP. Jika CTA terdorong keluar layar pertama, persingkat judul hero, bukan menambah tombol.</p><p class=\"mb-4\">Warna aksen hanya untuk tombol utama. Tautan sekunder boleh teks biasa agar mata tidak berpencar.</p><p class=\"mb-4\">Satu keputusan di atas lipatan membuat halaman terasa siap. Pengunjung tahu harus ke mana tanpa membaca seluruh seksi.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        },
        "en": {
          title: "Place One Call-to-Action above the Fold",
          desc: "A crowded Clinqoo hero makes people hesitate. One clear CTA on the first screen is enough.",
          content: "<p class=\"mb-4\">Template heroes often ship three buttons at once. Pick one action: contact, view work, or start a project. Move the others below or to the footer.</p><p class=\"mb-4\">In the Clinqoo editor, preview on a phone. If the CTA is pushed off the first screen, shorten the hero title instead of adding buttons.</p><p class=\"mb-4\">Use the accent color only on the primary button. Secondary links can stay plain text so the eye does not scatter.</p><p class=\"mb-4\">One decision above the fold makes the page feel ready. Visitors know where to go without reading every section.</p>",
          source: "Clinqoo Editor", sourceUrl: "https://clinqoo.pages.dev/editor/", sourceSnippet: "Editor Clinqoo",
          source2: "web.dev", sourceUrl2: "https://web.dev/", sourceSnippet2: "Praktik terbaik web",
          source3: "MDN Web Docs", sourceUrl3: "https://developer.mozilla.org/", sourceSnippet3: "Referensi pengembangan web"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["tips"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["tips"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

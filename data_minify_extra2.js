// Clincoo Blog — Data kategori extra: minify
if (typeof window.countryDataFiles === 'undefined') window.countryDataFiles = {};
(function () {
  var extra = [
    {
      id: "minify-pisah-css-dan-js",
      langs: {
        "id": {
          title: "Minify CSS dan JS Clincoo secara Terpisah",
          desc: "Menggabungkan CSS ke dalam berkas JS sebelum minify sering merusak string dan selector.",
          content: "<p class=\"mb-4\">AI menempel seluruh style.css ke dalam app.js lalu minify sekaligus. Tanda kutip di nilai CSS memotong string JS.</p><p class=\"mb-4\">Di editor.clincoo.buzz, minify style.css dan app.js sebagai dua langkah. Jangan campur jenis berkas.</p><p class=\"mb-4\">Setelah itu tautkan keduanya dari index.html seperti semula. Cek pratinjau hover dan klik.</p><p class=\"mb-4\">Minta AI minify satu jenis berkas per permintaan. Tempel hanya isi CSS atau hanya isi JS.</p><p class=\"mb-4\">Clincoo menayangkan berkas yang kamu simpan terpisah. app.clincoo.buzz tetap rapi tanpa string pecah.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Minify Clincoo CSS and JS as Separate Files",
          desc: "Folding CSS into a JS file before minify often breaks strings and selectors.",
          content: "<p class=\"mb-4\">AI pastes all of style.css into app.js then minifies both at once. Quotes in CSS values cut the JS string.</p><p class=\"mb-4\">In editor.clincoo.buzz, minify style.css and app.js as two steps. Do not mix file types.</p><p class=\"mb-4\">Link both from index.html as before. Check hover and clicks in preview.</p><p class=\"mb-4\">Ask AI to minify one file type per request. Paste only CSS or only JS.</p><p class=\"mb-4\">Clincoo serves the files you save separately. app.clincoo.buzz stays intact without broken strings.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "minify-jaga-komentar-lisensi",
      langs: {
        "id": {
          title: "Pertahankan Komentar Lisensi saat Minify Clincoo",
          desc: "Pustaka pihak ketiga mewajibkan pemberitahuan lisensi. Minify buta menghapus baris yang wajib ada.",
          content: "<p class=\"mb-4\">File vendor Clincoo punya header /*! MIT */. Minify biasa membuang semua komentar termasuk itu.</p><p class=\"mb-4\">Di editor.clincoo.buzz, sisakan komentar yang diawali /*! atau pindahkan lisensi ke berkas NOTICE.</p><p class=\"mb-4\">Jangan klaim kode orang lain sebagai milikmu hanya karena komentar hilang setelah minify.</p><p class=\"mb-4\">Minta AI minify tanpa menghapus komentar berawalan /*! . Tempel 20 baris pertama berkas vendor.</p><p class=\"mb-4\">Clincoo mengunggah hasil suntinganmu. Lisensi yang utuh menjaga app.clincoo.buzz tetap patuh.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Keep License Comments when Minifying Clincoo",
          desc: "Third-party libraries require license notices. Blind minify deletes lines you must keep.",
          content: "<p class=\"mb-4\">A Clincoo vendor file has a /*! MIT */ header. Ordinary minify strips every comment including that one.</p><p class=\"mb-4\">In editor.clincoo.buzz, keep comments that start with /*! or move licenses into a NOTICE file.</p><p class=\"mb-4\">Do not treat other people's code as yours just because comments vanished after minify.</p><p class=\"mb-4\">Ask AI to minify without dropping /*! comments. Paste the first 20 lines of the vendor file.</p><p class=\"mb-4\">Clincoo uploads your edited files. Intact licenses keep app.clincoo.buzz compliant.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "minify-jangan-mangle-global",
      langs: {
        "id": {
          title: "Jangan Ubah Nama Variabel Global saat Minify Clincoo",
          desc: "HTML dan skrip lain memanggil nama asli. Mangle membuat onclick dan data-attribute berhenti bekerja.",
          content: "<p class=\"mb-4\">AI menawarkan mangle agresif pada app.js Clincoo. Fungsi openCart menjadi a() sementara tombol masih memanggil openCart.</p><p class=\"mb-4\">Di editor.clincoo.buzz, minify tanpa mengganti identifier yang dipakai lintas berkas.</p><p class=\"mb-4\">Cari nama fungsi di HTML, atribut data, dan berkas JS lain sebelum mengizinkan rename.</p><p class=\"mb-4\">Minta AI minify dengan opsi keep names. Tempel daftar fungsi yang disebut dari index.html.</p><p class=\"mb-4\">Clincoo menjalankan nama yang masih ada di markup. Tanpa mangle buta, app.clincoo.buzz tetap merespons.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Do Not Mangle Global Names when Minifying Clincoo",
          desc: "HTML and other scripts call original names. Mangling stops onclick and data attributes.",
          content: "<p class=\"mb-4\">AI offers aggressive mangling on Clincoo app.js. openCart becomes a() while the button still calls openCart.</p><p class=\"mb-4\">In editor.clincoo.buzz, minify without renaming identifiers used across files.</p><p class=\"mb-4\">Search function names in HTML, data attributes, and other JS files before allowing rename.</p><p class=\"mb-4\">Ask AI to minify with keep-names. Paste the list of functions called from index.html.</p><p class=\"mb-4\">Clincoo runs the names that still exist in markup. Without blind mangling, app.clincoo.buzz still responds.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "minify-jaga-charset-utf8",
      langs: {
        "id": {
          title: "Jaga charset UTF-8 setelah Minify HTML Clincoo",
          desc: "Menghapus meta charset karena dianggap boilerplate merusak teks Indonesia di judul dan form.",
          content: "<p class=\"mb-4\">AI memotong head HTML Clincoo agar lebih pendek. Meta charset ikut hilang, huruf dan emoji pecah.</p><p class=\"mb-4\">Di editor.clincoo.buzz, minify HTML hanya membuang spasi antar tag. Biarkan meta charset di awal head.</p><p class=\"mb-4\">Uji judul, placeholder form, dan teks tombol setelah minify. Bandingkan dengan berkas sumber.</p><p class=\"mb-4\">Minta AI minify HTML tanpa menyentuh tag meta di head. Tempel bagian head lengkap.</p><p class=\"mb-4\">Clincoo menayangkan HTML yang kamu simpan. charset yang utuh menjaga app.clincoo.buzz terbaca benar.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Keep the UTF-8 charset after Minifying Clincoo HTML",
          desc: "Dropping the charset meta as boilerplate breaks Indonesian text in titles and forms.",
          content: "<p class=\"mb-4\">AI trims the Clincoo HTML head to save bytes. The charset meta disappears and letters plus emoji break.</p><p class=\"mb-4\">In editor.clincoo.buzz, minify HTML by removing inter-tag spaces only. Leave the charset meta at the start of head.</p><p class=\"mb-4\">Check titles, form placeholders, and button labels after minify. Compare with the source file.</p><p class=\"mb-4\">Ask AI to minify HTML without touching meta tags in head. Paste the full head section.</p><p class=\"mb-4\">Clincoo serves the HTML you save. An intact charset keeps app.clincoo.buzz readable.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    },
    {
      id: "minify-satu-berkas-satu-langkah",
      langs: {
        "id": {
          title: "Minify Satu Berkas Clincoo per Langkah",
          desc: "Minify lima file sekaligus membuat regresi sulit dilacak. Satu file memudahkan banding sebelum-sesudah.",
          content: "<p class=\"mb-4\">AI merangkum seluruh folder aset Clincoo jadi satu tumpukan minify. Satu selector rusak, semua halaman terdampak.</p><p class=\"mb-4\">Di editor.clincoo.buzz, minify satu berkas, simpan, lalu uji pratinjau sebelum file berikutnya.</p><p class=\"mb-4\">Jika pratinjau pecah, kamu tahu file mana yang baru berubah. Kembalikan hanya file itu.</p><p class=\"mb-4\">Minta AI minify satu path. Tempel isi file itu saja, bukan seluruh proyek.</p><p class=\"mb-4\">Clincoo menyimpan perubahan per berkas. Langkah kecil menjaga app.clincoo.buzz mudah diperbaiki.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "Referensi HTML, CSS, JS"
        },
        "en": {
          title: "Minify One Clincoo File per Step",
          desc: "Minifying five files at once makes regressions hard to trace. One file makes before-after diffs easy.",
          content: "<p class=\"mb-4\">AI dumps the whole Clincoo asset folder into one minify pass. One broken selector hits every page.</p><p class=\"mb-4\">In editor.clincoo.buzz, minify one file, save, then test preview before the next file.</p><p class=\"mb-4\">If preview breaks, you know which file just changed. Revert only that file.</p><p class=\"mb-4\">Ask AI to minify one path. Paste that file only, not the whole project.</p><p class=\"mb-4\">Clincoo saves changes per file. Small steps keep app.clincoo.buzz easy to fix.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor",
          source2: "MDN Web Docs", sourceUrl2: "https://developer.mozilla.org/", sourceSnippet2: "HTML, CSS, JS reference"
        }
      }
    }
  ];
  var cat = window.countryDataFiles["minify"];
  if (!cat) {
    window.countryDataFiles["minify"] = { names: { id: "Minify", en: "Minify" }, flag: "\ud83d\udce6", articles: extra };
  } else {
    cat.articles = (cat.articles || []).concat(extra);
  }
})();

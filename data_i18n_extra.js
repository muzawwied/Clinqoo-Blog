// Clincoo Blog — Extra i18n
(function(){
  var extra = [
    {
      id: "i18n-meta-title-desc-per-bahasa",
      langs: {
        "id": {
          title: "Tulis Title dan Deskripsi Meta Terpisah untuk ID dan EN",
          desc: "Satu meta untuk dua bahasa merusak snippet. Setiap file punya title dan description sendiri.",
          content: "<p class=\"mb-4\">AI sering menyalin meta Inggris ke index.html. Hasilnya snippet Google berbahasa campur.</p><p class=\"mb-4\">Tulis title ID maksimal sekitar 60 karakter dan description yang menjawab niat pencarian Indonesia.</p><p class=\"mb-4\">Ulangi proses yang sama untuk index.en.html. Jangan terjemahkan kata per kata jika ritme pecah.</p><p class=\"mb-4\">Cek head di editor.clincoo.buzz setelah generate. Canonical dan og:title harus ikut bahasa file itu.</p><p class=\"mb-4\">Clincoo menayangkan meta mentah. Dua snippet yang jujur lebih berguna daripada satu judul dipaksakan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Write Separate Meta Titles and Descriptions for ID and EN",
          desc: "One meta block for two languages ruins snippets. Each file needs its own title and description.",
          content: "<p class=\"mb-4\">AI often copies the English meta into index.html. Google then shows a mixed-language snippet.</p><p class=\"mb-4\">Write an ID title around 60 characters and a description that matches Indonesian search intent.</p><p class=\"mb-4\">Repeat the same work on index.en.html. Do not translate word for word if the rhythm breaks.</p><p class=\"mb-4\">Check the head in editor.clincoo.buzz after each generate. Canonical and og:title must follow that file language.</p><p class=\"mb-4\">Clincoo serves raw meta. Two honest snippets beat one forced title.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "i18n-panjang-teks-ui-berbeda",
      langs: {
        "id": {
          title: "Siapkan Tata Letak untuk Teks EN yang Lebih Panjang",
          desc: "Kalimat Inggris sering lebih panjang dari Indonesia. Tombol dan kartu tidak boleh pecah.",
          content: "<p class=\"mb-4\">Generate EN memanjangkan CTA. Tombol yang muat di ID tiba-tiba turun dua baris.</p><p class=\"mb-4\">Uji kartu harga, menu, dan formulir dengan salinan terpanjang. Pakai min-width hati-hati, bukan lebar kaku.</p><p class=\"mb-4\">Minta AI hanya menyesuaikan CSS satu komponen. Tolak rewrite seluruh layout.</p><p class=\"mb-4\">Pratinjau mobile di editor.clincoo.buzz untuk kedua file. Jika EN pecah, perbaiki wadah, bukan memotong arti.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Tata letak dua bahasa adalah uji nyata, bukan asumsi.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Design Layouts for Longer English UI Copy",
          desc: "English lines are often longer than Indonesian. Buttons and cards must not wrap badly.",
          content: "<p class=\"mb-4\">EN generation lengthens CTAs. A button that fit in ID suddenly wraps onto two lines.</p><p class=\"mb-4\">Test pricing cards, menus, and forms with the longest copy. Prefer careful min-width over a rigid width.</p><p class=\"mb-4\">Ask the AI to adjust CSS on one component only. Refuse a full layout rewrite.</p><p class=\"mb-4\">Preview mobile in editor.clincoo.buzz for both files. If EN breaks, fix the container, not the meaning.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Bilingual layout is a real test, not an assumption.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "i18n-slug-folder-sama-dua-file",
      langs: {
        "id": {
          title: "Pakai Slug Folder yang Sama untuk Pasangan ID dan EN",
          desc: "Dua bahasa satu artikel tinggal di satu folder. Jangan buat path terpisah yang sulit dijaga.",
          content: "<p class=\"mb-4\">Sebagian proyek menaruh versi Inggris di folder lain. Switcher lalu putus dan sitemap dobel.</p><p class=\"mb-4\">Satu slug, dua file: index.html dan index.en.html. Nama folder memakai id artikel yang stabil.</p><p class=\"mb-4\">Jangan terjemahkan slug ke bahasa Inggris jika tautan lama sudah tersebar. Ganti nama folder mematahkan SEO.</p><p class=\"mb-4\">Setelah simpan, buka kedua path di blog.clincoo.buzz. Status 200 dan switcher yang saling merujuk wajib.</p><p class=\"mb-4\">Clincoo menayangkan folder apa adanya. Satu slug menjaga pasangan bahasa tetap ketemu.</p>",
          source: "Clincoo",
          sourceUrl: "https://blog.clincoo.buzz/",
          sourceSnippet: "Blog resmi Clincoo"
        },
        "en": {
          title: "Keep One Folder Slug for the ID and EN Pair",
          desc: "Both languages of one article live in one folder. Do not invent a second path that is hard to maintain.",
          content: "<p class=\"mb-4\">Some projects put English in another folder. The switcher then breaks and the sitemap doubles.</p><p class=\"mb-4\">One slug, two files: index.html and index.en.html. The folder name uses a stable article id.</p><p class=\"mb-4\">Do not translate the slug into English if old links already spread. Renaming the folder breaks SEO.</p><p class=\"mb-4\">After save, open both paths on blog.clincoo.buzz. HTTP 200 and a mutual switcher are required.</p><p class=\"mb-4\">Clincoo serves folders as saved. One slug keeps the language pair findable.</p>",
          source: "Clincoo",
          sourceUrl: "https://blog.clincoo.buzz/",
          sourceSnippet: "Official Clincoo blog"
        }
      }
    },
    {
      id: "i18n-fallback-salinan-hilang",
      langs: {
        "id": {
          title: "Siapkan Fallback jika Satu Bahasa Belum Siap",
          desc: "Halaman EN kosong lebih buruk daripada tautan yang disembunyikan. Jangan tayangkan file setengah.",
          content: "<p class=\"mb-4\">AI kadang menulis index.en.html hampir kosong. Switcher tetap muncul dan pembaca masuk halaman mati.</p><p class=\"mb-4\">Jika EN belum siap, sembunyikan tautan English atau salin kerangka dengan catatan singkat, bukan paragraf acak.</p><p class=\"mb-4\">Jangan biarkan fallback otomatis menampilkan ID di dalam lang=en. Atribut bahasa harus jujur.</p><p class=\"mb-4\">Cek pratinjau di app.clincoo.buzz sebelum deploy. Dua file ada tidak berarti dua file layak baca.</p><p class=\"mb-4\">Clincoo tidak mengisi terjemahan yang hilang. Fallback yang sadar menjaga kepercayaan.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Aplikasi Clincoo"
        },
        "en": {
          title: "Plan a Fallback When One Language Is Not Ready",
          desc: "An empty EN page is worse than a hidden link. Do not ship a half-written file.",
          content: "<p class=\"mb-4\">AI sometimes writes an almost empty index.en.html. The switcher still shows and readers hit a dead page.</p><p class=\"mb-4\">If EN is not ready, hide the English link or ship a short honest note, not random paragraphs.</p><p class=\"mb-4\">Do not auto-fallback ID copy inside lang=en. The language attribute must stay true.</p><p class=\"mb-4\">Preview in app.clincoo.buzz before deploy. Two files existing does not mean two files are readable.</p><p class=\"mb-4\">Clincoo does not fill missing translations. A conscious fallback keeps trust.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Clincoo app"
        }
      }
    },
    {
      id: "i18n-uji-kedua-bahasa-sebelum-deploy",
      langs: {
        "id": {
          title: "Uji Kedua Bahasa di Pratinjau Sebelum Deploy",
          desc: "Lulus di halaman ID tidak berarti EN aman. Checklist dua file sebelum ke produksi.",
          content: "<p class=\"mb-4\">Banyak deploy Clincoo hanya membuka index.html. File EN masih memuat CTA lama atau form rusak.</p><p class=\"mb-4\">Checklist singkat: title, heading, tautan internal, form, footer, switcher. Lakukan pada kedua file.</p><p class=\"mb-4\">Tempel error konsol jika ada. Minta AI memperbaiki satu file per percakapan.</p><p class=\"mb-4\">Pratinjau di editor.clincoo.buzz lalu bandingkan side by side. Bedakan bug layout dan bug salinan.</p><p class=\"mb-4\">Clincoo menayangkan apa yang lolos simpan. Uji dua bahasa adalah gerbang deploy, bukan hiasan.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test Both Languages in Preview Before Deploy",
          desc: "Passing on the ID page does not mean EN is safe. Use a two-file checklist before production.",
          content: "<p class=\"mb-4\">Many Clincoo deploys only open index.html. The EN file still carries an old CTA or a broken form.</p><p class=\"mb-4\">Short checklist: title, heading, internal links, form, footer, switcher. Run it on both files.</p><p class=\"mb-4\">Paste the full console error if one appears. Ask the AI to fix one file per chat.</p><p class=\"mb-4\">Preview in editor.clincoo.buzz and compare side by side. Separate layout bugs from copy bugs.</p><p class=\"mb-4\">Clincoo ships what you saved. Testing both languages is a deploy gate, not decoration.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["i18n"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["i18n"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

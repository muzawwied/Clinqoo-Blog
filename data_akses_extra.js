// Clincoo Blog — artikel akses tambahan 2026-09-20
(function(){
  var extra = [
    {
      id: "akses-teks-alt-yang-bermakna",
      langs: {
        "id": {
          title: "Tulis Teks Alt yang Bermakna, Bukan Nama File",
          desc: "alt=\"IMG_4021.jpg\" tidak membantu. Jelaskan fungsi gambar di halaman Clincoo.",
          content: "<p class=\"mb-4\">Gambar hero template Clincoo sering masih membawa alt kosong atau nama file kamera. Pembaca layar lalu mendengar deretan huruf yang tidak berguna, atau melewatkan konteks yang semestinya ada.</p><p class=\"mb-4\">Teks alt menjelaskan fungsi, bukan kamera. Jika gambar adalah foto toko, tulis \"Etalase toko dari jalan raya\". Jika dekoratif murni, alt kosong yang disengaja lebih jujur daripada nama file.</p><p class=\"mb-4\">Jangan minta AI mengisi alt massal dengan frasa generik seperti \"gambar menarik\". Tinjau satu per satu di editor. Clincoo menyimpan atribut apa adanya ke rilis.</p><p class=\"mb-4\">Gambar yang juga tautan butuh alt yang menyebut tujuan tautan, bukan hanya objek foto. Pengunjung tanpa penglihatan harus tahu ke mana mereka pergi.</p><p class=\"mb-4\">Alt yang sopan adalah bagian akses, bukan SEO tempelan. Uji dengan mematikan gambar di pratinjau: halaman masih harus bisa dipahami.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Write Meaningful Alt Text, Not a Filename",
          desc: "alt=\"IMG_4021.jpg\" helps no one. Describe what the image does on the Clincoo page.",
          content: "<p class=\"mb-4\">Hero images in Clincoo templates often still carry empty alt or a camera filename. A screen reader then hears a string of letters, or skips context that should be there.</p><p class=\"mb-4\">Alt text explains function, not the camera. If the photo is the shop front, write \"Storefront from the main road\". If it is purely decorative, an intentional empty alt is more honest than a filename.</p><p class=\"mb-4\">Do not ask the AI to bulk-fill alt with generic phrases like \"nice image\". Review each one in the editor. Clincoo ships the attributes as saved.</p><p class=\"mb-4\">An image that is also a link needs alt that names the destination, not only the object in the photo. Visitors who cannot see must know where they go.</p><p class=\"mb-4\">Courteous alt is access work, not bolted-on SEO. Test by disabling images in preview: the page should still make sense.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "akses-atribut-lang-pada-html",
      langs: {
        "id": {
          title: "Pasang atribut lang yang Benar pada html",
          desc: "Pembaca layar butuh lang=\"id\" atau lang=\"en\" agar pengucapan tidak kacau.",
          content: "<p class=\"mb-4\">Banyak hasil generate AI memakai <html> tanpa lang, atau menyalin lang=en pada halaman berbahasa Indonesia. Pembaca layar lalu memakai fonetik yang salah untuk seluruh teks.</p><p class=\"mb-4\">Di file halaman Clincoo, tetapkan lang sesuai bahasa utama. Halaman ID memakai lang=\"id\". Cuplikan Inggris di tengah paragraf bisa memakai lang=\"en\" pada elemen kecil.</p><p class=\"mb-4\">Jangan biarkan AI menukar lang saat merapikan head. Satu atribut ini menentukan bagaimana teknologi bantu membaca judul, tombol, dan form.</p><p class=\"mb-4\">Cek juga halaman English jika kamu punya index.en.html. Masing-masing file harus jujur pada bahasanya, bukan menyalin head yang sama.</p><p class=\"mb-4\">Clincoo menayangkan markup mentah. lang yang benar adalah akses satu baris yang sering terlewat sebelum deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Set a Correct lang Attribute on the html Element",
          desc: "Screen readers need lang=\"id\" or lang=\"en\" so pronunciation does not break.",
          content: "<p class=\"mb-4\">Many AI outputs use <html> with no lang, or copy lang=en onto an Indonesian page. A screen reader then uses the wrong phonetics for the whole text.</p><p class=\"mb-4\">In the Clincoo page file, set lang to the main language. An ID page uses lang=\"id\". A short English phrase inside a paragraph can use lang=\"en\" on a small element.</p><p class=\"mb-4\">Do not let the AI swap lang while tidying the head. That one attribute decides how assistive tech reads titles, buttons, and forms.</p><p class=\"mb-4\">Also check the English page if you keep index.en.html. Each file should be honest about its language instead of sharing one copied head.</p><p class=\"mb-4\">Clincoo serves raw markup. A correct lang is one-line access work that is easy to miss before deploy.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "akses-skip-link-ke-konten-utama",
      langs: {
        "id": {
          title: "Tambah Skip Link ke Konten Utama",
          desc: "Pengunjung keyboard tidak harus menekan Tab melewati seluruh navigasi setiap halaman Clincoo.",
          content: "<p class=\"mb-4\">Navigasi template sering punya delapan tautan plus logo. Orang yang memakai Tab harus melewati semuanya sebelum sampai ke judul. Itu melelahkan di situs banyak halaman.</p><p class=\"mb-4\">Tambahkan tautan tersembunyi di awal body: \"Lewati ke konten\". Arahkan ke id pada <main> atau heading pertama. Saat fokus, tautan itu harus terlihat jelas.</p><p class=\"mb-4\">Jangan andalkan skrip rumit. Satu tautan dan satu id sudah cukup. Jika AI menghapusnya karena \"tidak terlihat di desain\", kembalikan.</p><p class=\"mb-4\">Uji di pratinjau desktop: Tab pertama harus menampilkan skip link, Enter meloncat ke isi. Urutan setelah itu tetap logis.</p><p class=\"mb-4\">Clincoo tidak menambah skip link otomatis. Markup yang kamu simpan menentukan apakah situs ramah keyboard atau hanya ramah mouse.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Add a Skip Link to Main Content",
          desc: "Keyboard visitors should not Tab through the whole Clincoo nav on every page.",
          content: "<p class=\"mb-4\">Template nav often has eight links plus a logo. Someone using Tab must pass all of them before the heading. That wears people out on a multi-page site.</p><p class=\"mb-4\">Add a visually hidden link at the start of the body: \"Skip to content\". Point it at an id on <main> or the first heading. When focused, the link must be clearly visible.</p><p class=\"mb-4\">Do not rely on a complex script. One link and one id are enough. If the AI deletes it because it is \"not in the design\", put it back.</p><p class=\"mb-4\">Test in desktop preview: the first Tab should show the skip link, Enter jumps to the content. Order after that stays logical.</p><p class=\"mb-4\">Clincoo does not inject a skip link for you. The markup you save decides whether the site is keyboard-friendly or only mouse-friendly.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "akses-tombol-asli-bukan-div",
      langs: {
        "id": {
          title: "Pakai Tombol Asli, Bukan Div yang Bisa Diklik",
          desc: "div onclick tidak masuk urutan Tab dan tidak punya peran tombol untuk pembaca layar.",
          content: "<p class=\"mb-4\">AI suka menulis <div class=\"btn\" onclick=\"...\"> karena mudah distyling. Elemen itu bukan tombol. Keyboard tidak mendarat di situ, Enter tidak selalu jalan, pembaca layar menyebutnya teks biasa.</p><p class=\"mb-4\">Untuk aksi di halaman yang sama, pakai <button type=\"button\">. Untuk pindah halaman, pakai <a href>. Jangan campur keduanya hanya agar terlihat seperti CTA.</p><p class=\"mb-4\">Jika kamu sudah terlanjur memakai div, ganti markup-nya di editor Clincoo. CSS kelas .btn bisa tetap menempel pada button.</p><p class=\"mb-4\">Tolak saran AI yang menambah role=button plus tabindex plus keydown hanya untuk meniru tombol asli. Itu lebih rapuh daripada elemen yang sudah ada di HTML.</p><p class=\"mb-4\">Akses tombol adalah kontrak browser. Clincoo men-deploy apa yang kamu tulis — pilih elemen yang sudah dimengerti mesin bantu.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Use a Real Button, Not a Clickable Div",
          desc: "A div with onclick is missing from Tab order and has no button role for screen readers.",
          content: "<p class=\"mb-4\">AI likes to write <div class=\"btn\" onclick=\"...\"> because it is easy to style. That element is not a button. The keyboard does not land there, Enter is unreliable, and a screen reader calls it plain text.</p><p class=\"mb-4\">For an action on the same page, use <button type=\"button\">. To move to another page, use <a href>. Do not mix them only to look like a CTA.</p><p class=\"mb-4\">If you already shipped a div, change the markup in the Clincoo editor. The .btn class can stay on a real button.</p><p class=\"mb-4\">Refuse AI advice that adds role=button plus tabindex plus keydown just to mimic a native button. That is more fragile than the element HTML already gives you.</p><p class=\"mb-4\">Button access is a browser contract. Clincoo deploys what you write — pick the element assistive tools already understand.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "akses-jangan-kunci-zoom-teks",
      langs: {
        "id": {
          title: "Jangan Kunci Zoom Teks di Viewport",
          desc: "maximum-scale=1 dan user-scalable=no memaksa orang bermata lelah membaca huruf kecil.",
          content: "<p class=\"mb-4\">Banyak template menempelkan meta viewport dengan maximum-scale=1 agar \"layout tidak pecah\". Pengunjung yang butuh huruf lebih besar lalu tidak bisa pinch atau perbesar teks sistem.</p><p class=\"mb-4\">Di proyek Clincoo, viewport cukup width=device-width dan initial-scale=1. Biarkan orang memperbesar. Perbaiki layout yang pecah, jangan kunci zoom.</p><p class=\"mb-4\">Uji dengan memperbesar teks di pratinjau atau di HP. Tombol, form, dan heading harus tetap bisa dipakai, bukan tertumpuk tanpa scroll.</p><p class=\"mb-4\">Jika AI mengembalikan user-scalable=no saat \"merapikan head\", hapus atribut itu sebelum deploy. Itu bukan rapikan — itu mengunci akses.</p><p class=\"mb-4\">Clincoo tidak menambal viewport untukmu. Meta yang kamu simpan memutuskan apakah situs bisa dibaca orang yang membutuhkan zoom.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Lock Text Zoom in the Viewport",
          desc: "maximum-scale=1 and user-scalable=no force tired eyes to read tiny type.",
          content: "<p class=\"mb-4\">Many templates paste a viewport meta with maximum-scale=1 so the \"layout does not break\". Visitors who need larger type then cannot pinch or use system text zoom.</p><p class=\"mb-4\">In a Clincoo project, viewport only needs width=device-width and initial-scale=1. Let people enlarge. Fix a breaking layout instead of locking zoom.</p><p class=\"mb-4\">Test by enlarging text in preview or on a phone. Buttons, forms, and headings should stay usable, not stack with no scroll.</p><p class=\"mb-4\">If the AI puts user-scalable=no back while \"tidying the head\", delete that attribute before deploy. That is not tidy — it locks access.</p><p class=\"mb-4\">Clincoo does not patch viewport for you. The meta you save decides whether people who need zoom can still read the site.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["akses"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["akses"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

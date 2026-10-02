// Clincoo Blog — artikel warna tambahan 2026-10-02 WIB
(function(){
  var extra = [
  {
    "id": "warna-color-mix-hover-dari-token",
    "langs": {
      "id": {
        "title": "Turunkan Warna Hover Clincoo dengan color-mix, Bukan Hex Baru",
        "desc": "Hover yang pakai hex terpisah cepat menyimpang dari token merek. color-mix menurunkan satu warna dasar.",
        "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, hover sering dapat hex kedua yang tidak ada di token. Setelah merek diganti, hover tetap warna lama.</p><p class=\"mb-4\">Pakai color-mix(in srgb, var(--brand) 88%, black) untuk hover dan campuran putih untuk latar lembut. Satu variabel mengendalikan seluruh status.</p><p class=\"mb-4\">Jangan salin hasil mix ke hex tetap. Browser yang belum mendukung color-mix bisa diberi fallback var(--brand) di baris sebelumnya.</p><p class=\"mb-4\">Minta AI mengganti satu aturan hover. Tolak palet baru. Kirim token yang ada, bukan tangkapan layar seluruh halaman.</p><p class=\"mb-4\">Uji hover di app.clincoo.buzz pada tema terang. Clincoo menayangkan warna yang kamu simpan di token.</p>",
        "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Derive Clincoo Hover Colors with color-mix, Not a New Hex",
        "desc": "A hover hex that lives apart from the brand token drifts. color-mix derives the state from one base color.",
        "content": "<p class=\"mb-4\">On editor.clincoo.buzz, hover often gets a second hex that is not in the tokens. After a brand change, hover stays the old color.</p><p class=\"mb-4\">Use color-mix(in srgb, var(--brand) 88%, black) for hover and a white mix for a soft background. One variable drives every state.</p><p class=\"mb-4\">Do not paste the mixed result as a fixed hex. Browsers without color-mix can fall back to var(--brand) on the previous line.</p><p class=\"mb-4\">Ask AI to replace one hover rule. Refuse a new palette. Send the existing token, not a screenshot of the whole page.</p><p class=\"mb-4\">Test hover on app.clincoo.buzz in the light theme. Clincoo ships the colors you save in tokens.</p>",
        "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"
      }
    }
  },
  {
    "id": "warna-opacity-induk-mengaburkan-teks",
    "langs": {
      "id": {
        "title": "Jangan Pakai opacity pada Induk, Teks Clincoo Ikut Pudar",
        "desc": "opacity pada kartu menurunkan kontras teks anak. Redupkan latar dengan saluran alpha, bukan induk.",
        "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, kartu nonaktif sering diberi opacity 0.5. Teks, ikon, dan border ikut pudar di bawah ambang kontras.</p><p class=\"mb-4\">Pisahkan latar dan teks. Set background dengan warna 8 digit atau color-mix, biarkan color teks tetap token penuh.</p><p class=\"mb-4\">Untuk elemen disabled, tetap beri kontras minimal dan aria-disabled. Jangan andalkan pudar sebagai satu-satunya isyarat.</p><p class=\"mb-4\">Minta AI memindahkan opacity dari induk ke background saja. Tolak filter brightness pada seluruh section.</p><p class=\"mb-4\">Cek rasio di app.clincoo.buzz pada status disabled. Clincoo menayangkan warna yang kamu simpan di token.</p>",
        "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Do Not Set opacity on the Parent, Clincoo Text Fades Too",
        "desc": "opacity on a card lowers child text contrast. Dim the background with an alpha channel, not the parent.",
        "content": "<p class=\"mb-4\">On editor.clincoo.buzz, inactive cards often get opacity 0.5. Text, icons, and borders fade below the contrast threshold.</p><p class=\"mb-4\">Separate background and text. Set background with an 8-digit color or color-mix, and keep the text color on a full token.</p><p class=\"mb-4\">For disabled controls, keep a minimum contrast and aria-disabled. Do not rely on fade as the only cue.</p><p class=\"mb-4\">Ask AI to move opacity from the parent onto the background only. Refuse a brightness filter on the whole section.</p><p class=\"mb-4\">Check the ratio on app.clincoo.buzz in the disabled state. Clincoo ships the colors you save in tokens.</p>",
        "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"
      }
    }
  },
  {
    "id": "warna-placeholder-kontras-input",
    "langs": {
      "id": {
        "title": "Naikkan Kontras Placeholder Input Clincoo",
        "desc": "Placeholder abu-abu muda sering gagal kontras. Naikkan token placeholder, jangan jadikan ia label.",
        "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, placeholder input sering #ccc di atas putih. Pengguna di layar terang tidak membaca petunjuk itu.</p><p class=\"mb-4\">Beri label terlihat di luar field. Placeholder hanya contoh format, dengan color token yang mendekati teks sekunder, bukan abu hampir putih.</p><p class=\"mb-4\">Jangan samakan placeholder dengan value. ::placeholder yang terlalu gelap bisa disangka sudah terisi.</p><p class=\"mb-4\">Minta AI menaikkan satu token placeholder. Tolak menghapus label. Kirim HTML input beserta kelasnya.</p><p class=\"mb-4\">Uji form di app.clincoo.buzz pada mode terang. Clincoo menayangkan warna yang kamu simpan di token.</p>",
        "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Raise Placeholder Contrast on Clincoo Inputs",
        "desc": "A light gray placeholder often fails contrast. Raise the placeholder token, and do not use it as the label.",
        "content": "<p class=\"mb-4\">On editor.clincoo.buzz, input placeholders are often #ccc on white. On a bright screen the hint is unreadable.</p><p class=\"mb-4\">Keep a visible label outside the field. Placeholder is only a format example, with a color token near secondary text, not near-white gray.</p><p class=\"mb-4\">Do not style placeholder like a value. A ::placeholder that is too dark looks filled in.</p><p class=\"mb-4\">Ask AI to raise one placeholder token. Refuse removing the label. Send the input HTML and its class.</p><p class=\"mb-4\">Test the form on app.clincoo.buzz in light mode. Clincoo ships the colors you save in tokens.</p>",
        "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"
      }
    }
  },
  {
    "id": "warna-forced-colors-pertahankan-border",
    "langs": {
      "id": {
        "title": "Pertahankan Border di Mode Forced-Colors pada UI Clincoo",
        "desc": "Mode kontras paksa Windows menghapus latar. Border CanvasText menjaga batas kartu Clincoo.",
        "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, kartu yang hanya dibedakan background hilang saat pengguna mengaktifkan forced-colors.</p><p class=\"mb-4\">Tambahkan outline atau border 1px solid CanvasText di dalam @media (forced-colors: active). Jangan kunci hex di media itu.</p><p class=\"mb-4\">Ganti background-image dekoratif dengan border. Tombol tetap perlu batas, bukan hanya isi warna merek.</p><p class=\"mb-4\">Minta AI menambah satu blok forced-colors. Tolak menghapus token untuk tema biasa. Kirim CSS kartu saja.</p><p class=\"mb-4\">Uji dengan emulasi forced-colors di DevTools, lalu cek app.clincoo.buzz. Clincoo menayangkan warna yang kamu simpan di token.</p>",
        "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Keep Borders in Forced-Colors Mode on Clincoo UI",
        "desc": "Windows forced-colors drops backgrounds. A CanvasText border keeps Clincoo card edges visible.",
        "content": "<p class=\"mb-4\">On editor.clincoo.buzz, cards separated only by background disappear when a user enables forced-colors.</p><p class=\"mb-4\">Add an outline or border 1px solid CanvasText inside @media (forced-colors: active). Do not lock a hex inside that media query.</p><p class=\"mb-4\">Replace decorative background-image with a border. Buttons still need an edge, not only a brand fill.</p><p class=\"mb-4\">Ask AI to add one forced-colors block. Refuse deleting tokens for the normal theme. Send only the card CSS.</p><p class=\"mb-4\">Test with forced-colors emulation in DevTools, then check app.clincoo.buzz. Clincoo ships the colors you save in tokens.</p>",
        "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"
      }
    }
  },
  {
    "id": "warna-selection-teks-tetap-terbaca",
    "langs": {
      "id": {
        "title": "Atur ::selection agar Teks Clincoo yang Disorot Tetap Terbaca",
        "desc": "Sorotan default bisa tabrakan dengan teks merek. ::selection butuh pasangan latar dan teks yang kontras.",
        "content": "<p class=\"mb-4\">Di editor.clincoo.buzz, pengguna menyalin cuplikan. Jika ::selection memakai latar merek dan teks tetap putih, bagian itu tidak terbaca.</p><p class=\"mb-4\">Set background-color dan color bersama pada ::selection. Pakai token, bukan hex yang hanya ada di satu halaman.</p><p class=\"mb-4\">Jangan set selection transparan. Hindari color: inherit jika latar sorotan gelap.</p><p class=\"mb-4\">Minta AI menulis satu aturan ::selection. Tolak mengubah warna body. Kirim token yang sudah ada.</p><p class=\"mb-4\">Sorot satu paragraf di app.clincoo.buzz dan baca hasilnya. Clincoo menayangkan warna yang kamu simpan di token.</p>",
        "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Editor resmi Clincoo", "source2": "Clincoo App", "source3": "Clincoo Blog"
      },
      "en": {
        "title": "Style ::selection so Highlighted Clincoo Text Stays Readable",
        "desc": "The default highlight can clash with brand text. ::selection needs a contrasting background and text pair.",
        "content": "<p class=\"mb-4\">On editor.clincoo.buzz, people copy snippets. If ::selection uses the brand background and the text stays white, that span is unreadable.</p><p class=\"mb-4\">Set background-color and color together on ::selection. Use tokens, not a hex that exists on only one page.</p><p class=\"mb-4\">Do not make the selection transparent. Avoid color: inherit when the highlight background is dark.</p><p class=\"mb-4\">Ask AI for one ::selection rule. Refuse changing the body color. Send the tokens you already have.</p><p class=\"mb-4\">Highlight one paragraph on app.clincoo.buzz and read it. Clincoo ships the colors you save in tokens.</p>",
        "source": "Clincoo", "sourceUrl": "https://editor.clincoo.buzz/", "sourceSnippet": "Official Clincoo editor", "source2": "Clincoo App", "source3": "Clincoo Blog"
      }
    }
  }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["warna"]) { setTimeout(merge, 30); return; }
    var arr = window.countryDataFiles["warna"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) { if (!have[extra[j].id]) arr.push(extra[j]); }
  }
  merge();
})();

// Clincoo Blog — Extra warna
(function(){
  var extra = [
  {
    id: "warna-cek-kontras-teks-latar",
    langs: {
      "id": {
        title: "Cek Kontras Teks dan Latar sebelum Rilis Halaman Clincoo",
        desc: "Teks abu di hero terang sering gagal rasio 4.5:1. Ukur dulu, baru deploy.",
        content: "<p class=\"mb-4\">AI sering menurunkan opacity teks agar \"lebih lembut\". Hasilnya huruf hampir hilang di layar murah dan di bawah sinar matahari.</p><p class=\"mb-4\">Ukur rasio kontras pasangan token --warna-teks dan --warna-latar. Body minimal 4.5:1; judul besar boleh 3:1.</p><p class=\"mb-4\">Jangan andalkan mata saja di monitor kalibrasi. Pakai pemilih warna di DevTools, lalu hitung ulang jika token berubah.</p><p class=\"mb-4\">Uji di pratinjau editor.clincoo.buzz pada hero, kartu, dan footer. Tempat paling sering gagal adalah teks di atas foto.</p><p class=\"mb-4\">Clincoo mengirim CSS apa adanya. Kontras yang lolos checklist membuat halaman tetap terbaca tanpa plugin ekstra.</p>",
        source: "Clincoo",
        sourceUrl: "https://editor.clincoo.buzz/",
        sourceSnippet: "Editor resmi Clincoo"
      },
      "en": {
        title: "Check Text and Background Contrast before Shipping a Clincoo Page",
        desc: "Gray text on a bright hero often fails the 4.5:1 ratio. Measure first, then deploy.",
        content: "<p class=\"mb-4\">AI often drops text opacity to look \"softer\". The letters then vanish on cheap screens and in sunlight.</p><p class=\"mb-4\">Measure contrast between --warna-teks and --warna-latar. Body copy needs 4.5:1; large titles may use 3:1.</p><p class=\"mb-4\">Do not trust your eye on a calibrated monitor. Use the DevTools color picker and recompute when a token changes.</p><p class=\"mb-4\">Test in editor.clincoo.buzz preview on the hero, cards, and footer. Text over photos fails most often.</p><p class=\"mb-4\">Clincoo ships the CSS as saved. Contrast that passes a checklist stays readable without extra plugins.</p>",
        source: "Clincoo",
        sourceUrl: "https://editor.clincoo.buzz/",
        sourceSnippet: "Official Clincoo editor"
      }
    }
  },
  {
    id: "warna-token-mode-gelap",
    langs: {
      "id": {
        title: "Siapkan Token Mode Gelap tanpa Menyalin Seluruh CSS Clincoo",
        desc: "Satu blok :root dan [data-tema=gelap] cukup. Jangan duplikasi setiap kelas komponen.",
        content: "<p class=\"mb-4\">Generate AI sering menulis dua stylesheet utuh: satu terang, satu gelap. Perbaikan tombol lalu harus dilakukan dua kali.</p><p class=\"mb-4\">Tetap pakai nama token yang sama. Di [data-tema=\"gelap\"] hanya ganti nilai --warna-latar, --warna-teks, dan --warna-batas.</p><p class=\"mb-4\">Kelas komponen tidak boleh mengandung hex. Jika gelap rusak, masalahnya di token, bukan di puluhan aturan baru.</p><p class=\"mb-4\">Alihkan atribut di pratinjau editor.clincoo.buzz. Cek form, nav, dan modal; tempat itu paling sering tertinggal hex terang.</p><p class=\"mb-4\">Clincoo menayangkan file yang kamu simpan. Satu sumber token membuat tema kedua murah dirawat.</p>",
        source: "Clincoo",
        sourceUrl: "https://app.clincoo.buzz/",
        sourceSnippet: "Aplikasi Clincoo"
      },
      "en": {
        title: "Prepare Dark-Mode Tokens without Duplicating All Clincoo CSS",
        desc: "One :root block and [data-tema=gelap] is enough. Do not clone every component class.",
        content: "<p class=\"mb-4\">AI generates often write two full stylesheets: one light, one dark. A button fix then has to happen twice.</p><p class=\"mb-4\">Keep the same token names. Under [data-tema=\"gelap\"] only swap --warna-latar, --warna-teks, and --warna-batas.</p><p class=\"mb-4\">Component classes must not contain raw hex. If dark mode breaks, the bug lives in tokens, not in dozens of new rules.</p><p class=\"mb-4\">Toggle the attribute in editor.clincoo.buzz preview. Check forms, nav, and modals; those spots keep leftover light hex.</p><p class=\"mb-4\">Clincoo ships the files you save. One token source makes a second theme cheap to maintain.</p>",
        source: "Clincoo",
        sourceUrl: "https://app.clincoo.buzz/",
        sourceSnippet: "Clincoo app"
      }
    }
  },
  {
    id: "warna-hover-fokus-dari-token",
    langs: {
      "id": {
        title: "Turunkan Hover dan Fokus dari Token yang Sama, Bukan Hue Baru",
        desc: "Tombol biru yang berubah ungu saat hover memecah merek. Gelapkan token primer saja.",
        content: "<p class=\"mb-4\">AI suka memilih \"warna hover yang lebih menarik\". Hasilnya setiap komponen punya aksen berbeda saat disentuh.</p><p class=\"mb-4\">Buat --warna-merek-hover sebagai versi lebih gelap atau lebih terang dari --warna-merek. Fokus outline memakai token batas, bukan rainbow.</p><p class=\"mb-4\">Samakan transisi singkat. Jangan animasi hue; pengunjung hanya perlu tahu elemen bisa diklik.</p><p class=\"mb-4\">Tab seluruh CTA di editor.clincoo.buzz. Jika outline hilang atau berubah jadi neon acak, token belum dipakai.</p><p class=\"mb-4\">Clincoo tidak merapikan hover otomatis. Turunan token menjaga satu merek di setiap state.</p>",
        source: "Clincoo",
        sourceUrl: "https://editor.clincoo.buzz/",
        sourceSnippet: "Editor resmi Clincoo"
      },
      "en": {
        title: "Derive Hover and Focus from the Same Token, Not a New Hue",
        desc: "A blue button that turns purple on hover splits the brand. Darken the primary token only.",
        content: "<p class=\"mb-4\">AI likes to pick a \"more exciting hover color\". Every component then wears a different accent when touched.</p><p class=\"mb-4\">Add --warna-merek-hover as a darker or lighter version of --warna-merek. Focus outlines should use the border token, not a rainbow.</p><p class=\"mb-4\">Keep the transition short. Do not animate hue; visitors only need to know the control is clickable.</p><p class=\"mb-4\">Tab through every CTA in editor.clincoo.buzz. If the outline vanishes or turns random neon, tokens are unused.</p><p class=\"mb-4\">Clincoo does not tidy hover for you. Token descendants keep one brand in every state.</p>",
        source: "Clincoo",
        sourceUrl: "https://editor.clincoo.buzz/",
        sourceSnippet: "Official Clincoo editor"
      }
    }
  },
  {
    id: "warna-status-sukses-bahaya-netral",
    langs: {
      "id": {
        title: "Pisahkan Token Sukses, Bahaya, dan Netral di Form Clincoo",
        desc: "Satu merah untuk error, tombol hapus, dan diskon membuat arti kabur. Beri tiga token jelas.",
        content: "<p class=\"mb-4\">File hasil generate sering memakai satu #EF4444 untuk peringatan stok, validasi email, dan tombol keluar. Pengunjung tidak tahu mana yang mendesak.</p><p class=\"mb-4\">Tetapkan --warna-sukses, --warna-bahaya, --warna-netral. Pasangkan masing-masing dengan ikon dan teks, bukan warna saja.</p><p class=\"mb-4\">Jangan pakai token bahaya untuk aksen dekoratif. Hemat warna keras agar benar-benar terasa peringatan.</p><p class=\"mb-4\">Isi form palsu di editor.clincoo.buzz: sukses kirim, error field, dan konfirmasi hapus. Tiga state harus beda tanpa saling meniru.</p><p class=\"mb-4\">Clincoo menampilkan token yang kamu tulis. Status yang rapi mengurangi tiket \"kenapa tombolnya merah?\".</p>",
        source: "Clincoo",
        sourceUrl: "https://blog.clincoo.buzz/",
        sourceSnippet: "Clincoo Blog"
      },
      "en": {
        title: "Split Success, Danger, and Neutral Tokens in Clincoo Forms",
        desc: "One red for errors, delete buttons, and discounts blurs meaning. Give three clear tokens.",
        content: "<p class=\"mb-4\">Generated files often reuse #EF4444 for stock warnings, email validation, and the sign-out button. Visitors cannot tell what is urgent.</p><p class=\"mb-4\">Declare --warna-sukses, --warna-bahaya, and --warna-netral. Pair each with an icon and text, not color alone.</p><p class=\"mb-4\">Do not spend the danger token on decoration. Keep the harsh color scarce so a warning still feels like a warning.</p><p class=\"mb-4\">Fill a dummy form in editor.clincoo.buzz: send success, field error, and delete confirm. The three states must differ without copying each other.</p><p class=\"mb-4\">Clincoo renders the tokens you write. Clear status colors cut tickets that ask why the button is red.</p>",
        source: "Clincoo",
        sourceUrl: "https://blog.clincoo.buzz/",
        sourceSnippet: "Clincoo Blog"
      }
    }
  },
  {
    id: "warna-uji-di-tiga-latar",
    langs: {
      "id": {
        title: "Uji Palet Clincoo di Tiga Latar: Hero, Kartu, dan Footer",
        desc: "Warna yang lolos di body putih bisa gagal di footer gelap atau foto hero.",
        content: "<p class=\"mb-4\">Banyak palet hanya diuji di kanvas kosong. Begitu dipasang ke template, tautan di footer dan badge di kartu tiba-tiba hilang.</p><p class=\"mb-4\">Buat tiga permukaan token: --latar-hero, --latar-kartu, --latar-footer. Cek teks, tautan, dan tombol di masing-masing.</p><p class=\"mb-4\">Jika foto hero menelan judul, tambah overlay token, jangan ganti hue judul secara acak.</p><p class=\"mb-4\">Scroll penuh di pratinjau editor.clincoo.buzz. Catat pasangan yang gagal, lalu perbaiki token permukaan, bukan setiap kelas.</p><p class=\"mb-4\">Clincoo mempublikasikan halaman utuh. Palet yang lolos tiga latar jarang kaget di produksi.</p>",
        source: "Clincoo",
        sourceUrl: "https://app.clincoo.buzz/",
        sourceSnippet: "Aplikasi Clincoo"
      },
      "en": {
        title: "Test the Clincoo Palette on Three Surfaces: Hero, Card, and Footer",
        desc: "A color that passes on a white body can fail on a dark footer or a hero photo.",
        content: "<p class=\"mb-4\">Many palettes are only tested on a blank canvas. Once dropped into a template, footer links and card badges vanish.</p><p class=\"mb-4\">Create three surface tokens: --latar-hero, --latar-kartu, --latar-footer. Check text, links, and buttons on each.</p><p class=\"mb-4\">If a hero photo swallows the title, add an overlay token; do not randomly retint the heading.</p><p class=\"mb-4\">Scroll the full preview in editor.clincoo.buzz. Note failing pairs, then fix surface tokens instead of every class.</p><p class=\"mb-4\">Clincoo publishes the whole page. A palette that survives three surfaces rarely surprises in production.</p>",
        source: "Clincoo",
        sourceUrl: "https://app.clincoo.buzz/",
        sourceSnippet: "Clincoo app"
      }
    }
  }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["warna"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["warna"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

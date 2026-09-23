// Clincoo Blog — artikel darkmode tambahan 2026-09-23 WIB
(function(){
  var extra = [
    {
      id: "darkmode-scrollbar-caret",
      langs: {
        "id": {
          title: "Sesuaikan Scrollbar dan Caret pada Tema Gelap Clincoo",
          desc: "Bilah gulir terang dan karet teks putih di latar gelap merusak kesan. Atur warna sistem tipis.",
          content: "<p class=\"mb-4\">Template Clincoo yang baru digelapkan sering menyisakan scrollbar sistem yang abu terang. Karet input juga bisa hilang di latar #111.</p><p class=\"mb-4\">Di editor.clincoo.buzz tambah color-scheme: dark pada html saat kelas tema gelap aktif. Browser lalu menyesuaikan scrollbar, form native, dan caret.</p><p class=\"mb-4\">Jika perlu lebih presisi, set caret-color ke token --fg. Hindari mewarnai scrollbar dengan aturan vendor panjang kecuali satu komponen.</p><p class=\"mb-4\">Uji di pratinjau sempit dan desktop. Minta AI satu aturan color-scheme, bukan rewrite seluruh CSS.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Color-scheme yang benar membuat krom browser ikut tema tanpa aset baru.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Tune Scrollbar and Caret Colors on a Clincoo Dark Theme",
          desc: "A bright scrollbar and a white caret on dark backgrounds break the look. Set thin system colors.",
          content: "<p class=\"mb-4\">A freshly darkened Clincoo template often leaves a light system scrollbar. The input caret can also vanish on a #111 background.</p><p class=\"mb-4\">In editor.clincoo.buzz add color-scheme: dark on html when the dark theme class is on. The browser then matches scrollbar, native forms, and caret.</p><p class=\"mb-4\">If you need more precision, set caret-color to the --fg token. Avoid long vendor scrollbar rules except on one component.</p><p class=\"mb-4\">Test in a narrow and desktop preview. Ask the AI for one color-scheme rule, not a full CSS rewrite.</p><p class=\"mb-4\">Clincoo ships the CSS you save. The right color-scheme lets browser chrome follow the theme without new assets.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "darkmode-bayangan-dan-border",
      langs: {
        "id": {
          title: "Ringankan Bayangan dan Border pada Latar Gelap Clincoo",
          desc: "box-shadow hitam di kartu gelap tidak terlihat. Ganti dengan border tipis atau glow rendah.",
          content: "<p class=\"mb-4\">Kartu Clincoo yang memakai shadow 0 8px 24px rgba(0,0,0,.2) hampir hilang di hero gelap. Bukan bug — hitam di atas hitam tidak memisahkan lapisan.</p><p class=\"mb-4\">Di editor.clincoo.buzz buat token --elev: 1px solid var(--border) untuk mode gelap. Pakai glow rgba putih 6–8 persen hanya pada modal.</p><p class=\"mb-4\">Jangan biarkan AI menyalin shadow mode terang. Satu komponen dulu: kartu harga, lalu header.</p><p class=\"mb-4\">Cek kontras tepi terhadap --bg. Border #333 di #111 sering gagal 3:1 untuk UI besar.</p><p class=\"mb-4\">Clincoo menayangkan CSS apa adanya. Elevasi yang disesuaikan tema menjaga hierarki tanpa drop-shadow palsu.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Soften Shadows and Borders on Clincoo Dark Backgrounds",
          desc: "Black box-shadow on dark cards disappears. Swap it for a thin border or a low glow.",
          content: "<p class=\"mb-4\">Clincoo cards using shadow 0 8px 24px rgba(0,0,0,.2) nearly vanish on a dark hero. That is not a bug — black on black does not separate layers.</p><p class=\"mb-4\">In editor.clincoo.buzz make a --elev token: 1px solid var(--border) for dark mode. Use a 6–8 percent white glow only on modals.</p><p class=\"mb-4\">Do not let the AI copy light-mode shadows. One component first: the pricing card, then the header.</p><p class=\"mb-4\">Check edge contrast against --bg. A #333 border on #111 often fails 3:1 for large UI.</p><p class=\"mb-4\">Clincoo ships the CSS as saved. Theme-aware elevation keeps hierarchy without fake drop shadows.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "darkmode-meta-theme-color",
      langs: {
        "id": {
          title: "Setel meta theme-color agar Chrome Mobile Ikut Tema Gelap Clincoo",
          desc: "Bar status HP tetap putih saat halaman gelap. Perbarui theme-color saat toggle berubah.",
          content: "<p class=\"mb-4\">Pengunjung membuka situs Clincoo di Chrome Android. Konten sudah gelap, tetapi bilah alamat tetap putih menyilaukan.</p><p class=\"mb-4\">Tambah meta name=theme-color dengan isi token --bg. Saat sakelar tema dipencet, tulis ulang content meta itu dari skrip kecil.</p><p class=\"mb-4\">Jangan hardcode #000. Samakan dengan latar header agar transisi tidak loncat.</p><p class=\"mb-4\">Uji di pratinjau mobile editor.clincoo.buzz lalu di perangkat. Minta AI hanya cuplikan meta plus tiga baris JS.</p><p class=\"mb-4\">Clincoo menayangkan HTML yang kamu simpan. theme-color yang sinkron membuat kerangka browser terasa satu dengan merek.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set meta theme-color so Mobile Chrome Follows Clincoo Dark Theme",
          desc: "The phone status bar stays white on a dark page. Update theme-color when the toggle changes.",
          content: "<p class=\"mb-4\">A visitor opens a Clincoo site in Chrome for Android. The content is already dark, but the address bar stays glaring white.</p><p class=\"mb-4\">Add a meta name=theme-color whose value is the --bg token. When the theme toggle is pressed, rewrite that meta content from a tiny script.</p><p class=\"mb-4\">Do not hardcode #000. Match the header background so the transition does not jump.</p><p class=\"mb-4\">Test in the editor.clincoo.buzz mobile preview and on a device. Ask the AI only for the meta snippet plus three lines of JS.</p><p class=\"mb-4\">Clincoo ships the HTML you save. A synced theme-color makes browser chrome feel part of the brand.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "darkmode-kode-dan-pre",
      langs: {
        "id": {
          title: "Rapikan Blok Kode pre pada Tema Gelap Clincoo",
          desc: "Highlight terang di pre membuat kode silau. Pakai palet token dan overflow yang sama.",
          content: "<p class=\"mb-4\">Artikel Clincoo yang memuat snippet sering mewarisi latar pre #f5f5f5. Di mode gelap kotak itu menyala seperti lampu sorot.</p><p class=\"mb-4\">Di editor.clincoo.buzz map warna syntax ke token: --code-bg, --code-fg, --code-accent. Hindari tema highlight pihak ketiga utuh.</p><p class=\"mb-4\">Pastikan pre overflow-x auto dan tab-size 2 agar baris panjang tidak merusak grid.</p><p class=\"mb-4\">Minta AI ganti satu berkas CSS kode. Tolak plugin highlighter baru jika situs statis sudah cukup.</p><p class=\"mb-4\">Clincoo menayangkan CSS yang kamu simpan. Blok kode yang senyap menjaga fokus pada penjelasan, bukan pada tema editor.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Clean up pre Code Blocks on a Clincoo Dark Theme",
          desc: "Bright highlighting inside pre makes code glare. Use token palettes and the same overflow.",
          content: "<p class=\"mb-4\">Clincoo articles with snippets often inherit a #f5f5f5 pre background. In dark mode that box lights up like a spotlight.</p><p class=\"mb-4\">In editor.clincoo.buzz map syntax colors to tokens: --code-bg, --code-fg, --code-accent. Avoid a full third-party highlight theme.</p><p class=\"mb-4\">Keep pre overflow-x auto and tab-size 2 so long lines do not break the grid.</p><p class=\"mb-4\">Ask the AI to change one code CSS file. Refuse a new highlighter plugin if a static site is enough.</p><p class=\"mb-4\">Clincoo ships the CSS you save. Quiet code blocks keep focus on the explanation, not on an editor theme.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "darkmode-uji-flash-dan-fouc",
      langs: {
        "id": {
          title: "Uji Flash Putih FOUC sebelum Deploy Tema Gelap Clincoo",
          desc: "Kelas gelap yang dipasang terlambat membuat kedip. Pasang skrip inline di head dan uji reload.",
          content: "<p class=\"mb-4\">Sakelar Clincoo yang membaca localStorage di akhir body membiarkan CSS terang sempat terpasang. Pengunjung melihat kedip putih setiap kunjungan.</p><p class=\"mb-4\">Pasang skrip inline di head: baca kunci tema, set class pada documentElement sebelum stylesheet utama selesai.</p><p class=\"mb-4\">Jangan unggah skrip eksternal hanya untuk dua baris ini. FOUC terjadi karena jaringan, bukan karena logika.</p><p class=\"mb-4\">Reload keras di editor.clincoo.buzz dan di tab penyamaran. Jika masih kedip, kelas dipasang terlalu lambat.</p><p class=\"mb-4\">Clincoo menayangkan berkas apa adanya. Urutan head yang benar menghilangkan flash tanpa menunda konten.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Test White FOUC Flash before Deploying a Clincoo Dark Theme",
          desc: "A late dark class causes a blink. Put an inline script in head and test a reload.",
          content: "<p class=\"mb-4\">A Clincoo toggle that reads localStorage at the end of body lets light CSS paint first. Visitors see a white blink on every visit.</p><p class=\"mb-4\">Put an inline script in head: read the theme key, set the class on documentElement before the main stylesheet finishes.</p><p class=\"mb-4\">Do not upload an external script for these two lines. FOUC happens because of the network, not the logic.</p><p class=\"mb-4\">Hard-reload in editor.clincoo.buzz and in a private tab. If it still flashes, the class is applied too late.</p><p class=\"mb-4\">Clincoo ships files as saved. The right head order removes the flash without delaying content.</p>",
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["darkmode"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["darkmode"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

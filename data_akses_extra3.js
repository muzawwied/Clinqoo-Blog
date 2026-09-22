// Clincoo Blog — artikel akses tambahan 2026-09-22 WIB (extra3)
(function(){
  var extra = [
    {
      id: "akses-judul-dokumen-unik-per-halaman",
      langs: {
        "id": {
          title: "Beri Judul Dokumen Unik per Halaman Clincoo",
          desc: "Title yang sama di semua tab membingungkan. Setiap halaman butuh nama yang membedakan isi.",
          content: "<p class=\"mb-4\">Banyak proyek Clincoo memakai satu title untuk beranda, harga, dan kontak. Tab browser tidak bisa dibedakan.</p><p class=\"mb-4\">Tulis title yang menyebut halaman: Harga paket — Nama usaha, bukan hanya nama merek.</p><p class=\"mb-4\">Samakan title dengan h1 secara makna, bukan salin kata per kata jika h1 terlalu panjang.</p><p class=\"mb-4\">Jika AI menempel title generik, ganti sebelum pratinjau di editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo merender title yang ada di file HTML. Judul unik adalah akses untuk pengguna banyak tab.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Give Each Clincoo Page a Unique Document Title",
          desc: "The same title on every tab confuses people. Each page needs a name that matches its content.",
          content: "<p class=\"mb-4\">Many Clincoo projects reuse one title for home, pricing, and contact. Browser tabs cannot be told apart.</p><p class=\"mb-4\">Write a title that names the page: Pricing plans — Business name, not only the brand.</p><p class=\"mb-4\">Match the title to the h1 in meaning; do not copy every word if the h1 is long.</p><p class=\"mb-4\">If the AI pastes a generic title, change it before preview in editor.clincoo.buzz.</p><p class=\"mb-4\">Clincoo renders the title in the HTML file. Unique titles are access work for people with many tabs.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "akses-landmark-main-dan-header",
      langs: {
        "id": {
          title: "Pasang Landmark header dan main di Halaman Clincoo",
          desc: "Tanpa landmark, pembaca layar harus menelusuri seluruh markup. Bungkus wilayah halaman dengan tag semantik.",
          content: "<p class=\"mb-4\">Div bersarang tanpa header, nav, dan main membuat lompat wilayah mustahil.</p><p class=\"mb-4\">Bungkus merek dan menu dalam header. Bungkus isi unik halaman dalam main. Satu main per dokumen.</p><p class=\"mb-4\">Jangan duplikasi main di template AI. Cek di pratinjau editor.clincoo.buzz dengan inspector.</p><p class=\"mb-4\">Footer terpisah dari main. Landmark yang overlap membingungkan daftar wilayah.</p><p class=\"mb-4\">Clincoo menayangkan tag yang kamu simpan. Landmark adalah peta untuk teknologi bantu.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Add header and main Landmarks on a Clincoo Page",
          desc: "Without landmarks, a screen reader walks the whole markup. Wrap page regions with semantic tags.",
          content: "<p class=\"mb-4\">Nested divs with no header, nav, or main make region jumping impossible.</p><p class=\"mb-4\">Wrap the brand and menu in header. Wrap unique page content in main. One main per document.</p><p class=\"mb-4\">Do not let an AI template duplicate main. Check preview in editor.clincoo.buzz with the inspector.</p><p class=\"mb-4\">Keep footer outside main. Overlapping landmarks confuse the region list.</p><p class=\"mb-4\">Clincoo ships the tags you save. Landmarks are a map for assistive tech.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "akses-caption-atau-transkrip-media",
      langs: {
        "id": {
          title: "Sediakan Caption atau Transkrip untuk Media di Clincoo",
          desc: "Video tanpa teks gagal bagi pengunjung tuli atau di ruang sunyi. Tambah track atau ringkasan tertulis.",
          content: "<p class=\"mb-4\">Embed video promo tanpa caption membuat pesan hilang saat suara dimatikan.</p><p class=\"mb-4\">Pakai elemen track VTT atau tulis transkrip singkat di bawah pemutar.</p><p class=\"mb-4\">Jangan andalkan auto-caption platform saja tanpa cek ejaan nama merek.</p><p class=\"mb-4\">Jika AI menempel iframe, sisakan ruang untuk teks alternatif di halaman yang sama.</p><p class=\"mb-4\">Clincoo menayangkan markup media yang kamu simpan. Caption adalah akses, bukan pelengkap opsional.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Provide Captions or a Transcript for Media on Clincoo",
          desc: "Video without text fails Deaf visitors and quiet rooms. Add a track or a short written summary.",
          content: "<p class=\"mb-4\">A promo embed with no captions drops the message when sound is off.</p><p class=\"mb-4\">Use a VTT track element or put a short transcript under the player.</p><p class=\"mb-4\">Do not trust platform auto-captions alone without checking brand names.</p><p class=\"mb-4\">If the AI pastes an iframe, leave room for alternative text on the same page.</p><p class=\"mb-4\">Clincoo ships the media markup you save. Captions are access, not an optional extra.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "akses-waktu-sesi-bisa-diperpanjang",
      langs: {
        "id": {
          title: "Beri Peringatan sebelum Sesi Form Clincoo Habis",
          desc: "Timeout diam-diam menghapus isian. Peringatkan dan izinkan perpanjang waktu jika form panjang.",
          content: "<p class=\"mb-4\">Form multi langkah yang reset tanpa kabar merugikan pengguna yang membaca pelan.</p><p class=\"mb-4\">Jika ada batas waktu, tampilkan sisa menit dan tombol perpanjang sebelum data hilang.</p><p class=\"mb-4\">Jangan andalkan sessionStorage tanpa uji tab baru. Simpan draf ke file proyek jika perlu.</p><p class=\"mb-4\">Tolak skrip AI yang reload halaman diam-diam saat idle.</p><p class=\"mb-4\">Clincoo tidak memaksa timeout form statis. Batas waktu adalah keputusanmu, akses adalah tanggung jawabmu.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Warn before a Clincoo Form Session Times Out",
          desc: "A silent timeout wipes what people typed. Warn them and let them extend time on a long form.",
          content: "<p class=\"mb-4\">A multi-step form that resets with no notice hurts people who read slowly.</p><p class=\"mb-4\">If a time limit exists, show remaining minutes and an extend button before data vanishes.</p><p class=\"mb-4\">Do not rely on sessionStorage without testing a new tab. Save a draft into the project files if needed.</p><p class=\"mb-4\">Refuse AI scripts that silently reload the page on idle.</p><p class=\"mb-4\">Clincoo does not force a timeout on a static form. Time limits are your choice; access is your duty.</p>",
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

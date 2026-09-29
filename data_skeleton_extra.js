// Clincoo Blog — Data extra kategori: skeleton

(function(){
  var extra = [
    {
      id: "skeleton-baris-teks-bukan-blok-penuh",
      langs: {
        "id": {
          title: 'Gambar Skeleton Teks Clincoo sebagai Baris, Bukan Blok Penuh',
          desc: 'Blok abu-abu selebar kartu tidak menyerupai paragraf. Beberapa baris pendek lebih jujur.',
          content: '<p class="mb-4">Judul dan deskripsi proyek di Clincoo diganti satu kotak tebal. Mata tidak menemukan hierarki.</p><p class="mb-4">Di editor.clincoo.buzz, buat dua atau tiga strip dengan lebar berbeda: judul 60%, baris 90%, baris 40%.</p><p class="mb-4">Tinggi strip ikuti line-height teks asli. Jangan membuat tulang setinggi kartu penuh.</p><p class="mb-4">Minta AI mengubah satu kartu jadi tiga baris placeholder. Tempel markup itu saja.</p><p class="mb-4">Baris skeleton di app.clincoo.buzz meniru ritme baca, bukan sekadar kotak menunggu.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Draw Clincoo Text Skeletons as Lines, Not Full Blocks',
          desc: 'A gray block the width of a card does not look like a paragraph. A few short lines feel honest.',
          content: '<p class="mb-4">Project titles and descriptions in Clincoo become one thick box. The eye finds no hierarchy.</p><p class="mb-4">In editor.clincoo.buzz, make two or three strips of different widths: title 60%, line 90%, line 40%.</p><p class="mb-4">Strip height should follow the real line-height. Do not make bones as tall as the whole card.</p><p class="mb-4">Ask AI to turn one card into three placeholder lines. Paste that markup only.</p><p class="mb-4">Line skeletons on app.clincoo.buzz mimic reading rhythm instead of a waiting box.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "skeleton-jaga-rasio-gambar",
      langs: {
        "id": {
          title: 'Jaga Rasio Aspek Gambar di Skeleton Clincoo',
          desc: 'Placeholder persegi lalu foto 16:9 membuat layout loncat saat data datang.',
          content: '<p class="mb-4">Thumbnail proyek Clincoo memakai kotak 1:1 saat memuat, lalu foto landscape mendorong teks ke bawah.</p><p class="mb-4">Ukur rasio gambar asli. Set padding-bottom atau aspect-ratio yang sama pada tulang di editor.clincoo.buzz.</p><p class="mb-4">Jangan pakai tinggi tetap piksel jika kartu harus melebar di layar besar.</p><p class="mb-4">Minta AI menambahkan aspect-ratio pada wrapper gambar skeleton. Tempel satu aturan CSS.</p><p class="mb-4">Rasio yang stabil di app.clincoo.buzz mencegah lompatan saat fetch selesai.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Keep Image Aspect Ratio in Clincoo Skeletons',
          desc: 'A square placeholder then a 16:9 photo makes the layout jump when data arrives.',
          content: '<p class="mb-4">Clincoo project thumbnails use a 1:1 box while loading, then a landscape photo pushes text down.</p><p class="mb-4">Measure the real image ratio. Set the same padding-bottom or aspect-ratio on the bone in editor.clincoo.buzz.</p><p class="mb-4">Do not use a fixed pixel height if the card must widen on large screens.</p><p class="mb-4">Ask AI to add aspect-ratio on the skeleton image wrapper. Paste one CSS rule.</p><p class="mb-4">A stable ratio on app.clincoo.buzz stops jumps when the fetch finishes.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "skeleton-baris-tabel-bukan-kartu",
      langs: {
        "id": {
          title: 'Skeleton Tabel Clincoo Pakai Baris, Bukan Kartu',
          desc: 'Daftar data berbentuk tabel jangan diisi placeholder kartu. Tiru kolom.',
          content: '<p class="mb-4">Halaman log Clincoo adalah tabel, tetapi skeleton menampilkan tiga kartu. Pengunjung kaget saat layout berganti.</p><p class="mb-4">Gambar tiga sampai lima baris tipis dengan sel seukuran kolom di editor.clincoo.buzz.</p><p class="mb-4">Sembunyikan header palsu yang lebih lebar dari header asli. Alignment kolom harus sama.</p><p class="mb-4">Minta AI menyalin thead lalu membuat tbody berisi div abu-abu per sel. Tempel tbody itu.</p><p class="mb-4">Skeleton tabel di app.clincoo.buzz menjaga mata tetap pada kisi yang sama.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Use Row Skeletons for Clincoo Tables, Not Cards',
          desc: 'Do not fill a table-shaped list with card placeholders. Mirror the columns.',
          content: '<p class="mb-4">A Clincoo log page is a table, but the skeleton shows three cards. Visitors jolt when the layout swaps.</p><p class="mb-4">Draw three to five thin rows with cells the size of the columns in editor.clincoo.buzz.</p><p class="mb-4">Hide a fake header that is wider than the real one. Column alignment must match.</p><p class="mb-4">Ask AI to copy the thead and build a tbody of gray divs per cell. Paste that tbody.</p><p class="mb-4">Table skeletons on app.clincoo.buzz keep the eye on the same grid.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "skeleton-field-form-saat-prefetch",
      langs: {
        "id": {
          title: 'Skeleton Field Form Clincoo saat Prefetch Skema',
          desc: 'Form yang muncul tiba-tiba setelah fetch skema membuat pengguna klik kosong.',
          content: '<p class="mb-4">Editor Clincoo menunggu skema field dari API. Layar kosong lalu form lengkap muncul sekaligus.</p><p class="mb-4">Tampilkan label pendek dan kotak input setinggi field asli di editor.clincoo.buzz sementara prefetch jalan.</p><p class="mb-4">Jangan aktifkan tombol kirim pada skeleton. Pengguna tidak boleh submit tulang.</p><p class="mb-4">Minta AI membuat tiga field palsu plus satu tombol disabled. Tempel markup form kosong.</p><p class="mb-4">Skeleton form di app.clincoo.buzz menahan tangan sampai input sungguhan siap.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Skeleton Clincoo Form Fields while Prefetching Schema',
          desc: 'A form that pops in after a schema fetch makes people click empty space.',
          content: '<p class="mb-4">The Clincoo editor waits for field schema from an API. A blank screen then a full form appears at once.</p><p class="mb-4">Show short labels and input boxes the height of real fields in editor.clincoo.buzz while prefetch runs.</p><p class="mb-4">Do not enable the submit button on the skeleton. Users must not submit bones.</p><p class="mb-4">Ask AI for three fake fields plus one disabled button. Paste the empty form markup.</p><p class="mb-4">Form skeletons on app.clincoo.buzz hold the hand until real inputs are ready.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "skeleton-hormati-prefers-reduced-motion",
      langs: {
        "id": {
          title: 'Matikan Pulse Skeleton Clincoo saat Reduced Motion',
          desc: 'Animasi shimmer bisa memicu mual. Hormati prefers-reduced-motion.',
          content: '<p class="mb-4">Kartu skeleton Clincoo berkilau tanpa henti. Pengguna dengan vestibular sensitif merasa goyah.</p><p class="mb-4">Bungkus animasi pulse di @media (prefers-reduced-motion: no-preference) di editor.clincoo.buzz.</p><p class="mb-4">Jika pengguna meminta gerak berkurang, tampilkan warna statis. Jangan ganti dengan spinner.</p><p class="mb-4">Minta AI menambah satu media query di CSS skeleton. Jangan menulis ulang komponen.</p><p class="mb-4">Skeleton tenang di app.clincoo.buzz tetap informatif tanpa memaksa gerak.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Turn Off Clincoo Skeleton Pulse when Motion Is Reduced',
          desc: 'A shimmer animation can trigger nausea. Honor prefers-reduced-motion.',
          content: '<p class="mb-4">Clincoo skeleton cards shimmer without pause. Users with sensitive vestibular systems feel unsteady.</p><p class="mb-4">Wrap the pulse animation in @media (prefers-reduced-motion: no-preference) in editor.clincoo.buzz.</p><p class="mb-4">If the user asks for reduced motion, show a static color. Do not swap in a spinner.</p><p class="mb-4">Ask AI to add one media query in the skeleton CSS. Do not rewrite the component.</p><p class="mb-4">A calm skeleton on app.clincoo.buzz stays informative without forcing motion.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["skeleton"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["skeleton"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

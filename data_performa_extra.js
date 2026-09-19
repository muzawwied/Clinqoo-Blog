// Clincoo Blog — artikel performa tambahan 2026-09-19
(function(){
  var extra = [
    {
      id: "performa-gambar-hero-lebar-maksimal",
      langs: {
        "id": {
          title: "Batasi Lebar dan Berat Gambar Hero di Clincoo",
          desc: "Hero yang lebih lebar dari layar hanya membuang byte. Sesuaikan ukuran sebelum unggah.",
          content: "<p class=\"mb-4\">Gambar hero sering jadi file terberat di workspace Clincoo. Foto 4000 piksel terlihat tajam di laptop, tetapi di HP hanya memakai sepertiga datanya.</p><p class=\"mb-4\">Sebelum unggah, kecilkan lebar ke 1600 piksel atau kurang jika situs satu kolom. Simpan sebagai JPEG atau WebP dengan kualitas sedang, bukan PNG foto.</p><p class=\"mb-4\">Tulis atribut width dan height di HTML supaya layout tidak meloncat saat gambar tiba. AI bisa menambahkan atribut; kamu yang memastikan angkanya sesuai file.</p><p class=\"mb-4\">Setelah deploy subdomain, hard-refresh di jaringan seluler. Jika hero masih lama muncul, kompres lagi — jangan tambah skrip lazy-load yang belum kamu uji.</p><p class=\"mb-4\">Clincoo menayangkan file apa adanya. Hero yang ringan adalah sopan santun ke pengunjung, bukan fitur tersembunyi di tombol rilis.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Cap Hero Image Width and Weight in Clincoo",
          desc: "A hero wider than the screen wastes bytes. Resize before you upload.",
          content: "<p class=\"mb-4\">The hero image is often the heaviest file in a Clincoo workspace. A 4000-pixel photo looks sharp on a laptop, but a phone uses only a fraction of that data.</p><p class=\"mb-4\">Before upload, shrink width to 1600 pixels or less for a single-column site. Save as JPEG or WebP at medium quality, not a photographic PNG.</p><p class=\"mb-4\">Set width and height attributes in HTML so the layout does not jump when the image arrives. The AI can add attributes; you make sure the numbers match the file.</p><p class=\"mb-4\">After the subdomain deploy, hard-refresh on a cellular network. If the hero is still slow, compress again — do not add a lazy-load script you have not tested.</p><p class=\"mb-4\">Clincoo serves the files as they are. A light hero is courtesy to visitors, not a hidden feature of the release button.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "performa-font-lokal-satu-keluarga",
      langs: {
        "id": {
          title: "Satu Keluarga Font Lokal, Bukan Tiga CDN",
          desc: "Setiap permintaan font menunda teks. Simpan woff2 di workspace Clincoo dan batasi variasi.",
          content: "<p class=\"mb-4\">Template sering memanggil Google Fonts untuk heading, tubuh, dan ikon. Tiga keluarga berarti banyak file, plus koneksi ke domain lain sebelum huruf tampil.</p><p class=\"mb-4\">Pilih satu keluarga. Unggah file woff2 yang dipakai ke folder aset workspace. Hubungkan lewat @font-face di CSS proyek, bukan lewat tautan CDN.</p><p class=\"mb-4\">Batasi ketebalan: regular dan semibold biasanya cukup. Italic dan extra-bold yang tidak muncul di halaman hanya menambah unduhan.</p><p class=\"mb-4\">Jika AI menempelkan link fonts.googleapis.com lagi, hapus. Uji pratinjau offline singkat: teks harus tetap terbaca dengan fallback sistem.</p><p class=\"mb-4\">Huruf yang sudah ada di proyek Clincoo tidak bergantung pada jaringan pihak ketiga saat pengunjung membuka subdomain.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "One Local Font Family, Not Three CDNs",
          desc: "Each font request delays text. Keep woff2 in the Clincoo workspace and limit variants.",
          content: "<p class=\"mb-4\">Templates often pull Google Fonts for heading, body, and icons. Three families mean many files, plus another domain before letters appear.</p><p class=\"mb-4\">Pick one family. Upload the woff2 files you actually use into the workspace assets folder. Wire them with @font-face in project CSS, not a CDN link.</p><p class=\"mb-4\">Limit weights: regular and semibold are usually enough. Italic and extra-bold that never appear on the page only add downloads.</p><p class=\"mb-4\">If the AI pastes a fonts.googleapis.com link again, delete it. Smoke-test preview offline: text should still read with a system fallback.</p><p class=\"mb-4\">Type that already lives in the Clincoo project does not depend on a third-party network when a visitor opens the subdomain.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "performa-hindari-video-autoplay-hero",
      langs: {
        "id": {
          title: "Jangan Autoplay Video di Hero Situs Clincoo",
          desc: "Video latar yang mutar sendiri menghabiskan kuota dan CPU. Poster statis lebih cepat terbaca.",
          content: "<p class=\"mb-4\">Video hero terasa mewah di Wi-Fi kantor. Di kuota HP, file puluhan megabyte menunda kalimat pertama dan memanaskan perangkat.</p><p class=\"mb-4\">Ganti latar gerak dengan gambar diam yang sudah dikompres. Jika video wajib, jangan autoplay dan jangan muted-loop tersembunyi di belakang teks.</p><p class=\"mb-4\">Kalau tetap memakai video, beri poster, preload none, dan kontrol yang jelas. Pengunjung yang ingin menonton yang menekan putar.</p><p class=\"mb-4\">Tolak saran AI yang menambahkan pustaka pemutar hanya untuk satu klip. Tag HTML cukup; pustaka menambah skrip yang menunda LCP.</p><p class=\"mb-4\">Subdomain Clincoo menayangkan apa yang kamu tulis. Hero yang diam dan tajam lebih sering selesai dibaca daripada hero yang sibuk bergerak.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Do Not Autoplay Video in a Clincoo Hero",
          desc: "A background video that starts itself burns data and CPU. A still poster is faster to read.",
          content: "<p class=\"mb-4\">A hero video feels luxurious on office Wi-Fi. On a phone plan, a tens-of-megabytes file delays the first sentence and heats the device.</p><p class=\"mb-4\">Replace a moving background with a compressed still. If video is required, do not autoplay and do not hide a muted loop behind the text.</p><p class=\"mb-4\">If you still use video, give it a poster, preload none, and obvious controls. Visitors who want to watch are the ones who press play.</p><p class=\"mb-4\">Refuse an AI suggestion that adds a player library for one clip. The HTML tag is enough; a library adds script that delays LCP.</p><p class=\"mb-4\">A Clincoo subdomain serves what you wrote. A still, sharp hero is finished more often than a hero that will not sit still.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "performa-hard-refresh-setelah-rilis",
      langs: {
        "id": {
          title: "Hard Refresh setelah Rilis Subdomain Clincoo",
          desc: "Cache editor dan cache browser berbohong. Uji URL publik dengan muat ulang paksa di HP.",
          content: "<p class=\"mb-4\">Pratinjau di editor Clincoo memakai berkas yang baru saja kamu simpan. Setelah deploy, pengunjung dan kadang kamu sendiri masih melihat CSS lama.</p><p class=\"mb-4\">Buka URL subdomain di jendela penyamaran atau hard-refresh (muat ulang paksa). Cek apakah gambar hero dan stylesheet versi baru yang tampil.</p><p class=\"mb-4\">Uji di HP dengan data seluler, bukan hanya Wi-Fi yang sama dengan laptop. Cache dan kecepatan beda; layout yang sudah cepat di kantor bisa lambat di jalan.</p><p class=\"mb-4\">Jika aset lama membandel, pastikan nama file berubah saat kamu mengganti gambar besar, atau bersihkan cache perangkat uji.</p><p class=\"mb-4\">Performa yang diukur hanya di dalam editor bukan performa. Clincoo sudah merilis file; kamu yang wajib melihatnya seperti pengunjung.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Hard-Refresh after a Clincoo Subdomain Release",
          desc: "Editor cache and browser cache lie. Test the public URL with a forced reload on a phone.",
          content: "<p class=\"mb-4\">Clincoo editor preview uses the files you just saved. After deploy, visitors and sometimes you still see old CSS.</p><p class=\"mb-4\">Open the subdomain URL in a private window or hard-refresh. Check that the new hero image and stylesheet are the ones on screen.</p><p class=\"mb-4\">Test on a phone with cellular data, not only the same Wi-Fi as the laptop. Cache and speed differ; a layout that felt fast in the office can crawl on the road.</p><p class=\"mb-4\">If old assets stick, change the filename when you replace a large image, or clear cache on the test device.</p><p class=\"mb-4\">Performance measured only inside the editor is not performance. Clincoo already shipped the files; you must see them as a visitor does.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    },
    {
      id: "performa-lcp-teks-terlihat-dulu",
      langs: {
        "id": {
          title: "Utamakan Teks Terlihat sebelum Gambar Besar",
          desc: "LCP yang tertahan gambar hero membuat halaman terasa kosong. Susun HTML agar judul muncul dulu.",
          content: "<p class=\"mb-4\">Largest Contentful Paint sering jatuh pada foto hero. Jika foto lambat, pengunjung menatap area kosong padahal judul sudah ada di HTML.</p><p class=\"mb-4\">Susun markup: judul dan satu kalimat CTA di awal aliran dokumen, gambar menyusul. Hindari hero yang tingginya memaksa teks terdorong jauh ke bawah tanpa fallback warna.</p><p class=\"mb-4\">Pasang warna latar di wadah hero supaya blok itu tidak putih polos sambil menunggu gambar. Itu murah dan langsung terlihat.</p><p class=\"mb-4\">Jangan minta AI menyisipkan framework pengukur Core Web Vitals ke situs statis kecil. Rasakan dulu di HP; alat berat justru menambah skrip.</p><p class=\"mb-4\">Clincoo tidak mengubah urutan render. Kalimat yang ada di atas file adalah kalimat yang bisa dibaca lebih dulu — jaga itu.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Platform resmi Clincoo"
        },
        "en": {
          title: "Let Text Paint before the Large Image",
          desc: "LCP stuck on a hero image makes the page feel empty. Structure HTML so the title appears first.",
          content: "<p class=\"mb-4\">Largest Contentful Paint often lands on the hero photo. If the photo is slow, visitors stare at empty space even though the title is already in the HTML.</p><p class=\"mb-4\">Order the markup: title and one CTA sentence early in the document flow, image after. Avoid a hero so tall that text is pushed far down with no color fallback.</p><p class=\"mb-4\">Set a background color on the hero container so the block is not plain white while the image waits. That is cheap and visible at once.</p><p class=\"mb-4\">Do not ask the AI to inject a Core Web Vitals measuring framework into a small static site. Feel it on a phone first; heavy tooling adds script.</p><p class=\"mb-4\">Clincoo does not change render order. The sentence that sits higher in the file is the sentence that can be read sooner — keep it that way.</p>",
          source: "Clincoo",
          sourceUrl: "https://app.clincoo.buzz/",
          sourceSnippet: "Official Clincoo platform"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["performa"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["performa"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

// Clincoo Blog — artikel gambar tambahan 2026-09-21
(function(){
  var extra = [
    {
      id: "gambar-aspect-ratio-cadangan-slot",
      langs: {
        "id": {
          title: "Pasang aspect-ratio pada Slot Gambar Clincoo sebelum File Tiba",
          desc: "Kotak gambar tanpa rasio membuat kartu mengempis lalu mengembang. Kunci rasio di CSS.",
          content: '<p class="mb-4">Kartu layanan Clincoo sering mengempis sampai foto selesai diunduh. Pengunjung melihat teks meloncat saat slot terisi.</p><p class="mb-4">Tambahkan aspect-ratio pada pembungkus img, misalnya 16/9 untuk hero dan 1/1 untuk thumbnail. Biarkan img width 100% dan height auto.</p><p class="mb-4">Cek di editor.clincoo.buzz dengan throttling lambat. Tinggi kartu harus tetap sejak frame pertama.</p><p class="mb-4">Minta AI hanya menambah properti pada satu kelas kartu. Tolak rewrite layout seluruh halaman.</p><p class="mb-4">Clincoo menayangkan CSS yang kamu simpan. Rasio cadangan adalah pekerjaan markup, bukan fitur hosting.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Set aspect-ratio on Clincoo Image Slots before the File Arrives",
          desc: "An image box without a ratio collapses then expands. Lock the ratio in CSS.",
          content: '<p class="mb-4">Clincoo service cards often collapse until the photo finishes downloading. Visitors see text jump when the slot fills.</p><p class="mb-4">Add aspect-ratio on the img wrapper, for example 16/9 for a hero and 1/1 for a thumbnail. Keep the img at width 100% and height auto.</p><p class="mb-4">Check editor.clincoo.buzz with slow throttling. Card height should stay stable from the first frame.</p><p class="mb-4">Ask the AI to add the property on one card class only. Refuse a full-page layout rewrite.</p><p class="mb-4">Clincoo serves the CSS you save. A reserve ratio is markup work, not a hosting feature.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "gambar-decode-async-hindari-jank",
      langs: {
        "id": {
          title: "Pakai decoding async pada Foto Besar Clincoo agar Scroll Tidak Macet",
          desc: "Dekode JPEG besar di thread utama membuat gulir tersendat. Tandai decoding async.",
          content: '<p class="mb-4">Galeri Clincoo dengan foto 2000px bisa membuat gulir terasa patah saat browser mendekode JPEG.</p><p class="mb-4">Tambahkan decoding="async" pada img di bawah lipat. Biarkan hero utama tanpa async jika ia LCP.</p><p class="mb-4">Uji gulir di pratinjau ponsel editor.clincoo.buzz. Frame tidak boleh berhenti saat foto masuk viewport.</p><p class="mb-4">Minta AI menambahkan atribut pada satu galeri. Tolak skrip decoder pihak ketiga.</p><p class="mb-4">Clincoo tidak mengubah cara browser mendekode. Atribut ini adalah petunjuk yang kamu tulis di HTML.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Use decoding async on Large Clincoo Photos so Scroll Does Not Jank",
          desc: "Decoding a large JPEG on the main thread stalls scroll. Mark decoding async.",
          content: '<p class="mb-4">A Clincoo gallery of 2000px photos can make scroll feel broken while the browser decodes JPEG data.</p><p class="mb-4">Add decoding="async" on below-the-fold img tags. Leave the main hero without async if it is LCP.</p><p class="mb-4">Test scrolling in the phone preview on editor.clincoo.buzz. Frames should not freeze when a photo enters the viewport.</p><p class="mb-4">Ask the AI to add the attribute on one gallery. Refuse a third-party decoder script.</p><p class="mb-4">Clincoo does not change how the browser decodes. This attribute is a hint you write in HTML.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "gambar-kompres-sebelum-unggah",
      langs: {
        "id": {
          title: "Kompres Gambar Clincoo di Komputer sebelum Unggah ke Editor",
          desc: "Mengandalkan plugin setelah unggah membuat hasil tidak bisa diulang. Kecilkan file dulu.",
          content: '<p class="mb-4">Foto kamera 8 MB yang langsung masuk folder publik Clincoo memperlambat setiap kunjungan ulang.</p><p class="mb-4">Kompres di komputer: potong ke ukuran tampil, ekspor WebP atau JPEG berkualitas 75–85, lalu unggah satu file.</p><p class="mb-4">Bandingkan ukuran di tab Network editor.clincoo.buzz. Target hero di bawah 200 KB kecuali foto penuh layar yang disengaja.</p><p class="mb-4">Minta AI hanya menukar path src. Tolak layanan kompresi yang menyimpan salinan di domain lain.</p><p class="mb-4">Clincoo menyimpan berkas apa adanya. Kompresi adalah langkah sebelum editor, bukan setelah rilis.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Compress Clincoo Images on Your Computer before Uploading to the Editor",
          desc: "Relying on a plugin after upload makes results hard to repeat. Shrink the file first.",
          content: '<p class="mb-4">An 8 MB camera photo dropped into a public Clincoo folder slows every repeat visit.</p><p class="mb-4">Compress on your computer: crop to display size, export WebP or JPEG at quality 75–85, then upload one file.</p><p class="mb-4">Compare sizes in the Network tab of editor.clincoo.buzz. Aim for a hero under 200 KB unless a full-bleed photo is intentional.</p><p class="mb-4">Ask the AI only to swap the src path. Refuse a compression service that stores copies on another domain.</p><p class="mb-4">Clincoo stores files as they are. Compression is a step before the editor, not after release.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "gambar-dekoratif-lewat-css-background",
      langs: {
        "id": {
          title: "Pindahkan Gambar Dekoratif Clincoo ke background-image CSS",
          desc: "Ornamen yang tidak punya makna jangan jadi img. Background CSS menjaga semantik dan alt.",
          content: '<p class="mb-4">Pola gelombang atau blob warna di hero Clincoo sering masuk sebagai img tanpa alt. Pembaca layar menyebutnya tanpa guna.</p><p class="mb-4">Pindahkan ornamen ke background-image pada section. Biarkan img hanya untuk foto yang memang dikonten.</p><p class="mb-4">Cek kontras teks di atas latar. Jika teks sulit dibaca, tambahkan overlay, jangan biarkan foto mentah menimpa huruf.</p><p class="mb-4">Minta AI memindahkan satu ornamen ke CSS. Tolak menambahkan role="presentation" pada puluhan img sekaligus.</p><p class="mb-4">Clincoo menayangkan HTML yang kamu tulis. Semantik gambar adalah pilihan penulis halaman.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: "Move Decorative Clincoo Images to a CSS background-image",
          desc: "Ornaments with no meaning should not be img tags. CSS backgrounds keep semantics and alt clean.",
          content: '<p class="mb-4">Wave patterns or color blobs on a Clincoo hero often ship as img tags with no alt. Screen readers announce them for no reason.</p><p class="mb-4">Move ornaments to background-image on the section. Keep img for photos that are actual content.</p><p class="mb-4">Check text contrast over the background. If type is hard to read, add an overlay; do not leave a raw photo under the letters.</p><p class="mb-4">Ask the AI to move one ornament into CSS. Refuse adding role="presentation" to dozens of img tags at once.</p><p class="mb-4">Clincoo serves the HTML you write. Image semantics are a page-author choice.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    }
  ];
  function merge(){
    if (!window.countryDataFiles || !window.countryDataFiles["gambar"]) {
      setTimeout(merge, 30);
      return;
    }
    var arr = window.countryDataFiles["gambar"].articles;
    var have = {};
    for (var i = 0; i < arr.length; i++) have[arr[i].id] = true;
    for (var j = 0; j < extra.length; j++) {
      if (!have[extra[j].id]) arr.push(extra[j]);
    }
  }
  merge();
})();

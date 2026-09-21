// Clincoo Blog — artikel gambar tambahan 2026-09-21
(function(){
  var extra = [
    {
      id: "gambar-loading-lazy-bawah-lipat",
      langs: {
        "id": {
          title: 'Pasang loading lazy pada Gambar Clincoo di Bawah Lipat',
          desc: 'Hero harus cepat; galeri di bawah lipat boleh menunggu. loading=lazy membagi prioritas unduhan.',
          content: '<p class="mb-4">Semua gambar Clincoo yang memakai src tanpa loading akan bersaing dengan hero saat halaman pertama dibuka.</p><p class="mb-4">Tulis loading="lazy" hanya pada img di bawah lipat: galeri, logo klien, dan ikon dekoratif. Biarkan hero tanpa lazy agar LCP tidak mundur.</p><p class="mb-4">Uji di editor.clincoo.buzz: scroll pelan sambil membuka Network. File galeri harus muncul setelah hero selesai.</p><p class="mb-4">Minta AI menambah atribut loading pada satu galeri. Tolak skrip lazy-load pihak ketiga yang menimpa src.</p><p class="mb-4">Clincoo memuat file sesuai HTML. Lazy adalah petunjuk browser, bukan plugin yang harus kamu instal.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Add loading lazy to Below-the-Fold Clincoo Images',
          desc: 'The hero must be fast; a gallery below the fold can wait. loading=lazy splits download priority.',
          content: '<p class="mb-4">Every Clincoo image with a bare src competes with the hero the moment the first page opens.</p><p class="mb-4">Write loading="lazy" only on below-the-fold img tags: galleries, client logos, and decorative icons. Leave the hero without lazy so LCP does not slip.</p><p class="mb-4">Test in editor.clincoo.buzz: scroll slowly with the Network tab open. Gallery files should appear after the hero finishes.</p><p class="mb-4">Ask the AI to add the loading attribute on one gallery. Refuse a third-party lazy-load script that rewrites src.</p><p class="mb-4">Clincoo loads files as written in HTML. Lazy is a browser hint, not a plugin you must install.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "gambar-teks-alt-yang-bermakna",
      langs: {
        "id": {
          title: 'Tulis Teks Alt Bermakna pada Gambar Clincoo',
          desc: 'Alt kosong atau nama file tidak membantu pembaca layar. Deskripsikan fungsi gambar dalam satu kalimat.',
          content: '<p class="mb-4">Img di halaman Clincoo sering memakai alt="image" atau alt="IMG_2048". Pembaca layar lalu mendengar sampah, bukan konteks.</p><p class="mb-4">Tulis alt yang menjelaskan fungsi: "Tim Clincoo di meja editor" lebih berguna daripada "foto1". Hiasan murni boleh alt="".</p><p class="mb-4">Cek di pratinjau: matikan gambar atau pakai pembaca layar. Teks harus tetap masuk akal tanpa file visual.</p><p class="mb-4">Minta AI mengisi alt pada satu halaman produk. Tolak generate alt massal yang mengulang judul H1.</p><p class="mb-4">Clincoo menayangkan atribut yang kamu ketik. Alt yang jujur adalah akses, bukan isian SEO kosong.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Write Meaningful Alt Text on Clincoo Images',
          desc: 'Empty alt or a filename does not help a screen reader. Describe the image job in one sentence.',
          content: '<p class="mb-4">Clincoo img tags often ship alt="image" or alt="IMG_2048". A screen reader then hears junk, not context.</p><p class="mb-4">Write alt that states the job: "Clincoo team at the editor desk" is more useful than "photo1". Pure decoration may use alt="".</p><p class="mb-4">Check in preview: disable images or use a screen reader. The page must still make sense without the visual file.</p><p class="mb-4">Ask the AI to fill alt on one product page. Refuse mass-generated alt that repeats the H1 title.</p><p class="mb-4">Clincoo serves the attributes you type. Honest alt is access, not empty SEO filler.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "gambar-object-fit-thumbnail-rapi",
      langs: {
        "id": {
          title: 'Rapikan Thumbnail Clincoo dengan object-fit cover',
          desc: 'Foto rasio campur merusak grid. object-fit:cover memotong isi tanpa meregangkan file.',
          content: '<p class="mb-4">Kartu produk Clincoo terlihat tinggi-rendah jika setiap foto memakai rasio berbeda tanpa aturan potong.</p><p class="mb-4">Tetapkan lebar-tinggi kotak thumbnail di CSS, lalu object-fit:cover dan object-position:center pada img.</p><p class="mb-4">Uji grid di pratinjau desktop dan ponsel. Tidak ada kartu yang merentangkan foto atau menyisakan garis kosong.</p><p class="mb-4">Minta AI menambah object-fit pada satu kelas thumbnail. Tolak crop ulang semua file sumber.</p><p class="mb-4">Clincoo tidak memotong gambar di server. object-fit adalah cara CSS merapikan kotak yang sudah kamu ukur.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Tidy Clincoo Thumbnails with object-fit cover',
          desc: 'Mixed-ratio photos break a grid. object-fit:cover crops the contents without stretching the file.',
          content: '<p class="mb-4">Clincoo product cards look uneven when every photo uses a different ratio and no crop rule exists.</p><p class="mb-4">Set the thumbnail box width and height in CSS, then object-fit:cover and object-position:center on the img.</p><p class="mb-4">Test the grid in desktop and phone preview. No card should stretch a photo or leave an empty stripe.</p><p class="mb-4">Ask the AI to add object-fit on one thumbnail class. Refuse recropping every source file.</p><p class="mb-4">Clincoo does not crop images on the server. object-fit is how CSS tidies a box you already sized.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "gambar-fetchpriority-tinggi-untuk-hero",
      langs: {
        "id": {
          title: 'Naikkan Prioritas Hero Clincoo dengan fetchpriority high',
          desc: 'Hero yang tertunda merusak LCP. fetchpriority=high memberi sinyal unduhan lebih dulu.',
          content: '<p class="mb-4">Browser membagi bandwidth ke banyak file Clincoo. Hero tanpa prioritas bisa kalah dari CSS atau ikon kecil.</p><p class="mb-4">Tambahkan fetchpriority="high" hanya pada satu img hero di atas lipat. Jangan tempel atribut yang sama ke galeri.</p><p class="mb-4">Buka Lighthouse atau tab Network di editor.clincoo.buzz. Urutan unduhan hero harus naik dibanding aset dekoratif.</p><p class="mb-4">Minta AI menambah fetchpriority pada satu hero. Tolak menandai semua gambar sebagai high.</p><p class="mb-4">Clincoo tidak mengatur antrian jaringan sendiri. Satu sinyal prioritas cukup jika file hero sudah ringan.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Raise Clincoo Hero Priority with fetchpriority high',
          desc: 'A delayed hero hurts LCP. fetchpriority=high tells the browser to fetch it first.',
          content: '<p class="mb-4">The browser splits bandwidth across many Clincoo files. A hero without priority can lose to CSS or tiny icons.</p><p class="mb-4">Add fetchpriority="high" only on one above-the-fold hero img. Do not stamp the same attribute on a gallery.</p><p class="mb-4">Open Lighthouse or the Network tab in editor.clincoo.buzz. The hero download should rise above decorative assets.</p><p class="mb-4">Ask the AI to add fetchpriority on one hero. Refuse marking every image as high.</p><p class="mb-4">Clincoo does not manage the network queue itself. One priority signal is enough when the hero file is already light.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Official Clincoo editor"
        }
      }
    },
    {
      id: "gambar-ikon-svg-bukan-png",
      langs: {
        "id": {
          title: 'Ganti Ikon PNG Clincoo ke SVG agar Tajam di Semua Layar',
          desc: 'Ikon 24px dalam PNG pecah di layar padat. SVG tetap tajam dan biasanya lebih kecil.',
          content: '<p class="mb-4">Menu Clincoo yang memakai PNG 24px terlihat buram di layar 3x. Membesar file raster tidak memperbaiki ketajaman vektor.</p><p class="mb-4">Ekspor ikon sederhana sebagai SVG inline atau file .svg. Jaga fill mengikuti currentColor agar tema tetap satu.</p><p class="mb-4">Cek zoom 200% di pratinjau. Garis ikon harus tetap halus tanpa halo piksel.</p><p class="mb-4">Minta AI menukar satu set ikon navigasi ke SVG. Tolak paket ikon font yang menambah request dan FOIT.</p><p class="mb-4">Clincoo menayangkan file yang kamu unggah. SVG adalah pilihan format, bukan fitur tersembunyi editor.</p>',
          source: "Clincoo",
          sourceUrl: "https://editor.clincoo.buzz/",
          sourceSnippet: "Editor resmi Clincoo"
        },
        "en": {
          title: 'Swap Clincoo PNG Icons to SVG so They Stay Sharp',
          desc: 'A 24px PNG icon breaks on a dense screen. SVG stays sharp and is usually smaller.',
          content: '<p class="mb-4">A Clincoo menu that ships 24px PNGs looks soft on a 3x display. Upsizing a raster file does not restore vector sharpness.</p><p class="mb-4">Export simple icons as inline SVG or a .svg file. Keep fill on currentColor so the theme stays consistent.</p><p class="mb-4">Check 200% zoom in preview. Icon strokes should stay smooth with no pixel halo.</p><p class="mb-4">Ask the AI to swap one navigation icon set to SVG. Refuse an icon font pack that adds a request and FOIT.</p><p class="mb-4">Clincoo serves the files you upload. SVG is a format choice, not a hidden editor feature.</p>',
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
